export default function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;

  let data = {
    "rel": attributes.doNewTab ? "noopener noreferer" : null,
    "data-new-tab": attributes.doNewTab,
    "data-style": attributes.style,
  }

  return (
    <a { ...blockProps }
      { ...data }
      className = {
        [
          "ncs4-button",
          "ncs4-button__" + attributes.style,
          blockProps.className,
        ].join(' ')
      }
      href = { props.backend ? null : attributes.link }
      target = { attributes.doNewTab ? "_blank" : null }
    >{ attributes.text }</a>
  )
}
