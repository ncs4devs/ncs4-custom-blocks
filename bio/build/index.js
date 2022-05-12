!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(l,a,function(t){return e[t]}.bind(null,a));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";n.r(t);var l={};n.r(l),n.d(l,"getIds",(function(){return R})),n.d(l,"requestId",(function(){return F})),n.d(l,"getNextId",(function(){return D}));var a={};n.r(a),n.d(a,"createId",(function(){return L})),n.d(a,"deleteId",(function(){return H}));var r=n(4),s=n.n(r),i=n(0),o=n(7),c=n(3),p=n(1),u=n.n(p),m=n(2),b=n(5);function d(e,t){return e&&t?"has-"+e+"-"+t:null}class h extends u.a.Component{render(){let e=this.props.label,t=(this.props.allowGradients,this.props.value),n=this.props.onChange,l=Object(b.select)("core/block-editor").getSettings();return Object(i.createElement)(i.Fragment,null,Object(i.createElement)("p",null,e),Object(i.createElement)(m.ColorPalette,{colors:l.colors,disableCustomColors:l.disableCustomColors,value:t,onChange:e=>{let t=l.colors.filter(t=>t.color===e)[0];n({color:e,slug:t?t.slug:null})}}))}}function g(e){let t=Object(b.select)("core/block-editor").getSettings().colors;return function(e,t){let n=t.filter(t=>t.slug===e)[0];return n?n.color:null}(e.slug,t)}var f=n(6),O=n.n(f);class v extends u.a.Component{getChoices(e){let t=[];return e.forEach((e,n)=>{t[n]={attribute:e.attribute,value:e.value||e.default}}),t}getChoice(e,t){for(let n of t)if(n.attribute===e)return n}render(){let e=this.props.maxRadioOptions||5,t=this.props.options,n=this.props.onChange,l=this.getChoices(t),a=[...Array(t.length).keys()].map(a=>Object(i.createElement)(j,{key:a,maxRadioOptions:e,label:t[a].label,help:t[a].help,choices:t[a].choices,multiple:t[a].multiple,invertValue:t[a].invertValue,min:t[a].min,max:t[a].max,step:t[a].step,markStep:t[a].markStep,markRender:t[a].markRender,tooltipRender:t[a].tooltipRender,value:this.getChoice(t[a].attribute,l).value,disabled:t[a].disabled,callback:e=>{"function"==typeof t[a].onChange&&(e=t[a].onChange(e)),n({[t[a].attribute]:e})}}));return Object(i.createElement)(i.Fragment,null,a)}}class j extends u.a.Component{render(){let e=this.props.maxRadioOptions,t=this.props.value,n=this.props.label,l=this.props.help,a=this.props.choices,r=this.props.min,s=this.props.max,o=this.props.step,c=this.props.markStep,p=this.props.markRender,u=this.props.tooltipRender,b=this.props.multiple,d=this.props.invertValue||!1,h=this.props.disabled,g=this.props.callback;return Object(i.createElement)(i.Fragment,null,Array.isArray(t)?Object(i.createElement)(E,this.props):a?b?Object(i.createElement)(y,{label:n,help:l,options:a,value:t,callback:g,disabled:h}):a.length<=e?Object(i.createElement)(m.RadioControl,{label:n,help:l,selected:t,onChange:g,options:a,disabled:h}):Object(i.createElement)(m.SelectControl,{label:n,help:l,value:t,onChange:g,options:a,disabled:h}):isNaN(r)||isNaN(s)||isNaN(o)?Object(i.createElement)(m.ToggleControl,{label:n,help:l,checked:d!=Boolean(t),onChange:e=>g(d!=e),disabled:h}):Object(i.createElement)(x,{label:n,help:l,value:t,min:r,max:s,step:o,markStep:c,markRender:p,tooltipRender:u,disabled:h,callback:g}))}}class E extends u.a.Component{getProps(e,t){var n={...e};for(let[e,l]of Object.entries(n))Array.isArray(l)&&(n[e]=l[t]);return n}render(){let e=this.props.value,t=this.props.callback,n=[...Array(e.length).keys()].map(n=>Object(i.createElement)(j,s()({},this.getProps(this.props,n),{key:n,callback:l=>{let a=[...e];a[n]=l,t(a)}})));return Object(i.createElement)(i.Fragment,null,n)}}class y extends u.a.Component{constructor(e){super(e),this.id="ncs4-components-checkboxgroup-"+String(document.getElementsByClassName("ncs4-components-checkboxgroup").length)}render(){let e=this.props.label,t=this.props.help,n=this.props.value,l=this.props.options,a=this.props.disabled,r=this.props.callback,s=[...Array(l.length).keys()].map(e=>Object(i.createElement)(m.CheckboxControl,{key:e,label:l[e].label,checked:n.includes(l[e].value),disabled:a,name:this.id,onChange:t=>{var a=[...n];if(t)a.push(l[e].value);else{let t=a.indexOf(l[e].value);t>-1&&a.splice(t,1)}r(a)}}));return Object(i.createElement)("div",{className:"ncs4-components-checkboxgroup"},Object(i.createElement)("label",{className:"components-base-control__label css-pezhm9-StyledLabel e1puf3u2",for:this.id},e),Object(i.createElement)("p",{className:"components-base-control__help css-1gbp77-StyledHelp e1puf3u3"},t),s)}}class x extends u.a.Component{createMarks(e,t,n,l){var a=Array(Math.floor((t-e)/n)+1);for(let t=0;t<a.length;t++)a[t]={value:e,label:l(e)},e+=n;return a}render(){let e=this.props.label,t=this.props.help,n=this.props.value,l=this.props.min,a=this.props.max,r=this.props.step||1,s=this.props.markStep||r,o=this.props.markRender||(e=>String(e)),c=this.props.disabled,p=this.props.tooltipRender||o,u=this.props.callback;return Object(i.createElement)(m.RangeControl,{label:e,help:t,value:n,min:l,max:a,step:r,marks:this.createMarks(l,a,s,o),renderTooltipContent:p,disabled:c,onChange:u})}}u.a.Component;class C extends u.a.Component{validateNumber(e){return!Boolean(e)||C.reg.test(e)}render(){let e=this.validateNumber(this.props.value);return Object(i.createElement)(m.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e)},label:"Phone",help:e?null:"Unrecognized phone number format (perhaps you've made a typo?)"})}}O()(C,"reg",/^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);class k extends u.a.Component{validateEmail(e){return!Boolean(e)||k.reg.test(e)}render(){let e=this.validateEmail(this.props.value);return Object(i.createElement)(m.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e),this.validateEmail(e)&&this.props.onChangeComplete(e)},label:"Email",help:e?null:"Invalid email address"})}}function S(e){return Object(i.createElement)(i.Fragment,null,e.useInlineSvg?Object(i.createElement)("div",{dangerouslySetInnerHTML:{__html:e.img.data}}):Object(i.createElement)("embed",{type:e.img.mime,src:e.img.url}))}O()(k,"reg",/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);const _=e=>({marginLeft:"left"==e.align?0:"auto",marginRight:"right"==e.align?0:"auto"});function N(e){return e.useInlineSvg=null==e.useInlineSvg||e.useInlineSvg,Object(i.createElement)(c.MediaUploadCheck,null,Object(i.createElement)(c.MediaUpload,{onSelect:e.onChange,value:e.img?e.img.id:null,allowedTypes:["image"],render:({open:t})=>Object(i.createElement)(m.Button,{className:e.img?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:t},e.img?"image/svg+xml"===e.img.mime&&e.img.data?Object(i.createElement)(S,{img:e.img,useInlineSvg:e.useInlineSvg,style:_(e)}):Object(i.createElement)("img",{src:e.img.url,style:_(e)}):"Choose an image")}))}function w(e){let t=e.img&&"image/svg+xml"===e.img.mime&&e.img.data;return e.useInlineSvg=null==e.useInlineSvg||e.useInlineSvg,Object(i.createElement)(i.Fragment,null,t&&!e.useInlineSvg?Object(i.createElement)("embed",{type:e.img.mine,src:e.img.url}):Object(i.createElement)("div",s()({},e,t?{dangerouslySetInnerHTML:{__html:e.img.data,style:_(e)}}:{}),e.img&&!t?Object(i.createElement)("img",{src:e.img.url,style:_(e)}):null))}var A,P,T,z,I;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function B(e){return p.createElement("svg",M({id:"dismiss_svg__Layer_1","data-name":"Layer 1",xmlns:"http: //www.w3.org/2000/svg",viewBox:"0 0 43 95.17"},e),A||(A=p.createElement("defs",null,p.createElement("style",null,".dismiss_svg__cls-2,.dismiss_svg__cls-4{fill:none;stroke-width:3px;stroke-miterlimit:10}"))),P||(P=p.createElement("path",{className:"dismiss_svg__cls-1",d:"M21.5 42.5a21 21 0 1121-21 21 21 0 01-21 21",transform:"translate(0 52.67)"})),T||(T=p.createElement("path",{className:"dismiss_svg__cls-2",d:"M10.91 84.76l21.18-21.19M10.91 63.57l21.18 21.19"})),z||(z=p.createElement("path",{d:"M21.5-10.17a21 21 0 01-21-21 21 21 0 0121-21 21 21 0 0121 21 21 21 0 01-21 21m0-40a19 19 0 00-19 19 19 19 0 0019 19 19 19 0 0019-19 19 19 0 00-19-19z",transform:"translate(0 52.67)",strokeMiterlimit:10})),I||(I=p.createElement("path",{className:"dismiss_svg__cls-4",d:"M10.91 32.09l21.18-21.18M10.91 10.91l21.18 21.18"})))}const R=e=>e.ids||[],F=(e,t)=>{t=Number(t);let n=e.ids.length;if(t<0)return D(e);if(0===n)return-1;for(let l=0;l<n;l++)if(e.ids[l]===t)return D(e);return-1},D=e=>{for(let t=0;t<e.ids.length;t++){const n=e.ids[t];if(0===t&&0!==n)return n;if(t+1<e.ids.length&&e.ids[t+1]-1>n||t+1>=e.ids.length)return n+1}return 0};function L(e){return{type:"CREATE",id:e}}function H(e){return{type:"DELETE",id:e}}const V=e=>{let t=e.attributes,n="popup-"+String(t.id),l=t.bgColor.slug?null:t.bgColor.color,a=t.textColor.slug?null:t.textColor.color,r=`\n    #${n}:target {\n      display: block;\n    }\n  `;return Object(i.createElement)(i.Fragment,null,e.backend?Object(i.createElement)("a",{className:"ncs4-popup-button "+(e.className||"")+" "+(t.linkStyle||""),href:"#"},t.buttonTitle):Object(i.createElement)("a",{className:"ncs4-popup-button "+(e.className||"")+" "+(t.linkStyle||""),href:"#"+n},t.buttonTitle),Object(i.createElement)("div",{id:n,className:"ncs4-popup__wrapper",style:{textAlign:"left"}},Object(i.createElement)("a",{className:"ncs4-popup-overlay",href:"#!",style:{opacity:t.overlayOpacity}}),Object(i.createElement)("div",{className:"ncs4-popup-content__wrapper"},Object(i.createElement)("div",{className:["ncs4-popup-content",d(t.bgColor.slug,"background-color"),d(t.textColor.slug,"color"),t.optionSize].join(" "),style:{backgroundColor:l,"--palette-bg-color":l,color:a,"--palette-color":a}},e.children)),Object(i.createElement)("style",null,r)))};V.classType="ncs4-custom-blocks_popup-type",V.sizeOptions=[{value:"size-alert",label:"Alert"},{value:"size-small",label:"Small"},{value:"size-body",label:"Medium (body size)"},{value:"size-large",label:"Large"}],V.linkOptions=[{value:"",label:"Link"},{value:"ncs4-button ncs4-button__blue",label:"Blue button"},{value:"ncs4-button ncs4-button__yellow",label:"Yellow button"},{value:"ncs4-button ncs4-button__gold",label:"Gold button"}],V.Dismiss=e=>Object(i.createElement)("a",{href:"#!",className:"ncs4-award-card__popup-dismiss-link",title:"Dismiss"},Object(i.createElement)(B,{className:"ncs4-award-card__popup-dismiss",viewBox:"0 52.67 43 43"})),V.Settings=e=>{let t=e.attributes,n=e.callback;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(m.PanelBody,{title:"Button settings",initialOpen:!0},Object(i.createElement)(m.TextControl,{label:"Button title",placeholder:"Show",value:t.buttonTitle,onChange:e=>{n({buttonTitle:e})}})),Object(i.createElement)(m.PanelBody,{title:"Popup area settings",initialOpen:!0},Object(i.createElement)(h,{label:"Popup background",value:t.bgColor.color,onChange:e=>{n({bgColor:e})}}),Object(i.createElement)(h,{label:"Popup text",value:t.textColor.color,onChange:e=>{n({textColor:e})}}),Object(i.createElement)(v,{options:[{attribute:"overlayOpacity",label:"Overlay opacity",value:Math.round(100*t.overlayOpacity),min:0,max:100,step:1,markStep:20,markRender:e=>String(e)+"%",onChange:e=>e/100},{attribute:"optionSize",label:"Content size",value:t.optionSize,choices:V.sizeOptions}],onChange:e=>{n(e)}})))};var W=V;Object(b.registerStore)("ncs4/popup",{selectors:l,actions:a,reducer:(e={ids:[]},{id:t,type:n})=>{switch(t=Number(t),n){case"CREATE":let n=[],l=0,a=!1;for(let r=0;r<e.ids.length;r++)!a&&e.ids[r]>t&&(n[l]=t,a=!0,l++),n[l]=e.ids[r],l++;return a||(n[n.length]=t),{...e,ids:n};case"DELETE":return{...e,ids:e.ids.filter(e=>e!==t)};default:return e}}});class $ extends u.a.Component{render(){let e=this.props.blockProps,t=this.props.attributes;return Object(i.createElement)("div",s()({},e,{className:["ncs4-bio",W.classType,e.className].join(" "),style:{textAlign:"none"!=t.alignment?t.alignment:null}}),Object(i.createElement)(U,{img:t.img,name:t.fullName,position:t.position,credentials:t.credentials,alignment:t.alignment}),Object(i.createElement)(W,{className:"ncs4-button ncs4-button__blue",attributes:t,backend:this.props.backend},Object(i.createElement)(Z,{img:t.img,name:t.fullName,position:t.position,credentials:t.credentials,phone:t.phone,email:t.email}),!this.props.backend&&Object(i.createElement)(c.InnerBlocks.Content,null)),this.props.backend&&Object(i.createElement)(c.InnerBlocks,null))}}function U(e){return Object(i.createElement)(i.Fragment,null,Object(i.createElement)("div",{className:"ncs4-bio-col ncs4-bio-col1"},Object(i.createElement)(w,{className:"ncs4-bio-img",img:e.img,align:"none"==e.alignment?"left":e.alignment,style:{marginLeft:"left"==e.alignment||"none"==e.alignment?0:"auto",marginRight:"right"==e.alignment?0:"auto"}})),Object(i.createElement)("div",{className:"ncs4-bio-col ncs4-bio-col2"},Object(i.createElement)("h5",{className:"ncs4-bio-name"},Object(i.createElement)("strong",null,e.name,e.credentials&&Object(i.createElement)(i.Fragment,null,", ",e.credentials))),Object(i.createElement)("p",{className:"ncs4-bio-position"},e.position),(e.phone||e.email)&&Object(i.createElement)("p",{className:"ncs4-bio-contact-info"},e.phone&&Object(i.createElement)("a",{className:"ncs4-bio-phone",href:"tel:"+e.phone},e.phone),e.phone&&e.email&&Object(i.createElement)(i.Fragment,null," | "),e.email&&Object(i.createElement)("a",{className:"ncs4-bio-email",href:"mailto:"+e.email},e.email))))}function Z(e){return Object(i.createElement)(i.Fragment,null,Object(i.createElement)("div",{className:"ncs4-bio-header"},Object(i.createElement)(U,e),Object(i.createElement)(W.Dismiss,null)),Object(i.createElement)("hr",{class:"ncs4-bio-header-seperator"}))}class q extends u.a.Component{constructor(e){super(e),this.attributes=e.attributes,this.setAttributes=e.setAttributes,this.setStateAttributes=this.setStateAttributes.bind(this),this.trimStateAttribute=this.trimStateAttribute.bind(this),this.imageChangeHandler=this.imageChangeHandler.bind(this),this.state={overlayOpacity:this.attributes.overlayOpacity,bgColor:this.attributes.bgColor,textColor:this.attributes.textColor,buttonTitle:this.attributes.buttonTitle,id:this.attributes.id,optionSize:this.attributes.optionSize,name:this.attributes.name,fullName:this.attributes.fullName,credentials:this.attributes.credentials,position:this.attributes.position,phone:this.attributes.phone,email:this.attributes.email,img:this.attributes.img,alignment:this.attributes.alignment}}componentDidMount(){!function(e,t=-1){let n=Object(b.select)("ncs4/popup"),{createId:l,deleteId:a}=Object(b.dispatch)("ncs4/popup"),r=n.requestId(t);-1!==r?(e(r),l(r)):(e(t),l(t))}(e=>this.setStateAttributes({id:e}),this.state.id),this.setStateAttributes({bgColor:{color:g(this.state.bgColor),slug:this.state.bgColor.slug}}),this.setStateAttributes({textColor:{color:g(this.state.textColor),slug:this.state.textColor.slug}})}componentWillUnmount(){!function(e){let{deleteId:t}=Object(b.dispatch)("ncs4/popup");t(e)}(this.state.id)}setStateAttributes(e){this.setState(e,()=>{this.setAttributes(e)})}trimStateAttribute(e){return t=>{this.setState({[e]:t},()=>{this.setAttributes({[e]:t.trim()})})}}imageChangeHandler(e){this.setStateAttributes({img:e})}render(){return Object(i.createElement)(i.Fragment,null,Object(i.createElement)($,{blockProps:this.props.blockProps,attributes:this.state,backend:!0}),Object(i.createElement)(c.InspectorControls,null,Object(i.createElement)(m.PanelBody,{title:"Personal info"},Object(i.createElement)(N,{onChange:e=>{!function(e,t,n=!0){n&&"image/svg+xml"===e.mime?fetch(e.url).then(e=>e.text()).then(n=>{e.data=n,t(e)}):t(e)}(e,this.imageChangeHandler)},img:this.state.img}),Object(i.createElement)(m.TextControl,{value:this.state.name,label:"Name",help:"Name to display on page (not in popup)",placeholder:"Willy Wonka",onChange:this.trimStateAttribute("name"),disabled:!0}),Object(i.createElement)(m.TextControl,{value:this.state.fullName,label:"Full name",help:"Name to display in bio popup header",placeholder:"Dr. Willy H. Wonka",onChange:this.trimStateAttribute("fullName")}),Object(i.createElement)(m.TextControl,{value:this.state.credentials,label:"Credentials",help:"Additional credentials, e.g. 'PhD.'",placeholder:"PhD, Doctor of Chocolatiering",onChange:this.trimStateAttribute("credentials")}),Object(i.createElement)(m.TextControl,{value:this.state.position,label:"Position",help:"The person's official job title",placeholder:"Director of Candy Research and Development",onChange:this.trimStateAttribute("position")})),Object(i.createElement)(m.PanelBody,{title:"Contact info",initialOpen:!1},Object(i.createElement)(C,{value:this.state.phone,onChange:this.trimStateAttribute("phone")}),Object(i.createElement)(k,{value:this.state.email,onChange:e=>this.setState({email:e}),onChangeComplete:e=>this.setAttributes({email:e.trim()})})),Object(i.createElement)(W.Settings,{attributes:this.state,callback:this.setStateAttributes})),Object(i.createElement)(c.BlockControls,null,Object(i.createElement)(c.AlignmentToolbar,{value:this.state.alignment,onChange:e=>this.setStateAttributes({alignment:void 0===e?"none":e})})))}}Object(o.registerBlockType)("ncs4-custom-blocks/bio",{apiVersion:2,title:"Bio",icon:"id",category:"layout",attributes:{overlayOpacity:{type:"number",default:.9},bgColor:{type:"object",default:{color:null,slug:"white-bright"}},textColor:{type:"object",default:{color:null,slug:"secondary-1c"}},buttonTitle:{type:"string",default:"View Bio"},id:{type:"number"},optionSize:{type:"string",default:"size-body"},name:{type:"string"},fullName:{type:"string"},credentials:{type:"string"},position:{type:"string"},phone:{type:"string"},email:{type:"string"},img:{type:"object"},alignment:{type:"string",default:"none"}},edit:e=>Object(i.createElement)(q,s()({},e,{blockProps:Object(c.useBlockProps)()})),save:e=>Object(i.createElement)($,s()({},e,{blockProps:c.useBlockProps.save()}))})}]);