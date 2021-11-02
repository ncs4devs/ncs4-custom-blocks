
/*
  You can pass an array (or string) of classes to useBlockProps[.save](), but
  this makes them appear in the "additional CSS" field and causes undefined
  behavior to *all* blocks if the user deletes them.
  So instead, the custom classes are added to blockProps.className and manually
  set via className: createClassName().
*/
export const createClassName = (classes) => [
  'ncs4-bp-content',
].join(' ') + ' ' + classes

export const allowed_inner_blocks = [
  'ncs4-custom-blocks/bp-subtopic',
];
