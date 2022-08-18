import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { RegistryProvider, RegistryConsumer } from '@wordpress/data';

import Popup from '../../popup/src/popup.js';
import Recipients from './recipients';
import { getRecipientsByYear } from './recipientSelectors';

// WordPress V6.0: RichText.Content is erroneously keeping the <div> tags around
// RichText content inside the tag.

export default function Save(props) {
  let recipients = props.attributes.recipients;
  let recipientsByYear = [];
  if (Array.isArray(recipients.previous)) {
    recipientsByYear = getRecipientsByYear({ recipients });
  }
  //console.log(recipients);
  return <>
    { props.backend
      ? <div { ...props.blockProps }
          className = {
            [
              "ncs4-award-card",
              Popup.className,
              props.blockProps.className,
            ].join(' ')
          }
        >
          <Popup.Link
            backend = { props.backend }
            attributes = { props.attributes }
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
              : null
            }
          </Popup.Link>
          <Popup
            backend = { props.backend }
            className = "ncs4-award-card__popup"
            attributes = { props.attributes }
            noLink = { true }
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
                : <Recipients.Save {...props.attributes}
                    recipients = { recipients }
                    recipientsByYear = { recipientsByYear }
                  />
              }
            </Popup.Body>
          </Popup>
        </div>
      : <>
        <div { ...props.blockProps }
          className = {
            [
              "ncs4-award-card",
              Popup.className,
              props.blockProps.className,
            ].join(' ')
          }
        >
          <Popup.Link
            backend = { props.backend }
            attributes = { props.attributes }
          >
            <h6 className = "ncs4-award-card__name">
              { props.attributes.name }
            </h6>
            { props.backend
              ? <RichText
                  tagName = "p"
                  className = "ncs4-award-card__description"
                  value = { props.attributes.desc }
                  onChange = { props.setAttribute("desc") }
                  placeholder = "Award description"
                />
              : null
            }
          </Popup.Link>
        </div>
        <Popup
          backend = { props.backend }
          className = "ncs4-award-card__popup"
          attributes = { props.attributes }
          noLink = { true }
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
              : <Recipients.Save {...props.attributes}
                  recipients = { recipients }
                  recipientsByYear = { recipientsByYear }
                />
            }
          </Popup.Body>
        </Popup>
      </>
    }
  </>
}
