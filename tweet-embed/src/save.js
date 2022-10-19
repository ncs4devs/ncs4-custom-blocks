import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;
  
  return (
    <div { ...blockProps }
      { ...{
        "data-backend": props.backend ? "true" : null,
        "data-page-link": attributes.pageLink,
      } }
      className = {
        [
          "ncs4-tweet-embed",
          blockProps.className,
        ].join(' ')
      }
    >
      { props.backend
        ? <div
            className = "ncs4-tweet-embed__embed-content"
            dangerouslySetInnerHTML = {{__html: `<a class="twitter-timeline" href="`+attributes.pageLink+`" style="height: 700px;">Tweets by NCS4usm</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>` }}
          />
        : <div
            className = "ncs4-tweet-embed__embed-content"
            dangerouslySetInnerHTML = {{__html:`<a class="twitter-timeline" href="`+attributes.pageLink+`" style="height: 700px;">Tweets by NCS4usm</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>` }}
            />
      }
    </div>
      
  )
}
