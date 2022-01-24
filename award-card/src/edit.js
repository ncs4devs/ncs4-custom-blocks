import React, { useState } from 'react';
import { select, dispatch, registerStore, useSelect } from '@wordpress/data';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';
import { verifyColor } from '../../js/ColorSelector.js';

import * as selectors from './recipientSelectors';
import * as actions from './recipientActions';
import * as actionTypes from './recipientActionTypes';
import reducer from './recipientReducers';

import {
  Popup,
  PopupSettings,
  reserveId,
  deleteId,
} from '../../popup/src/popup.js';
import { AwardCardSave } from './save.js';


const recipientStoreName = "ncs4/recipient-store";

registerStore(
  recipientStoreName,
  {
    selectors,
    actions,
    reducer,
  }
);

const {
  createRecipient,
  deleteRecipient,
  editRecipient,
} = dispatch(recipientStoreName);

const recipientStore = select(recipientStoreName);



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



export class AwardCardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.trimStateAttribute = this.trimStateAttribute.bind(this);

    this.state = {
      overlayOpacity: this.attributes.overlayOpacity,
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      id: this.attributes.id,
      customId: this.attributes.customId,
      optionSize: this.attributes.optionSize,
      buttonTitle: this.attributes.buttonTitle,
      name: this.attributes.name,
      desc: this.attributes.desc,
    };


  }

  componentDidMount() {
    reserveId(
      (x) => this.setStateAttributes({ id: x }),
      this.state.id,
    );
    this.setStateAttributes({ bgColor: {
        color: verifyColor(this.state.bgColor),
        slug: this.state.bgColor.slug,
      }
    });
    this.setStateAttributes({ textColor: {
        color: verifyColor(this.state.textColor),
        slug: this.state.textColor.slug,
      }
    });
  }

  componentWillUnmount() {
    deleteId(this.state.id);
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  // returns (x) => null
  trimStateAttribute(attr) {
    return (x) => {
        this.setState(
        { [attr]: x },
        () => { this.setAttributes({ [attr]: x.trim() }) }
      )
    }
  }

  // create a default recipient and set it to editMode
  addRecipient() {
    createRecipient({
      year: (new Date()).getFullYear(),
      id: recipientStore.getNextId(),
      editMode: true,
      cancelDisabled: true,
    });
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <>
        <div {...blockProps }
          className = {
            [
              "ncs4-award-card",
              Popup.classType,
              blockProps.className,
            ].join(' ')
          }
        >
          <h2 className = "ncs4-award-card__name">
            { this.state.name }
          </h2>
          <RichText
            className = "ncs4-award-card__description"
            tagName = "p"
            value = { this.state.desc }
            onChange = { this.trimStateAttribute("desc") }
            placeholder = "Award description..."
          />
          <div className = "ncs4-award-card__edit-recipients">
            <p>Recipients</p>
            <span
              className = "dashicons dashicons-plus"
              title = "Add recipient"
              onClick = { this.addRecipient }
            />
          </div>
          <Recipients/>
        </div>
        <InspectorControls>
          <PanelBody
            title = "Award info"
            initialOpen = { true }
          >
            <TextControl
              value = { this.state.name }
              label = "Award name"
              help = "Name of the award"
              placeholder = "World's Best Web Dev"
              onChange = { this.trimStateAttribute("name") }
            />
          </PanelBody>
          <PopupSettings
            attributes = { this.state }
            callback = { this.setStateAttributes }
          />
        </InspectorControls>
      </>
    );
  }
}

// wrapper component to connect recipientStore to component props
function Recipients(props) {
  let rs = useSelect( (select) => {
    let data = select(recipientStoreName).getRecipients();
    return data.map( (r) => (
      <Recipient
        { ...r }
        key = { r.id }
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
