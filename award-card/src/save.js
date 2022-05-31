import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { RegistryProvider, RegistryConsumer } from '@wordpress/data';

import Popup from '../../popup/src/popup.js';
import Recipients from './recipients';

// WordPress V6.0: RichText.Content is erroneously keeping the <div> tags around
// RichText content inside the tag.

export default function Save(props) {
  return (
    <div {...props.blockProps }
      className = {
        [
          "ncs4-award-card",
          Popup.className,
          props.blockProps.className,
        ].join(' ')
      }
    >
      <h2 className = "ncs4-award-card__name">
        { props.attributes.name }
      </h2>
      { props.backend
        ? <RichText
            tagName = "p"
            className = "ncs4-award-card__description"
            value = { props.attributes.desc }
            onChange = { props.setAttribute("desc") }
            placeholder = "Award description"
          />
        : <RichText.Content
            tagName = "p"
            className = "ncs4-award-card__description"
            value = { props.attributes.normalizedDesc }
          />
      }
      <Popup
        backend = { props.backend }
        attributes = { props.attributes }
      >
        <Popup.Header>
          <Popup.Title title = { props.attributes.name }/>
        </Popup.Header>
        <Popup.Body>
          <p className = "ncs4-award-card__popup-description"
            dangerouslySetInnerHTML = {{
              __html: props.attributes.desc,
            }}
          />
          { props.backend
            ?
              <>
                <Recipients.Add blockId = { props.blockProps.id }/>
                <Recipients awardId={ props.blockProps.id }/>
              </>
            : <Recipients.Save {...props.attributes}/>
          }
        </Popup.Body>
      </Popup>
    </div>
  );
}
