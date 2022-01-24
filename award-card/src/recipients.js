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

export function initializeStore(registry, recipients) {
  let { createRecipient } = registry.dispatch(recipientStoreName);
  recipients.forEach( (r) => {
    createRecipient({
      ...r,
      id: registry.select(recipientStoreName).getNextId(),
    });
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
  if (!data.year || isNaN(data.year) || data.year < 2018) {
    return false;
  }
  return true;
}

// Components

// wrapper component to connect recipientStore to component props
export default function Recipients(props) {

  const {
    createRecipient,
    deleteRecipient,
    editRecipient,
  } = useDispatch(recipientStoreName);

  let rs = useSelect( (select) => {
    let data = select(recipientStoreName).getRecipients();
    return data.map( (r) => (
      <Recipient
        { ...r }
        key = { r.id }
        actions = { useDispatch(recipientStoreName) }
        onChange = { (d) => editRecipient(d) }
      />
    ), _);
  })

  return (
    <>
      { rs }
    </>
  )
}

function Recipient(props) {
  let [ isEditing, setEditing ] = useState(Boolean(props.editMode));
  let {
    createRecipient,
    deleteRecipient,
    editRecipient,
  } = props.actions;

  return (
    <>
      { isEditing
        ? <RecipientEditer
            { ...props }
            delete = { () => deleteRecipient(props.id) }
            cancel = { () => setEditing(false) }
            save = { (info) => {
              setEditing(false);
              props.onChange(info);
            } }
          />
        : <p className = "ncs4-award-recipient">
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
            <span
              className = "dashicons dashicons-edit ncs4-award-recipient__edit"
              onClick = { () => setEditing(true) }
            />
          </p>
      }
    </>
  );
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
