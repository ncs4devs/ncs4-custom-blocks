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
import { compareOrganizations } from './sort';


export const recipientStoreName = "ncs4/recipient-store";
export const store = createReduxStore(
  recipientStoreName,
  {
    selectors,
    actions,
    reducer,
  }
);

const defaultOrg = "Unaffiliated";

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
  let currentRecipients = [];
  let previousRecipients = {};

  for (let i = 0; i < recipients.length; i++) {
    if (recipients[i].year === currentYear) {
      // current recipient
      currentRecipients.push(i);
    } else {
      // previous recipient
      let org = recipients[i].organization || defaultOrg;
      if (!previousRecipients[org]) {
        previousRecipients[org] = [];
      }
      previousRecipients[org].push(i);
    }
  }
  let previousRecipientsArray = [];
  for (let organization in previousRecipients) {
    previousRecipientsArray.push({
      organization,
      indices: previousRecipients[organization],
    });
  }
  return {
    currentRecipients,
    previousRecipients: previousRecipientsArray.sort(compareOrganizations),
  };
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
    let hasPreviousRecipients = previousRecipients.length > 0;

    // create section components
    let commonProps = {
      recipients,
      onChange,
      currentYear,
      displayYear: !hasPreviousRecipients,
      useOrgs,
      awardId: props.awardId,
      backend: true,
    }
    let CurrentRecipientsSection = (
      <RecipientsSection
        { ...commonProps }
        indices = { currentRecipients }
      />
    );

    let PreviousRecipientsSections;
    if (!hasPreviousRecipients) {
      PreviousRecipientsSections = null;
    } else {
      PreviousRecipientsSections = previousRecipients.map(
        (section, i) => (
          <RecipientsSection
            { ...commonProps }
            indices = { section.indices }
            key = { section.organization }
            displayPreviousRecipientsHeader = { i === 0 }
          />
        )
      );
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
  let hasPreviousRecipients = previousRecipients.length > 0;

  let commonProps = {
    recipients: props.recipients,
    currentYear: props.recipients[0].year,
    displayYear: !hasPreviousRecipients,
    useOrgs: props.useOrgs,
    backend: false,
  };

  let CurrentRecipientsSection = (
    <RecipientsSection
      { ...commonProps }
      indices = { currentRecipients }
    />
  );

  let PreviousRecipientsSections;
  if (!hasPreviousRecipients) {
    PreviousRecipientsSections = null;
  } else {
    PreviousRecipientsSections = previousRecipients.map(
      (section, i) => (
        <RecipientsSection
          { ...commonProps }
          indices = { section.indices }
          key = { section.organization }
          displayPreviousRecipientsHeader = { i === 0 }
        />
      )
    );
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
  let commonProps = {
    useOrgs: props.useOrgs,
    currentYear: props.currentYear,
    awardId: props.awardId,
    backend: props.backend,
  }

  let rs = props.recipients.reduce(
    (arr, r, index) => {
      if (props.indices.includes(index)) {
        arr.push(
          <>
            { props.backend
              ? <Recipient
                  {...r}
                  {...commonProps}
                  key = {r.id}
                  actions = { useDispatch(recipientStoreName) }
                  onChange = { props.onChange }
                  displayYear = { props.displayYear || r.year !== props.currentYear }
                />
              : <RecipientSave
                  {...r}
                  {...commonProps}
                  key = {r.id}
                  displayYear = { props.displayYear ||  r.year !== props.currentYear }
                />
            }
          </>
        );
      }
      return arr;
    },
    [],
  );

  // set headers
  if (
       props.recipients[0].year === props.currentYear
    && props.recipients[props.recipients.length - 1].year !== props.currentYear
  ) {
    // Divide into current and previous recipients
    if (props.recipients[props.indices[0]].year === props.currentYear) {
      // current recipients section
      header = props.currentYear + " Recipient";
    } else if (props.useOrgs) {
      orgHeader = props.recipients[props.indices[0]].organization || defaultOrg;
    }
    if (props.displayPreviousRecipientsHeader) {
      header = "Previous Recipient";
    }
  }
  if (header && props.indices[props.indices.length - 1] - props.indices[0]) {
    header = header + "s"; // make plural
  }

  return (
    <>
      { header && (
        <p
          className = "ncs4-award-card__recipient-section-header"
        >
          { header }
        </p>
      )}
      { orgHeader && (
        <p
          className = "ncs4-award-card__recipient-section-org-header"
        >
          { orgHeader }
        </p>
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
      { (props.useOrgs && props.organization && !props.displayYear) && (
        <> ({ props.organization })</>
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
        </div>
      </div>
    </div>
  );
}
