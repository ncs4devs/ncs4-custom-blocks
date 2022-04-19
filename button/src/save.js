export default function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;

  let data = {
    "rel": attributes.doNewTab ? "noopener noreferer" : null,
    "data-new-tab": attributes.doNewTab,
    "data-style": attributes.style,
  }

  let hasStyle = attributes.style !== "link"

  return (
    <a { ...blockProps }
      { ...data }
      className = {
        [
          hasStyle ? "ncs4-button" : null,
          hasStyle ? "ncs4-button__" + attributes.style : null,
          blockProps.className,
        ].join(' ')
      }
      href = { props.backend ? null : attributes.link }
      target = { attributes.doNewTab ? "_blank" : null }
    >{ attributes.text }</a>
  )
}
