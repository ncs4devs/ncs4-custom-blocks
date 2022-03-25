import React from 'react';

import { ImageSave } from '../../js/ImageControl.js';

export default class Save extends React.Component {

  render() {
    let blockProps = this.props.blockProps;
    let attributes = this.props.attributes;

    return (
      <div {...blockProps }
        className = {
          [
            "ncs4-icon-block",
            blockProps.className,
          ].join(' ')
        }
        style = {{
          ["--image-size"]: attributes.size.asString,
          ["--dashicons-color"]: attributes.dashiconColor.color,
        }}
        dashicon = { attributes.dashicon }
      >
        {attributes.useDashicons
          ? <span
              className = { "dashicons dashicons-" + attributes.dashicon }
            />
          : <ImageSave
              img = { attributes.img }
            />
        }
      </div>
    );
  }
}
