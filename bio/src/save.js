import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

import { ImageSave } from '../../js/ImageControl.js';
import { Popup } from '../../popup/src/popup.js';

export class BioSave extends React.Component {

  render() {
    let blockProps = this.props.blockProps;
    let attributes = this.props.attributes;

    return (
      <div {...blockProps }
        className = {
          [
            "ncs4-bio",
            blockProps.className,
          ].join(' ')
        }
      >
        <BioProfile
          img = { attributes.img }
          name = { attributes.name }
          position = { attributes.position }
          phone = { attributes.phone }
          email = { attributes.email }
        />
        <Popup
          attributes = {{
            ...attributes,
            optionSize: 'size-body',
          }}
        >
          <BioHeader
            img = { attributes.img }
            name = { attributes.fullName }
            position = { attributes.position }
            phone = { attributes.phone }
            email = { attributes.email }
          />
        </Popup>
      </div>
    );
  }
}


function BioProfile(props) {

  return (
    <>
      <ImageSave
        img = { props.img }
      />
      <h5 className = "ncs4-bio-name">
        <strong>{ props.name }</strong>
      </h5>
      <h5 className = "ncs4-bio-position">
        { props.position }
      </h5>
      { props.phone && (
        <p className = "ncs4-bio-phone ncs4-bio-contact-info">
          Phone: <a href={ "tel:" + props.phone }>{ props.phone }</a>
        </p>
      )}
      { props.email && (
        <p className = "ncs4-bio-email ncs4-bio-contact-info">
          E-Mail: <a href={ "mailto:" + props.email }>{ props.email }</a>
        </p>
      )}
    </>
  );
}

function BioHeader(props) {

  return (
    <>
      <BioProfile {...props}/>
      <hr class="ncs4-bio-header-seperator"/>
    </>
  );
}
