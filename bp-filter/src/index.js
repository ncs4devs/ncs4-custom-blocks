import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

/*
  You can pass an array (or string) of classes to useBlockProps[.save](), but
  this makes them appear in the "additional CSS" field and causes undefined
  behavior to *all* blocks if the user deletes them.
  So instead, the custom classes are added to blockProps.className and manually
  set via className: createClassName().
*/
const createClassName = (classes) => [
    'ncs4-bp-buttons',
    'ncs4-site-margin',
    'ncs4-site-margin__size-small',
].join(' ') + ' ' + classes

registerBlockType( 'ncs4-custom-blocks/bp-filter', {
  apiVersion: 2,

  title: 'Best Practices Filter Buttons',
  icon: 'editor-table',
  category: 'layout',

  edit: ( props ) => {
    const blockProps = useBlockProps();

    return (
      <>
        {/*
          Put ...blockProps in the root editor tag
          Otherwise copy/paste, selecting, and the block toolbar
          will not work
        */}
        <div { ...blockProps }
          className = { createClassName(blockProps.className) }
        >
          <button
            id = "ncs4-bp-btn__pro"
            className = "ncs4-bp-btn ncs4-bp-btn__pro"
            title = "Filter Professional/Entertainment"
          >
            <p
              id = "ncs4-bp-lbl__pro"
              className = "ncs4-bp-lbl ncs4-bp-lbl__pro"
            >Professional/Entertainment</p>
          </button>
          <button
            id = "ncs4-bp-btn__college"
            className = "ncs4-bp-btn ncs4-bp-btn__college"
            title = "Filter Intercollegiate"
          >
            <p
              id = "ncs4-bp-lbl__college"
              className = "ncs4-bp-lbl ncs4-bp-lbl__college"
            >Intercollegiate</p>
          </button>
          <button
            id = "ncs4-bp-btn__hs"
            className = "ncs4-bp-btn ncs4-bp-btn__hs"
            title = "Filter Interscholastic"
          >
            <p
              id = "ncs4-bp-lbl__hs"
              className = "ncs4-bp-lbl ncs4-bp-lbl__hs"
            >Interscholastic</p>
          </button>
          <button
            id = "ncs4-bp-btn__marathon"
            className = "ncs4-bp-btn ncs4-bp-btn__marathon"
            title = "Filter Marathon/Endurance"
          >
            <p
              id = "ncs4-bp-lbl__marathon"
              className = "ncs4-bp-lbl ncs4-bp-lbl__marathon"
            >Marathon/Endurance</p>
          </button>
        </div>
      </>
    );
  },

  save: ( {attributes} ) => {
    const blockProps = useBlockProps.save();
    return [
      <input
        id = "ncs4-bp-check__pro"
        className = "ncs4-bp-check ncs4-bp-check__pro"
        type = "checkbox"
      />,
      <input
        id = "ncs4-bp-check-not__pro"
        className = "ncs4-bp-check-not ncs4-bp-check-not__pro"
        type = "checkbox"
        checked = "true"
      />,
      <input
        id = "ncs4-bp-check__college"
        className = "ncs4-bp-check ncs4-bp-check__college"
        type = "checkbox"
      />,
      <input
        id = "ncs4-bp-check-not__college"
        className = "ncs4-bp-check-not ncs4-bp-check-not__college"
        type = "checkbox"
        checked = "true"
      />,
      <input
        id = "ncs4-bp-check__hs"
        className = "ncs4-bp-check ncs4-bp-check__hs"
        type = "checkbox"
      />,
      <input
        id = "ncs4-bp-check-not__hs"
        className = "ncs4-bp-check-not ncs4-bp-check-not__hs"
        type = "checkbox"
        checked = "true"
      />,
      <input
        id = "ncs4-bp-check__marathon"
        className = "ncs4-bp-check ncs4-bp-check__marathon"
        type = "checkbox"
      />,
      <input
        id = "ncs4-bp-check-not__marathon"
        className = "ncs4-bp-check-not ncs4-bp-check-not__marathon"
        type = "checkbox"
        checked = "true"
      />,

      <div className = { createClassName(blockProps.className) }>
        <button
          id = "ncs4-bp-btn__pro"
          className = "ncs4-bp-btn ncs4-bp-btn__pro"
          onClick = "bpFilterClicked('pro')"
          title = "Filter Professional/Entertainment"
        >
          <p
            id = "ncs4-bp-lbl__pro"
            className = "ncs4-bp-lbl ncs4-bp-lbl__pro"
          >Professional/Entertainment</p>
        </button>
        <button
          id = "ncs4-bp-btn__college"
          className = "ncs4-bp-btn ncs4-bp-btn__college"
          onClick = "bpFilterClicked('college')"
          title = "Filter Intercollegiate"
        >
          <p
            id = "ncs4-bp-lbl__college"
            className = "ncs4-bp-lbl ncs4-bp-lbl__college"
          >Intercollegiate</p>
        </button>
        <button
          id = "ncs4-bp-btn__hs"
          className = "ncs4-bp-btn ncs4-bp-btn__hs"
          onClick = "bpFilterClicked('hs')"
          title = "Filter Interscholastic"
        >
          <p
            id = "ncs4-bp-lbl__hs"
            className = "ncs4-bp-lbl ncs4-bp-lbl__hs"
          >Interscholastic</p>
        </button>
        <button
          id = "ncs4-bp-btn__marathon"
          className = "ncs4-bp-btn ncs4-bp-btn__marathon"
          onClick = "bpFilterClicked('marathon')"
          title = "Filter Marathon/Endurance"
        >
          <p
            id = "ncs4-bp-lbl__marathon"
            className = "ncs4-bp-lbl ncs4-bp-lbl__marathon"
          >Marathon/Endurance</p>
        </button>
      </div>
    ];
  },
});
