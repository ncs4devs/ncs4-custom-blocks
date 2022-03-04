!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e){t.exports=window.wp.element},function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,i.apply(this,arguments)}t.exports=i,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=window.wp.blockEditor},function(t,e){t.exports=window.React},function(t,e){t.exports=window.wp.components},function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,i.apply(this,arguments)}t.exports=i,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=window.wp.data},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),r=i(0),l=i(7),o=i(2),a=i(3),c=i.n(a),h=i(5),u=i.n(h),d=i(8),p=i.n(d),b=i(6),g=i(4);class m extends c.a.Component{constructor(t){super(t),p()(this,"createClassName",(t,e=null)=>["ncs4-section","ncs4-bp-content",e?"ncs4-bp-content__"+e:null].join(" ")+" "+t),this.attributes=t.attributes}sanitize_string(t){if("string"==typeof t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;",i=0,s=e.length;i<s;i++)t=t.replace(new RegExp(e.charAt(i),"g"),"aaaaeeeeiiiioooouuuuncescrzyuudtn------".charAt(i));return t.replace(".","-").replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/\//g,"")}}render(){throw new Error("BPSection child has not implemented render()")}}class f extends m{constructor(t){super(t),this.setAttributes=t.setAttributes,this.clientId=t.clientId,this.getBlockList=this.getBlockList.bind(this),this.signalChildren=this.signalChildren.bind(this),this.updateChildrenTitles=this.updateChildrenTitles.bind(this),this.onWPData=this.onWPData.bind(this),this.updateInheritedTitle=this.updateInheritedTitle.bind(this),this.updateTitle=this.updateTitle.bind(this),this.setStateAttributes=this.setStateAttributes.bind(this),this.setShowTitle=this.setShowTitle.bind(this),this.setOptionCreateAnchor=this.setOptionCreateAnchor.bind(this),this.setAnchorSlug=this.setAnchorSlug.bind(this),this.state={title:this.attributes.title,inheritedTitle:this.attributes.inheritedTitle,showTitle:this.attributes.showTitle,optionCreateAnchor:this.attributes.optionCreateAnchor,anchorSlug:this.attributes.anchorSlug,blockList:this.getBlockList()}}componentDidMount(){document.addEventListener("sectionTitleUpdate_"+this.clientId,t=>{this.updateInheritedTitle(t.detail.title)}),document.addEventListener("requestTitle",t=>{let e=this.getBlockList();e.includes(t.detail.id)&&(this.signalChild("sectionTitleUpdate",{title:this.state.title||this.state.inheritedTitle},t.detail.id),this.setState({blockList:e}))}),wp.data.subscribe(this.onWPData),this.state.inheritedTitle||document.dispatchEvent(new CustomEvent("requestTitle",{detail:{id:this.clientId}}))}componentWillUnmount(){document.removeEventListener("sectionTitleUpdate_"+this.clientId,t=>{this.updateInheritedTitle(t.detail.title)})}getBlockList(){return Object(b.select)("core/block-editor").getBlockOrder(this.clientId)}signalChild(t,e,i){document.dispatchEvent(new CustomEvent(t+"_"+i,{detail:e}))}signalChildren(t,e){for(let i of Object(b.select)("core/block-editor").getBlockOrder(this.clientId))this.signalChild(t,e,i)}updateChildrenTitles(t){this.signalChildren("sectionTitleUpdate",{title:t})}onWPData(){let t=this.getBlockList();t!=this.state.blockList&&this.setState({blockList:t})}updateInheritedTitle(t){this.setState({inheritedTitle:t},()=>{this.setAttributes({inheritedTitle:t})}),this.state.title||this.updateChildrenTitles(t)}updateTitle(t){this.setState({title:t},()=>{this.setAttributes({title:t})}),t?this.updateChildrenTitles(t):this.updateChildrenTitles(this.state.inheritedTitle)}setStateAttributes(t){this.setState(t,()=>{this.setAttributes(t)})}setShowTitle(t){this.setStateAttributes({showTitle:t})}setOptionCreateAnchor(t){this.setStateAttributes({optionCreateAnchor:t})}setAnchorSlug(t){this.setStateAttributes({anchorSlug:t})}}class T extends f{constructor(t){super(t),this.slug=t.industry}render(){let t=this.props.blockProps;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",u()({},t,{className:this.createClassName(t.className,this.slug)}),this.state.showTitle&&Object(r.createElement)(g.TextControl,{className:"ncs4-custom-blocks-"+this.slug+"-section-title ncs4-custom-blocks-section-title",onChange:this.updateTitle,value:this.state.title,placeholder:this.state.inheritedTitle?this.state.inheritedTitle:"Section Title"}),Object(r.createElement)(o.InnerBlocks,null)),Object(r.createElement)(o.InspectorControls,null,Object(r.createElement)(g.PanelBody,{title:"General",initialOpen:!0},Object(r.createElement)(g.ToggleControl,{label:"Show section title",help:this.state.showTitle?"Section title shown":"Section title hidden",checked:this.state.showTitle,onChange:this.setShowTitle}),Object(r.createElement)(g.RadioControl,{label:"Generate section anchor",help:"When should a section anchor be generated",selected:this.state.optionCreateAnchor,options:[{label:"An anchor will be be generated when the section has a defined title (not inherited)",value:"inherit"},{label:"An anchor will always be generated",value:"enable"},{label:"An anchor will never be generated",value:"disable"}],onChange:this.setOptionCreateAnchor}),Object(r.createElement)(g.TextControl,{label:"Anchor slug",help:"Leave blank to use the section title (not inherited title)",placeholder:this.sanitize_string(this.state.title),value:this.state.anchorSlug,onChange:this.setAnchorSlug}))))}}class w extends m{constructor(t){super(t),this.slug=t.industry}render(){let t=this.props.blockProps;return Object(r.createElement)("div",u()({},t,{className:this.createClassName(t.className,this.slug)}),this.attributes.showTitle?Object(r.createElement)("h6",{className:"ncs4-custom-blocks-"+this.slug+"-section-title-area ncs4-custom-blocks-section-title-area"},this.attributes.title?Object(r.createElement)("span",{class:"section-title"},this.attributes.title):Object(r.createElement)("span",{class:"section-title_inherited"},this.attributes.inheritedTitle)):Object(r.createElement)("h6",{className:"ncs4-custom-blocks-"+this.slug+"-section-title-area ncs4-custom-blocks-section-title-area ncs4-custom-blocks-"+this.slug+"-section-title-area__hidden ncs4-custom-blocks-section-title-area__hidden"}),("enable"==this.attributes.optionCreateAnchor||"inherit"==this.attributes.optionCreateAnchor&&this.attributes.title&&this.attributes.showTitle)&&this.attributes.anchorSlug?Object(r.createElement)("a",{id:this.sanitize_string(this.attributes.anchorSlug)}):Object(r.createElement)("a",{id:this.sanitize_string(this.attributes.title)}),Object(r.createElement)(o.InnerBlocks.Content,null))}}class O extends c.a.Component{render(){return Object(r.createElement)(T,n()({},this.props,{industry:"pro"}))}}class C extends c.a.Component{render(){return Object(r.createElement)(w,n()({},this.props,{industry:"pro"}))}}Object(l.registerBlockType)("ncs4-custom-blocks/pro-section",{apiVersion:2,title:"Professional Section",icon:"editor-table",category:"layout",attributes:{title:{type:"string",source:"text",selector:".section-title"},inheritedTitle:{type:"string"},showTitle:{type:"boolean",default:!0},optionCreateAnchor:{enum:["inherit","disable","enable"],default:"inherit"},anchorSlug:{type:"string"}},edit:t=>Object(r.createElement)(O,n()({},t,{blockProps:Object(o.useBlockProps)()})),save:t=>Object(r.createElement)(C,n()({},t,{blockProps:o.useBlockProps.save()}))})}]);