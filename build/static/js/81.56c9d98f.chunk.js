(this.webpackJsonpatlasbounty=this.webpackJsonpatlasbounty||[]).push([[81],{462:function(t,o,i){"use strict";i.r(o),i.d(o,"ion_backdrop",(function(){return r}));var a=i(77),n=(i(15),i(40)),e=i(121),r=function(){function t(t){Object(a.l)(this,t),this.lastClick=-1e4,this.blocker=e.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(a.d)(this,"ionBackdropTap",7)}return t.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},t.prototype.disconnectedCallback=function(){this.blocker.unblock()},t.prototype.onTouchStart=function(t){this.lastClick=Object(n.i)(t),this.emitTap(t)},t.prototype.onMouseDown=function(t){this.lastClick<Object(n.i)(t)-2500&&this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.render=function(){var t,o=Object(a.e)(this);return Object(a.i)(a.a,{tabindex:"-1",class:(t={},t[o]=!0,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})},Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=81.56c9d98f.chunk.js.map