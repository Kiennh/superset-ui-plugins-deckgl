(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1099:function(e,t,a){"use strict";a.r(t),a.d(t,"getLayer",(function(){return F}));var o=a(894),n=a(895),i=a(897),r=a(896),s=a(898),l=a(1104),u=a(917),c=a(995),g=a(1100),h=a(996),p=a(935),d=a(997),f=a(929),v=Math.PI/3,m=[0,v,2*v,3*v,4*v,5*v];function y(e){return e[0]}function b(e){return e[1]}var C=a(983);function S(){}var x=new l.a,w={colorDomain:null,colorRange:p.b,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:function(e){return 1}},colorAggregation:"SUM",lowerPercentile:{type:"number",value:0,min:0,max:100},upperPercentile:{type:"number",value:100,min:0,max:100},onSetColorDomain:S,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:function(e){return 1}},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",value:0,min:0,max:100},elevationUpperPercentile:{type:"number",value:100,min:0,max:100},elevationScale:{type:"number",min:0,value:1},onSetElevationDomain:S,radius:{type:"number",value:1e3,min:1},coverage:{type:"number",min:0,max:1,value:1},extruded:!1,hexagonAggregator:function(e,t){var a=e.data,o=e.radius,n=e.getPosition,i=function(e,t){var a=t.getDistanceScales().pixelsPerMeter;return e*a[0]}(o,t),r=[],s=Object(C.a)(a),l=s.iterable,u=s.objectInfo,c=!0,g=!1,h=void 0;try{for(var p,d=l[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var f=p.value;u.index++,r.push(Object.assign({screenCoord:t.projectFlat(n(f,u))},f))}}catch(e){g=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(g)throw h}}return{hexagons:function(){var e,t,a,o=0,n=0,i=1,r=1,s=y,l=b;function u(e){var o,n={},i=[],r=e.length;for(o=0;o<r;++o)if(!isNaN(c=+s.call(null,u=e[o],o,e))&&!isNaN(g=+l.call(null,u,o,e))){var u,c,g,h=Math.round(g/=a),p=Math.round(c=c/t-(1&h)/2),d=g-h;if(3*Math.abs(d)>1){var f=c-p,v=p+(c<p?-1:1)/2,m=h+(g<h?-1:1),y=c-v,b=g-m;f*f+d*d>y*y+b*b&&(p=v+(1&h?1:-1)/2,h=m)}var C=p+"-"+h,S=n[C];S?S.push(u):(i.push(S=n[C]=[u]),S.x=(p+(1&h)/2)*t,S.y=h*a)}return i}function c(e){var t=0,a=0;return m.map((function(o){var n=Math.sin(o)*e,i=-Math.cos(o)*e,r=n-t,s=i-a;return t=n,a=i,[r,s]}))}return u.hexagon=function(t){return"m"+c(null==t?e:+t).join("l")+"z"},u.centers=function(){for(var s=[],l=Math.round(n/a),u=Math.round(o/t),c=l*a;c<r+e;c+=a,++l)for(var g=u*t+(1&l)*t/2;g<i+t/2;g+=t)s.push([g,c]);return s},u.mesh=function(){var t=c(e).slice(0,4).join("l");return u.centers().map((function(e){return"M"+e+"m"+t})).join("")},u.x=function(e){return arguments.length?(s=e,u):s},u.y=function(e){return arguments.length?(l=e,u):l},u.radius=function(o){return arguments.length?(t=2*(e=+o)*Math.sin(v),a=1.5*e,u):e},u.size=function(e){return arguments.length?(o=n=0,i=+e[0],r=+e[1],u):[i-o,r-n]},u.extent=function(e){return arguments.length?(o=+e[0][0],n=+e[0][1],i=+e[1][0],r=+e[1][1],u):[[o,n],[i,r]]},u.radius(1)}().radius(i).x((function(e){return e.screenCoord[0]})).y((function(e){return e.screenCoord[1]}))(r).map((function(e,a){return{position:t.unprojectFlat([e.x,e.y]),points:e,index:a}}))}},getPosition:{type:"accessor",value:function(e){return e.position}},fp64:!1,material:x},j=["getColorValue","colorAggregation","getColorWeight"],O=["getElevationValue","elevationAggregation","getElevationWeight"],E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"initializeState",value:function(){this.state={hexagons:[],sortedColorBins:null,sortedElevationBins:null,colorValueDomain:null,elevationValueDomain:null,colorScaleFunc:S,elevationScaleFunc:S,dimensionUpdaters:this.getDimensionUpdaters()}}},{key:"updateState",value:function(e){var t=this,a=e.oldProps,o=e.props,n=e.changeFlags;this.updateGetValueFuncs(a,o);var i=this.getDimensionChanges(a,o);n.dataChanged||this.needsReProjectPoints(a,o)?this.getHexagons():i&&i.forEach((function(e){return"function"==typeof e&&e.apply(t)}))}},{key:"colorElevationPropsChanged",value:function(e,t){for(var a=!1,o=!1,n=0;n<j.length;n++){var i=j[n];e[i]!==t[i]&&(a=!0)}for(var r=0;r<O.length;r++){var s=O[r];e[s]!==t[s]&&(o=!0)}return{colorChanged:a,elevationChanged:o}}},{key:"updateGetValueFuncs",value:function(e,t){var a=t.getColorValue,o=t.getElevationValue,n=this.props,i=n.colorAggregation,r=n.getColorWeight,s=n.elevationAggregation,l=n.getElevationWeight,u=this.colorElevationPropsChanged(e,t),c=u.colorChanged,g=u.elevationChanged;c&&null===a&&(a=Object(f.b)(i,r)),g&&null===o&&(o=Object(f.b)(s,l)),a&&this.setState({getColorValue:a}),o&&this.setState({getElevationValue:o})}},{key:"needsReProjectPoints",value:function(e,t){return e.radius!==t.radius||e.hexagonAggregator!==t.hexagonAggregator}},{key:"getDimensionUpdaters",value:function(){return{getFillColor:[{id:"value",triggers:["getColorValue","getColorWeight","colorAggregation"],updater:this.getSortedColorBins},{id:"domain",triggers:["lowerPercentile","upperPercentile"],updater:this.getColorValueDomain},{id:"scaleFunc",triggers:["colorDomain","colorRange"],updater:this.getColorScale}],getElevation:[{id:"value",triggers:["getElevationValue","getElevationWeight","elevationAggregation"],updater:this.getSortedElevationBins},{id:"domain",triggers:["elevationLowerPercentile","elevationUpperPercentile"],updater:this.getElevationValueDomain},{id:"scaleFunc",triggers:["elevationDomain","elevationRange"],updater:this.getElevationScale}]}}},{key:"getDimensionChanges",value:function(e,t){var a=this.state.dimensionUpdaters,o=[];for(var n in a){var i=a[n].find((function(a){return a.triggers.some((function(a){return e[a]!==t[a]}))}));i&&o.push(i.updater)}return o.length?o:null}},{key:"getHexagons",value:function(){var e=this.props.hexagonAggregator,t=this.context.viewport,a=e(this.props,t),o=a.hexagons,n=a.hexagonVertices;this.updateRadiusAngle(n),this.setState({hexagons:o}),this.getSortedBins()}},{key:"getPickingInfo",value:function(e){var t=e.info,a=this.state,o=a.sortedColorBins,n=a.sortedElevationBins,i=null;if(t.picked&&t.index>-1){var r=this.state.hexagons[t.index],s=o.binMap[r.index]&&o.binMap[r.index].value,l=n.binMap[r.index]&&n.binMap[r.index].value;i=Object.assign({colorValue:s,elevationValue:l},r)}return Object.assign(t,{picked:Boolean(i),object:i})}},{key:"getUpdateTriggers",value:function(){var e=this,t=this.state.dimensionUpdaters,a={},o=function(o){a[o]={};var n=!0,i=!1,r=void 0;try{for(var s,l=t[o][Symbol.iterator]();!(n=(s=l.next()).done);n=!0){s.value.triggers.forEach((function(t){a[o][t]=e.props[t]}))}}catch(e){i=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}};for(var n in t)o(n);return a}},{key:"updateRadiusAngle",value:function(e){var t=this.props.radius,a=90;if(Array.isArray(e)){e.length<6&&u.a.error("HexagonCellLayer: hexagonVertices needs to be an array of 6 points")();var o=e[0],n=e[3],i=this.context.viewport.getDistanceScales().pixelsPerMeter,r=this.projectFlat(o),s=this.projectFlat(n),l=r[0]-s[0],c=r[1]-s[1],g=Math.sqrt(l*l+c*c);a=Math.acos(l/g)*-Math.sign(c)/Math.PI*180+90,t=g/2/i[0]}this.setState({angle:a,radius:t})}},{key:"getValueDomain",value:function(){this.getColorValueDomain(),this.getElevationValueDomain()}},{key:"getSortedBins",value:function(){this.getSortedColorBins(),this.getSortedElevationBins()}},{key:"getSortedColorBins",value:function(){var e=this.state.getColorValue,t=new h.a(this.state.hexagons||[],e);this.setState({sortedColorBins:t}),this.getColorValueDomain()}},{key:"getSortedElevationBins",value:function(){var e=this.state.getElevationValue,t=new h.a(this.state.hexagons||[],e);this.setState({sortedElevationBins:t}),this.getElevationValueDomain()}},{key:"getColorValueDomain",value:function(){var e=this.props,t=e.lowerPercentile,a=e.upperPercentile,o=e.onSetColorDomain;t>a&&u.a.warn("HexagonLayer: lowerPercentile is bigger than upperPercentile")(),this.state.colorValueDomain=this.state.sortedColorBins.getValueRange([t,a]),"function"==typeof o&&o(this.state.colorValueDomain),this.getColorScale()}},{key:"getElevationValueDomain",value:function(){var e=this.props,t=e.elevationLowerPercentile,a=e.elevationUpperPercentile,o=e.onSetElevationDomain;this.state.elevationValueDomain=this.state.sortedElevationBins.getValueRange([t,a]),"function"==typeof o&&o(this.state.elevationValueDomain),this.getElevationScale()}},{key:"getColorScale",value:function(){var e=this.props.colorRange,t=this.props.colorDomain||this.state.colorValueDomain;this.state.colorScaleFunc=Object(d.b)(t,e)}},{key:"getElevationScale",value:function(){var e=this.props.elevationRange,t=this.props.elevationDomain||this.state.elevationValueDomain;this.state.elevationScaleFunc=Object(d.a)(t,e)}},{key:"_onGetSublayerColor",value:function(e){var t=this.state,a=t.sortedColorBins,o=t.colorScaleFunc,n=t.colorValueDomain,i=a.binMap[e.index]&&a.binMap[e.index].value,r=this.props.colorDomain||n,s=i>=r[0]&&i<=r[r.length-1]?o(i):[0,0,0,0];return s[3]=Number.isFinite(s[3])?s[3]:255,s}},{key:"_onGetSublayerElevation",value:function(e){var t=this.state,a=t.sortedElevationBins,o=t.elevationScaleFunc,n=t.elevationValueDomain,i=a.binMap[e.index]&&a.binMap[e.index].value,r=this.props.elevationDomain||n;return i>=r[0]&&i<=r[r.length-1]?o(i):-1}},{key:"renderLayers",value:function(){var e=this.props,t=e.elevationScale,a=e.extruded,o=e.coverage,n=e.material,i=e.fp64,r=e.transitions,s=this.state,l=s.angle,u=s.radius;return new(this.getSubLayerClass("hexagon-cell",g.a))({fp64:i,radius:u,diskResolution:6,elevationScale:t,angle:l,extruded:a,coverage:o,material:n,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:r&&{getFillColor:r.getColorValue||r.getColorWeight,getElevation:r.getElevationValue||r.getElevationWeight}},this.getSubLayerProps({id:"hexagon-cell",updateTriggers:this.getUpdateTriggers()}),{data:this.state.hexagons})}}]),t}(c.a);E.layerName="HexagonLayer",E.defaultProps=w;var V=a(1),D=a.n(V),_=a(874),k=a(913),P=a(905),L=a(923),A=a(915);function R(e){return D.a.createElement("div",{className:"deckgl-tooltip"},D.a.createElement(A.a,{label:Object(_.b)("Centroid (Longitude and Latitude)")+": ",value:"("+e.coordinate[0]+", "+e.coordinate[1]+")"}),D.a.createElement(A.a,{label:Object(_.b)("Height")+": ",value:""+e.object.elevationValue}))}function F(e,t,a,o){const n=e,i=n.color_picker;let r=t.data.features.map(e=>({...e,color:[i.r,i.g,i.b,255*i.a]}));if(n.js_data_mutator){r=Object(P.a)(n.js_data_mutator)(r)}const s=Object(k.b)(n.js_agg_function,e=>e.weight);return new E({id:"hex-layer-"+n.slice_id,data:r,pickable:!0,radius:n.grid_size,minColor:[0,0,0,0],extruded:n.extruded,maxColor:[i.r,i.g,i.b,255*i.a],outline:!1,getElevationValue:s,getColorValue:s,...Object(k.a)(n,o,R)})}t.default=Object(L.b)(F,(function(e){return e.map(e=>e.position)}))},1104:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var o=a(894),n=a(897),i=a(896),r=a(904),s=a(898),l={ambient:.35,diffuse:.6,shininess:32,specularColor:[30,30,30]},u=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(n.a)(this,Object(i.a)(t).call(this,e)),e=Object.assign({},l,e),Object.assign(Object(r.a)(a),e),a}return Object(s.a)(t,e),t}((function e(){Object(o.a)(this,e)}))},923:function(e,t,a){"use strict";a.d(t,"b",(function(){return w})),a.d(t,"a",(function(){return j}));var o=a(1),n=a.n(o),i=a(0),r=a.n(i),s=a(271),l=a(921),u=a(1034),c=a(930),g=a(924),h=a(916),p=a(928),d=a(905),f=a(919);function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const{getScale:m}=u.a;const y={formData:r.a.object.isRequired,mapboxApiKey:r.a.string.isRequired,setControlValue:r.a.func.isRequired,viewport:r.a.object.isRequired,getLayer:r.a.func.isRequired,getPoints:r.a.func.isRequired,payload:r.a.object.isRequired,onAddFilter:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired};class b extends n.a.PureComponent{constructor(e){super(e),v(this,"containerRef",n.a.createRef()),v(this,"setTooltip",e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)}),this.state=this.getStateFromProps(e),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(e){e.payload.form_data!==this.state.formData&&this.setState({...this.getStateFromProps(e)})}onValuesChange(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}getStateFromProps(e,t){const a=e.payload.data.features||[],o=a.map(e=>e.__timestamp),n=function(e,t){const a=e.color_picker||{r:0,g:0,b:0,a:1},o=[a.r,a.g,a.b,255*a.a],n=m(e.color_scheme),i={};return t.forEach(t=>{if(null!=t.cat_color&&!i.hasOwnProperty(t.cat_color)){let r;r=e.dimension?Object(h.hexToRGB)(n(t.cat_color),255*a.a):o,i[t.cat_color]={color:r,enabled:!0}}}),i}(e.formData,a);if(t&&e.payload.form_data===t.formData)return{...t,categories:n};const i=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",{start:r,end:s,getStep:l,values:u,disabled:c}=Object(p.a)(o,i),{width:g,height:d,formData:v}=e;let{viewport:y}=e;return v.autozoom&&(y=Object(f.a)(y,{width:g,height:d,points:e.getPoints(a)})),{start:r,end:s,getStep:l,values:u,disabled:c,viewport:y,selected:[],lastClick:0,formData:e.payload.form_data,categories:n}}getLayers(e){const{getLayer:t,payload:a,formData:o,onAddFilter:n}=this.props;let i=a.data.features?[...a.data.features]:[];if(i=this.addColor(i,o),o.js_data_mutator){i=Object(d.a)(o.js_data_mutator)(i)}i=e[0]===e[1]||e[1]===this.end?i.filter(t=>t.__timestamp>=e[0]&&t.__timestamp<=e[1]):i.filter(t=>t.__timestamp>=e[0]&&t.__timestamp<e[1]);const r=this.state.categories;o.dimension&&(i=i.filter(e=>r[e.cat_color]&&r[e.cat_color].enabled));return[t(o,{...a,data:{...a.data,features:i}},n,this.setTooltip)]}addColor(e,t){const a=t.color_picker||{r:0,g:0,b:0,a:1},o=m(t.color_scheme);return e.map(e=>{let n;return t.dimension?(n=Object(h.hexToRGB)(o(e.cat_color),255*a.a),{...e,color:n}):e})}toggleCategory(e){const t=this.state.categories[e],a={...this.state.categories,[e]:{...t,enabled:!t.enabled}};Object.values(a).every(e=>!e.enabled)&&Object.values(a).forEach(e=>{e.enabled=!0}),this.setState({categories:a})}showSingleCategory(e){const t={...this.state.categories};Object.values(t).forEach(e=>{e.enabled=!1}),t[e].enabled=!0,this.setState({categories:t})}render(){return n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(c.a,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},n.a.createElement(g.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}b.propTypes=y;const S={formData:r.a.object.isRequired,payload:r.a.object.isRequired,setControlValue:r.a.func.isRequired,viewport:r.a.object.isRequired,onAddFilter:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired},x={onAddFilter(){}};function w(e,t){class a extends n.a.PureComponent{constructor(e){super(e),C(this,"containerRef",n.a.createRef()),C(this,"setTooltip",e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)});const{width:a,height:o,formData:i}=e;let{viewport:r}=e;i.autozoom&&(r=Object(f.a)(r,{width:a,height:o,points:t(e.payload.data.features)})),this.state={viewport:r,layer:this.computeLayer(e)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(e){const t={...e.formData,viewport:null},a={...this.props.formData,viewport:null};Object(s.isEqual)(t,a)&&e.payload===this.props.payload||this.setState({layer:this.computeLayer(e)})}onViewportChange(e){this.setState({viewport:e})}computeLayer(t){const{formData:a,payload:o,onAddFilter:n}=t;return e(a,o,n,this.setTooltip)}render(){const{formData:e,payload:t,setControlValue:a,height:o,width:i}=this.props,{layer:r,viewport:s}=this.state;return n.a.createElement(l.a,{ref:this.containerRef,mapboxApiAccessToken:t.data.mapboxApiKey,viewport:s,layers:[r],mapStyle:e.mapbox_style,setControlValue:a,width:i,height:o,onViewportChange:this.onViewportChange})}}return a.propTypes=S,a.defaultProps=x,a}function j(e,t){function a(a){const{formData:o,payload:i,setControlValue:r,viewport:s,width:l,height:u}=a;return n.a.createElement(b,{formData:o,mapboxApiKey:i.data.mapboxApiKey,setControlValue:r,viewport:s,getLayer:e,payload:i,getPoints:t,width:l,height:u})}return a.propTypes=S,a.defaultProps=x,a}},924:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var o=a(1),n=a.n(o),i=a(0),r=a.n(i),s=a(999);a(926);const l={categories:r.a.object,toggleCategory:r.a.func,showSingleCategory:r.a.func,format:r.a.string,position:r.a.oneOf([null,"tl","tr","bl","br"])};class u extends n.a.PureComponent{format(e){if(!this.props.format)return e;const t=parseFloat(e);return Object(s.a)(this.props.format,t)}formatCategoryLabel(e){if(!this.props.format)return e;if(e.includes(" - ")){const t=e.split(" - ");return this.format(t[0])+" - "+this.format(t[1])}return this.format(e)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const e=Object.entries(this.props.categories).map(([e,t])=>{const a={color:"rgba("+t.color.join(", ")+")"},o=t.enabled?"◼":"◻";return n.a.createElement("li",{key:e},n.a.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(e),onDoubleClick:()=>this.props.showSingleCategory(e)},n.a.createElement("span",{style:a},o)," ",this.formatCategoryLabel(e)))}),t={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return n.a.createElement("div",{className:"legend",style:t},n.a.createElement("ul",{className:"categories"},e))}}u.propTypes=l,u.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},926:function(e,t,a){var o=a(436),n=a(927);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};o(n,i);e.exports=n.locals||{}},927:function(e,t,a){(t=a(437)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n  font-size: 90%;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n  margin: 24px;\n  padding: 12px 20px;\n  outline: none;\n  overflow-y: scroll;\n  max-height: 200px;\n}\n\nul.categories {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n\nul.categories li a {\n  color: rgb(51, 51, 51);\n  text-decoration: none;\n}\n\nul.categories li a span {\n  margin-right: 10px;\n}\n',""]),e.exports=t},995:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var o=a(894),n=a(895),i=a(897),r=a(896),s=a(909),l=a(898),u=a(960),c=a(917),g=a(947),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"getSubLayers",value:function(){return this.internalState&&this.internalState.subLayers||[]}},{key:"initializeState",value:function(){}},{key:"setState",value:function(e){Object(s.a)(Object(r.a)(t.prototype),"setState",this).call(this,e),this.setLayerNeedsUpdate()}},{key:"getPickingInfo",value:function(e){return e.info}},{key:"renderLayers",value:function(){return null}},{key:"shouldRenderSubLayer",value:function(e,t){var a=this.props._subLayerProps;return t&&t.length||a&&a[e]}},{key:"getSubLayerClass",value:function(e,t){var a=this.props._subLayerProps;return a&&a[e]&&a[e].type||t}},{key:"getSubLayerProps",value:function(e){var t=this.props,a=t.opacity,o=t.pickable,n=t.visible,i=t.parameters,r=t.getPolygonOffset,s=t.highlightedObjectIndex,l=t.autoHighlight,u=t.highlightColor,c=t.coordinateSystem,g=t.coordinateOrigin,h=t.wrapLongitude,p=t.positionFormat,d=t.modelMatrix,f=t._subLayerProps,v={opacity:a,pickable:o,visible:n,parameters:i,getPolygonOffset:r,highlightedObjectIndex:s,autoHighlight:l,highlightColor:u,coordinateSystem:c,coordinateOrigin:g,wrapLongitude:h,positionFormat:p,modelMatrix:d};if(e){var m=f&&f[e.id],y=m&&m.updateTriggers;Object.assign(v,e,m,{id:"".concat(this.props.id,"-").concat(e.id),updateTriggers:Object.assign({all:this.props.updateTriggers.all},e.updateTriggers,y)})}return v}},{key:"_getAttributeManager",value:function(){return null}},{key:"_renderLayers",value:function(){var e=this.internalState.subLayers;e&&!this.needsUpdate()?c.a.log(3,"Composite layer reused subLayers ".concat(this),this.internalState.subLayers)():(e=this.renderLayers(),e=Object(g.b)(e,{filter:Boolean}),this.internalState.subLayers=e,c.a.log(2,"Composite layer rendered new subLayers ".concat(this),e)());var t=!0,a=!1,o=void 0;try{for(var n,i=e[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){n.value.parent=this}}catch(e){a=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(a)throw o}}}},{key:"isComposite",get:function(){return!0}}]),t}(u.a);h.layerName="CompositeLayer"}}]);