import Interface from '../../js/edit-component';
import { withAttributes } from '../../js/hooks';
import { useState, useEffect } from 'react';
import { ServerSideRender } from '@wordpress/editor';

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      ref: (s) => Number(s) < 0 ? undefined : s
    },
  );
  let [forums, setForums] = useState(null);
  useEffect( () => {
    getForums(setForums);
  }, []);

  return (
    <Interface
      { ...props }
      save = { Markup }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = { [
        {
          label: "General",
          controls: [
            {
              type: "choice",
              label: "Forum",
              help: "Which forum to display posts from",
              attribute: "ref",
              maxRadioOptions: 0,
              disabled: !forums || forums.length == 0,
              choices: forums,
            },
            {
              type: "choice",
              label: "Max topics",
              help: "How many topics may be displayed",
              attribute: "maxPosts",
              min: 1,
              max: 10,
              step: 1,
            },
            {
              type: "choice",
              label: "Show new topic link",
              help: state.showNewTopicLink
                ? "A link to create a new topic is shown"
                : "No link is shown",
              attribute: "showNewTopicLink",
            },
          ]
        },
      ] }
    />
  );
}

async function getForums(callback) {
  fetch("/wp-json/wp/v2/forum")
    .then(response => response.json())
    .then(forums => {
      if (forums.data && forums.data.status > 399 ) {
        console.error("AJAX forum fetch error:", forums);
      }
      callback(getForumTitles(forums));
    })
}

function getForumTitles(forums) {
  let titles = [{ value: "-1", label: "---Please select a Forum---" }];
  if (
        forums && forums != null
      && (forums.length > 0 || Object.keys(forums).length > 0)
  ) {
    for (let forum of forums) {
      titles.push({ value: String(forum.id), label: forum.title.rendered });
    }
  }

  return titles;
}

function Markup(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;

  return (
    <div { ...blockProps }
      { ...{
        "data-forum": attributes.ref,
        "data-max-posts": attributes.maxPosts,
        "data-show-link": attributes.showNewTopicLink,
      } }
      className = {
        [
          "ncs4-forum-feed",
          blockProps.className,
        ].join(' ')
      }
    >
      <ServerSideRender
        block = { props.name }
        attributes = { props.attributes }
      />
    </div>
  )
}
