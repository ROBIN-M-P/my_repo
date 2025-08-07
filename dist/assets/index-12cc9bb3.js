function td(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _a={exports:{}},vi={},Ta={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),rd=Symbol.for("react.portal"),id=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),oo=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=oo&&e[oo]||e["@@iterator"],typeof e=="function"?e:null)}var Ra={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},La=Object.assign,Ia={};function hn(e,t,n){this.props=e,this.context=t,this.refs=Ia,this.updater=n||Ra}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oa(){}Oa.prototype=hn.prototype;function as(e,t,n){this.props=e,this.context=t,this.refs=Ia,this.updater=n||Ra}var us=as.prototype=new Oa;us.constructor=as;La(us,hn.prototype);us.isPureReactComponent=!0;var ao=Array.isArray,Ma=Object.prototype.hasOwnProperty,cs={current:null},Da={key:!0,ref:!0,__self:!0,__source:!0};function Aa(e,t,n){var r,i={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Ma.call(t,r)&&!Da.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:sr,type:e,key:l,ref:s,props:i,_owner:cs.current}}function hd(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function md(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uo=/\/+/g;function Ui(e,t){return typeof e=="object"&&e!==null&&e.key!=null?md(""+e.key):t.toString(36)}function Lr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sr:case rd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ui(s,0):r,ao(i)?(n="",e!=null&&(n=e.replace(uo,"$&/")+"/"),Lr(i,t,n,"",function(c){return c})):i!=null&&(ds(i)&&(i=hd(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(uo,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ao(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Ui(l,a);s+=Lr(l,t,n,u,i)}else if(u=pd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Ui(l,a++),s+=Lr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Ir={transition:null},yd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:cs};function Fa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=hn;L.Fragment=id;L.Profiler=sd;L.PureComponent=as;L.StrictMode=ld;L.Suspense=cd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;L.act=Fa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=La({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=cs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ma.call(t,u)&&!Da.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sr,type:e.type,key:i,ref:l,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:od,_context:e},e.Consumer=e};L.createElement=Aa;L.createFactory=function(e){var t=Aa.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ud,render:e}};L.isValidElement=ds;L.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:gd}};L.memo=function(e,t){return{$$typeof:dd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};L.unstable_act=Fa;L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";Ta.exports=L;var j=Ta.exports;const fs=nd(j),vd=td({__proto__:null,default:fs},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=j,wd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),Sd=Object.prototype.hasOwnProperty,jd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nd={key:!0,ref:!0,__self:!0,__source:!0};function Ua(e,t,n){var r,i={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Sd.call(t,r)&&!Nd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wd,type:e,key:l,ref:s,props:i,_owner:jd.current}}vi.Fragment=kd;vi.jsx=Ua;vi.jsxs=Ua;_a.exports=vi;var o=_a.exports,fl={},ba={exports:{}},ke={},$a={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var R=C.length;C.push(T);e:for(;0<R;){var H=R-1>>>1,Z=C[H];if(0<i(Z,T))C[H]=T,C[R]=Z,R=H;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],R=C.pop();if(R!==T){C[0]=R;e:for(var H=0,Z=C.length,pr=Z>>>1;H<pr;){var St=2*(H+1)-1,Fi=C[St],jt=St+1,hr=C[jt];if(0>i(Fi,R))jt<Z&&0>i(hr,Fi)?(C[H]=hr,C[jt]=R,H=jt):(C[H]=Fi,C[St]=R,H=St);else if(jt<Z&&0>i(hr,R))C[H]=hr,C[jt]=R,H=jt;else break e}}return T}function i(C,T){var R=C.sortIndex-T.sortIndex;return R!==0?R:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],p=1,h=null,g=3,v=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function k(C){if(y=!1,m(C),!w)if(n(u)!==null)w=!0,Di(N);else{var T=n(c);T!==null&&Ai(k,T.startTime-C)}}function N(C,T){w=!1,y&&(y=!1,f(_),_=-1),v=!0;var R=g;try{for(m(T),h=n(u);h!==null&&(!(h.expirationTime>T)||C&&!_e());){var H=h.callback;if(typeof H=="function"){h.callback=null,g=h.priorityLevel;var Z=H(h.expirationTime<=T);T=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(u)&&r(u),m(T)}else r(u);h=n(u)}if(h!==null)var pr=!0;else{var St=n(c);St!==null&&Ai(k,St.startTime-T),pr=!1}return pr}finally{h=null,g=R,v=!1}}var z=!1,P=null,_=-1,W=5,I=-1;function _e(){return!(e.unstable_now()-I<W)}function vn(){if(P!==null){var C=e.unstable_now();I=C;var T=!0;try{T=P(!0,C)}finally{T?xn():(z=!1,P=null)}}else z=!1}var xn;if(typeof d=="function")xn=function(){d(vn)};else if(typeof MessageChannel<"u"){var so=new MessageChannel,ed=so.port2;so.port1.onmessage=vn,xn=function(){ed.postMessage(null)}}else xn=function(){x(vn,0)};function Di(C){P=C,z||(z=!0,xn())}function Ai(C,T){_=x(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Di(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var R=g;g=T;try{return C()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=g;g=C;try{return T()}finally{g=R}},e.unstable_scheduleCallback=function(C,T,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,C={id:p++,callback:T,priorityLevel:C,startTime:R,expirationTime:Z,sortIndex:-1},R>H?(C.sortIndex=R,t(c,C),n(u)===null&&C===n(c)&&(y?(f(_),_=-1):y=!0,Ai(k,R-H))):(C.sortIndex=Z,t(u,C),w||v||(w=!0,Di(N))),C},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(C){var T=g;return function(){var R=g;g=T;try{return C.apply(this,arguments)}finally{g=R}}}})(Ba);$a.exports=Ba;var Ed=$a.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=j,we=Ed;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Va=new Set,$n={};function At(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for($n[e]=t,e=0;e<t.length;e++)Va.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,co={},fo={};function Pd(e){return pl.call(fo,e)?!0:pl.call(co,e)?!1:zd.test(e)?fo[e]=!0:(co[e]=!0,!1)}function _d(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Td(e,t,n,r){if(t===null||typeof t>"u"||_d(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function hs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,hs);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,hs);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,hs);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ms(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Td(t,n,i,r)&&(n=null),r||i===null?Pd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),Wa=Symbol.for("react.provider"),Ha=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Qa=Symbol.for("react.offscreen"),po=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=po&&e[po]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,bi;function Pn(e){if(bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bi=t&&t[1]||""}return`
`+bi+e}var $i=!1;function Bi(e,t){if(!e||$i)return"";$i=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{$i=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Rd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Bt:return"Portal";case hl:return"Profiler";case gs:return"StrictMode";case ml:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ha:return(e.displayName||"Context")+".Consumer";case Wa:return(e._context.displayName||"Context")+".Provider";case ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vs:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function Ld(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ka(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Id(e){var t=Ka(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Id(e))}function Ya(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ka(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ga(e,t){t=t.checked,t!=null&&ms(e,"checked",t,!1)}function xl(e,t){Ga(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function go(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(_n(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Xa(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Za=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Od=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Od.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Ja(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ja(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Md=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(Md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,tn=null,nn=null;function vo(e){if(e=ur(e)){if(typeof Cl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ji(t),Cl(e.stateNode,e.type,t))}}function tu(e){tn?nn?nn.push(e):nn=[e]:tn=e}function nu(){if(tn){var e=tn,t=nn;if(nn=tn=null,vo(e),t)for(e=0;e<t.length;e++)vo(t[e])}}function ru(e,t){return e(t)}function iu(){}var Vi=!1;function lu(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return ru(e,t,n)}finally{Vi=!1,(tn!==null||nn!==null)&&(iu(),nu())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var zl=!1;if(Ye)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){zl=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{zl=!1}function Dd(e,t,n,r,i,l,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var In=!1,Hr=null,Qr=!1,Pl=null,Ad={onError:function(e){In=!0,Hr=e}};function Fd(e,t,n,r,i,l,s,a,u){In=!1,Hr=null,Dd.apply(Ad,arguments)}function Ud(e,t,n,r,i,l,s,a,u){if(Fd.apply(this,arguments),In){if(In){var c=Hr;In=!1,Hr=null}else throw Error(S(198));Qr||(Qr=!0,Pl=c)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xo(e){if(Ft(e)!==e)throw Error(S(188))}function bd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return xo(i),e;if(l===r)return xo(i),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ou(e){return e=bd(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var uu=we.unstable_scheduleCallback,wo=we.unstable_cancelCallback,$d=we.unstable_shouldYield,Bd=we.unstable_requestPaint,Q=we.unstable_now,Vd=we.unstable_getCurrentPriorityLevel,ws=we.unstable_ImmediatePriority,cu=we.unstable_UserBlockingPriority,Kr=we.unstable_NormalPriority,Wd=we.unstable_LowPriority,du=we.unstable_IdlePriority,xi=null,be=null;function Hd(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Yd,Qd=Math.log,Kd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Qd(e)/Kd|0)|0}var xr=64,wr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Tn(a):(l&=s,l!==0&&(r=Tn(l)))}else s=n&~i,s!==0?r=Tn(s):l!==0&&(r=Tn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function Gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Oe(l),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Gd(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function qd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,Ss,mu,gu,yu,Tl=!1,kr=[],at=null,ut=null,ct=null,Wn=new Map,Hn=new Map,rt=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ko(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Sn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ur(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jd(e,t,n,r,i){switch(t){case"focusin":return at=Sn(at,e,t,n,r,i),!0;case"dragenter":return ut=Sn(ut,e,t,n,r,i),!0;case"mouseover":return ct=Sn(ct,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Wn.set(l,Sn(Wn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Hn.set(l,Sn(Hn.get(l)||null,e,t,n,r,i)),!0}return!1}function vu(e){var t=Ct(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=su(n),t!==null){e.blockedOn=t,yu(e.priority,function(){mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=ur(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function So(e,t,n){Or(e)&&n.delete(t)}function ef(){Tl=!1,at!==null&&Or(at)&&(at=null),ut!==null&&Or(ut)&&(ut=null),ct!==null&&Or(ct)&&(ct=null),Wn.forEach(So),Hn.forEach(So)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,ef)))}function Qn(e){function t(i){return jn(i,e)}if(0<kr.length){jn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&jn(at,e),ut!==null&&jn(ut,e),ct!==null&&jn(ct,e),Wn.forEach(t),Hn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)vu(n),n.blockedOn===null&&rt.shift()}var rn=Ze.ReactCurrentBatchConfig,Gr=!0;function tf(e,t,n,r){var i=M,l=rn.transition;rn.transition=null;try{M=1,js(e,t,n,r)}finally{M=i,rn.transition=l}}function nf(e,t,n,r){var i=M,l=rn.transition;rn.transition=null;try{M=4,js(e,t,n,r)}finally{M=i,rn.transition=l}}function js(e,t,n,r){if(Gr){var i=Rl(e,t,n,r);if(i===null)el(e,t,r,Xr,n),ko(e,r);else if(Jd(i,e,t,n,r))r.stopPropagation();else if(ko(e,r),t&4&&-1<Zd.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&hu(l),l=Rl(e,t,n,r),l===null&&el(e,t,r,Xr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var Xr=null;function Rl(e,t,n,r){if(Xr=null,e=xs(r),e=Ct(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vd()){case ws:return 1;case cu:return 4;case Kr:case Wd:return 16;case du:return 536870912;default:return 16}default:return 16}}var lt=null,Ns=null,Mr=null;function wu(){if(Mr)return Mr;var e,t=Ns,n=t.length,r,i="value"in lt?lt.value:lt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return Mr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function jo(){return!1}function Se(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:jo,this.isPropagationStopped=jo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Se(mn),ar=B({},mn,{view:0,detail:0}),rf=Se(ar),Hi,Qi,Nn,wi=B({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Hi=e.screenX-Nn.screenX,Qi=e.screenY-Nn.screenY):Qi=Hi=0,Nn=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),No=Se(wi),lf=B({},wi,{dataTransfer:0}),sf=Se(lf),of=B({},ar,{relatedTarget:0}),Ki=Se(of),af=B({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Se(af),cf=B({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Se(cf),ff=B({},mn,{data:0}),Eo=Se(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function Cs(){return gf}var yf=B({},ar,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=Se(yf),xf=B({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=Se(xf),wf=B({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),kf=Se(wf),Sf=B({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=Se(Sf),Nf=B({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ef=Se(Nf),Cf=[9,13,27,32],zs=Ye&&"CompositionEvent"in window,On=null;Ye&&"documentMode"in document&&(On=document.documentMode);var zf=Ye&&"TextEvent"in window&&!On,ku=Ye&&(!zs||On&&8<On&&11>=On),zo=String.fromCharCode(32),Po=!1;function Su(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Pf(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Po=!0,zo);case"textInput":return e=t.data,e===zo&&Po?null:e;default:return null}}function _f(e,t){if(Wt)return e==="compositionend"||!zs&&Su(e,t)?(e=wu(),Mr=Ns=lt=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tf[e.type]:t==="textarea"}function Nu(e,t,n,r){tu(r),t=qr(t,"onChange"),0<t.length&&(n=new Es("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Kn=null;function Rf(e){Mu(e,0)}function ki(e){var t=Kt(e);if(Ya(t))return e}function Lf(e,t){if(e==="change")return t}var Eu=!1;if(Ye){var Yi;if(Ye){var Gi="oninput"in document;if(!Gi){var To=document.createElement("div");To.setAttribute("oninput","return;"),Gi=typeof To.oninput=="function"}Yi=Gi}else Yi=!1;Eu=Yi&&(!document.documentMode||9<document.documentMode)}function Ro(){Mn&&(Mn.detachEvent("onpropertychange",Cu),Kn=Mn=null)}function Cu(e){if(e.propertyName==="value"&&ki(Kn)){var t=[];Nu(t,Kn,e,xs(e)),lu(Rf,t)}}function If(e,t,n){e==="focusin"?(Ro(),Mn=t,Kn=n,Mn.attachEvent("onpropertychange",Cu)):e==="focusout"&&Ro()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Kn)}function Mf(e,t){if(e==="click")return ki(t)}function Df(e,t){if(e==="input"||e==="change")return ki(t)}function Af(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Af;function Yn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pl.call(t,i)||!De(e[i],t[i]))return!1}return!0}function Lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Io(e,t){var n=Lo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lo(n)}}function zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pu(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=Pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zu(n.ownerDocument.documentElement,n)){if(r!==null&&Ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Io(n,l);var s=Io(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uf=Ye&&"documentMode"in document&&11>=document.documentMode,Ht=null,Ll=null,Dn=null,Il=!1;function Oo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||Ht==null||Ht!==Wr(r)||(r=Ht,"selectionStart"in r&&Ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Yn(Dn,r)||(Dn=r,r=qr(Ll,"onSelect"),0<r.length&&(t=new Es("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Xi={},_u={};Ye&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Si(e){if(Xi[e])return Xi[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _u)return Xi[e]=t[n];return e}var Tu=Si("animationend"),Ru=Si("animationiteration"),Lu=Si("animationstart"),Iu=Si("transitionend"),Ou=new Map,Mo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Ou.set(e,t),At(t,[e])}for(var qi=0;qi<Mo.length;qi++){var Zi=Mo[qi],bf=Zi.toLowerCase(),$f=Zi[0].toUpperCase()+Zi.slice(1);xt(bf,"on"+$f)}xt(Tu,"onAnimationEnd");xt(Ru,"onAnimationIteration");xt(Lu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Iu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function Do(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ud(r,t,void 0,e),e.currentTarget=null}function Mu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;Do(i,a,c),l=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;Do(i,a,c),l=u}}}if(Qr)throw e=Pl,Qr=!1,Pl=null,e}function A(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function Ji(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Nr]){e[Nr]=!0,Va.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||Ji(n,!1,e),Ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Ji("selectionchange",!1,t))}}function Du(e,t,n,r){switch(xu(t)){case 1:var i=tf;break;case 4:i=nf;break;default:i=js}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function el(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ct(a),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}a=a.parentNode}}r=r.return}lu(function(){var c=l,p=xs(n),h=[];e:{var g=Ou.get(e);if(g!==void 0){var v=Es,w=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":v=vf;break;case"focusin":w="focus",v=Ki;break;case"focusout":w="blur",v=Ki;break;case"beforeblur":case"afterblur":v=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kf;break;case Tu:case Ru:case Lu:v=uf;break;case Iu:v=jf;break;case"scroll":v=rf;break;case"wheel":v=Ef;break;case"copy":case"cut":case"paste":v=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Co}var y=(t&4)!==0,x=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var d=c,m;d!==null;){m=d;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,f!==null&&(k=Vn(d,f),k!=null&&y.push(Xn(d,k,m)))),x)break;d=d.return}0<y.length&&(g=new v(g,w,null,n,p),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==El&&(w=n.relatedTarget||n.fromElement)&&(Ct(w)||w[Ge]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Ct(w):null,w!==null&&(x=Ft(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(y=No,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Co,k="onPointerLeave",f="onPointerEnter",d="pointer"),x=v==null?g:Kt(v),m=w==null?g:Kt(w),g=new y(k,d+"leave",v,n,p),g.target=x,g.relatedTarget=m,k=null,Ct(p)===c&&(y=new y(f,d+"enter",w,n,p),y.target=m,y.relatedTarget=x,k=y),x=k,v&&w)t:{for(y=v,f=w,d=0,m=y;m;m=$t(m))d++;for(m=0,k=f;k;k=$t(k))m++;for(;0<d-m;)y=$t(y),d--;for(;0<m-d;)f=$t(f),m--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=$t(y),f=$t(f)}y=null}else y=null;v!==null&&Ao(h,g,v,y,!1),w!==null&&x!==null&&Ao(h,x,w,y,!0)}}e:{if(g=c?Kt(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var N=Lf;else if(_o(g))if(Eu)N=Df;else{N=Of;var z=If}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Mf);if(N&&(N=N(e,c))){Nu(h,N,n,p);break e}z&&z(e,g,c),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&wl(g,"number",g.value)}switch(z=c?Kt(c):window,e){case"focusin":(_o(z)||z.contentEditable==="true")&&(Ht=z,Ll=c,Dn=null);break;case"focusout":Dn=Ll=Ht=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Oo(h,n,p);break;case"selectionchange":if(Uf)break;case"keydown":case"keyup":Oo(h,n,p)}var P;if(zs)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Wt?Su(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ku&&n.locale!=="ko"&&(Wt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Wt&&(P=wu()):(lt=p,Ns="value"in lt?lt.value:lt.textContent,Wt=!0)),z=qr(c,_),0<z.length&&(_=new Eo(_,e,null,n,p),h.push({event:_,listeners:z}),P?_.data=P:(P=ju(n),P!==null&&(_.data=P)))),(P=zf?Pf(e,n):_f(e,n))&&(c=qr(c,"onBeforeInput"),0<c.length&&(p=new Eo("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=P))}Mu(h,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Vn(e,n),l!=null&&r.unshift(Xn(e,l,i)),l=Vn(e,t),l!=null&&r.push(Xn(e,l,i))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ao(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Vn(n,l),u!=null&&s.unshift(Xn(n,u,a))):i||(u=Vn(n,l),u!=null&&s.push(Xn(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Vf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function Fo(e){return(typeof e=="string"?e:""+e).replace(Vf,`
`).replace(Wf,"")}function Er(e,t,n){if(t=Fo(t),Fo(e)!==t&&n)throw Error(S(425))}function Zr(){}var Ol=null,Ml=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,Uo=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Uo<"u"?function(e){return Uo.resolve(null).then(e).catch(Kf)}:Al;function Kf(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+gn,qn="__reactProps$"+gn,Ge="__reactContainer$"+gn,Fl="__reactEvents$"+gn,Yf="__reactListeners$"+gn,Gf="__reactHandles$"+gn;function Ct(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bo(e);e!==null;){if(n=e[Ue])return n;e=bo(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Ue]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ji(e){return e[qn]||null}var Ul=[],Yt=-1;function wt(e){return{current:e}}function F(e){0>Yt||(e.current=Ul[Yt],Ul[Yt]=null,Yt--)}function D(e,t){Yt++,Ul[Yt]=e.current,e.current=t}var vt={},oe=wt(vt),he=wt(!1),Lt=vt;function an(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Jr(){F(he),F(oe)}function $o(e,t,n){if(oe.current!==vt)throw Error(S(168));D(oe,t),D(he,n)}function Au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Ld(e)||"Unknown",i));return B({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=oe.current,D(oe,e),D(he,he.current),!0}function Bo(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Au(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,F(he),F(oe),D(oe,e)):F(he),D(he,n)}var We=null,Ni=!1,nl=!1;function Fu(e){We===null?We=[e]:We.push(e)}function Xf(e){Ni=!0,Fu(e)}function kt(){if(!nl&&We!==null){nl=!0;var e=0,t=M;try{var n=We;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,Ni=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),uu(ws,kt),i}finally{M=t,nl=!1}}return null}var Gt=[],Xt=0,ti=null,ni=0,je=[],Ne=0,It=null,He=1,Qe="";function Nt(e,t){Gt[Xt++]=ni,Gt[Xt++]=ti,ti=e,ni=t}function Uu(e,t,n){je[Ne++]=He,je[Ne++]=Qe,je[Ne++]=It,It=e;var r=He;e=Qe;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var l=32-Oe(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,He=1<<32-Oe(t)+i|n<<i|r,Qe=l+e}else He=1<<l|n<<i|r,Qe=e}function _s(e){e.return!==null&&(Nt(e,1),Uu(e,1,0))}function Ts(e){for(;e===ti;)ti=Gt[--Xt],Gt[Xt]=null,ni=Gt[--Xt],Gt[Xt]=null;for(;e===It;)It=je[--Ne],je[Ne]=null,Qe=je[--Ne],je[Ne]=null,He=je[--Ne],je[Ne]=null}var xe=null,ve=null,U=!1,Ie=null;function bu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ve=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ve=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(U){var t=ve;if(t){var n=t;if(!Vo(e,t)){if(bl(e))throw Error(S(418));t=dt(n.nextSibling);var r=xe;t&&Vo(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(bl(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Wo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Cr(e){if(e!==xe)return!1;if(!U)return Wo(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=ve)){if(bl(e))throw $u(),Error(S(418));for(;t;)bu(e,t),t=dt(t.nextSibling)}if(Wo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=xe?dt(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=ve;e;)e=dt(e.nextSibling)}function un(){ve=xe=null,U=!1}function Rs(e){Ie===null?Ie=[e]:Ie.push(e)}var qf=Ze.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ho(e){var t=e._init;return t(e._payload)}function Bu(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,k){return d===null||d.tag!==6?(d=ul(m,f.mode,k),d.return=f,d):(d=i(d,m),d.return=f,d)}function u(f,d,m,k){var N=m.type;return N===Vt?p(f,d,m.props.children,k,m.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===tt&&Ho(N)===d.type)?(k=i(d,m.props),k.ref=En(f,d,m),k.return=f,k):(k=Vr(m.type,m.key,m.props,null,f.mode,k),k.ref=En(f,d,m),k.return=f,k)}function c(f,d,m,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=cl(m,f.mode,k),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function p(f,d,m,k,N){return d===null||d.tag!==7?(d=Tt(m,f.mode,k,N),d.return=f,d):(d=i(d,m),d.return=f,d)}function h(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ul(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return m=Vr(d.type,d.key,d.props,null,f.mode,m),m.ref=En(f,null,d),m.return=f,m;case Bt:return d=cl(d,f.mode,m),d.return=f,d;case tt:var k=d._init;return h(f,k(d._payload),m)}if(_n(d)||wn(d))return d=Tt(d,f.mode,m,null),d.return=f,d;zr(f,d)}return null}function g(f,d,m,k){var N=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:a(f,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:return m.key===N?u(f,d,m,k):null;case Bt:return m.key===N?c(f,d,m,k):null;case tt:return N=m._init,g(f,d,N(m._payload),k)}if(_n(m)||wn(m))return N!==null?null:p(f,d,m,k,null);zr(f,m)}return null}function v(f,d,m,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(m)||null,a(d,f,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case gr:return f=f.get(k.key===null?m:k.key)||null,u(d,f,k,N);case Bt:return f=f.get(k.key===null?m:k.key)||null,c(d,f,k,N);case tt:var z=k._init;return v(f,d,m,z(k._payload),N)}if(_n(k)||wn(k))return f=f.get(m)||null,p(d,f,k,N,null);zr(d,k)}return null}function w(f,d,m,k){for(var N=null,z=null,P=d,_=d=0,W=null;P!==null&&_<m.length;_++){P.index>_?(W=P,P=null):W=P.sibling;var I=g(f,P,m[_],k);if(I===null){P===null&&(P=W);break}e&&P&&I.alternate===null&&t(f,P),d=l(I,d,_),z===null?N=I:z.sibling=I,z=I,P=W}if(_===m.length)return n(f,P),U&&Nt(f,_),N;if(P===null){for(;_<m.length;_++)P=h(f,m[_],k),P!==null&&(d=l(P,d,_),z===null?N=P:z.sibling=P,z=P);return U&&Nt(f,_),N}for(P=r(f,P);_<m.length;_++)W=v(P,f,_,m[_],k),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?_:W.key),d=l(W,d,_),z===null?N=W:z.sibling=W,z=W);return e&&P.forEach(function(_e){return t(f,_e)}),U&&Nt(f,_),N}function y(f,d,m,k){var N=wn(m);if(typeof N!="function")throw Error(S(150));if(m=N.call(m),m==null)throw Error(S(151));for(var z=N=null,P=d,_=d=0,W=null,I=m.next();P!==null&&!I.done;_++,I=m.next()){P.index>_?(W=P,P=null):W=P.sibling;var _e=g(f,P,I.value,k);if(_e===null){P===null&&(P=W);break}e&&P&&_e.alternate===null&&t(f,P),d=l(_e,d,_),z===null?N=_e:z.sibling=_e,z=_e,P=W}if(I.done)return n(f,P),U&&Nt(f,_),N;if(P===null){for(;!I.done;_++,I=m.next())I=h(f,I.value,k),I!==null&&(d=l(I,d,_),z===null?N=I:z.sibling=I,z=I);return U&&Nt(f,_),N}for(P=r(f,P);!I.done;_++,I=m.next())I=v(P,f,_,I.value,k),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?_:I.key),d=l(I,d,_),z===null?N=I:z.sibling=I,z=I);return e&&P.forEach(function(vn){return t(f,vn)}),U&&Nt(f,_),N}function x(f,d,m,k){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:e:{for(var N=m.key,z=d;z!==null;){if(z.key===N){if(N=m.type,N===Vt){if(z.tag===7){n(f,z.sibling),d=i(z,m.props.children),d.return=f,f=d;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===tt&&Ho(N)===z.type){n(f,z.sibling),d=i(z,m.props),d.ref=En(f,z,m),d.return=f,f=d;break e}n(f,z);break}else t(f,z);z=z.sibling}m.type===Vt?(d=Tt(m.props.children,f.mode,k,m.key),d.return=f,f=d):(k=Vr(m.type,m.key,m.props,null,f.mode,k),k.ref=En(f,d,m),k.return=f,f=k)}return s(f);case Bt:e:{for(z=m.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=cl(m,f.mode,k),d.return=f,f=d}return s(f);case tt:return z=m._init,x(f,d,z(m._payload),k)}if(_n(m))return w(f,d,m,k);if(wn(m))return y(f,d,m,k);zr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=ul(m,f.mode,k),d.return=f,f=d),s(f)):n(f,d)}return x}var cn=Bu(!0),Vu=Bu(!1),ri=wt(null),ii=null,qt=null,Ls=null;function Is(){Ls=qt=ii=null}function Os(e){var t=ri.current;F(ri),e._currentValue=t}function Bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){ii=e,Ls=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Ls!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(ii===null)throw Error(S(308));qt=e,ii.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var zt=null;function Ms(e){zt===null?zt=[e]:zt.push(e)}function Wu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ms(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,Ms(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function Qo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var i=e.updateQueue;nt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?l=c:s.next=c,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;s=0,p=c=u=null,a=l;do{var g=a.lane,v=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(g=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(v,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,g=typeof w=="function"?w.call(v,h,g):w,g==null)break e;h=B({},h,g);break e;case 2:nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=v,u=h):p=p.next=v,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(p===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=h}}function Ko(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var cr={},$e=wt(cr),Zn=wt(cr),Jn=wt(cr);function Pt(e){if(e===cr)throw Error(S(174));return e}function As(e,t){switch(D(Jn,t),D(Zn,e),D($e,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}F($e),D($e,t)}function dn(){F($e),F(Zn),F(Jn)}function Qu(e){Pt(Jn.current);var t=Pt($e.current),n=Sl(t,e.type);t!==n&&(D(Zn,e),D($e,n))}function Fs(e){Zn.current===e&&(F($e),F(Zn))}var b=wt(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function Us(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Fr=Ze.ReactCurrentDispatcher,il=Ze.ReactCurrentBatchConfig,Ot=0,$=null,G=null,J=null,oi=!1,An=!1,er=0,Zf=0;function ie(){throw Error(S(321))}function bs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function $s(e,t,n,r,i,l){if(Ot=l,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?np:rp,e=n(r,i),An){l=0;do{if(An=!1,er=0,25<=l)throw Error(S(301));l+=1,J=G=null,t.updateQueue=null,Fr.current=ip,e=n(r,i)}while(An)}if(Fr.current=ai,t=G!==null&&G.next!==null,Ot=0,J=G=$=null,oi=!1,t)throw Error(S(300));return e}function Bs(){var e=er!==0;return er=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Pe(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(S(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function tr(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Pe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=G,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,u=null,c=l;do{var p=c.lane;if((Ot&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,$.lanes|=p,Mt|=p}c=c.next}while(c!==null&&c!==l);u===null?s=r:u.next=a,De(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,$.lanes|=l,Mt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);De(l,t.memoizedState)||(pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ku(){}function Yu(e,t){var n=$,r=Pe(),i=t(),l=!De(r.memoizedState,i);if(l&&(r.memoizedState=i,pe=!0),r=r.queue,Vs(qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,nr(9,Xu.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(S(349));Ot&30||Gu(n,t,i)}return i}function Gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,r){t.value=n,t.getSnapshot=r,Zu(t)&&Ju(e)}function qu(e,t,n){return n(function(){Zu(t)&&Ju(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Ju(e){var t=Xe(e,1);t!==null&&Me(t,e,1,-1)}function Yo(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=tp.bind(null,$,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ec(){return Pe().memoizedState}function Ur(e,t,n,r){var i=Fe();$.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(G!==null){var s=G.memoizedState;if(l=s.destroy,r!==null&&bs(r,s.deps)){i.memoizedState=nr(t,n,l,r);return}}$.flags|=e,i.memoizedState=nr(1|t,n,l,r)}function Go(e,t){return Ur(8390656,8,e,t)}function Vs(e,t){return Ei(2048,8,e,t)}function tc(e,t){return Ei(4,2,e,t)}function nc(e,t){return Ei(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ic(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,rc.bind(null,t,e),n)}function Ws(){}function lc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oc(e,t,n){return Ot&21?(De(n,t)||(n=fu(),$.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Jf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=il.transition;il.transition={};try{e(!1),t()}finally{M=n,il.transition=r}}function ac(){return Pe().memoizedState}function ep(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uc(e))cc(t,n);else if(n=Wu(e,t,n,r),n!==null){var i=ue();Me(n,e,r,i),dc(n,t,r)}}function tp(e,t,n){var r=ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uc(e))cc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(i.hasEagerState=!0,i.eagerState=a,De(a,s)){var u=t.interleaved;u===null?(i.next=i,Ms(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Wu(e,t,i,r),n!==null&&(i=ue(),Me(n,e,r,i),dc(n,t,r))}}function uc(e){var t=e.alternate;return e===$||t!==null&&t===$}function cc(e,t){An=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var ai={readContext:ze,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},np={readContext:ze,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Go,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ep.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Yo,useDebugValue:Ws,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=Jf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=Fe();if(U){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ee===null)throw Error(S(349));Ot&30||Gu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Go(qu.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,Xu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(U){var n=Qe,r=He;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rp={readContext:ze,useCallback:lc,useContext:ze,useEffect:Vs,useImperativeHandle:ic,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:sc,useReducer:ll,useRef:ec,useState:function(){return ll(tr)},useDebugValue:Ws,useDeferredValue:function(e){var t=Pe();return oc(t,G.memoizedState,e)},useTransition:function(){var e=ll(tr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:ac,unstable_isNewReconciler:!1},ip={readContext:ze,useCallback:lc,useContext:ze,useEffect:Vs,useImperativeHandle:ic,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:sc,useReducer:sl,useRef:ec,useState:function(){return sl(tr)},useDebugValue:Ws,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:oc(t,G.memoizedState,e)},useTransition:function(){var e=sl(tr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Yu,useId:ac,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ci={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ht(e),l=Ke(r,i);l.payload=t,n!=null&&(l.callback=n),t=ft(e,l,i),t!==null&&(Me(t,e,i,r),Ar(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=ht(e),l=Ke(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ft(e,l,i),t!==null&&(Me(t,e,i,r),Ar(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ht(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(Me(t,e,r,n),Ar(t,e,r))}};function Xo(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,l):!0}function fc(e,t,n){var r=!1,i=vt,l=t.contextType;return typeof l=="object"&&l!==null?l=ze(l):(i=me(t)?Lt:oe.current,r=t.contextTypes,l=(r=r!=null)?an(e,i):vt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function qo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ci.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ds(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ze(l):(l=me(t)?Lt:oe.current,i.context=an(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ci.enqueueReplaceState(i,i.state,null),li(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Rd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,ts=r),Hl(e,t)},n}function hc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Hl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xp.bind(null,e,t,n),t.then(e,e))}function Jo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ea(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var sp=Ze.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?Vu(t,null,n,r):cn(t,e.child,n,r)}function ta(e,t,n,r,i){n=n.render;var l=t.ref;return ln(t,i),r=$s(e,t,n,r,l,i),n=Bs(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(U&&n&&_s(t),t.flags|=1,ae(e,t,r,i),t.child)}function na(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Zs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,mc(e,t,l,r,i)):(e=Vr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(s,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Yn(l,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Ql(e,t,n,r,i)}function gc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Jt,ye),ye|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Jt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(Jt,ye),ye|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(Jt,ye),ye|=r;return ae(e,t,i,n),t.child}function yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var l=me(n)?Lt:oe.current;return l=an(t,l),ln(t,i),n=$s(e,t,n,r,l,i),r=Bs(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(U&&r&&_s(t),t.flags|=1,ae(e,t,n,i),t.child)}function ra(e,t,n,r,i){if(me(n)){var l=!0;ei(t)}else l=!1;if(ln(t,i),t.stateNode===null)br(e,t),fc(t,n,r),Wl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=me(n)?Lt:oe.current,c=an(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&qo(t,s,r,c),nt=!1;var g=t.memoizedState;s.state=g,li(t,r,s,i),u=t.memoizedState,a!==r||g!==u||he.current||nt?(typeof p=="function"&&(Vl(t,n,p,r),u=t.memoizedState),(a=nt||Xo(t,n,a,r,g,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Hu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Re(t.type,a),s.props=c,h=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=me(n)?Lt:oe.current,u=an(t,u));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==u)&&qo(t,s,r,u),nt=!1,g=t.memoizedState,s.state=g,li(t,r,s,i);var w=t.memoizedState;a!==h||g!==w||he.current||nt?(typeof v=="function"&&(Vl(t,n,v,r),w=t.memoizedState),(c=nt||Xo(t,n,c,r,g,w,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,l,i)}function Kl(e,t,n,r,i,l){yc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Bo(t,n,!1),qe(e,t,l);r=t.stateNode,sp.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cn(t,e.child,null,l),t.child=cn(t,null,a,l)):ae(e,t,a,l),t.memoizedState=r.state,i&&Bo(t,n,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?$o(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$o(e,t.context,!1),As(e,t.containerInfo)}function ia(e,t,n,r,i){return un(),Rs(i),t.flags|=256,ae(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,n){var r=t.pendingProps,i=b.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(b,i&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=_i(s,r,0,null),e=Tt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Gl(n),t.memoizedState=Yl,e):Hs(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return op(e,t,s,r,a,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=mt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=mt(a,l):(l=Tt(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Gl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return l=e.child,e=l.sibling,r=mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hs(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&Rs(r),cn(t,e.child,null,n),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(S(422))),Pr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=_i({mode:"visible",children:r.children},i,0,null),l=Tt(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&cn(t,e.child,null,s),t.child.memoizedState=Gl(s),t.memoizedState=Yl,l);if(!(t.mode&1))return Pr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=ol(l,r,void 0),Pr(e,t,s,r)}if(a=(s&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xe(e,i),Me(r,e,i,-1))}return qs(),r=ol(Error(S(421))),Pr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ve=dt(i.nextSibling),xe=t,U=!0,Ie=null,e!==null&&(je[Ne++]=He,je[Ne++]=Qe,je[Ne++]=It,He=e.id,Qe=e.overflow,It=t),t=Hs(t,r.children),t.flags|=4096,t)}function la(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,n)}function al(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function wc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ae(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&la(e,n,t);else if(e.tag===19)la(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(b,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,l);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:vc(t),un();break;case 5:Qu(t);break;case 1:me(t.type)&&ei(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?xc(e,t,n):(D(b,b.current&1),e=qe(e,t,n),e!==null?e.sibling:null);D(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,gc(e,t,n)}return qe(e,t,n)}var kc,Xl,Sc,jc;kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};Sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt($e.current);var l=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),l=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),l=[];break;case"textarea":i=kl(e,i),r=kl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}jl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($n.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($n.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};jc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function up(e,t,n){var r=t.pendingProps;switch(Ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Jr(),le(t),null;case 3:return r=t.stateNode,dn(),F(he),F(oe),Us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(is(Ie),Ie=null))),Xl(e,t),le(t),null;case 5:Fs(t);var i=Pt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Sc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return le(t),null}if(e=Pt($e.current),Cr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ue]=t,r[qn]=l,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<Rn.length;i++)A(Rn[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":ho(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":go(r,l),A("invalid",r)}jl(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,a,e),i=["children",""+a]):$n.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&A("scroll",r)}switch(n){case"input":yr(r),mo(r,l,!0);break;case"textarea":yr(r),yo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Zr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ue]=t,e[qn]=r,kc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Nl(n,r),n){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rn.length;i++)A(Rn[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":ho(e,r),i=vl(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),A("invalid",e);break;case"textarea":go(e,r),i=kl(e,r),A("invalid",e);break;default:i=r}jl(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?eu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Za(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bn(e,u):typeof u=="number"&&Bn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($n.hasOwnProperty(l)?u!=null&&l==="onScroll"&&A("scroll",e):u!=null&&ms(e,l,u,s))}switch(n){case"input":yr(e),mo(e,r,!1);break;case"textarea":yr(e),yo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?en(e,!!r.multiple,l,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)jc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Pt(Jn.current),Pt($e.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(l=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(F(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))$u(),un(),t.flags|=98560,l=!1;else if(l=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ue]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Ie!==null&&(is(Ie),Ie=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?X===0&&(X=3):qs())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return dn(),Xl(e,t),e===null&&Gn(t.stateNode.containerInfo),le(t),null;case 10:return Os(t.type._context),le(t),null;case 17:return me(t.type)&&Jr(),le(t),null;case 19:if(F(b),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Cn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=si(e),s!==null){for(t.flags|=128,Cn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(b,b.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>pn&&(t.flags|=128,r=!0,Cn(l,!1),t.lanes=4194304)}else{if(!r)if(e=si(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!U)return le(t),null}else 2*Q()-l.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=b.current,D(b,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function cp(e,t){switch(Ts(t),t.tag){case 1:return me(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),F(he),F(oe),Us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fs(t),null;case 13:if(F(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(b),null;case 4:return dn(),null;case 10:return Os(t.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var _r=!1,se=!1,dp=typeof WeakSet=="function"?WeakSet:Set,E=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){V(e,t,r)}}var sa=!1;function fp(e,t){if(Ol=Gr,e=Pu(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,p=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==l||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++c===i&&(a=s),g===l&&++p===r&&(u=s),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},Gr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,x=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),x);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){V(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return w=sa,sa=!1,w}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ql(t,n,l)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[qn],delete t[Fl],delete t[Yf],delete t[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function oa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}var te=null,Le=!1;function Je(e,t,n){for(n=n.child;n!==null;)Cc(e,t,n),n=n.sibling}function Cc(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(xi,n)}catch{}switch(n.tag){case 5:se||Zt(n,t);case 6:var r=te,i=Le;te=null,Je(e,t,n),te=r,Le=i,te!==null&&(Le?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Le?(e=te,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),Qn(e)):tl(te,n.stateNode));break;case 4:r=te,i=Le,te=n.stateNode.containerInfo,Le=!0,Je(e,t,n),te=r,Le=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&ql(n,t,s),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!se&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,Je(e,t,n),se=r):Je(e,t,n);break;default:Je(e,t,n)}}function aa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dp),t.forEach(function(r){var i=kp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Le=!1;break e;case 3:te=a.stateNode.containerInfo,Le=!0;break e;case 4:te=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(te===null)throw Error(S(160));Cc(l,s,i),te=null,Le=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){V(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zc(t,e),t=t.sibling}function zc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Ae(e),r&4){try{Fn(3,e,e.return),zi(3,e)}catch(y){V(e,e.return,y)}try{Fn(5,e,e.return)}catch(y){V(e,e.return,y)}}break;case 1:Te(t,e),Ae(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Te(t,e),Ae(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{Bn(i,"")}catch(y){V(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ga(i,l),Nl(a,s);var c=Nl(a,l);for(s=0;s<u.length;s+=2){var p=u[s],h=u[s+1];p==="style"?eu(i,h):p==="dangerouslySetInnerHTML"?Za(i,h):p==="children"?Bn(i,h):ms(i,p,h,c)}switch(a){case"input":xl(i,l);break;case"textarea":Xa(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?en(i,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?en(i,!!l.multiple,l.defaultValue,!0):en(i,!!l.multiple,l.multiple?[]:"",!1))}i[qn]=l}catch(y){V(e,e.return,y)}}break;case 6:if(Te(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){V(e,e.return,y)}}break;case 3:if(Te(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(y){V(e,e.return,y)}break;case 4:Te(t,e),Ae(e);break;case 13:Te(t,e),Ae(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ys=Q())),r&4&&aa(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||p,Te(t,e),se=c):Te(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(E=e,p=e.child;p!==null;){for(h=E=p;E!==null;){switch(g=E,v=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:Zt(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){V(r,n,y)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){ca(h);continue}}v!==null?(v.return=g,E=v):ca(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ja("display",s))}catch(y){V(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){V(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Te(t,e),Ae(e),r&4&&aa(e);break;case 21:break;default:Te(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bn(i,""),r.flags&=-33);var l=oa(e);es(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=oa(e);Jl(e,a,s);break;default:throw Error(S(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,n){E=e,Pc(e)}function Pc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_r;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||se;a=_r;var c=se;if(_r=s,(se=u)&&!c)for(E=i;E!==null;)s=E,u=s.child,s.tag===22&&s.memoizedState!==null?da(i):u!==null?(u.return=s,E=u):da(i);for(;l!==null;)E=l,Pc(l),l=l.sibling;E=i,_r=a,se=c}ua(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,E=l):ua(e)}}function ua(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ko(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ko(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}se||t.flags&512&&Zl(t)}catch(g){V(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function ca(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function da(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){V(t,i,u)}}var l=t.return;try{Zl(t)}catch(u){V(t,l,u)}break;case 5:var s=t.return;try{Zl(t)}catch(u){V(t,s,u)}}}catch(u){V(t,t.return,u)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var hp=Math.ceil,ui=Ze.ReactCurrentDispatcher,Qs=Ze.ReactCurrentOwner,Ce=Ze.ReactCurrentBatchConfig,O=0,ee=null,K=null,ne=0,ye=0,Jt=wt(0),X=0,rr=null,Mt=0,Pi=0,Ks=0,Un=null,fe=null,Ys=0,pn=1/0,Ve=null,ci=!1,ts=null,pt=null,Tr=!1,st=null,di=0,bn=0,ns=null,$r=-1,Br=0;function ue(){return O&6?Q():$r!==-1?$r:$r=Q()}function ht(e){return e.mode&1?O&2&&ne!==0?ne&-ne:qf.transition!==null?(Br===0&&(Br=fu()),Br):(e=M,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function Me(e,t,n,r){if(50<bn)throw bn=0,ns=null,Error(S(185));or(e,n,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(Pi|=n),X===4&&it(e,ne)),ge(e,r),n===1&&O===0&&!(t.mode&1)&&(pn=Q()+500,Ni&&kt()))}function ge(e,t){var n=e.callbackNode;Xd(e,t);var r=Yr(e,e===ee?ne:0);if(r===0)n!==null&&wo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wo(n),t===1)e.tag===0?Xf(fa.bind(null,e)):Fu(fa.bind(null,e)),Qf(function(){!(O&6)&&kt()}),n=null;else{switch(pu(r)){case 1:n=ws;break;case 4:n=cu;break;case 16:n=Kr;break;case 536870912:n=du;break;default:n=Kr}n=Dc(n,_c.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _c(e,t){if($r=-1,Br=0,O&6)throw Error(S(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Yr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fi(e,r);else{t=r;var i=O;O|=2;var l=Rc();(ee!==e||ne!==t)&&(Ve=null,pn=Q()+500,_t(e,t));do try{yp();break}catch(a){Tc(e,a)}while(1);Is(),ui.current=l,O=i,K!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=rs(e,i))),t===1)throw n=rr,_t(e,0),it(e,r),ge(e,Q()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!mp(i)&&(t=fi(e,r),t===2&&(l=_l(e),l!==0&&(r=l,t=rs(e,l))),t===1))throw n=rr,_t(e,0),it(e,r),ge(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Et(e,fe,Ve);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Ys+500-Q(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Al(Et.bind(null,e,fe,Ve),t);break}Et(e,fe,Ve);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Oe(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hp(r/1960))-r,10<r){e.timeoutHandle=Al(Et.bind(null,e,fe,Ve),r);break}Et(e,fe,Ve);break;case 5:Et(e,fe,Ve);break;default:throw Error(S(329))}}}return ge(e,Q()),e.callbackNode===n?_c.bind(null,e):null}function rs(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=fi(e,t),e!==2&&(t=fe,fe=n,t!==null&&is(t)),e}function is(e){fe===null?fe=e:fe.push.apply(fe,e)}function mp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ks,t&=~Pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function fa(e){if(O&6)throw Error(S(327));sn();var t=Yr(e,0);if(!(t&1))return ge(e,Q()),null;var n=fi(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=rs(e,r))}if(n===1)throw n=rr,_t(e,0),it(e,t),ge(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,fe,Ve),ge(e,Q()),null}function Gs(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(pn=Q()+500,Ni&&kt())}}function Dt(e){st!==null&&st.tag===0&&!(O&6)&&sn();var t=O;O|=1;var n=Ce.transition,r=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=r,Ce.transition=n,O=t,!(O&6)&&kt()}}function Xs(){ye=Jt.current,F(Jt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:dn(),F(he),F(oe),Us();break;case 5:Fs(r);break;case 4:dn();break;case 13:F(b);break;case 19:F(b);break;case 10:Os(r.type._context);break;case 22:case 23:Xs()}n=n.return}if(ee=e,K=e=mt(e.current,null),ne=ye=t,X=0,rr=null,Ks=Pi=Mt=0,fe=Un=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}zt=null}return e}function Tc(e,t){do{var n=K;try{if(Is(),Fr.current=ai,oi){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(Ot=0,J=G=$=null,An=!1,er=0,Qs.current=null,n===null||n.return===null){X=1,rr=t,K=null;break}e:{var l=e,s=n.return,a=n,u=t;if(t=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Jo(s);if(v!==null){v.flags&=-257,ea(v,s,a,l,t),v.mode&1&&Zo(l,c,t),t=v,u=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(u),t.updateQueue=y}else w.add(u);break e}else{if(!(t&1)){Zo(l,c,t),qs();break e}u=Error(S(426))}}else if(U&&a.mode&1){var x=Jo(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ea(x,s,a,l,t),Rs(fn(u,a));break e}}l=u=fn(u,a),X!==4&&(X=2),Un===null?Un=[l]:Un.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=pc(l,u,t);Qo(l,f);break e;case 1:a=u;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pt===null||!pt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=hc(l,a,t);Qo(l,k);break e}}l=l.return}while(l!==null)}Ic(n)}catch(N){t=N,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function Rc(){var e=ui.current;return ui.current=ai,e===null?ai:e}function qs(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Mt&268435455)&&!(Pi&268435455)||it(ee,ne)}function fi(e,t){var n=O;O|=2;var r=Rc();(ee!==e||ne!==t)&&(Ve=null,_t(e,t));do try{gp();break}catch(i){Tc(e,i)}while(1);if(Is(),O=n,ui.current=r,K!==null)throw Error(S(261));return ee=null,ne=0,X}function gp(){for(;K!==null;)Lc(K)}function yp(){for(;K!==null&&!$d();)Lc(K)}function Lc(e){var t=Mc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Ic(e):K=t,Qs.current=null}function Ic(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=up(n,t,ye),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function Et(e,t,n){var r=M,i=Ce.transition;try{Ce.transition=null,M=1,vp(e,t,n,r)}finally{Ce.transition=i,M=r}return null}function vp(e,t,n,r){do sn();while(st!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(qd(e,l),e===ee&&(K=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,Dc(Kr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var s=M;M=1;var a=O;O|=4,Qs.current=null,fp(e,n),zc(n,e),Ff(Ml),Gr=!!Ol,Ml=Ol=null,e.current=n,pp(n),Bd(),O=a,M=s,Ce.transition=l}else e.current=n;if(Tr&&(Tr=!1,st=e,di=i),l=e.pendingLanes,l===0&&(pt=null),Hd(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=ts,ts=null,e;return di&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===ns?bn++:(bn=0,ns=e):bn=0,kt(),null}function sn(){if(st!==null){var e=pu(di),t=Ce.transition,n=M;try{if(Ce.transition=null,M=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,di=0,O&6)throw Error(S(331));var i=O;for(O|=4,E=e.current;E!==null;){var l=E,s=l.child;if(E.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(E=c;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:Fn(8,p,l)}var h=p.child;if(h!==null)h.return=p,E=h;else for(;E!==null;){p=E;var g=p.sibling,v=p.return;if(Nc(p),p===c){E=null;break}if(g!==null){g.return=v,E=g;break}E=v}}}var w=l.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}E=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,E=s;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Fn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var d=e.current;for(E=d;E!==null;){s=E;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,E=m;else e:for(s=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zi(9,a)}}catch(N){V(a,a.return,N)}if(a===s){E=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,E=k;break e}E=a.return}}if(O=i,kt(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(xi,e)}catch{}r=!0}return r}finally{M=n,Ce.transition=t}}return!1}function pa(e,t,n){t=fn(n,t),t=pc(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(or(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)pa(e,e,n);else for(;t!==null;){if(t.tag===3){pa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=fn(n,e),e=hc(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(or(t,1,e),ge(t,e));break}}t=t.return}}function xp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-Ys?_t(e,0):Ks|=n),ge(e,t)}function Oc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(or(e,t,n),ge(e,n))}function wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Oc(e,n)}function kp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Oc(e,n)}var Mc;Mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,ap(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&Uu(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var i=an(t,oe.current);ln(t,n),i=$s(null,t,r,e,i,n);var l=Bs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(l=!0,ei(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ds(t),i.updater=Ci,t.stateNode=i,i._reactInternals=t,Wl(t,r,e,n),t=Kl(null,t,r,!0,l,n)):(t.tag=0,U&&l&&_s(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=jp(r),e=Re(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=ra(null,t,r,e,n);break e;case 11:t=ta(null,t,r,e,n);break e;case 14:t=na(null,t,r,Re(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),ra(e,t,r,i,n);case 3:e:{if(vc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Hu(e,t),li(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=fn(Error(S(423)),t),t=ia(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(S(424)),t),t=ia(e,t,r,n,i);break e}else for(ve=dt(t.stateNode.containerInfo.firstChild),xe=t,U=!0,Ie=null,n=Vu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=qe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Qu(t),e===null&&$l(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Dl(r,i)?s=null:l!==null&&Dl(r,l)&&(t.flags|=32),yc(e,t),ae(e,t,s,n),t.child;case 6:return e===null&&$l(t),null;case 13:return xc(e,t,n);case 4:return As(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),ta(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,D(ri,r._currentValue),r._currentValue=s,l!==null)if(De(l.value,s)){if(l.children===i.children&&!he.current){t=qe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ke(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Bl(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=ze(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Re(r,t.pendingProps),i=Re(r.type,i),na(e,t,r,i,n);case 15:return mc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),br(e,t),t.tag=1,me(r)?(e=!0,ei(t)):e=!1,ln(t,n),fc(t,r,i),Wl(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return gc(e,t,n)}throw Error(S(156,t.tag))};function Dc(e,t){return uu(e,t)}function Sp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Sp(e,t,n,r)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return Zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ys)return 11;if(e===vs)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")Zs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Vt:return Tt(n.children,i,l,t);case gs:s=8,i|=8;break;case hl:return e=Ee(12,n,t,i|2),e.elementType=hl,e.lanes=l,e;case ml:return e=Ee(13,n,t,i),e.elementType=ml,e.lanes=l,e;case gl:return e=Ee(19,n,t,i),e.elementType=gl,e.lanes=l,e;case Qa:return _i(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wa:s=10;break e;case Ha:s=9;break e;case ys:s=11;break e;case vs:s=14;break e;case tt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ee(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Tt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function _i(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Qa,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Np(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Js(e,t,n,r,i,l,s,a,u){return e=new Np(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(l),e}function Ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ac(e){if(!e)return vt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(me(n))return Au(e,n,t)}return t}function Fc(e,t,n,r,i,l,s,a,u){return e=Js(n,r,!0,e,i,l,s,a,u),e.context=Ac(null),n=e.current,r=ue(),i=ht(n),l=Ke(r,i),l.callback=t??null,ft(n,l,i),e.current.lanes=i,or(e,i,r),ge(e,r),e}function Ti(e,t,n,r){var i=t.current,l=ue(),s=ht(i);return n=Ac(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,s),e!==null&&(Me(e,i,s,l),Ar(e,i,s)),s}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ha(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eo(e,t){ha(e,t),(e=e.alternate)&&ha(e,t)}function Cp(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function to(e){this._internalRoot=e}Ri.prototype.render=to.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ti(e,t,null,null)};Ri.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Ti(null,e,null,null)}),t[Ge]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&vu(e)}};function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ma(){}function zp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=pi(s);l.call(c)}}var s=Fc(t,r,e,0,null,!1,!1,"",ma);return e._reactRootContainer=s,e[Ge]=s.current,Gn(e.nodeType===8?e.parentNode:e),Dt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=pi(u);a.call(c)}}var u=Js(e,0,!1,null,null,!1,!1,"",ma);return e._reactRootContainer=u,e[Ge]=u.current,Gn(e.nodeType===8?e.parentNode:e),Dt(function(){Ti(t,u,n,r)}),u}function Ii(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var u=pi(s);a.call(u)}}Ti(t,s,e,i)}else s=zp(n,t,e,i,r);return pi(s)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(ks(t,n|1),ge(t,Q()),!(O&6)&&(pn=Q()+500,kt()))}break;case 13:Dt(function(){var r=Xe(e,1);if(r!==null){var i=ue();Me(r,e,1,i)}}),eo(e,1)}};Ss=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}eo(e,134217728)}};mu=function(e){if(e.tag===13){var t=ht(e),n=Xe(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}eo(e,t)}};gu=function(){return M};yu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Cl=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ji(r);if(!i)throw Error(S(90));Ya(r),xl(r,i)}}}break;case"textarea":Xa(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};ru=Gs;iu=Dt;var Pp={usingClientEntryPoint:!1,Events:[ur,Kt,ji,tu,nu,Gs]},zn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{xi=Rr.inject(_p),be=Rr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!no(t))throw Error(S(200));return Ep(e,t,null,n)};ke.createRoot=function(e,t){if(!no(e))throw Error(S(299));var n=!1,r="",i=Uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Js(e,1,!1,null,null,n,!1,r,i),e[Ge]=t.current,Gn(e.nodeType===8?e.parentNode:e),new to(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Dt(e)};ke.hydrate=function(e,t,n){if(!Li(t))throw Error(S(200));return Ii(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!no(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=Uc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fc(t,null,e,1,n??null,i,!1,l,s),e[Ge]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ri(t)};ke.render=function(e,t,n){if(!Li(t))throw Error(S(200));return Ii(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Li(e))throw Error(S(40));return e._reactRootContainer?(Dt(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ke.unstable_batchedUpdates=Gs;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ii(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),ba.exports=ke;var Tp=ba.exports,ga=Tp;fl.createRoot=ga.createRoot,fl.hydrateRoot=ga.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const ya="popstate";function Rp(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:s,hash:a}=r.location;return ls("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hi(i)}return Ip(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $c(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lp(){return Math.random().toString(36).substr(2,8)}function va(e,t){return{usr:e.state,key:e.key,idx:t}}function ls(e,t,n,r){return n===void 0&&(n=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||Lp()})}function hi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ip(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,s=i.history,a=ot.Pop,u=null,c=p();c==null&&(c=0,s.replaceState(ir({},s.state,{idx:c}),""));function p(){return(s.state||{idx:null}).idx}function h(){a=ot.Pop;let x=p(),f=x==null?null:x-c;c=x,u&&u({action:a,location:y.location,delta:f})}function g(x,f){a=ot.Push;let d=ls(y.location,x,f);n&&n(d,x),c=p()+1;let m=va(d,c),k=y.createHref(d);try{s.pushState(m,"",k)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(k)}l&&u&&u({action:a,location:y.location,delta:1})}function v(x,f){a=ot.Replace;let d=ls(y.location,x,f);n&&n(d,x),c=p();let m=va(d,c),k=y.createHref(d);s.replaceState(m,"",k),l&&u&&u({action:a,location:y.location,delta:0})}function w(x){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:hi(x);return d=d.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let y={get action(){return a},get location(){return e(i,s)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ya,h),u=x,()=>{i.removeEventListener(ya,h),u=null}},createHref(x){return t(i,x)},createURL:w,encodeLocation(x){let f=w(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(x){return s.go(x)}};return y}var xa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xa||(xa={}));function Op(e,t,n){return n===void 0&&(n="/"),Mp(e,t,n,!1)}function Mp(e,t,n,r){let i=typeof t=="string"?yn(t):t,l=ro(i.pathname||"/",n);if(l==null)return null;let s=Bc(e);Dp(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Kp(l);a=Hp(s[u],c,r)}return a}function Bc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,s,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=gt([r,u.relativePath]),p=n.concat(u);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bc(l.children,t,p,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Vp(c,l.index),routesMeta:p})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,s);else for(let u of Vc(l.path))i(l,s,u)}),t}function Vc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let s=Vc(r.join("/")),a=[];return a.push(...s.map(u=>u===""?l:[l,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Dp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ap=/^:[\w-]+$/,Fp=3,Up=2,bp=1,$p=10,Bp=-2,wa=e=>e==="*";function Vp(e,t){let n=e.split("/"),r=n.length;return n.some(wa)&&(r+=Bp),t&&(r+=Up),n.filter(i=>!wa(i)).reduce((i,l)=>i+(Ap.test(l)?Fp:l===""?bp:$p),r)}function Wp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hp(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},l="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",h=ka({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=ka({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:gt([l,h.pathname]),pathnameBase:qp(gt([l,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(l=gt([l,h.pathnameBase]))}return s}function ka(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,p,h)=>{let{paramName:g,isOptional:v}=p;if(g==="*"){let y=a[h]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[h];return v&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:s,pattern:e}}function Qp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$c(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Kp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ro(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:Gp(n,t):t,search:Zp(r),hash:Jp(i)}}function Gp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wc(e,t){let n=Xp(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=yn(e):(i=ir({},e),Y(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?t[h]:"/"}let u=Yp(i,a),c=s&&s!=="/"&&s.endsWith("/"),p=(l||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const gt=e=>e.join("/").replace(/\/\/+/g,"/"),qp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qc=["post","put","patch","delete"];new Set(Qc);const th=["get",...Qc];new Set(th);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}const io=j.createContext(null),nh=j.createContext(null),Ut=j.createContext(null),Oi=j.createContext(null),bt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Kc=j.createContext(null);function rh(e,t){let{relative:n}=t===void 0?{}:t;dr()||Y(!1);let{basename:r,navigator:i}=j.useContext(Ut),{hash:l,pathname:s,search:a}=Gc(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:gt([r,s])),i.createHref({pathname:u,search:a,hash:l})}function dr(){return j.useContext(Oi)!=null}function fr(){return dr()||Y(!1),j.useContext(Oi).location}function Yc(e){j.useContext(Ut).static||j.useLayoutEffect(e)}function Mi(){let{isDataRoute:e}=j.useContext(bt);return e?gh():ih()}function ih(){dr()||Y(!1);let e=j.useContext(io),{basename:t,future:n,navigator:r}=j.useContext(Ut),{matches:i}=j.useContext(bt),{pathname:l}=fr(),s=JSON.stringify(Wc(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return Yc(()=>{a.current=!0}),j.useCallback(function(c,p){if(p===void 0&&(p={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Hc(c,JSON.parse(s),l,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:gt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,s,l,e])}function Gc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Ut),{matches:i}=j.useContext(bt),{pathname:l}=fr(),s=JSON.stringify(Wc(i,r.v7_relativeSplatPath));return j.useMemo(()=>Hc(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function lh(e,t){return sh(e,t)}function sh(e,t,n,r){dr()||Y(!1);let{navigator:i}=j.useContext(Ut),{matches:l}=j.useContext(bt),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=fr(),p;if(t){var h;let x=typeof t=="string"?yn(t):t;u==="/"||(h=x.pathname)!=null&&h.startsWith(u)||Y(!1),p=x}else p=c;let g=p.pathname||"/",v=g;if(u!=="/"){let x=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=Op(e,{pathname:v}),y=dh(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:gt([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:gt([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,n,r);return t&&y?j.createElement(Oi.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:ot.Pop}},y):y}function oh(){let e=mh(),t=eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,l)}const ah=j.createElement(oh,null);class uh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(bt.Provider,{value:this.props.routeContext},j.createElement(Kc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(io);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(bt.Provider,{value:t},r)}function dh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);p>=0||Y(!1),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=p),h.route.id){let{loaderData:g,errors:v}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||w){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,h,g)=>{let v,w=!1,y=null,x=null;n&&(v=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||ah,u&&(c<0&&g===0?(yh("route-fallback",!1),w=!0,x=null):c===g&&(w=!0,x=h.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,g+1)),d=()=>{let m;return v?m=y:w?m=x:h.route.Component?m=j.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=p,j.createElement(ch,{match:h,routeContext:{outlet:p,matches:f,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?j.createElement(uh,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Xc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xc||{}),mi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mi||{});function fh(e){let t=j.useContext(io);return t||Y(!1),t}function ph(e){let t=j.useContext(nh);return t||Y(!1),t}function hh(e){let t=j.useContext(bt);return t||Y(!1),t}function qc(e){let t=hh(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function mh(){var e;let t=j.useContext(Kc),n=ph(mi.UseRouteError),r=qc(mi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gh(){let{router:e}=fh(Xc.UseNavigateStable),t=qc(mi.UseNavigateStable),n=j.useRef(!1);return Yc(()=>{n.current=!0}),j.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,lr({fromRouteId:t},l)))},[e,t])}const Sa={};function yh(e,t,n){!t&&!Sa[e]&&(Sa[e]=!0)}function vh(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function et(e){Y(!1)}function xh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ot.Pop,navigator:l,static:s=!1,future:a}=e;dr()&&Y(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:l,static:s,future:lr({v7_relativeSplatPath:!1},a)}),[u,a,l,s]);typeof r=="string"&&(r=yn(r));let{pathname:p="/",search:h="",hash:g="",state:v=null,key:w="default"}=r,y=j.useMemo(()=>{let x=ro(p,u);return x==null?null:{location:{pathname:x,search:h,hash:g,state:v,key:w},navigationType:i}},[u,p,h,g,v,w,i]);return y==null?null:j.createElement(Ut.Provider,{value:c},j.createElement(Oi.Provider,{children:n,value:y}))}function wh(e){let{children:t,location:n}=e;return lh(ss(t),n)}new Promise(()=>{});function ss(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let l=[...t,i];if(r.type===j.Fragment){n.push.apply(n,ss(r.props.children,l));return}r.type!==et&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ss(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function kh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Sh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jh(e,t){return e.button===0&&(!t||t==="_self")&&!Sh(e)}const Nh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Eh="6";try{window.__reactRouterVersion=Eh}catch{}const Ch="startTransition",ja=vd[Ch];function zh(e){let{basename:t,children:n,future:r,window:i}=e,l=j.useRef();l.current==null&&(l.current=Rp({window:i,v5Compat:!0}));let s=l.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},p=j.useCallback(h=>{c&&ja?ja(()=>u(h)):u(h)},[u,c]);return j.useLayoutEffect(()=>s.listen(p),[s,p]),j.useEffect(()=>vh(r),[r]),j.createElement(xh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ph=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_h=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:s,state:a,target:u,to:c,preventScrollReset:p,viewTransition:h}=t,g=kh(t,Nh),{basename:v}=j.useContext(Ut),w,y=!1;if(typeof c=="string"&&_h.test(c)&&(w=c,Ph))try{let m=new URL(window.location.href),k=c.startsWith("//")?new URL(m.protocol+c):new URL(c),N=ro(k.pathname,v);k.origin===m.origin&&N!=null?c=N+k.search+k.hash:y=!0}catch{}let x=rh(c,{relative:i}),f=Th(c,{replace:s,state:a,target:u,preventScrollReset:p,relative:i,viewTransition:h});function d(m){r&&r(m),m.defaultPrevented||f(m)}return j.createElement("a",os({},g,{href:w||x,onClick:y||l?r:d,ref:n,target:u}))});var Na;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Na||(Na={}));var Ea;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ea||(Ea={}));function Th(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:s,viewTransition:a}=t===void 0?{}:t,u=Mi(),c=fr(),p=Gc(e,{relative:s});return j.useCallback(h=>{if(jh(h,n)){h.preventDefault();let g=r!==void 0?r:hi(c)===hi(p);u(e,{replace:g,state:i,preventScrollReset:l,relative:s,viewTransition:a})}},[c,u,p,r,i,n,e,l,s,a])}var Rh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Lh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ih=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,children:a,...u},c)=>j.createElement("svg",{ref:c,...Rh,width:i,height:i,stroke:r,strokeWidth:s?Number(l)*24/Number(i):l,className:`lucide lucide-${Lh(e)}`,...u},[...t.map(([p,h])=>j.createElement(p,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var q=Ih;const Ca=q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),gi=q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),yi=q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),za=q("Bot",[["rect",{width:"18",height:"10",x:"3",y:"11",rx:"2",key:"1ofdy3"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"M12 7v4",key:"xawao1"}],["line",{x1:"8",x2:"8",y1:"16",y2:"16",key:"h6x27f"}],["line",{x1:"16",x2:"16",y1:"16",y2:"16",key:"5lty7f"}]]),Pa=q("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Oh=q("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Mh=q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Dh=q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Ah=q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Be=q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Fh=q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Zc=q("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),lo=q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Uh=q("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),bh=q("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),Jc=q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),$h=q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Bh=q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Vh=q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const Wh=()=>{const[e,t]=j.useState(!1),n=fr(),r=[{path:"/",label:"Home"},{path:"/tests",label:"Vision Tests"},{path:"/ai-consultation",label:"AI Consultation"},{path:"/results",label:"Results"}],i=l=>n.pathname===l;return o.jsx("nav",{className:"navbar",children:o.jsxs("div",{className:"navbar-container",children:[o.jsxs(Rt,{to:"/",className:"navbar-brand",children:[o.jsx(Be,{className:"brand-icon"}),o.jsxs("div",{className:"brand-text",children:[o.jsx("h2",{className:"brand-title",children:"VisionCare"}),o.jsx("span",{className:"brand-subtitle",children:"Diagnostics"})]})]}),o.jsx("div",{className:`navbar-menu ${e?"active":""}`,children:r.map(l=>o.jsx(Rt,{to:l.path,className:`navbar-link ${i(l.path)?"active":""}`,onClick:()=>t(!1),children:l.label},l.path))}),o.jsx("button",{className:"navbar-toggle",onClick:()=>t(!e),children:e?o.jsx(Vh,{}):o.jsx(Fh,{})})]})})},Hh=()=>{const e=[{icon:o.jsx(Be,{className:"feature-icon"}),title:"Comprehensive Vision Tests",description:"Professional-grade screening tests including color blindness, visual acuity, and astigmatism detection"},{icon:o.jsx(Pa,{className:"feature-icon"}),title:"AI Eye Specialist",description:"Get expert guidance from our AI-powered virtual eye care specialist available 24/7"},{icon:o.jsx(bh,{className:"feature-icon"}),title:"Secure Results Tracking",description:"Track your vision health over time with secure, private result storage and analysis"}],t=[{number:"10,000+",label:"Tests Completed"},{number:"95%",label:"Accuracy Rate"},{number:"24/7",label:"AI Support"},{number:"100%",label:"Privacy Protected"}];return o.jsxs("div",{className:"home-page",children:[o.jsxs("div",{className:"container",children:[o.jsxs("section",{className:"hero-section",children:[o.jsxs("div",{className:"hero-content",children:[o.jsx("h1",{className:"hero-title",children:"Advanced Vision Care at Your Fingertips"}),o.jsx("p",{className:"hero-subtitle",children:"Professional-grade eye health screening with AI-powered consultation. Take control of your vision health with comprehensive diagnostic tools and expert guidance from the comfort of your home."}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs(Rt,{to:"/tests",className:"btn btn-primary hero-btn",children:["Start Vision Test",o.jsx(yi,{})]}),o.jsxs(Rt,{to:"/ai-consultation",className:"btn btn-secondary hero-btn",children:["Consult AI Specialist",o.jsx(Pa,{})]})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsx("div",{className:"hero-eye-icon",children:o.jsx(Be,{size:120})})})]}),o.jsxs("section",{className:"features-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{className:"section-title",children:"Why Choose VisionCare Diagnostics?"}),o.jsx("p",{className:"section-subtitle",children:"Cutting-edge technology meets professional eye care expertise"})]}),o.jsx("div",{className:"features-grid",children:e.map((n,r)=>o.jsxs("div",{className:"feature-card",children:[n.icon,o.jsx("h3",{className:"feature-title",children:n.title}),o.jsx("p",{className:"feature-description",children:n.description})]},r))})]}),o.jsx("section",{className:"stats-section",children:o.jsx("div",{className:"stats-grid",children:t.map((n,r)=>o.jsxs("div",{className:"stat-item",children:[o.jsx("div",{className:"stat-number",children:n.number}),o.jsx("div",{className:"stat-label",children:n.label})]},r))})}),o.jsxs("section",{className:"how-it-works",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{className:"section-title",children:"How It Works"}),o.jsx("p",{className:"section-subtitle",children:"Simple, fast, and accurate vision screening in just a few steps"})]}),o.jsxs("div",{className:"steps-grid",children:[o.jsxs("div",{className:"step-item",children:[o.jsx("div",{className:"step-number",children:"1"}),o.jsxs("div",{className:"step-content",children:[o.jsx("h4",{children:"Choose Your Test"}),o.jsx("p",{children:"Select from our comprehensive suite of vision screening tests"})]})]}),o.jsxs("div",{className:"step-item",children:[o.jsx("div",{className:"step-number",children:"2"}),o.jsxs("div",{className:"step-content",children:[o.jsx("h4",{children:"Follow Instructions"}),o.jsx("p",{children:"Complete the test following our clear, step-by-step guidance"})]})]}),o.jsxs("div",{className:"step-item",children:[o.jsx("div",{className:"step-number",children:"3"}),o.jsxs("div",{className:"step-content",children:[o.jsx("h4",{children:"Get Results"}),o.jsx("p",{children:"Receive instant analysis and personalized recommendations"})]})]}),o.jsxs("div",{className:"step-item",children:[o.jsx("div",{className:"step-number",children:"4"}),o.jsxs("div",{className:"step-content",children:[o.jsx("h4",{children:"Consult AI Specialist"}),o.jsx("p",{children:"Discuss your results with our AI eye care specialist"})]})]})]})]}),o.jsx("section",{className:"cta-section",children:o.jsxs("div",{className:"cta-card",children:[o.jsx("h2",{className:"cta-title",children:"Ready to Check Your Vision?"}),o.jsx("p",{className:"cta-description",children:"Take the first step towards better eye health with our comprehensive vision screening suite."}),o.jsx("div",{className:"cta-actions",children:o.jsxs(Rt,{to:"/tests",className:"btn btn-primary cta-btn",children:["Start Free Assessment",o.jsx(yi,{})]})})]})})]}),o.jsx("style",{jsx:!0,children:`
        .home-page {
          min-height: 100vh;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 80px 0;
          min-height: 600px;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin: 0;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-eye-icon {
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .features-section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 16px 0;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          color: #667eea;
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .feature-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .stats-section {
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .stat-item {
          text-align: center;
          color: white;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
          font-weight: 500;
        }

        .how-it-works {
          padding: 80px 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .step-item {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .step-content p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .cta-section {
          padding: 80px 0;
        }

        .cta-card {
          background: white;
          padding: 60px 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .cta-description {
          font-size: 1.2rem;
          color: #6b7280;
          margin: 0 0 32px 0;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
        }

        .cta-btn {
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            padding: 60px 0;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-eye-icon {
            width: 150px;
            height: 150px;
          }

          .section-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .step-item {
            flex-direction: column;
            text-align: center;
          }

          .cta-card {
            padding: 40px 20px;
          }

          .cta-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `})]})},Qh=()=>{const e=[{id:"color-blind",title:"Color Blindness Test",description:"Ishihara color perception test to detect color vision deficiencies",icon:o.jsx(Zc,{className:"test-icon"}),duration:"3-5 minutes",difficulty:"Easy",path:"/test/color-blind"},{id:"visual-acuity",title:"Visual Acuity Test",description:"Snellen chart test to measure sharpness of vision",icon:o.jsx(Be,{className:"test-icon"}),duration:"5-7 minutes",difficulty:"Medium",path:"/test/visual-acuity"},{id:"astigmatism",title:"Astigmatism Test",description:"Radial dial test to detect astigmatism and irregular cornea shape",icon:o.jsx(Jc,{className:"test-icon"}),duration:"4-6 minutes",difficulty:"Medium",path:"/test/astigmatism"}];return o.jsxs("div",{className:"vision-tests-page",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"page-header",children:[o.jsx("h1",{className:"page-title",children:"Vision Screening Tests"}),o.jsx("p",{className:"page-subtitle",children:"Comprehensive eye health assessment using clinically validated testing methods"})]}),o.jsx("div",{className:"tests-grid",children:e.map(t=>o.jsxs("div",{className:"test-card",children:[o.jsxs("div",{className:"test-header",children:[t.icon,o.jsxs("div",{className:"test-meta",children:[o.jsxs("span",{className:"test-duration",children:[o.jsx(Dh,{size:16}),t.duration]}),o.jsx("span",{className:`test-difficulty ${t.difficulty.toLowerCase()}`,children:t.difficulty})]})]}),o.jsxs("div",{className:"test-content",children:[o.jsx("h3",{className:"test-title",children:t.title}),o.jsx("p",{className:"test-description",children:t.description})]}),o.jsx("div",{className:"test-actions",children:o.jsxs(Rt,{to:t.path,className:"btn btn-primary test-btn",children:["Start Test",o.jsx(yi,{size:18})]})})]},t.id))}),o.jsx("div",{className:"instructions-section",children:o.jsxs("div",{className:"card",children:[o.jsx("h2",{className:"instructions-title",children:"Before You Begin"}),o.jsxs("div",{className:"instructions-grid",children:[o.jsxs("div",{className:"instruction-item",children:[o.jsx("div",{className:"instruction-number",children:"1"}),o.jsxs("div",{className:"instruction-content",children:[o.jsx("h4",{children:"Prepare Your Environment"}),o.jsx("p",{children:"Ensure good lighting and sit at arm's length from your screen"})]})]}),o.jsxs("div",{className:"instruction-item",children:[o.jsx("div",{className:"instruction-number",children:"2"}),o.jsxs("div",{className:"instruction-content",children:[o.jsx("h4",{children:"Remove Glasses/Contacts"}),o.jsx("p",{children:"Test your natural vision first, then repeat with corrective lenses if needed"})]})]}),o.jsxs("div",{className:"instruction-item",children:[o.jsx("div",{className:"instruction-number",children:"3"}),o.jsxs("div",{className:"instruction-content",children:[o.jsx("h4",{children:"Follow Instructions"}),o.jsx("p",{children:"Read each test's specific instructions carefully for accurate results"})]})]}),o.jsxs("div",{className:"instruction-item",children:[o.jsx("div",{className:"instruction-number",children:"4"}),o.jsxs("div",{className:"instruction-content",children:[o.jsx("h4",{children:"Take Your Time"}),o.jsx("p",{children:"Don't rush - accurate results are more important than speed"})]})]})]})]})}),o.jsx("div",{className:"disclaimer-section",children:o.jsxs("div",{className:"disclaimer-card",children:[o.jsx("h3",{className:"disclaimer-title",children:"Important Disclaimer"}),o.jsx("p",{className:"disclaimer-text",children:"These tests are for screening purposes only and do not replace professional eye examinations. If you have concerns about your vision or eye health, please consult with a qualified eye care professional. Regular comprehensive eye exams are recommended for maintaining optimal eye health."})]})})]}),o.jsx("style",{jsx:!0,children:`
        .vision-tests-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .tests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .test-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .test-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .test-icon {
          width: 48px;
          height: 48px;
          color: #667eea;
        }

        .test-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .test-duration {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .test-difficulty {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .test-difficulty.easy {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }

        .test-difficulty.medium {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }

        .test-difficulty.hard {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .test-content {
          margin-bottom: 24px;
        }

        .test-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 12px 0;
        }

        .test-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .test-actions {
          display: flex;
          justify-content: center;
        }

        .test-btn {
          width: 100%;
          justify-content: center;
        }

        .instructions-section {
          margin-bottom: 40px;
        }

        .instructions-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 30px 0;
          text-align: center;
        }

        .instructions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .instruction-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .instruction-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .instruction-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
        }

        .instruction-content p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .disclaimer-section {
          margin-top: 40px;
        }

        .disclaimer-card {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #d97706;
          margin: 0 0 16px 0;
        }

        .disclaimer-text {
          color: #92400e;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .tests-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .test-card {
            padding: 24px;
          }

          .instructions-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .disclaimer-card {
            padding: 20px;
          }
        }
      `})]})},Kh=()=>{const e=Mi(),[t,n]=j.useState(0),[r,i]=j.useState({}),[l,s]=j.useState(""),[a,u]=j.useState(!1),c=[{id:1,correctAnswer:"12",description:"Normal vision should see 12"},{id:2,correctAnswer:"8",description:"Normal vision should see 8"},{id:3,correctAnswer:"29",description:"Normal vision should see 29"},{id:4,correctAnswer:"5",description:"Normal vision should see 5"},{id:5,correctAnswer:"3",description:"Normal vision should see 3"},{id:6,correctAnswer:"15",description:"Normal vision should see 15"},{id:7,correctAnswer:"74",description:"Normal vision should see 74"},{id:8,correctAnswer:"6",description:"Normal vision should see 6"}],p=()=>{l.trim()&&(i(y=>({...y,[t]:l.trim()})),s(""),t<c.length-1?n(y=>y+1):u(!0))},h=()=>{t>0&&(n(y=>y-1),s(r[t-1]||""))},g=()=>{let y=0;c.forEach((f,d)=>{r[d]===f.correctAnswer&&y++});const x=y/c.length*100;return x>=80?{status:"Normal",message:"Your color vision appears to be normal.",color:"success"}:x>=60?{status:"Mild Deficiency",message:"You may have a mild color vision deficiency.",color:"warning"}:{status:"Significant Deficiency",message:"You may have a significant color vision deficiency.",color:"danger"}},v=()=>{n(0),i({}),s(""),u(!1)},w=()=>{const y=g(),x={testType:"Color Blindness Test",date:new Date().toISOString(),score:`${Object.keys(r).filter(d=>r[d]===c[d].correctAnswer).length}/${c.length}`,status:y.status,details:y.message},f=JSON.parse(localStorage.getItem("visionTestResults")||"[]");f.push(x),localStorage.setItem("visionTestResults",JSON.stringify(f)),e("/results")};if(a){const y=g();return o.jsx("div",{className:"test-complete",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"results-card",children:[o.jsx("h2",{className:"results-title",children:"Color Blindness Test Complete"}),o.jsxs("div",{className:`results-status ${y.color}`,children:[o.jsx("h3",{children:y.status}),o.jsx("p",{children:y.message})]}),o.jsxs("div",{className:"results-details",children:[o.jsx("h4",{children:"Test Summary"}),o.jsxs("p",{children:["Correct answers: ",Object.keys(r).filter(x=>r[x]===c[x].correctAnswer).length," out of ",c.length]}),o.jsxs("p",{children:["Accuracy: ",Math.round(Object.keys(r).filter(x=>r[x]===c[x].correctAnswer).length/c.length*100),"%"]})]}),o.jsxs("div",{className:"results-actions",children:[o.jsxs("button",{onClick:v,className:"btn btn-secondary",children:[o.jsx(lo,{}),"Retake Test"]}),o.jsx("button",{onClick:w,className:"btn btn-primary",children:"Save Results"})]})]})})})}return o.jsxs("div",{className:"color-blind-test",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"test-header",children:[o.jsxs("button",{onClick:()=>e("/tests"),className:"btn btn-secondary",children:[o.jsx(gi,{}),"Back to Tests"]}),o.jsxs("div",{className:"test-progress",children:[o.jsxs("span",{children:["Question ",t+1," of ",c.length]}),o.jsx("div",{className:"progress-bar",children:o.jsx("div",{className:"progress-fill",style:{width:`${(t+1)/c.length*100}%`}})})]})]}),o.jsx("div",{className:"test-content",children:o.jsxs("div",{className:"test-card",children:[o.jsx("h2",{className:"test-title",children:"Color Blindness Test"}),o.jsx("p",{className:"test-instruction",children:`Look at the circle below and enter the number you see. If you don't see a number, enter "0".`}),o.jsx("div",{className:"plate-container",children:o.jsx("div",{className:"ishihara-plate",children:o.jsx("div",{className:`plate plate-${c[t].id}`,children:o.jsx("span",{className:"plate-number",children:c[t].correctAnswer})})})}),o.jsxs("div",{className:"answer-section",children:[o.jsx("label",{htmlFor:"answer",className:"answer-label",children:"What number do you see?"}),o.jsx("input",{id:"answer",type:"text",value:l,onChange:y=>s(y.target.value),className:"answer-input",placeholder:"Enter the number",maxLength:"3",onKeyPress:y=>y.key==="Enter"&&p()})]}),o.jsxs("div",{className:"test-actions",children:[o.jsxs("button",{onClick:h,className:"btn btn-secondary",disabled:t===0,children:[o.jsx(gi,{}),"Previous"]}),o.jsxs("button",{onClick:p,className:"btn btn-primary",disabled:!l.trim(),children:[t===c.length-1?"Finish Test":"Next",o.jsx(yi,{})]})]})]})})]}),o.jsx("style",{jsx:!0,children:`
        .color-blind-test {
          min-height: 100vh;
          padding: 20px 0 60px 0;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          background: white;
          padding: 20px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .test-progress {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .test-progress span {
          font-weight: 600;
          color: #374151;
        }

        .progress-bar {
          width: 200px;
          height: 6px;
          background: #f3f4f6;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .test-content {
          display: flex;
          justify-content: center;
        }

        .test-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        .test-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .test-instruction {
          color: #6b7280;
          font-size: 1.1rem;
          margin: 0 0 40px 0;
          line-height: 1.6;
        }

        .plate-container {
          margin: 40px 0;
          display: flex;
          justify-content: center;
        }

        .ishihara-plate {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .plate {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .plate-number {
          font-size: 4rem;
          font-weight: 900;
          opacity: 0.7;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        /* Simulated Ishihara plates */
        .plate-1 {
          background: radial-gradient(circle, #ff6b6b 20%, #4ecdc4 20%, #4ecdc4 40%, #ff6b6b 40%, #ff6b6b 60%, #4ecdc4 60%);
        }

        .plate-2 {
          background: radial-gradient(circle, #95e1d3 25%, #f38ba8 25%, #f38ba8 50%, #95e1d3 50%);
        }

        .plate-3 {
          background: radial-gradient(circle, #a8e6cf 30%, #ff8b94 30%, #ff8b94 60%, #a8e6cf 60%);
        }

        .plate-4 {
          background: radial-gradient(circle, #ffd93d 35%, #6bcf7f 35%, #6bcf7f 65%, #ffd93d 65%);
        }

        .plate-5 {
          background: radial-gradient(circle, #74b9ff 25%, #fd79a8 25%, #fd79a8 50%, #74b9ff 50%);
        }

        .plate-6 {
          background: radial-gradient(circle, #55a3ff 30%, #f8b500 30%, #f8b500 60%, #55a3ff 60%);
        }

        .plate-7 {
          background: radial-gradient(circle, #ff7675 20%, #00b894 20%, #00b894 40%, #ff7675 40%);
        }

        .plate-8 {
          background: radial-gradient(circle, #a29bfe 35%, #fd79a8 35%, #fd79a8 65%, #a29bfe 65%);
        }

        .answer-section {
          margin: 40px 0;
        }

        .answer-label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .answer-input {
          width: 200px;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1.2rem;
          text-align: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .answer-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .test-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 40px;
        }

        .test-complete {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .results-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .results-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 30px 0;
        }

        .results-status {
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 30px;
        }

        .results-status.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .results-status.success h3 {
          color: #059669;
        }

        .results-status.warning {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .results-status.warning h3 {
          color: #d97706;
        }

        .results-status.danger {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .results-status.danger h3 {
          color: #dc2626;
        }

        .results-status h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .results-status p {
          margin: 0;
          font-size: 1.1rem;
        }

        .results-details {
          background: #f9fafb;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .results-details h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
        }

        .results-details p {
          color: #6b7280;
          margin: 4px 0;
        }

        .results-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .test-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .progress-bar {
            width: 150px;
          }

          .test-card {
            padding: 30px 20px;
          }

          .ishihara-plate {
            width: 250px;
            height: 250px;
          }

          .plate-number {
            font-size: 3rem;
          }

          .test-actions {
            flex-direction: column;
            align-items: center;
          }

          .results-actions {
            flex-direction: column;
          }
        }
      `})]})},Yh=()=>{const e=Mi(),[t,n]=j.useState(0),[r,i]=j.useState({}),[l,s]=j.useState("left"),[a,u]=j.useState(!1),[c,p]=j.useState(null),h=[{size:"20/200",letters:["E"],fontSize:"4rem"},{size:"20/100",letters:["F","P"],fontSize:"3rem"},{size:"20/70",letters:["T","O","Z"],fontSize:"2.5rem"},{size:"20/50",letters:["L","P","E","D"],fontSize:"2rem"},{size:"20/40",letters:["E","D","F","C","Z"],fontSize:"1.7rem"},{size:"20/30",letters:["F","E","L","O","P","Z"],fontSize:"1.4rem"},{size:"20/25",letters:["D","E","F","P","O","T","E"],fontSize:"1.2rem"},{size:"20/20",letters:["E","F","P","T","O","Z","L","P"],fontSize:"1rem"}],g=f=>{const d=r[l]||{};d[t]=f,i(m=>({...m,[l]:d})),f==="no"||t===h.length-1?l==="left"?(s("right"),n(0),p(null)):u(!0):(n(m=>m+1),p(null))},v=()=>{const f=k=>{for(let N=h.length-1;N>=0;N--)if(k[N]==="yes")return h[N].size;return"20/200+"},d=f(r.left||{}),m=f(r.right||{});return{leftEye:d,rightEye:m,overall:d===m?d:`L: ${d}, R: ${m}`}},w=f=>f.includes("20/20")||f.includes("20/25")?{status:"Excellent",color:"success"}:f.includes("20/30")||f.includes("20/40")?{status:"Good",color:"success"}:f.includes("20/50")||f.includes("20/70")?{status:"Fair",color:"warning"}:{status:"Poor",color:"danger"},y=()=>{n(0),s("left"),i({}),p(null),u(!1)},x=()=>{const f=v(),d=w(f.overall),m={testType:"Visual Acuity Test",date:new Date().toISOString(),leftEye:f.leftEye,rightEye:f.rightEye,overall:f.overall,status:d.status,details:`Left eye: ${f.leftEye}, Right eye: ${f.rightEye}`},k=JSON.parse(localStorage.getItem("visionTestResults")||"[]");k.push(m),localStorage.setItem("visionTestResults",JSON.stringify(k)),e("/results")};if(a){const f=v(),d=w(f.overall);return o.jsx("div",{className:"test-complete",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"results-card",children:[o.jsx("h2",{className:"results-title",children:"Visual Acuity Test Complete"}),o.jsxs("div",{className:`results-status ${d.color}`,children:[o.jsxs("h3",{children:[d.status," Vision"]}),o.jsxs("p",{children:["Overall acuity: ",f.overall]})]}),o.jsxs("div",{className:"results-details",children:[o.jsx("h4",{children:"Detailed Results"}),o.jsxs("div",{className:"eye-results",children:[o.jsxs("div",{className:"eye-result",children:[o.jsx("strong",{children:"Left Eye:"})," ",f.leftEye]}),o.jsxs("div",{className:"eye-result",children:[o.jsx("strong",{children:"Right Eye:"})," ",f.rightEye]})]})]}),o.jsxs("div",{className:"results-actions",children:[o.jsxs("button",{onClick:y,className:"btn btn-secondary",children:[o.jsx(lo,{}),"Retake Test"]}),o.jsx("button",{onClick:x,className:"btn btn-primary",children:"Save Results"})]})]})})})}return o.jsxs("div",{className:"visual-acuity-test",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"test-header",children:[o.jsxs("button",{onClick:()=>e("/tests"),className:"btn btn-secondary",children:[o.jsx(gi,{}),"Back to Tests"]}),o.jsxs("div",{className:"test-info",children:[o.jsxs("div",{className:"current-eye",children:[o.jsx(Be,{}),"Testing: ",l==="left"?"Left":"Right"," Eye"]}),o.jsxs("div",{className:"current-line",children:["Line ",t+1," of ",h.length]})]})]}),o.jsx("div",{className:"test-content",children:o.jsxs("div",{className:"test-card",children:[o.jsx("h2",{className:"test-title",children:"Visual Acuity Test"}),o.jsx("div",{className:"eye-instruction",children:o.jsxs("p",{children:[l==="left"?"Cover your right eye":"Cover your left eye"," and look at the letters below. Sit about 3 feet (1 meter) from your screen."]})}),o.jsx("div",{className:"snellen-chart",children:o.jsxs("div",{className:"chart-line",children:[o.jsx("div",{className:"line-size",children:h[t].size}),o.jsx("div",{className:"letters",style:{fontSize:h[t].fontSize},children:h[t].letters.join(" ")})]})}),o.jsxs("div",{className:"question-section",children:[o.jsx("h3",{children:"Can you clearly read these letters?"}),o.jsxs("div",{className:"response-buttons",children:[o.jsx("button",{onClick:()=>g("yes"),className:"btn btn-success response-btn",children:"Yes, I can read them clearly"}),o.jsx("button",{onClick:()=>g("no"),className:"btn btn-danger response-btn",children:"No, they are blurry or unclear"})]})]})]})})]}),o.jsx("style",{jsx:!0,children:`
        .visual-acuity-test {
          min-height: 100vh;
          padding: 20px 0 60px 0;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          background: white;
          padding: 20px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .test-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .current-eye {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #667eea;
          font-size: 1.1rem;
        }

        .current-line {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .test-content {
          display: flex;
          justify-content: center;
        }

        .test-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 700px;
          width: 100%;
          text-align: center;
        }

        .test-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .eye-instruction {
          background: rgba(102, 126, 234, 0.1);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 40px;
        }

        .eye-instruction p {
          color: #374151;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
        }

        .snellen-chart {
          background: #f9fafb;
          padding: 60px 40px;
          border-radius: 16px;
          margin: 40px 0;
          border: 2px solid #e5e7eb;
        }

        .chart-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .line-size {
          font-size: 1rem;
          font-weight: 600;
          color: #6b7280;
          background: white;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
        }

        .letters {
          font-family: 'Courier New', monospace;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: 0.2em;
          line-height: 1.2;
        }

        .question-section {
          margin-top: 40px;
        }

        .question-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 30px 0;
        }

        .response-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .response-btn {
          min-width: 200px;
          padding: 16px 24px;
          font-size: 1rem;
        }

        .test-complete {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .results-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .results-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 30px 0;
        }

        .results-status {
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 30px;
        }

        .results-status.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .results-status.success h3 {
          color: #059669;
        }

        .results-status.warning {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .results-status.warning h3 {
          color: #d97706;
        }

        .results-status.danger {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .results-status.danger h3 {
          color: #dc2626;
        }

        .results-status h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .results-status p {
          margin: 0;
          font-size: 1.1rem;
        }

        .results-details {
          background: #f9fafb;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .results-details h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .eye-results {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .eye-result {
          color: #6b7280;
          font-size: 1rem;
        }

        .results-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .test-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .test-card {
            padding: 30px 20px;
          }

          .snellen-chart {
            padding: 40px 20px;
          }

          .response-buttons {
            flex-direction: column;
            align-items: center;
          }

          .response-btn {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }

          .results-actions {
            flex-direction: column;
          }
        }
      `})]})},Gh=()=>{const e=Mi(),[t,n]=j.useState("both"),[r,i]=j.useState({}),[l,s]=j.useState(!1),a=[{value:"both",label:"Both Eyes Open"},{value:"left",label:"Left Eye Only (cover right)"},{value:"right",label:"Right Eye Only (cover left)"}],u=v=>{i(w=>({...w,[t]:v})),t==="both"?n("left"):t==="left"?n("right"):s(!0)},c=()=>{const v=r.both,w=r.left,y=r.right;let x="Normal",f="No signs of astigmatism detected.",d="success";return(v||w||y)&&(v&&w&&y?(x="Significant Astigmatism",f="Astigmatism detected in both eyes. Consider consulting an eye care professional.",d="danger"):v&&w||v&&y||w&&y?(x="Moderate Astigmatism",f="Possible astigmatism detected. An eye examination is recommended.",d="warning"):(x="Mild Astigmatism",f="Minor astigmatism may be present. Monitor and consider professional evaluation.",d="warning")),{status:x,message:f,color:d}},p=()=>{n("both"),i({}),s(!1)},h=()=>{const v=c(),w={testType:"Astigmatism Test",date:new Date().toISOString(),bothEyes:r.both?"Detected":"Normal",leftEye:r.left?"Detected":"Normal",rightEye:r.right?"Detected":"Normal",status:v.status,details:v.message},y=JSON.parse(localStorage.getItem("visionTestResults")||"[]");y.push(w),localStorage.setItem("visionTestResults",JSON.stringify(y)),e("/results")};if(l){const v=c();return o.jsx("div",{className:"test-complete",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"results-card",children:[o.jsx("h2",{className:"results-title",children:"Astigmatism Test Complete"}),o.jsxs("div",{className:`results-status ${v.color}`,children:[o.jsx("h3",{children:v.status}),o.jsx("p",{children:v.message})]}),o.jsxs("div",{className:"results-details",children:[o.jsx("h4",{children:"Test Summary"}),o.jsxs("div",{className:"test-summary",children:[o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Both Eyes:"})," ",r.both?"Astigmatism detected":"Normal"]}),o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Left Eye:"})," ",r.left?"Astigmatism detected":"Normal"]}),o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Right Eye:"})," ",r.right?"Astigmatism detected":"Normal"]})]})]}),o.jsxs("div",{className:"results-actions",children:[o.jsxs("button",{onClick:p,className:"btn btn-secondary",children:[o.jsx(lo,{}),"Retake Test"]}),o.jsx("button",{onClick:h,className:"btn btn-primary",children:"Save Results"})]})]})})})}const g=()=>{var v;return((v=a.find(w=>w.value===t))==null?void 0:v.label)||""};return o.jsxs("div",{className:"astigmatism-test",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"test-header",children:[o.jsxs("button",{onClick:()=>e("/tests"),className:"btn btn-secondary",children:[o.jsx(gi,{}),"Back to Tests"]}),o.jsxs("div",{className:"test-info",children:[o.jsxs("div",{className:"current-eye",children:[o.jsx(Be,{}),g()]}),o.jsxs("div",{className:"test-progress",children:["Step ",a.findIndex(v=>v.value===t)+1," of ",a.length]})]})]}),o.jsx("div",{className:"test-content",children:o.jsxs("div",{className:"test-card",children:[o.jsx("h2",{className:"test-title",children:"Astigmatism Test"}),o.jsxs("div",{className:"test-instruction",children:[o.jsx("p",{children:o.jsx("strong",{children:g()})}),o.jsx("p",{children:"Look at the radial dial below. All lines should appear equally dark and sharp. If some lines appear darker, blurrier, or more distinct than others, this may indicate astigmatism."})]}),o.jsx("div",{className:"radial-dial-container",children:o.jsx("div",{className:"radial-dial",children:o.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",children:[Array.from({length:12},(v,w)=>{const y=w*30*(Math.PI/180),x=150+Math.cos(y)*60,f=150+Math.sin(y)*60,d=150+Math.cos(y)*130,m=150+Math.sin(y)*130;return o.jsx("line",{x1:x,y1:f,x2:d,y2:m,stroke:"#1f2937",strokeWidth:"3",strokeLinecap:"round"},w)}),o.jsx("circle",{cx:"150",cy:"150",r:"5",fill:"#667eea"})]})})}),o.jsxs("div",{className:"question-section",children:[o.jsx("h3",{children:"Do some lines appear darker, sharper, or more distinct than others?"}),o.jsxs("div",{className:"response-buttons",children:[o.jsx("button",{onClick:()=>u(!0),className:"btn btn-danger response-btn",children:"Yes, some lines look different"}),o.jsx("button",{onClick:()=>u(!1),className:"btn btn-success response-btn",children:"No, all lines look the same"})]})]})]})})]}),o.jsx("style",{jsx:!0,children:`
        .astigmatism-test {
          min-height: 100vh;
          padding: 20px 0 60px 0;
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          background: white;
          padding: 20px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .test-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .current-eye {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #667eea;
          font-size: 1.1rem;
        }

        .test-progress {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .test-content {
          display: flex;
          justify-content: center;
        }

        .test-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 700px;
          width: 100%;
          text-align: center;
        }

        .test-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 20px 0;
        }

        .test-instruction {
          background: rgba(102, 126, 234, 0.1);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 40px;
        }

        .test-instruction p {
          color: #374151;
          font-size: 1rem;
          margin: 8px 0;
          line-height: 1.6;
        }

        .test-instruction p:first-child {
          font-size: 1.1rem;
          font-weight: 600;
          color: #667eea;
        }

        .radial-dial-container {
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }

        .radial-dial {
          background: white;
          border-radius: 50%;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 2px solid #f3f4f6;
        }

        .question-section {
          margin-top: 40px;
        }

        .question-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 30px 0;
          line-height: 1.4;
        }

        .response-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .response-btn {
          min-width: 200px;
          padding: 16px 24px;
          font-size: 1rem;
        }

        .test-complete {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .results-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .results-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 30px 0;
        }

        .results-status {
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 30px;
        }

        .results-status.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .results-status.success h3 {
          color: #059669;
        }

        .results-status.warning {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .results-status.warning h3 {
          color: #d97706;
        }

        .results-status.danger {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .results-status.danger h3 {
          color: #dc2626;
        }

        .results-status h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .results-status p {
          margin: 0;
          font-size: 1.1rem;
        }

        .results-details {
          background: #f9fafb;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .results-details h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .test-summary {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .summary-item {
          color: #6b7280;
          font-size: 1rem;
          text-align: left;
        }

        .results-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .test-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .test-card {
            padding: 30px 20px;
          }

          .radial-dial svg {
            width: 250px;
            height: 250px;
          }

          .response-buttons {
            flex-direction: column;
            align-items: center;
          }

          .response-btn {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }

          .results-actions {
            flex-direction: column;
          }

          .summary-item {
            text-align: center;
          }
        }
      `})]})},Xh=()=>{const[e,t]=j.useState([]),[n,r]=j.useState("all");j.useEffect(()=>{const p=JSON.parse(localStorage.getItem("visionTestResults")||"[]");t(p.sort((h,g)=>new Date(g.date)-new Date(h.date)))},[]);const i=p=>{switch(p){case"Color Blindness Test":return o.jsx(Zc,{className:"test-icon"});case"Visual Acuity Test":return o.jsx(Be,{className:"test-icon"});case"Astigmatism Test":return o.jsx(Jc,{className:"test-icon"});default:return o.jsx(Be,{className:"test-icon"})}},l=p=>p.includes("Normal")||p.includes("Excellent")||p.includes("Good")?"success":p.includes("Fair")||p.includes("Mild")||p.includes("Moderate")?"warning":"danger",s=p=>new Date(p).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),a=e.filter(p=>n==="all"?!0:p.testType.toLowerCase().includes(n)),u=()=>{window.confirm("Are you sure you want to delete all test results? This action cannot be undone.")&&(localStorage.removeItem("visionTestResults"),t([]))},c=()=>{const p=JSON.stringify(e,null,2),h=new Blob([p],{type:"application/json"}),g=URL.createObjectURL(h),v=document.createElement("a");v.href=g,v.download=`vision-test-results-${new Date().toISOString().split("T")[0]}.json`,v.click(),URL.revokeObjectURL(g)};return o.jsxs("div",{className:"results-page",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"page-header",children:[o.jsx("h1",{className:"page-title",children:"Test Results"}),o.jsx("p",{className:"page-subtitle",children:"Review your vision test history and track your eye health over time"})]}),o.jsxs("div",{className:"results-controls",children:[o.jsxs("div",{className:"filter-section",children:[o.jsx("label",{htmlFor:"filter",children:"Filter by test type:"}),o.jsxs("select",{id:"filter",value:n,onChange:p=>r(p.target.value),className:"filter-select",children:[o.jsx("option",{value:"all",children:"All Tests"}),o.jsx("option",{value:"color",children:"Color Blindness"}),o.jsx("option",{value:"visual",children:"Visual Acuity"}),o.jsx("option",{value:"astigmatism",children:"Astigmatism"})]})]}),o.jsxs("div",{className:"action-buttons",children:[o.jsxs("button",{onClick:c,className:"btn btn-secondary",disabled:e.length===0,children:[o.jsx(Ah,{}),"Export Results"]}),o.jsxs("button",{onClick:u,className:"btn btn-danger",disabled:e.length===0,children:[o.jsx($h,{}),"Clear All"]})]})]}),a.length===0?o.jsx("div",{className:"no-results",children:o.jsxs("div",{className:"no-results-card",children:[o.jsx("div",{className:"no-results-icon",children:o.jsx(Be,{size:64})}),o.jsx("h3",{children:"No Test Results Found"}),o.jsx("p",{children:e.length===0?"You haven't taken any vision tests yet. Start with a comprehensive screening to track your eye health.":"No results match your current filter. Try selecting a different test type."}),o.jsxs("div",{className:"no-results-actions",children:[o.jsx(Rt,{to:"/tests",className:"btn btn-primary",children:"Take a Vision Test"}),e.length>0&&o.jsx("button",{onClick:()=>r("all"),className:"btn btn-secondary",children:"Show All Results"})]})]})}):o.jsx("div",{className:"results-grid",children:a.map((p,h)=>o.jsxs("div",{className:"result-card",children:[o.jsxs("div",{className:"result-header",children:[o.jsxs("div",{className:"result-info",children:[i(p.testType),o.jsxs("div",{className:"result-meta",children:[o.jsx("h3",{className:"result-title",children:p.testType}),o.jsxs("div",{className:"result-date",children:[o.jsx(Oh,{size:16}),s(p.date)]})]})]}),o.jsx("div",{className:`result-status ${l(p.status)}`,children:p.status})]}),o.jsxs("div",{className:"result-content",children:[o.jsxs("div",{className:"result-details",children:[p.testType==="Color Blindness Test"&&o.jsxs("div",{className:"detail-item",children:[o.jsx("strong",{children:"Score:"})," ",p.score]}),p.testType==="Visual Acuity Test"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"detail-item",children:[o.jsx("strong",{children:"Left Eye:"})," ",p.leftEye]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("strong",{children:"Right Eye:"})," ",p.rightEye]})]}),p.testType==="Astigmatism Test"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"detail-item",children:[o.jsx("strong",{children:"Both Eyes:"})," ",p.bothEyes]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("strong",{children:"Left Eye:"})," ",p.leftEye]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("strong",{children:"Right Eye:"})," ",p.rightEye]})]})]}),o.jsx("div",{className:"result-description",children:o.jsx("p",{children:p.details})})]})]},h))}),o.jsx("div",{className:"results-footer",children:o.jsxs("div",{className:"disclaimer",children:[o.jsx("h4",{children:"Important Reminder"}),o.jsx("p",{children:"These test results are for screening purposes only and should not replace regular professional eye examinations. If you have concerns about your vision or notice any changes, please consult with a qualified eye care professional."})]})})]}),o.jsx("style",{jsx:!0,children:`
        .results-page {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .results-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 20px 30px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .filter-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .filter-section label {
          font-weight: 600;
          color: #374151;
        }

        .filter-select {
          padding: 8px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .action-buttons {
          display: flex;
          gap: 12px;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .result-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #e5e7eb;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .result-info {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .test-icon {
          width: 40px;
          height: 40px;
          color: #667eea;
          flex-shrink: 0;
        }

        .result-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .result-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .result-date {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .result-status {
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          min-width: 100px;
        }

        .result-status.success {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .result-status.warning {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .result-status.danger {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .result-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .result-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .detail-item {
          color: #374151;
          font-size: 0.95rem;
        }

        .detail-item strong {
          color: #1f2937;
        }

        .result-description {
          background: #f9fafb;
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .result-description p {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .no-results {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .no-results-card {
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
        }

        .no-results-icon {
          color: #9ca3af;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        .no-results-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .no-results-card p {
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 32px 0;
        }

        .no-results-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .results-footer {
          margin-top: 60px;
        }

        .disclaimer {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #d97706;
          margin: 0 0 12px 0;
        }

        .disclaimer p {
          color: #92400e;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .results-controls {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .filter-section {
            width: 100%;
            justify-content: center;
          }

          .action-buttons {
            width: 100%;
            justify-content: center;
          }

          .results-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .result-card {
            padding: 24px;
          }

          .result-header {
            flex-direction: column;
            gap: 16px;
          }

          .result-status {
            align-self: flex-start;
          }

          .no-results-card {
            padding: 40px 20px;
          }

          .no-results-actions {
            flex-direction: column;
            align-items: center;
          }

          .disclaimer {
            padding: 20px;
          }
        }
      `})]})},qh=()=>{const[e,t]=j.useState([{id:1,type:"bot",content:"Hello! I'm Dr. Vision AI, your virtual eye care specialist. I'm here to help you with questions about your vision, eye health, and symptoms. How can I assist you today?",timestamp:new Date}]),[n,r]=j.useState(""),[i,l]=j.useState(!1),s=j.useRef(null),a=()=>{var y;(y=s.current)==null||y.scrollIntoView({behavior:"smooth"})};j.useEffect(()=>{a()},[e]);const u=y=>{const x=y.toLowerCase();return x.includes("eye strain")||x.includes("tired eyes")||x.includes("computer")||x.includes("screen")?{content:`Computer eye strain is very common! Here are my recommendations:

• Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds
• Ensure proper lighting - avoid glare on your screen
• Blink frequently to keep eyes moist
• Consider blue light filtering glasses
• Adjust screen brightness to match your surroundings
• Take regular breaks from screen work

If symptoms persist, consider a comprehensive eye exam to rule out underlying vision problems.`,type:"advice"}:x.includes("dry eyes")||x.includes("dry eye")||x.includes("itchy eyes")?{content:`Dry eyes can be quite uncomfortable. Here's what I recommend:

• Use preservative-free artificial tears regularly
• Increase humidity in your environment
• Stay well hydrated
• Take omega-3 supplements
• Avoid direct air flow from fans or AC
• Consider warm compresses for 10-15 minutes daily

If symptoms are severe or persistent, you may have dry eye syndrome and should see an eye care professional for specialized treatment options.`,type:"advice"}:x.includes("blurry")||x.includes("blur")||x.includes("vision problems")?{content:`Blurry vision can have several causes and should be evaluated promptly:

**Possible causes:**
• Refractive errors (nearsightedness, farsightedness, astigmatism)
• Eye strain or fatigue
• Dry eyes
• Changes in blood sugar
• Medication side effects

**When to seek immediate care:**
• Sudden onset of blurry vision
• Vision loss in one or both eyes
• Accompanied by eye pain, headache, or nausea

I recommend scheduling an eye exam to determine the exact cause and appropriate treatment.`,type:"warning"}:x.includes("headache")||x.includes("head pain")?{content:`Eye-related headaches are often caused by:

• Uncorrected vision problems
• Eye strain from prolonged near work
• Improper lighting
• Poor posture while reading/working
• Astigmatism

**Relief strategies:**
• Take frequent breaks from close work
• Ensure proper lighting
• Check if you need glasses or an updated prescription
• Practice good posture
• Consider computer glasses

If headaches are frequent or severe, both an eye exam and consultation with your primary care physician are recommended.`,type:"advice"}:x.includes("floaters")||x.includes("spots")||x.includes("moving")?{content:`Eye floaters are usually normal, but let me explain:

**Normal floaters:**
• Small, moving spots in your vision
• More noticeable against bright backgrounds
• Usually harmless and part of aging

**When to seek immediate care:**
• Sudden increase in floaters
• Flashes of light
• Curtain or shadow in peripheral vision
• Recent eye injury

These could indicate retinal detachment, which requires emergency treatment. For routine floaters, mention them at your next eye exam.`,type:"warning"}:x.includes("night vision")||x.includes("dark")||x.includes("driving at night")?{content:`Difficulty with night vision can be concerning:

**Common causes:**
• Uncorrected refractive errors
• Cataracts
• Vitamin A deficiency
• Retinal conditions
• Normal aging changes

**Safety tips:**
• Avoid driving at night if vision is significantly impaired
• Ensure your glasses prescription is current
• Keep windshields clean
• Reduce dashboard lighting
• Look slightly to the side of oncoming headlights

I strongly recommend an eye exam to evaluate your night vision concerns, especially if they're affecting your daily activities.`,type:"warning"}:x.includes("color")||x.includes("colors")?{content:`Color vision concerns are important to address:

**Types of color vision deficiency:**
• Red-green color blindness (most common)
• Blue-yellow color blindness (rare)
• Complete color blindness (very rare)

**Our color blindness test can help screen for:**
• Difficulty distinguishing certain colors
• Inherited color vision deficiencies
• Acquired color vision problems

If you haven't taken our color vision test yet, I recommend starting there. For comprehensive evaluation, especially if you suspect acquired color vision changes, see an eye care professional.`,type:"info"}:x.includes("eye exam")||x.includes("when should")||x.includes("how often")?{content:`Regular eye exams are crucial for maintaining good vision and eye health:

**Recommended frequency:**
• Ages 18-39: Every 2-3 years
• Ages 40-54: Every 1-2 years
• Ages 55-64: Every 1-2 years
• Ages 65+: Annually

**More frequent exams needed if you have:**
• Diabetes
• High blood pressure
• Family history of eye disease
• Previous eye injuries
• High prescription glasses/contacts

Our screening tests are helpful, but they don't replace comprehensive professional eye exams that include pupil dilation and pressure checks.`,type:"info"}:x.includes("pain")||x.includes("sudden")||x.includes("emergency")?{content:`⚠️ **SEEK IMMEDIATE MEDICAL ATTENTION if you experience:**

• Sudden vision loss
• Severe eye pain
• Sudden onset of many floaters
• Flashes of light
• Curtain or shadow in vision
• Chemical splash in eyes
• Significant eye injury
• Sudden double vision
• Severe headache with vision changes

**Go to the emergency room or call an eye care professional immediately.**

For non-emergency concerns, I'm here to help with general advice and guidance.`,type:"emergency"}:{content:`Thank you for your question about eye health. While I can provide general information and guidance, I'd recommend:

• Taking our vision screening tests if you haven't already
• Scheduling a comprehensive eye exam with a qualified eye care professional
• Keeping track of any symptoms or changes in your vision

Is there a specific aspect of your vision or eye health you'd like to discuss? I can provide more targeted advice based on your concerns.`,type:"info"}},c=async()=>{if(!n.trim())return;const y={id:e.length+1,type:"user",content:n,timestamp:new Date};t(x=>[...x,y]),r(""),l(!0),setTimeout(()=>{const x=u(n),f={id:e.length+2,type:"bot",content:x.content,messageType:x.type,timestamp:new Date};t(d=>[...d,f]),l(!1)},1500+Math.random()*1e3)},p=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),c())},h=["I have eye strain from computer work","My eyes feel dry and irritated","I'm experiencing blurry vision","I see floaters in my vision","When should I get an eye exam?","I have trouble seeing at night"],g=y=>{r(y)},v=y=>y.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),w=y=>{switch(y){case"warning":return o.jsx(Ca,{className:"message-type-icon warning"});case"advice":return o.jsx(Mh,{className:"message-type-icon advice"});case"emergency":return o.jsx(Ca,{className:"message-type-icon emergency"});default:return o.jsx(Be,{className:"message-type-icon info"})}};return o.jsxs("div",{className:"ai-consultation",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"page-header",children:[o.jsx("h1",{className:"page-title",children:"AI Eye Specialist Consultation"}),o.jsx("p",{className:"page-subtitle",children:"Get expert guidance on your vision and eye health concerns"})]}),o.jsxs("div",{className:"chat-container",children:[o.jsxs("div",{className:"chat-messages",children:[e.map(y=>o.jsxs("div",{className:`message ${y.type}`,children:[o.jsx("div",{className:"message-avatar",children:y.type==="bot"?o.jsx(za,{}):o.jsx(Bh,{})}),o.jsxs("div",{className:"message-content",children:[o.jsxs("div",{className:"message-header",children:[o.jsx("span",{className:"message-sender",children:y.type==="bot"?"Dr. Vision AI":"You"}),o.jsx("span",{className:"message-time",children:v(y.timestamp)})]}),o.jsxs("div",{className:"message-body",children:[y.messageType&&w(y.messageType),o.jsx("div",{className:"message-text",children:y.content.split(`
`).map((x,f)=>o.jsxs(fs.Fragment,{children:[x,f<y.content.split(`
`).length-1&&o.jsx("br",{})]},f))})]})]})]},y.id)),i&&o.jsxs("div",{className:"message bot typing",children:[o.jsx("div",{className:"message-avatar",children:o.jsx(za,{})}),o.jsx("div",{className:"message-content",children:o.jsxs("div",{className:"typing-indicator",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})})]}),o.jsx("div",{ref:s})]}),o.jsxs("div",{className:"quick-questions",children:[o.jsx("h4",{children:"Quick Questions:"}),o.jsx("div",{className:"quick-questions-grid",children:h.map((y,x)=>o.jsx("button",{onClick:()=>g(y),className:"quick-question-btn",children:y},x))})]}),o.jsx("div",{className:"chat-input",children:o.jsxs("div",{className:"input-container",children:[o.jsx("textarea",{value:n,onChange:y=>r(y.target.value),onKeyPress:p,placeholder:"Ask me about your vision concerns, symptoms, or eye health questions...",className:"message-input",rows:"3"}),o.jsx("button",{onClick:c,disabled:!n.trim()||i,className:"send-button",children:o.jsx(Uh,{})})]})})]}),o.jsx("div",{className:"disclaimer-section",children:o.jsxs("div",{className:"disclaimer-card",children:[o.jsx("h4",{children:"Important Medical Disclaimer"}),o.jsx("p",{children:"This AI consultation provides general information and guidance only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified eye care professionals for any vision concerns or eye health issues. In case of emergency eye symptoms, seek immediate medical attention."})]})})]}),o.jsx("style",{jsx:!0,children:`
        .ai-consultation {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .chat-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          margin-bottom: 40px;
        }

        .chat-messages {
          height: 500px;
          overflow-y: auto;
          padding: 30px;
          background: #f9fafb;
        }

        .message {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          align-items: flex-start;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .message.user .message-avatar {
          background: #e5e7eb;
          color: #374151;
        }

        .message-content {
          flex: 1;
          max-width: 70%;
        }

        .message.user .message-content {
          text-align: right;
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .message.user .message-header {
          flex-direction: row-reverse;
        }

        .message-sender {
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }

        .message-time {
          color: #9ca3af;
          font-size: 0.8rem;
        }

        .message-body {
          background: white;
          padding: 16px 20px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .message.user .message-body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          justify-content: flex-end;
        }

        .message-type-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .message-type-icon.warning {
          color: #f59e0b;
        }

        .message-type-icon.advice {
          color: #10b981;
        }

        .message-type-icon.emergency {
          color: #ef4444;
        }

        .message-type-icon.info {
          color: #667eea;
        }

        .message-text {
          line-height: 1.6;
          flex: 1;
        }

        .message.user .message-text {
          text-align: left;
        }

        .typing {
          opacity: 0.7;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 16px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .quick-questions {
          padding: 30px;
          border-top: 1px solid #e5e7eb;
          background: white;
        }

        .quick-questions h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .quick-questions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .quick-question-btn {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          color: #374151;
        }

        .quick-question-btn:hover {
          background: #e5e7eb;
          border-color: #667eea;
          color: #667eea;
        }

        .chat-input {
          padding: 30px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .input-container {
          display: flex;
          gap: 16px;
          align-items: flex-end;
        }

        .message-input {
          flex: 1;
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          font-size: 1rem;
          resize: none;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .message-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .send-button {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .send-button:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .disclaimer-section {
          margin-top: 40px;
        }

        .disclaimer-card {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #dc2626;
          margin: 0 0 16px 0;
        }

        .disclaimer-card p {
          color: #991b1b;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .chat-messages {
            height: 400px;
            padding: 20px;
          }

          .message-content {
            max-width: 85%;
          }

          .quick-questions {
            padding: 20px;
          }

          .quick-questions-grid {
            grid-template-columns: 1fr;
          }

          .chat-input {
            padding: 20px;
          }

          .input-container {
            flex-direction: column;
            align-items: stretch;
          }

          .send-button {
            align-self: flex-end;
          }

          .disclaimer-card {
            padding: 20px;
          }
        }
      `})]})};function Zh(){return o.jsx("div",{className:"app",children:o.jsxs(zh,{children:[o.jsx(Wh,{}),o.jsx("main",{className:"main-content",children:o.jsxs(wh,{children:[o.jsx(et,{path:"/",element:o.jsx(Hh,{})}),o.jsx(et,{path:"/tests",element:o.jsx(Qh,{})}),o.jsx(et,{path:"/test/color-blind",element:o.jsx(Kh,{})}),o.jsx(et,{path:"/test/visual-acuity",element:o.jsx(Yh,{})}),o.jsx(et,{path:"/test/astigmatism",element:o.jsx(Gh,{})}),o.jsx(et,{path:"/results",element:o.jsx(Xh,{})}),o.jsx(et,{path:"/ai-consultation",element:o.jsx(qh,{})})]})})]})})}fl.createRoot(document.getElementById("root")).render(o.jsx(fs.StrictMode,{children:o.jsx(Zh,{})}));
