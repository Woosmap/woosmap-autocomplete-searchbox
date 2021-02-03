/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="intersection,difference,uniq,intersectionWith,differenceWith,uniqWith,toArray,partialRight,keys,isArray,forEach" -p -o ./lib/lodash.custom.min.js`
 */
;(function(){function t(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function e(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&false!==e(t[r],r,t););return t}function r(t,e){for(var r=-1,n=null==t?0:t.length,u=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[u++]=i)}return o}function n(t,e){var r;if(r=!(null==t||!t.length)){if(e===e)t:{r=-1;for(var n=t.length;++r<n;)if(t[r]===e)break t;r=-1;
}else t:{r=a;for(var n=t.length,u=-1;++u<n;)if(r(t[u],u,t)){r=u;break t}r=-1}r=-1<r}return r}function u(t,e,r){for(var n=-1,u=null==t?0:t.length;++n<u;)if(r(e,t[n]))return true;return false}function o(t,e){for(var r=-1,n=null==t?0:t.length,u=Array(n);++r<n;)u[r]=e(t[r],r,t);return u}function i(t,e){for(var r=-1,n=e.length,u=t.length;++r<n;)t[u+r]=e[r];return t}function c(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return true;return false}function a(t){return t!==t}function f(t){return function(e){
return null==e?ae:e[t]}}function l(t){return function(e){return t(e)}}function s(t,e){return o(e,function(e){return t[e]})}function h(t,e){return t.has(e)}function b(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function p(t){var e=Object;return function(r){return t(e(r))}}function y(t,e){for(var r=-1,n=t.length,u=0,o=[];++r<n;){var i=t[r];i!==e&&"__lodash_placeholder__"!==i||(t[r]="__lodash_placeholder__",o[u++]=r)}return o}function _(t){var e=-1,r=Array(t.size);return t.forEach(function(t){
r[++e]=t}),r}function g(){}function v(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function d(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function j(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function w(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function A(t){
var e=-1,r=null==t?0:t.length;for(this.__data__=new w;++e<r;)this.add(t[e])}function m(t){this.size=(this.__data__=new j(t)).size}function O(t,e){var r=Xr(t),n=!r&&Qr(t),u=!r&&!n&&Yr(t),o=!r&&!n&&!u&&en(t);if(r=r||n||u||o){for(var n=t.length,i=String,c=-1,a=Array(n);++c<n;)a[c]=i(c);n=a}else n=[];var f,i=n.length;for(f in t)!e&&!He.call(t,f)||r&&("length"==f||u&&("offset"==f||"parent"==f)||o&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Ot(f,i))||n.push(f);return n}function S(t,e,r){var n=t[e];
He.call(t,e)&&Rt(n,r)&&(r!==ae||e in t)||E(t,e,r)}function k(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function x(t,e){return t&&nt(e,Yt(e),t)}function z(t,e){return t&&nt(e,Zt(e),t)}function E(t,e,r){"__proto__"==e&&fr?fr(t,e,{configurable:true,enumerable:true,value:r,writable:true}):t[e]=r}function F(t,r,n,u,o,i){var c,a=1&r,f=2&r,l=4&r;if(n&&(c=o?n(t,u,o,i):n(t)),c!==ae)return c;if(!Tt(t))return t;if(u=Xr(t)){if(c=wt(t),!a)return rt(t,c)}else{var s=Nr(t),h="[object Function]"==s||"[object GeneratorFunction]"==s;
if(Yr(t))return Y(t,a);if("[object Object]"==s||"[object Arguments]"==s||h&&!o){if(c=f||h?{}:typeof t.constructor!="function"||kt(t)?{}:Mr(rr(t)),!a)return f?ot(t,z(c,t)):ut(t,x(c,t))}else{if(!Ie[s])return o?t:{};c=At(t,s,a)}}if(i||(i=new m),o=i.get(t))return o;if(i.set(t,c),tn(t))return t.forEach(function(e){c.add(F(e,r,n,e,t,i))}),c;if(Zr(t))return t.forEach(function(e,u){c.set(u,F(e,r,n,u,t,i))}),c;var f=l?f?yt:pt:f?Zt:Yt,b=u?ae:f(t);return e(b||t,function(e,u){b&&(u=e,e=t[u]),S(c,u,F(e,r,n,u,t,i));
}),c}function I(t,e,r,i){var c=-1,a=n,f=true,s=t.length,b=[],p=e.length;if(!s)return b;r&&(e=o(e,l(r))),i?(a=u,f=false):200<=e.length&&(a=h,f=false,e=new A(e));t:for(;++c<s;){var y=t[c],_=null==r?y:r(y),y=i||0!==y?y:0;if(f&&_===_){for(var g=p;g--;)if(e[g]===_)continue t;b.push(y)}else a(e,_,i)||b.push(y)}return b}function M(t,e,r,n,u){var o=-1,c=t.length;for(r||(r=mt),u||(u=[]);++o<c;){var a=t[o];0<e&&r(a)?1<e?M(a,e-1,r,n,u):i(u,a):n||(u[u.length]=a)}return u}function $(t,e){e=X(e,t);for(var r=0,n=e.length;null!=t&&r<n;)t=t[It(e[r++])];
return r&&r==n?t:ae}function U(t,e,r){return e=e(t),Xr(t)?e:i(e,r(t))}function B(t){if(null==t)t=t===ae?"[object Undefined]":"[object Null]";else if(ar&&ar in Object(t)){var e=He.call(t,ar),r=t[ar];try{t[ar]=ae;var n=true}catch(t){}var u=Qe.call(t);n&&(e?t[ar]=r:delete t[ar]),t=u}else t=Qe.call(t);return t}function D(t,e,r){for(var i=r?u:n,c=t[0].length,a=t.length,f=a,s=Array(a),b=1/0,p=[];f--;){var y=t[f];f&&e&&(y=o(y,l(e))),b=pr(y.length,b),s[f]=!r&&(e||120<=c&&120<=y.length)?new A(f&&y):ae}var y=t[0],_=-1,g=s[0];
t:for(;++_<c&&p.length<b;){var v=y[_],d=e?e(v):v,v=r||0!==v?v:0;if(g?!h(g,d):!i(p,d,r)){for(f=a;--f;){var j=s[f];if(j?!h(j,d):!i(t[f],d,r))continue t}g&&g.push(d),p.push(v)}}return p}function R(t){return Vt(t)&&"[object Arguments]"==B(t)}function L(t,e,r,n,u){if(t===e)e=true;else if(null==t||null==e||!Vt(t)&&!Vt(e))e=t!==t&&e!==e;else t:{var o=Xr(t),i=Xr(e),c=o?"[object Array]":Nr(t),a=i?"[object Array]":Nr(e),c="[object Arguments]"==c?"[object Object]":c,a="[object Arguments]"==a?"[object Object]":a,f="[object Object]"==c,i="[object Object]"==a;
if((a=c==a)&&Yr(t)){if(!Yr(e)){e=false;break t}o=true,f=false}if(a&&!f)u||(u=new m),e=o||en(t)?ht(t,e,r,n,L,u):bt(t,e,c,r,n,L,u);else{if(!(1&r)&&(o=f&&He.call(t,"__wrapped__"),c=i&&He.call(e,"__wrapped__"),o||c)){t=o?t.value():t,e=c?e.value():e,u||(u=new m),e=L(t,e,r,n,u);break t}if(a)e:if(u||(u=new m),o=1&r,c=pt(t),i=c.length,a=pt(e).length,i==a||o){for(f=i;f--;){var l=c[f];if(!(o?l in e:He.call(e,l))){e=false;break e}}if((a=u.get(t))&&u.get(e))e=a==e;else{a=true,u.set(t,e),u.set(e,t);for(var s=o;++f<i;){var l=c[f],h=t[l],b=e[l];
if(n)var p=o?n(b,h,l,e,t,u):n(h,b,l,t,e,u);if(p===ae?h!==b&&!L(h,b,r,n,u):!p){a=false;break}s||(s="constructor"==l)}a&&!s&&(r=t.constructor,n=e.constructor,r!=n&&"constructor"in t&&"constructor"in e&&!(typeof r=="function"&&r instanceof r&&typeof n=="function"&&n instanceof n)&&(a=false)),u.delete(t),u.delete(e),e=a}}else e=false;else e=false}}return e}function P(t){return Vt(t)&&"[object Map]"==Nr(t)}function C(t,e){var r=e.length,n=r;if(null==t)return!n;for(t=Object(t);r--;){var u=e[r];if(u[2]?u[1]!==t[u[0]]:!(u[0]in t))return false;
}for(;++r<n;){var u=e[r],o=u[0],i=t[o],c=u[1];if(u[2]){if(i===ae&&!(o in t))return false}else if(u=new m,void 0===ae?!L(c,i,3,void 0,u):1)return false}return true}function N(t){return Vt(t)&&"[object Set]"==Nr(t)}function T(t){return Vt(t)&&Nt(t.length)&&!!Fe[B(t)]}function V(t){return typeof t=="function"?t:null==t?re:typeof t=="object"?Xr(t)?q(t[0],t[1]):W(t):oe(t)}function W(t){var e=dt(t);return 1==e.length&&e[0][2]?xt(e[0][0],e[0][1]):function(r){return r===t||C(r,e)}}function q(t,e){return St(t)&&e===e&&!Tt(e)?xt(It(t),e):function(r){
var n=Qt(r,t);return n===ae&&n===e?Xt(r,t):L(e,n,3)}}function G(t){return function(e){return $(e,t)}}function K(t){return Vr(zt(t,re),t+"")}function H(t){if(typeof t=="string")return t;if(Xr(t))return o(t,H)+"";if(qt(t))return Ir?Ir.call(t):"";var e=t+"";return"0"==e&&1/t==-fe?"-0":e}function J(t,e,r){var o=-1,i=n,c=t.length,a=true,f=[],l=f;if(r)a=false,i=u;else if(200<=c){if(i=e?null:Rr(t))return _(i);a=false,i=h,l=new A}else l=e?[]:f;t:for(;++o<c;){var s=t[o],b=e?e(s):s,s=r||0!==s?s:0;if(a&&b===b){for(var p=l.length;p--;)if(l[p]===b)continue t;
e&&l.push(b),f.push(s)}else i(l,b,r)||(l!==f&&l.push(b),f.push(s))}return f}function Q(t){return Pt(t)?t:[]}function X(t,e){return Xr(t)?t:St(t,e)?[t]:Wr(Jt(t))}function Y(t,e){if(e)return t.slice();var r=t.length,r=er?er(r):new t.constructor(r);return t.copy(r),r}function Z(t){var e=new t.constructor(t.byteLength);return new tr(e).set(new tr(t)),e}function tt(t,e,r,n){var u=-1,o=t.length,i=r.length,c=-1,a=e.length,f=br(o-i,0),l=Array(a+f);for(n=!n;++c<a;)l[c]=e[c];for(;++u<i;)(n||u<o)&&(l[r[u]]=t[u]);
for(;f--;)l[c++]=t[u++];return l}function et(t,e,r,n){var u=-1,o=t.length,i=-1,c=r.length,a=-1,f=e.length,l=br(o-c,0),s=Array(l+f);for(n=!n;++u<l;)s[u]=t[u];for(l=u;++a<f;)s[l+a]=e[a];for(;++i<c;)(n||u<o)&&(s[l+r[i]]=t[u++]);return s}function rt(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function nt(t,e,r){var n=!r;r||(r={});for(var u=-1,o=e.length;++u<o;){var i=e[u],c=ae;c===ae&&(c=t[i]),n?E(r,i,c):S(r,i,c)}return r}function ut(t,e){return nt(t,Pr(t),e)}function ot(t,e){
return nt(t,Cr(t),e)}function it(t,e,r){function n(){return(this&&this!==De&&this instanceof n?o:t).apply(u?r:this,arguments)}var u=1&e,o=ct(t);return n}function ct(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);
}var r=Mr(t.prototype),e=t.apply(r,e);return Tt(e)?e:r}}function at(e,r,n){function u(){for(var i=arguments.length,c=Array(i),a=i,f=_t(u);a--;)c[a]=arguments[a];return a=3>i&&c[0]!==f&&c[i-1]!==f?[]:y(c,f),i-=a.length,i<n?st(e,r,ft,u.placeholder,ae,c,a,ae,ae,n-i):t(this&&this!==De&&this instanceof u?o:e,this,c)}var o=ct(e);return u}function ft(t,e,r,n,u,o,i,c,a,f){function l(){for(var v=arguments.length,d=Array(v),j=v;j--;)d[j]=arguments[j];if(p){var w,A=_t(l),j=d.length;for(w=0;j--;)d[j]===A&&++w;
}if(n&&(d=tt(d,n,u,p)),o&&(d=et(d,o,i,p)),v-=w,p&&v<f)return A=y(d,A),st(t,e,ft,l.placeholder,r,d,A,c,a,f-v);if(A=h?r:this,j=b?A[t]:t,v=d.length,c){w=d.length;for(var m=pr(c.length,w),O=rt(d);m--;){var S=c[m];d[m]=Ot(S,w)?O[S]:ae}}else _&&1<v&&d.reverse();return s&&a<v&&(d.length=a),this&&this!==De&&this instanceof l&&(j=g||ct(j)),j.apply(A,d)}var s=128&e,h=1&e,b=2&e,p=24&e,_=512&e,g=b?ae:ct(t);return l}function lt(e,r,n,u){function o(){for(var r=-1,a=arguments.length,f=-1,l=u.length,s=Array(l+a),h=this&&this!==De&&this instanceof o?c:e;++f<l;)s[f]=u[f];
for(;a--;)s[f++]=arguments[++r];return t(h,i?n:this,s)}var i=1&r,c=ct(e);return o}function st(t,e,r,n,u,o,i,c,a,f){var l=8&e,s=l?i:ae;i=l?ae:i;var h=l?o:ae;o=l?ae:o,e=(e|(l?32:64))&~(l?64:32),4&e||(e&=-4),u=[t,e,u,h,s,o,i,c,a,f],r=r.apply(ae,u);t:for(c=t.name+"",a=mr[c],f=He.call(mr,c)?a.length:0;f--;)if(l=a[f],s=l.func,null==s||s==t){c=l.name;break t}return a=g[c],typeof a=="function"&&c in v.prototype?t===a?c=true:(c=Lr(a),c=!!c&&t===c[0]):c=false,c&&Tr(r,u),r.placeholder=n,Et(r,t,e)}function ht(t,e,r,n,u,o){
var i=1&r,a=t.length,f=e.length;if(a!=f&&!(i&&f>a))return false;if((f=o.get(t))&&o.get(e))return f==e;var f=-1,l=true,s=2&r?new A:ae;for(o.set(t,e),o.set(e,t);++f<a;){var b=t[f],p=e[f];if(n)var y=i?n(p,b,f,e,t,o):n(b,p,f,t,e,o);if(y!==ae){if(y)continue;l=false;break}if(s){if(!c(e,function(t,e){if(!h(s,e)&&(b===t||u(b,t,r,n,o)))return s.push(e)})){l=false;break}}else if(b!==p&&!u(b,p,r,n,o)){l=false;break}}return o.delete(t),o.delete(e),l}function bt(t,e,r,n,u,o,i){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;
t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!o(new tr(t),new tr(e)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return Rt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=b;case"[object Set]":if(c||(c=_),t.size!=e.size&&!(1&n))break;return(r=i.get(t))?r==e:(n|=2,i.set(t,e),e=ht(c(t),c(e),n,u,o,i),i.delete(t),e);case"[object Symbol]":
if(Fr)return Fr.call(t)==Fr.call(e)}return false}function pt(t){return U(t,Yt,Pr)}function yt(t){return U(t,Zt,Cr)}function _t(t){return(He.call(g,"placeholder")?g:t).placeholder}function gt(){var t=g.iteratee||ne,t=t===ne?V:t;return arguments.length?t(arguments[0],arguments[1]):t}function vt(t,e){var r=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r[typeof e=="string"?"string":"hash"]:r.map}function dt(t){for(var e=Yt(t),r=e.length;r--;){var n=e[r],u=t[n];
e[r]=[n,u,u===u&&!Tt(u)]}return e}function jt(t,e){var r=null==t?ae:t[e];return(!Tt(r)||Je&&Je in r?0:(Ct(r)?Xe:me).test(Mt(r)))?r:ae}function wt(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&He.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function At(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return Z(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return e=r?Z(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);
case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=r?Z(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return e=new t.constructor(t.source,je.exec(t)),e.lastIndex=t.lastIndex,
e;case"[object Set]":return new n;case"[object Symbol]":return Fr?Object(Fr.call(t)):{}}}function mt(t){return Xr(t)||Qr(t)||!!(ir&&t&&t[ir])}function Ot(t,e){var r=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==r||"symbol"!=r&&Se.test(t))&&-1<t&&0==t%1&&t<e}function St(t,e){if(Xr(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!qt(t))||(be.test(t)||!he.test(t)||null!=e&&t in Object(e))}function kt(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||qe);
}function xt(t,e){return function(r){return null!=r&&(r[t]===e&&(e!==ae||t in Object(r)))}}function zt(e,r){var n=void 0,n=br(n===ae?e.length-1:n,0);return function(){for(var u=arguments,o=-1,i=br(u.length-n,0),c=Array(i);++o<i;)c[o]=u[n+o];for(o=-1,i=Array(n+1);++o<n;)i[o]=u[o];return i[n]=r(c),t(e,this,i)}}function Et(t,e,r){var n=e+"";e=Vr;var u,o=$t;return u=(u=n.match(ge))?u[1].split(ve):[],r=o(u,r),(o=r.length)&&(u=o-1,r[u]=(1<o?"& ":"")+r[u],r=r.join(2<o?", ":" "),n=n.replace(_e,"{\n/* [wrapped with "+r+"] */\n")),
e(t,n)}function Ft(t){var e=0,r=0;return function(){var n=yr(),u=16-(n-r);if(r=n,0<u){if(800<=++e)return arguments[0]}else e=0;return t.apply(ae,arguments)}}function It(t){if(typeof t=="string"||qt(t))return t;var e=t+"";return"0"==e&&1/t==-fe?"-0":e}function Mt(t){if(null!=t){try{return Ke.call(t)}catch(t){}return t+""}return""}function $t(t,r){return e(se,function(e){var u="_."+e[0];r&e[1]&&!n(t,u)&&t.push(u)}),t.sort()}function Ut(t){var e=null==t?0:t.length;return e?t[e-1]:ae}function Bt(t,r){
return(Xr(t)?e:$r)(t,gt(r,3))}function Dt(t,e){function r(){var n=arguments,u=e?e.apply(this,n):n[0],o=r.cache;return o.has(u)?o.get(u):(n=t.apply(this,n),r.cache=o.set(u,n)||o,n)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");return r.cache=new(Dt.Cache||w),r}function Rt(t,e){return t===e||t!==t&&e!==e}function Lt(t){return null!=t&&Nt(t.length)&&!Ct(t)}function Pt(t){return Vt(t)&&Lt(t)}function Ct(t){return!!Tt(t)&&(t=B(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t);
}function Nt(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function Tt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Vt(t){return null!=t&&typeof t=="object"}function Wt(t){return typeof t=="string"||!Xr(t)&&Vt(t)&&"[object String]"==B(t)}function qt(t){return typeof t=="symbol"||Vt(t)&&"[object Symbol]"==B(t)}function Gt(t){return t?(t=Ht(t),t===fe||t===-fe?1.7976931348623157e308*(0>t?-1:1):t===t?t:0):0===t?t:0}function Kt(t){t=Gt(t);var e=t%1;return t===t?e?t-e:t:0;
}function Ht(t){if(typeof t=="number")return t;if(qt(t))return le;if(Tt(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,t=Tt(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(ye,"");var e=Ae.test(t);return e||Oe.test(t)?$e(t.slice(2),e?2:8):we.test(t)?le:+t}function Jt(t){return null==t?"":H(t)}function Qt(t,e,r){return t=null==t?ae:$(t,e),t===ae?r:t}function Xt(t,e){var r;if(r=null!=t){r=t;var n;n=X(e,r);for(var u=-1,o=n.length,i=false;++u<o;){var c=It(n[u]);if(!(i=null!=r&&null!=r&&c in Object(r)))break;
r=r[c]}i||++u!=o?r=i:(o=null==r?0:r.length,r=!!o&&Nt(o)&&Ot(c,o)&&(Xr(r)||Qr(r)))}return r}function Yt(t){if(Lt(t))t=O(t);else if(kt(t)){var e,r=[];for(e in Object(t))He.call(t,e)&&"constructor"!=e&&r.push(e);t=r}else t=hr(t);return t}function Zt(t){if(Lt(t))t=O(t,true);else if(Tt(t)){var e,r=kt(t),n=[];for(e in t)("constructor"!=e||!r&&He.call(t,e))&&n.push(e);t=n}else{if(e=[],null!=t)for(r in Object(t))e.push(r);t=e}return t}function te(t){return null==t?[]:s(t,Yt(t))}function ee(t){return function(){
return t}}function re(t){return t}function ne(t){return V(typeof t=="function"?t:F(t,1))}function ue(){}function oe(t){return St(t)?f(It(t)):G(t)}function ie(){return[]}function ce(){return false}var ae,fe=1/0,le=NaN,se=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,be=/^\w*$/,pe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/^\s+|\s+$/g,_e=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ge=/\{\n\/\* \[wrapped with (.+)\] \*/,ve=/,? & /,de=/\\(\\)?/g,je=/\w*$/,we=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,Oe=/^0o[0-7]+$/i,Se=/^(?:0|[1-9]\d*)$/,ke="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",xe="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",ze=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+xe+ke,"g"),Ee=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Fe={};
Fe["[object Float32Array]"]=Fe["[object Float64Array]"]=Fe["[object Int8Array]"]=Fe["[object Int16Array]"]=Fe["[object Int32Array]"]=Fe["[object Uint8Array]"]=Fe["[object Uint8ClampedArray]"]=Fe["[object Uint16Array]"]=Fe["[object Uint32Array]"]=true,Fe["[object Arguments]"]=Fe["[object Array]"]=Fe["[object ArrayBuffer]"]=Fe["[object Boolean]"]=Fe["[object DataView]"]=Fe["[object Date]"]=Fe["[object Error]"]=Fe["[object Function]"]=Fe["[object Map]"]=Fe["[object Number]"]=Fe["[object Object]"]=Fe["[object RegExp]"]=Fe["[object Set]"]=Fe["[object String]"]=Fe["[object WeakMap]"]=false;
var Ie={};Ie["[object Arguments]"]=Ie["[object Array]"]=Ie["[object ArrayBuffer]"]=Ie["[object DataView]"]=Ie["[object Boolean]"]=Ie["[object Date]"]=Ie["[object Float32Array]"]=Ie["[object Float64Array]"]=Ie["[object Int8Array]"]=Ie["[object Int16Array]"]=Ie["[object Int32Array]"]=Ie["[object Map]"]=Ie["[object Number]"]=Ie["[object Object]"]=Ie["[object RegExp]"]=Ie["[object Set]"]=Ie["[object String]"]=Ie["[object Symbol]"]=Ie["[object Uint8Array]"]=Ie["[object Uint8ClampedArray]"]=Ie["[object Uint16Array]"]=Ie["[object Uint32Array]"]=true,
Ie["[object Error]"]=Ie["[object Function]"]=Ie["[object WeakMap]"]=false;var Me,$e=parseInt,Ue=typeof global=="object"&&global&&global.Object===Object&&global,Be=typeof self=="object"&&self&&self.Object===Object&&self,De=Ue||Be||Function("return this")(),Re=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Le=Re&&typeof module=="object"&&module&&!module.nodeType&&module,Pe=Le&&Le.exports===Re,Ce=Pe&&Ue.process;t:{try{Me=Ce&&Ce.binding&&Ce.binding("util");break t}catch(t){}Me=void 0}var Ne=Me&&Me.isMap,Te=Me&&Me.isSet,Ve=Me&&Me.isTypedArray,We=Array.prototype,qe=Object.prototype,Ge=De["__core-js_shared__"],Ke=Function.prototype.toString,He=qe.hasOwnProperty,Je=function(){
var t=/[^.]+$/.exec(Ge&&Ge.keys&&Ge.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Qe=qe.toString,Xe=RegExp("^"+Ke.call(He).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ye=Pe?De.Buffer:ae,Ze=De.Symbol,tr=De.Uint8Array,er=Ye?Ye.a:ae,rr=p(Object.getPrototypeOf),nr=Object.create,ur=qe.propertyIsEnumerable,or=We.splice,ir=Ze?Ze.isConcatSpreadable:ae,cr=Ze?Ze.iterator:ae,ar=Ze?Ze.toStringTag:ae,fr=function(){try{var t=jt(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),lr=Object.getOwnPropertySymbols,sr=Ye?Ye.isBuffer:ae,hr=p(Object.keys),br=Math.max,pr=Math.min,yr=Date.now,_r=jt(De,"DataView"),gr=jt(De,"Map"),vr=jt(De,"Promise"),dr=jt(De,"Set"),jr=jt(De,"WeakMap"),wr=jt(Object,"create"),Ar=jr&&new jr,mr={},Or=Mt(_r),Sr=Mt(gr),kr=Mt(vr),xr=Mt(dr),zr=Mt(jr),Er=Ze?Ze.prototype:ae,Fr=Er?Er.valueOf:ae,Ir=Er?Er.toString:ae,Mr=function(){function t(){}return function(e){return Tt(e)?nr?nr(e):(t.prototype=e,e=new t,t.prototype=ae,e):{};
}}();v.prototype=Mr(function(){}.prototype),v.prototype.constructor=v,d.prototype.clear=function(){this.__data__=wr?wr(null):{},this.size=0},d.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},d.prototype.get=function(t){var e=this.__data__;return wr?(t=e[t],"__lodash_hash_undefined__"===t?ae:t):He.call(e,t)?e[t]:ae},d.prototype.has=function(t){var e=this.__data__;return wr?e[t]!==ae:He.call(e,t)},d.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,
r[t]=wr&&e===ae?"__lodash_hash_undefined__":e,this},j.prototype.clear=function(){this.__data__=[],this.size=0},j.prototype.delete=function(t){var e=this.__data__;return t=k(e,t),!(0>t)&&(t==e.length-1?e.pop():or.call(e,t,1),--this.size,true)},j.prototype.get=function(t){var e=this.__data__;return t=k(e,t),0>t?ae:e[t][1]},j.prototype.has=function(t){return-1<k(this.__data__,t)},j.prototype.set=function(t,e){var r=this.__data__,n=k(r,t);return 0>n?(++this.size,r.push([t,e])):r[n][1]=e,this},w.prototype.clear=function(){
this.size=0,this.__data__={hash:new d,map:new(gr||j),string:new d}},w.prototype.delete=function(t){return t=vt(this,t).delete(t),this.size-=t?1:0,t},w.prototype.get=function(t){return vt(this,t).get(t)},w.prototype.has=function(t){return vt(this,t).has(t)},w.prototype.set=function(t,e){var r=vt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},A.prototype.add=A.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},A.prototype.has=function(t){return this.__data__.has(t);
},m.prototype.clear=function(){this.__data__=new j,this.size=0},m.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},m.prototype.get=function(t){return this.__data__.get(t)},m.prototype.has=function(t){return this.__data__.has(t)},m.prototype.set=function(t,e){var r=this.__data__;if(r instanceof j){var n=r.__data__;if(!gr||199>n.length)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new w(n)}return r.set(t,e),this.size=r.size,this};var $r=function(t,e){
return function(r,n){if(null==r)return r;if(!Lt(r))return t(r,n);for(var u=r.length,o=e?u:-1,i=Object(r);(e?o--:++o<u)&&false!==n(i[o],o,i););return r}}(function(t,e){return t&&Ur(t,e,Yt)}),Ur=function(t){return function(e,r,n){var u=-1,o=Object(e);n=n(e);for(var i=n.length;i--;){var c=n[t?i:++u];if(false===r(o[c],c,o))break}return e}}(),Br=Ar?function(t,e){return Ar.set(t,e),t}:re,Dr=fr?function(t,e){return fr(t,"toString",{configurable:true,enumerable:false,value:ee(e),writable:true})}:re,Rr=dr&&1/_(new dr([,-0]))[1]==fe?function(t){
return new dr(t)}:ue,Lr=Ar?function(t){return Ar.get(t)}:ue,Pr=lr?function(t){return null==t?[]:(t=Object(t),r(lr(t),function(e){return ur.call(t,e)}))}:ie,Cr=lr?function(t){for(var e=[];t;)i(e,Pr(t)),t=rr(t);return e}:ie,Nr=B;(_r&&"[object DataView]"!=Nr(new _r(new ArrayBuffer(1)))||gr&&"[object Map]"!=Nr(new gr)||vr&&"[object Promise]"!=Nr(vr.resolve())||dr&&"[object Set]"!=Nr(new dr)||jr&&"[object WeakMap]"!=Nr(new jr))&&(Nr=function(t){var e=B(t);if(t=(t="[object Object]"==e?t.constructor:ae)?Mt(t):"")switch(t){
case Or:return"[object DataView]";case Sr:return"[object Map]";case kr:return"[object Promise]";case xr:return"[object Set]";case zr:return"[object WeakMap]"}return e});var Tr=Ft(Br),Vr=Ft(Dr),Wr=function(t){t=Dt(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(pe,function(t,r,n,u){e.push(n?u.replace(de,"$1"):r||t)}),e}),qr=K(function(t,e){return Pt(t)?I(t,M(e,1,Pt,true)):[]}),Gr=K(function(t,e){var r=Ut(e);
return Pt(r)&&(r=ae),Pt(t)?I(t,M(e,1,Pt,true),ae,r):[]}),Kr=K(function(t){var e=o(t,Q);return e.length&&e[0]===t[0]?D(e):[]}),Hr=K(function(t){var e=Ut(t),r=o(t,Q);return(e=typeof e=="function"?e:ae)&&r.pop(),r.length&&r[0]===t[0]?D(r,ae,e):[]});Dt.Cache=w;var Jr=K(function(t,e){var r,n,u=y(e,_t(Jr)),o=t,i=ae,c=e,a=u,f=64,u=2&f;if(!u&&typeof o!="function")throw new TypeError("Expected a function");var l=c?c.length:0;if(l||(f&=-97,c=a=ae),r=r===ae?r:br(Kt(r),0),n=n===ae?n:Kt(n),l-=a?a.length:0,64&f)var s=c,h=a,c=a=ae;
var b=u?ae:Lr(o);return r=[o,f,i,c,a,s,h,void 0,r,n],b&&(c=r[1],o=b[1],i=c|o,n=128==o&&8==c||128==o&&256==c&&r[7].length<=b[8]||384==o&&b[7].length<=b[8]&&8==c,131>i||n)&&(1&o&&(r[2]=b[2],i|=1&c?0:4),(c=b[3])&&(n=r[3],r[3]=n?tt(n,c,b[4]):c,r[4]=n?y(r[3],"__lodash_placeholder__"):b[4]),(c=b[5])&&(n=r[5],r[5]=n?et(n,c,b[6]):c,r[6]=n?y(r[5],"__lodash_placeholder__"):b[6]),(c=b[7])&&(r[7]=c),128&o&&(r[8]=null==r[8]?b[8]:pr(r[8],b[8])),null==r[9]&&(r[9]=b[9]),r[0]=b[0],r[1]=i),o=r[0],f=r[1],i=r[2],c=r[3],
a=r[4],n=r[9]=r[9]===ae?u?0:o.length:br(r[9]-l,0),!n&&24&f&&(f&=-25),Et((b?Br:Tr)(f&&1!=f?8==f||16==f?at(o,f,n):32!=f&&33!=f||a.length?ft.apply(ae,r):lt(o,f,i,c):it(o,f,i),r),o,f)}),Qr=R(function(){return arguments}())?R:function(t){return Vt(t)&&He.call(t,"callee")&&!ur.call(t,"callee")},Xr=Array.isArray,Yr=sr||ce,Zr=Ne?l(Ne):P,tn=Te?l(Te):N,en=Ve?l(Ve):T;g.constant=ee,g.difference=qr,g.differenceWith=Gr,g.intersection=Kr,g.intersectionWith=Hr,g.iteratee=ne,g.keys=Yt,g.keysIn=Zt,g.memoize=Dt,g.partialRight=Jr,
g.property=oe,g.toArray=function(t){if(!t)return[];if(Lt(t))return Wt(t)?Ee.test(t)?t.match(ze)||[]:t.split(""):rt(t);if(cr&&t[cr]){t=t[cr]();for(var e,r=[];!(e=t.next()).done;)r.push(e.value);return r}return e=Nr(t),("[object Map]"==e?b:"[object Set]"==e?_:te)(t)},g.uniq=function(t){return t&&t.length?J(t):[]},g.uniqWith=function(t,e){return e=typeof e=="function"?e:ae,t&&t.length?J(t,ae,e):[]},g.values=te,g.eq=Rt,g.forEach=Bt,g.get=Qt,g.hasIn=Xt,g.identity=re,g.isArguments=Qr,g.isArray=Xr,g.isArrayLike=Lt,
g.isArrayLikeObject=Pt,g.isBuffer=Yr,g.isFunction=Ct,g.isLength=Nt,g.isMap=Zr,g.isObject=Tt,g.isObjectLike=Vt,g.isSet=tn,g.isString=Wt,g.isSymbol=qt,g.isTypedArray=en,g.last=Ut,g.stubArray=ie,g.stubFalse=ce,g.noop=ue,g.toFinite=Gt,g.toInteger=Kt,g.toNumber=Ht,g.toString=Jt,g.each=Bt,g.VERSION="4.17.5",Jr.placeholder=g, true?(De._=g, !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return g}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):Le?((Le.exports=g)._=g,Re._=g):De._=g}).call(this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(6)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    debounce: function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    configure: function (instance, properties, options) {
        for (var i in properties) {
            var initial = properties[i],
                attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

            if (typeof initial === "number") {
                instance[i] = parseInt(attrValue);
            } else if (initial === false) { // Boolean options must be false by default anyway
                instance[i] = attrValue !== null;
            } else if (initial instanceof Function) {
                instance[i] = null;
            } else {
                instance[i] = attrValue;
            }

            if (!instance[i] && instance[i] !== 0) {
                instance[i] = (i in options) ? options[i] : initial;
            }
        }
    },
    getScript: function (scriptUrl, callback) {
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.async = true;

        scriptElement.src = scriptUrl;

        var firstScript = document.getElementsByTagName('head')[0];
        firstScript.appendChild(scriptElement, firstScript);

        if (scriptElement.readyState) {
            scriptElement.onreadystatechange = function () {
                if (this.readyState === 'complete' || this.readyState === 'loaded') {
                    callback();
                } else {
                    console.error('Error when loading script ' + scriptUrl);
                }
            };
        } else {
            scriptElement.onload = function () {
                callback();
            };
            scriptElement.onerror = function () {
                console.error('Error when loading script ' + scriptUrl);
            };
        }
    },
    buildQueryString: function (parameters) {
        let queryStringParts = [];
        for (let key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                let value = parameters[key];
                if (value !== undefined) {
                    queryStringParts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
                }
            }
        }
        return queryStringParts.join('&');
    },
    makeRequest: function ({method, url, headers, body}, resolve, reject) {
        const xhr = new window.XMLHttpRequest();
        xhr.open(method || "GET", url);
        if (headers) {
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => {
            reject(xhr.statusText);
        };
        xhr.send(body);

        return xhr;
    },

    $: function (expr, con) {
        return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
    },
    $$: function (expr, con) {
        return Array.prototype.slice.call((con || document).querySelectorAll(expr));
    }

};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
    google: {
        clientId: '',
        apiKey: '',
        channel: '',
        librariesToLoad: ['places'],
        version: '3',
        componentRestrictions: {},
        fields: ['address_component', 'adr_address', 'formatted_address', 'geometry', 'icon', 'name', 'place_id', 'type', 'url', 'vicinity'],
        useSessionTokens: true
    },
    woosmap: {
        projectKey: '',
        componentRestrictions: {},
        addressComponentRestrictions: {},
        types: [],
        data: 'standard',
        language: '',
        localitiesLibUrl: 'https://sdk.woosmap.com/localities/localities.js',
        addressApiUrl: 'https://api.woosmap.com/address/'
    },
    autocomplete: {
        minChars: 2,
        maxItems: 5,
        autoFirst: false,
        sort: false,
        debounceTime: 100,
    },
    search: {
        minRatio: 75,
        breakpointRatio: 100,
        fallbackWoosmapAddress: false,
        fallbackWoosmap: true,
    },
    analytics: {
        tracking: false,
        analyticsKey: '',
        eventCategoryWoosmap: 'woosmap-localities',
        eventCategoryWoosmapAddress: 'woosmap-address',
        eventCategoryGoogle: 'google-places'
    },
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function () {
    /** @module fuzzball */
    'use strict';
    var SequenceMatcher = __webpack_require__(14);
    var Heap = __webpack_require__(15);

    var _intersect = __webpack_require__(0).intersection;
    var _intersectWith = __webpack_require__(0).intersectionWith;
    var _difference = __webpack_require__(0).difference;
    var _differenceWith = __webpack_require__(0).differenceWith;
    var _uniq = __webpack_require__(0).uniq;
    var _uniqWith = __webpack_require__(0).uniqWith;
    var _partialRight = __webpack_require__(0).partialRight;
    var _forEach = __webpack_require__(0).forEach;
    var _keys = __webpack_require__(0).keys;
    var _isArray = __webpack_require__(0).isArray;
    var _toArray = __webpack_require__(0).toArray;

    var iLeven = __webpack_require__(17);
    var wildleven = __webpack_require__(7);
    var leven = __webpack_require__(8);

    if (typeof setImmediate !== 'function') __webpack_require__(5); // didn't run in tiny-worker without extra check

    var utils = __webpack_require__(20)(_uniq, _uniqWith, _partialRight);
    var validate = utils.validate;
    var process_and_sort = utils.process_and_sort;
    var tokenize = utils.tokenize;
    var full_process = utils.full_process;
    var clone_and_set_option_defaults = utils.clone_and_set_option_defaults;
    var isCustomFunc = utils.isCustomFunc;

    var processing = __webpack_require__(25)(clone_and_set_option_defaults, _isArray, QRatio, extract);

    var dedupe = processing.dedupe;

    /** Mostly follows after python fuzzywuzzy, https://github.com/seatgeek/fuzzywuzzy */


    /** Public functions */

    function distance(str1, str2, options_p) {
        /**
         * Calculate levenshtein distance of the two strings.
         *
         * @function distance
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein distance (0 and above).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (typeof options.subcost === "undefined") options.subcost = 1;
        if (options.astral) return iLeven(str1, str2, options, _toArray);
        else return wildleven(str1, str2, options, leven); // falls back to leven if no wildcards
    }

    function QRatio(str1, str2, options_p) {
        /**
         * Calculate levenshtein ratio of the two strings.
         *
         * @function ratio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        return _ratio(str1, str2, options);
    }

    function partial_ratio(str1, str2, options_p) {
        /**
         * Calculate partial levenshtein ratio of the two strings.
         *
         * @function partial_ratio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        return _partial_ratio(str1, str2, options);
    }

    function token_set_ratio(str1, str2, options_p) {
        /**
         * Calculate token set ratio of the two strings.
         *
         * @function token_set_ratio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {boolean} [options_p.trySimple] - try simple/partial ratio as part of (parial_)token_set_ratio test suite
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        return _token_set(str1, str2, options);
    }

    function partial_token_set_ratio(str1, str2, options_p) {
        /**
         * Calculate partial token ratio of the two strings.
         *
         * @function partial_token_set_ratio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {boolean} [options_p.trySimple] - try simple/partial ratio as part of (parial_)token_set_ratio test suite
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        options.partial = true;
        return _token_set(str1, str2, options);
    }

    function token_sort_ratio(str1, str2, options_p) {
        /**
         * Calculate token sort ratio of the two strings.
         *
         * @function token_sort_ratio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        if (!options.proc_sorted) {
            str1 = process_and_sort(str1);
            str2 = process_and_sort(str2);
        }
        return _ratio(str1, str2, options);
    }

    function partial_token_sort_ratio(str1, str2, options_p) {
        /**
         * Calculate partial token sort ratio of the two strings.
         *
         * @function partial_token_sort_ratio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        options.partial = true;
        if (!options.proc_sorted) {
            str1 = process_and_sort(str1);
            str2 = process_and_sort(str2);
        }
        return _partial_ratio(str1, str2, options);
    }

    function WRatio(str1, str2, options_p) {
        /**
         * Calculate weighted ratio of the two strings, taking best score of various methods.
         *
         * @function WRatio
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true
         * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        //str1 = full_process(str1, options);  //fuzzywuzzy runs no matter what, reason? going by options.full_process
        //str2 = full_process(str2, options);
        str1 = options.full_process ? full_process(str1, options) : str1;
        str2 = options.full_process ? full_process(str2, options) : str2;
        options.full_process = false;
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;

        var try_partial = true;
        var unbase_scale = .95;
        var partial_scale = .90;

        var base = _ratio(str1, str2, options);
        var len_ratio = Math.max(str1.length, str2.length)/Math.min(str1.length, str2.length);

        if (len_ratio < 1.5) try_partial = false;
        if (len_ratio > 8) partial_scale = .6;

        if (try_partial) {
            var partial = _partial_ratio(str1, str2, options) * partial_scale;
            var ptsor = partial_token_sort_ratio(str1, str2, options) * unbase_scale * partial_scale;
            var ptser = partial_token_set_ratio(str1, str2, options) * unbase_scale * partial_scale;
            return Math.round(Math.max(base, partial, ptsor, ptser));
        }
        else {
            var tsor = token_sort_ratio(str1, str2, options) * unbase_scale;
            var tser = token_set_ratio(str1, str2, options) * unbase_scale;
            return Math.round(Math.max(base, tsor, tser));
        }
    }

    function extract(query, choices, options_p) {
        /**
         * Return the top scoring items from an array (or assoc array) of choices
         *
         * @function extract
         * @param query - the search term.
         * @param {String[]|Object[]|Object} choices - array of strings, or array of choice objects if processor is supplied, or object of form {key: choice}
         * @param {Object} [options_p] - Additional options.
         * @param {function} [options_p.scorer] - takes two values and returns a score, will be passed options as 3rd argument
         * @param {function} [options_p.processor] - takes each choice and outputs a value to be used for Scoring
         * @param {number} [options_p.limit] - optional max number of results to return, returns all if not supplied
         * @param {number} [options_p.cutoff] - minimum score that will get returned 0-100
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default false
         * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
         * @param {boolean} [options_p.trySimple] - try simple/partial ratio as part of (parial_)token_set_ratio test suite
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {boolean} [options_p.returnObjects] - return array of object instead of array of tuples; default false
         * @returns {Array[] | Object[]} - array of choice results with their computed ratios (0-100).
         */
        var options = clone_and_set_option_defaults(options_p);
        var numchoices;
        if (_isArray(choices)) {
            numchoices = choices.length;
        }
        else if (!(choices instanceof Object)) {
            throw new Error("Invalid choices");
        }
        else numchoices = _keys(choices).length;
        if (!choices || numchoices === 0) {
            if (typeof console !== undefined) console.warn("No choices");
            return [];
        }
        if (options.processor && typeof options.processor !== "function") {
            throw new Error("Invalid Processor");
        }
        if (!options.processor) options.processor = function (x) { return x; }
        if (options.scorer && typeof options.scorer !== "function") {
            throw new Error("Invalid Scorer");
        }
        if (!options.scorer) {
            options.scorer = QRatio;
        }
        var isCustom = isCustomFunc(options.scorer); // check if func name is one of fuzzball's, so don't use same names..
        if (!options.cutoff || typeof options.cutoff !== "number") { options.cutoff = -1;}
        var pre_processor = function(choice, force_ascii) {return choice;}
        if (options.full_process) {
            pre_processor = full_process;
            if (!isCustom) options.processed = true; // to let wildcardLeven know and not run again after we set fp to false below
        }
        var normalize = false;
        if (!isCustom) { // if custom scorer func let scorer handle it
            query = pre_processor(query, options);
            options.full_process = false;
            if (options.astral && options.normalize) {
                options.normalize = false;  // don't normalize again in ratio if doing here
                if (String.prototype.normalize) {
                    normalize = true
                    query = query.normalize();
                }
                else {
                    if (typeof console !== undefined) console.warn("Normalization not supported in your environment");
                }
            }
            if (query.length === 0) if (typeof console !== undefined) console.warn("Processed query is empty string");
        }
        var results = [];
        var anyblank = false;
        var tsort = false;
        var tset = false;
        if (options.scorer.name === "token_sort_ratio" || options.scorer.name === "partial_token_sort_ratio") {
            var proc_sorted_query = process_and_sort(query);
            tsort = true;
        }
        else if (options.scorer.name === "token_set_ratio" || options.scorer.name === "partial_token_set_ratio") {
            var query_tokens = tokenize(query, options);
            tset = true;
        }

        var result, mychoice, cmpHeap, cmpSort;
        if (options.returnObjects) {
            cmpHeap = function (a, b) { return a.score - b.score; };
            cmpSort = function (a, b) { return b.score - a.score; };
        }
        else {
            cmpHeap = function (a, b) { return a[1] - b[1]; };
            cmpSort = function (a, b) { return b[1] - a[1]; };
        }
        _forEach(choices, function (value, key) {
            options.tokens = undefined;
            options.proc_sorted = false;
            if (tsort) {
                options.proc_sorted = true;
                if (value && value.proc_sorted) mychoice = value.proc_sorted;
                else {
                    mychoice = pre_processor(options.processor(value), options);
                    mychoice = process_and_sort(normalize ? mychoice.normalize() : mychoice);
                }
                result = options.scorer(proc_sorted_query, mychoice, options);
            }
            else if (tset) {
                mychoice = "x"; //dummy string so it validates, if either tokens is [] all 3 tests will still be 0
                if (value && value.tokens) {
                    options.tokens = [query_tokens, value.tokens];
                    if (options.trySimple) mychoice = pre_processor(options.processor(value), options);
                }
                else {
                    mychoice = pre_processor(options.processor(value), options);
                    options.tokens = [query_tokens, tokenize((normalize ? mychoice.normalize() : mychoice), options)]
                }
                //query and mychoice only used for validation here unless trySimple = true
                result = options.scorer(query, mychoice, options);
            }
            else if (isCustom) {
                // options.full_process should be unmodified, don't pre-process here since mychoice maybe not string
                mychoice = options.processor(value);
                result = options.scorer(query, mychoice, options);
            }
            else {
                mychoice = pre_processor(options.processor(value), options);
                if (typeof mychoice !== "string" || mychoice.length === 0) anyblank = true;
                if (normalize && typeof mychoice === "string") mychoice = mychoice.normalize();
                result = options.scorer(query, mychoice, options);
            }
            if (result > options.cutoff) {
                if (options.returnObjects) results.push({choice: value, score: result, key: key});
                else results.push([value, result, key]);
            }
        });

        if (anyblank) if (typeof console !== undefined) console.log("One or more choices were empty. (post-processing if applied)")
        if (options.limit && typeof options.limit === "number" && options.limit > 0 && options.limit < numchoices && !options.unsorted) {
            results = Heap.nlargest(results, options.limit, cmpHeap);
        }
        else if (!options.unsorted) {
            results = results.sort(cmpSort);
        }
        return results;
    }

    function extractAsync(query, choices, options_p, callback) {
        /**
         * Return the top scoring items from an array (or assoc array) of choices
         *
         * @function extractAsync
         * @param query - the search term.
         * @param {String[]|Object[]|Object} choices - array of strings, or array of choice objects if processor is supplied, or object of form {key: choice}
         * @param {Object} [options_p] - Additional options.
         * @param {function} [options_p.scorer] - takes two values and returns a score, will be passed options as 3rd argument
         * @param {function} [options_p.processor] - takes each choice and outputs a value to be used for Scoring
         * @param {number} [options_p.limit] - optional max number of results to return, returns all if not supplied
         * @param {number} [options_p.cutoff] - minimum score that will get returned 0-100
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {number} [options_p.astral] - Use astral aware calculation
         * @param {string} [options_p.normalize] - Normalize unicode representations
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default false
         * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
         * @param {boolean} [options_p.trySimple] - try simple/partial ratio as part of (parial_)token_set_ratio test suite
         * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
         * @param {boolean} [options_p.returnObjects] - return array of object instead of array of tuples; default false
         * @param {Object} [options_p.cancelToken] - track cancellation
         * @param {function} callback - node style callback (err, arrayOfResults)
         */
        var options = clone_and_set_option_defaults(options_p);
        var cancelToken;
        if (typeof options_p.cancelToken === "object") {
            cancelToken = options_p.cancelToken;
        }

        var isArray = false;
        var numchoices;
        if (choices && choices.length && _isArray(choices)) {
            numchoices = choices.length;
            isArray = true; //if array don't check hasOwnProperty every time below
        }
        else if (!(choices instanceof Object)) {
            callback(new Error("Invalid choices"));
            return;
        }
        else numchoices = Object.keys(choices).length;
        if (!choices || numchoices === 0) {
            if (typeof console !== undefined) console.warn("No choices");
            callback(null, []);
            return;
        }
        if (options.processor && typeof options.processor !== "function") {
            callback(new Error("Invalid Processor"));
            return;
        }
        if (!options.processor) options.processor = function (x) { return x; }
        if (options.scorer && typeof options.scorer !== "function") {
            callback(new Error("Invalid Scorer"));
            return;
        }
        if (!options.scorer) {
            options.scorer = QRatio;
        }
        var isCustom = isCustomFunc(options.scorer); // check if func name is one of fuzzball's, so don't use same names..
        if (!options.cutoff || typeof options.cutoff !== "number") { options.cutoff = -1; }
        var pre_processor = function (choice, force_ascii) { return choice; }
        if (options.full_process) {
            pre_processor = full_process;
            if (!isCustom) options.processed = true; // to let wildcardLeven know and not run again after we set fp to false below
        }
        var normalize = false;
        if (!isCustom) { // if custom scorer func let scorer handle it
            query = pre_processor(query, options);
            options.full_process = false;
            if (options.astral && options.normalize) {
                options.normalize = false;  // don't normalize again in ratio if doing here
                if (String.prototype.normalize) {
                    normalize = true
                    query = query.normalize();
                }
                else {
                    if (typeof console !== undefined) console.warn("Normalization not supported in your environment");
                }
            }
            if (query.length === 0) if (typeof console !== undefined) console.warn("Processed query is empty string");
        }
        var results = [];
        var anyblank = false;
        var tsort = false;
        var tset = false;
        if (options.scorer.name === "token_sort_ratio" || options.scorer.name === "partial_token_sort_ratio") {
            var proc_sorted_query = process_and_sort(query);
            tsort = true;
        }
        else if (options.scorer.name === "token_set_ratio" || options.scorer.name === "partial_token_set_ratio") {
            var query_tokens = tokenize(query, options);
            tset = true;
        }
        var idx, mychoice, result, cmpHeap, cmpSort;
        if (options.returnObjects) {
            cmpHeap = function (a, b) { return a.score - b.score; };
            cmpSort = function (a, b) { return b.score - a.score; };
        }
        else {
            cmpHeap = function (a, b) { return a[1] - b[1]; };
            cmpSort = function (a, b) { return b[1] - a[1]; };
        }
        var keys = Object.keys(choices);
        isArray ? searchLoop(0) : searchLoop(keys[0], 0);
        function searchLoop(c, i) {
            if (isArray || choices.hasOwnProperty(c)) {
                options.tokens = undefined;
                options.proc_sorted = false;
                if (tsort) {
                    options.proc_sorted = true;
                    if (choices[c] && choices[c].proc_sorted) mychoice = choices[c].proc_sorted;
                    else {
                        mychoice = pre_processor(options.processor(choices[c]), options);
                        mychoice = process_and_sort(normalize ? mychoice.normalize() : mychoice);
                    }
                    result = options.scorer(proc_sorted_query, mychoice, options);
                }
                else if (tset) {
                    mychoice = "x"; //dummy string so it validates
                    if (choices[c] && choices[c].tokens) {
                        options.tokens = [query_tokens, choices[c].tokens];
                        if (options.trySimple) mychoice = pre_processor(options.processor(choices[c]), options);
                    }
                    else {
                        mychoice = pre_processor(options.processor(choices[c]), options);
                        options.tokens = [query_tokens, tokenize((normalize ? mychoice.normalize() : mychoice), options)]
                    }
                    //query and mychoice only used for validation here unless trySimple = true
                    result = options.scorer(query, mychoice, options);
                }
                else if (isCustom) {
                    // options.full_process should be unmodified, don't pre-process here since mychoice maybe not string
                    mychoice = options.processor(choices[c]);
                    result = options.scorer(query, mychoice, options);
                }
                else {
                    mychoice = pre_processor(options.processor(choices[c]), options);
                    if (typeof mychoice !== "string" || mychoice.length === 0) anyblank = true;
                    if (normalize && typeof mychoice === "string") mychoice = mychoice.normalize();
                    result = options.scorer(query, mychoice, options);
                }
                if (isArray) idx = parseInt(c);
                else idx = c;
                if (result > options.cutoff) {
                    if (options.returnObjects) results.push({ choice: choices[c], score: result, key: idx });
                    else results.push([choices[c], result, idx]);
                }
            }

            if (cancelToken && cancelToken.canceled === true) {
                callback(new Error("canceled"));
                return;
            }

            if (isArray && c < choices.length - 1) {
                if (c % 256 === 0) { setImmediate(function () { searchLoop(c + 1) }); }
                else { searchLoop(c + 1); }
            }
            else if (i < keys.length - 1) {
                if (i % 256 === 0) {setImmediate(function () { searchLoop(keys[i + 1], i + 1); }); }
                else { searchLoop(keys[i + 1], i + 1); }
            }
            else {
                if (anyblank) if (typeof console !== undefined) console.log("One or more choices were empty. (post-processing if applied)")
                if (options.limit && typeof options.limit === "number" && options.limit > 0 && options.limit < numchoices && !options.unsorted) {
                    results = Heap.nlargest(results, options.limit, cmpHeap);
                }
                else if (!options.unsorted) {
                    results = results.sort(cmpSort);
                }
                callback(null, results);
            }
        }
    }


/** Main Scoring Code */

    function _token_set(str1, str2, options) {

        if (!options.tokens) {
            var tokens1 = tokenize(str1, options);
            var tokens2 = tokenize(str2, options);
        }
        else {
            var tokens1 = options.tokens[0];
            var tokens2 = options.tokens[1];
        }

        if (options.wildcards) {
            var partWild = _partialRight(wildleven, options, leven);
            var wildCompare = function (a, b) { return partWild(a, b) === 0; }
            var intersection = _intersectWith(tokens1, tokens2, wildCompare);
            var diff1to2 = _differenceWith(tokens1, tokens2, wildCompare);
            var diff2to1 = _differenceWith(tokens2, tokens1, wildCompare);
        }
        else {
            var intersection = _intersect(tokens1, tokens2);
            var diff1to2 = _difference(tokens1, tokens2);
            var diff2to1 = _difference(tokens2, tokens1);
        }

        var sorted_sect = intersection.sort().join(" ");
        var sorted_1to2 = diff1to2.sort().join(" ");
        var sorted_2to1 = diff2to1.sort().join(" ");
        var combined_1to2 = sorted_sect + " " + sorted_1to2;
        var combined_2to1 = sorted_sect + " " + sorted_2to1;

        sorted_sect = sorted_sect.trim();
        combined_1to2 = combined_1to2.trim();
        combined_2to1 = combined_2to1.trim();
        var ratio_func = _ratio;
        if (options.partial) {
            ratio_func = _partial_ratio;
            if (sorted_sect.length > 0) return 100; // will always be 100 anyway
        }

        var pairwise = [
            ratio_func(sorted_sect, combined_1to2, options),
            ratio_func(sorted_sect, combined_2to1, options),
            ratio_func(combined_1to2, combined_2to1, options)
        ]
        if (options.trySimple) {
            pairwise.push(ratio_func(str1, str2, options));
        }
        return Math.max.apply(null, pairwise);
    }

    var normalWarn = false;
    function _ratio(str1, str2, options) {
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        if (options.ratio_alg && options.ratio_alg === "difflib") {
            var m = new SequenceMatcher(null, str1, str2);
            var r = m.ratio();
            return Math.round(100 * r);
        }
        //to match behavior of python-Levenshtein/fuzzywuzzy, substitution cost is 2 if not specified, or would default to 1
        if (typeof options.subcost === "undefined") options.subcost = 2;
        var levdistance, lensum;
        if (options.astral) {
            if (options.normalize) {
                if (String.prototype.normalize) {
                    str1 = str1.normalize();
                    str2 = str2.normalize();
                }
                else {
                    if (!normalWarn) {
                        if (typeof console !== undefined) console.warn("Normalization not supported in your environment");
                        normalWarn = true;
                    }
                }
            }
            levdistance = iLeven(str1, str2, options, _toArray);
            lensum = _toArray(str1).length + _toArray(str2).length
        }
        else {
            if (!options.wildcards) {
                levdistance = leven(str1, str2, options);
                lensum = str1.length + str2.length;
            }
            else {
                levdistance = wildleven(str1, str2, options, leven); // falls back to leven if invalid
                lensum = str1.length + str2.length;
            }
        }
        return Math.round(100 * ((lensum - levdistance)/lensum));
    }

    function _partial_ratio(str1, str2, options) {
        if (!validate(str1)) return 0;
        if (!validate(str2)) return 0;
        if (str1.length <= str2.length) {
            var shorter = str1
            var longer = str2
        }
        else {
            var shorter = str2
            var longer = str1
        }
        var m = new SequenceMatcher(null, shorter, longer);
        var blocks = m.getMatchingBlocks();
        var scores = [];
        for (var b = 0; b < blocks.length; b++) {
            var long_start = (blocks[b][1] - blocks[b][0]) > 0 ? (blocks[b][1] - blocks[b][0]) : 0;
            var long_end = long_start + shorter.length;
            var long_substr = longer.substring(long_start,long_end);
            var r = _ratio(shorter,long_substr,options);
            if (r > 99.5) return 100;
            else scores.push(r);
        }
        return Math.max.apply(null, scores);
    }

    //polyfill for Object.keys
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
        Object.keys = (function () {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function (obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }

                var result = [], prop, i;

                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }

                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        } ());
    }

    var extractAsPromised = undefined;
    if (typeof Promise !== 'undefined') {
        extractAsPromised = function(query, choices, options) {
            return new Promise(function(resolve, reject){
                extractAsync(query, choices, options, function(err, response){
                    if (err) reject(err);
                    else resolve(response);
                });
            });
        };
    }

    var fuzzball = {
        distance: distance,
        ratio: QRatio,
        partial_ratio: partial_ratio,
        token_set_ratio: token_set_ratio,
        token_sort_ratio: token_sort_ratio,
        partial_token_set_ratio: partial_token_set_ratio,
        partial_token_sort_ratio: partial_token_sort_ratio,
        WRatio: WRatio,
        full_process: full_process,
        extract: extract,
        extractAsync: extractAsync,
        extractAsPromised: extractAsPromised,
        process_and_sort: process_and_sort,
        unique_tokens: tokenize,
        dedupe: dedupe
    };

     module.exports = fuzzball;
} ());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).setImmediate))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(13)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// @ts-check
// levenshtein distance with wildcard support

/** from https://github.com/hiddentao/fast-levenshtein slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */
var collator;
try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
} catch (err) {
    if (typeof console !== undefined) console.warn("Collator could not be initialized and wouldn't be used");
}

module.exports = function leven(a, b, options, regLeven) {
    /** from https://github.com/sindresorhus/leven slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */
    var arr = [];
    var charCodeCache = [];
    var useCollator = (options && collator && options.useCollator);
    var subcost = 1;
    //to match behavior of python-Levenshtein and fuzzywuzzy, set to 2 in _ratio
    if (options && options.subcost && typeof options.subcost === "number") subcost = options.subcost;

    if (a === b) {
        return 0;
    }

    var aLen = a.length;
    var bLen = b.length;

    if (aLen === 0) {
        return bLen;
    }

    if (bLen === 0) {
        return aLen;
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    // not doing full check in _ratio as of now
    if (options && options.wildcards && typeof options.wildcards === "string" && options.wildcards.length > 0) {
        var wildchar;
        var wildcode;
        if (options.full_process === false && options.processed !== true) {
            wildchar = options.wildcards[0];
            wildcode = wildchar.charCodeAt(0);
            var pattern = '[' + escapeRegExp(options.wildcards) + ']';
            a = a.replace(new RegExp(pattern, "g"), wildchar);
            b = b.replace(new RegExp(pattern, "g"), wildchar);
            if (a === b) return 0; //check again post replacement
        }
        else {
            wildchar = options.wildcards[0].toLowerCase();
            wildcode = wildchar.charCodeAt(0);
        }

        var bCharCode;
        var ret;
        var tmp;
        var tmp2;
        var i = 0;
        var j = 0;

        while (i < aLen) {
            charCodeCache[i] = a.charCodeAt(i);
            arr[i] = ++i;
        }
        if (!useCollator) {  //checking for collator inside while 2x slower
            while (j < bLen) {
                bCharCode = b.charCodeAt(j);
                tmp = j++;
                ret = j;
                for (i = 0; i < aLen; i++) {
                    tmp2 = bCharCode === charCodeCache[i] || bCharCode === wildcode || charCodeCache[i] === wildcode ? tmp : tmp + subcost;
                    tmp = arr[i];
                    ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
                }
            }
        }
        else {
            while (j < bLen) {
                bCharCode = b.charCodeAt(j);
                tmp = j++;
                ret = j;

                for (i = 0; i < aLen; i++) {
                    tmp2 = 0 === collator.compare(String.fromCharCode(bCharCode), String.fromCharCode(charCodeCache[i]))
                        || bCharCode === wildcode || charCodeCache[i] === wildcode ? tmp : tmp + subcost;
                    tmp = arr[i];
                    ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
                }
            }
        }
        return ret;
    }
    else {
        return regLeven(a, b, options)
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// @ts-check
// levenshtein distance without astral support

/** from https://github.com/hiddentao/fast-levenshtein slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */
var collator;
try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
} catch (err) {
    if (typeof console !== undefined) console.warn("Collator could not be initialized and wouldn't be used");
}

module.exports = function leven(a, b, options) {

    /** from https://github.com/sindresorhus/leven slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */
    var arr = [];
    var charCodeCache = [];
    var useCollator = (options && collator && options.useCollator);
    var subcost = 1;
    //to match behavior of python-Levenshtein and fuzzywuzzy, set to 2 in _ratio
    if (options && options.subcost && typeof options.subcost === "number") subcost = options.subcost;

    if (a === b) {
        return 0;
    }

    var aLen = a.length;
    var bLen = b.length;

    if (aLen === 0) {
        return bLen;
    }

    if (bLen === 0) {
        return aLen;
    }

    var bCharCode;
    var ret;
    var tmp;
    var tmp2;
    var i = 0;
    var j = 0;

    while (i < aLen) {
        charCodeCache[i] = a.charCodeAt(i);
        arr[i] = ++i;
    }
    if (!useCollator) {  //checking for collator inside while 2x slower
        while (j < bLen) {
            bCharCode = b.charCodeAt(j);
            tmp = j++;
            ret = j;
            for (i = 0; i < aLen; i++) {
                tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + subcost;
                tmp = arr[i];
                ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
            }
        }
    }
    else {
        while (j < bLen) {
            bCharCode = b.charCodeAt(j);
            tmp = j++;
            ret = j;

            for (i = 0; i < aLen; i++) {
                tmp2 = 0 === collator.compare(String.fromCharCode(bCharCode), String.fromCharCode(charCodeCache[i])) ? tmp : tmp + subcost;
                tmp = arr[i];
                ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
            }
        }
    }
    return ret;

}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
__webpack_require__(32);
module.exports = __webpack_require__(33);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(() => {
    const GooglePlaces = __webpack_require__(11);
    const Autocomplete = __webpack_require__(26);
    const WoosmapLocalities = __webpack_require__(29);
    const WoosmapAddress = __webpack_require__(30);
    const Analytics = __webpack_require__(31);
    const _ = __webpack_require__(1);
    const defaultSearchConfig = __webpack_require__(2).search;

    class AutocompleteWoosmapSearchBox {
        constructor(input, options) {
            const self = this;
            this.input = input;

            options = options || {};
            const googleOptions = options.google || {};
            const searchOptions = options.search || {};
            const woosmapOptions = options.woosmap || {};
            const autocompleteOptions = options.autocomplete || {};
            const analyticsOptions = options.analytics || {};

            defaultSearchConfig.inputEvt = this.autocompleteWoosmapInputEvt;
            defaultSearchConfig.selectComplete = this.autocompleteSelectComplete;
            _.configure(this, defaultSearchConfig, searchOptions);

            this.google = new GooglePlaces(input, googleOptions);
            this.woosmap = new WoosmapLocalities(input, woosmapOptions);
            this.woosmapaddress = new WoosmapAddress(input, woosmapOptions);
            this.autocomplete = new Autocomplete(input, autocompleteOptions);
            this.analytics = new Analytics(input, analyticsOptions);

            this.currentSearch = '';

            _.$(this.input).addEventListener("click", () => {
                self.autocompleteClickEvt();
            });
            _.$(this.input).addEventListener("input", _.debounce(() => {
                self.inputEvt();
            }, this.autocomplete.debounceTime, false));
            _.$(this.input).addEventListener('autocomplete-selectcomplete', evt => {
                self.selectComplete(evt);
            });
        }

        autocompleteSelectComplete({text}) {
            switch (text.metadata.dataType) {
                case 'woosmap':
                    Autocomplete.$.fire(this.input, "autocomplete-woosmap-selectcomplete", {
                        woosmapLocality: text.metadata
                    });
                    if (this.analytics.tracking) {
                        this.analytics.trackSearch(this.analytics.eventCategoryWoosmap, text.metadata.public_id, text.metadata.searchedTerm, text.metadata.label, [text.metadata.type]);
                    }
                    break;
                case 'woosmapaddress':
                    this.woosmapaddress.getAddressDetails(text.label,
                        addressDetails =>
                            Autocomplete.$.fire(this.input, "autocomplete-woosmapaddress-selectcomplete",
                                {addressDetails}));
                    if (this.analytics.tracking) {
                        this.analytics.trackSearch(this.analytics.eventCategoryWoosmapAddress, text.index, text.metadata.searchedTerm, text.metadata.label, text.metadata.type);
                    }
                    break;
                case 'google':
                    this.google.getDetails(text.metadata.place_id,
                        placeDetails =>
                            Autocomplete.$.fire(this.input, "autocomplete-google-selectcomplete",
                                {placeDetails}));
                    if (this.analytics.tracking) {
                        this.analytics.trackSearch(this.analytics.eventCategoryGoogle, text.metadata.place_id, text.metadata.searchedTerm, text.metadata.label, text.metadata.types);
                    }
                    break;
                default:
                    break;
            }
        }

        autocompleteWoosmapInputEvt() {
            const listLocalitiesItems = [];
            let fullRatioLocalities = false;
            if (this.input.value.length >= this.autocomplete.minChars) {
                this.currentSearch = this.input.value;
                this.request = {
                    input: this.input.value
                };
                const self = this;
                this.woosmap.getQueryPredictions(this.input.value, (list, query) => {
                    fullRatioLocalities = false;
                    if (query !== self.autocomplete.input.value) {
                        return;
                    }
                    if (list.length > 0) {
                        self.autocomplete.filter = ({metadata}) => metadata.ratio >= self.minRatio;
                        if (self.autocomplete.sort !== false) {
                            self.autocomplete.sort = (a, b) => b.metadata.ratio - a.metadata.ratio;
                        }
                        self.autocomplete.item = suggestion => {
                            let matched_substrings = self.autocomplete.input.value;
                            if (suggestion.metadata.matched_substrings && suggestion.metadata.matched_substrings.description) {
                                matched_substrings = suggestion.metadata.matched_substrings.description;
                            }
                            const secondary_text = suggestion.metadata.admin_0;
                            const item_id = suggestion.metadata.index;
                            return Autocomplete.ITEM(suggestion, matched_substrings, item_id, secondary_text);
                        };
                        for (let i = 0, x = list.length; i < x; i++) {
                            if (list[i].metadata.ratio >= self.breakpointRatio) {
                                fullRatioLocalities = true;
                            }
                            listLocalitiesItems.push(list[i]);
                        }
                        if (fullRatioLocalities) {
                            self.autocomplete.container.classList.remove("google");
                            self.autocomplete.container.classList.remove("woosmapaddress");
                        }
                    }
                    if (!fullRatioLocalities && self.breakpointRatio > 0) {
                        const that = self;
                        if (self.fallbackWoosmapAddress) {
                            self.woosmapaddress.getQueryPredictions(self.request.input, (listWoosmapAddressItems, queryInput) => {
                                if (queryInput !== that.autocomplete.input.value) {
                                    return;
                                }
                                that.autocomplete.filter = () => true;
                                if (listWoosmapAddressItems.length > 0) {
                                    that.autocomplete.item = suggestion => {
                                        const matched_substrings = suggestion.metadata.matched_substring.description;
                                        const item_id = suggestion.metadata.index;
                                        const secondary_Text = suggestion.label.split(",").pop();
                                        return Autocomplete.ITEM(suggestion, matched_substrings, item_id, secondary_Text);
                                    };
                                    that.autocomplete.list = listWoosmapAddressItems;
                                    if (!self.autocomplete.container.classList.contains("woosmapaddress")) {
                                        self.autocomplete.container.classList.add("woosmapaddress");
                                    }
                                } else {
                                    while (that.autocomplete.ul.firstChild) {
                                        that.autocomplete.ul.removeChild(that.autocomplete.ul.firstChild);
                                    }
                                    if (that.fallbackWoosmap) {
                                        self.autocomplete.container.classList.remove("woosmapaddress");
                                        that.autocomplete.list = listLocalitiesItems;
                                    }
                                }
                            });
                        } else {
                            self.google.getPredictions(self.request, (listGooglePlacesItems, queryInput) => {
                                if (queryInput !== that.autocomplete.input.value) {
                                    return;
                                }
                                that.autocomplete.filter = () => true;
                                if (listGooglePlacesItems.length > 0) {
                                    that.autocomplete.item = suggestion => {
                                        const matched_substrings = suggestion.metadata.matched_substrings;
                                        const secondary_text = suggestion.metadata.structured_formatting.secondary_text;
                                        const item_id = suggestion.metadata.index;
                                        return Autocomplete.ITEM(suggestion, matched_substrings, item_id, secondary_text);
                                    };
                                    that.autocomplete.list = listGooglePlacesItems;
                                    if (!self.autocomplete.container.classList.contains("google")) {
                                        self.autocomplete.container.classList.add("google");
                                    }
                                } else {
                                    while (that.autocomplete.ul.firstChild) {
                                        that.autocomplete.ul.removeChild(that.autocomplete.ul.firstChild);
                                    }
                                    if (that.fallbackWoosmap) {
                                        self.autocomplete.container.classList.remove("google");
                                        that.autocomplete.list = listLocalitiesItems;
                                    }
                                }
                            });
                        }
                    } else {
                        self.autocomplete.list = listLocalitiesItems;
                    }

                });

            } else {
                this.autocomplete.list = [];
            }
        }

        autocompleteClickEvt() {
            if (this.autocomplete.ul.childNodes.length !== 0 && this.autocomplete.ul.hasAttribute('hidden')) {
                if (this.currentSearch !== this.input.value) {
                    this.inputEvt();
                } else {
                    this.autocomplete.open();
                }
            } else {
                this.autocomplete.close();
            }
        }
    }

    function start() {
        _.$$("input.autocomplete-woosmap").forEach(input => {
            new AutocompleteWoosmapSearchBox(input);
        });
    }

    if (typeof Document !== "undefined") {
        if (document.readyState !== "loading") {
            start();
        } else {
            document.addEventListener("DOMContentLoaded", start);
        }
    }

    if (typeof self !== "undefined") {
        self.AutocompleteWoosmapSearchBox = AutocompleteWoosmapSearchBox;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = AutocompleteWoosmapSearchBox;
    }

    return AutocompleteWoosmapSearchBox;
})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

(() => {
    const _ = __webpack_require__(1);
    const defaultConfig = __webpack_require__(2).google;
    const fuzz = __webpack_require__(3);

    class GooglePlaces {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
            if (typeof google === "object" && typeof google.maps === "object" && typeof google.maps.places === "object") {
                this.autocompleteService = new google.maps.places.AutocompleteService();
                this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
            } else {
                this._loadPlacesApi();
            }
        }

        getPredictions(request, callback) {
            const me = this;
            request.componentRestrictions = this.componentRestrictions;
            if (this.useSessionTokens && ! this.sessionToken)
                this.sessionToken = new google.maps.places.AutocompleteSessionToken();
            request.sessionToken = this.sessionToken;
            this.autocompleteService.getPlacePredictions(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const list = results.map((data, index) => {
                        data.index = index + 5;
                        data.label = data.structured_formatting.main_text;
                        data.typeClass = "google " + data.types.join(" ");
                        data.dataType = "google";
                        data.searchedTerm = request.input;
                        if (typeof data.structured_formatting.secondary_text !== 'undefined') {
                            data.label += ` ${data.structured_formatting.secondary_text}`;
                        }
                        data.ratio = fuzz.partial_ratio(fuzz.full_process(request.input), data.label);
                        return {label: data.label, value: data.description, metadata: data};
                    });
                    callback(list, request.input);
                } else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(() => {
                        me.getPredictions(request);
                    }, 100);
                } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    callback([], request.input);
                } else {
                    console.error(status);
                }
            });
        }

        getDetails(place_id, callback) {
            const me = this;
            const request = {
                placeId: place_id,
                fields: this.fields,
                sessionToken: this.sessionToken
            };
            this.sessionToken = null;
            this.placesService.getDetails(request, (result, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const lat = result.geometry.location.lat();
                    const lng = result.geometry.location.lng();
                    callback(result, {lat, lng});
                } else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR || status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    window.setTimeout(() => {
                        me.getDetails(request, callback);
                    }, 100);
                } else {
                    console.error(status);
                }
            });
        }

        _loadPlacesApi(callback) {
            let params = '';
            let urlPlacesApi = 'https://maps.googleapis.com/maps/api/js?';

            if (this.language) {
                params += `&language=${this.language}`;
            }
            if (this.region) {
                params += `&region=${this.region}`;
            }
            if (this.clientId) {
                params += `&client=${this.clientId}`;
            }
            if (this.apiKey) {
                params += `&key=${this.apiKey}`;
            }
            if (this.channel) {
                params += `&channel=${this.channel}`;
            }
            if (this.librariesToLoad.length > 0) {
                params += `&libraries=${this.librariesToLoad.join(',')}`;
            }
            urlPlacesApi += params;
            const me = this;
            _.getScript(urlPlacesApi, () => {
                me.autocompleteService = new google.maps.places.AutocompleteService();
                me.placesService = new google.maps.places.PlacesService(document.createElement('div'));
                if (callback) {
                    callback();
                }
            });

        }
    }

    if (typeof self !== "undefined") {
        self.GooglePlaces = GooglePlaces;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = GooglePlaces;
    }

    return GooglePlaces;
})();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(5);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 *     Text diff library ported from Python's difflib module. 
 *     Taken from: https://github.com/qiao/difflib.js
*/

var floor = Math.floor, max = Math.max, min = Math.min;

var _calculateRatio = function (matches, length) {
    if (length) {
        return 2.0 * matches / length;
    } else {
        return 1.0;
    }
};

var _arrayCmp = function (a, b) {
    var i, la, lb, _i, _ref, _ref1;
    _ref = [a.length, b.length], la = _ref[0], lb = _ref[1];
    for (i = _i = 0, _ref1 = min(la, lb); 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
        if (a[i] < b[i]) {
            return -1;
        }
        if (a[i] > b[i]) {
            return 1;
        }
    }
    return la - lb;
};

var _has = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};

var _any = function (items) {
    var item, _i, _len;
    for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if (item) {
            return true;
        }
    }
    return false;
};

var SequenceMatcher = (function () {

    /*
      SequenceMatcher is a flexible class for comparing pairs of sequences of
      any type, so long as the sequence elements are hashable.  The basic
      algorithm predates, and is a little fancier than, an algorithm
      published in the late 1980's by Ratcliff and Obershelp under the
      hyperbolic name "gestalt pattern matching".  The basic idea is to find
      the longest contiguous matching subsequence that contains no "junk"
      elements (R-O doesn't address junk).  The same idea is then applied
      recursively to the pieces of the sequences to the left and to the right
      of the matching subsequence.  This does not yield minimal edit
      sequences, but does tend to yield matches that "look right" to people.
    
      SequenceMatcher tries to compute a "human-friendly diff" between two
      sequences.  Unlike e.g. UNIX(tm) diff, the fundamental notion is the
      longest *contiguous* & junk-free matching subsequence.  That's what
      catches peoples' eyes.  The Windows(tm) windiff has another interesting
      notion, pairing up elements that appear uniquely in each sequence.
      That, and the method here, appear to yield more intuitive difference
      reports than does diff.  This method appears to be the least vulnerable
      to synching up on blocks of "junk lines", though (like blank lines in
      ordinary text files, or maybe "<P>" lines in HTML files).  That may be
      because this is the only method of the 3 that has a *concept* of
      "junk" <wink>.
    
      Example, comparing two strings, and considering blanks to be "junk":
    
      >>> isjunk = (c) -> c is ' '
      >>> s = new SequenceMatcher(isjunk,
                                  'private Thread currentThread;',
                                  'private volatile Thread currentThread;')
    
      .ratio() returns a float in [0, 1], measuring the "similarity" of the
      sequences.  As a rule of thumb, a .ratio() value over 0.6 means the
      sequences are close matches:
    
      >>> s.ratio().toPrecision(3)
      '0.866'
    
      If you're only interested in where the sequences match,
      .getMatchingBlocks() is handy:
    
      >>> for [a, b, size] in s.getMatchingBlocks()
      ...   console.log("a[#{a}] and b[#{b}] match for #{size} elements");
      a[0] and b[0] match for 8 elements
      a[8] and b[17] match for 21 elements
      a[29] and b[38] match for 0 elements
    
      Note that the last tuple returned by .get_matching_blocks() is always a
      dummy, (len(a), len(b), 0), and this is the only case in which the last
      tuple element (number of elements matched) is 0.
    
      If you want to know how to change the first sequence into the second,
      use .get_opcodes():
    
      >>> for [op, a1, a2, b1, b2] in s.getOpcodes()
      ...   console.log "#{op} a[#{a1}:#{a2}] b[#{b1}:#{b2}]"
      equal a[0:8] b[0:8]
      insert a[8:8] b[8:17]
      equal a[8:29] b[17:38]
    
      See the Differ class for a fancy human-friendly file differencer, which
      uses SequenceMatcher both to compare sequences of lines, and to compare
      sequences of characters within similar (near-matching) lines.
    
      See also function getCloseMatches() in this module, which shows how
      simple code building on SequenceMatcher can be used to do useful work.
    
      Timing:  Basic R-O is cubic time worst case and quadratic time expected
      case.  SequenceMatcher is quadratic time for the worst case and has
      expected-case behavior dependent in a complicated way on how many
      elements the sequences have in common; best case time is linear.
    
      Methods:
    
      constructor(isjunk=null, a='', b='')
          Construct a SequenceMatcher.
    
      setSeqs(a, b)
          Set the two sequences to be compared.
    
      setSeq1(a)
          Set the first sequence to be compared.
    
      setSeq2(b)
          Set the second sequence to be compared.
    
      findLongestMatch(alo, ahi, blo, bhi)
          Find longest matching block in a[alo:ahi] and b[blo:bhi].
    
      getMatchingBlocks()
          Return list of triples describing matching subsequences.
    
      getOpcodes()
          Return list of 5-tuples describing how to turn a into b.
    
      ratio()
          Return a measure of the sequences' similarity (float in [0,1]).
    
      quickRatio()
          Return an upper bound on .ratio() relatively quickly.
    
      realQuickRatio()
          Return an upper bound on ratio() very quickly.
    */


    function SequenceMatcher(isjunk, a, b, autojunk) {
        this.isjunk = isjunk;
        if (a == null) {
            a = '';
        }
        if (b == null) {
            b = '';
        }
        this.autojunk = autojunk != null ? autojunk : true;
        /*
            Construct a SequenceMatcher.
        
            Optional arg isjunk is null (the default), or a one-argument
            function that takes a sequence element and returns true iff the
            element is junk.  Null is equivalent to passing "(x) -> 0", i.e.
            no elements are considered to be junk.  For example, pass
                (x) -> x in ' \t'
            if you're comparing lines as sequences of characters, and don't
            want to synch up on blanks or hard tabs.
        
            Optional arg a is the first of two sequences to be compared.  By
            default, an empty string.  The elements of a must be hashable.  See
            also .setSeqs() and .setSeq1().
        
            Optional arg b is the second of two sequences to be compared.  By
            default, an empty string.  The elements of b must be hashable. See
            also .setSeqs() and .setSeq2().
        
            Optional arg autojunk should be set to false to disable the
            "automatic junk heuristic" that treats popular elements as junk
            (see module documentation for more information).
        */

        this.a = this.b = null;
        this.setSeqs(a, b);
    }

    SequenceMatcher.prototype.setSeqs = function (a, b) {
        /* 
        Set the two sequences to be compared. 
        
        >>> s = new SequenceMatcher()
        >>> s.setSeqs('abcd', 'bcde')
        >>> s.ratio()
        0.75
        */
        this.setSeq1(a);
        return this.setSeq2(b);
    };

    SequenceMatcher.prototype.setSeq1 = function (a) {
        /* 
        Set the first sequence to be compared. 
        
        The second sequence to be compared is not changed.
        
        >>> s = new SequenceMatcher(null, 'abcd', 'bcde')
        >>> s.ratio()
        0.75
        >>> s.setSeq1('bcde')
        >>> s.ratio()
        1.0
        
        SequenceMatcher computes and caches detailed information about the
        second sequence, so if you want to compare one sequence S against
        many sequences, use .setSeq2(S) once and call .setSeq1(x)
        repeatedly for each of the other sequences.
        
        See also setSeqs() and setSeq2().
        */
        if (a === this.a) {
            return;
        }
        this.a = a;
        return this.matchingBlocks = this.opcodes = null;
    };

    SequenceMatcher.prototype.setSeq2 = function (b) {
        /*
            Set the second sequence to be compared. 
        
            The first sequence to be compared is not changed.
        
            >>> s = new SequenceMatcher(null, 'abcd', 'bcde')
            >>> s.ratio()
            0.75
            >>> s.setSeq2('abcd')
            >>> s.ratio()
            1.0
        
            SequenceMatcher computes and caches detailed information about the
            second sequence, so if you want to compare one sequence S against
            many sequences, use .setSeq2(S) once and call .setSeq1(x)
            repeatedly for each of the other sequences.
        
            See also setSeqs() and setSeq1().
        */
        if (b === this.b) {
            return;
        }
        this.b = b;
        this.matchingBlocks = this.opcodes = null;
        this.fullbcount = null;
        return this._chainB();
    };

    SequenceMatcher.prototype._chainB = function () {
        var b, b2j, elt, i, idxs, indices, isjunk, junk, n, ntest, popular, _i, _j, _len, _len1, _ref;
        b = this.b;
        this.b2j = b2j = {};
        for (i = _i = 0, _len = b.length; _i < _len; i = ++_i) {
            elt = b[i];
            indices = _has(b2j, elt) ? b2j[elt] : b2j[elt] = [];
            indices.push(i);
        }
        junk = {};
        isjunk = this.isjunk;
        if (isjunk) {
            _ref = Object.keys(b2j);
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                elt = _ref[_j];
                if (isjunk(elt)) {
                    junk[elt] = true;
                    delete b2j[elt];
                }
            }
        }
        popular = {};
        n = b.length;
        if (this.autojunk && n >= 200) {
            ntest = floor(n / 100) + 1;
            for (elt in b2j) {
                idxs = b2j[elt];
                if (idxs.length > ntest) {
                    popular[elt] = true;
                    delete b2j[elt];
                }
            }
        }
        this.isbjunk = function (b) {
            return _has(junk, b);
        };
        return this.isbpopular = function (b) {
            return _has(popular, b);
        };
    };

    SequenceMatcher.prototype.findLongestMatch = function (alo, ahi, blo, bhi) {
        /* 
        Find longest matching block in a[alo...ahi] and b[blo...bhi].  
        
        If isjunk is not defined:
        
        Return [i,j,k] such that a[i...i+k] is equal to b[j...j+k], where
            alo <= i <= i+k <= ahi
            blo <= j <= j+k <= bhi
        and for all [i',j',k'] meeting those conditions,
            k >= k'
            i <= i'
            and if i == i', j <= j'
        
        In other words, of all maximal matching blocks, return one that
        starts earliest in a, and of all those maximal matching blocks that
        start earliest in a, return the one that starts earliest in b.
        
        >>> isjunk = (x) -> x is ' '
        >>> s = new SequenceMatcher(isjunk, ' abcd', 'abcd abcd')
        >>> s.findLongestMatch(0, 5, 0, 9)
        [1, 0, 4]
        
        >>> s = new SequenceMatcher(null, 'ab', 'c')
        >>> s.findLongestMatch(0, 2, 0, 1)
        [0, 0, 0]
        */

        var a, b, b2j, besti, bestj, bestsize, i, isbjunk, j, j2len, k, newj2len, _i, _j, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
        _ref = [this.a, this.b, this.b2j, this.isbjunk], a = _ref[0], b = _ref[1], b2j = _ref[2], isbjunk = _ref[3];
        _ref1 = [alo, blo, 0], besti = _ref1[0], bestj = _ref1[1], bestsize = _ref1[2];
        j2len = {};
        for (i = _i = alo; alo <= ahi ? _i < ahi : _i > ahi; i = alo <= ahi ? ++_i : --_i) {
            newj2len = {};
            _ref2 = (_has(b2j, a[i]) ? b2j[a[i]] : []);
            for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
                j = _ref2[_j];
                if (j < blo) {
                    continue;
                }
                if (j >= bhi) {
                    break;
                }
                k = newj2len[j] = (j2len[j - 1] || 0) + 1;
                if (k > bestsize) {
                    _ref3 = [i - k + 1, j - k + 1, k], besti = _ref3[0], bestj = _ref3[1], bestsize = _ref3[2];
                }
            }
            j2len = newj2len;
        }
        while (besti > alo && bestj > blo && !isbjunk(b[bestj - 1]) && a[besti - 1] === b[bestj - 1]) {
            _ref4 = [besti - 1, bestj - 1, bestsize + 1], besti = _ref4[0], bestj = _ref4[1], bestsize = _ref4[2];
        }
        while (besti + bestsize < ahi && bestj + bestsize < bhi && !isbjunk(b[bestj + bestsize]) && a[besti + bestsize] === b[bestj + bestsize]) {
            bestsize++;
        }
        while (besti > alo && bestj > blo && isbjunk(b[bestj - 1]) && a[besti - 1] === b[bestj - 1]) {
            _ref5 = [besti - 1, bestj - 1, bestsize + 1], besti = _ref5[0], bestj = _ref5[1], bestsize = _ref5[2];
        }
        while (besti + bestsize < ahi && bestj + bestsize < bhi && isbjunk(b[bestj + bestsize]) && a[besti + bestsize] === b[bestj + bestsize]) {
            bestsize++;
        }
        return [besti, bestj, bestsize];
    };

    SequenceMatcher.prototype.getMatchingBlocks = function () {
        /*
            Return list of triples describing matching subsequences.
        
            Each triple is of the form [i, j, n], and means that
            a[i...i+n] == b[j...j+n].  The triples are monotonically increasing in
            i and in j.  it's also guaranteed that if
            [i, j, n] and [i', j', n'] are adjacent triples in the list, and
            the second is not the last triple in the list, then i+n != i' or
            j+n != j'.  IOW, adjacent triples never describe adjacent equal
            blocks.
        
            The last triple is a dummy, [a.length, b.length, 0], and is the only
            triple with n==0.
        
            >>> s = new SequenceMatcher(null, 'abxcd', 'abcd')
            >>> s.getMatchingBlocks()
            [[0, 0, 2], [3, 2, 2], [5, 4, 0]]
        */

        var ahi, alo, bhi, blo, i, i1, i2, j, j1, j2, k, k1, k2, la, lb, matchingBlocks, nonAdjacent, queue, x, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4;
        if (this.matchingBlocks) {
            return this.matchingBlocks;
        }
        _ref = [this.a.length, this.b.length], la = _ref[0], lb = _ref[1];
        queue = [[0, la, 0, lb]];
        matchingBlocks = [];
        while (queue.length) {
            _ref1 = queue.pop(), alo = _ref1[0], ahi = _ref1[1], blo = _ref1[2], bhi = _ref1[3];
            _ref2 = x = this.findLongestMatch(alo, ahi, blo, bhi), i = _ref2[0], j = _ref2[1], k = _ref2[2];
            if (k) {
                matchingBlocks.push(x);
                if (alo < i && blo < j) {
                    queue.push([alo, i, blo, j]);
                }
                if (i + k < ahi && j + k < bhi) {
                    queue.push([i + k, ahi, j + k, bhi]);
                }
            }
        }
        matchingBlocks.sort(_arrayCmp);
        i1 = j1 = k1 = 0;
        nonAdjacent = [];
        for (_i = 0, _len = matchingBlocks.length; _i < _len; _i++) {
            _ref3 = matchingBlocks[_i], i2 = _ref3[0], j2 = _ref3[1], k2 = _ref3[2];
            if (i1 + k1 === i2 && j1 + k1 === j2) {
                k1 += k2;
            } else {
                if (k1) {
                    nonAdjacent.push([i1, j1, k1]);
                }
                _ref4 = [i2, j2, k2], i1 = _ref4[0], j1 = _ref4[1], k1 = _ref4[2];
            }
        }
        if (k1) {
            nonAdjacent.push([i1, j1, k1]);
        }
        nonAdjacent.push([la, lb, 0]);
        return this.matchingBlocks = nonAdjacent;
    };

    SequenceMatcher.prototype.getOpcodes = function () {
        /* 
        Return list of 5-tuples describing how to turn a into b.
        
        Each tuple is of the form [tag, i1, i2, j1, j2].  The first tuple
        has i1 == j1 == 0, and remaining tuples have i1 == the i2 from the
        tuple preceding it, and likewise for j1 == the previous j2.
        
        The tags are strings, with these meanings:
        
        'replace':  a[i1...i2] should be replaced by b[j1...j2]
        'delete':   a[i1...i2] should be deleted.
                    Note that j1==j2 in this case.
        'insert':   b[j1...j2] should be inserted at a[i1...i1].
                    Note that i1==i2 in this case.
        'equal':    a[i1...i2] == b[j1...j2]
        
        >>> s = new SequenceMatcher(null, 'qabxcd', 'abycdf')
        >>> s.getOpcodes()
        [ [ 'delete'  , 0 , 1 , 0 , 0 ] ,
          [ 'equal'   , 1 , 3 , 0 , 2 ] ,
          [ 'replace' , 3 , 4 , 2 , 3 ] ,
          [ 'equal'   , 4 , 6 , 3 , 5 ] ,
          [ 'insert'  , 6 , 6 , 5 , 6 ] ]
        */

        var ai, answer, bj, i, j, size, tag, _i, _len, _ref, _ref1, _ref2;
        if (this.opcodes) {
            return this.opcodes;
        }
        i = j = 0;
        this.opcodes = answer = [];
        _ref = this.getMatchingBlocks();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            _ref1 = _ref[_i], ai = _ref1[0], bj = _ref1[1], size = _ref1[2];
            tag = '';
            if (i < ai && j < bj) {
                tag = 'replace';
            } else if (i < ai) {
                tag = 'delete';
            } else if (j < bj) {
                tag = 'insert';
            }
            if (tag) {
                answer.push([tag, i, ai, j, bj]);
            }
            _ref2 = [ai + size, bj + size], i = _ref2[0], j = _ref2[1];
            if (size) {
                answer.push(['equal', ai, i, bj, j]);
            }
        }
        return answer;
    };

    SequenceMatcher.prototype.getGroupedOpcodes = function (n) {
        var codes, group, groups, i1, i2, j1, j2, nn, tag, _i, _len, _ref, _ref1, _ref2, _ref3;
        if (n == null) {
            n = 3;
        }
        /* 
        Isolate change clusters by eliminating ranges with no changes.
        
        Return a list groups with upto n lines of context.
        Each group is in the same format as returned by get_opcodes().
        
        >>> a = [1...40].map(String)
        >>> b = a.slice()
        >>> b[8...8] = 'i'
        >>> b[20] += 'x'
        >>> b[23...28] = []
        >>> b[30] += 'y'
        >>> s = new SequenceMatcher(null, a, b)
        >>> s.getGroupedOpcodes()
        [ [ [ 'equal'  , 5 , 8  , 5 , 8 ],
            [ 'insert' , 8 , 8  , 8 , 9 ],
            [ 'equal'  , 8 , 11 , 9 , 12 ] ],
          [ [ 'equal'   , 16 , 19 , 17 , 20 ],
            [ 'replace' , 19 , 20 , 20 , 21 ],
            [ 'equal'   , 20 , 22 , 21 , 23 ],
            [ 'delete'  , 22 , 27 , 23 , 23 ],
            [ 'equal'   , 27 , 30 , 23 , 26 ] ],
          [ [ 'equal'   , 31 , 34 , 27 , 30 ],
            [ 'replace' , 34 , 35 , 30 , 31 ],
            [ 'equal'   , 35 , 38 , 31 , 34 ] ] ]
        */

        codes = this.getOpcodes();
        if (!codes.length) {
            codes = [['equal', 0, 1, 0, 1]];
        }
        if (codes[0][0] === 'equal') {
            _ref = codes[0], tag = _ref[0], i1 = _ref[1], i2 = _ref[2], j1 = _ref[3], j2 = _ref[4];
            codes[0] = [tag, max(i1, i2 - n), i2, max(j1, j2 - n), j2];
        }
        if (codes[codes.length - 1][0] === 'equal') {
            _ref1 = codes[codes.length - 1], tag = _ref1[0], i1 = _ref1[1], i2 = _ref1[2], j1 = _ref1[3], j2 = _ref1[4];
            codes[codes.length - 1] = [tag, i1, min(i2, i1 + n), j1, min(j2, j1 + n)];
        }
        nn = n + n;
        groups = [];
        group = [];
        for (_i = 0, _len = codes.length; _i < _len; _i++) {
            _ref2 = codes[_i], tag = _ref2[0], i1 = _ref2[1], i2 = _ref2[2], j1 = _ref2[3], j2 = _ref2[4];
            if (tag === 'equal' && i2 - i1 > nn) {
                group.push([tag, i1, min(i2, i1 + n), j1, min(j2, j1 + n)]);
                groups.push(group);
                group = [];
                _ref3 = [max(i1, i2 - n), max(j1, j2 - n)], i1 = _ref3[0], j1 = _ref3[1];
            }
            group.push([tag, i1, i2, j1, j2]);
        }
        if (group.length && !(group.length === 1 && group[0][0] === 'equal')) {
            groups.push(group);
        }
        return groups;
    };

    SequenceMatcher.prototype.ratio = function () {
        /*
            Return a measure of the sequences' similarity (float in [0,1]).
        
            Where T is the total number of elements in both sequences, and
            M is the number of matches, this is 2.0*M / T.
            Note that this is 1 if the sequences are identical, and 0 if
            they have nothing in common.
        
            .ratio() is expensive to compute if you haven't already computed
            .getMatchingBlocks() or .getOpcodes(), in which case you may
            want to try .quickRatio() or .realQuickRatio() first to get an
            upper bound.
            
            >>> s = new SequenceMatcher(null, 'abcd', 'bcde')
            >>> s.ratio()
            0.75
            >>> s.quickRatio()
            0.75
            >>> s.realQuickRatio()
            1.0
        */

        var match, matches, _i, _len, _ref;
        matches = 0;
        _ref = this.getMatchingBlocks();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            match = _ref[_i];
            matches += match[2];
        }
        return _calculateRatio(matches, this.a.length + this.b.length);
    };

    SequenceMatcher.prototype.quickRatio = function () {
        /*
            Return an upper bound on ratio() relatively quickly.
        
            This isn't defined beyond that it is an upper bound on .ratio(), and
            is faster to compute.
        */

        var avail, elt, fullbcount, matches, numb, _i, _j, _len, _len1, _ref, _ref1;
        if (!this.fullbcount) {
            this.fullbcount = fullbcount = {};
            _ref = this.b;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elt = _ref[_i];
                fullbcount[elt] = (fullbcount[elt] || 0) + 1;
            }
        }
        fullbcount = this.fullbcount;
        avail = {};
        matches = 0;
        _ref1 = this.a;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            elt = _ref1[_j];
            if (_has(avail, elt)) {
                numb = avail[elt];
            } else {
                numb = fullbcount[elt] || 0;
            }
            avail[elt] = numb - 1;
            if (numb > 0) {
                matches++;
            }
        }
        return _calculateRatio(matches, this.a.length + this.b.length);
    };

    SequenceMatcher.prototype.realQuickRatio = function () {
        /*
            Return an upper bound on ratio() very quickly.
        
            This isn't defined beyond that it is an upper bound on .ratio(), and
            is faster to compute than either .ratio() or .quickRatio().
        */

        var la, lb, _ref;
        _ref = [this.a.length, this.b.length], la = _ref[0], lb = _ref[1];
        return _calculateRatio(min(la, lb), la + lb);
    };

    return SequenceMatcher;

})();

module.exports = SequenceMatcher;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  (function(root, factory) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
      return module.exports = factory();
    } else {
      return root.Heap = factory();
    }
  })(this, function() {
    return Heap;
  });

}).call(this);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// @ts-check
// levenshtein distance with astral support

// @ts-ignore
__webpack_require__(18);
// @ts-ignore
__webpack_require__(19);
/** from https://github.com/hiddentao/fast-levenshtein slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */

var collator;
try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
} catch (err) {
    if (typeof console !== undefined) console.warn("Collator could not be initialized and wouldn't be used");
}

module.exports = function leven(a, b, options, _toArray) {



    /** from https://github.com/sindresorhus/leven slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */
    var arr = [];
    var charCodeCache = [];
    var useCollator = (options && collator && options.useCollator);
    var subcost = 1;
    //to match behavior of python-Levenshtein and fuzzywuzzy, set to 2 in _ratio
    if (options && options.subcost && typeof options.subcost === "number") subcost = options.subcost;

    if (a === b) {
        return 0;
    }
    var achars = _toArray(a);
    var bchars = _toArray(b);
    var aLen = achars.length;
    var bLen = bchars.length;

    if (aLen === 0) {
        return bLen;
    }

    if (bLen === 0) {
        return aLen;
    }

    var bCharCode;
    var ret;
    var tmp;
    var tmp2;
    var i = 0;
    var j = 0;

    while (i < aLen) {
        charCodeCache[i] = achars[i].codePointAt(0);
        arr[i] = ++i;
    }
    if (!useCollator) {  //checking for collator inside while 2x slower
        while (j < bLen) {
            bCharCode = bchars[j].codePointAt(0);
            tmp = j++;
            ret = j;
            for (i = 0; i < aLen; i++) {
                tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + subcost;
                tmp = arr[i];
                ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
            }
        }
    }
    else {
        while (j < bLen) {
            bCharCode = bchars[j].codePointAt(0);
            tmp = j++;
            ret = j;

            for (i = 0; i < aLen; i++) {
                tmp2 = 0 === collator.compare(String.fromCodePoint(bCharCode), String.fromCodePoint(charCodeCache[i])) ? tmp : tmp + subcost;
                tmp = arr[i];
                ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
            }
        }
    }
    return ret;
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var codePointAt = function(position) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			var size = string.length;
			// `ToInteger`
			var index = position ? Number(position) : 0;
			if (index != index) { // better `isNaN`
				index = 0;
			}
			// Account for out-of-bounds indices:
			if (index < 0 || index >= size) {
				return undefined;
			}
			// Get the first code unit
			var first = string.charCodeAt(index);
			var second;
			if ( // check if it’s the start of a surrogate pair
				first >= 0xD800 && first <= 0xDBFF && // high surrogate
				size > index + 1 // there is a next code unit
			) {
				second = string.charCodeAt(index + 1);
				if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
				}
			}
			return first;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'codePointAt', {
				'value': codePointAt,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.codePointAt = codePointAt;
		}
	}());
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
	(function() {
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var stringFromCharCode = String.fromCharCode;
		var floor = Math.floor;
		var fromCodePoint = function(_) {
			var MAX_SIZE = 0x4000;
			var codeUnits = [];
			var highSurrogate;
			var lowSurrogate;
			var index = -1;
			var length = arguments.length;
			if (!length) {
				return '';
			}
			var result = '';
			while (++index < length) {
				var codePoint = Number(arguments[index]);
				if (
					!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
					codePoint < 0 || // not a valid Unicode code point
					codePoint > 0x10FFFF || // not a valid Unicode code point
					floor(codePoint) != codePoint // not an integer
				) {
					throw RangeError('Invalid code point: ' + codePoint);
				}
				if (codePoint <= 0xFFFF) { // BMP code point
					codeUnits.push(codePoint);
				} else { // Astral code point; split in surrogate halves
					// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					codePoint -= 0x10000;
					highSurrogate = (codePoint >> 10) + 0xD800;
					lowSurrogate = (codePoint % 0x400) + 0xDC00;
					codeUnits.push(highSurrogate, lowSurrogate);
				}
				if (index + 1 == length || codeUnits.length > MAX_SIZE) {
					result += stringFromCharCode.apply(null, codeUnits);
					codeUnits.length = 0;
				}
			}
			return result;
		};
		if (defineProperty) {
			defineProperty(String, 'fromCodePoint', {
				'value': fromCodePoint,
				'configurable': true,
				'writable': true
			});
		} else {
			String.fromCodePoint = fromCodePoint;
		}
	}());
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (_uniq, _uniqWith, _partialRight) {
    var module = {};

    var xre = __webpack_require__(21);
    var wildLeven = __webpack_require__(7);
    var leven = __webpack_require__(8);

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // from MDN
    }

     function validate(str) {
        if ((typeof str === "string" || str instanceof String) && str.length > 0) return true;
        else return false;
    }

    module.validate = validate;

    module.process_and_sort = function process_and_sort(str) {
        if (!validate(str)) return "";
        return str.match(/\S+/g).sort().join(" ").trim();
    }

    module.tokenize = function unique_tokens(str, options) {
        if (options && options.wildcards  && _uniqWith && _partialRight) {
            var partWild = _partialRight(wildLeven, options, leven);
            var wildCompare = function (a, b) { return partWild(a, b) === 0; }
            return _uniqWith(str.match(/\S+/g), wildCompare);
        } 
        else return _uniq(str.match(/\S+/g));
    }

    var alphaNumUnicode = xre('[^\\pN|\\pL]', 'g');
    module.full_process = function full_process(str, options) {
        if (!(str instanceof String) && typeof str !== "string") return "";
        var processedtext;

        if (options && typeof options === "object" && options.wildcards && typeof options.wildcards === "string" && options.wildcards.length > 0) {
            var wildcards = options.wildcards.toLowerCase();
            str = str.toLowerCase();
            if (options.force_ascii) {
                // replace non-ascii non-wildcards
                var pattern = '[^\x00 -\x7F|' + escapeRegExp(wildcards) + ']';
                str = str.replace(new RegExp(pattern, "g"), "");
                
                // replace wildcards with wildchar
                var wildpattern = '[' + escapeRegExp(wildcards) + ']';
                var wildchar = wildcards[0];
                str = str.replace(new RegExp(wildpattern, "g"), wildchar);

                // replace non alpha-num non-wildcards with space
                var alphanumPat = '[^A-Za-z0-9' + escapeRegExp(wildcards) + ']';
                str = str.replace(new RegExp(alphanumPat, "g"), " ");
                str = str.replace(/_/g, ' ');

                // wildcards are case insensitive as of now
                // would need to make sure lower version of wildcards didnt get turned into wildcards
                processedtext = str.trim();
            }
            else {
                // replace non-alphanum non-wildcards
                var upattern = '[^\\pN|\\pL|' + escapeRegExp(wildcards) + ']';
                var alphaNumUnicodeWild = xre(upattern, 'g');
                str = xre.replace(str, alphaNumUnicodeWild, ' ', 'all');

                // replace wildcards with wildchar
                var wildpattern = '[' + escapeRegExp(wildcards) + ']';
                var wildchar = wildcards[0];
                str = str.replace(new RegExp(wildpattern, "g"), wildchar);

                // wildcards are case insensitive as of now
                // would need to make sure lower version of wildcards didnt get turned into wildcards
                processedtext = str.trim();
            }
        }
        else {
            // Non-ascii won't turn into whitespace if not force_ascii
            if (options && (options.force_ascii || options === true)) { //support old behavior just passing true
                str = str.replace(/[^\x00-\x7F]/g, "");
                processedtext = str.replace(/\W|_/g, ' ').toLowerCase().trim();
            }
            processedtext = xre.replace(str, alphaNumUnicode, ' ', 'all').toLowerCase().trim();
        }
        if (options && options.collapseWhitespace) {
            processedtext = processedtext.replace(/\s+/g, ' ');
        }
        return processedtext;
    }

    // clone/shallow copy whatev
    module.clone_and_set_option_defaults = function(options) {
        // don't run more than once if usign extract functions
        if (options && options.isAClone) return options;
        var optclone = { isAClone: true };
        if (options) {
            var i, keys = Object.keys(options);
            for (i = 0; i < keys.length; i++) {
                optclone[keys[i]] = options[keys[i]];
            }
        }
        if (!(typeof optclone.full_process !== 'undefined' && optclone.full_process === false)) optclone.full_process = true;
        if (!(typeof optclone.force_ascii !== 'undefined' && optclone.force_ascii === true)) optclone.force_ascii = false;
        // normalize option not used unless astral is true, so true + no astral = no normalize
        if (!(typeof optclone.normalize !== 'undefined' && optclone.normalize === false)) optclone.normalize = true;
        if (typeof optclone.astral !== 'undefined' && optclone.astral === true) optclone.full_process = false;
        if (!(typeof optclone.collapseWhitespace !== 'undefined' && optclone.collapseWhitespace === false)) optclone.collapseWhitespace = true;
        return optclone;
    }

    module.isCustomFunc = function(func) {
        if (typeof func === "function" && (
            func.name === "token_set_ratio" ||
            func.name === "partial_token_set_ratio" ||
            func.name === "token_sort_ratio" ||
            func.name === "partial_token_sort_ratio" ||
            func.name === "QRatio" ||
            func.name === "WRatio" ||
            func.name === "distance" ||
            func.name === "partial_ratio"
        )) {
            return false;
        }
        else {
            return true;
        }
    }

    return module;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var XRegExp = __webpack_require__(22);

__webpack_require__(23)(XRegExp);
__webpack_require__(24)(XRegExp);

module.exports = XRegExp;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * XRegExp 3.1.1-next
 * <xregexp.com>
 * Steven Levithan (c) 2007-2016 MIT License
 */



/**
 * XRegExp provides augmented, extensible regular expressions. You get additional regex syntax and
 * flags, beyond what browsers support natively. XRegExp is also a regex utility belt with tools to
 * make your client-side grepping simpler and more powerful, while freeing you from related
 * cross-browser inconsistencies.
 */

// ==--------------------------==
// Private stuff
// ==--------------------------==

// Property name used for extended regex instance data
var REGEX_DATA = 'xregexp';
// Optional features that can be installed and uninstalled
var features = {
    astral: false,
    natives: false
};
// Native methods to use and restore ('native' is an ES3 reserved keyword)
var nativ = {
    exec: RegExp.prototype.exec,
    test: RegExp.prototype.test,
    match: String.prototype.match,
    replace: String.prototype.replace,
    split: String.prototype.split
};
// Storage for fixed/extended native methods
var fixed = {};
// Storage for regexes cached by `XRegExp.cache`
var regexCache = {};
// Storage for pattern details cached by the `XRegExp` constructor
var patternCache = {};
// Storage for regex syntax tokens added internally or by `XRegExp.addToken`
var tokens = [];
// Token scopes
var defaultScope = 'default';
var classScope = 'class';
// Regexes that match native regex syntax, including octals
var nativeTokens = {
    // Any native multicharacter token in default scope, or any single character
    'default': /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
    // Any native multicharacter token in character class scope, or any single character
    'class': /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
};
// Any backreference or dollar-prefixed character in replacement strings
var replacementToken = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
// Check for correct `exec` handling of nonparticipating capturing groups
var correctExecNpcg = nativ.exec.call(/()??/, '')[1] === undefined;
// Check for ES6 `flags` prop support
var hasFlagsProp = /x/.flags !== undefined;
// Shortcut to `Object.prototype.toString`
var toString = {}.toString;

function hasNativeFlag(flag) {
    // Can't check based on the presence of properties/getters since browsers might support such
    // properties even when they don't support the corresponding flag in regex construction (tested
    // in Chrome 48, where `'unicode' in /x/` is true but trying to construct a regex with flag `u`
    // throws an error)
    var isSupported = true;
    try {
        // Can't use regex literals for testing even in a `try` because regex literals with
        // unsupported flags cause a compilation error in IE
        new RegExp('', flag);
    } catch (exception) {
        isSupported = false;
    }
    if (isSupported && flag === 'y') {
        // Work around Safari 9.1.1 bug
        return new RegExp('aa|.', 'y').test('b');
    }
    return isSupported;
}
// Check for ES6 `u` flag support
var hasNativeU = hasNativeFlag('u');
// Check for ES6 `y` flag support
var hasNativeY = hasNativeFlag('y');
// Tracker for known flags, including addon flags
var registeredFlags = {
    g: true,
    i: true,
    m: true,
    u: hasNativeU,
    y: hasNativeY
};

/**
 * Attaches extended data and `XRegExp.prototype` properties to a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to augment.
 * @param {Array} captureNames Array with capture names, or `null`.
 * @param {String} xSource XRegExp pattern used to generate `regex`, or `null` if N/A.
 * @param {String} xFlags XRegExp flags used to generate `regex`, or `null` if N/A.
 * @param {Boolean} [isInternalOnly=false] Whether the regex will be used only for internal
 *   operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *   skipping some operations like attaching `XRegExp.prototype` properties.
 * @returns {RegExp} Augmented regex.
 */
function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
    var p;

    regex[REGEX_DATA] = {
        captureNames: captureNames
    };

    if (isInternalOnly) {
        return regex;
    }

    // Can't auto-inherit these since the XRegExp constructor returns a nonprimitive value
    if (regex.__proto__) {
        regex.__proto__ = XRegExp.prototype;
    } else {
        for (p in XRegExp.prototype) {
            // An `XRegExp.prototype.hasOwnProperty(p)` check wouldn't be worth it here, since this
            // is performance sensitive, and enumerable `Object.prototype` or `RegExp.prototype`
            // extensions exist on `regex.prototype` anyway
            regex[p] = XRegExp.prototype[p];
        }
    }

    regex[REGEX_DATA].source = xSource;
    // Emulate the ES6 `flags` prop by ensuring flags are in alphabetical order
    regex[REGEX_DATA].flags = xFlags ? xFlags.split('').sort().join('') : xFlags;

    return regex;
}

/**
 * Removes any duplicate characters from the provided string.
 *
 * @private
 * @param {String} str String to remove duplicate characters from.
 * @returns {String} String with any duplicate characters removed.
 */
function clipDuplicates(str) {
    return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, '');
}

/**
 * Copies a regex object while preserving extended data and augmenting with `XRegExp.prototype`
 * properties. The copy has a fresh `lastIndex` property (set to zero). Allows adding and removing
 * flags g and y while copying the regex.
 *
 * @private
 * @param {RegExp} regex Regex to copy.
 * @param {Object} [options] Options object with optional properties:
 *   <li>`addG` {Boolean} Add flag g while copying the regex.
 *   <li>`addY` {Boolean} Add flag y while copying the regex.
 *   <li>`removeG` {Boolean} Remove flag g while copying the regex.
 *   <li>`removeY` {Boolean} Remove flag y while copying the regex.
 *   <li>`isInternalOnly` {Boolean} Whether the copied regex will be used only for internal
 *     operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *     skipping some operations like attaching `XRegExp.prototype` properties.
 *   <li>`source` {String} Overrides `<regex>.source`, for special cases.
 * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
 */
function copyRegex(regex, options) {
    if (!XRegExp.isRegExp(regex)) {
        throw new TypeError('Type RegExp expected');
    }

    var xData = regex[REGEX_DATA] || {},
        flags = getNativeFlags(regex),
        flagsToAdd = '',
        flagsToRemove = '',
        xregexpSource = null,
        xregexpFlags = null;

    options = options || {};

    if (options.removeG) {flagsToRemove += 'g';}
    if (options.removeY) {flagsToRemove += 'y';}
    if (flagsToRemove) {
        flags = nativ.replace.call(flags, new RegExp('[' + flagsToRemove + ']+', 'g'), '');
    }

    if (options.addG) {flagsToAdd += 'g';}
    if (options.addY) {flagsToAdd += 'y';}
    if (flagsToAdd) {
        flags = clipDuplicates(flags + flagsToAdd);
    }

    if (!options.isInternalOnly) {
        if (xData.source !== undefined) {
            xregexpSource = xData.source;
        }
        // null or undefined; don't want to add to `flags` if the previous value was null, since
        // that indicates we're not tracking original precompilation flags
        if (xData.flags != null) {
            // Flags are only added for non-internal regexes by `XRegExp.globalize`. Flags are never
            // removed for non-internal regexes, so don't need to handle it
            xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags;
        }
    }

    // Augment with `XRegExp.prototype` properties, but use the native `RegExp` constructor to avoid
    // searching for special tokens. That would be wrong for regexes constructed by `RegExp`, and
    // unnecessary for regexes constructed by `XRegExp` because the regex has already undergone the
    // translation to native regex syntax
    regex = augment(
        new RegExp(options.source || regex.source, flags),
        hasNamedCapture(regex) ? xData.captureNames.slice(0) : null,
        xregexpSource,
        xregexpFlags,
        options.isInternalOnly
    );

    return regex;
}

/**
 * Converts hexadecimal to decimal.
 *
 * @private
 * @param {String} hex
 * @returns {Number}
 */
function dec(hex) {
    return parseInt(hex, 16);
}

/**
 * Returns native `RegExp` flags used by a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {String} Native flags in use.
 */
function getNativeFlags(regex) {
    return hasFlagsProp ?
        regex.flags :
        // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
        // with an empty string) allows this to continue working predictably when
        // `XRegExp.proptotype.toString` is overridden
        nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1];
}

/**
 * Determines whether a regex has extended instance data used to track capture names.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {Boolean} Whether the regex uses named capture.
 */
function hasNamedCapture(regex) {
    return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
}

/**
 * Converts decimal to hexadecimal.
 *
 * @private
 * @param {Number|String} dec
 * @returns {String}
 */
function hex(dec) {
    return parseInt(dec, 10).toString(16);
}

/**
 * Returns the first index at which a given value can be found in an array.
 *
 * @private
 * @param {Array} array Array to search.
 * @param {*} value Value to locate in the array.
 * @returns {Number} Zero-based index at which the item is found, or -1.
 */
function indexOf(array, value) {
    var len = array.length, i;

    for (i = 0; i < len; ++i) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}

/**
 * Determines whether a value is of the specified type, by resolving its internal [[Class]].
 *
 * @private
 * @param {*} value Object to check.
 * @param {String} type Type to check for, in TitleCase.
 * @returns {Boolean} Whether the object matches the type.
 */
function isType(value, type) {
    return toString.call(value) === '[object ' + type + ']';
}

/**
 * Checks whether the next nonignorable token after the specified position is a quantifier.
 *
 * @private
 * @param {String} pattern Pattern to search within.
 * @param {Number} pos Index in `pattern` to search at.
 * @param {String} flags Flags used by the pattern.
 * @returns {Boolean} Whether the next token is a quantifier.
 */
function isQuantifierNext(pattern, pos, flags) {
    return nativ.test.call(
        flags.indexOf('x') > -1 ?
            // Ignore any leading whitespace, line comments, and inline comments
            /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ :
            // Ignore any leading inline comments
            /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
        pattern.slice(pos)
    );
}

/**
 * Adds leading zeros if shorter than four characters. Used for fixed-length hexadecimal values.
 *
 * @private
 * @param {String} str
 * @returns {String}
 */
function pad4(str) {
    while (str.length < 4) {
        str = '0' + str;
    }
    return str;
}

/**
 * Checks for flag-related errors, and strips/applies flags in a leading mode modifier. Offloads
 * the flag preparation logic from the `XRegExp` constructor.
 *
 * @private
 * @param {String} pattern Regex pattern, possibly with a leading mode modifier.
 * @param {String} flags Any combination of flags.
 * @returns {Object} Object with properties `pattern` and `flags`.
 */
function prepareFlags(pattern, flags) {
    var i;

    // Recent browsers throw on duplicate flags, so copy this behavior for nonnative flags
    if (clipDuplicates(flags) !== flags) {
        throw new SyntaxError('Invalid duplicate regex flag ' + flags);
    }

    // Strip and apply a leading mode modifier with any combination of flags except g or y
    pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function($0, $1) {
        if (nativ.test.call(/[gy]/, $1)) {
            throw new SyntaxError('Cannot use flag g or y in mode modifier ' + $0);
        }
        // Allow duplicate flags within the mode modifier
        flags = clipDuplicates(flags + $1);
        return '';
    });

    // Throw on unknown native or nonnative flags
    for (i = 0; i < flags.length; ++i) {
        if (!registeredFlags[flags.charAt(i)]) {
            throw new SyntaxError('Unknown regex flag ' + flags.charAt(i));
        }
    }

    return {
        pattern: pattern,
        flags: flags
    };
}

/**
 * Prepares an options object from the given value.
 *
 * @private
 * @param {String|Object} value Value to convert to an options object.
 * @returns {Object} Options object.
 *//*
function prepareOptions(value) {
    var options = {};

    if (isType(value, 'String')) {
        XRegExp.forEach(value, /[^\s,]+/, function(match) {
            options[match] = true;
        });

        return options;
    }

    return value;
}
*/
/**
 * Registers a flag so it doesn't throw an 'unknown flag' error.
 *
 * @private
 * @param {String} flag Single-character flag to register.
 */
function registerFlag(flag) {
    if (!/^[\w$]$/.test(flag)) {
        throw new Error('Flag must be a single character A-Za-z0-9_$');
    }

    registeredFlags[flag] = true;
}

/**
 * Runs built-in and custom regex syntax tokens in reverse insertion order at the specified
 * position, until a match is found.
 *
 * @private
 * @param {String} pattern Original pattern from which an XRegExp object is being built.
 * @param {String} flags Flags being used to construct the regex.
 * @param {Number} pos Position to search for tokens within `pattern`.
 * @param {Number} scope Regex scope to apply: 'default' or 'class'.
 * @param {Object} context Context object to use for token handler functions.
 * @returns {Object} Object with properties `matchLength`, `output`, and `reparse`; or `null`.
 */
function runTokens(pattern, flags, pos, scope, context) {
    var i = tokens.length,
        leadChar = pattern.charAt(pos),
        result = null,
        match,
        t;

    // Run in reverse insertion order
    while (i--) {
        t = tokens[i];
        if (
            (t.leadChar && t.leadChar !== leadChar) ||
            (t.scope !== scope && t.scope !== 'all') ||
            (t.flag && flags.indexOf(t.flag) === -1)
        ) {
            continue;
        }

        match = XRegExp.exec(pattern, t.regex, pos, 'sticky');
        if (match) {
            result = {
                matchLength: match[0].length,
                output: t.handler.call(context, match, scope, flags),
                reparse: t.reparse
            };
            // Finished with token tests
            break;
        }
    }

    return result;
}

/**
 * Enables or disables implicit astral mode opt-in. When enabled, flag A is automatically added to
 * all new regexes created by XRegExp. This causes an error to be thrown when creating regexes if
 * the Unicode Base addon is not available, since flag A is registered by that addon.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 *//*
function setAstral(on) {
    features.astral = on;
}
*/
/**
 * Enables or disables native method overrides.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */
function setNatives(on) {
    RegExp.prototype.exec = (on ? fixed : nativ).exec;
    RegExp.prototype.test = (on ? fixed : nativ).test;
    String.prototype.match = (on ? fixed : nativ).match;
    String.prototype.replace = (on ? fixed : nativ).replace;
    String.prototype.split = (on ? fixed : nativ).split;

    features.natives = on;
}

/**
 * Returns the object, or throws an error if it is `null` or `undefined`. This is used to follow
 * the ES5 abstract operation `ToObject`.
 *
 * @private
 * @param {*} value Object to check and return.
 * @returns {*} The provided object.
 */
function toObject(value) {
    // null or undefined
    if (value == null) {
        throw new TypeError('Cannot convert null or undefined to object');
    }

    return value;
}

// ==--------------------------==
// Constructor
// ==--------------------------==

/**
 * Creates an extended regular expression object for matching text with a pattern. Differs from a
 * native regular expression in that additional syntax and flags are supported. The returned object
 * is in fact a native `RegExp` and works with all native methods.
 *
 * @class XRegExp
 * @constructor
 * @param {String|RegExp} pattern Regex pattern string, or an existing regex object to copy.
 * @param {String} [flags] Any combination of flags.
 *   Native flags:
 *     <li>`g` - global
 *     <li>`i` - ignore case
 *     <li>`m` - multiline anchors
 *     <li>`u` - unicode (ES6)
 *     <li>`y` - sticky (Firefox 3+, ES6)
 *   Additional XRegExp flags:
 *     <li>`n` - explicit capture
 *     <li>`s` - dot matches all (aka singleline)
 *     <li>`x` - free-spacing and line comments (aka extended)
 *     <li>`A` - astral (requires the Unicode Base addon)
 *   Flags cannot be provided when constructing one `RegExp` from another.
 * @returns {RegExp} Extended regular expression object.
 * @example
 *
 * // With named capture and flag x
 * XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
 *          (?<month> [0-9]{2} ) -?  # month \n\
 *          (?<day>   [0-9]{2} )     # day   ', 'x');
 *
 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
 * // have fresh `lastIndex` properties (set to zero).
 * XRegExp(/regex/);
 */
function XRegExp(pattern, flags) {
    if (XRegExp.isRegExp(pattern)) {
        if (flags !== undefined) {
            throw new TypeError('Cannot supply flags when copying a RegExp');
        }
        return copyRegex(pattern);
    }

    // Copy the argument behavior of `RegExp`
    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);

    if (XRegExp.isInstalled('astral') && flags.indexOf('A') === -1) {
        // This causes an error to be thrown if the Unicode Base addon is not available
        flags += 'A';
    }

    if (!patternCache[pattern]) {
        patternCache[pattern] = {};
    }

    if (!patternCache[pattern][flags]) {
        var context = {
            hasNamedCapture: false,
            captureNames: []
        };
        var scope = defaultScope;
        var output = '';
        var pos = 0;
        var result;

        // Check for flag-related errors, and strip/apply flags in a leading mode modifier
        var applied = prepareFlags(pattern, flags);
        var appliedPattern = applied.pattern;
        var appliedFlags = applied.flags;

        // Use XRegExp's tokens to translate the pattern to a native regex pattern.
        // `appliedPattern.length` may change on each iteration if tokens use `reparse`
        while (pos < appliedPattern.length) {
            do {
                // Check for custom tokens at the current position
                result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
                // If the matched token used the `reparse` option, splice its output into the
                // pattern before running tokens again at the same position
                if (result && result.reparse) {
                    appliedPattern = appliedPattern.slice(0, pos) +
                        result.output +
                        appliedPattern.slice(pos + result.matchLength);
                }
            } while (result && result.reparse);

            if (result) {
                output += result.output;
                pos += (result.matchLength || 1);
            } else {
                // Get the native token at the current position
                var token = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, 'sticky')[0];
                output += token;
                pos += token.length;
                if (token === '[' && scope === defaultScope) {
                    scope = classScope;
                } else if (token === ']' && scope === classScope) {
                    scope = defaultScope;
                }
            }
        }

        patternCache[pattern][flags] = {
            // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
            // groups are sometimes inserted during regex transpilation in order to keep tokens
            // separated. However, more than one empty group in a row is never needed.
            pattern: nativ.replace.call(output, /(?:\(\?:\))+/g, '(?:)'),
            // Strip all but native flags
            flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ''),
            // `context.captureNames` has an item for each capturing group, even if unnamed
            captures: context.hasNamedCapture ? context.captureNames : null
        };
    }

    var generated = patternCache[pattern][flags];
    return augment(
        new RegExp(generated.pattern, generated.flags),
        generated.captures,
        pattern,
        flags
    );
}

// Add `RegExp.prototype` to the prototype chain
XRegExp.prototype = new RegExp();

// ==--------------------------==
// Public properties
// ==--------------------------==

/**
 * The XRegExp version number as a string containing three dot-separated parts. For example,
 * '2.0.0-beta-3'.
 *
 * @static
 * @memberOf XRegExp
 * @type String
 */
XRegExp.version = '3.1.1-next';

// ==--------------------------==
// Public methods
// ==--------------------------==

// Intentionally undocumented; used in tests and addons
XRegExp._clipDuplicates = clipDuplicates;
XRegExp._hasNativeFlag = hasNativeFlag;
XRegExp._dec = dec;
XRegExp._hex = hex;
XRegExp._pad4 = pad4;

/**
 * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
 * create XRegExp addons. If more than one token can match the same string, the last added wins.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex object that matches the new token.
 * @param {Function} handler Function that returns a new pattern string (using native regex syntax)
 *   to replace the matched token within all future XRegExp regexes. Has access to persistent
 *   properties of the regex being built, through `this`. Invoked with three arguments:
 *   <li>The match array, with named backreference properties.
 *   <li>The regex scope where the match was found: 'default' or 'class'.
 *   <li>The flags used by the regex, including any flags in a leading mode modifier.
 *   The handler function becomes part of the XRegExp construction process, so be careful not to
 *   construct XRegExps within the function or you will trigger infinite recursion.
 * @param {Object} [options] Options object with optional properties:
 *   <li>`scope` {String} Scope where the token applies: 'default', 'class', or 'all'.
 *   <li>`flag` {String} Single-character flag that triggers the token. This also registers the
 *     flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
 *   <li>`optionalFlags` {String} Any custom flags checked for within the token `handler` that are
 *     not required to trigger the token. This registers the flags, to prevent XRegExp from
 *     throwing an 'unknown flag' error when any of the flags are used.
 *   <li>`reparse` {Boolean} Whether the `handler` function's output should not be treated as
 *     final, and instead be reparseable by other tokens (including the current token). Allows
 *     token chaining or deferring.
 *   <li>`leadChar` {String} Single character that occurs at the beginning of any successful match
 *     of the token (not always applicable). This doesn't change the behavior of the token unless
 *     you provide an erroneous value. However, providing it can increase the token's performance
 *     since the token can be skipped at any positions where this character doesn't appear.
 * @example
 *
 * // Basic usage: Add \a for the ALERT control code
 * XRegExp.addToken(
 *   /\\a/,
 *   function() {return '\\x07';},
 *   {scope: 'all'}
 * );
 * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
 *
 * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
 * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
 * // character classes only)
 * XRegExp.addToken(
 *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
 *   function(match) {return match[1] + (match[2] ? '' : '?');},
 *   {flag: 'U'}
 * );
 * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
 * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
 */
XRegExp.addToken = function(regex, handler, options) {
    options = options || {};
    var optionalFlags = options.optionalFlags, i;

    if (options.flag) {
        registerFlag(options.flag);
    }

    if (optionalFlags) {
        optionalFlags = nativ.split.call(optionalFlags, '');
        for (i = 0; i < optionalFlags.length; ++i) {
            registerFlag(optionalFlags[i]);
        }
    }

    // Add to the private list of syntax tokens
    tokens.push({
        regex: copyRegex(regex, {
            addG: true,
            addY: hasNativeY,
            isInternalOnly: true
        }),
        handler: handler,
        scope: options.scope || defaultScope,
        flag: options.flag,
        reparse: options.reparse,
        leadChar: options.leadChar
    });

    // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and flags
    // might now produce different results
    XRegExp.cache.flush('patterns');
};

/**
 * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
 * the same pattern and flag combination, the cached copy of the regex is returned.
 *
 * @memberOf XRegExp
 * @param {String} pattern Regex pattern string.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Cached XRegExp object.
 * @example
 *
 * while (match = XRegExp.cache('.', 'gs').exec(str)) {
 *   // The regex is compiled once only
 * }
 */
XRegExp.cache = function(pattern, flags) {
    if (!regexCache[pattern]) {
        regexCache[pattern] = {};
    }
    return regexCache[pattern][flags] || (
        regexCache[pattern][flags] = XRegExp(pattern, flags)
    );
};

// Intentionally undocumented; used in tests
XRegExp.cache.flush = function(cacheName) {
    if (cacheName === 'patterns') {
        // Flush the pattern cache used by the `XRegExp` constructor
        patternCache = {};
    } else {
        // Flush the regex cache populated by `XRegExp.cache`
        regexCache = {};
    }
};

/**
 * Escapes any regular expression metacharacters, for use when matching literal strings. The result
 * can safely be used at any point within a regex that uses any flags.
 *
 * @memberOf XRegExp
 * @param {String} str String to escape.
 * @returns {String} String with regex metacharacters escaped.
 * @example
 *
 * XRegExp.escape('Escaped? <.>');
 * // -> 'Escaped\?\ <\.>'
 *//*
XRegExp.escape = function(str) {
    return nativ.replace.call(toObject(str), /[-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};
*/
/**
 * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
 * regex uses named capture, named backreference properties are included on the match array.
 * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
 * must start at the specified position only. The `lastIndex` property of the provided regex is not
 * used, but is updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.exec` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Array} Match array with named backreference properties, or `null`.
 * @example
 *
 * // Basic use, with named backreference
 * var match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
 * match.hex; // -> '2620'
 *
 * // With pos and sticky, in a loop
 * var pos = 2, result = [], match;
 * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
 *   result.push(match[1]);
 *   pos = match.index + match[0].length;
 * }
 * // result -> ['2', '3', '4']
 */
XRegExp.exec = function(str, regex, pos, sticky) {
    var cacheKey = 'g',
        addY = false,
        fakeY = false,
        match,
        r2;

    addY = hasNativeY && !!(sticky || (regex.sticky && sticky !== false));
    if (addY) {
        cacheKey += 'y';
    } else if (sticky) {
        // Simulate sticky matching by appending an empty capture to the original regex. The
        // resulting regex will succeed no matter what at the current index (set with `lastIndex`),
        // and will not search the rest of the subject string. We'll know that the original regex
        // has failed if that last capture is `''` rather than `undefined` (i.e., if that last
        // capture participated in the match).
        fakeY = true;
        cacheKey += 'FakeY';
    }

    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

    // Shares cached copies with `XRegExp.match`/`replace`
    r2 = regex[REGEX_DATA][cacheKey] || (
        regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
            addG: true,
            addY: addY,
            source: fakeY ? regex.source + '|()' : undefined,
            removeY: sticky === false,
            isInternalOnly: true
        })
    );

    pos = pos || 0;
    r2.lastIndex = pos;

    // Fixed `exec` required for `lastIndex` fix, named backreferences, etc.
    match = fixed.exec.call(r2, str);

    // Get rid of the capture added by the pseudo-sticky matcher if needed. An empty string means
    // the original regexp failed (see above).
    if (fakeY && match && match.pop() === '') {
        match = null;
    }

    if (regex.global) {
        regex.lastIndex = match ? r2.lastIndex : 0;
    }

    return match;
};

/**
 * Executes a provided function once per regex match. Searches always start at the beginning of the
 * string and continue until the end, regardless of the state of the regex's `global` property and
 * initial `lastIndex`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Function} callback Function to execute for each match. Invoked with four arguments:
 *   <li>The match array, with named backreference properties.
 *   <li>The zero-based match index.
 *   <li>The string being traversed.
 *   <li>The regex object being used to traverse the string.
 * @example
 *
 * // Extracts every other digit from a string
 * var evens = [];
 * XRegExp.forEach('1a2345', /\d/, function(match, i) {
 *   if (i % 2) evens.push(+match[0]);
 * });
 * // evens -> [2, 4]
 *//*
XRegExp.forEach = function(str, regex, callback) {
    var pos = 0,
        i = -1,
        match;

    while ((match = XRegExp.exec(str, regex, pos))) {
        // Because `regex` is provided to `callback`, the function could use the deprecated/
        // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since `XRegExp.exec`
        // doesn't use `lastIndex` to set the search position, this can't lead to an infinite loop,
        // at least. Actually, because of the way `XRegExp.exec` caches globalized versions of
        // regexes, mutating the regex will not have any effect on the iteration or matched strings,
        // which is a nice side effect that brings extra safety.
        callback(match, ++i, str, regex);

        pos = match.index + (match[0].length || 1);
    }
};
*/
/**
 * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
 * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
 * regexes are not recompiled using XRegExp syntax.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex to globalize.
 * @returns {RegExp} Copy of the provided regex with flag `g` added.
 * @example
 *
 * var globalCopy = XRegExp.globalize(/regex/);
 * globalCopy.global; // -> true
 *//*
XRegExp.globalize = function(regex) {
    return copyRegex(regex, {addG: true});
};
*/
/**
 * Installs optional features according to the specified options. Can be undone using
 * `XRegExp.uninstall`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.install({
 *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
 *   astral: true,
 *
 *   // DEPRECATED: Overrides native regex methods with fixed/extended versions
 *   natives: true
 * });
 *
 * // With an options string
 * XRegExp.install('astral natives');
 *//*
XRegExp.install = function(options) {
    options = prepareOptions(options);

    if (!features.astral && options.astral) {
        setAstral(true);
    }

    if (!features.natives && options.natives) {
        setNatives(true);
    }
};
*/
/**
 * Checks whether an individual optional feature is installed.
 *
 * @memberOf XRegExp
 * @param {String} feature Name of the feature to check. One of:
 *   <li>`astral`
 *   <li>`natives`
 * @returns {Boolean} Whether the feature is installed.
 * @example
 *
 * XRegExp.isInstalled('astral');
 */
XRegExp.isInstalled = function(feature) {
    return !!(features[feature]);
};

/**
 * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
 * created in another frame, when `instanceof` and `constructor` checks would fail.
 *
 * @memberOf XRegExp
 * @param {*} value Object to check.
 * @returns {Boolean} Whether the object is a `RegExp` object.
 * @example
 *
 * XRegExp.isRegExp('string'); // -> false
 * XRegExp.isRegExp(/regex/i); // -> true
 * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
 * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
 */
XRegExp.isRegExp = function(value) {
    return toString.call(value) === '[object RegExp]';
    //return isType(value, 'RegExp');
};

/**
 * Returns the first matched string, or in global mode, an array containing all matched strings.
 * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
 * the result types you actually want (string instead of `exec`-style array in match-first mode,
 * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
 * you override flag g and ignore `lastIndex`, and fixes browser bugs.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {String} [scope='one'] Use 'one' to return the first match as a string. Use 'all' to
 *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
 *   `scope` is 'all'.
 * @returns {String|Array} In match-first mode: First match as a string, or `null`. In match-all
 *   mode: Array of all matched strings, or an empty array.
 * @example
 *
 * // Match first
 * XRegExp.match('abc', /\w/); // -> 'a'
 * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
 * XRegExp.match('abc', /x/g, 'one'); // -> null
 *
 * // Match all
 * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /x/, 'all'); // -> []
 *//*
XRegExp.match = function(str, regex, scope) {
    var global = (regex.global && scope !== 'one') || scope === 'all',
        cacheKey = ((global ? 'g' : '') + (regex.sticky ? 'y' : '')) || 'noGY',
        result,
        r2;

    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

    // Shares cached copies with `XRegExp.exec`/`replace`
    r2 = regex[REGEX_DATA][cacheKey] || (
        regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
            addG: !!global,
            removeG: scope === 'one',
            isInternalOnly: true
        })
    );

    result = nativ.match.call(toObject(str), r2);

    if (regex.global) {
        regex.lastIndex = (
            (scope === 'one' && result) ?
                // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
                (result.index + result[0].length) : 0
        );
    }

    return global ? (result || []) : (result && result[0]);
};
*/
/**
 * Retrieves the matches from searching a string using a chain of regexes that successively search
 * within previous matches. The provided `chain` array can contain regexes and or objects with
 * `regex` and `backref` properties. When a backreference is specified, the named or numbered
 * backreference is passed forward to the next regex or returned.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} chain Regexes that each search for matches within preceding results.
 * @returns {Array} Matches by the last regex in the chain, or an empty array.
 * @example
 *
 * // Basic usage; matches numbers within <b> tags
 * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
 *   XRegExp('(?is)<b>.*?</b>'),
 *   /\d+/
 * ]);
 * // -> ['2', '4', '56']
 *
 * // Passing forward and returning specific backreferences
 * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
 *         <a href="http://www.google.com/">Google</a>';
 * XRegExp.matchChain(html, [
 *   {regex: /<a href="([^"]+)">/i, backref: 1},
 *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
 * ]);
 * // -> ['xregexp.com', 'www.google.com']
 */
/*XRegExp.matchChain = function(str, chain) {
    return (function recurseChain(values, level) {
        var item = chain[level].regex ? chain[level] : {regex: chain[level]};
        var matches = [];

        function addMatch(match) {
            if (item.backref) {
                // Safari 4.0.5 (but not 5.0.5+) inappropriately uses sparse arrays to hold the
                // `undefined`s for backreferences to nonparticipating capturing groups. In such
                // cases, a `hasOwnProperty` or `in` check on its own would inappropriately throw
                // the exception, so also check if the backreference is a number that is within the
                // bounds of the array.
                if (!(match.hasOwnProperty(item.backref) || +item.backref < match.length)) {
                    throw new ReferenceError('Backreference to undefined group: ' + item.backref);
                }

                matches.push(match[item.backref] || '');
            } else {
                matches.push(match[0]);
            }
        }

        for (var i = 0; i < values.length; ++i) {
            XRegExp.forEach(values[i], item.regex, addMatch);
        }

        return ((level === chain.length - 1) || !matches.length) ?
            matches :
            recurseChain(matches, level + 1);
    }([str], 0));
};
*/
/**
 * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
 * or regex, and the replacement can be a string or a function to be called for each match. To
 * perform a global search and replace, use the optional `scope` argument or include flag g if using
 * a regex. Replacement strings can use `${n}` for named and numbered backreferences. Replacement
 * functions can use named backreferences via `arguments[0].name`. Also fixes browser bugs compared
 * to the native `String.prototype.replace` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 *   Replacement strings can include special replacement syntax:
 *     <li>$$ - Inserts a literal $ character.
 *     <li>$&, $0 - Inserts the matched substring.
 *     <li>$` - Inserts the string that precedes the matched substring (left context).
 *     <li>$' - Inserts the string that follows the matched substring (right context).
 *     <li>$n, $nn - Where n/nn are digits referencing an existent capturing group, inserts
 *       backreference n/nn.
 *     <li>${n} - Where n is a name or any number of digits that reference an existent capturing
 *       group, inserts backreference n.
 *   Replacement functions are invoked with three or more arguments:
 *     <li>The matched substring (corresponds to $& above). Named backreferences are accessible as
 *       properties of this first argument.
 *     <li>0..n arguments, one for each backreference (corresponding to $1, $2, etc. above).
 *     <li>The zero-based index of the match within the total search string.
 *     <li>The total string being searched.
 * @param {String} [scope='one'] Use 'one' to replace the first match only, or 'all'. If not
 *   explicitly specified and using a regex with flag g, `scope` is 'all'.
 * @returns {String} New string with one or all matches replaced.
 * @example
 *
 * // Regex search, using named backreferences in replacement string
 * var name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
 * XRegExp.replace('John Smith', name, '${last}, ${first}');
 * // -> 'Smith, John'
 *
 * // Regex search, using named backreferences in replacement function
 * XRegExp.replace('John Smith', name, function(match) {
 *   return match.last + ', ' + match.first;
 * });
 * // -> 'Smith, John'
 *
 * // String search, with replace-all
 * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
 * // -> 'XRegExp builds XRegExps'
 */
XRegExp.replace = function(str, search, replacement, scope) {
    var isRegex = XRegExp.isRegExp(search),
        global = (search.global && scope !== 'one') || scope === 'all',
        cacheKey = ((global ? 'g' : '') + (search.sticky ? 'y' : '')) || 'noGY',
        s2 = search,
        result;

    if (isRegex) {
        search[REGEX_DATA] = search[REGEX_DATA] || {};

        // Shares cached copies with `XRegExp.exec`/`match`. Since a copy is used, `search`'s
        // `lastIndex` isn't updated *during* replacement iterations
        s2 = search[REGEX_DATA][cacheKey] || (
            search[REGEX_DATA][cacheKey] = copyRegex(search, {
                addG: !!global,
                removeG: scope === 'one',
                isInternalOnly: true
            })
        );
    } else if (global) {
        s2 = new RegExp(XRegExp.escape(String(search)), 'g');
    }

    // Fixed `replace` required for named backreferences, etc.
    result = fixed.replace.call(toObject(str), s2, replacement);

    if (isRegex && search.global) {
        // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
        search.lastIndex = 0;
    }

    return result;
};

/**
 * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
 * array of replacement details. Later replacements operate on the output of earlier replacements.
 * Replacement details are accepted as an array with a regex or string to search for, the
 * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
 * replacement text syntax, which supports named backreference properties via `${name}`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} replacements Array of replacement detail arrays.
 * @returns {String} New string with all replacements.
 * @example
 *
 * str = XRegExp.replaceEach(str, [
 *   [XRegExp('(?<name>a)'), 'z${name}'],
 *   [/b/gi, 'y'],
 *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
 *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
 *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
 *   [/f/g, function($0) {
 *     return $0.toUpperCase();
 *   }]
 * ]);
 *//*
XRegExp.replaceEach = function(str, replacements) {
    var i, r;

    for (i = 0; i < replacements.length; ++i) {
        r = replacements[i];
        str = XRegExp.replace(str, r[0], r[1], r[2]);
    }

    return str;
};
*/
/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * XRegExp.split('a b c', ' ');
 * // -> ['a', 'b', 'c']
 *
 * // With limit
 * XRegExp.split('a b c', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', '..']
 *//*
XRegExp.split = function(str, separator, limit) {
    return fixed.split.call(toObject(str), separator, limit);
};
*/
/**
 * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
 * `sticky` arguments specify the search start position, and whether the match must start at the
 * specified position only. The `lastIndex` property of the provided regex is not used, but is
 * updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.test` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * // Basic use
 * XRegExp.test('abc', /c/); // -> true
 *
 * // With pos and sticky
 * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
 * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
 */
/*XRegExp.test = function(str, regex, pos, sticky) {
    // Do this the easy way :-)
    return !!XRegExp.exec(str, regex, pos, sticky);
};
*/
/**
 * Uninstalls optional features according to the specified options. All optional features start out
 * uninstalled, so this is used to undo the actions of `XRegExp.install`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.uninstall({
 *   // Disables support for astral code points in Unicode addons
 *   astral: true,
 *
 *   // DEPRECATED: Restores native regex methods
 *   natives: true
 * });
 *
 * // With an options string
 * XRegExp.uninstall('astral natives');
 *//*
XRegExp.uninstall = function(options) {
    options = prepareOptions(options);

    if (features.astral && options.astral) {
        setAstral(false);
    }

    if (features.natives && options.natives) {
        setNatives(false);
    }
};
*/
/**
 * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
 * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
 * Backreferences in provided regex objects are automatically renumbered to work correctly within
 * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
 * `flags` argument.
 *
 * @memberOf XRegExp
 * @param {Array} patterns Regexes and strings to combine.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Union of the provided regexes and strings.
 * @example
 *
 * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
 * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
 *//*
XRegExp.union = function(patterns, flags) {
    var numCaptures = 0;
    var numPriorCaptures;
    var captureNames;

    function rewrite(match, paren, backref) {
        var name = captureNames[numCaptures - numPriorCaptures];

        // Capturing group
        if (paren) {
            ++numCaptures;
            // If the current capture has a name, preserve the name
            if (name) {
                return '(?<' + name + '>';
            }
        // Backreference
        } else if (backref) {
            // Rewrite the backreference
            return '\\' + (+backref + numPriorCaptures);
        }

        return match;
    }

    if (!(isType(patterns, 'Array') && patterns.length)) {
        throw new TypeError('Must provide a nonempty array of patterns to merge');
    }

    var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var output = [];
    var pattern;
    for (var i = 0; i < patterns.length; ++i) {
        pattern = patterns[i];

        if (XRegExp.isRegExp(pattern)) {
            numPriorCaptures = numCaptures;
            captureNames = (pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames) || [];

            // Rewrite backreferences. Passing to XRegExp dies on octals and ensures patterns are
            // independently valid; helps keep this simple. Named captures are put back
            output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite));
        } else {
            output.push(XRegExp.escape(pattern));
        }
    }

    return XRegExp(output.join('|'), flags);
};
*/
// ==--------------------------==
// Fixed/extended native methods
// ==--------------------------==

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `RegExp.prototype.exec`. Calling `XRegExp.install('natives')` uses this to
 * override the native method. Use via `XRegExp.exec` without overriding natives.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Array} Match array with named backreference properties, or `null`.
 */
fixed.exec = function(str) {
    var origLastIndex = this.lastIndex,
        match = nativ.exec.apply(this, arguments),
        name,
        r2,
        i;

    if (match) {
        // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating capturing
        // groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of older IEs. IE 9
        // in standards mode follows the spec.
        if (!correctExecNpcg && match.length > 1 && indexOf(match, '') > -1) {
            r2 = copyRegex(this, {
                removeG: true,
                isInternalOnly: true
            });
            // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
            // matching due to characters outside the match
            nativ.replace.call(String(str).slice(match.index), r2, function() {
                var len = arguments.length, i;
                // Skip index 0 and the last 2
                for (i = 1; i < len - 2; ++i) {
                    if (arguments[i] === undefined) {
                        match[i] = undefined;
                    }
                }
            });
        }

        // Attach named capture properties
        if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
            // Skip index 0
            for (i = 1; i < match.length; ++i) {
                name = this[REGEX_DATA].captureNames[i - 1];
                if (name) {
                    match[name] = match[i];
                }
            }
        }

        // Fix browsers that increment `lastIndex` after zero-length matches
        if (this.global && !match[0].length && (this.lastIndex > match.index)) {
            this.lastIndex = match.index;
        }
    }

    if (!this.global) {
        // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
        this.lastIndex = origLastIndex;
    }

    return match;
};

/**
 * Fixes browser bugs in the native `RegExp.prototype.test`. Calling `XRegExp.install('natives')`
 * uses this to override the native method.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Boolean} Whether the regex matched the provided value.
 */
/*fixed.test = function(str) {
    // Do this the easy way :-)
    return !!fixed.exec.call(this, str);
};*/

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `String.prototype.match`. Calling `XRegExp.install('natives')` uses this to
 * override the native method.
 *
 * @memberOf String
 * @param {RegExp|*} regex Regex to search with. If not a regex object, it is passed to `RegExp`.
 * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
 *   the result of calling `regex.exec(this)`.
 */
/*fixed.match = function(regex) {
    var result;

    if (!XRegExp.isRegExp(regex)) {
        // Use the native `RegExp` rather than `XRegExp`
        regex = new RegExp(regex);
    } else if (regex.global) {
        result = nativ.match.apply(this, arguments);
        // Fixes IE bug
        regex.lastIndex = 0;

        return result;
    }

    return fixed.exec.call(regex, toObject(this));
};
*/
/**
 * Adds support for `${n}` tokens for named and numbered backreferences in replacement text, and
 * provides named backreferences to replacement functions as `arguments[0].name`. Also fixes browser
 * bugs in replacement text syntax when performing a replacement using a nonregex search value, and
 * the value of a replacement regex's `lastIndex` property during replacement iterations and upon
 * completion. Calling `XRegExp.install('natives')` uses this to override the native method. Note
 * that this doesn't support SpiderMonkey's proprietary third (`flags`) argument. Use via
 * `XRegExp.replace` without overriding natives.
 *
 * @memberOf String
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 * @returns {String} New string with one or all matches replaced.
 */
fixed.replace = function(search, replacement) {
    var isRegex = XRegExp.isRegExp(search),
        origLastIndex,
        captureNames,
        result;

    if (isRegex) {
        if (search[REGEX_DATA]) {
            captureNames = search[REGEX_DATA].captureNames;
        }
        // Only needed if `search` is nonglobal
        origLastIndex = search.lastIndex;
    } else {
        search += ''; // Type-convert
    }

    // Don't use `typeof`; some older browsers return 'function' for regex objects
    if (isType(replacement, 'Function')) {
        // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
        // functions isn't type-converted to a string
        result = nativ.replace.call(String(this), search, function() {
            var args = arguments, i;
            if (captureNames) {
                // Change the `arguments[0]` string primitive to a `String` object that can store
                // properties. This really does need to use `String` as a constructor
                args[0] = new String(args[0]);
                // Store named backreferences on the first argument
                for (i = 0; i < captureNames.length; ++i) {
                    if (captureNames[i]) {
                        args[0][captureNames[i]] = args[i + 1];
                    }
                }
            }
            // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox, Safari
            // bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
            if (isRegex && search.global) {
                search.lastIndex = args[args.length - 2] + args[0].length;
            }
            // ES6 specs the context for replacement functions as `undefined`
            return replacement.apply(undefined, args);
        });
    } else {
        // Ensure that the last value of `args` will be a string when given nonstring `this`,
        // while still throwing on null or undefined context
        result = nativ.replace.call(this == null ? this : String(this), search, function() {
            // Keep this function's `arguments` available through closure
            var args = arguments;
            return nativ.replace.call(String(replacement), replacementToken, function($0, $1, $2) {
                var n;
                // Named or numbered backreference with curly braces
                if ($1) {
                    // XRegExp behavior for `${n}`:
                    // 1. Backreference to numbered capture, if `n` is an integer. Use `0` for the
                    //    entire match. Any number of leading zeros may be used.
                    // 2. Backreference to named capture `n`, if it exists and is not an integer
                    //    overridden by numbered capture. In practice, this does not overlap with
                    //    numbered capture since XRegExp does not allow named capture to use a bare
                    //    integer as the name.
                    // 3. If the name or number does not refer to an existing capturing group, it's
                    //    an error.
                    n = +$1; // Type-convert; drop leading zeros
                    if (n <= args.length - 3) {
                        return args[n] || '';
                    }
                    // Groups with the same name is an error, else would need `lastIndexOf`
                    n = captureNames ? indexOf(captureNames, $1) : -1;
                    if (n < 0) {
                        throw new SyntaxError('Backreference to undefined group ' + $0);
                    }
                    return args[n + 1] || '';
                }
                // Else, special variable or numbered backreference without curly braces
                if ($2 === '$') { // $$
                    return '$';
                }
                if ($2 === '&' || +$2 === 0) { // $&, $0 (not followed by 1-9), $00
                    return args[0];
                }
                if ($2 === '`') { // $` (left context)
                    return args[args.length - 1].slice(0, args[args.length - 2]);
                }
                if ($2 === "'") { // $' (right context)
                    return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                }
                // Else, numbered backreference without curly braces
                $2 = +$2; // Type-convert; drop leading zero
                // XRegExp behavior for `$n` and `$nn`:
                // - Backrefs end after 1 or 2 digits. Use `${..}` for more digits.
                // - `$1` is an error if no capturing groups.
                // - `$10` is an error if less than 10 capturing groups. Use `${1}0` instead.
                // - `$01` is `$1` if at least one capturing group, else it's an error.
                // - `$0` (not followed by 1-9) and `$00` are the entire match.
                // Native behavior, for comparison:
                // - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
                // - `$1` is a literal `$1` if no capturing groups.
                // - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
                // - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
                // - `$0` is a literal `$0`.
                if (!isNaN($2)) {
                    if ($2 > args.length - 3) {
                        throw new SyntaxError('Backreference to undefined group ' + $0);
                    }
                    return args[$2] || '';
                }
                // `$` followed by an unsupported char is an error, unlike native JS
                throw new SyntaxError('Invalid token ' + $0);
            });
        });
    }

    if (isRegex) {
        if (search.global) {
            // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
            search.lastIndex = 0;
        } else {
            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
            search.lastIndex = origLastIndex;
        }
    }

    return result;
};

/**
 * Fixes browser bugs in the native `String.prototype.split`. Calling `XRegExp.install('natives')`
 * uses this to override the native method. Use via `XRegExp.split` without overriding natives.
 *
 * @memberOf String
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 */
fixed.split = function(separator, limit) {
    if (!XRegExp.isRegExp(separator)) {
        // Browsers handle nonregex split correctly, so use the faster native method
        return nativ.split.apply(this, arguments);
    }

    var str = String(this),
        output = [],
        origLastIndex = separator.lastIndex,
        lastLastIndex = 0,
        lastLength;

    // Values for `limit`, per the spec:
    // If undefined: pow(2,32) - 1
    // If 0, Infinity, or NaN: 0
    // If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
    // If negative number: pow(2,32) - floor(abs(limit))
    // If other: Type-convert, then use the above rules
    // This line fails in very strange ways for some values of `limit` in Opera 10.5-10.63, unless
    // Opera Dragonfly is open (go figure). It works in at least Opera 9.5-10.1 and 11+
    limit = (limit === undefined ? -1 : limit) >>> 0;

    XRegExp.forEach(str, separator, function(match) {
        // This condition is not the same as `if (match[0].length)`
        if ((match.index + match[0].length) > lastLastIndex) {
            output.push(str.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < str.length) {
                Array.prototype.push.apply(output, match.slice(1));
            }
            lastLength = match[0].length;
            lastLastIndex = match.index + lastLength;
        }
    });

    if (lastLastIndex === str.length) {
        if (!nativ.test.call(separator, '') || lastLength) {
            output.push('');
        }
    } else {
        output.push(str.slice(lastLastIndex));
    }

    separator.lastIndex = origLastIndex;
    return output.length > limit ? output.slice(0, limit) : output;
};

// ==--------------------------==
// Built-in syntax/flag tokens
// ==--------------------------==

/*
 * Letter escapes that natively match literal characters: `\a`, `\A`, etc. These should be
 * SyntaxErrors but are allowed in web reality. XRegExp makes them errors for cross-browser
 * consistency and to reserve their syntax, but lets them be superseded by addons.
 */
XRegExp.addToken(
    /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
    function(match, scope) {
        // \B is allowed in default scope only
        if (match[1] === 'B' && scope === defaultScope) {
            return match[0];
        }
        throw new SyntaxError('Invalid escape ' + match[0]);
    },
    {
        scope: 'all',
        leadChar: '\\'
    }
);

/*
 * Unicode code point escape with curly braces: `\u{N..}`. `N..` is any one or more digit
 * hexadecimal number from 0-10FFFF, and can include leading zeros. Requires the native ES6 `u` flag
 * to support code points greater than U+FFFF. Avoids converting code points above U+FFFF to
 * surrogate pairs (which could be done without flag `u`), since that could lead to broken behavior
 * if you follow a `\u{N..}` token that references a code point above U+FFFF with a quantifier, or
 * if you use the same in a character class.
 */
XRegExp.addToken(
    /\\u{([\dA-Fa-f]+)}/,
    function(match, scope, flags) {
        var code = dec(match[1]);
        if (code > 0x10FFFF) {
            throw new SyntaxError('Invalid Unicode code point ' + match[0]);
        }
        if (code <= 0xFFFF) {
            // Converting to \uNNNN avoids needing to escape the literal character and keep it
            // separate from preceding tokens
            return '\\u' + pad4(hex(code));
        }
        // If `code` is between 0xFFFF and 0x10FFFF, require and defer to native handling
        if (hasNativeU && flags.indexOf('u') > -1) {
            return match[0];
        }
        throw new SyntaxError('Cannot use Unicode code point above \\u{FFFF} without flag u');
    },
    {
        scope: 'all',
        leadChar: '\\'
    }
);

/*
 * Empty character class: `[]` or `[^]`. This fixes a critical cross-browser syntax inconsistency.
 * Unless this is standardized (per the ES spec), regex syntax can't be accurately parsed because
 * character class endings can't be determined.
 */
XRegExp.addToken(
    /\[(\^?)\]/,
    function(match) {
        // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
        // (?!) should work like \b\B, but is unreliable in some versions of Firefox
        return match[1] ? '[\\s\\S]' : '\\b\\B';
    },
    {leadChar: '['}
);

/*
 * Comment pattern: `(?# )`. Inline comments are an alternative to the line comments allowed in
 * free-spacing mode (flag x).
 */
XRegExp.addToken(
    /\(\?#[^)]*\)/,
    function(match, scope, flags) {
        // Keep tokens separated unless the following token is a quantifier. This avoids e.g.
        // inadvertedly changing `\1(?#)1` to `\11`.
        return isQuantifierNext(match.input, match.index + match[0].length, flags) ?
            '' : '(?:)';
    },
    {leadChar: '('}
);

/*
 * Whitespace and line comments, in free-spacing mode (aka extended mode, flag x) only.
 */
XRegExp.addToken(
    /\s+|#[^\n]*\n?/,
    function(match, scope, flags) {
        // Keep tokens separated unless the following token is a quantifier. This avoids e.g.
        // inadvertedly changing `\1 1` to `\11`.
        return isQuantifierNext(match.input, match.index + match[0].length, flags) ?
            '' : '(?:)';
    },
    {flag: 'x'}
);

/*
 * Dot, in dotall mode (aka singleline mode, flag s) only.
 */
XRegExp.addToken(
    /\./,
    function() {
        return '[\\s\\S]';
    },
    {
        flag: 's',
        leadChar: '.'
    }
);

/*
 * Named backreference: `\k<name>`. Backreference names can use the characters A-Z, a-z, 0-9, _,
 * and $ only. Also allows numbered backreferences as `\k<n>`.
 */
XRegExp.addToken(
    /\\k<([\w$]+)>/,
    function(match) {
        // Groups with the same name is an error, else would need `lastIndexOf`
        var index = isNaN(match[1]) ? (indexOf(this.captureNames, match[1]) + 1) : +match[1],
            endIndex = match.index + match[0].length;
        if (!index || index > this.captureNames.length) {
            throw new SyntaxError('Backreference to undefined group ' + match[0]);
        }
        // Keep backreferences separate from subsequent literal numbers. This avoids e.g.
        // inadvertedly changing `(?<n>)\k<n>1` to `()\11`.
        return '\\' + index + (
            endIndex === match.input.length || isNaN(match.input.charAt(endIndex)) ?
                '' : '(?:)'
        );
    },
    {leadChar: '\\'}
);

/*
 * Numbered backreference or octal, plus any following digits: `\0`, `\11`, etc. Octals except `\0`
 * not followed by 0-9 and backreferences to unopened capture groups throw an error. Other matches
 * are returned unaltered. IE < 9 doesn't support backreferences above `\99` in regex syntax.
 */
XRegExp.addToken(
    /\\(\d+)/,
    function(match, scope) {
        if (
            !(
                scope === defaultScope &&
                /^[1-9]/.test(match[1]) &&
                +match[1] <= this.captureNames.length
            ) &&
            match[1] !== '0'
        ) {
            throw new SyntaxError('Cannot use octal escape or backreference to undefined group ' +
                match[0]);
        }
        return match[0];
    },
    {
        scope: 'all',
        leadChar: '\\'
    }
);

/*
 * Named capturing group; match the opening delimiter only: `(?<name>`. Capture names can use the
 * characters A-Z, a-z, 0-9, _, and $ only. Names can't be integers. Supports Python-style
 * `(?P<name>` as an alternate syntax to avoid issues in some older versions of Opera which natively
 * supported the Python-style syntax. Otherwise, XRegExp might treat numbered backreferences to
 * Python-style named capture as octals.
 */
XRegExp.addToken(
    /\(\?P?<([\w$]+)>/,
    function(match) {
        // Disallow bare integers as names because named backreferences are added to match arrays
        // and therefore numeric properties may lead to incorrect lookups
        if (!isNaN(match[1])) {
            throw new SyntaxError('Cannot use integer as capture name ' + match[0]);
        }
        if (match[1] === 'length' || match[1] === '__proto__') {
            throw new SyntaxError('Cannot use reserved word as capture name ' + match[0]);
        }
        if (indexOf(this.captureNames, match[1]) > -1) {
            throw new SyntaxError('Cannot use same name for multiple groups ' + match[0]);
        }
        this.captureNames.push(match[1]);
        this.hasNamedCapture = true;
        return '(';
    },
    {leadChar: '('}
);

/*
 * Capturing group; match the opening parenthesis only. Required for support of named capturing
 * groups. Also adds explicit capture mode (flag n).
 */
XRegExp.addToken(
    /\((?!\?)/,
    function(match, scope, flags) {
        if (flags.indexOf('n') > -1) {
            return '(?:';
        }
        this.captureNames.push(null);
        return '(';
    },
    {
        optionalFlags: 'n',
        leadChar: '('
    }
);

module.exports = XRegExp;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*!
 * XRegExp Unicode Base 3.1.1-next
 * <xregexp.com>
 * Steven Levithan (c) 2008-2016 MIT License
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds base support for Unicode matching:
     * - Adds syntax `\p{..}` for matching Unicode tokens. Tokens can be inverted using `\P{..}` or
     *   `\p{^..}`. Token names ignore case, spaces, hyphens, and underscores. You can omit the
     *   braces for token names that are a single letter (e.g. `\pL` or `PL`).
     * - Adds flag A (astral), which enables 21-bit Unicode support.
     * - Adds the `XRegExp.addUnicodeData` method used by other addons to provide character data.
     *
     * Unicode Base relies on externally provided Unicode character data. Official addons are
     * available to provide data for Unicode categories, scripts, blocks, and properties.
     *
     * @requires XRegExp
     */

    // ==--------------------------==
    // Private stuff
    // ==--------------------------==

    // Storage for Unicode data
    var unicode = {};

    // Reuse utils
    var dec = XRegExp._dec;
    var hex = XRegExp._hex;
    var pad4 = XRegExp._pad4;

    // Generates a token lookup name: lowercase, with hyphens, spaces, and underscores removed
    function normalize(name) {
        return name.replace(/[- _]+/g, '').toLowerCase();
    }

    // Gets the decimal code of a literal code unit, \xHH, \uHHHH, or a backslash-escaped literal
    function charCode(chr) {
        var esc = /^\\[xu](.+)/.exec(chr);
        return esc ?
            dec(esc[1]) :
            chr.charCodeAt(chr.charAt(0) === '\\' ? 1 : 0);
    }

    // Inverts a list of ordered BMP characters and ranges
    function invertBmp(range) {
        var output = '';
        var lastEnd = -1;

        XRegExp.forEach(
            range,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function(m) {
                var start = charCode(m[1]);
                if (start > (lastEnd + 1)) {
                    output += '\\u' + pad4(hex(lastEnd + 1));
                    if (start > (lastEnd + 2)) {
                        output += '-\\u' + pad4(hex(start - 1));
                    }
                }
                lastEnd = charCode(m[2] || m[1]);
            }
        );

        if (lastEnd < 0xFFFF) {
            output += '\\u' + pad4(hex(lastEnd + 1));
            if (lastEnd < 0xFFFE) {
                output += '-\\uFFFF';
            }
        }

        return output;
    }

    // Generates an inverted BMP range on first use
    function cacheInvertedBmp(slug) {
        var prop = 'b!';
        return (
            unicode[slug][prop] ||
            (unicode[slug][prop] = invertBmp(unicode[slug].bmp))
        );
    }
/*
    // Combines and optionally negates BMP and astral data
    function buildAstral(slug, isNegated) {
        var item = unicode[slug];
        var combined = '';

        if (item.bmp && !item.isBmpLast) {
            combined = '[' + item.bmp + ']' + (item.astral ? '|' : '');
        }
        if (item.astral) {
            combined += item.astral;
        }
        if (item.isBmpLast && item.bmp) {
            combined += (item.astral ? '|' : '') + '[' + item.bmp + ']';
        }

        // Astral Unicode tokens always match a code point, never a code unit
        return isNegated ?
            '(?:(?!' + combined + ')(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))' :
            '(?:' + combined + ')';
    }

    // Builds a complete astral pattern on first use
    function cacheAstral(slug, isNegated) {
        var prop = isNegated ? 'a!' : 'a=';
        return (
            unicode[slug][prop] ||
            (unicode[slug][prop] = buildAstral(slug, isNegated))
        );
    }
*/
    // ==--------------------------==
    // Core functionality
    // ==--------------------------==

    /*
     * Add astral mode (flag A) and Unicode token syntax: `\p{..}`, `\P{..}`, `\p{^..}`, `\pC`.
     */
    XRegExp.addToken(
        // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(match, scope, flags) {
            var ERR_DOUBLE_NEG = 'Invalid double negation ';
            var ERR_UNKNOWN_NAME = 'Unknown Unicode token ';
            var ERR_UNKNOWN_REF = 'Unicode token missing data ';
            var ERR_ASTRAL_ONLY = 'Astral mode required for Unicode token ';
            var ERR_ASTRAL_IN_CLASS = 'Astral mode does not support Unicode tokens within character classes';
            // Negated via \P{..} or \p{^..}
            var isNegated = match[1] === 'P' || !!match[2];
            // Switch from BMP (0-FFFF) to astral (0-10FFFF) mode via flag A
           // var isAstralMode = flags.indexOf('A') > -1;
            // Token lookup name. Check `[4]` first to avoid passing `undefined` via `\p{}`
            var slug = normalize(match[4] || match[3]);
            // Token data object
            var item = unicode[slug];

            if (match[1] === 'P' && match[2]) {
                throw new SyntaxError(ERR_DOUBLE_NEG + match[0]);
            }
            if (!unicode.hasOwnProperty(slug)) {
                throw new SyntaxError(ERR_UNKNOWN_NAME + match[0]);
            }

            // Switch to the negated form of the referenced Unicode token
            if (item.inverseOf) {
                slug = normalize(item.inverseOf);
                if (!unicode.hasOwnProperty(slug)) {
                    throw new ReferenceError(ERR_UNKNOWN_REF + match[0] + ' -> ' + item.inverseOf);
                }
                item = unicode[slug];
                isNegated = !isNegated;
            }

            if (!(item.bmp /*|| isAstralMode*/)) {
                throw new SyntaxError(ERR_ASTRAL_ONLY + match[0]);
            }
 /*           if (isAstralMode) {
                if (scope === 'class') {
                    throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
                }

                return cacheAstral(slug, isNegated);
            }
*/
            return scope === 'class' ?
                (isNegated ? cacheInvertedBmp(slug) : item.bmp) :
                (isNegated ? '[^' : '[') + item.bmp + ']';
        },
        {
            scope: 'all',
            optionalFlags: 'A',
            leadChar: '\\'
        }
    );

    /**
     * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
     *
     * @memberOf XRegExp
     * @param {Array} data Objects with named character ranges. Each object may have properties
     *   `name`, `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are
     *   optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set). If
     *   `astral` is absent, the `bmp` data is used for BMP and astral modes. If `bmp` is absent,
     *   the name errors in BMP mode but works in astral mode. If both `bmp` and `astral` are
     *   provided, the `bmp` data only is used in BMP mode, and the combination of `bmp` and
     *   `astral` data is used in astral mode. `isBmpLast` is needed when a token matches orphan
     *   high surrogates *and* uses surrogate pairs to match astral code points. The `bmp` and
     *   `astral` data should be a combination of literal characters and `\xHH` or `\uHHHH` escape
     *   sequences, with hyphens to create ranges. Any regex metacharacters in the data should be
     *   escaped, apart from range-creating hyphens. The `astral` data can additionally use
     *   character classes and alternation, and should use surrogate pairs to represent astral code
     *   points. `inverseOf` can be used to avoid duplicating character data if a Unicode token is
     *   defined as the exact inverse of another token.
     * @example
     *
     * // Basic use
     * XRegExp.addUnicodeData([{
     *   name: 'XDigit',
     *   alias: 'Hexadecimal',
     *   bmp: '0-9A-Fa-f'
     * }]);
     * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
     */
    XRegExp.addUnicodeData = function(data) {
        var ERR_NO_NAME = 'Unicode token requires name';
        var ERR_NO_DATA = 'Unicode token has no character data ';
        var item;

        for (var i = 0; i < data.length; ++i) {
            item = data[i];
            if (!item.name) {
                throw new Error(ERR_NO_NAME);
            }
            if (!(item.inverseOf || item.bmp || item.astral)) {
                throw new Error(ERR_NO_DATA + item.name);
            }
            unicode[normalize(item.name)] = item;
            if (item.alias) {
                unicode[normalize(item.alias)] = item;
            }
        }

        // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
        // flags might now produce different results
        XRegExp.cache.flush('patterns');
    };

    /**
     * @ignore
     *
     * Return a reference to the internal Unicode definition structure for the given Unicode
     * Property if the given name is a legal Unicode Property for use in XRegExp `\p` or `\P` regex
     * constructs.
     *
     * @memberOf XRegExp
     * @param {String} name Name by which the Unicode Property may be recognized (case-insensitive),
     *   e.g. `'N'` or `'Number'`. The given name is matched against all registered Unicode
     *   Properties and Property Aliases.
     * @returns {Object} Reference to definition structure when the name matches a Unicode Property.
     *
     * @note
     * For more info on Unicode Properties, see also http://unicode.org/reports/tr18/#Categories.
     *
     * @note
     * This method is *not* part of the officially documented API and may change or be removed in
     * the future. It is meant for userland code that wishes to reuse the (large) internal Unicode
     * structures set up by XRegExp.
     */
    XRegExp._getUnicodeProperty = function(name) {
        var slug = normalize(name);
        return unicode[slug];
    };

};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*!
 * XRegExp Unicode Categories 3.1.1-next
 * <xregexp.com>
 * Steven Levithan (c) 2010-2016 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds support for Unicode's general categories. E.g., `\p{Lu}` or `\p{Uppercase Letter}`. See
     * category descriptions in UAX #44 <http://unicode.org/reports/tr44/#GC_Values_Table>. Token
     * names are case insensitive, and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 8.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Categories');
    }

    XRegExp.addUnicodeData([
        {
        'name': 'L',
        'alias': 'Letter',
        'bmp': 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC'/*,
        'astral': '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]'*/
    },
    {
        'name': 'N',
        'alias': 'Number',
        'bmp': '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19'/*,
        'astral': '\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]'*/
    }
    ]);

};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {module.exports = function (_clone_and_set_option_defaults, _isArray, QRatio, extract) {

    module = {};

    module.dedupe = function dedupe(contains_dupes, options_p) {

        /**
        * This convenience function takes a list of strings containing duplicates and uses fuzzy matching to identify
        * and remove duplicates. Specifically, it uses extract to identify duplicates that
        * score greater than a user defined threshold/cutoff. Then, it looks for the longest item in the duplicate list
        * since we assume this item contains the most entity information and returns that. It breaks string
        * length ties on an alphabetical sort.
        * 
        * Note: as the threshold DECREASES the number of duplicates that are found INCREASES. This means that the
        * returned deduplicated list will likely be shorter. Raise the threshold for fuzzy_dedupe to be less
        * sensitive.
        *
        * @function dedupe
        * @param {String[]|Object[]|Object} contains_dupes - array of strings, or array of choice objects if processor is supplied, or object of form {key: choice}
        * @param {Object} [options_p] - Additional options.
        * @param {boolean} [options_p.useCollator] - Whether to include map of matching items in results
        * @param {function} [options_p.scorer] - takes two strings and returns a score
        * @param {function} [options_p.processor] - takes each choice and outputs a string to be used for Scoring
        * @param {number} [options_p.cutoff] - matching threshold 0-100, Default: 70
        * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
        * @param {boolean} [options_p.astral] - use iLeven for scoring to properly handle astral symbols
        * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
        * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default false
        * @param {boolean} [options_p.trySimple] - try simple/partial ratio as part of (parial_)token_set_ratio test suite
        * @param {number} [options_p.subcost] - Substitution cost, default 1 for distance, 2 for all ratios
        * @param {string} [options_p.wildcards] - characters that will be used as wildcards if provided
        * @param {boolean} [options_p.collapseWhitespace] - Collapse consecutive white space during full_process, default true
        * @param {string} [options_p.normalize] - Normalize unicode representations
        * @param {boolean} [options_p.keepmap] - keep the items mapped to this value, default false
        * @param {boolean} [options_p.returnObjects] - return array of object instead of array of tuples
        * @returns {Object[] | Array[]} - array of unique items and the index/key of the used match in contains_dupes.
        */

        var options = _clone_and_set_option_defaults(options_p);

        if (!(_isArray(contains_dupes) || typeof contains_dupes === 'object')) {
            throw new Error("contains_dupes must be an array or object");
            return
        }
        if (Object.keys(contains_dupes).length === 0) {
            if (typeof console !== undefined) console.warn("contains_dupes is empty");
            return [];
        }
        if (options.limit) {
            if (typeof console !== undefined) console.warn("options.limit will be ignored in dedupe");
            options.limit = 0;
        }

        if (!options.cutoff || typeof options.cutoff !== 'number') {
            if (typeof console !== undefined) console.warn("Using default cutoff of 70");
            options.cutoff = 70;
        }

        if (!options.scorer) {
            options.scorer = QRatio;
            if (typeof console !== undefined) console.log("Using default scorer 'ratio' for dedupe");
        }

        // extract will only run processor on choice so do here
        var processor;
        if (options.processor && typeof options.processor === "function") {
            processor = options.processor;
        }
        else processor = function (x) { return x; }

        var uniqueItems = {};

        for (var i in contains_dupes) {
            var item = processor(contains_dupes[i]);

            if (typeof item !== 'string' && item instanceof String === false) {
                throw new Error("Each processed item in dedupe must be a string.");
            }

            var matches = extract(item, contains_dupes, options);

            if (options.returnObjects) {
                if (matches.length === 1) {
                    if (options.keepmap) uniqueItems[processor(matches[0].choice)] = { item: matches[0].choice, key: matches[0].key, matches: matches};
                    else uniqueItems[processor(matches[0].choice)] = {item: matches[0].choice, key: matches[0].key};
                }
                else {
                    // take longest, break tie by string compare
                    matches = matches.sort(function (a, b) {
                        var pa = processor(a.choice);
                        var pb = processor(b.choice);
                        var aLen = pa.length;
                        var bLen = pb.length;
                        if (aLen === bLen) {
                            if (pa < pb) return -1;
                            else return 1;
                        }
                        else return bLen - aLen;
                    });
                    if (options.keepmap) uniqueItems[processor(matches[0].choice)] = { item: matches[0].choice, key: matches[0].key, matches: matches };
                    else uniqueItems[processor(matches[0].choice)] = {item: matches[0].choice, key: matches[0].key};
                }
            }
            else {
                if (matches.length === 1) {
                    if (options.keepmap) uniqueItems[processor(matches[0][0])] = [matches[0][0], matches[0][2], matches];
                    else uniqueItems[processor(matches[0][0])] = [matches[0][0], matches[0][2]];
                }
                else {
                    // take longest, break tie by string compare
                    matches = matches.sort(function (a, b) {
                        var pa = processor(a[0]);
                        var pb = processor(b[0]);
                        var aLen = pa.length;
                        var bLen = pb.length;
                        if (aLen === bLen) {
                            if (pa < pb) return -1;
                            else return 1;
                        }
                        else return bLen - aLen;
                    });
                    if (options.keepmap) uniqueItems[processor(matches[0][0])] = [matches[0][0], matches[0][2], matches];
                    else uniqueItems[processor(matches[0][0])] = [matches[0][0], matches[0][2]];
                }
            }            
        }

        var uniqueVals = [];

        for (var u in uniqueItems) {
            uniqueVals.push(uniqueItems[u]);
        }

        return uniqueVals;
    }

    return module
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* inherited from awesomplete : https://github.com/LeaVerou/awesomplete */
(function () {
    var _ = __webpack_require__(1);
    var $ = _.$;
    var defaultConfig = __webpack_require__(2).autocomplete;
    var fold = __webpack_require__(27);
    var fuzz = __webpack_require__(3);
    var Autocomplete = function (input, options) {
        var me = this;

        // Keep track of number of instances for unique IDs
        Autocomplete.count = (Autocomplete.count || 0) + 1;
        this.count = Autocomplete.count;

        // Setup

        this.isOpened = false;

        this.input = $(input);
        this.input.setAttribute("autocomplete", "off");
        this.input.setAttribute("aria-owns", "autocomplete_list_" + this.count);
        this.input.setAttribute("role", "combobox");

        options = options || {};
        defaultConfig.data = Autocomplete.DATA;
        defaultConfig.filter = Autocomplete.FILTER_CONTAINS;
        defaultConfig.item = Autocomplete.ITEM;
        defaultConfig.replace = Autocomplete.REPLACE;

        _.configure(this, defaultConfig, options);

        this.index = -1;

        // Create necessary elements

        this.container = $.create("div", {
            className: "autocomplete",
            around: input
        });

        this.ul = $.create("ul", {
            hidden: "hidden",
            role: "listbox",
            id: "autocomplete_list_" + this.count,
            inside: this.container
        });

        this.status = $.create("span", {
            className: "visually-hidden",
            role: "status",
            "aria-live": "assertive",
            "aria-atomic": true,
            inside: this.container,
            textContent: this.minChars !== 0 ? ("Type " + this.minChars + " or more characters for results.") : "Begin typing for results."
        });

        // Bind events

        this._events = {
            input: {
                "blur": this.close.bind(this, {reason: "blur"}),
                "keydown": function (evt) {
                    var c = evt.keyCode;

                    // If the dropdown `ul` is in view, then act on keydown for the following keys:
                    // Enter / Esc / Up / Down
                    if (me.opened) {
                        if (c === 13 && me.selected) { // Enter
                            evt.preventDefault();
                            me.select();
                        } else if (c === 27) { // Esc
                            me.close({reason: "esc"});
                        } else if (c === 38 || c === 40) { // Down/Up arrow
                            evt.preventDefault();
                            me[c === 38 ? "previous" : "next"]();
                        }
                    }
                }
            },
            form: {
                "submit": this.close.bind(this, {reason: "submit"})
            },
            ul: {
                "mousedown": function (evt) {
                    var li = evt.target;

                    if (li !== this) {

                        while (li && !/li/i.test(li.nodeName)) {
                            li = li.parentNode;
                        }

                        if (li && evt.button === 0) {  // Only select on left click
                            evt.preventDefault();
                            me.select(li, evt.target);
                        }
                    }
                }
            }
        };

        $.bind(this.input, this._events.input);
        $.bind(this.input.form, this._events.form);
        $.bind(this.ul, this._events.ul);

        if (this.input.hasAttribute("list")) {
            this.list = "#" + this.input.getAttribute("list");
            this.input.removeAttribute("list");
        } else {
            this.list = this.input.getAttribute("data-list") || options.list || [];
        }

        Autocomplete.all.push(this);
    };

    Autocomplete.prototype = {
        set list(list) {
            if (Array.isArray(list)) {
                this._list = list;
            } else if (typeof list === "string" && list.indexOf(",") > -1) {
                this._list = list.split(/\s*,\s*/);
            } else { // Element or CSS selector
                list = $(list);

                if (list && list.children) {
                    var items = [];
                    slice.apply(list.children).forEach(function (el) {
                        if (!el.disabled) {
                            var text = el.textContent.trim();
                            var value = el.value || text;
                            var label = el.label || text;
                            if (value !== "") {
                                items.push({label: label, value: value});
                            }
                        }
                    });
                    this._list = items;
                }
            }

            if (document.activeElement === this.input) {
                this.evaluate();
            }
        },

        get selected() {
            return this.index > -1;
        },

        get opened() {
            return this.isOpened;
        },

        close: function (o) {
            if (!this.opened) {
                return;
            }

            this.ul.setAttribute("hidden", "");
            this.isOpened = false;
            this.index = -1;

            $.fire(this.input, "autocomplete-close", o || {});
        },

        open: function () {
            this.ul.removeAttribute("hidden");
            this.isOpened = true;

            if (this.autoFirst && this.index === -1) {
                this.goto(0);
            }

            $.fire(this.input, "autocomplete-open");
        },

        destroy: function () {
            //remove events from the input and its form
            $.unbind(this.input, this._events.input);
            $.unbind(this.input.form, this._events.form);

            //move the input out of the autocomplete container and remove the container and its children
            var parentNode = this.container.parentNode;

            parentNode.insertBefore(this.input, this.container);
            parentNode.removeChild(this.container);

            //remove autocomplete and aria-autocomplete attributes
            this.input.removeAttribute("autocomplete");
            this.input.removeAttribute("aria-autocomplete");

            //remove this awesomeplete instance from the global array of instances
            var indexOfAutocomplete = Autocomplete.all.indexOf(this);

            if (indexOfAutocomplete !== -1) {
                Autocomplete.all.splice(indexOfAutocomplete, 1);
            }
        },

        next: function () {
            var count = this.ul.children.length;
            this.goto(this.index < count - 1 ? this.index + 1 : (count ? 0 : -1));
        },

        previous: function () {
            var count = this.ul.children.length;
            var pos = this.index - 1;

            this.goto(this.selected && pos !== -1 ? pos : count - 1);
        },

        // Should not be used, highlights specific item without any checks!
        goto: function (i) {
            var lis = this.ul.children;

            if (this.selected) {
                lis[this.index].setAttribute("aria-selected", "false");
            }

            this.index = i;

            if (i > -1 && lis.length > 0) {
                lis[i].setAttribute("aria-selected", "true");

                this.status.textContent = lis[i].textContent + ", list item " + (i + 1) + " of " + lis.length;

                this.input.setAttribute("aria-activedescendant", this.ul.id + "_item_" + this.index);

                // scroll to highlighted element in case parent's height is fixed
                this.ul.scrollTop = lis[i].offsetTop - this.ul.clientHeight + lis[i].clientHeight;

                $.fire(this.input, "autocomplete-highlight", {
                    text: this.suggestions[this.index]
                });
            }
        },

        select: function (selected, origin) {
            if (selected) {
                this.index = $.siblingIndex(selected);
            } else {
                selected = this.ul.children[this.index];
            }

            if (selected) {
                var suggestion = this.suggestions[this.index];

                var allowed = $.fire(this.input, "autocomplete-select", {
                    text: suggestion,
                    origin: origin || selected
                });

                if (allowed) {
                    this.replace(suggestion);
                    this.close({reason: "select"});
                    $.fire(this.input, "autocomplete-selectcomplete", {
                        text: suggestion
                    });
                }
            }
        },

        evaluate: function () {
            var me = this;
            var value = this.input.value;

            if (value.length >= this.minChars && this._list.length > 0) {
                this.index = -1;
                // Populate list with options that match
                this.ul.innerHTML = "";

                this.suggestions = this._list
                    .map(function (item) {
                        return new Suggestion(me.data(item, value));
                    })
                    .filter(function (item) {
                        return me.filter(item, value);
                    });

                if (this.sort !== false) {
                    this.suggestions = this.suggestions.sort(this.sort);
                }

                this.suggestions = this.suggestions.slice(0, this.maxItems);

                this.suggestions.forEach(function (text, index) {
                    me.ul.appendChild(me.item(text, value, index));
                });

                if (this.ul.children.length === 0) {

                    this.status.textContent = "No results found";

                    this.close({reason: "nomatches"});

                } else {
                    this.open();

                    this.status.textContent = this.ul.children.length + " results found";
                }
            } else {
                this.close({reason: "nomatches"});

                this.status.textContent = "No results found";
            }
        }
    };

// Static methods/properties

    Autocomplete.all = [];

    Autocomplete.FILTER_CONTAINS = function (text, input) {
        return RegExp($.regExpEscape(input.trim()), "i").test(text);
    };

    Autocomplete.FILTER_STARTSWITH = function (text, input) {
        return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
    };

    Autocomplete.SORT_BYLENGTH = function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a < b ? -1 : 1;
    };

    Autocomplete.ITEM = function (text, input, item_id, secondary_text) {
        var html = "";
        var label = text.label;
        if (Array.isArray(input)) {
            var returnText = [];
            for (var i = 0; i < input.length; i++) {
                var startOfNext = 0;
                if (input[i + 1]) {
                    startOfNext = input[i + 1].offset;
                }
                if (i === 0) {
                    returnText.push(Autocomplete.HIGHLIGHTPART(label, input[i], 0, startOfNext));
                } else {
                    returnText.push(Autocomplete.HIGHLIGHTPART(label, input[i], input[i].offset, startOfNext));
                }
            }
            html = returnText.join("");
        } else {
            html = input === "" ? label : Autocomplete.HIGHLIGHT(label, fold(fuzz.full_process(label)), fold(fuzz.full_process(input.trim())));
        }
        if (typeof secondary_text !== 'undefined' && typeof secondary_text === "string") {
            html = html.replaceLast(secondary_text, "<span class='secondary-text'>" + secondary_text + "</span>");
        }
        return $.create("li", {
            innerHTML: "<span class='locality-icon'></span><span class='locality-text'>" + html + "</span>",
            "aria-selected": "false",
            "class": text.metadata.typeClass,
            "ratio": text.metadata.ratio ? text.metadata.ratio : 0,
            "id": "autocomplete_list_" + this.count + "_item_" + item_id
        });
    };

    Autocomplete.HIGHLIGHTPART = function (text, matched_substring, start, end) {
        var highlightTextStart = matched_substring.offset;
        var highlightTextEnd = highlightTextStart + matched_substring.length;
        var beforeText = text.slice(start, highlightTextStart);
        var highlightedText = text.slice(highlightTextStart, highlightTextEnd);
        var afterText = text.slice(highlightTextEnd, end || text.length);
        return [beforeText + "<mark>" + highlightedText + "</mark>" + afterText];
    };

    Autocomplete.HIGHLIGHT = function (text, textFolded, inputFolded) {
        var re = new RegExp($.regExpEscape(inputFolded), 'g');
        var hilite_hints = textFolded.replace(re, '<' + inputFolded + '>');
        var spos = 0;
        var highlighted = '';
        for (var i = 0; i < hilite_hints.length; i++) {
            var c = text.charAt(spos);
            var h = hilite_hints.charAt(i);
            if (h === '<') {
                highlighted += '<mark>';
            } else if (h === '>') {
                highlighted += '</mark>';
            } else {
                spos += 1;
                highlighted += c;
            }
        }
        return highlighted;
    };
    Autocomplete.REPLACE = function (text) {
        this.input.value = text.value;
    };

    Autocomplete.DATA = function (item/*, input*/) {
        return item;
    };

// Private functions

    function Suggestion(data) {
        var o = Array.isArray(data)
            ? {label: data[0], value: data[1], metadata: data[2]}
            : typeof data === "object" && "label" in data && "value" in data && "metadata" in data ? data : {
                label: data,
                value: data,
                metadata: data
            };

        this.label = o.label || o.value;
        this.value = o.value;
        this.metadata = o.metadata;
    }

    Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
        get: function () {
            return this.label.length;
        }
    });
    Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
        return "" + this.label;
    };
    String.prototype.reverse = function () {
        return this.split('').reverse().join('');
    };

    String.prototype.replaceLast = function (what, replacement) {
        return this.replace(new RegExp($.regExpEscape(what) + '$'), replacement);
    };
// Helpers

    $.create = function (tag, o) {
        var element = document.createElement(tag);

        for (var i in o) {
            var val = o[i];

            if (i === "inside") {
                $(val).appendChild(element);
            } else if (i === "around") {
                var ref = $(val);
                ref.parentNode.insertBefore(element, ref);
                element.appendChild(ref);
            } else if (i in element) {
                element[i] = val;
            } else {
                element.setAttribute(i, val);
            }
        }

        return element;
    };

    $.bind = function (element, o) {
        if (element) {
            for (var event in o) {
                var callback = o[event];

                event.split(/\s+/).forEach(function (event) {
                    element.addEventListener(event, callback);
                });
            }
        }
    };

    $.unbind = function (element, o) {
        if (element) {
            for (var event in o) {
                var callback = o[event];

                event.split(/\s+/).forEach(function (event) {
                    element.removeEventListener(event, callback);
                });
            }
        }
    };

    $.fire = function (target, type, properties) {
        var evt = document.createEvent("HTMLEvents");

        evt.initEvent(type, true, true);

        for (var j in properties) {
            evt[j] = properties[j];
        }

        return target.dispatchEvent(evt);
    };

    $.regExpEscape = function (s) {
        return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    };

    $.siblingIndex = function (el) {
        /* eslint-disable no-cond-assign */
        for (var i = 0; el = el.previousElementSibling; i++) ;
        return i;
    };

    Autocomplete.$ = $;

// Make sure to export Autocomplete on self when in a browser
    if (typeof self !== "undefined") {
        self.Autocomplete = Autocomplete;
    }

// Expose Autocomplete as a CJS module
    if (typeof module === "object" && module.exports) {
        module.exports = Autocomplete;
    }

    return Autocomplete;

}());


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accentMap = __webpack_require__(28);

module.exports = input => {
	if (!input) {
		return '';
	}

	var str = '';
	var i = null;

	for (i = 0; i < input.length; i++) {
		str += accentMap[input.charAt(i)] || input.charAt(i).toLowerCase();
	}

	return str;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {"ẚ":"a","Á":"a","á":"a","À":"a","à":"a","Ă":"a","ă":"a","Ắ":"a","ắ":"a","Ằ":"a","ằ":"a","Ẵ":"a","ẵ":"a","Ẳ":"a","ẳ":"a","Â":"a","â":"a","Ấ":"a","ấ":"a","Ầ":"a","ầ":"a","Ẫ":"a","ẫ":"a","Ẩ":"a","ẩ":"a","Ǎ":"a","ǎ":"a","Å":"a","å":"a","Ǻ":"a","ǻ":"a","Ä":"a","ä":"a","Ǟ":"a","ǟ":"a","Ã":"a","ã":"a","Ȧ":"a","ȧ":"a","Ǡ":"a","ǡ":"a","Ą":"a","ą":"a","Ā":"a","ā":"a","Ả":"a","ả":"a","Ȁ":"a","ȁ":"a","Ȃ":"a","ȃ":"a","Ạ":"a","ạ":"a","Ặ":"a","ặ":"a","Ậ":"a","ậ":"a","Ḁ":"a","ḁ":"a","Ⱥ":"a","ⱥ":"a","Ǽ":"a","ǽ":"a","Ǣ":"a","ǣ":"a","Ḃ":"b","ḃ":"b","Ḅ":"b","ḅ":"b","Ḇ":"b","ḇ":"b","Ƀ":"b","ƀ":"b","ᵬ":"b","Ɓ":"b","ɓ":"b","Ƃ":"b","ƃ":"b","Ć":"c","ć":"c","Ĉ":"c","ĉ":"c","Č":"c","č":"c","Ċ":"c","ċ":"c","Ç":"c","ç":"c","Ḉ":"c","ḉ":"c","Ȼ":"c","ȼ":"c","Ƈ":"c","ƈ":"c","ɕ":"c","Ď":"d","ď":"d","Ḋ":"d","ḋ":"d","Ḑ":"d","ḑ":"d","Ḍ":"d","ḍ":"d","Ḓ":"d","ḓ":"d","Ḏ":"d","ḏ":"d","Đ":"d","đ":"d","ᵭ":"d","Ɖ":"d","ɖ":"d","Ɗ":"d","ɗ":"d","Ƌ":"d","ƌ":"d","ȡ":"d","ð":"d","É":"e","Ə":"e","Ǝ":"e","ǝ":"e","é":"e","È":"e","è":"e","Ĕ":"e","ĕ":"e","Ê":"e","ê":"e","Ế":"e","ế":"e","Ề":"e","ề":"e","Ễ":"e","ễ":"e","Ể":"e","ể":"e","Ě":"e","ě":"e","Ë":"e","ë":"e","Ẽ":"e","ẽ":"e","Ė":"e","ė":"e","Ȩ":"e","ȩ":"e","Ḝ":"e","ḝ":"e","Ę":"e","ę":"e","Ē":"e","ē":"e","Ḗ":"e","ḗ":"e","Ḕ":"e","ḕ":"e","Ẻ":"e","ẻ":"e","Ȅ":"e","ȅ":"e","Ȇ":"e","ȇ":"e","Ẹ":"e","ẹ":"e","Ệ":"e","ệ":"e","Ḙ":"e","ḙ":"e","Ḛ":"e","ḛ":"e","Ɇ":"e","ɇ":"e","ɚ":"e","ɝ":"e","Ḟ":"f","ḟ":"f","ᵮ":"f","Ƒ":"f","ƒ":"f","Ǵ":"g","ǵ":"g","Ğ":"g","ğ":"g","Ĝ":"g","ĝ":"g","Ǧ":"g","ǧ":"g","Ġ":"g","ġ":"g","Ģ":"g","ģ":"g","Ḡ":"g","ḡ":"g","Ǥ":"g","ǥ":"g","Ɠ":"g","ɠ":"g","Ĥ":"h","ĥ":"h","Ȟ":"h","ȟ":"h","Ḧ":"h","ḧ":"h","Ḣ":"h","ḣ":"h","Ḩ":"h","ḩ":"h","Ḥ":"h","ḥ":"h","Ḫ":"h","ḫ":"h","H":"h","̱":"h","ẖ":"h","Ħ":"h","ħ":"h","Ⱨ":"h","ⱨ":"h","Í":"i","í":"i","Ì":"i","ì":"i","Ĭ":"i","ĭ":"i","Î":"i","î":"i","Ǐ":"i","ǐ":"i","Ï":"i","ï":"i","Ḯ":"i","ḯ":"i","Ĩ":"i","ĩ":"i","İ":"i","i":"i","Į":"i","į":"i","Ī":"i","ī":"i","Ỉ":"i","ỉ":"i","Ȉ":"i","ȉ":"i","Ȋ":"i","ȋ":"i","Ị":"i","ị":"i","Ḭ":"i","ḭ":"i","I":"i","ı":"i","Ɨ":"i","ɨ":"i","Ĵ":"j","ĵ":"j","J":"j","̌":"j","ǰ":"j","ȷ":"j","Ɉ":"j","ɉ":"j","ʝ":"j","ɟ":"j","ʄ":"j","Ḱ":"k","ḱ":"k","Ǩ":"k","ǩ":"k","Ķ":"k","ķ":"k","Ḳ":"k","ḳ":"k","Ḵ":"k","ḵ":"k","Ƙ":"k","ƙ":"k","Ⱪ":"k","ⱪ":"k","Ĺ":"a","ĺ":"l","Ľ":"l","ľ":"l","Ļ":"l","ļ":"l","Ḷ":"l","ḷ":"l","Ḹ":"l","ḹ":"l","Ḽ":"l","ḽ":"l","Ḻ":"l","ḻ":"l","Ł":"l","ł":"l","̣":"l","Ŀ":"l","ŀ":"l","Ƚ":"l","ƚ":"l","Ⱡ":"l","ⱡ":"l","Ɫ":"l","ɫ":"l","ɬ":"l","ɭ":"l","ȴ":"l","Ḿ":"m","ḿ":"m","Ṁ":"m","ṁ":"m","Ṃ":"m","ṃ":"m","ɱ":"m","Ń":"n","ń":"n","Ǹ":"n","ǹ":"n","Ň":"n","ň":"n","Ñ":"n","ñ":"n","Ṅ":"n","ṅ":"n","Ņ":"n","ņ":"n","Ṇ":"n","ṇ":"n","Ṋ":"n","ṋ":"n","Ṉ":"n","ṉ":"n","Ɲ":"n","ɲ":"n","Ƞ":"n","ƞ":"n","ɳ":"n","ȵ":"n","N":"n","̈":"t","n":"n","Ó":"o","ó":"o","Ò":"o","ò":"o","Ŏ":"o","ŏ":"o","Ô":"o","ô":"o","Ố":"o","ố":"o","Ồ":"o","ồ":"o","Ỗ":"o","ỗ":"o","Ổ":"o","ổ":"o","Ǒ":"o","ǒ":"o","Ö":"o","ö":"o","Ȫ":"o","ȫ":"o","Ő":"o","ő":"o","Õ":"o","õ":"o","Ṍ":"o","ṍ":"o","Ṏ":"o","ṏ":"o","Ȭ":"o","ȭ":"o","Ȯ":"o","ȯ":"o","Ȱ":"o","ȱ":"o","Ø":"o","ø":"o","Ǿ":"o","ǿ":"o","Ǫ":"o","ǫ":"o","Ǭ":"o","ǭ":"o","Ō":"o","ō":"o","Ṓ":"o","ṓ":"o","Ṑ":"o","ṑ":"o","Ỏ":"o","ỏ":"o","Ȍ":"o","ȍ":"o","Ȏ":"o","ȏ":"o","Ơ":"o","ơ":"o","Ớ":"o","ớ":"o","Ờ":"o","ờ":"o","Ỡ":"o","ỡ":"o","Ở":"o","ở":"o","Ợ":"o","ợ":"o","Ọ":"o","ọ":"o","Ộ":"o","ộ":"o","Ɵ":"o","ɵ":"o","Ṕ":"p","ṕ":"p","Ṗ":"p","ṗ":"p","Ᵽ":"p","Ƥ":"p","ƥ":"p","P":"p","̃":"p","p":"p","ʠ":"q","Ɋ":"q","ɋ":"q","Ŕ":"r","ŕ":"r","Ř":"r","ř":"r","Ṙ":"r","ṙ":"r","Ŗ":"r","ŗ":"r","Ȑ":"r","ȑ":"r","Ȓ":"r","ȓ":"r","Ṛ":"r","ṛ":"r","Ṝ":"r","ṝ":"r","Ṟ":"r","ṟ":"r","Ɍ":"r","ɍ":"r","ᵲ":"r","ɼ":"r","Ɽ":"r","ɽ":"r","ɾ":"r","ᵳ":"r","ß":"s","Ś":"s","ś":"s","Ṥ":"s","ṥ":"s","Ŝ":"s","ŝ":"s","Š":"s","š":"s","Ṧ":"s","ṧ":"s","Ṡ":"s","ṡ":"s","ẛ":"s","Ş":"s","ş":"s","Ṣ":"s","ṣ":"s","Ṩ":"s","ṩ":"s","Ș":"s","ș":"s","ʂ":"s","S":"s","̩":"s","s":"s","Þ":"t","þ":"t","Ť":"t","ť":"t","T":"t","ẗ":"t","Ṫ":"t","ṫ":"t","Ţ":"t","ţ":"t","Ṭ":"t","ṭ":"t","Ț":"t","ț":"t","Ṱ":"t","ṱ":"t","Ṯ":"t","ṯ":"t","Ŧ":"t","ŧ":"t","Ⱦ":"t","ⱦ":"t","ᵵ":"t","ƫ":"t","Ƭ":"t","ƭ":"t","Ʈ":"t","ʈ":"t","ȶ":"t","Ú":"u","ú":"u","Ù":"u","ù":"u","Ŭ":"u","ŭ":"u","Û":"u","û":"u","Ǔ":"u","ǔ":"u","Ů":"u","ů":"u","Ü":"u","ü":"u","Ǘ":"u","ǘ":"u","Ǜ":"u","ǜ":"u","Ǚ":"u","ǚ":"u","Ǖ":"u","ǖ":"u","Ű":"u","ű":"u","Ũ":"u","ũ":"u","Ṹ":"u","ṹ":"u","Ų":"u","ų":"u","Ū":"u","ū":"u","Ṻ":"u","ṻ":"u","Ủ":"u","ủ":"u","Ȕ":"u","ȕ":"u","Ȗ":"u","ȗ":"u","Ư":"u","ư":"u","Ứ":"u","ứ":"u","Ừ":"u","ừ":"u","Ữ":"u","ữ":"u","Ử":"u","ử":"u","Ự":"u","ự":"u","Ụ":"u","ụ":"u","Ṳ":"u","ṳ":"u","Ṷ":"u","ṷ":"u","Ṵ":"u","ṵ":"u","Ʉ":"u","ʉ":"u","Ṽ":"v","ṽ":"v","Ṿ":"v","ṿ":"v","Ʋ":"v","ʋ":"v","Ẃ":"w","ẃ":"w","Ẁ":"w","ẁ":"w","Ŵ":"w","ŵ":"w","W":"w","̊":"y","ẘ":"w","Ẅ":"w","ẅ":"w","Ẇ":"w","ẇ":"w","Ẉ":"w","ẉ":"w","Ẍ":"x","ẍ":"x","Ẋ":"x","ẋ":"x","Ý":"y","ý":"y","Ỳ":"y","ỳ":"y","Ŷ":"y","ŷ":"y","Y":"y","ẙ":"y","Ÿ":"y","ÿ":"y","Ỹ":"y","ỹ":"y","Ẏ":"y","ẏ":"y","Ȳ":"y","ȳ":"y","Ỷ":"y","ỷ":"y","Ỵ":"y","ỵ":"y","ʏ":"y","Ɏ":"y","ɏ":"y","Ƴ":"y","ƴ":"y","Ź":"z","ź":"z","Ẑ":"z","ẑ":"z","Ž":"z","ž":"z","Ż":"z","ż":"z","Ẓ":"z","ẓ":"z","Ẕ":"z","ẕ":"z","Ƶ":"z","ƶ":"z","Ȥ":"z","ȥ":"z","ʐ":"z","ʑ":"z","Ⱬ":"z","ⱬ":"z","Ǯ":"z","ǯ":"z","ƺ":"z","２":"2","６":"6","Ｂ":"B","Ｆ":"F","Ｊ":"J","Ｎ":"N","Ｒ":"R","Ｖ":"V","Ｚ":"Z","ｂ":"b","ｆ":"f","ｊ":"j","ｎ":"n","ｒ":"r","ｖ":"v","ｚ":"z","１":"1","５":"5","９":"9","Ａ":"A","Ｅ":"E","Ｉ":"I","Ｍ":"M","Ｑ":"Q","Ｕ":"U","Ｙ":"Y","ａ":"a","ｅ":"e","ｉ":"i","ｍ":"m","ｑ":"q","ｕ":"u","ｙ":"y","０":"0","４":"4","８":"8","Ｄ":"D","Ｈ":"H","Ｌ":"L","Ｐ":"P","Ｔ":"T","Ｘ":"X","ｄ":"d","ｈ":"h","ｌ":"l","ｐ":"p","ｔ":"t","ｘ":"x","３":"3","７":"7","Ｃ":"C","Ｇ":"G","Ｋ":"K","Ｏ":"O","Ｓ":"S","Ｗ":"W","ｃ":"c","ｇ":"g","ｋ":"k","ｏ":"o","ｓ":"s","ｗ":"w"}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

(() => {
    const _ = __webpack_require__(1);
    const fuzz = __webpack_require__(3);
    const defaultConfig = __webpack_require__(2).woosmap;

    class Woosmap {
        constructor(input, options) {
            const me = this;
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
            this._loadWoosmapLocalities(() => {
                me.woosmapLocalities = new woosmap.localities.AutocompleteService(me.projectKey);
            });
        }

        getQueryPredictions(searchTerm, callback) {
            this.woosmapLocalities.getQueryPredictions({
                input: searchTerm,
                types: this.types.join("|"),
                data: this.data,
                components: this.componentRestrictions,
                language: this.language,
            }, ({localities}) => {
                const list = localities.map((data, index) => {
                    data.index = index;
                    data.label = data.description;
                    data.value = data.description;
                    data.typeClass = "woosmap " + data.type;
                    data.dataType = "woosmap";
                    data.searchedTerm = searchTerm;
                    data.ratio = fuzz.partial_ratio(searchTerm, data.label, {useCollator: true});
                    return {label: data.label, value: data.value, metadata: data};
                });
                callback(list, searchTerm);
            });
        }

        _loadWoosmapLocalities(callback) {
            if (typeof this.woosmapLocalities !== 'undefined')
                return;
            _.getScript(defaultConfig.localitiesLibUrl, () => {
                if (callback) {
                    callback();
                }
            });

        }
    }

    if (typeof self !== "undefined") {
        self.Woosmap = Woosmap;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = Woosmap;
    }

    return Woosmap;
})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

(() => {
    const _ = __webpack_require__(1);
    const fuzz = __webpack_require__(3);
    const defaultConfig = __webpack_require__(2).woosmap;

    class WoosmapAddress {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
        }

        buildComponents(components) {
            if (components !== undefined) {
                let componentParts = [];
                for (let key of Object.keys(components)) {
                    let value = components[key];
                    if (Array.isArray(value)) {
                        for (let subValue of value) {
                            componentParts.push(`${key}:${subValue}`);
                        }
                    } else {
                        componentParts.push(`${key}:${value}`);
                    }
                }
                return componentParts.join('|');
            }
        }

        buildParams() {
            const components = this.buildComponents(this.addressComponentRestrictions);
            const urlParams = {
                key: this.projectKey
            };
            if (this.language.length > 0) {
                urlParams.language = this.language;
            }
            if (components.length > 0) {
                urlParams.components = components;
            }
            return urlParams;
        }

        getQueryPredictions(searchTerm, callback) {
            const urlParams = this.buildParams();
            urlParams.input = searchTerm;
            let url = `${this.addressApiUrl}autocomplete/json?${_.buildQueryString(urlParams)}`;
            _.makeRequest({url: url}, function (response) {
                    const list = JSON.parse(response)["predictions"].map((data, index) => {
                        data.index = index + 5;
                        data.label = data.description;
                        data.typeClass = "woosmap " + data.type;
                        data.dataType = "woosmapaddress";
                        data.searchedTerm = searchTerm;
                        data.ratio = fuzz.partial_ratio(fuzz.full_process(searchTerm), data.label);
                        return {label: data.label, value: data.description, metadata: data};
                    });
                    callback(list, searchTerm);
                }.bind(this),
                function (statusText) {
                    console.error('Error while recording analytics for ' + text_selected + ' (' + statusText + ')');
                });
        }

        getAddressDetails(address, callback) {
            const urlParams = this.buildParams(address);
            urlParams.address = address;
            let url = `${this.addressApiUrl}geocode/json?${_.buildQueryString(urlParams)}`;
            _.makeRequest({url: url}, function (response) {
                    const geocodedAddress = JSON.parse(response).results[0];
                    callback(geocodedAddress, address);
                }.bind(this),
                function (statusText) {
                    console.error('Error while recording analytics for ' + text_selected + ' (' + statusText + ')');
                });
        }
    }

    if (typeof self !== "undefined") {
        self.WoosmapAddress = WoosmapAddress;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = WoosmapAddress;
    }

    return WoosmapAddress;
})();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

(() => {
    const _ = __webpack_require__(1);
    const defaultConfig = __webpack_require__(2).analytics;

    class Analytics {
        constructor(input, options) {
            this.input = _.$(input);
            _.configure(this, defaultConfig, options);
            if (this.tracking) {
                const ga = window[window['GoogleAnalyticsObject'] || 'ga'];
                if (typeof ga !== 'function') {
                    this._loadGoogleAnalytics();
                }
            }
        }

        trackSearch(source, id, text_input, text_selected, type) {
            if (window.ga) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: `${source}`,
                    eventAction: `${type[0]}`,
                    eventLabel: `${text_input} ({label:"${text_selected}",id:"${id}")`
                });
            }
        }

        _loadGoogleAnalytics(callback) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                };
                i[r].l = 1 * new Date();
                a = s.createElement(o);
                m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            if (window.ga) {
                window.ga('create', this.analyticsKey, 'auto');
            }
            if (callback) {
                callback();
            }
        }
    }

    if (typeof self !== "undefined") {
        self.Analytics = Analytics;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = Analytics;
    }

    return Analytics;
})();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);