import {useState} from 'react';

import { RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

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
import reducer from './recipientReducers';


export const recipientStoreName = "ncs4/recipient-store";
export const store = createReduxStore(
  recipientStoreName,
  {
    selectors,
    actions,
    reducer,
  }
);

 // create a default recipient and set it to editMode
export function addRecipient(registry) {
  let { createRecipient } = registry.dispatch(recipientStoreName);
  createRecipient({
    year: (new Date()).getFullYear(),
    id: registry.select(recipientStoreName).getNextId(),
    editMode: true,
    cancelDisabled: true,
  });
}

export function initializeStore(registry, recipients, useOrgs) {
  let {
    createRecipient,
    setUseOrgs,
    addOrganization
  } = registry.dispatch(recipientStoreName);
  let organizations = registry.select(recipientStoreName).getOrganizations();
  setUseOrgs(useOrgs);
  recipients.forEach( (r) => {
    createRecipient({
      ...r,
      id: registry.select(recipientStoreName).getNextId(),
    });
    if (r.organization && !organizations.includes(r.organization)) {
      addOrganization(r.organization);
    }
  });
}

// returns all data necessary to save recipients to DB
export function getRecipientData(registry) {
  let recipients = registry.select(recipientStoreName).getRecipients();
  let fields = [
    "name",
    "position",
    "organization",
    "year",
  ]
  var displayPrevious = false;
  var currentYear;

  return {
    recipients: recipients.reduce(
      (arr, r) => {
        if (isRecipientValid(r)) {
          let data = {};
          if (isNaN(currentYear)) {
            currentYear = r.year;
          } else if(r.year < currentYear) {
            displayPrevious = true;
          }

          for (let attr of fields) {
            data[attr] = r[attr];
          }
          arr.push(data);
        }
        return arr;
      }, []
    ),
    displayPrevious,
  }
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

// Components

function divideRecipients(recipients, useOrgs, currentYear) {
  let currentRecipients = {
    start: 0,
    end: null,
  }
  let previousRecipients = {
    start: null,
    end: recipients.length - 1,
    organizations: [],
  }

  // break into current and previous recipient slices
  for (let i = 0; i < recipients.length; i++) {
    if (recipients[i].year !== currentYear) {
      if (currentRecipients.end == null) {
        currentRecipients.end = i - 1;
      }
      if (previousRecipients.start == null) {
        previousRecipients.start = i;
      }
    }
  }
  currentRecipients.end = currentRecipients.end == null
    ? recipients.length - 1
    : currentRecipients.end;

  // break into organization sections
  if (useOrgs) {
    let org = {
      organization: null,
      start: null,
      end: null,
    }
    for (let i = previousRecipients.start; i <= previousRecipients.end; i++) {
      if (previousRecipients.start == null) {
        break; // no previousRecipients
      }
      
      if (org.start == null) {
        org.start = i;
        org.organization = recipients[i].organization;
      }
      if (recipients[i].organization === org.organization) {
        org.end = i;
      }
      if (recipients[i].organization !== org.organization || i === previousRecipients.end) {
        // finished org, start a new one
        previousRecipients.organizations.push(org);
        if (org.end !== previousRecipients.end) {
          i--; // There are more organizations
        }
        org = {
          organization: null,
          start: null,
          end: null,
        }
      }
    }
  }
  return { currentRecipients, previousRecipients };
}

// wrapper component to connect recipientStore to component props
export default function Recipients(props) {
  const {
    createRecipient,
    deleteRecipient,
    editRecipient,
  } = useDispatch(recipientStoreName);

  let onChange = (d) => editRecipient(d);
  let rs = useSelect( (select) => {
    let recipients = select(recipientStoreName).getRecipients();
    if (!recipients || !recipients[0]) {
      return null;
    }
    let useOrgs = select(recipientStoreName).getUseOrgs();
    let currentYear = recipients[0].year;

    let { currentRecipients, previousRecipients } = divideRecipients(
      recipients,
      useOrgs,
      currentYear,
    );

    // create section components
    let commonProps = {
      recipients,
      onChange,
      currentYear,
      useOrgs,
      awardId: props.awardId,
      backend: true,
    }
    let CurrentRecipientsSection = (
      <RecipientsSection
        { ...commonProps }
        startIndex = { currentRecipients.start }
        endIndex = { currentRecipients.end }
      />
    );

    let PreviousRecipientsSections;
    if (previousRecipients.start == null) {
      PreviousRecipientsSections = null;
    } else {
      if (useOrgs) {
        PreviousRecipientsSections = previousRecipients.organizations.map(
          (org) => (
            <RecipientsSection
              { ...commonProps }
              startIndex = { org.start }
              endIndex = { org.end }
              key = { org.organization }
            />
          )
        );
      } else {
        PreviousRecipientsSections = (
          <RecipientsSection
            { ...commonProps }
            startIndex = { previousRecipients.start }
            endIndex = { previousRecipients.end }
          />
        )
      }
    }
    return (
      <>
        { CurrentRecipientsSection }
        { PreviousRecipientsSections }
      </>
    );
  })

  return (
    <>
      { rs }
    </>
  )
}

export function RecipientsSave(props) {
  let { currentRecipients, previousRecipients } = divideRecipients(
    props.recipients,
    props.useOrgs,
    props.recipients[0].year,
  );

  let commonProps = {
    recipients: props.recipients,
    currentYear: props.recipients[0].year,
    useOrgs: props.useOrgs,
    backend: false,
  };

  let CurrentRecipientsSection = (
    <RecipientsSection
      { ...commonProps }
      startIndex = { currentRecipients.start }
      endIndex = { currentRecipients.end }
    />
  );

  let PreviousRecipientsSections;
  if (previousRecipients.start == null) {
    PreviousRecipientsSections = null;
  } else {
    if (props.useOrgs) {
      PreviousRecipientsSections = previousRecipients.organizations.map(
        (org) => (
          <RecipientsSection
            { ...commonProps }
            startIndex = { org.start }
            endIndex = { org.end }
            key = { org.organization }
          />
        )
      );
    } else {
      PreviousRecipientsSections = (
        <RecipientsSection
          { ...commonProps }
          startIndex = { previousRecipients.start }
          endIndex = { previousRecipients.end }
        />
      )
    }
  }
  return (
    <>
      { CurrentRecipientsSection }
      { PreviousRecipientsSections }
    </>
  )
}

function RecipientsSection(props) {
  let header; // current recipients, previous recipients
  let orgHeader; // organization abbreviation
  let rs = props.recipients.slice(props.startIndex, props.endIndex + 1).map(
    (r) => (
      <>
        { props.backend
          ? <Recipient
              {...r}
              key = {r.id}
              actions = { useDispatch(recipientStoreName) }
              onChange = { props.onChange }
              displayYear = { r.year !== props.currentYear }
              awardId = { props.awardId }
              backend = { props.backend }
            />
          : <RecipientSave
              {...r}
              key = {r.id}
              displayYear = { r.year !== props.currentYear }
              backend = { props.backend }
            />
        }
      </>
    )
  );

  // set headers
  if (
       props.recipients[0].year === props.currentYear
    && props.recipients[props.recipients.length - 1].year !== props.currentYear
  ) {
    // Divide into current and previous recipients
    if (props.recipients[props.startIndex].year === props.currentYear) {
      // current recipients section
      header = props.currentYear + " Recipient";
    } else if (props.useOrgs) {
      orgHeader = props.recipients[props.startIndex].organization;
    }
    if (!header && props.recipients[props.startIndex - 1].year === props.currentYear) {
      // recipient above is a current recipient
      header = "Previous Recipient";
    }
  }
  if (header && props.endIndex - props.startIndex) {
    header = header + "s"; // make plural
  }

  return (
    <>
      { header && (
        <h2
          className = "ncs4-award-card__recipient-section-header"
        >
          { header }
        </h2>
      )}
      { orgHeader && (
        <h3
          className = "ncs4-award-card__recipient-section-org-header"
        >
          { orgHeader }
        </h3>
      )}
      { rs }
    </>
  );
}

function Recipient(props) {
  let [ isEditing, setEditing ] = useState(Boolean(props.editMode));
  let {
    createRecipient,
    deleteRecipient,
    editRecipient,
  } = props.actions;

  let orgs = useSelect( (select) => (
    select(recipientStoreName).getOrganizations()
  ));
  let { addOrganization } = props.actions;

  return (
    <>
      { isEditing
        ? <RecipientEditer
            { ...props }
            delete = { () => deleteRecipient(props.id) }
            cancel = { () => setEditing(false) }
            save = { (info) => {
              setEditing(false);
              if (info.organization && !orgs.includes(info.organization)) {
                addOrganization(info.organization);
              }
              props.onChange(info);
            } }
          />
        : <RecipientSave
            { ...props }
            setEditing = { setEditing }
          />
      }
    </>
  );
}

function RecipientSave(props) {
  return (
    <p className = "ncs4-award-recipient">
      <span
        className = "ncs4-award-recipient__name"
      >{ props.name }</span>{
        props.position && (
          <>
            , <span
                className = "ncs4-award-recipient__position"
              >{ props.position }</span>
          </>
        )
      }
      { props.displayYear && (
        <>
          , <span
            className = "ncs4-award-recipient__year"
          >{ props.year }</span>
        </>
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

  let [dataState, setDataState] = useState({
    id: props.id, // keep constant
    name: props.name,
    position: props.position,
    organization: props.organization,
    year: props.year,
  });

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
      <input
        type = "text"
        list = { "organizations_" + props.awardId + "_" + props.id }
        value = { dataState.organization }
        label = "Recipient organization"
        placeholder = "NCS⁴"
        onChange = { (e) => {
          changeHandler("organization")(e.target.value);
        }}
      />
      <datalist
        id = { "organizations_" + props.awardId + "_" + props.id }
      >
        {organizations.map( (org) => (
          <option
            value = { org }
            key = { org }
          />
        ))}
      </datalist>
      <label
        className = "ncs4-award-recipient__year-label"
        for = ""
      >Award Year</label>
      <input
        type = "number"
        value = { dataState.year }
        onChange = { (e) => changeHandler("year")(e.target.value) }
      />
    </div>
  );
}
