import React, {useState} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { mapValues } from 'lodash';

import { RichText } from '@wordpress/block-editor';
import { TextControl, RadioControl } from '@wordpress/components';

import {
  createReduxStore,
  register,
  useSelect,
  useDispatch,
  useRegistry,
} from '@wordpress/data';
import * as selectors from './recipientSelectors';
import * as actions from './recipientActions';
import * as actionTypes from './recipientActionTypes';
import reducer, { traverseRecipients, reduceOverRecipients } from './recipientReducers';

/*
  Sorting is done by splitting Recipients into a tree with the field being
  either the header, or an alias to the header title.
  Each subtree then becomes its own section on the page, with the depth
  encoded as an HTML attribute for styling.
  Each edge leaf is an array of recipient objects, sorted by year and then name
  Sorting of organization and industry is handled by sorting their
  identifiers in an array stored in a special leaf, `order`, in each proper
  subtree that isn't an edge leaf.

  Example recipient tree:

  // Organization sorting disabled
  {
    "current": [
      {"name":"Elizabeth Woollen","position":"Chief (Ret.), The University of Oklahoma Police Department","year":"2021","industry":"pro"}
    ],
    "previous": [
      {"name":"John King","position":"CSSP, Executive Director of Public Safety, Chief of Police (Ret.), Boston College","year":"2019","industry":"other"},
      {"name":"Dennis Cunningham","position":"Executive Vice President/Director of Security, National Hockey League","year":"2018","industry":"other"},
      {"name":"Larry Buendorf","position":"Chief Security Officer, United States Olympic Committee","year":"2017","industry":"other"}
    ]
  }

  // Organization sorting enabled (some entries ommitted, some organizations incorrectly labeled)
  {
    "current": [
      {"name":"Salvatore DeAngelis","position":"Director, Operations/Security, Philadelphia Phillies ","organization":"MLB","year":"2021","industry":"pro"},
      {"name":"Brandon Flynn","position":"Security and Parking Manager, Tampa Sports Authority ","organization":"NFL","year":"2021","industry":"pro"},
      ...
    ],
    "previous": {
      "order": ["hs","pro","other","marathon"],
      "marathon": [
        {"name":"John Bertsch","position":"Executive Director of Global Safety & Security, IRONMAN World Championship","organization":"Marathon/Endurance Events","year":"2017","industry":"marathon"},
        {"name":"Virginia Achman","position":"Executive Director, Twin Cities in Motion","organization":"Marathon/Endurance Events","year":"2018","industry":"marathon"},
        {"name":"Greg Haapala","position":"Race Director, Grandma's Marathon","organization":"Marathon/Endurance Events","year":"2019","industry":"marathon"}
      ],
      "length": 51,
      "other": {
        "order": ["NHL","NFL","NCAA","NBA","National Federation of High School Associations","MLB","Marathon/Endurance Events"],
        "Marathon/Endurance Events": [
          {"name":"Dave McGillivray","position":"Boston Marathon","organization":"Marathon/Endurance Events","year":"2014","industry":"other"},
          {"name":"Mike Nishi","position":"Chicago Marathon","organization":"Marathon/Endurance Events","year":"2015","industry":"other"},
          {"name":"Ted Metellus","position":"Competitor Group","organization":"Marathon/Endurance Events","year":"2016","industry":"other"}
        ],
        ...
      },
      "pro": {
        "order": ["NBA","MLB"],
        "MLB": [
          {"name":"Greg Terp","position":"Miami Marlins","organization":"MLB","year":"2016","industry":"pro"},
          {"name":"Randy Olewinski","position":"Security Director, Milwaukee Brewers","organization":"MLB","year":"2017","industry":"pro"},
        ],
        "NBA": [
          {"name":"Scott Anderson","position":"Pinnacle Venue Services","organization":"NBA","year":"2016","industry":"pro"}
        ]
      },
      "hs": [
        {"name":"Marmion Dambrino","position":"Director of Athletics, Houston Independent School District","organization":"National Federation of High School Associations","year":"2018","industry":"hs"},
        {"name":"Guy Grace","position":"Director of Security and Emergency Planning, Littleton Public Schools","organization":"National Federation of High School Associations","year":"2019","industry":"hs"}
      ]
    }
  }

*/



export const recipientStoreName = "ncs4/recipient-store";

// Create redux store with middleware and then add to WP registry
// WordPress store, wrapper around redux store

export const store = ({
  name: recipientStoreName,
  instantiate: () => {
    let listeners = new Set();

    // Middleware

    const logger = (store) => (next) => (action) => {
      //console.log("Dispatching", action);
      let result = next(action);
      //console.log("Next state", store.getState());
      return result;
    }

    const asyncDispatchMiddleware = (store) => (next) => (action) => {
      let syncActivityFinished = false;
      let actionQueue = [];

      function flushQueue() {
        actionQueue.forEach((a) => store.dispatch(a)); // flush queue
        actionQueue = [];
      }

      function asyncDispatch(asyncAction) {
        actionQueue = actionQueue.concat([asyncAction]);

        if (syncActivityFinished) {
          flushQueue();
        }
      }

      const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });

      next(actionWithAsyncDispatch);
      syncActivityFinished = true;
      flushQueue();
    }

    const reduxStore = createStore(
      reducer,
      applyMiddleware(
        logger,
        asyncDispatchMiddleware,
      ),
    );

    const boundActions = mapValues(
      actions,
      (action) => (...args) => reduxStore.dispatch(action(...args)),
    )
    const boundSelectors = mapValues(
      selectors,
      (selector) => (...args) => selector(reduxStore.getState(), ...args),
    );

    return {
      actions,
      selectors,
      subscribe: (listener) => reduxStore.subscribe(listener),
      reducer,
      getSelectors: () => boundSelectors,
      getActions: () => boundActions,
      store: reduxStore,
    };
  }
});

// Constants

const industrySegments = {
  pro: {
    title: "Professional Sports and Entertainment",
    useOrgs: true,
  },
  college: {
    title: "Intercollegiate Athletics",
    useOrgs: false,
  },
  hs: {
    title: "Interscholastic Athletics and After-School Activities",
    useOrgs: false,
  },
  marathon: {
    title: "Marathon and Endurance Events",
    useOrgs: false,
  },
  other: {
    title: "Other",
    useOrgs: true,
  },
};


 // create a default recipient and set it to editMode
export function addRecipient(registry) {
  let { createRecipient } = registry.dispatch(recipientStoreName);
  createRecipient({
    year: (new Date()).getFullYear(),
    id: registry.select(recipientStoreName).getNextId(),
    industry: "other",
    editMode: true,
    cancelDisabled: true,
  });
}

export function initializeStore(registry, recipients, useOrgs) {
  let actions = registry.dispatch(recipientStoreName);
  let organizations = registry.select(recipientStoreName).getOrganizations();
  actions.setUseOrgs(useOrgs);

  traverseRecipients(recipients, (r) => {
    actions.updateCurrentYear(r.year);
    actions.createRecipient({
      ...r,
      id: registry.select(recipientStoreName).getNextId(),
      industry: r.industry || "other",
    });
    if (r.organization && !organizations.includes(r.organization)) {
      actions.addOrganization(r.organization);
    }
  });
}

// returns all data necessary to save recipients to DB
export function getRecipientData(registry) {
  let recipients = registry.select(recipientStoreName).getRecipients();
  var currentYear = registry.select(recipientStoreName).getCurrentYear();

  let excludeFields = [
    "editMode",
    "cancelDisabled",
  ];
  let newRecipients = reduceOverRecipients(
    recipients,
    (arr, r) => {
      if (isRecipientValid(r)) {
        let filteredRecipient = {};
        for (let field in r) {
          if (excludeFields.includes(field)) {
            continue;
          }
          filteredRecipient[field] = typeof r[field] === "string"
            ? r[field].trim()
            : r[field];
        }
        return arr.concat([filteredRecipient]);
      }
      return arr;
    }
  );

  return {recipients: newRecipients};
}

// tests if the recipient can be saved
function isRecipientValid(data) {
  if (typeof data.name !== "string" || data.name === "") {
    return false;
  }
  if (!data.year || isNaN(data.year) || data.year < 2000) {
    return false;
  }
  return true;
}



/***** Components *****/



const RecipientsSectionContext = React.createContext({
  backend: false,
  onChange: null,
  recipients: [],
  useOrgs: false,
  actions: null,
  currentYear: null,
})

export default function Recipients(props) {

  /*****  Constants *****/

  const actions = useDispatch(recipientStoreName);
  const recipients = useSelect( (select) =>
     select(recipientStoreName)
    .getRecipients()
  );
  const currentYear = useSelect( (select) =>
    select(recipientStoreName)
    .getCurrentYear()
  );
  const useOrgs = useSelect( (select) =>
    select(recipientStoreName).getUseOrgs()
  );


  if (!recipients || !recipients.current) {
    return null;
  }

  return (
    <RecipientsSectionContext.Provider
      value = {{
        backend: true,
        onChange: actions.editRecipient,
        recipients,
        useOrgs,
        actions,
        currentYear,
      }}
    >
      <RecipientsSectionContext.Consumer>
        { context => (
          <RecipientsTree
            recipients = { context.recipients }
            currentYear = { context.currentYear }
            depth = { 0 }
          />
        )}
      </RecipientsSectionContext.Consumer>
    </RecipientsSectionContext.Provider>
  );
}

export function RecipientsSave(props) {
  let recipients = props.recipients;
  if (!recipients || !recipients.current || !recipients.previous || !recipients.current[0]) {
    return null; // malformed database attribute
  }

  let hasPreviousRecipients = recipients.previous.length > 0;

  return (
    <RecipientsSectionContext.Provider
      value = {{
        backend: false,
        recipients,
        useOrgs: props.useOrgs,
        currentYear: recipients.current[0].year,
      }}
    >
      <RecipientsSectionContext.Consumer>
        { context => (
          <RecipientsTree
            recipients = { context.recipients }
            currentYear = { context.currentYear }
            depth = { 0 }
          />
        )}
      </RecipientsSectionContext.Consumer>
    </RecipientsSectionContext.Provider>
  )
}

function RecipientsTree(props) {
  let leaves = [];
  let recipients = props.recipients;

  let fields = recipients.order || Object.keys(recipients).filter(
    (field) => field !== "order" && field !== "length"
  );

  for (let field of fields) {
    let recipients = props.recipients[field];
    let header;

    if (industrySegments[field]) {
      header = industrySegments[field].title;
    } else if (field === "current") {
      header = recipients.length > 0
        ? recipients[0].year + " Recipient"
        : null;
      header = recipients.length > 1
        ? header + "s"
        : header;
    } else if (field === "previous") {
        header = recipients.length > 0
          ? "Previous Recipient"
          : null;
        header = recipients.length > 1
          ? header + "s"
          : header;
    } else {
      header = field;
    }

    leaves.push(
      <RecipientsLeaf
        key = { field }
        recipients = { recipients }
        header = { header }
        displayYear = { field !== "current" }
        depth = { props.depth }
      />
    )
  }

  return (
    <>
      { leaves }
    </>
  );
}

function RecipientsLeaf(props) {
  let content = Array.isArray(props.recipients)
    ? <RecipientsList
        recipients = { props.recipients }
        displayYear = { props.displayYear }
        depth = { props.depth }
      />
    : <RecipientsTree
        recipients = { props.recipients }
        displayYear = { props.displayYear }
        depth = { props.depth + 1 }
      />
  ;
  return (
    <>
      { props.header && (
        <RecipientsHeader
          depth = { props.depth }
          header = { props.header }
        />
      )}
      { content }
    </>
  );
}

function RecipientsHeader(props) {
  let commonProps = {
    className: "ncs4-award-recipient__header",
    depth: props.depth,
  };

  return (
    <>
      { props.depth === 0 && (
        <p { ...commonProps }>{ props.header }</p>
      )}
      { props.depth === 1 && (
        <p { ...commonProps }>{ props.header }</p>
      )}
      { props.depth === 2 && (
        <p { ...commonProps }>{ props.header }</p>
      )}
      { props.depth > 2 && (
        <p { ...commonProps }>{ props.header }</p>
      )}
    </>
  );
}

function RecipientsList(props) {
  return (
    <>
      { props.recipients.map(recipient => (
        <RecipientsSectionContext.Consumer>
          { context => (
            <>
              { context.backend
                ? <Recipient
                    { ...context }
                    recipient = { recipient }
                    key = { recipient.id }
                    displayYear = { props.displayYear }
                  />
                : <RecipientSave
                    { ...context }
                    recipient = { recipient }
                    key = { recipient.id }
                    displayYear = { props.displayYear }
                  />
              }
            </>
          )}
        </RecipientsSectionContext.Consumer>
      )) }
    </>
  );
}

function Recipient(props) {
  let initData = props.recipient;
  let [ isEditing, setEditing ] = useState(Boolean(initData.editMode));
  let actions = props.actions;

  let orgs = useSelect( (select) => (
    select(recipientStoreName).getOrganizations()
  ));
  let { addOrganization } = props.actions;

  return (
    <>
      { isEditing
        ? <RecipientEditer
            { ...props }
            initialState = { initData }
            delete = { () => actions.deleteRecipient(initData) }
            cancel = { () => setEditing(false) }
            save = { (info) => {
              setEditing(false);
              if (info.organization && !orgs.includes(info.organization)) {
                actions.addOrganization(info.organization);
              }
              props.onChange(initData, {...info, editMode: false});
            } }
          />
        : <RecipientSave
            { ...props }
            recipient = { initData }
            setEditing = { setEditing }
          />
      }
    </>
  );
}

function RecipientSave(props) {
  let recipient = props.recipient;

  return (
    <p className = "ncs4-award-recipient">
      <span
        className = "ncs4-award-recipient__name"
      >{ recipient.name }</span>{
        recipient.position && (
          <>
            , <span
                className = "ncs4-award-recipient__position"
              >{ recipient.position }</span>
          </>
        )
      }
      { props.displayYear && (
        <>
          , <span
            className = "ncs4-award-recipient__year"
          >{ recipient.year }</span>
        </>
      )}
      { (props.useOrgs && recipient.organization && !props.displayYear) && (
        <> ({ recipient.organization })</>
      )}
      { props.backend && (
        <span
          className = "dashicons dashicons-edit ncs4-award-recipient__edit"
          onClick = { () => props.setEditing(true) }
        />
      )}
    </p>
  )
}

function RecipientEditer(props) {

  let [dataState, setDataState] = useState(props.initialState);

  let [uiState, setUIState] = useState({
    deleteClicked: false,
    cancelClicked: false,
    saveValid: true,
  });

  let changeHandler = (attr) => (x) => {
    setDataState({
      ...dataState,
      [attr]: x,
    });
  };

  let uiHandler = (attr) => (x) => {
    setUIState({
      ...uiState,
      [attr]: x,
    });
  };

  let deleteHandler = (e) => {
    if (!uiState.deleteClicked) {
      uiHandler("deleteClicked")(true);
    } else {
      props.delete();
    }
  }

  let cancelHandler = (e) => {
    if (!uiState.cancelClicked) {
      uiHandler("cancelClicked")(true);
    } else {
      props.cancel();
    }
  }

  let saveHandler = () => {
    if (isRecipientValid(dataState)) {
      uiHandler("saveValid")(true);
      props.save(dataState);
    } else {
      // Invalid data, display error
      uiHandler("saveValid")(false);
    }
  }

  let organizations = useSelect( (select) => (
    select(recipientStoreName).getOrganizations()
  ));

  const deleteClass = "dashicons dashicons-trash ncs4-award-recipient__edit-delete";
  const cancelClass = "dashicons dashicons-no ncs4-award-recipient__edit-cancel";
  const labelClasses = "css-1wzzj1a css-4dk55l e1puf3u1";

  return (
    <div className = "ncs4-award-card__recipient-editer">
      <span
        className = { uiState.deleteClicked
          ? deleteClass + " toggled"
          : deleteClass
        }
        tabIndex = { 0 }
        onClick = { deleteHandler }
        onBlur = { () => uiHandler("deleteClicked")(false) }
      />
      <span
        className = { [
            cancelClass,
            uiState.cancelClicked ? "toggled" : null,
            props.cancelDisabled ? "disabled" : null,
          ].join(" ")
        }
        tabIndex = { 0 }
        onClick = { props.cancelDisabled ? null : cancelHandler }
        onBlur = { () => uiHandler("cancelClicked")(false) }
      />
      <span
        className = "dashicons dashicons-yes ncs4-award-recipient__edit-save"
        onClick = { saveHandler }
      />
      <div className = "ncs4-award-recipient__input-fields-area">
        <TextControl
          value = { dataState.name }
          label = "Recipient name"
          placeholder = "John Deer"
          onChange = { changeHandler("name") }
        />
        <TextControl
          value = { dataState.position }
          label = { "Recipient position" }
          placeholder = "Super-executive-vice-president of business operations"
          onChange = { changeHandler("position") }
        />
        <div className = "ncs4-award-recipient__field-row">
          <div className = "ncs4-award-recipient__organization-container">
            <label
              className = { "ncs4-award-recipient__organization-label " + labelClasses }
              for = { "organization_award-" + props.awardId + "_recipient-" + props.id }
            >Organization</label>
            <input
              type = "text"
              className = "css-1kyqli5"
              list = { "organizations_award-" + props.awardId + "_recipient-" + props.id }
              id = { "organization_award-" + props.awardId + "_recipient-" + props.id }
              value = { dataState.organization }
              placeholder = "NCS⁴"
              onChange = { (e) => {
                changeHandler("organization")(e.target.value);
              }}
            />
            <datalist
              id = { "organizations_award-" + props.awardId + "_recipient-" + props.id }
            >
              {organizations.map( (org) => (
                <option
                  value = { org }
                  key = { org }
                />
              ))}
            </datalist>
          </div>
          <div className = "ncs4-award-recipient__year-container">
            <label
              className = { "ncs4-award-recipient__year-label " + labelClasses }
              for = { "award-year_award-" + props.awardId + "_recipient-" + props.id }
            >Award Year</label>
            <input
              type = "number"
              id = { "award-year_award-" + props.awardId + "_recipient-" + props.id }
              className = "css-1kyqli5"
              value = { dataState.year }
              onChange = { (e) => changeHandler("year")(e.target.value) }
            />
          </div>
          <RadioControl
            label = "Industry segment"
            selected = { dataState.industry }
            options = { [
              { label: "Professional & Entertainment", value: "pro" },
              { label: "Intercollegiate", value: "college" },
              { label: "Interscholastic & After-School", value: "hs" },
              { label: "Marathon & Endurance", value: "marathon" },
              { label: "Miscellaneous", value: "other" },
            ] }
            onChange = { changeHandler("industry") }
          />
        </div>
      </div>
    </div>
  );
}
