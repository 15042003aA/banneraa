(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function g(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function h(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:g(a)}}var l=this||self;function m(a,b){a=a.split(".");var c=l;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function n(a){this.h="";this.i=[];this.g="";if(a)if("string"==typeof a)a:{this.h="";this.i=[];this.g="";var b=a.split(" "),c=""==b[0];a="";for(var d=[],e=c?1:0;e<b.length;e++)if(b[e])a?d.push(b[e]):a=b[e];else break a;a&&(c?this.g=a:this.h=a,this.i=d)}else a:if(this.h="",this.i=[],this.g="",a){c=(b=a.getAttribute("data-gwd-group-def")||"")?[]:[a];for(a=a.parentElement;a&&!b;)a.hasAttribute("data-gwd-group")?c.push(a):b=a.getAttribute("data-gwd-group-def"),a=a.parentElement;c=c.reverse();a=!!b;d=c[0];
if(a||d.id){e=[];for(var f=a?0:1;f<c.length;f++){var k=c[f].getAttribute("data-gwd-grp-id");if(!k)break a;e.push(k)}this.h=a?"":d.id;this.i=e;this.g=b||""}}}function p(a,b){if(!a.g)return null;for(var c=b;c;){var d=c.getAttribute("data-gwd-group");if(d==a.g)break;c=d&&c!=b?null:c.parentElement}return c?q(a,c):null}
function q(a,b){for(var c=0;b&&c<a.i.length;c++){for(var d=b.querySelector('[data-gwd-grp-id="'+a.i[c]+'"]'),e=d?d.parentElement:null;d&&e&&e!=b;)e.hasAttribute("data-gwd-group")?d=null:e=e.parentElement;b=d}return b};function r(a){var b=new n(a);if(!b.h&&t)b=p(b,t);else a:{var c=document;if(b.g)var d=c.querySelector('[data-gwd-group-def="'+b.g+'"]');else if(b.h){if(d=c.getElementById(b.h),!d){var e=c.querySelector("gwd-pagedeck");e?"function"==typeof e.getElementById&&(d=e.getElementById(b.h)):"document.body"==b.h&&(d=c.body)}}else{b=null;break a}b=q(b,d)}if(!b)switch(a){case "document.body":b=document.body;break;case "document":b=document;break;case "window":b=window}return b}
m("gwd.actions.events.getElementById",r);m("gwd.actions.events.addHandler",function(a,b,c,d){var e=new n(a),f=e.g;if(""!==f)for(a=h(document.querySelectorAll("[data-gwd-group = "+f+"]")),f=a.next();!f.done;f=a.next()){if(f=p(e,f.value))c.gwd_actualHandler||(c.gwd_actualHandler=u.bind(null,c)),f.addEventListener(b,c.gwd_actualHandler,d)}else(e=r(a))&&e.addEventListener(b,c,d)});
m("gwd.actions.events.removeHandler",function(a,b,c,d){var e=new n(a),f=e.g;if(""!==f)for(a=h(document.querySelectorAll("[data-gwd-group = "+f+"]")),f=a.next();!f.done;f=a.next())(f=p(e,f.value))&&c.gwd_actualHandler&&f.removeEventListener(b,c.gwd_actualHandler,d);else(e=r(a))&&" "!=a[0]&&e.removeEventListener(b,c,d)});
m("gwd.actions.events.setInlineStyle",function(a,b){function c(f){var k=f.target;k.style.transition=d;k.removeEventListener(f.type,c,!1)}if((a=r(a))&&b){var d=a.style[void 0!==a.style.transition?"transition":"-webkit-transition"];b=h(b.split(/\s*;\s*/));for(var e=b.next();!e.done;e=b.next())if(e=e.value){e=e.split(RegExp("[:](?![/]{2})"));e[1]=e[1]?e[1].trim():"";if(!e[0]||!e[1])return;a.style.setProperty(e[0],e[1])}a.addEventListener("transitionend",c,!1);a.addEventListener("webkitTransitionEnd",
c,!1)}});var t=null;function u(a,b){t=b.target;a.call(null,b)}function v(a){var b=a.target;if(b){var c=b.getAttribute("data-event-name");c&&(a.stopPropagation(),a=document.createEvent("CustomEvent"),a.initCustomEvent(c,!0,!0,null),b.dispatchEvent(a))}}m("gwd.actions.timeline.dispatchTimedEvent",v);m("gwd.actions.timeline.captureAnimationEnd",function(a){if(a)for(var b=["animationend","webkitAnimationEnd"],c=0;c<b.length;c++)a.addEventListener(b[c],v,!0)});
m("gwd.actions.timeline.releaseAnimationEnd",function(a){if(a)for(var b=["animationend","webkitAnimationEnd"],c=0;c<b.length;c++)a.removeEventListener(b[c],v,!0)});m("gwd.actions.timeline.pauseAnimationClassName","gwd-pause-animation");m("gwd.actions.timeline.CURRENT_LABEL_ANIMATION","data-gwd-current-label");m("gwd.actions.timeline.pause",function(a){(a=r(a))&&a.classList&&a.classList.add("gwd-pause-animation")});function w(a){(a=r(a))&&a.classList&&a.classList.remove("gwd-pause-animation")}
m("gwd.actions.timeline.play",w);m("gwd.actions.timeline.togglePlay",function(a){(a=r(a))&&a.classList&&a.classList.toggle("gwd-pause-animation")});function x(a,b){var c=r(a);if(!(c&&c.classList&&a&&b))return null;var d=c.getAttribute("data-gwd-current-label");d&&(c.classList.remove(d),c.removeAttribute("data-gwd-current-label"));w(a);d==b&&c.setAttribute("gwd-reflow",c.offsetWidth);c.classList.add(b);c.setAttribute("data-gwd-current-label",b);return c}
function y(a,b){var c=a.getAttribute("data-gwd-animation-labels");a=new Map;c=h((c||"").split(";"));for(var d=c.next();!d.done;d=c.next())if(d=d.value){var e=d.split(",");d=e[0].trim();e=parseInt(e[1],10);d&&!isNaN(e)&&a.set(d,{B:d,u:e})}return a.has(b)?a.get(b).u:-1}function z(a,b){if(a=x(a,b))if(b=y(a,b),0<=b){var c;null==(c=window.gwd.texteffects)||c.goToAndPlay(a,b)}}m("gwd.actions.timeline.gotoAndPlay",z);
m("gwd.actions.timeline.gotoAndPause",function(a,b){var c=r(a);if(!c||!c.classList)return!1;var d;x(a,b)&&(d=window.setTimeout(function(){c.classList.add("gwd-pause-animation")},40));a=y(c,b);if(0<=a){var e;null==(e=window.gwd.texteffects)||e.goToAndPause(c,a)}return!!d});m("gwd.actions.timeline.gotoAndPlayNTimes",function(a,b,c,d){var e=r(a);e.gwdGotoCounters=e.gwdGotoCounters||{};e=e.gwdGotoCounters;d=d+"_"+b+"_counter";"undefined"==typeof e[d]&&(e[d]=0);e[d]<c&&z(a,b);e[d]++});
m("gwd.actions.pageLayout.EVENT_ROTATE_PORTRAIT","rotatetoportrait");m("gwd.actions.pageLayout.EVENT_ROTATE_LANDSCAPE","rotatetolandscape");var A;function B(){var a=window.innerHeight>=window.innerWidth?1:2;if(A!=a){A=a;switch(a){case 1:var b="rotatetoportrait";break;case 2:b="rotatetolandscape"}a=document.createEvent("CustomEvent");a.initCustomEvent(b||"",!0,!0,null);document.body.dispatchEvent(a)}}
m("gwd.actions.pageLayout.initialize",function(){A=window.innerHeight>=window.innerWidth?1:2;window.addEventListener("resize",B,!0)});m("gwd.actions.tilt.EVENT_TILT","tilt");var C=NaN,D=NaN,E=NaN;
function F(a){function b(k){return!k&&0!=k}if(!(b(a.alpha)||b(a.beta)||b(a.gamma))){var c,d=null!=(c=a.alpha)?c:0,e;c=null!=(e=a.beta)?e:0;var f;a=null!=(f=a.gamma)?f:0;isNaN(C)?(C=d,D=c,E=a):1225>(C-d)*(C-d)+(D-c)*(D-c)+(E-a)*(E-a)||(C=d,D=c,E=a,f=document.createEvent("CustomEvent"),f.initCustomEvent("tilt",!0,!0,{alpha:d,beta:c,gamma:a}),document.body.dispatchEvent(f))}}m("gwd.actions.tilt.initialize",function(){window.addEventListener("deviceorientation",F,!0)});var G;
m("gwd.actions.deviceShake.initialize",function(){G||(G=new H,window.addEventListener("devicemotion",G.s,!1))});m("gwd.actions.deviceShake.dispose",function(){G&&window.removeEventListener("devicemotion",G.s,!1)});function H(){this.o=this.l=this.i=this.m=this.j=this.h=NaN;this.g=!1;this.s=this.v.bind(this)}
H.prototype.v=function(a){a=a.accelerationIncludingGravity;var b;this.i=null!=(b=a.x)?b:0;var c;this.l=null!=(c=a.y)?c:0;var d;this.o=null!=(d=a.z)?d:0;this.g||window.setTimeout(this.A.bind(this),200);this.g=!0};H.prototype.A=function(){var a=Math.abs(this.i-this.h),b=Math.abs(this.l-this.j),c=Math.abs(this.o-this.m);this.h=this.i;this.j=this.l;this.m=this.o;18<a+b+c?I(this):this.g=!1};
function I(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("shake",!0,!0,null);document.body.dispatchEvent(b);J(a);window.setTimeout(function(){this.g=!1}.bind(a),1E3)}function J(a){a.h=NaN;a.j=NaN;a.m=NaN}m("gwd.actions.deviceShake.ShakeHandler",H);}).call(this);
gwd.actions.gwdGenericad=gwd.actions.gwdGenericad||{};gwd.actions.gwdGenericad.exit=function(receiver,url,opt_collapseOnExit,opt_pageId){gwd.actions.events.getElementById(receiver).exit(url,opt_collapseOnExit,opt_pageId)}