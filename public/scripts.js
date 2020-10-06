/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.min.js.map
;/**
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.marked = factory());
}(this, (function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var defaults = createCommonjsModule(function (module) {
    function getDefaults() {
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false
      };
    }

    function changeDefaults(newDefaults) {
      module.exports.defaults = newDefaults;
    }

    module.exports = {
      defaults: getDefaults(),
      getDefaults: getDefaults,
      changeDefaults: changeDefaults
    };
  });
  var defaults_1 = defaults.defaults;
  var defaults_2 = defaults.getDefaults;
  var defaults_3 = defaults.changeDefaults;

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest = {
    exec: function noopTest() {}
  };

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  }

  var helpers = {
    escape: escape,
    unescape: unescape,
    edit: edit,
    cleanUrl: cleanUrl,
    resolveUrl: resolveUrl,
    noopTest: noopTest,
    merge: merge,
    splitCells: splitCells,
    rtrim: rtrim,
    findClosingBracket: findClosingBracket,
    checkSanitizeDeprecation: checkSanitizeDeprecation
  };

  var defaults$1 = defaults.defaults;
  var rtrim$1 = helpers.rtrim,
      splitCells$1 = helpers.splitCells,
      _escape = helpers.escape,
      findClosingBracket$1 = helpers.findClosingBracket;

  function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      return {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text
      };
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var indentInNode = matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || defaults$1;
    }

    var _proto = Tokenizer.prototype;

    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }

        return {
          raw: '\n'
        };
      }
    };

    _proto.code = function code(src, tokens) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && lastToken.type === 'paragraph') {
          return {
            raw: cap[0],
            text: cap[0].trimRight()
          };
        }

        var text = cap[0].replace(/^ {4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim$1(text, '\n') : text
        };
      }
    };

    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };

    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: cap[2]
        };
      }
    };

    _proto.nptable = function nptable(src) {
      var cap = this.rules.block.nptable.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
          raw: cap[0]
        };

        if (item.header.length === item.align.length) {
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i], item.header.length);
          }

          return item;
        }
      }
    };

    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };

    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw = cap[0];
        var bull = cap[2];
        var isordered = bull.length > 1;
        var isparen = bull[bull.length - 1] === ')';
        var list = {
          type: 'list',
          raw: raw,
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        }; // Get each top-level item.

        var itemMatch = cap[0].match(this.rules.block.item);
        var next = false,
            item,
            space,
            b,
            addBack,
            loose,
            istask,
            ischecked;
        var l = itemMatch.length;

        for (var i = 0; i < l; i++) {
          item = itemMatch[i];
          raw = item; // Remove the list item's bullet
          // so it is seen as the next token.

          space = item.length;
          item = item.replace(/^ *([*+-]|\d+[.)]) */, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.


          if (i !== l - 1) {
            b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];

            if (isordered ? b.length === 1 || !isparen && b[b.length - 1] === ')' : b.length > 1 || this.options.smartLists && b !== bull) {
              addBack = itemMatch.slice(i + 1).join('\n');
              list.raw = list.raw.substring(0, list.raw.length - addBack.length);
              i = l - 1;
            }
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            list.loose = true;
          } // Check for task list items


          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;

          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: istask,
            checked: ischecked,
            loose: loose,
            text: item
          });
        }

        return list;
      }
    };

    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };

    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          return item;
        }
      }
    };

    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        };
      }
    };

    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        return {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        };
      }
    };

    _proto.text = function text(src, tokens) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          return {
            raw: cap[0],
            text: cap[0]
          };
        }

        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    };

    _proto.escape = function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    };

    _proto.tag = function tag(src, inLink, inRawBlock) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!inLink && /^<a /i.test(cap[0])) {
          inLink = true;
        } else if (inLink && /^<\/a>/i.test(cap[0])) {
          inLink = false;
        }

        if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = true;
        } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: inLink,
          inRawBlock: inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var lastParenIndex = findClosingBracket$1(cap[2], '()');

        if (lastParenIndex > -1) {
          var start = cap[0].indexOf('!') === 0 ? 5 : 4;
          var linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        var token = outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0]);
        return token;
      }
    };

    _proto.reflink = function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        var token = outputLink(cap, link, cap[0]);
        return token;
      }
    };

    _proto.strong = function strong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.strong.start.exec(src);

      if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
        maskedSrc = maskedSrc.slice(-1 * src.length);
        var endReg = match[0] === '**' ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
        endReg.lastIndex = 0;
        var cap;

        while ((match = endReg.exec(maskedSrc)) != null) {
          cap = this.rules.inline.strong.middle.exec(maskedSrc.slice(0, match.index + 3));

          if (cap) {
            return {
              type: 'strong',
              raw: src.slice(0, cap[0].length),
              text: src.slice(2, cap[0].length - 2)
            };
          }
        }
      }
    };

    _proto.em = function em(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }

      var match = this.rules.inline.em.start.exec(src);

      if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
        maskedSrc = maskedSrc.slice(-1 * src.length);
        var endReg = match[0] === '*' ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
        endReg.lastIndex = 0;
        var cap;

        while ((match = endReg.exec(maskedSrc)) != null) {
          cap = this.rules.inline.em.middle.exec(maskedSrc.slice(0, match.index + 2));

          if (cap) {
            return {
              type: 'em',
              raw: src.slice(0, cap[0].length),
              text: src.slice(1, cap[0].length - 1)
            };
          }
        }
      }
    };

    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = text.startsWith(' ') && text.endsWith(' ');

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };

    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[1]
        };
      }
    };

    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.url = function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };

    return Tokenizer;
  }();

  var noopTest$1 = helpers.noopTest,
      edit$1 = helpers.edit,
      merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest$1,
    table: noopTest$1,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
  block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?-->/;
  block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge$1({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge$1({}, block.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' *([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    // Cells
    table: '^ *\\|(.+)\\n' // Header
    + ' *\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge$1({}, block.normal, {
    html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: noopTest$1,
    // fences not supported
    paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest$1,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    strong: {
      start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
      // (1) returns if starts w/ punctuation
      middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
      endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation\s]|$))/,
      // last char can't be punct, or final * must also be followed by punct (or endline)
      endUnd: /[^\s]__(?!_)(?:(?=[punctuation\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)

    },
    em: {
      start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
      // (1) returns if starts w/ punctuation
      middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
      endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation\s]|$))/,
      // last char can't be punct, or final * must also be followed by punct (or endline)
      endUnd: /[^\s]_(?!_)(?:(?=[punctuation\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)

    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest$1,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
    punctuation: /^([\s*punctuation])/
  }; // list of punctuation marks from common mark spec
  // without * and _ to workaround cases with double emphasis

  inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline.punctuation = edit$1(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>';
  inline._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*';
  inline.em.start = edit$1(inline.em.start).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.em.middle = edit$1(inline.em.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
  inline.em.endAst = edit$1(inline.em.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.em.endUnd = edit$1(inline.em.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.start = edit$1(inline.strong.start).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.middle = edit$1(inline.strong.middle).replace(/punctuation/g, inline._punctuation).replace(/blockSkip/g, inline._blockSkip).getRegex();
  inline.strong.endAst = edit$1(inline.strong.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.endUnd = edit$1(inline.strong.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = edit$1(inline._blockSkip, 'g').getRegex();
  inline.overlapSkip = edit$1(inline._overlapSkip, 'g').getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit$1(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
  inline.reflinkSearch = edit$1(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge$1({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge$1({}, inline.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge$1({}, inline.normal, {
    escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge$1({}, inline.gfm, {
    br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
    text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block,
    inline: inline
  };

  var defaults$2 = defaults.defaults;
  var block$1 = rules.block,
      inline$1 = rules.inline;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$2;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      var rules = {
        block: block$1.normal,
        inline: inline$1.normal
      };

      if (this.options.pedantic) {
        rules.block = block$1.pedantic;
        rules.inline = inline$1.pedantic;
      } else if (this.options.gfm) {
        rules.block = block$1.gfm;

        if (this.options.breaks) {
          rules.inline = inline$1.breaks;
        } else {
          rules.inline = inline$1.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */


    /**
     * Static Lex Method
     */
    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Preprocessing
     */
    ;

    var _proto = Lexer.prototype;

    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens, true);
      this.inline(this.tokens);
      return this.tokens;
    }
    /**
     * Lexing
     */
    ;

    _proto.blockTokens = function blockTokens(src, tokens, top) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (top === void 0) {
        top = true;
      }

      src = src.replace(/^ +$/gm, '');
      var token, i, l, lastToken;

      while (src) {
        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src, tokens)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // table no leading pipe (gfm)


        if (token = this.tokenizer.nptable(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.blockTokens(token.text, [], top);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          l = token.items.length;

          for (i = 0; i < l; i++) {
            token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
          }

          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (top && (token = this.tokenizer.def(src))) {
          src = src.substring(token.raw.length);

          if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph


        if (top && (token = this.tokenizer.paragraph(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.text(src, tokens)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _proto.inline = function inline(tokens) {
      var i, j, k, l2, row, token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            {
              token.tokens = [];
              this.inlineTokens(token.text, token.tokens);
              break;
            }

          case 'table':
            {
              token.tokens = {
                header: [],
                cells: []
              }; // header

              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                token.tokens.header[j] = [];
                this.inlineTokens(token.header[j], token.tokens.header[j]);
              } // cells


              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.cells[j];
                token.tokens.cells[j] = [];

                for (k = 0; k < row.length; k++) {
                  token.tokens.cells[j][k] = [];
                  this.inlineTokens(row[k], token.tokens.cells[j][k]);
                }
              }

              break;
            }

          case 'blockquote':
            {
              this.inline(token.tokens);
              break;
            }

          case 'list':
            {
              l2 = token.items.length;

              for (j = 0; j < l2; j++) {
                this.inline(token.items[j].tokens);
              }

              break;
            }
        }
      }

      return tokens;
    }
    /**
     * Lexing/Compiling
     */
    ;

    _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock, prevChar) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (inLink === void 0) {
        inLink = false;
      }

      if (inRawBlock === void 0) {
        inRawBlock = false;
      }

      if (prevChar === void 0) {
        prevChar = '';
      }

      var token; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);

        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks


      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }

      while (src) {
        // escape
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
          src = src.substring(token.raw.length);
          inLink = token.inLink;
          inRawBlock = token.inRawBlock;
          tokens.push(token);
          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // strong


        if (token = this.tokenizer.strong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // em


        if (token = this.tokenizer.em(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
          src = src.substring(token.raw.length);
          prevChar = token.raw.slice(-1);
          tokens.push(token);
          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block$1,
          inline: inline$1
        };
      }
    }]);

    return Lexer;
  }();

  var defaults$3 = defaults.defaults;
  var cleanUrl$1 = helpers.cleanUrl,
      escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || defaults$3;
    }

    var _proto = Renderer.prototype;

    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    };

    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    _proto.html = function html(_html) {
      return _html;
    };

    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };

    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };

    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;

    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };

    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };

    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };

    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };

    _proto.link = function link(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape$1(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    };

    _proto.image = function image(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */
  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {}

    var _proto = TextRenderer.prototype;

    // no need for block level renderers
    _proto.strong = function strong(text) {
      return text;
    };

    _proto.em = function em(text) {
      return text;
    };

    _proto.codespan = function codespan(text) {
      return text;
    };

    _proto.del = function del(text) {
      return text;
    };

    _proto.html = function html(text) {
      return text;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    _proto.link = function link(href, title, text) {
      return '' + text;
    };

    _proto.image = function image(href, title, text) {
      return '' + text;
    };

    _proto.br = function br() {
      return '';
    };

    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */
  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }
    /**
     * Convert string to unique id
     */


    var _proto = Slugger.prototype;

    _proto.slug = function slug(value) {
      var slug = value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

      if (this.seen.hasOwnProperty(slug)) {
        var originalSlug = slug;

        do {
          this.seen[originalSlug]++;
          slug = originalSlug + '-' + this.seen[originalSlug];
        } while (this.seen.hasOwnProperty(slug));
      }

      this.seen[slug] = 0;
      return slug;
    };

    return Slugger;
  }();

  var defaults$4 = defaults.defaults;
  var unescape$1 = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || defaults$4;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer_1();
      this.slugger = new Slugger_1();
    }
    /**
     * Static Parse Method
     */


    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Parse Loop
     */
    ;

    var _proto = Parser.prototype;

    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }

      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.tokens.cells[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k]), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */
    ;

    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    };

    return Parser;
  }();

  var merge$2 = helpers.merge,
      checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
      escape$2 = helpers.escape;
  var getDefaults = defaults.getDefaults,
      changeDefaults = defaults.changeDefaults,
      defaults$5 = defaults.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge$2({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer_1.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            out = Parser_1.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer_1.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser_1.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge$2(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults$5;
  /**
   * Use Extension
   */

  marked.use = function (extension) {
    var opts = merge$2({}, extension);

    if (extension.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer_1();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop];

          renderer[prop] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var ret = extension.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (extension.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop];

          tokenizer[prop] = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var ret = extension.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    }

    if (extension.walkTokens) {
      var walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        extension.walkTokens(token);

        if (walkTokens) {
          walkTokens(token);
        }
      };
    }

    marked.setOptions(opts);
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      var token = _step.value;
      callback(token);

      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell, callback);
            }

            for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;

              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell, callback);
              }
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser_1;
  marked.parser = Parser_1.parse;
  marked.Renderer = Renderer_1;
  marked.TextRenderer = TextRenderer_1;
  marked.Lexer = Lexer_1;
  marked.lexer = Lexer_1.lex;
  marked.Tokenizer = Tokenizer_1;
  marked.Slugger = Slugger_1;
  marked.parse = marked;
  var marked_1 = marked;

  return marked_1;

})));

;
/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	/**
	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
	 * additional languages or plugins yourself.
	 *
	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
	 *
	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
	 * empty Prism object into the global scope before loading the Prism script like this:
	 *
	 * ```js
	 * window.Prism = window.Prism || {};
	 * Prism.manual = true;
	 * // add a new <script> to load Prism's script
	 * ```
	 *
	 * @default false
	 * @type {boolean}
	 * @memberof Prism
	 * @public
	 */
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

	/**
	 * A namespace for utility methods.
	 *
	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
	 * change or disappear at any time.
	 *
	 * @namespace
	 * @memberof Prism
	 */
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		/**
		 * Returns the name of the type of the given value.
		 *
		 * @param {any} o
		 * @returns {string}
		 * @example
		 * type(null)      === 'Null'
		 * type(undefined) === 'Undefined'
		 * type(123)       === 'Number'
		 * type('foo')     === 'String'
		 * type(true)      === 'Boolean'
		 * type([1, 2])    === 'Array'
		 * type({})        === 'Object'
		 * type(String)    === 'Function'
		 * type(/abc+/)    === 'RegExp'
		 */
		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		/**
		 * Returns a unique number for the given object. Later calls will still return the same number.
		 *
		 * @param {Object} obj
		 * @returns {number}
		 */
		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		/**
		 * Creates a deep clone of the given object.
		 *
		 * The main intended use of this function is to clone language definitions.
		 *
		 * @param {T} o
		 * @param {Record<number, any>} [visited]
		 * @returns {T}
		 * @template T
		 */
		clone: function deepClone(o, visited) {
			visited = visited || {};

			var clone, id;
			switch (_.util.type(o)) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = /** @type {Record<string, any>} */ ({});
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return /** @type {any} */ (clone);

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return /** @type {any} */ (clone);

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
				return /** @type {any} */ (document.currentScript);
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		},

		/**
		 * Returns whether a given class is active for `element`.
		 *
		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
		 * given class is just the given class with a `no-` prefix.
		 *
		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
		 *
		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
		 * version of it, the class is considered active.
		 *
		 * @param {Element} element
		 * @param {string} className
		 * @param {boolean} [defaultActivation=false]
		 * @returns {boolean}
		 */
		isActive: function (element, className, defaultActivation) {
			var no = 'no-' + className;

			while (element) {
				var classList = element.classList;
				if (classList.contains(className)) {
					return true;
				}
				if (classList.contains(no)) {
					return false;
				}
				element = element.parentElement;
			}
			return !!defaultActivation;
		}
	},

	/**
	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
	 *
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	languages: {
		/**
		 * Creates a deep copy of the language with the given id and appends the given tokens.
		 *
		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
		 * will be overwritten at its original position.
		 *
		 * ## Best practices
		 *
		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
		 *
		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
		 *
		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
		 * @param {Grammar} redef The new tokens to append.
		 * @returns {Grammar} The new language created.
		 * @public
		 * @example
		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
		 *     // at its original position
		 *     'comment': { ... },
		 *     // CSS doesn't have a 'color' token, so this token will be appended
		 *     'color': /\b(?:red|green|blue)\b/
		 * });
		 */
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Inserts tokens _before_ another token in a language definition or any other grammar.
		 *
		 * ## Usage
		 *
		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
		 * this:
		 *
		 * ```js
		 * Prism.languages.markup.style = {
		 *     // token
		 * };
		 * ```
		 *
		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
		 * before existing tokens. For the CSS example above, you would use it like this:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'cdata', {
		 *     'style': {
		 *         // token
		 *     }
		 * });
		 * ```
		 *
		 * ## Special cases
		 *
		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
		 * will be ignored.
		 *
		 * This behavior can be used to insert tokens after `before`:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'comment', {
		 *     'comment': Prism.languages.markup.comment,
		 *     // tokens after 'comment'
		 * });
		 * ```
		 *
		 * ## Limitations
		 *
		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
		 * deleting properties which is necessary to insert at arbitrary positions.
		 *
		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
		 * Instead, it will create a new object and replace all references to the target object with the new one. This
		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
		 *
		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
		 * you hold the target object in a variable, then the value of the variable will not change.
		 *
		 * ```js
		 * var oldMarkup = Prism.languages.markup;
		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
		 *
		 * assert(oldMarkup !== Prism.languages.markup);
		 * assert(newMarkup === Prism.languages.markup);
		 * ```
		 *
		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
		 * object to be modified.
		 * @param {string} before The key to insert before.
		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
		 * object to be modified.
		 *
		 * Defaults to `Prism.languages`.
		 * @returns {Grammar} The new grammar object.
		 * @public
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || /** @type {any} */ (_.languages);
			var grammar = root[inside];
			/** @type {Grammar} */
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},

	plugins: {},

	/**
	 * This is the most high-level function in Prism’s API.
	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
	 * each one of them.
	 *
	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
	 *
	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
	 * @memberof Prism
	 * @public
	 */
	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	/**
	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
	 * {@link Prism.highlightElement} on each one of them.
	 *
	 * The following hooks will be run:
	 * 1. `before-highlightall`
	 * 2. All hooks of {@link Prism.highlightElement} for each element.
	 *
	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
	 * @memberof Prism
	 * @public
	 */
	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	/**
	 * Highlights the code inside a single element.
	 *
	 * The following hooks will be run:
	 * 1. `before-sanity-check`
	 * 2. `before-highlight`
	 * 3. All hooks of {@link Prism.highlight}. These hooks will only be run by the current worker if `async` is `true`.
	 * 4. `before-insert`
	 * 5. `after-highlight`
	 * 6. `complete`
	 *
	 * @param {Element} element The element containing the code.
	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
	 *
	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
	 * asynchronous highlighting to work. You can build your own bundle on the
	 * [Download page](https://prismjs.com/download.html).
	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
	 * @memberof Prism
	 * @public
	 */
	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentElement;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	/**
	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
	 * and the language definitions to use, and returns a string with the HTML produced.
	 *
	 * The following hooks will be run:
	 * 1. `before-tokenize`
	 * 2. `after-tokenize`
	 * 3. `wrap`: On each {@link Token}.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @param {string} language The name of the language definition passed to `grammar`.
	 * @returns {string} The highlighted HTML.
	 * @memberof Prism
	 * @public
	 * @example
	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
	 */
	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	/**
	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
	 * and the language definitions to use, and returns an array with the tokenized code.
	 *
	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
	 *
	 * This method could be useful in other contexts as well, as a very crude parser.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @returns {TokenStream} An array of strings and tokens, a token stream.
	 * @memberof Prism
	 * @public
	 * @example
	 * let code = `var foo = 0;`;
	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
	 * tokens.forEach(token => {
	 *     if (token instanceof Prism.Token && token.type === 'number') {
	 *         console.log(`Found numeric literal: ${token.content}`);
	 *     }
	 * });
	 */
	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	/**
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	hooks: {
		all: {},

		/**
		 * Adds the given callback to the list of callbacks for the given hook.
		 *
		 * The callback will be invoked when the hook it is registered for is run.
		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
		 *
		 * One callback function can be registered to multiple hooks and the same hook multiple times.
		 *
		 * @param {string} name The name of the hook.
		 * @param {HookCallback} callback The callback function which is given environment variables.
		 * @public
		 */
		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		/**
		 * Runs a hook invoking all registered callbacks with the given environment variables.
		 *
		 * Callbacks will be invoked synchronously and in the order in which they were registered.
		 *
		 * @param {string} name The name of the hook.
		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
		 * @public
		 */
		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};
_self.Prism = _;


// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

/**
 * Creates a new token.
 *
 * @param {string} type See {@link Token#type type}
 * @param {string | TokenStream} content See {@link Token#content content}
 * @param {string|string[]} [alias] The alias(es) of the token.
 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
 * @class
 * @global
 * @public
 */
function Token(type, content, alias, matchedStr) {
	/**
	 * The type of the token.
	 *
	 * This is usually the key of a pattern in a {@link Grammar}.
	 *
	 * @type {string}
	 * @see GrammarToken
	 * @public
	 */
	this.type = type;
	/**
	 * The strings or tokens contained by this token.
	 *
	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
	 *
	 * @type {string | TokenStream}
	 * @public
	 */
	this.content = content;
	/**
	 * The alias(es) of the token.
	 *
	 * @type {string|string[]}
	 * @see GrammarToken
	 * @public
	 */
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length | 0;
}

/**
 * A token stream is an array of strings and {@link Token Token} objects.
 *
 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
 * them.
 *
 * 1. No adjacent strings.
 * 2. No empty strings.
 *
 *    The only exception here is the token stream that only contains the empty string and nothing else.
 *
 * @typedef {Array<string | Token>} TokenStream
 * @global
 * @public
 */

/**
 * Converts the given token or token stream to an HTML representation.
 *
 * The following hooks will be run:
 * 1. `wrap`: On each {@link Token}.
 *
 * @param {string | Token | TokenStream} o The token or token stream to be converted.
 * @param {string} language The name of current language.
 * @returns {string} The HTML representation of the token or token stream.
 * @memberof Token
 * @static
 */
Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {RematchOptions} [rematch]
 * @returns {void}
 * @private
 *
 * @typedef RematchOptions
 * @property {string} cause
 * @property {number} reach
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + ',' + j) {
				return;
			}

			var patternObj = patterns[j],
				inside = patternObj.inside,
				lookbehind = !!patternObj.lookbehind,
				greedy = !!patternObj.greedy,
				lookbehindLength = 0,
				alias = patternObj.alias;

			if (greedy && !patternObj.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
			}

			/** @type {RegExp} */
			var pattern = patternObj.pattern || patternObj;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				if (rematch && pos >= rematch.reach) {
					break;
				}

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween

				if (greedy && currentNode != tokenList.tail.prev) {
					pattern.lastIndex = pos;
					var match = pattern.exec(text);
					if (!match) {
						break;
					}

					var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || typeof k.value === 'string');
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					pattern.lastIndex = 0;

					var match = pattern.exec(str);
				}

				if (!match) {
					continue;
				}

				if (lookbehind) {
					lookbehindLength = match[1] ? match[1].length : 0;
				}

				var from = match.index + lookbehindLength,
					matchStr = match[0].slice(lookbehindLength),
					to = from + matchStr.length,
					before = str.slice(0, from),
					after = str.slice(to);

				var reach = pos + str.length;
				if (rematch && reach > rematch.reach) {
					rematch.reach = reach;
				}

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}

				if (removeCount > 1) {
					// at least one Token object was removed, so we have to do some rematching
					// this can only happen if the current pattern is greedy
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
						cause: token + ',' + j,
						reach: reach
					});
				}
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 * @private
 */

/**
 * @template T
 * @private
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

// Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
*/

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
*/

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	var Prism = window.Prism;

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; element = elements[i++];) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	}

})();

;!function(s){function a(e,s){return e.replace(/<<(\d+)>>/g,function(e,n){return"(?:"+s[+n]+")"})}function t(e,n,s){return RegExp(a(e,n),s||"")}function e(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var n="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface struct",i="add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(r),p=RegExp(l(n+" "+r+" "+i+" "+o)),c=l(r+" "+i+" "+o),u=l(n+" "+r+" "+o),g=e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=e("\\((?:[^()]|<<self>>)*\\)",2),h="@?\\b[A-Za-z_]\\w*\\b",f=a("<<0>>(?:\\s*<<1>>)?",[h,g]),m=a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[c,f]),k="\\[\\s*(?:,\\s*)*\\]",y=a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[m,k]),w=a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[a("\\(<<0>>+(?:,<<0>>+)+\\)",[a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,k])]),m,k]),v={keyword:p,punctuation:/[<>()?,.:[\]]/},x="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",$='"(?:\\\\.|[^\\\\"\r\n])*"';s.languages.csharp=s.languages.extend("clike",{string:[{pattern:t("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:t("(^|[^@$\\\\])<<0>>",[$]),lookbehind:!0,greedy:!0},{pattern:RegExp(x),greedy:!0,alias:"character"}],"class-name":[{pattern:t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:v},{pattern:t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[h,w]),lookbehind:!0,inside:v},{pattern:t("(\\busing\\s+)<<0>>(?=\\s*=)",[h]),lookbehind:!0},{pattern:t("(\\b<<0>>\\s+)<<1>>",[d,f]),lookbehind:!0,inside:v},{pattern:t("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:v},{pattern:t("(\\bwhere\\s+)<<0>>",[h]),lookbehind:!0},{pattern:t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:v},{pattern:t("\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[w,u,h]),inside:v}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),s.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),s.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t("([(,]\\s*)<<0>>(?=\\s*:)",[h]),lookbehind:!0,alias:"punctuation"}}),s.languages.insertBefore("csharp","class-name",{namespace:{pattern:t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*)(?:[^()\\s]|\\s(?!\\s*\\))|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[w,m]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:t("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[w]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:t("<<0>>\\s*<<1>>(?=\\s*\\()",[h,g]),inside:{function:t("^<<0>>",[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:v}}},"type-list":{pattern:t("\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,f,h,w,p.source]),lookbehind:!0,inside:{keyword:p,"class-name":{pattern:RegExp(w),greedy:!0,inside:v},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var _=$+"|"+x,B=a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[_]),E=e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[B]),2),R="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",P=a("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,E]);s.languages.insertBefore("csharp","class-name",{attribute:{pattern:t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[R,P]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t("^<<0>>(?=\\s*:)",[R]),alias:"keyword"},"attribute-arguments":{pattern:t("\\(<<0>>*\\)",[E]),inside:s.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var z=":[^}\r\n]+",S=e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[B]),2),j=a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[S,z]),A=e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[_]),2),F=a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[A,z]);function U(e,n){return{interpolation:{pattern:t("((?:^|[^{])(?:\\{\\{)*)<<0>>",[e]),lookbehind:!0,inside:{"format-string":{pattern:t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[n,z]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:s.languages.csharp}}},string:/[\s\S]+/}}s.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[j]),lookbehind:!0,greedy:!0,inside:U(j,S)},{pattern:t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[F]),lookbehind:!0,greedy:!0,inside:U(F,A)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp;
;!function(e){var s=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+s.source+")*?(?=\\s*\\{)"),string:{pattern:s,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(Prism);
;(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	/**
	 * Plugin name which is used as a class name for <pre> which is activating the plugin
	 * @type {String}
	 */
	var PLUGIN_NAME = 'line-numbers';

	/**
	 * Regular expression used for determining line breaks
	 * @type {RegExp}
	 */
	var NEW_LINE_EXP = /\n(?!$)/g;


	/**
	 * Global exports
	 */
	var config = Prism.plugins.lineNumbers = {
		/**
		 * Get node for provided line number
		 * @param {Element} element pre element
		 * @param {Number} number line number
		 * @return {Element|undefined}
		 */
		getLine: function (element, number) {
			if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
				return;
			}

			var lineNumberRows = element.querySelector('.line-numbers-rows');
			var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
			var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);

			if (number < lineNumberStart) {
				number = lineNumberStart;
			}
			if (number > lineNumberEnd) {
				number = lineNumberEnd;
			}

			var lineIndex = number - lineNumberStart;

			return lineNumberRows.children[lineIndex];
		},

		/**
		 * Resizes the line numbers of the given element.
		 *
		 * This function will not add line numbers. It will only resize existing ones.
		 * @param {HTMLElement} element A `<pre>` element with line numbers.
		 * @returns {void}
		 */
		resize: function (element) {
			resizeElements([element]);
		},

		/**
		 * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
		 * the current viewport.
		 *
		 * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
		 *
		 * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
		 *
		 * @type {boolean}
		 */
		assumeViewportIndependence: true
	};

	/**
	 * Resizes the given elements.
	 *
	 * @param {HTMLElement[]} elements
	 */
	function resizeElements(elements) {
		elements = elements.filter(function (e) {
			var codeStyles = getStyles(e);
			var whiteSpace = codeStyles['white-space'];
			return whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line';
		});

		if (elements.length == 0) {
			return;
		}

		var infos = elements.map(function (element) {
			var codeElement = element.querySelector('code');
			var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
			if (!codeElement || !lineNumbersWrapper) {
				return undefined;
			}

			/** @type {HTMLElement} */
			var lineNumberSizer = element.querySelector('.line-numbers-sizer');
			var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

			if (!lineNumberSizer) {
				lineNumberSizer = document.createElement('span');
				lineNumberSizer.className = 'line-numbers-sizer';

				codeElement.appendChild(lineNumberSizer);
			}

			lineNumberSizer.innerHTML = '0';
			lineNumberSizer.style.display = 'block';

			var oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
			lineNumberSizer.innerHTML = '';

			return {
				element: element,
				lines: codeLines,
				lineHeights: [],
				oneLinerHeight: oneLinerHeight,
				sizer: lineNumberSizer,
			};
		}).filter(Boolean);

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var lines = info.lines;
			var lineHeights = info.lineHeights;
			var oneLinerHeight = info.oneLinerHeight;

			lineHeights[lines.length - 1] = undefined;
			lines.forEach(function (line, index) {
				if (line && line.length > 1) {
					var e = lineNumberSizer.appendChild(document.createElement('span'));
					e.style.display = 'block';
					e.textContent = line;
				} else {
					lineHeights[index] = oneLinerHeight;
				}
			});
		});

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var lineHeights = info.lineHeights;

			var childIndex = 0;
			for (var i = 0; i < lineHeights.length; i++) {
				if (lineHeights[i] === undefined) {
					lineHeights[i] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
				}
			}
		});

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var wrapper = info.element.querySelector('.line-numbers-rows');

			lineNumberSizer.style.display = 'none';
			lineNumberSizer.innerHTML = '';

			info.lineHeights.forEach(function (height, lineNumber) {
				wrapper.children[lineNumber].style.height = height + 'px';
			});
		});
	}

	/**
	 * Returns style declarations for the element
	 * @param {Element} element
	 */
	var getStyles = function (element) {
		if (!element) {
			return null;
		}

		return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
	};

	var lastWidth = undefined;
	window.addEventListener('resize', function () {
		if (config.assumeViewportIndependence && lastWidth === window.innerWidth) {
			return;
		}
		lastWidth = window.innerWidth;

		resizeElements(Array.prototype.slice.call(document.querySelectorAll('pre.' + PLUGIN_NAME)));
	});

	Prism.hooks.add('complete', function (env) {
		if (!env.code) {
			return;
		}

		var code = /** @type {Element} */ (env.element);
		var pre = /** @type {HTMLElement} */ (code.parentNode);

		// works only for <code> wrapped inside <pre> (not inline)
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Abort if line numbers already exists
		if (code.querySelector('.line-numbers-rows')) {
			return;
		}

		// only add line numbers if <code> or one of its ancestors has the `line-numbers` class
		if (!Prism.util.isActive(code, PLUGIN_NAME)) {
			return;
		}

		// Remove the class 'line-numbers' from the <code>
		code.classList.remove(PLUGIN_NAME);
		// Add the class 'line-numbers' to the <pre>
		pre.classList.add(PLUGIN_NAME);

		var match = env.code.match(NEW_LINE_EXP);
		var linesNum = match ? match.length + 1 : 1;
		var lineNumbersWrapper;

		var lines = new Array(linesNum + 1).join('<span></span>');

		lineNumbersWrapper = document.createElement('span');
		lineNumbersWrapper.setAttribute('aria-hidden', 'true');
		lineNumbersWrapper.className = 'line-numbers-rows';
		lineNumbersWrapper.innerHTML = lines;

		if (pre.hasAttribute('data-start')) {
			pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
		}

		env.element.appendChild(lineNumbersWrapper);

		resizeElements([pre]);

		Prism.hooks.run('line-numbers', env);
	});

	Prism.hooks.add('line-numbers', function (env) {
		env.plugins = env.plugins || {};
		env.plugins.lineNumbers = true;
	});

}());

;(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	/**
	 * @param {string} selector
	 * @param {ParentNode} [container]
	 * @returns {HTMLElement[]}
	 */
	function $$(selector, container) {
		return Array.prototype.slice.call((container || document).querySelectorAll(selector));
	}

	/**
	 * Returns whether the given element has the given class.
	 *
	 * @param {Element} element
	 * @param {string} className
	 * @returns {boolean}
	 */
	function hasClass(element, className) {
		className = " " + className + " ";
		return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1
	}

	/**
	 * Calls the given function.
	 *
	 * @param {() => any} func
	 * @returns {void}
	 */
	function callFunction(func) {
		func();
	}

	// Some browsers round the line-height, others don't.
	// We need to test for it to position the elements properly.
	var isLineHeightRounded = (function () {
		var res;
		return function () {
			if (typeof res === 'undefined') {
				var d = document.createElement('div');
				d.style.fontSize = '13px';
				d.style.lineHeight = '1.5';
				d.style.padding = '0';
				d.style.border = '0';
				d.innerHTML = '&nbsp;<br />&nbsp;';
				document.body.appendChild(d);
				// Browsers that round the line-height should have offsetHeight === 38
				// The others should have 39.
				res = d.offsetHeight === 38;
				document.body.removeChild(d);
			}
			return res;
		}
	}());

	/**
	 * Highlights the lines of the given pre.
	 *
	 * This function is split into a DOM measuring and mutate phase to improve performance.
	 * The returned function mutates the DOM when called.
	 *
	 * @param {HTMLElement} pre
	 * @param {string} [lines]
	 * @param {string} [classes='']
	 * @returns {() => void}
	 */
	function highlightLines(pre, lines, classes) {
		lines = typeof lines === 'string' ? lines : pre.getAttribute('data-line');

		var ranges = lines.replace(/\s+/g, '').split(',').filter(Boolean);
		var offset = +pre.getAttribute('data-line-offset') || 0;

		var parseMethod = isLineHeightRounded() ? parseInt : parseFloat;
		var lineHeight = parseMethod(getComputedStyle(pre).lineHeight);
		var hasLineNumbers = hasClass(pre, 'line-numbers');
		var parentElement = hasLineNumbers ? pre : pre.querySelector('code') || pre;
		var mutateActions = /** @type {(() => void)[]} */ ([]);

		ranges.forEach(function (currentRange) {
			var range = currentRange.split('-');

			var start = +range[0];
			var end = +range[1] || start;

			/** @type {HTMLElement} */
			var line = pre.querySelector('.line-highlight[data-range="' + currentRange + '"]') || document.createElement('div');

			mutateActions.push(function () {
				line.setAttribute('aria-hidden', 'true');
				line.setAttribute('data-range', currentRange);
				line.className = (classes || '') + ' line-highlight';
			});

			// if the line-numbers plugin is enabled, then there is no reason for this plugin to display the line numbers
			if (hasLineNumbers && Prism.plugins.lineNumbers) {
				var startNode = Prism.plugins.lineNumbers.getLine(pre, start);
				var endNode = Prism.plugins.lineNumbers.getLine(pre, end);

				if (startNode) {
					var top = startNode.offsetTop + 'px';
					mutateActions.push(function () {
						line.style.top = top;
					});
				}

				if (endNode) {
					var height = (endNode.offsetTop - startNode.offsetTop) + endNode.offsetHeight + 'px';
					mutateActions.push(function () {
						line.style.height = height;
					});
				}
			} else {
				mutateActions.push(function () {
					line.setAttribute('data-start', start);

					if (end > start) {
						line.setAttribute('data-end', end);
					}

					line.style.top = (start - offset - 1) * lineHeight + 'px';

					line.textContent = new Array(end - start + 2).join(' \n');
				});
			}

			mutateActions.push(function () {
				// allow this to play nicely with the line-numbers plugin
				// need to attack to pre as when line-numbers is enabled, the code tag is relatively which screws up the positioning
				parentElement.appendChild(line);
			});
		});

		var id = pre.id;
		if (hasLineNumbers && id) {
			// This implements linkable line numbers. Linkable line numbers use Line Highlight to create a link to a
			// specific line. For this to work, the pre element has to:
			//  1) have line numbers,
			//  2) have the `linkable-line-numbers` class or an ascendant that has that class, and
			//  3) have an id.

			var linkableLineNumbersClass = 'linkable-line-numbers';
			var linkableLineNumbers = false;
			var node = pre;
			while (node) {
				if (hasClass(node, linkableLineNumbersClass)) {
					linkableLineNumbers = true;
					break;
				}
				node = node.parentElement;
			}

			if (linkableLineNumbers) {
				if (!hasClass(pre, linkableLineNumbersClass)) {
					// add class to pre
					mutateActions.push(function () {
						pre.className = (pre.className + ' ' + linkableLineNumbersClass).trim();
					});
				}

				var start = parseInt(pre.getAttribute('data-start') || '1');

				// iterate all line number spans
				$$('.line-numbers-rows > span', pre).forEach(function (lineSpan, i) {
					var lineNumber = i + start;
					lineSpan.onclick = function () {
						var hash = id + '.' + lineNumber;

						// this will prevent scrolling since the span is obviously in view
						scrollIntoView = false;
						location.hash = hash;
						setTimeout(function () {
							scrollIntoView = true;
						}, 1);
					};
				});
			}
		}

		return function () {
			mutateActions.forEach(callFunction);
		};
	}

	var scrollIntoView = true;
	function applyHash() {
		var hash = location.hash.slice(1);

		// Remove pre-existing temporary lines
		$$('.temporary.line-highlight').forEach(function (line) {
			line.parentNode.removeChild(line);
		});

		var range = (hash.match(/\.([\d,-]+)$/) || [, ''])[1];

		if (!range || document.getElementById(hash)) {
			return;
		}

		var id = hash.slice(0, hash.lastIndexOf('.')),
			pre = document.getElementById(id);

		if (!pre) {
			return;
		}

		if (!pre.hasAttribute('data-line')) {
			pre.setAttribute('data-line', '');
		}

		var mutateDom = highlightLines(pre, range, 'temporary ');
		mutateDom();

		if (scrollIntoView) {
			document.querySelector('.temporary.line-highlight').scrollIntoView();
		}
	}

	var fakeTimer = 0; // Hack to limit the number of times applyHash() runs

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = env.element.parentNode;
		var lines = pre && pre.getAttribute('data-line');

		if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
			return;
		}

		/*
		 * Cleanup for other plugins (e.g. autoloader).
		 *
		 * Sometimes <code> blocks are highlighted multiple times. It is necessary
		 * to cleanup any left-over tags, because the whitespace inside of the <div>
		 * tags change the content of the <code> tag.
		 */
		var num = 0;
		$$('.line-highlight', pre).forEach(function (line) {
			num += line.textContent.length;
			line.parentNode.removeChild(line);
		});
		// Remove extra whitespace
		if (num && /^( \n)+$/.test(env.code.slice(-num))) {
			env.code = env.code.slice(0, -num);
		}
	});

	Prism.hooks.add('complete', function completeHook(env) {
		var pre = env.element.parentNode;
		var lines = pre && pre.getAttribute('data-line');

		if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
			return;
		}

		clearTimeout(fakeTimer);

		var hasLineNumbers = Prism.plugins.lineNumbers;
		var isLineNumbersLoaded = env.plugins && env.plugins.lineNumbers;

		if (hasClass(pre, 'line-numbers') && hasLineNumbers && !isLineNumbersLoaded) {
			Prism.hooks.add('line-numbers', completeHook);
		} else {
			var mutateDom = highlightLines(pre, lines);
			mutateDom();
			fakeTimer = setTimeout(applyHash, 1);
		}
	});

	window.addEventListener('hashchange', applyHash);
	window.addEventListener('resize', function () {
		var actions = $$('pre[data-line]').map(function (pre) {
			return highlightLines(pre);
		});
		actions.forEach(callFunction);
	});

})();

;/*! emoji-toolkit 14-07-2020 */
!function(ns){ns.emojiList={":england:":{uc_base:"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",uc_full:"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",shortnames:[],category:"flags"},":scotland:":{uc_base:"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",uc_full:"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",shortnames:[],category:"flags"},":wales:":{uc_base:"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",uc_full:"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",shortnames:[],category:"flags"},":men_holding_hands_tone1_tone2:":{uc_base:"1f468-1f3fb-1f91d-1f468-1f3fc",uc_full:"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc",shortnames:[":men_holding_hands_light_skin_tone_medium_light_skin_tone:"],category:"people"},":men_holding_hands_tone1_tone3:":{uc_base:"1f468-1f3fb-1f91d-1f468-1f3fd",uc_full:"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd",shortnames:[":men_holding_hands_light_skin_tone_medium_skin_tone:"],category:"people"},":men_holding_hands_tone1_tone4:":{uc_base:"1f468-1f3fb-1f91d-1f468-1f3fe",uc_full:"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe",shortnames:[":men_holding_hands_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":men_holding_hands_tone1_tone5:":{uc_base:"1f468-1f3fb-1f91d-1f468-1f3ff",uc_full:"1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff",shortnames:[":men_holding_hands_light_skin_tone_dark_skin_tone:"],category:"people"},":men_holding_hands_tone2_tone1:":{uc_base:"1f468-1f3fc-1f91d-1f468-1f3fb",uc_full:"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb",shortnames:[":men_holding_hands_medium_light_skin_tone_light_skin_tone:"],category:"people"},":men_holding_hands_tone2_tone3:":{uc_base:"1f468-1f3fc-1f91d-1f468-1f3fd",uc_full:"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd",shortnames:[":men_holding_hands_medium_light_skin_tone_medium_skin_tone:"],category:"people"},":men_holding_hands_tone2_tone4:":{uc_base:"1f468-1f3fc-1f91d-1f468-1f3fe",uc_full:"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe",shortnames:[":men_holding_hands_medium_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":men_holding_hands_tone2_tone5:":{uc_base:"1f468-1f3fc-1f91d-1f468-1f3ff",uc_full:"1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff",shortnames:[":men_holding_hands_medium_light_skin_tone_dark_skin_tone:"],category:"people"},":men_holding_hands_tone3_tone1:":{uc_base:"1f468-1f3fd-1f91d-1f468-1f3fb",uc_full:"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb",shortnames:[":men_holding_hands_medium_skin_tone_light_skin_tone:"],category:"people"},":men_holding_hands_tone3_tone2:":{uc_base:"1f468-1f3fd-1f91d-1f468-1f3fc",uc_full:"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc",shortnames:[":men_holding_hands_medium_skin_tone_medium_light_skin_tone:"],category:"people"},":men_holding_hands_tone3_tone4:":{uc_base:"1f468-1f3fd-1f91d-1f468-1f3fe",uc_full:"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe",shortnames:[":men_holding_hands_medium_skin_tone_medium_dark_skin_tone:"],category:"people"},":men_holding_hands_tone3_tone5:":{uc_base:"1f468-1f3fd-1f91d-1f468-1f3ff",uc_full:"1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff",shortnames:[":men_holding_hands_medium_skin_tone_dark_skin_tone:"],category:"people"},":men_holding_hands_tone4_tone1:":{uc_base:"1f468-1f3fe-1f91d-1f468-1f3fb",uc_full:"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb",shortnames:[":men_holding_hands_medium_dark_skin_tone_light_skin_tone:"],category:"people"},":men_holding_hands_tone4_tone2:":{uc_base:"1f468-1f3fe-1f91d-1f468-1f3fc",uc_full:"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc",shortnames:[":men_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":men_holding_hands_tone4_tone3:":{uc_base:"1f468-1f3fe-1f91d-1f468-1f3fd",uc_full:"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd",shortnames:[":men_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],category:"people"},":men_holding_hands_tone4_tone5:":{uc_base:"1f468-1f3fe-1f91d-1f468-1f3ff",uc_full:"1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff",shortnames:[":men_holding_hands_medium_dark_skin_tone_dark_skin_tone:"],category:"people"},":men_holding_hands_tone5_tone1:":{uc_base:"1f468-1f3ff-1f91d-1f468-1f3fb",uc_full:"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb",shortnames:[":men_holding_hands_dark_skin_tone_light_skin_tone:"],category:"people"},":men_holding_hands_tone5_tone2:":{uc_base:"1f468-1f3ff-1f91d-1f468-1f3fc",uc_full:"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc",shortnames:[":men_holding_hands_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":men_holding_hands_tone5_tone3:":{uc_base:"1f468-1f3ff-1f91d-1f468-1f3fd",uc_full:"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd",shortnames:[":men_holding_hands_dark_skin_tone_medium_skin_tone:"],category:"people"},":men_holding_hands_tone5_tone4:":{uc_base:"1f468-1f3ff-1f91d-1f468-1f3fe",uc_full:"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe",shortnames:[":men_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],category:"people"},":people_holding_hands_tone1:":{uc_base:"1f9d1-1f3fb-1f91d-1f9d1-1f3fb",uc_full:"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",shortnames:[":people_holding_hands_light_skin_tone:"],category:"people"},":people_holding_hands_tone1_tone2:":{uc_base:"1f9d1-1f3fb-1f91d-1f9d1-1f3fc",uc_full:"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc",shortnames:[":people_holding_hands_light_skin_tone_medium_light_skin_tone:"],category:"people"},":people_holding_hands_tone1_tone3:":{uc_base:"1f9d1-1f3fb-1f91d-1f9d1-1f3fd",uc_full:"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd",shortnames:[":people_holding_hands_light_skin_tone_medium_skin_tone:"],category:"people"},":people_holding_hands_tone1_tone4:":{uc_base:"1f9d1-1f3fb-1f91d-1f9d1-1f3fe",uc_full:"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe",shortnames:[":people_holding_hands_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":people_holding_hands_tone1_tone5:":{uc_base:"1f9d1-1f3fb-1f91d-1f9d1-1f3ff",uc_full:"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff",shortnames:[":people_holding_hands_light_skin_tone_dark_skin_tone:"],category:"people"},":people_holding_hands_tone2:":{uc_base:"1f9d1-1f3fc-1f91d-1f9d1-1f3fc",uc_full:"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",shortnames:[":people_holding_hands_medium_light_skin_tone:"],category:"people"},":people_holding_hands_tone2_tone1:":{uc_base:"1f9d1-1f3fc-1f91d-1f9d1-1f3fb",uc_full:"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb",shortnames:[":people_holding_hands_medium_light_skin_tone_light_skin_tone:"],category:"people"},":people_holding_hands_tone2_tone3:":{uc_base:"1f9d1-1f3fc-1f91d-1f9d1-1f3fd",uc_full:"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd",shortnames:[":people_holding_hands_medium_light_skin_tone_medium_skin_tone:"],category:"people"},":people_holding_hands_tone2_tone4:":{uc_base:"1f9d1-1f3fc-1f91d-1f9d1-1f3fe",uc_full:"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe",shortnames:[":people_holding_hands_medium_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":people_holding_hands_tone2_tone5:":{uc_base:"1f9d1-1f3fc-1f91d-1f9d1-1f3ff",uc_full:"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff",shortnames:[":people_holding_hands_medium_light_skin_tone_dark_skin_tone:"],category:"people"},":people_holding_hands_tone3:":{uc_base:"1f9d1-1f3fd-1f91d-1f9d1-1f3fd",uc_full:"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",shortnames:[":people_holding_hands_medium_skin_tone:"],category:"people"},":people_holding_hands_tone3_tone1:":{uc_base:"1f9d1-1f3fd-1f91d-1f9d1-1f3fb",uc_full:"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb",shortnames:[":people_holding_hands_medium_skin_tone_light_skin_tone:"],category:"people"},":people_holding_hands_tone3_tone2:":{uc_base:"1f9d1-1f3fd-1f91d-1f9d1-1f3fc",uc_full:"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc",shortnames:[":people_holding_hands_medium_skin_tone_medium_light_skin_tone:"],category:"people"},":people_holding_hands_tone3_tone4:":{uc_base:"1f9d1-1f3fd-1f91d-1f9d1-1f3fe",uc_full:"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe",shortnames:[":people_holding_hands_medium_skin_tone_medium_dark_skin_tone:"],category:"people"},":people_holding_hands_tone3_tone5:":{uc_base:"1f9d1-1f3fd-1f91d-1f9d1-1f3ff",uc_full:"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff",shortnames:[":people_holding_hands_medium_skin_tone_dark_skin_tone:"],category:"people"},":people_holding_hands_tone4:":{uc_base:"1f9d1-1f3fe-1f91d-1f9d1-1f3fe",uc_full:"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",shortnames:[":people_holding_hands_medium_dark_skin_tone:"],category:"people"},":people_holding_hands_tone4_tone1:":{uc_base:"1f9d1-1f3fe-1f91d-1f9d1-1f3fb",uc_full:"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb",shortnames:[":people_holding_hands_medium_dark_skin_tone_light_skin_tone:"],category:"people"},":people_holding_hands_tone4_tone2:":{uc_base:"1f9d1-1f3fe-1f91d-1f9d1-1f3fc",uc_full:"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc",shortnames:[":people_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":people_holding_hands_tone4_tone3:":{uc_base:"1f9d1-1f3fe-1f91d-1f9d1-1f3fd",uc_full:"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd",shortnames:[":people_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],category:"people"},":people_holding_hands_tone4_tone5:":{uc_base:"1f9d1-1f3fe-1f91d-1f9d1-1f3ff",uc_full:"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff",shortnames:[":people_holding_hands_medium_dark_skin_tone_dark_skin_tone:"],category:"people"},":people_holding_hands_tone5:":{uc_base:"1f9d1-1f3ff-1f91d-1f9d1-1f3ff",uc_full:"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff",shortnames:[":people_holding_hands_dark_skin_tone:"],category:"people"},":people_holding_hands_tone5_tone1:":{uc_base:"1f9d1-1f3ff-1f91d-1f9d1-1f3fb",uc_full:"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb",shortnames:[":people_holding_hands_dark_skin_tone_light_skin_tone:"],category:"people"},":people_holding_hands_tone5_tone2:":{uc_base:"1f9d1-1f3ff-1f91d-1f9d1-1f3fc",uc_full:"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc",shortnames:[":people_holding_hands_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":people_holding_hands_tone5_tone3:":{uc_base:"1f9d1-1f3ff-1f91d-1f9d1-1f3fd",uc_full:"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd",shortnames:[":people_holding_hands_dark_skin_tone_medium_skin_tone:"],category:"people"},":people_holding_hands_tone5_tone4:":{uc_base:"1f9d1-1f3ff-1f91d-1f9d1-1f3fe",uc_full:"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe",shortnames:[":people_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone1_tone2:":{uc_base:"1f469-1f3fb-1f91d-1f468-1f3fc",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc",shortnames:[":woman_and_man_holding_hands_light_skin_tone_medium_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone1_tone3:":{uc_base:"1f469-1f3fb-1f91d-1f468-1f3fd",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd",shortnames:[":woman_and_man_holding_hands_light_skin_tone_medium_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone1_tone4:":{uc_base:"1f469-1f3fb-1f91d-1f468-1f3fe",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe",shortnames:[":woman_and_man_holding_hands_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone1_tone5:":{uc_base:"1f469-1f3fb-1f91d-1f468-1f3ff",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff",shortnames:[":woman_and_man_holding_hands_light_skin_tone_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone2_tone1:":{uc_base:"1f469-1f3fc-1f91d-1f468-1f3fb",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb",shortnames:[":woman_and_man_holding_hands_medium_light_skin_tone_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone2_tone3:":{uc_base:"1f469-1f3fc-1f91d-1f468-1f3fd",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd",shortnames:[":woman_and_man_holding_hands_medium_light_skin_tone_medium_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone2_tone4:":{uc_base:"1f469-1f3fc-1f91d-1f468-1f3fe",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe",shortnames:[":woman_and_man_holding_hands_medium_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone2_tone5:":{uc_base:"1f469-1f3fc-1f91d-1f468-1f3ff",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff",shortnames:[":woman_and_man_holding_hands_medium_light_skin_tone_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone3_tone1:":{uc_base:"1f469-1f3fd-1f91d-1f468-1f3fb",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb",shortnames:[":woman_and_man_holding_hands_medium_skin_tone_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone3_tone2:":{uc_base:"1f469-1f3fd-1f91d-1f468-1f3fc",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc",shortnames:[":woman_and_man_holding_hands_medium_skin_tone_medium_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone3_tone4:":{uc_base:"1f469-1f3fd-1f91d-1f468-1f3fe",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe",shortnames:[":woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone3_tone5:":{uc_base:"1f469-1f3fd-1f91d-1f468-1f3ff",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff",shortnames:[":woman_and_man_holding_hands_medium_skin_tone_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone4_tone1:":{uc_base:"1f469-1f3fe-1f91d-1f468-1f3fb",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb",shortnames:[":woman_and_man_holding_hands_medium_dark_skin_tone_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone4_tone2:":{uc_base:"1f469-1f3fe-1f91d-1f468-1f3fc",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc",shortnames:[":woman_and_man_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone4_tone3:":{uc_base:"1f469-1f3fe-1f91d-1f468-1f3fd",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd",shortnames:[":woman_and_man_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone4_tone5:":{uc_base:"1f469-1f3fe-1f91d-1f468-1f3ff",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff",shortnames:[":woman_and_man_holding_hands_medium_dark_skin_tone_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone5_tone1:":{uc_base:"1f469-1f3ff-1f91d-1f468-1f3fb",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb",shortnames:[":woman_and_man_holding_hands_dark_skin_tone_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone5_tone2:":{uc_base:"1f469-1f3ff-1f91d-1f468-1f3fc",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc",shortnames:[":woman_and_man_holding_hands_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone5_tone3:":{uc_base:"1f469-1f3ff-1f91d-1f468-1f3fd",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd",shortnames:[":woman_and_man_holding_hands_dark_skin_tone_medium_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone5_tone4:":{uc_base:"1f469-1f3ff-1f91d-1f468-1f3fe",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe",shortnames:[":woman_and_man_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],category:"people"},":women_holding_hands_tone1_tone2:":{uc_base:"1f469-1f3fb-1f91d-1f469-1f3fc",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc",shortnames:[":women_holding_hands_light_skin_tone_medium_light_skin_tone:"],category:"people"},":women_holding_hands_tone1_tone3:":{uc_base:"1f469-1f3fb-1f91d-1f469-1f3fd",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd",shortnames:[":women_holding_hands_light_skin_tone_medium_skin_tone:"],category:"people"},":women_holding_hands_tone1_tone4:":{uc_base:"1f469-1f3fb-1f91d-1f469-1f3fe",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe",shortnames:[":women_holding_hands_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":women_holding_hands_tone1_tone5:":{uc_base:"1f469-1f3fb-1f91d-1f469-1f3ff",uc_full:"1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff",shortnames:[":women_holding_hands_light_skin_tone_dark_skin_tone:"],category:"people"},":women_holding_hands_tone2_tone1:":{uc_base:"1f469-1f3fc-1f91d-1f469-1f3fb",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb",shortnames:[":women_holding_hands_medium_light_skin_tone_light_skin_tone:"],category:"people"},":women_holding_hands_tone2_tone3:":{uc_base:"1f469-1f3fc-1f91d-1f469-1f3fd",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd",shortnames:[":women_holding_hands_medium_light_skin_tone_medium_skin_tone:"],category:"people"},":women_holding_hands_tone2_tone4:":{uc_base:"1f469-1f3fc-1f91d-1f469-1f3fe",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe",shortnames:[":women_holding_hands_medium_light_skin_tone_medium_dark_skin_tone:"],category:"people"},":women_holding_hands_tone2_tone5:":{uc_base:"1f469-1f3fc-1f91d-1f469-1f3ff",uc_full:"1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff",shortnames:[":women_holding_hands_medium_light_skin_tone_dark_skin_tone:"],category:"people"},":women_holding_hands_tone3_tone1:":{uc_base:"1f469-1f3fd-1f91d-1f469-1f3fb",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb",shortnames:[":women_holding_hands_medium_skin_tone_light_skin_tone:"],category:"people"},":women_holding_hands_tone3_tone2:":{uc_base:"1f469-1f3fd-1f91d-1f469-1f3fc",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc",shortnames:[":women_holding_hands_medium_skin_tone_medium_light_skin_tone:"],category:"people"},":women_holding_hands_tone3_tone4:":{uc_base:"1f469-1f3fd-1f91d-1f469-1f3fe",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe",shortnames:[":women_holding_hands_medium_skin_tone_medium_dark_skin_tone:"],category:"people"},":women_holding_hands_tone3_tone5:":{uc_base:"1f469-1f3fd-1f91d-1f469-1f3ff",uc_full:"1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff",shortnames:[":women_holding_hands_medium_skin_tone_dark_skin_tone:"],category:"people"},":women_holding_hands_tone4_tone1:":{uc_base:"1f469-1f3fe-1f91d-1f469-1f3fb",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb",shortnames:[":women_holding_hands_medium_dark_skin_tone_light_skin_tone:"],category:"people"},":women_holding_hands_tone4_tone2:":{uc_base:"1f469-1f3fe-1f91d-1f469-1f3fc",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc",shortnames:[":women_holding_hands_medium_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":women_holding_hands_tone4_tone3:":{uc_base:"1f469-1f3fe-1f91d-1f469-1f3fd",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd",shortnames:[":women_holding_hands_medium_dark_skin_tone_medium_skin_tone:"],category:"people"},":women_holding_hands_tone4_tone5:":{uc_base:"1f469-1f3fe-1f91d-1f469-1f3ff",uc_full:"1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff",shortnames:[":women_holding_hands_medium_dark_skin_tone_dark_skin_tone:"],category:"people"},":women_holding_hands_tone5_tone1:":{uc_base:"1f469-1f3ff-1f91d-1f469-1f3fb",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb",shortnames:[":women_holding_hands_dark_skin_tone_light_skin_tone:"],category:"people"},":women_holding_hands_tone5_tone2:":{uc_base:"1f469-1f3ff-1f91d-1f469-1f3fc",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc",shortnames:[":women_holding_hands_dark_skin_tone_medium_light_skin_tone:"],category:"people"},":women_holding_hands_tone5_tone3:":{uc_base:"1f469-1f3ff-1f91d-1f469-1f3fd",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd",shortnames:[":women_holding_hands_dark_skin_tone_medium_skin_tone:"],category:"people"},":women_holding_hands_tone5_tone4:":{uc_base:"1f469-1f3ff-1f91d-1f469-1f3fe",uc_full:"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe",shortnames:[":women_holding_hands_dark_skin_tone_medium_dark_skin_tone:"],category:"people"},":family_mmbb:":{uc_base:"1f468-1f468-1f466-1f466",uc_full:"1f468-200d-1f468-200d-1f466-200d-1f466",shortnames:[],category:"people"},":family_mmgb:":{uc_base:"1f468-1f468-1f467-1f466",uc_full:"1f468-200d-1f468-200d-1f467-200d-1f466",shortnames:[],category:"people"},":family_mmgg:":{uc_base:"1f468-1f468-1f467-1f467",uc_full:"1f468-200d-1f468-200d-1f467-200d-1f467",shortnames:[],category:"people"},":family_mwbb:":{uc_base:"1f468-1f469-1f466-1f466",uc_full:"1f468-200d-1f469-200d-1f466-200d-1f466",shortnames:[],category:"people"},":family_mwgb:":{uc_base:"1f468-1f469-1f467-1f466",uc_full:"1f468-200d-1f469-200d-1f467-200d-1f466",shortnames:[],category:"people"},":family_mwgg:":{uc_base:"1f468-1f469-1f467-1f467",uc_full:"1f468-200d-1f469-200d-1f467-200d-1f467",shortnames:[],category:"people"},":family_wwbb:":{uc_base:"1f469-1f469-1f466-1f466",uc_full:"1f469-200d-1f469-200d-1f466-200d-1f466",shortnames:[],category:"people"},":family_wwgb:":{uc_base:"1f469-1f469-1f467-1f466",uc_full:"1f469-200d-1f469-200d-1f467-200d-1f466",shortnames:[],category:"people"},":family_wwgg:":{uc_base:"1f469-1f469-1f467-1f467",uc_full:"1f469-200d-1f469-200d-1f467-200d-1f467",shortnames:[],category:"people"},":kiss_mm:":{uc_base:"1f468-2764-1f48b-1f468",uc_full:"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",shortnames:[":couplekiss_mm:"],category:"people"},":kiss_woman_man:":{uc_base:"1f469-2764-1f48b-1f468",uc_full:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",shortnames:[],category:"people"},":kiss_ww:":{uc_base:"1f469-2764-1f48b-1f469",uc_full:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",shortnames:[":couplekiss_ww:"],category:"people"},":artist_tone1:":{uc_base:"1f9d1-1f3fb-1f3a8",uc_full:"1f9d1-1f3fb-200d-1f3a8",shortnames:[":artist_light_skin_tone:"],category:"people"},":artist_tone2:":{uc_base:"1f9d1-1f3fc-1f3a8",uc_full:"1f9d1-1f3fc-200d-1f3a8",shortnames:[":artist_medium_light_skin_tone:"],category:"people"},":artist_tone3:":{uc_base:"1f9d1-1f3fd-1f3a8",uc_full:"1f9d1-1f3fd-200d-1f3a8",shortnames:[":artist_medium_skin_tone:"],category:"people"},":artist_tone4:":{uc_base:"1f9d1-1f3fe-1f3a8",uc_full:"1f9d1-1f3fe-200d-1f3a8",shortnames:[":artist_medium_dark_skin_tone:"],category:"people"},":artist_tone5:":{uc_base:"1f9d1-1f3ff-1f3a8",uc_full:"1f9d1-1f3ff-200d-1f3a8",shortnames:[":artist_dark_skin_tone:"],category:"people"},":astronaut_tone1:":{uc_base:"1f9d1-1f3fb-1f680",uc_full:"1f9d1-1f3fb-200d-1f680",shortnames:[":astronaut_light_skin_tone:"],category:"people"},":astronaut_tone2:":{uc_base:"1f9d1-1f3fc-1f680",uc_full:"1f9d1-1f3fc-200d-1f680",shortnames:[":astronaut_medium_light_skin_tone:"],category:"people"},":astronaut_tone3:":{uc_base:"1f9d1-1f3fd-1f680",uc_full:"1f9d1-1f3fd-200d-1f680",shortnames:[":astronaut_medium_skin_tone:"],category:"people"},":astronaut_tone4:":{uc_base:"1f9d1-1f3fe-1f680",uc_full:"1f9d1-1f3fe-200d-1f680",shortnames:[":astronaut_medium_dark_skin_tone:"],category:"people"},":astronaut_tone5:":{uc_base:"1f9d1-1f3ff-1f680",uc_full:"1f9d1-1f3ff-200d-1f680",shortnames:[":astronaut_dark_skin_tone:"],category:"people"},":cook_tone1:":{uc_base:"1f9d1-1f3fb-1f373",uc_full:"1f9d1-1f3fb-200d-1f373",shortnames:[":cook_light_skin_tone:"],category:"people"},":cook_tone2:":{uc_base:"1f9d1-1f3fc-1f373",uc_full:"1f9d1-1f3fc-200d-1f373",shortnames:[":cook_medium_light_skin_tone:"],category:"people"},":cook_tone3:":{uc_base:"1f9d1-1f3fd-1f373",uc_full:"1f9d1-1f3fd-200d-1f373",shortnames:[":cook_medium_skin_tone:"],category:"people"},":cook_tone4:":{uc_base:"1f9d1-1f3fe-1f373",uc_full:"1f9d1-1f3fe-200d-1f373",shortnames:[":cook_medium_dark_skin_tone:"],category:"people"},":cook_tone5:":{uc_base:"1f9d1-1f3ff-1f373",uc_full:"1f9d1-1f3ff-200d-1f373",shortnames:[":cook_dark_skin_tone:"],category:"people"},":factory_worker_tone1:":{uc_base:"1f9d1-1f3fb-1f3ed",uc_full:"1f9d1-1f3fb-200d-1f3ed",shortnames:[":factory_worker_light_skin_tone:"],category:"people"},":factory_worker_tone2:":{uc_base:"1f9d1-1f3fc-1f3ed",uc_full:"1f9d1-1f3fc-200d-1f3ed",shortnames:[":factory_worker_medium_light_skin_tone:"],category:"people"},":factory_worker_tone3:":{uc_base:"1f9d1-1f3fd-1f3ed",uc_full:"1f9d1-1f3fd-200d-1f3ed",shortnames:[":factory_worker_medium_skin_tone:"],category:"people"},":factory_worker_tone4:":{uc_base:"1f9d1-1f3fe-1f3ed",uc_full:"1f9d1-1f3fe-200d-1f3ed",shortnames:[":factory_worker_medium_dark_skin_tone:"],category:"people"},":factory_worker_tone5:":{uc_base:"1f9d1-1f3ff-1f3ed",uc_full:"1f9d1-1f3ff-200d-1f3ed",shortnames:[":factory_worker_dark_skin_tone:"],category:"people"},":family_man_boy_boy:":{uc_base:"1f468-1f466-1f466",uc_full:"1f468-200d-1f466-200d-1f466",shortnames:[],category:"people"},":family_man_girl_boy:":{uc_base:"1f468-1f467-1f466",uc_full:"1f468-200d-1f467-200d-1f466",shortnames:[],category:"people"},":family_man_girl_girl:":{uc_base:"1f468-1f467-1f467",uc_full:"1f468-200d-1f467-200d-1f467",shortnames:[],category:"people"},":family_man_woman_boy:":{uc_base:"1f468-1f469-1f466",uc_full:"1f468-200d-1f469-200d-1f466",shortnames:[],category:"people"},":family_mmb:":{uc_base:"1f468-1f468-1f466",uc_full:"1f468-200d-1f468-200d-1f466",shortnames:[],category:"people"},":family_mmg:":{uc_base:"1f468-1f468-1f467",uc_full:"1f468-200d-1f468-200d-1f467",shortnames:[],category:"people"},":family_mwg:":{uc_base:"1f468-1f469-1f467",uc_full:"1f468-200d-1f469-200d-1f467",shortnames:[],category:"people"},":family_woman_boy_boy:":{uc_base:"1f469-1f466-1f466",uc_full:"1f469-200d-1f466-200d-1f466",shortnames:[],category:"people"},":family_woman_girl_boy:":{uc_base:"1f469-1f467-1f466",uc_full:"1f469-200d-1f467-200d-1f466",shortnames:[],category:"people"},":family_woman_girl_girl:":{uc_base:"1f469-1f467-1f467",uc_full:"1f469-200d-1f467-200d-1f467",shortnames:[],category:"people"},":family_wwb:":{uc_base:"1f469-1f469-1f466",uc_full:"1f469-200d-1f469-200d-1f466",shortnames:[],category:"people"},":family_wwg:":{uc_base:"1f469-1f469-1f467",uc_full:"1f469-200d-1f469-200d-1f467",shortnames:[],category:"people"},":farmer_tone1:":{uc_base:"1f9d1-1f3fb-1f33e",uc_full:"1f9d1-1f3fb-200d-1f33e",shortnames:[":farmer_light_skin_tone:"],category:"people"},":farmer_tone2:":{uc_base:"1f9d1-1f3fc-1f33e",uc_full:"1f9d1-1f3fc-200d-1f33e",shortnames:[":farmer_medium_light_skin_tone:"],category:"people"},":farmer_tone3:":{uc_base:"1f9d1-1f3fd-1f33e",uc_full:"1f9d1-1f3fd-200d-1f33e",shortnames:[":farmer_medium_skin_tone:"],category:"people"},":farmer_tone4:":{uc_base:"1f9d1-1f3fe-1f33e",uc_full:"1f9d1-1f3fe-200d-1f33e",shortnames:[":farmer_medium_dark_skin_tone:"],category:"people"},":farmer_tone5:":{uc_base:"1f9d1-1f3ff-1f33e",uc_full:"1f9d1-1f3ff-200d-1f33e",shortnames:[":farmer_dark_skin_tone:"],category:"people"},":firefighter_tone1:":{uc_base:"1f9d1-1f3fb-1f692",uc_full:"1f9d1-1f3fb-200d-1f692",shortnames:[":firefighter_light_skin_tone:"],category:"people"},":firefighter_tone2:":{uc_base:"1f9d1-1f3fc-1f692",uc_full:"1f9d1-1f3fc-200d-1f692",shortnames:[":firefighter_medium_light_skin_tone:"],category:"people"},":firefighter_tone3:":{uc_base:"1f9d1-1f3fd-1f692",uc_full:"1f9d1-1f3fd-200d-1f692",shortnames:[":firefighter_medium_skin_tone:"],category:"people"},":firefighter_tone4:":{uc_base:"1f9d1-1f3fe-1f692",uc_full:"1f9d1-1f3fe-200d-1f692",shortnames:[":firefighter_medium_dark_skin_tone:"],category:"people"},":firefighter_tone5:":{uc_base:"1f9d1-1f3ff-1f692",uc_full:"1f9d1-1f3ff-200d-1f692",shortnames:[":firefighter_dark_skin_tone:"],category:"people"},":man_artist_tone1:":{uc_base:"1f468-1f3fb-1f3a8",uc_full:"1f468-1f3fb-200d-1f3a8",shortnames:[":man_artist_light_skin_tone:"],category:"people"},":man_artist_tone2:":{uc_base:"1f468-1f3fc-1f3a8",uc_full:"1f468-1f3fc-200d-1f3a8",shortnames:[":man_artist_medium_light_skin_tone:"],category:"people"},":man_artist_tone3:":{uc_base:"1f468-1f3fd-1f3a8",uc_full:"1f468-1f3fd-200d-1f3a8",shortnames:[":man_artist_medium_skin_tone:"],category:"people"},":man_artist_tone4:":{uc_base:"1f468-1f3fe-1f3a8",uc_full:"1f468-1f3fe-200d-1f3a8",shortnames:[":man_artist_medium_dark_skin_tone:"],category:"people"},":man_artist_tone5:":{uc_base:"1f468-1f3ff-1f3a8",uc_full:"1f468-1f3ff-200d-1f3a8",shortnames:[":man_artist_dark_skin_tone:"],category:"people"},":man_astronaut_tone1:":{uc_base:"1f468-1f3fb-1f680",uc_full:"1f468-1f3fb-200d-1f680",shortnames:[":man_astronaut_light_skin_tone:"],category:"people"},":man_astronaut_tone2:":{uc_base:"1f468-1f3fc-1f680",uc_full:"1f468-1f3fc-200d-1f680",shortnames:[":man_astronaut_medium_light_skin_tone:"],category:"people"},":man_astronaut_tone3:":{uc_base:"1f468-1f3fd-1f680",uc_full:"1f468-1f3fd-200d-1f680",shortnames:[":man_astronaut_medium_skin_tone:"],category:"people"},":man_astronaut_tone4:":{uc_base:"1f468-1f3fe-1f680",uc_full:"1f468-1f3fe-200d-1f680",shortnames:[":man_astronaut_medium_dark_skin_tone:"],category:"people"},":man_astronaut_tone5:":{uc_base:"1f468-1f3ff-1f680",uc_full:"1f468-1f3ff-200d-1f680",shortnames:[":man_astronaut_dark_skin_tone:"],category:"people"},":man_bald_tone1:":{uc_base:"1f468-1f3fb-1f9b2",uc_full:"1f468-1f3fb-200d-1f9b2",shortnames:[":man_bald_light_skin_tone:"],category:"people"},":man_bald_tone2:":{uc_base:"1f468-1f3fc-1f9b2",uc_full:"1f468-1f3fc-200d-1f9b2",shortnames:[":man_bald_medium_light_skin_tone:"],category:"people"},":man_bald_tone3:":{uc_base:"1f468-1f3fd-1f9b2",uc_full:"1f468-1f3fd-200d-1f9b2",shortnames:[":man_bald_medium_skin_tone:"],category:"people"},":man_bald_tone4:":{uc_base:"1f468-1f3fe-1f9b2",uc_full:"1f468-1f3fe-200d-1f9b2",shortnames:[":man_bald_medium_dark_skin_tone:"],category:"people"},":man_bald_tone5:":{uc_base:"1f468-1f3ff-1f9b2",uc_full:"1f468-1f3ff-200d-1f9b2",shortnames:[":man_bald_dark_skin_tone:"],category:"people"},":man_cook_tone1:":{uc_base:"1f468-1f3fb-1f373",uc_full:"1f468-1f3fb-200d-1f373",shortnames:[":man_cook_light_skin_tone:"],category:"people"},":man_cook_tone2:":{uc_base:"1f468-1f3fc-1f373",uc_full:"1f468-1f3fc-200d-1f373",shortnames:[":man_cook_medium_light_skin_tone:"],category:"people"},":man_cook_tone3:":{uc_base:"1f468-1f3fd-1f373",uc_full:"1f468-1f3fd-200d-1f373",shortnames:[":man_cook_medium_skin_tone:"],category:"people"},":man_cook_tone4:":{uc_base:"1f468-1f3fe-1f373",uc_full:"1f468-1f3fe-200d-1f373",shortnames:[":man_cook_medium_dark_skin_tone:"],category:"people"},":man_cook_tone5:":{uc_base:"1f468-1f3ff-1f373",uc_full:"1f468-1f3ff-200d-1f373",shortnames:[":man_cook_dark_skin_tone:"],category:"people"},":man_curly_haired_tone1:":{uc_base:"1f468-1f3fb-1f9b1",uc_full:"1f468-1f3fb-200d-1f9b1",shortnames:[":man_curly_haired_light_skin_tone:"],category:"people"},":man_curly_haired_tone2:":{uc_base:"1f468-1f3fc-1f9b1",uc_full:"1f468-1f3fc-200d-1f9b1",shortnames:[":man_curly_haired_medium_light_skin_tone:"],category:"people"},":man_curly_haired_tone3:":{uc_base:"1f468-1f3fd-1f9b1",uc_full:"1f468-1f3fd-200d-1f9b1",shortnames:[":man_curly_haired_medium_skin_tone:"],category:"people"},":man_curly_haired_tone4:":{uc_base:"1f468-1f3fe-1f9b1",uc_full:"1f468-1f3fe-200d-1f9b1",shortnames:[":man_curly_haired_medium_dark_skin_tone:"],category:"people"},":man_curly_haired_tone5:":{uc_base:"1f468-1f3ff-1f9b1",uc_full:"1f468-1f3ff-200d-1f9b1",shortnames:[":man_curly_haired_dark_skin_tone:"],category:"people"},":man_factory_worker_tone1:":{uc_base:"1f468-1f3fb-1f3ed",uc_full:"1f468-1f3fb-200d-1f3ed",shortnames:[":man_factory_worker_light_skin_tone:"],category:"people"},":man_factory_worker_tone2:":{uc_base:"1f468-1f3fc-1f3ed",uc_full:"1f468-1f3fc-200d-1f3ed",shortnames:[":man_factory_worker_medium_light_skin_tone:"],category:"people"},":man_factory_worker_tone3:":{uc_base:"1f468-1f3fd-1f3ed",uc_full:"1f468-1f3fd-200d-1f3ed",shortnames:[":man_factory_worker_medium_skin_tone:"],category:"people"},":man_factory_worker_tone4:":{uc_base:"1f468-1f3fe-1f3ed",uc_full:"1f468-1f3fe-200d-1f3ed",shortnames:[":man_factory_worker_medium_dark_skin_tone:"],category:"people"},":man_factory_worker_tone5:":{uc_base:"1f468-1f3ff-1f3ed",uc_full:"1f468-1f3ff-200d-1f3ed",shortnames:[":man_factory_worker_dark_skin_tone:"],category:"people"},":man_farmer_tone1:":{uc_base:"1f468-1f3fb-1f33e",uc_full:"1f468-1f3fb-200d-1f33e",shortnames:[":man_farmer_light_skin_tone:"],category:"people"},":man_farmer_tone2:":{uc_base:"1f468-1f3fc-1f33e",uc_full:"1f468-1f3fc-200d-1f33e",shortnames:[":man_farmer_medium_light_skin_tone:"],category:"people"},":man_farmer_tone3:":{uc_base:"1f468-1f3fd-1f33e",uc_full:"1f468-1f3fd-200d-1f33e",shortnames:[":man_farmer_medium_skin_tone:"],category:"people"},":man_farmer_tone4:":{uc_base:"1f468-1f3fe-1f33e",uc_full:"1f468-1f3fe-200d-1f33e",shortnames:[":man_farmer_medium_dark_skin_tone:"],category:"people"},":man_farmer_tone5:":{
uc_base:"1f468-1f3ff-1f33e",uc_full:"1f468-1f3ff-200d-1f33e",shortnames:[":man_farmer_dark_skin_tone:"],category:"people"},":man_feeding_baby_tone1:":{uc_base:"1f468-1f3fb-1f37c",uc_full:"1f468-1f3fb-200d-1f37c",shortnames:[":man_feeding_baby_light_skin_tone:"],category:"people"},":man_feeding_baby_tone2:":{uc_base:"1f468-1f3fc-1f37c",uc_full:"1f468-1f3fc-200d-1f37c",shortnames:[":man_feeding_baby_medium_light_skin_tone:"],category:"people"},":man_feeding_baby_tone3:":{uc_base:"1f468-1f3fd-1f37c",uc_full:"1f468-1f3fd-200d-1f37c",shortnames:[":man_feeding_baby_medium_skin_tone:"],category:"people"},":man_feeding_baby_tone4:":{uc_base:"1f468-1f3fe-1f37c",uc_full:"1f468-1f3fe-200d-1f37c",shortnames:[":man_feeding_baby_medium_dark_skin_tone:"],category:"people"},":man_feeding_baby_tone5:":{uc_base:"1f468-1f3ff-1f37c",uc_full:"1f468-1f3ff-200d-1f37c",shortnames:[":man_feeding_baby_dark_skin_tone:"],category:"people"},":man_firefighter_tone1:":{uc_base:"1f468-1f3fb-1f692",uc_full:"1f468-1f3fb-200d-1f692",shortnames:[":man_firefighter_light_skin_tone:"],category:"people"},":man_firefighter_tone2:":{uc_base:"1f468-1f3fc-1f692",uc_full:"1f468-1f3fc-200d-1f692",shortnames:[":man_firefighter_medium_light_skin_tone:"],category:"people"},":man_firefighter_tone3:":{uc_base:"1f468-1f3fd-1f692",uc_full:"1f468-1f3fd-200d-1f692",shortnames:[":man_firefighter_medium_skin_tone:"],category:"people"},":man_firefighter_tone4:":{uc_base:"1f468-1f3fe-1f692",uc_full:"1f468-1f3fe-200d-1f692",shortnames:[":man_firefighter_medium_dark_skin_tone:"],category:"people"},":man_firefighter_tone5:":{uc_base:"1f468-1f3ff-1f692",uc_full:"1f468-1f3ff-200d-1f692",shortnames:[":man_firefighter_dark_skin_tone:"],category:"people"},":man_in_manual_wheelchair_tone1:":{uc_base:"1f468-1f3fb-1f9bd",uc_full:"1f468-1f3fb-200d-1f9bd",shortnames:[":man_in_manual_wheelchair_light_skin_tone:"],category:"people"},":man_in_manual_wheelchair_tone2:":{uc_base:"1f468-1f3fc-1f9bd",uc_full:"1f468-1f3fc-200d-1f9bd",shortnames:[":man_in_manual_wheelchair_medium_light_skin_tone:"],category:"people"},":man_in_manual_wheelchair_tone3:":{uc_base:"1f468-1f3fd-1f9bd",uc_full:"1f468-1f3fd-200d-1f9bd",shortnames:[":man_in_manual_wheelchair_medium_skin_tone:"],category:"people"},":man_in_manual_wheelchair_tone4:":{uc_base:"1f468-1f3fe-1f9bd",uc_full:"1f468-1f3fe-200d-1f9bd",shortnames:[":man_in_manual_wheelchair_medium_dark_skin_tone:"],category:"people"},":man_in_manual_wheelchair_tone5:":{uc_base:"1f468-1f3ff-1f9bd",uc_full:"1f468-1f3ff-200d-1f9bd",shortnames:[":man_in_manual_wheelchair_dark_skin_tone:"],category:"people"},":man_in_motorized_wheelchair_tone1:":{uc_base:"1f468-1f3fb-1f9bc",uc_full:"1f468-1f3fb-200d-1f9bc",shortnames:[":man_in_motorized_wheelchair_light_skin_tone:"],category:"people"},":man_in_motorized_wheelchair_tone2:":{uc_base:"1f468-1f3fc-1f9bc",uc_full:"1f468-1f3fc-200d-1f9bc",shortnames:[":man_in_motorized_wheelchair_medium_light_skin_tone:"],category:"people"},":man_in_motorized_wheelchair_tone3:":{uc_base:"1f468-1f3fd-1f9bc",uc_full:"1f468-1f3fd-200d-1f9bc",shortnames:[":man_in_motorized_wheelchair_medium_skin_tone:"],category:"people"},":man_in_motorized_wheelchair_tone4:":{uc_base:"1f468-1f3fe-1f9bc",uc_full:"1f468-1f3fe-200d-1f9bc",shortnames:[":man_in_motorized_wheelchair_medium_dark_skin_tone:"],category:"people"},":man_in_motorized_wheelchair_tone5:":{uc_base:"1f468-1f3ff-1f9bc",uc_full:"1f468-1f3ff-200d-1f9bc",shortnames:[":man_in_motorized_wheelchair_dark_skin_tone:"],category:"people"},":man_mechanic_tone1:":{uc_base:"1f468-1f3fb-1f527",uc_full:"1f468-1f3fb-200d-1f527",shortnames:[":man_mechanic_light_skin_tone:"],category:"people"},":man_mechanic_tone2:":{uc_base:"1f468-1f3fc-1f527",uc_full:"1f468-1f3fc-200d-1f527",shortnames:[":man_mechanic_medium_light_skin_tone:"],category:"people"},":man_mechanic_tone3:":{uc_base:"1f468-1f3fd-1f527",uc_full:"1f468-1f3fd-200d-1f527",shortnames:[":man_mechanic_medium_skin_tone:"],category:"people"},":man_mechanic_tone4:":{uc_base:"1f468-1f3fe-1f527",uc_full:"1f468-1f3fe-200d-1f527",shortnames:[":man_mechanic_medium_dark_skin_tone:"],category:"people"},":man_mechanic_tone5:":{uc_base:"1f468-1f3ff-1f527",uc_full:"1f468-1f3ff-200d-1f527",shortnames:[":man_mechanic_dark_skin_tone:"],category:"people"},":man_office_worker_tone1:":{uc_base:"1f468-1f3fb-1f4bc",uc_full:"1f468-1f3fb-200d-1f4bc",shortnames:[":man_office_worker_light_skin_tone:"],category:"people"},":man_office_worker_tone2:":{uc_base:"1f468-1f3fc-1f4bc",uc_full:"1f468-1f3fc-200d-1f4bc",shortnames:[":man_office_worker_medium_light_skin_tone:"],category:"people"},":man_office_worker_tone3:":{uc_base:"1f468-1f3fd-1f4bc",uc_full:"1f468-1f3fd-200d-1f4bc",shortnames:[":man_office_worker_medium_skin_tone:"],category:"people"},":man_office_worker_tone4:":{uc_base:"1f468-1f3fe-1f4bc",uc_full:"1f468-1f3fe-200d-1f4bc",shortnames:[":man_office_worker_medium_dark_skin_tone:"],category:"people"},":man_office_worker_tone5:":{uc_base:"1f468-1f3ff-1f4bc",uc_full:"1f468-1f3ff-200d-1f4bc",shortnames:[":man_office_worker_dark_skin_tone:"],category:"people"},":man_red_haired_tone1:":{uc_base:"1f468-1f3fb-1f9b0",uc_full:"1f468-1f3fb-200d-1f9b0",shortnames:[":man_red_haired_light_skin_tone:"],category:"people"},":man_red_haired_tone2:":{uc_base:"1f468-1f3fc-1f9b0",uc_full:"1f468-1f3fc-200d-1f9b0",shortnames:[":man_red_haired_medium_light_skin_tone:"],category:"people"},":man_red_haired_tone3:":{uc_base:"1f468-1f3fd-1f9b0",uc_full:"1f468-1f3fd-200d-1f9b0",shortnames:[":man_red_haired_medium_skin_tone:"],category:"people"},":man_red_haired_tone4:":{uc_base:"1f468-1f3fe-1f9b0",uc_full:"1f468-1f3fe-200d-1f9b0",shortnames:[":man_red_haired_medium_dark_skin_tone:"],category:"people"},":man_red_haired_tone5:":{uc_base:"1f468-1f3ff-1f9b0",uc_full:"1f468-1f3ff-200d-1f9b0",shortnames:[":man_red_haired_dark_skin_tone:"],category:"people"},":man_scientist_tone1:":{uc_base:"1f468-1f3fb-1f52c",uc_full:"1f468-1f3fb-200d-1f52c",shortnames:[":man_scientist_light_skin_tone:"],category:"people"},":man_scientist_tone2:":{uc_base:"1f468-1f3fc-1f52c",uc_full:"1f468-1f3fc-200d-1f52c",shortnames:[":man_scientist_medium_light_skin_tone:"],category:"people"},":man_scientist_tone3:":{uc_base:"1f468-1f3fd-1f52c",uc_full:"1f468-1f3fd-200d-1f52c",shortnames:[":man_scientist_medium_skin_tone:"],category:"people"},":man_scientist_tone4:":{uc_base:"1f468-1f3fe-1f52c",uc_full:"1f468-1f3fe-200d-1f52c",shortnames:[":man_scientist_medium_dark_skin_tone:"],category:"people"},":man_scientist_tone5:":{uc_base:"1f468-1f3ff-1f52c",uc_full:"1f468-1f3ff-200d-1f52c",shortnames:[":man_scientist_dark_skin_tone:"],category:"people"},":man_singer_tone1:":{uc_base:"1f468-1f3fb-1f3a4",uc_full:"1f468-1f3fb-200d-1f3a4",shortnames:[":man_singer_light_skin_tone:"],category:"people"},":man_singer_tone2:":{uc_base:"1f468-1f3fc-1f3a4",uc_full:"1f468-1f3fc-200d-1f3a4",shortnames:[":man_singer_medium_light_skin_tone:"],category:"people"},":man_singer_tone3:":{uc_base:"1f468-1f3fd-1f3a4",uc_full:"1f468-1f3fd-200d-1f3a4",shortnames:[":man_singer_medium_skin_tone:"],category:"people"},":man_singer_tone4:":{uc_base:"1f468-1f3fe-1f3a4",uc_full:"1f468-1f3fe-200d-1f3a4",shortnames:[":man_singer_medium_dark_skin_tone:"],category:"people"},":man_singer_tone5:":{uc_base:"1f468-1f3ff-1f3a4",uc_full:"1f468-1f3ff-200d-1f3a4",shortnames:[":man_singer_dark_skin_tone:"],category:"people"},":man_student_tone1:":{uc_base:"1f468-1f3fb-1f393",uc_full:"1f468-1f3fb-200d-1f393",shortnames:[":man_student_light_skin_tone:"],category:"people"},":man_student_tone2:":{uc_base:"1f468-1f3fc-1f393",uc_full:"1f468-1f3fc-200d-1f393",shortnames:[":man_student_medium_light_skin_tone:"],category:"people"},":man_student_tone3:":{uc_base:"1f468-1f3fd-1f393",uc_full:"1f468-1f3fd-200d-1f393",shortnames:[":man_student_medium_skin_tone:"],category:"people"},":man_student_tone4:":{uc_base:"1f468-1f3fe-1f393",uc_full:"1f468-1f3fe-200d-1f393",shortnames:[":man_student_medium_dark_skin_tone:"],category:"people"},":man_student_tone5:":{uc_base:"1f468-1f3ff-1f393",uc_full:"1f468-1f3ff-200d-1f393",shortnames:[":man_student_dark_skin_tone:"],category:"people"},":man_teacher_tone1:":{uc_base:"1f468-1f3fb-1f3eb",uc_full:"1f468-1f3fb-200d-1f3eb",shortnames:[":man_teacher_light_skin_tone:"],category:"people"},":man_teacher_tone2:":{uc_base:"1f468-1f3fc-1f3eb",uc_full:"1f468-1f3fc-200d-1f3eb",shortnames:[":man_teacher_medium_light_skin_tone:"],category:"people"},":man_teacher_tone3:":{uc_base:"1f468-1f3fd-1f3eb",uc_full:"1f468-1f3fd-200d-1f3eb",shortnames:[":man_teacher_medium_skin_tone:"],category:"people"},":man_teacher_tone4:":{uc_base:"1f468-1f3fe-1f3eb",uc_full:"1f468-1f3fe-200d-1f3eb",shortnames:[":man_teacher_medium_dark_skin_tone:"],category:"people"},":man_teacher_tone5:":{uc_base:"1f468-1f3ff-1f3eb",uc_full:"1f468-1f3ff-200d-1f3eb",shortnames:[":man_teacher_dark_skin_tone:"],category:"people"},":man_technologist_tone1:":{uc_base:"1f468-1f3fb-1f4bb",uc_full:"1f468-1f3fb-200d-1f4bb",shortnames:[":man_technologist_light_skin_tone:"],category:"people"},":man_technologist_tone2:":{uc_base:"1f468-1f3fc-1f4bb",uc_full:"1f468-1f3fc-200d-1f4bb",shortnames:[":man_technologist_medium_light_skin_tone:"],category:"people"},":man_technologist_tone3:":{uc_base:"1f468-1f3fd-1f4bb",uc_full:"1f468-1f3fd-200d-1f4bb",shortnames:[":man_technologist_medium_skin_tone:"],category:"people"},":man_technologist_tone4:":{uc_base:"1f468-1f3fe-1f4bb",uc_full:"1f468-1f3fe-200d-1f4bb",shortnames:[":man_technologist_medium_dark_skin_tone:"],category:"people"},":man_technologist_tone5:":{uc_base:"1f468-1f3ff-1f4bb",uc_full:"1f468-1f3ff-200d-1f4bb",shortnames:[":man_technologist_dark_skin_tone:"],category:"people"},":man_white_haired_tone1:":{uc_base:"1f468-1f3fb-1f9b3",uc_full:"1f468-1f3fb-200d-1f9b3",shortnames:[":man_white_haired_light_skin_tone:"],category:"people"},":man_white_haired_tone2:":{uc_base:"1f468-1f3fc-1f9b3",uc_full:"1f468-1f3fc-200d-1f9b3",shortnames:[":man_white_haired_medium_light_skin_tone:"],category:"people"},":man_white_haired_tone3:":{uc_base:"1f468-1f3fd-1f9b3",uc_full:"1f468-1f3fd-200d-1f9b3",shortnames:[":man_white_haired_medium_skin_tone:"],category:"people"},":man_white_haired_tone4:":{uc_base:"1f468-1f3fe-1f9b3",uc_full:"1f468-1f3fe-200d-1f9b3",shortnames:[":man_white_haired_medium_dark_skin_tone:"],category:"people"},":man_white_haired_tone5:":{uc_base:"1f468-1f3ff-1f9b3",uc_full:"1f468-1f3ff-200d-1f9b3",shortnames:[":man_white_haired_dark_skin_tone:"],category:"people"},":man_with_probing_cane_tone1:":{uc_base:"1f468-1f3fb-1f9af",uc_full:"1f468-1f3fb-200d-1f9af",shortnames:[":man_with_probing_cane_light_skin_tone:"],category:"people"},":man_with_probing_cane_tone2:":{uc_base:"1f468-1f3fc-1f9af",uc_full:"1f468-1f3fc-200d-1f9af",shortnames:[":man_with_probing_cane_medium_light_skin_tone:"],category:"people"},":man_with_probing_cane_tone3:":{uc_base:"1f468-1f3fd-1f9af",uc_full:"1f468-1f3fd-200d-1f9af",shortnames:[":man_with_probing_cane_medium_skin_tone:"],category:"people"},":man_with_probing_cane_tone4:":{uc_base:"1f468-1f3fe-1f9af",uc_full:"1f468-1f3fe-200d-1f9af",shortnames:[":man_with_probing_cane_medium_dark_skin_tone:"],category:"people"},":man_with_probing_cane_tone5:":{uc_base:"1f468-1f3ff-1f9af",uc_full:"1f468-1f3ff-200d-1f9af",shortnames:[":man_with_probing_cane_dark_skin_tone:"],category:"people"},":mechanic_tone1:":{uc_base:"1f9d1-1f3fb-1f527",uc_full:"1f9d1-1f3fb-200d-1f527",shortnames:[":mechanic_light_skin_tone:"],category:"people"},":mechanic_tone2:":{uc_base:"1f9d1-1f3fc-1f527",uc_full:"1f9d1-1f3fc-200d-1f527",shortnames:[":mechanic_medium_light_skin_tone:"],category:"people"},":mechanic_tone3:":{uc_base:"1f9d1-1f3fd-1f527",uc_full:"1f9d1-1f3fd-200d-1f527",shortnames:[":mechanic_medium_skin_tone:"],category:"people"},":mechanic_tone4:":{uc_base:"1f9d1-1f3fe-1f527",uc_full:"1f9d1-1f3fe-200d-1f527",shortnames:[":mechanic_medium_dark_skin_tone:"],category:"people"},":mechanic_tone5:":{uc_base:"1f9d1-1f3ff-1f527",uc_full:"1f9d1-1f3ff-200d-1f527",shortnames:[":mechanic_dark_skin_tone:"],category:"people"},":mx_claus_tone1:":{uc_base:"1f9d1-1f3fb-1f384",uc_full:"1f9d1-1f3fb-200d-1f384",shortnames:[":mx_claus_light_skin_tone:"],category:"people"},":mx_claus_tone2:":{uc_base:"1f9d1-1f3fc-1f384",uc_full:"1f9d1-1f3fc-200d-1f384",shortnames:[":mx_claus_medium_light_skin_tone:"],category:"people"},":mx_claus_tone3:":{uc_base:"1f9d1-1f3fd-1f384",uc_full:"1f9d1-1f3fd-200d-1f384",shortnames:[":mx_claus_medium_skin_tone:"],category:"people"},":mx_claus_tone4:":{uc_base:"1f9d1-1f3fe-1f384",uc_full:"1f9d1-1f3fe-200d-1f384",shortnames:[":mx_claus_medium_dark_skin_tone:"],category:"people"},":mx_claus_tone5:":{uc_base:"1f9d1-1f3ff-1f384",uc_full:"1f9d1-1f3ff-200d-1f384",shortnames:[":mx_claus_dark_skin_tone:"],category:"people"},":office_worker_tone1:":{uc_base:"1f9d1-1f3fb-1f4bc",uc_full:"1f9d1-1f3fb-200d-1f4bc",shortnames:[":office_worker_light_skin_tone:"],category:"people"},":office_worker_tone2:":{uc_base:"1f9d1-1f3fc-1f4bc",uc_full:"1f9d1-1f3fc-200d-1f4bc",shortnames:[":office_worker_medium_light_skin_tone:"],category:"people"},":office_worker_tone3:":{uc_base:"1f9d1-1f3fd-1f4bc",uc_full:"1f9d1-1f3fd-200d-1f4bc",shortnames:[":office_worker_medium_skin_tone:"],category:"people"},":office_worker_tone4:":{uc_base:"1f9d1-1f3fe-1f4bc",uc_full:"1f9d1-1f3fe-200d-1f4bc",shortnames:[":office_worker_medium_dark_skin_tone:"],category:"people"},":office_worker_tone5:":{uc_base:"1f9d1-1f3ff-1f4bc",uc_full:"1f9d1-1f3ff-200d-1f4bc",shortnames:[":office_worker_dark_skin_tone:"],category:"people"},":people_holding_hands:":{uc_base:"1f9d1-1f91d-1f9d1",uc_full:"1f9d1-200d-1f91d-200d-1f9d1",shortnames:[],category:"people"},":person_feeding_baby_tone1:":{uc_base:"1f9d1-1f3fb-1f37c",uc_full:"1f9d1-1f3fb-200d-1f37c",shortnames:[":person_feeding_baby_light_skin_tone:"],category:"people"},":person_feeding_baby_tone2:":{uc_base:"1f9d1-1f3fc-1f37c",uc_full:"1f9d1-1f3fc-200d-1f37c",shortnames:[":person_feeding_baby_medium_light_skin_tone:"],category:"people"},":person_feeding_baby_tone3:":{uc_base:"1f9d1-1f3fd-1f37c",uc_full:"1f9d1-1f3fd-200d-1f37c",shortnames:[":person_feeding_baby_medium_skin_tone:"],category:"people"},":person_feeding_baby_tone4:":{uc_base:"1f9d1-1f3fe-1f37c",uc_full:"1f9d1-1f3fe-200d-1f37c",shortnames:[":person_feeding_baby_medium_dark_skin_tone:"],category:"people"},":person_feeding_baby_tone5:":{uc_base:"1f9d1-1f3ff-1f37c",uc_full:"1f9d1-1f3ff-200d-1f37c",shortnames:[":person_feeding_baby_dark_skin_tone:"],category:"people"},":person_in_manual_wheelchair_tone1:":{uc_base:"1f9d1-1f3fb-1f9bd",uc_full:"1f9d1-1f3fb-200d-1f9bd",shortnames:[":person_in_manual_wheelchair_light_skin_tone:"],category:"people"},":person_in_manual_wheelchair_tone2:":{uc_base:"1f9d1-1f3fc-1f9bd",uc_full:"1f9d1-1f3fc-200d-1f9bd",shortnames:[":person_in_manual_wheelchair_medium_light_skin_tone:"],category:"people"},":person_in_manual_wheelchair_tone3:":{uc_base:"1f9d1-1f3fd-1f9bd",uc_full:"1f9d1-1f3fd-200d-1f9bd",shortnames:[":person_in_manual_wheelchair_medium_skin_tone:"],category:"people"},":person_in_manual_wheelchair_tone4:":{uc_base:"1f9d1-1f3fe-1f9bd",uc_full:"1f9d1-1f3fe-200d-1f9bd",shortnames:[":person_in_manual_wheelchair_medium_dark_skin_tone:"],category:"people"},":person_in_manual_wheelchair_tone5:":{uc_base:"1f9d1-1f3ff-1f9bd",uc_full:"1f9d1-1f3ff-200d-1f9bd",shortnames:[":person_in_manual_wheelchair_dark_skin_tone:"],category:"people"},":person_in_motorized_wheelchair_tone1:":{uc_base:"1f9d1-1f3fb-1f9bc",uc_full:"1f9d1-1f3fb-200d-1f9bc",shortnames:[":person_in_motorized_wheelchair_light_skin_tone:"],category:"people"},":person_in_motorized_wheelchair_tone2:":{uc_base:"1f9d1-1f3fc-1f9bc",uc_full:"1f9d1-1f3fc-200d-1f9bc",shortnames:[":person_in_motorized_wheelchair_medium_light_skin_tone:"],category:"people"},":person_in_motorized_wheelchair_tone3:":{uc_base:"1f9d1-1f3fd-1f9bc",uc_full:"1f9d1-1f3fd-200d-1f9bc",shortnames:[":person_in_motorized_wheelchair_medium_skin_tone:"],category:"people"},":person_in_motorized_wheelchair_tone4:":{uc_base:"1f9d1-1f3fe-1f9bc",uc_full:"1f9d1-1f3fe-200d-1f9bc",shortnames:[":person_in_motorized_wheelchair_medium_dark_skin_tone:"],category:"people"},":person_in_motorized_wheelchair_tone5:":{uc_base:"1f9d1-1f3ff-1f9bc",uc_full:"1f9d1-1f3ff-200d-1f9bc",shortnames:[":person_in_motorized_wheelchair_dark_skin_tone:"],category:"people"},":person_tone1_bald:":{uc_base:"1f9d1-1f3fb-1f9b2",uc_full:"1f9d1-1f3fb-200d-1f9b2",shortnames:[":person_light_skin_tone_bald:"],category:"people"},":person_tone1_curly_hair:":{uc_base:"1f9d1-1f3fb-1f9b1",uc_full:"1f9d1-1f3fb-200d-1f9b1",shortnames:[":person_light_skin_tone_curly_hair:"],category:"people"},":person_tone1_red_hair:":{uc_base:"1f9d1-1f3fb-1f9b0",uc_full:"1f9d1-1f3fb-200d-1f9b0",shortnames:[":person_light_skin_tone_red_hair:"],category:"people"},":person_tone1_white_hair:":{uc_base:"1f9d1-1f3fb-1f9b3",uc_full:"1f9d1-1f3fb-200d-1f9b3",shortnames:[":person_light_skin_tone_white_hair:"],category:"people"},":person_tone2_bald:":{uc_base:"1f9d1-1f3fc-1f9b2",uc_full:"1f9d1-1f3fc-200d-1f9b2",shortnames:[":person_medium_light_skin_tone_bald:"],category:"people"},":person_tone2_curly_hair:":{uc_base:"1f9d1-1f3fc-1f9b1",uc_full:"1f9d1-1f3fc-200d-1f9b1",shortnames:[":person_medium_light_skin_tone_curly_hair:"],category:"people"},":person_tone2_red_hair:":{uc_base:"1f9d1-1f3fc-1f9b0",uc_full:"1f9d1-1f3fc-200d-1f9b0",shortnames:[":person_medium_light_skin_tone_red_hair:"],category:"people"},":person_tone2_white_hair:":{uc_base:"1f9d1-1f3fc-1f9b3",uc_full:"1f9d1-1f3fc-200d-1f9b3",shortnames:[":person_medium_light_skin_tone_white_hair:"],category:"people"},":person_tone3_bald:":{uc_base:"1f9d1-1f3fd-1f9b2",uc_full:"1f9d1-1f3fd-200d-1f9b2",shortnames:[":person_medium_skin_tone_bald:"],category:"people"},":person_tone3_curly_hair:":{uc_base:"1f9d1-1f3fd-1f9b1",uc_full:"1f9d1-1f3fd-200d-1f9b1",shortnames:[":person_medium_skin_tone_curly_hair:"],category:"people"},":person_tone3_red_hair:":{uc_base:"1f9d1-1f3fd-1f9b0",uc_full:"1f9d1-1f3fd-200d-1f9b0",shortnames:[":person_medium_skin_tone_red_hair:"],category:"people"},":person_tone3_white_hair:":{uc_base:"1f9d1-1f3fd-1f9b3",uc_full:"1f9d1-1f3fd-200d-1f9b3",shortnames:[":person_medium_skin_tone_white_hair:"],category:"people"},":person_tone4_bald:":{uc_base:"1f9d1-1f3fe-1f9b2",uc_full:"1f9d1-1f3fe-200d-1f9b2",shortnames:[":person_medium_dark_skin_tone_bald:"],category:"people"},":person_tone4_curly_hair:":{uc_base:"1f9d1-1f3fe-1f9b1",uc_full:"1f9d1-1f3fe-200d-1f9b1",shortnames:[":person_medium_dark_skin_tone_curly_hair:"],category:"people"},":person_tone4_red_hair:":{uc_base:"1f9d1-1f3fe-1f9b0",uc_full:"1f9d1-1f3fe-200d-1f9b0",shortnames:[":person_medium_dark_skin_tone_red_hair:"],category:"people"},":person_tone4_white_hair:":{uc_base:"1f9d1-1f3fe-1f9b3",uc_full:"1f9d1-1f3fe-200d-1f9b3",shortnames:[":person_medium_dark_skin_tone_white_hair:"],category:"people"},":person_tone5_bald:":{uc_base:"1f9d1-1f3ff-1f9b2",uc_full:"1f9d1-1f3ff-200d-1f9b2",shortnames:[":person_dark_skin_tone_bald:"],category:"people"},":person_tone5_curly_hair:":{uc_base:"1f9d1-1f3ff-1f9b1",uc_full:"1f9d1-1f3ff-200d-1f9b1",shortnames:[":person_dark_skin_tone_curly_hair:"],category:"people"},":person_tone5_red_hair:":{uc_base:"1f9d1-1f3ff-1f9b0",uc_full:"1f9d1-1f3ff-200d-1f9b0",shortnames:[":person_dark_skin_tone_red_hair:"],category:"people"},":person_tone5_white_hair:":{uc_base:"1f9d1-1f3ff-1f9b3",uc_full:"1f9d1-1f3ff-200d-1f9b3",shortnames:[":person_dark_skin_tone_white_hair:"],category:"people"},":person_with_probing_cane_tone1:":{uc_base:"1f9d1-1f3fb-1f9af",uc_full:"1f9d1-1f3fb-200d-1f9af",shortnames:[":person_with_probing_cane_light_skin_tone:"],category:"people"},":person_with_probing_cane_tone2:":{uc_base:"1f9d1-1f3fc-1f9af",uc_full:"1f9d1-1f3fc-200d-1f9af",shortnames:[":person_with_probing_cane_medium_light_skin_tone:"],category:"people"},":person_with_probing_cane_tone3:":{uc_base:"1f9d1-1f3fd-1f9af",uc_full:"1f9d1-1f3fd-200d-1f9af",shortnames:[":person_with_probing_cane_medium_skin_tone:"],category:"people"},":person_with_probing_cane_tone4:":{uc_base:"1f9d1-1f3fe-1f9af",uc_full:"1f9d1-1f3fe-200d-1f9af",shortnames:[":person_with_probing_cane_medium_dark_skin_tone:"],category:"people"},":person_with_probing_cane_tone5:":{uc_base:"1f9d1-1f3ff-1f9af",uc_full:"1f9d1-1f3ff-200d-1f9af",shortnames:[":person_with_probing_cane_dark_skin_tone:"],category:"people"},":scientist_tone1:":{uc_base:"1f9d1-1f3fb-1f52c",uc_full:"1f9d1-1f3fb-200d-1f52c",shortnames:[":scientist_light_skin_tone:"],category:"people"},":scientist_tone2:":{uc_base:"1f9d1-1f3fc-1f52c",uc_full:"1f9d1-1f3fc-200d-1f52c",shortnames:[":scientist_medium_light_skin_tone:"],category:"people"},":scientist_tone3:":{uc_base:"1f9d1-1f3fd-1f52c",uc_full:"1f9d1-1f3fd-200d-1f52c",shortnames:[":scientist_medium_skin_tone:"],category:"people"},":scientist_tone4:":{uc_base:"1f9d1-1f3fe-1f52c",uc_full:"1f9d1-1f3fe-200d-1f52c",shortnames:[":scientist_medium_dark_skin_tone:"],category:"people"},":scientist_tone5:":{uc_base:"1f9d1-1f3ff-1f52c",uc_full:"1f9d1-1f3ff-200d-1f52c",shortnames:[":scientist_dark_skin_tone:"],category:"people"},":singer_tone1:":{uc_base:"1f9d1-1f3fb-1f3a4",uc_full:"1f9d1-1f3fb-200d-1f3a4",shortnames:[":singer_light_skin_tone:"],category:"people"},":singer_tone2:":{uc_base:"1f9d1-1f3fc-1f3a4",uc_full:"1f9d1-1f3fc-200d-1f3a4",shortnames:[":singer_medium_light_skin_tone:"],category:"people"},":singer_tone3:":{uc_base:"1f9d1-1f3fd-1f3a4",uc_full:"1f9d1-1f3fd-200d-1f3a4",shortnames:[":singer_medium_skin_tone:"],category:"people"},":singer_tone4:":{uc_base:"1f9d1-1f3fe-1f3a4",uc_full:"1f9d1-1f3fe-200d-1f3a4",shortnames:[":singer_medium_dark_skin_tone:"],category:"people"},":singer_tone5:":{uc_base:"1f9d1-1f3ff-1f3a4",uc_full:"1f9d1-1f3ff-200d-1f3a4",shortnames:[":singer_dark_skin_tone:"],category:"people"},":student_tone1:":{uc_base:"1f9d1-1f3fb-1f393",uc_full:"1f9d1-1f3fb-200d-1f393",shortnames:[":student_light_skin_tone:"],category:"people"},":student_tone2:":{uc_base:"1f9d1-1f3fc-1f393",uc_full:"1f9d1-1f3fc-200d-1f393",shortnames:[":student_medium_light_skin_tone:"],category:"people"},":student_tone3:":{uc_base:"1f9d1-1f3fd-1f393",uc_full:"1f9d1-1f3fd-200d-1f393",shortnames:[":student_medium_skin_tone:"],category:"people"},":student_tone4:":{uc_base:"1f9d1-1f3fe-1f393",uc_full:"1f9d1-1f3fe-200d-1f393",shortnames:[":student_medium_dark_skin_tone:"],category:"people"},":student_tone5:":{uc_base:"1f9d1-1f3ff-1f393",uc_full:"1f9d1-1f3ff-200d-1f393",shortnames:[":student_dark_skin_tone:"],category:"people"},":teacher_tone1:":{uc_base:"1f9d1-1f3fb-1f3eb",uc_full:"1f9d1-1f3fb-200d-1f3eb",shortnames:[":teacher_light_skin_tone:"],category:"people"},":teacher_tone2:":{uc_base:"1f9d1-1f3fc-1f3eb",uc_full:"1f9d1-1f3fc-200d-1f3eb",shortnames:[":teacher_medium_light_skin_tone:"],category:"people"},":teacher_tone3:":{uc_base:"1f9d1-1f3fd-1f3eb",uc_full:"1f9d1-1f3fd-200d-1f3eb",shortnames:[":teacher_medium_skin_tone:"],category:"people"},":teacher_tone4:":{uc_base:"1f9d1-1f3fe-1f3eb",uc_full:"1f9d1-1f3fe-200d-1f3eb",shortnames:[":teacher_medium_dark_skin_tone:"],category:"people"},":teacher_tone5:":{uc_base:"1f9d1-1f3ff-1f3eb",uc_full:"1f9d1-1f3ff-200d-1f3eb",shortnames:[":teacher_dark_skin_tone:"],category:"people"},":technologist_tone1:":{uc_base:"1f9d1-1f3fb-1f4bb",uc_full:"1f9d1-1f3fb-200d-1f4bb",shortnames:[":technologist_light_skin_tone:"],category:"people"},":technologist_tone2:":{uc_base:"1f9d1-1f3fc-1f4bb",uc_full:"1f9d1-1f3fc-200d-1f4bb",shortnames:[":technologist_medium_light_skin_tone:"],category:"people"},":technologist_tone3:":{uc_base:"1f9d1-1f3fd-1f4bb",uc_full:"1f9d1-1f3fd-200d-1f4bb",shortnames:[":technologist_medium_skin_tone:"],category:"people"},":technologist_tone4:":{uc_base:"1f9d1-1f3fe-1f4bb",uc_full:"1f9d1-1f3fe-200d-1f4bb",shortnames:[":technologist_medium_dark_skin_tone:"],category:"people"},":technologist_tone5:":{uc_base:"1f9d1-1f3ff-1f4bb",uc_full:"1f9d1-1f3ff-200d-1f4bb",shortnames:[":technologist_dark_skin_tone:"],category:"people"},":woman_artist_tone1:":{uc_base:"1f469-1f3fb-1f3a8",uc_full:"1f469-1f3fb-200d-1f3a8",shortnames:[":woman_artist_light_skin_tone:"],category:"people"},":woman_artist_tone2:":{uc_base:"1f469-1f3fc-1f3a8",uc_full:"1f469-1f3fc-200d-1f3a8",shortnames:[":woman_artist_medium_light_skin_tone:"],category:"people"},":woman_artist_tone3:":{uc_base:"1f469-1f3fd-1f3a8",uc_full:"1f469-1f3fd-200d-1f3a8",shortnames:[":woman_artist_medium_skin_tone:"],category:"people"},":woman_artist_tone4:":{uc_base:"1f469-1f3fe-1f3a8",uc_full:"1f469-1f3fe-200d-1f3a8",shortnames:[":woman_artist_medium_dark_skin_tone:"],category:"people"},":woman_artist_tone5:":{uc_base:"1f469-1f3ff-1f3a8",uc_full:"1f469-1f3ff-200d-1f3a8",shortnames:[":woman_artist_dark_skin_tone:"],category:"people"},":woman_astronaut_tone1:":{uc_base:"1f469-1f3fb-1f680",uc_full:"1f469-1f3fb-200d-1f680",shortnames:[":woman_astronaut_light_skin_tone:"],category:"people"},":woman_astronaut_tone2:":{uc_base:"1f469-1f3fc-1f680",uc_full:"1f469-1f3fc-200d-1f680",shortnames:[":woman_astronaut_medium_light_skin_tone:"],category:"people"},":woman_astronaut_tone3:":{uc_base:"1f469-1f3fd-1f680",uc_full:"1f469-1f3fd-200d-1f680",shortnames:[":woman_astronaut_medium_skin_tone:"],category:"people"},":woman_astronaut_tone4:":{uc_base:"1f469-1f3fe-1f680",uc_full:"1f469-1f3fe-200d-1f680",shortnames:[":woman_astronaut_medium_dark_skin_tone:"],category:"people"},":woman_astronaut_tone5:":{uc_base:"1f469-1f3ff-1f680",uc_full:"1f469-1f3ff-200d-1f680",shortnames:[":woman_astronaut_dark_skin_tone:"],category:"people"},":woman_bald_tone1:":{uc_base:"1f469-1f3fb-1f9b2",uc_full:"1f469-1f3fb-200d-1f9b2",shortnames:[":woman_bald_light_skin_tone:"],category:"people"},":woman_bald_tone2:":{uc_base:"1f469-1f3fc-1f9b2",uc_full:"1f469-1f3fc-200d-1f9b2",shortnames:[":woman_bald_medium_light_skin_tone:"],category:"people"},":woman_bald_tone3:":{uc_base:"1f469-1f3fd-1f9b2",uc_full:"1f469-1f3fd-200d-1f9b2",shortnames:[":woman_bald_medium_skin_tone:"],category:"people"},":woman_bald_tone4:":{uc_base:"1f469-1f3fe-1f9b2",uc_full:"1f469-1f3fe-200d-1f9b2",shortnames:[":woman_bald_medium_dark_skin_tone:"],category:"people"},":woman_bald_tone5:":{uc_base:"1f469-1f3ff-1f9b2",uc_full:"1f469-1f3ff-200d-1f9b2",shortnames:[":woman_bald_dark_skin_tone:"],category:"people"},":woman_cook_tone1:":{uc_base:"1f469-1f3fb-1f373",uc_full:"1f469-1f3fb-200d-1f373",shortnames:[":woman_cook_light_skin_tone:"],category:"people"},":woman_cook_tone2:":{uc_base:"1f469-1f3fc-1f373",uc_full:"1f469-1f3fc-200d-1f373",shortnames:[":woman_cook_medium_light_skin_tone:"],category:"people"},":woman_cook_tone3:":{uc_base:"1f469-1f3fd-1f373",uc_full:"1f469-1f3fd-200d-1f373",shortnames:[":woman_cook_medium_skin_tone:"],category:"people"},":woman_cook_tone4:":{uc_base:"1f469-1f3fe-1f373",uc_full:"1f469-1f3fe-200d-1f373",shortnames:[":woman_cook_medium_dark_skin_tone:"],category:"people"},":woman_cook_tone5:":{uc_base:"1f469-1f3ff-1f373",uc_full:"1f469-1f3ff-200d-1f373",shortnames:[":woman_cook_dark_skin_tone:"],category:"people"},":woman_curly_haired_tone1:":{uc_base:"1f469-1f3fb-1f9b1",uc_full:"1f469-1f3fb-200d-1f9b1",shortnames:[":woman_curly_haired_light_skin_tone:"],category:"people"},":woman_curly_haired_tone2:":{uc_base:"1f469-1f3fc-1f9b1",uc_full:"1f469-1f3fc-200d-1f9b1",shortnames:[":woman_curly_haired_medium_light_skin_tone:"],category:"people"},":woman_curly_haired_tone3:":{uc_base:"1f469-1f3fd-1f9b1",uc_full:"1f469-1f3fd-200d-1f9b1",shortnames:[":woman_curly_haired_medium_skin_tone:"],category:"people"},":woman_curly_haired_tone4:":{uc_base:"1f469-1f3fe-1f9b1",uc_full:"1f469-1f3fe-200d-1f9b1",shortnames:[":woman_curly_haired_medium_dark_skin_tone:"],category:"people"},":woman_curly_haired_tone5:":{uc_base:"1f469-1f3ff-1f9b1",uc_full:"1f469-1f3ff-200d-1f9b1",shortnames:[":woman_curly_haired_dark_skin_tone:"],category:"people"},":woman_factory_worker_tone1:":{uc_base:"1f469-1f3fb-1f3ed",uc_full:"1f469-1f3fb-200d-1f3ed",shortnames:[":woman_factory_worker_light_skin_tone:"],category:"people"},":woman_factory_worker_tone2:":{uc_base:"1f469-1f3fc-1f3ed",uc_full:"1f469-1f3fc-200d-1f3ed",shortnames:[":woman_factory_worker_medium_light_skin_tone:"],category:"people"},":woman_factory_worker_tone3:":{uc_base:"1f469-1f3fd-1f3ed",uc_full:"1f469-1f3fd-200d-1f3ed",shortnames:[":woman_factory_worker_medium_skin_tone:"],category:"people"},":woman_factory_worker_tone4:":{uc_base:"1f469-1f3fe-1f3ed",uc_full:"1f469-1f3fe-200d-1f3ed",shortnames:[":woman_factory_worker_medium_dark_skin_tone:"],category:"people"},":woman_factory_worker_tone5:":{uc_base:"1f469-1f3ff-1f3ed",uc_full:"1f469-1f3ff-200d-1f3ed",shortnames:[":woman_factory_worker_dark_skin_tone:"],category:"people"},":woman_farmer_tone1:":{uc_base:"1f469-1f3fb-1f33e",uc_full:"1f469-1f3fb-200d-1f33e",shortnames:[":woman_farmer_light_skin_tone:"],category:"people"},":woman_farmer_tone2:":{uc_base:"1f469-1f3fc-1f33e",uc_full:"1f469-1f3fc-200d-1f33e",shortnames:[":woman_farmer_medium_light_skin_tone:"],category:"people"},":woman_farmer_tone3:":{uc_base:"1f469-1f3fd-1f33e",uc_full:"1f469-1f3fd-200d-1f33e",shortnames:[":woman_farmer_medium_skin_tone:"],category:"people"},":woman_farmer_tone4:":{uc_base:"1f469-1f3fe-1f33e",uc_full:"1f469-1f3fe-200d-1f33e",shortnames:[":woman_farmer_medium_dark_skin_tone:"],category:"people"},":woman_farmer_tone5:":{uc_base:"1f469-1f3ff-1f33e",uc_full:"1f469-1f3ff-200d-1f33e",shortnames:[":woman_farmer_dark_skin_tone:"],category:"people"},":woman_feeding_baby_tone1:":{uc_base:"1f469-1f3fb-1f37c",uc_full:"1f469-1f3fb-200d-1f37c",shortnames:[":woman_feeding_baby_light_skin_tone:"],category:"people"},":woman_feeding_baby_tone2:":{uc_base:"1f469-1f3fc-1f37c",uc_full:"1f469-1f3fc-200d-1f37c",shortnames:[":woman_feeding_baby_medium_light_skin_tone:"],category:"people"},":woman_feeding_baby_tone3:":{uc_base:"1f469-1f3fd-1f37c",uc_full:"1f469-1f3fd-200d-1f37c",shortnames:[":woman_feeding_baby_medium_skin_tone:"],category:"people"},":woman_feeding_baby_tone4:":{uc_base:"1f469-1f3fe-1f37c",uc_full:"1f469-1f3fe-200d-1f37c",shortnames:[":woman_feeding_baby_medium_dark_skin_tone:"],category:"people"},":woman_feeding_baby_tone5:":{uc_base:"1f469-1f3ff-1f37c",uc_full:"1f469-1f3ff-200d-1f37c",shortnames:[":woman_feeding_baby_dark_skin_tone:"],category:"people"},":woman_firefighter_tone1:":{uc_base:"1f469-1f3fb-1f692",uc_full:"1f469-1f3fb-200d-1f692",shortnames:[":woman_firefighter_light_skin_tone:"],category:"people"},":woman_firefighter_tone2:":{uc_base:"1f469-1f3fc-1f692",uc_full:"1f469-1f3fc-200d-1f692",shortnames:[":woman_firefighter_medium_light_skin_tone:"],category:"people"},":woman_firefighter_tone3:":{uc_base:"1f469-1f3fd-1f692",uc_full:"1f469-1f3fd-200d-1f692",shortnames:[":woman_firefighter_medium_skin_tone:"],category:"people"},":woman_firefighter_tone4:":{uc_base:"1f469-1f3fe-1f692",uc_full:"1f469-1f3fe-200d-1f692",shortnames:[":woman_firefighter_medium_dark_skin_tone:"],category:"people"},":woman_firefighter_tone5:":{uc_base:"1f469-1f3ff-1f692",uc_full:"1f469-1f3ff-200d-1f692",shortnames:[":woman_firefighter_dark_skin_tone:"],category:"people"},":woman_in_manual_wheelchair_tone1:":{uc_base:"1f469-1f3fb-1f9bd",uc_full:"1f469-1f3fb-200d-1f9bd",shortnames:[":woman_in_manual_wheelchair_light_skin_tone:"],category:"people"},":woman_in_manual_wheelchair_tone2:":{uc_base:"1f469-1f3fc-1f9bd",uc_full:"1f469-1f3fc-200d-1f9bd",shortnames:[":woman_in_manual_wheelchair_medium_light_skin_tone:"],category:"people"},":woman_in_manual_wheelchair_tone3:":{uc_base:"1f469-1f3fd-1f9bd",uc_full:"1f469-1f3fd-200d-1f9bd",shortnames:[":woman_in_manual_wheelchair_medium_skin_tone:"],category:"people"},":woman_in_manual_wheelchair_tone4:":{uc_base:"1f469-1f3fe-1f9bd",uc_full:"1f469-1f3fe-200d-1f9bd",shortnames:[":woman_in_manual_wheelchair_medium_dark_skin_tone:"],category:"people"},":woman_in_manual_wheelchair_tone5:":{uc_base:"1f469-1f3ff-1f9bd",uc_full:"1f469-1f3ff-200d-1f9bd",shortnames:[":woman_in_manual_wheelchair_dark_skin_tone:"],
category:"people"},":woman_in_motorized_wheelchair_tone1:":{uc_base:"1f469-1f3fb-1f9bc",uc_full:"1f469-1f3fb-200d-1f9bc",shortnames:[":woman_in_motorized_wheelchair_light_skin_tone:"],category:"people"},":woman_in_motorized_wheelchair_tone2:":{uc_base:"1f469-1f3fc-1f9bc",uc_full:"1f469-1f3fc-200d-1f9bc",shortnames:[":woman_in_motorized_wheelchair_medium_light_skin_tone:"],category:"people"},":woman_in_motorized_wheelchair_tone3:":{uc_base:"1f469-1f3fd-1f9bc",uc_full:"1f469-1f3fd-200d-1f9bc",shortnames:[":woman_in_motorized_wheelchair_medium_skin_tone:"],category:"people"},":woman_in_motorized_wheelchair_tone4:":{uc_base:"1f469-1f3fe-1f9bc",uc_full:"1f469-1f3fe-200d-1f9bc",shortnames:[":woman_in_motorized_wheelchair_medium_dark_skin_tone:"],category:"people"},":woman_in_motorized_wheelchair_tone5:":{uc_base:"1f469-1f3ff-1f9bc",uc_full:"1f469-1f3ff-200d-1f9bc",shortnames:[":woman_in_motorized_wheelchair_dark_skin_tone:"],category:"people"},":woman_mechanic_tone1:":{uc_base:"1f469-1f3fb-1f527",uc_full:"1f469-1f3fb-200d-1f527",shortnames:[":woman_mechanic_light_skin_tone:"],category:"people"},":woman_mechanic_tone2:":{uc_base:"1f469-1f3fc-1f527",uc_full:"1f469-1f3fc-200d-1f527",shortnames:[":woman_mechanic_medium_light_skin_tone:"],category:"people"},":woman_mechanic_tone3:":{uc_base:"1f469-1f3fd-1f527",uc_full:"1f469-1f3fd-200d-1f527",shortnames:[":woman_mechanic_medium_skin_tone:"],category:"people"},":woman_mechanic_tone4:":{uc_base:"1f469-1f3fe-1f527",uc_full:"1f469-1f3fe-200d-1f527",shortnames:[":woman_mechanic_medium_dark_skin_tone:"],category:"people"},":woman_mechanic_tone5:":{uc_base:"1f469-1f3ff-1f527",uc_full:"1f469-1f3ff-200d-1f527",shortnames:[":woman_mechanic_dark_skin_tone:"],category:"people"},":woman_office_worker_tone1:":{uc_base:"1f469-1f3fb-1f4bc",uc_full:"1f469-1f3fb-200d-1f4bc",shortnames:[":woman_office_worker_light_skin_tone:"],category:"people"},":woman_office_worker_tone2:":{uc_base:"1f469-1f3fc-1f4bc",uc_full:"1f469-1f3fc-200d-1f4bc",shortnames:[":woman_office_worker_medium_light_skin_tone:"],category:"people"},":woman_office_worker_tone3:":{uc_base:"1f469-1f3fd-1f4bc",uc_full:"1f469-1f3fd-200d-1f4bc",shortnames:[":woman_office_worker_medium_skin_tone:"],category:"people"},":woman_office_worker_tone4:":{uc_base:"1f469-1f3fe-1f4bc",uc_full:"1f469-1f3fe-200d-1f4bc",shortnames:[":woman_office_worker_medium_dark_skin_tone:"],category:"people"},":woman_office_worker_tone5:":{uc_base:"1f469-1f3ff-1f4bc",uc_full:"1f469-1f3ff-200d-1f4bc",shortnames:[":woman_office_worker_dark_skin_tone:"],category:"people"},":woman_red_haired_tone1:":{uc_base:"1f469-1f3fb-1f9b0",uc_full:"1f469-1f3fb-200d-1f9b0",shortnames:[":woman_red_haired_light_skin_tone:"],category:"people"},":woman_red_haired_tone2:":{uc_base:"1f469-1f3fc-1f9b0",uc_full:"1f469-1f3fc-200d-1f9b0",shortnames:[":woman_red_haired_medium_light_skin_tone:"],category:"people"},":woman_red_haired_tone3:":{uc_base:"1f469-1f3fd-1f9b0",uc_full:"1f469-1f3fd-200d-1f9b0",shortnames:[":woman_red_haired_medium_skin_tone:"],category:"people"},":woman_red_haired_tone4:":{uc_base:"1f469-1f3fe-1f9b0",uc_full:"1f469-1f3fe-200d-1f9b0",shortnames:[":woman_red_haired_medium_dark_skin_tone:"],category:"people"},":woman_red_haired_tone5:":{uc_base:"1f469-1f3ff-1f9b0",uc_full:"1f469-1f3ff-200d-1f9b0",shortnames:[":woman_red_haired_dark_skin_tone:"],category:"people"},":woman_scientist_tone1:":{uc_base:"1f469-1f3fb-1f52c",uc_full:"1f469-1f3fb-200d-1f52c",shortnames:[":woman_scientist_light_skin_tone:"],category:"people"},":woman_scientist_tone2:":{uc_base:"1f469-1f3fc-1f52c",uc_full:"1f469-1f3fc-200d-1f52c",shortnames:[":woman_scientist_medium_light_skin_tone:"],category:"people"},":woman_scientist_tone3:":{uc_base:"1f469-1f3fd-1f52c",uc_full:"1f469-1f3fd-200d-1f52c",shortnames:[":woman_scientist_medium_skin_tone:"],category:"people"},":woman_scientist_tone4:":{uc_base:"1f469-1f3fe-1f52c",uc_full:"1f469-1f3fe-200d-1f52c",shortnames:[":woman_scientist_medium_dark_skin_tone:"],category:"people"},":woman_scientist_tone5:":{uc_base:"1f469-1f3ff-1f52c",uc_full:"1f469-1f3ff-200d-1f52c",shortnames:[":woman_scientist_dark_skin_tone:"],category:"people"},":woman_singer_tone1:":{uc_base:"1f469-1f3fb-1f3a4",uc_full:"1f469-1f3fb-200d-1f3a4",shortnames:[":woman_singer_light_skin_tone:"],category:"people"},":woman_singer_tone2:":{uc_base:"1f469-1f3fc-1f3a4",uc_full:"1f469-1f3fc-200d-1f3a4",shortnames:[":woman_singer_medium_light_skin_tone:"],category:"people"},":woman_singer_tone3:":{uc_base:"1f469-1f3fd-1f3a4",uc_full:"1f469-1f3fd-200d-1f3a4",shortnames:[":woman_singer_medium_skin_tone:"],category:"people"},":woman_singer_tone4:":{uc_base:"1f469-1f3fe-1f3a4",uc_full:"1f469-1f3fe-200d-1f3a4",shortnames:[":woman_singer_medium_dark_skin_tone:"],category:"people"},":woman_singer_tone5:":{uc_base:"1f469-1f3ff-1f3a4",uc_full:"1f469-1f3ff-200d-1f3a4",shortnames:[":woman_singer_dark_skin_tone:"],category:"people"},":woman_student_tone1:":{uc_base:"1f469-1f3fb-1f393",uc_full:"1f469-1f3fb-200d-1f393",shortnames:[":woman_student_light_skin_tone:"],category:"people"},":woman_student_tone2:":{uc_base:"1f469-1f3fc-1f393",uc_full:"1f469-1f3fc-200d-1f393",shortnames:[":woman_student_medium_light_skin_tone:"],category:"people"},":woman_student_tone3:":{uc_base:"1f469-1f3fd-1f393",uc_full:"1f469-1f3fd-200d-1f393",shortnames:[":woman_student_medium_skin_tone:"],category:"people"},":woman_student_tone4:":{uc_base:"1f469-1f3fe-1f393",uc_full:"1f469-1f3fe-200d-1f393",shortnames:[":woman_student_medium_dark_skin_tone:"],category:"people"},":woman_student_tone5:":{uc_base:"1f469-1f3ff-1f393",uc_full:"1f469-1f3ff-200d-1f393",shortnames:[":woman_student_dark_skin_tone:"],category:"people"},":woman_teacher_tone1:":{uc_base:"1f469-1f3fb-1f3eb",uc_full:"1f469-1f3fb-200d-1f3eb",shortnames:[":woman_teacher_light_skin_tone:"],category:"people"},":woman_teacher_tone2:":{uc_base:"1f469-1f3fc-1f3eb",uc_full:"1f469-1f3fc-200d-1f3eb",shortnames:[":woman_teacher_medium_light_skin_tone:"],category:"people"},":woman_teacher_tone3:":{uc_base:"1f469-1f3fd-1f3eb",uc_full:"1f469-1f3fd-200d-1f3eb",shortnames:[":woman_teacher_medium_skin_tone:"],category:"people"},":woman_teacher_tone4:":{uc_base:"1f469-1f3fe-1f3eb",uc_full:"1f469-1f3fe-200d-1f3eb",shortnames:[":woman_teacher_medium_dark_skin_tone:"],category:"people"},":woman_teacher_tone5:":{uc_base:"1f469-1f3ff-1f3eb",uc_full:"1f469-1f3ff-200d-1f3eb",shortnames:[":woman_teacher_dark_skin_tone:"],category:"people"},":woman_technologist_tone1:":{uc_base:"1f469-1f3fb-1f4bb",uc_full:"1f469-1f3fb-200d-1f4bb",shortnames:[":woman_technologist_light_skin_tone:"],category:"people"},":woman_technologist_tone2:":{uc_base:"1f469-1f3fc-1f4bb",uc_full:"1f469-1f3fc-200d-1f4bb",shortnames:[":woman_technologist_medium_light_skin_tone:"],category:"people"},":woman_technologist_tone3:":{uc_base:"1f469-1f3fd-1f4bb",uc_full:"1f469-1f3fd-200d-1f4bb",shortnames:[":woman_technologist_medium_skin_tone:"],category:"people"},":woman_technologist_tone4:":{uc_base:"1f469-1f3fe-1f4bb",uc_full:"1f469-1f3fe-200d-1f4bb",shortnames:[":woman_technologist_medium_dark_skin_tone:"],category:"people"},":woman_technologist_tone5:":{uc_base:"1f469-1f3ff-1f4bb",uc_full:"1f469-1f3ff-200d-1f4bb",shortnames:[":woman_technologist_dark_skin_tone:"],category:"people"},":woman_white_haired_tone1:":{uc_base:"1f469-1f3fb-1f9b3",uc_full:"1f469-1f3fb-200d-1f9b3",shortnames:[":woman_white_haired_light_skin_tone:"],category:"people"},":woman_white_haired_tone2:":{uc_base:"1f469-1f3fc-1f9b3",uc_full:"1f469-1f3fc-200d-1f9b3",shortnames:[":woman_white_haired_medium_light_skin_tone:"],category:"people"},":woman_white_haired_tone3:":{uc_base:"1f469-1f3fd-1f9b3",uc_full:"1f469-1f3fd-200d-1f9b3",shortnames:[":woman_white_haired_medium_skin_tone:"],category:"people"},":woman_white_haired_tone4:":{uc_base:"1f469-1f3fe-1f9b3",uc_full:"1f469-1f3fe-200d-1f9b3",shortnames:[":woman_white_haired_medium_dark_skin_tone:"],category:"people"},":woman_white_haired_tone5:":{uc_base:"1f469-1f3ff-1f9b3",uc_full:"1f469-1f3ff-200d-1f9b3",shortnames:[":woman_white_haired_dark_skin_tone:"],category:"people"},":woman_with_probing_cane_tone1:":{uc_base:"1f469-1f3fb-1f9af",uc_full:"1f469-1f3fb-200d-1f9af",shortnames:[":woman_with_probing_cane_light_skin_tone:"],category:"people"},":woman_with_probing_cane_tone2:":{uc_base:"1f469-1f3fc-1f9af",uc_full:"1f469-1f3fc-200d-1f9af",shortnames:[":woman_with_probing_cane_medium_light_skin_tone:"],category:"people"},":woman_with_probing_cane_tone3:":{uc_base:"1f469-1f3fd-1f9af",uc_full:"1f469-1f3fd-200d-1f9af",shortnames:[":woman_with_probing_cane_medium_skin_tone:"],category:"people"},":woman_with_probing_cane_tone4:":{uc_base:"1f469-1f3fe-1f9af",uc_full:"1f469-1f3fe-200d-1f9af",shortnames:[":woman_with_probing_cane_medium_dark_skin_tone:"],category:"people"},":woman_with_probing_cane_tone5:":{uc_base:"1f469-1f3ff-1f9af",uc_full:"1f469-1f3ff-200d-1f9af",shortnames:[":woman_with_probing_cane_dark_skin_tone:"],category:"people"},":blond-haired_man_tone1:":{uc_base:"1f471-1f3fb-2642",uc_full:"1f471-1f3fb-200d-2642-fe0f",shortnames:[":blond-haired_man_light_skin_tone:"],category:"people"},":blond-haired_man_tone2:":{uc_base:"1f471-1f3fc-2642",uc_full:"1f471-1f3fc-200d-2642-fe0f",shortnames:[":blond-haired_man_medium_light_skin_tone:"],category:"people"},":blond-haired_man_tone3:":{uc_base:"1f471-1f3fd-2642",uc_full:"1f471-1f3fd-200d-2642-fe0f",shortnames:[":blond-haired_man_medium_skin_tone:"],category:"people"},":blond-haired_man_tone4:":{uc_base:"1f471-1f3fe-2642",uc_full:"1f471-1f3fe-200d-2642-fe0f",shortnames:[":blond-haired_man_medium_dark_skin_tone:"],category:"people"},":blond-haired_man_tone5:":{uc_base:"1f471-1f3ff-2642",uc_full:"1f471-1f3ff-200d-2642-fe0f",shortnames:[":blond-haired_man_dark_skin_tone:"],category:"people"},":blond-haired_woman_tone1:":{uc_base:"1f471-1f3fb-2640",uc_full:"1f471-1f3fb-200d-2640-fe0f",shortnames:[":blond-haired_woman_light_skin_tone:"],category:"people"},":blond-haired_woman_tone2:":{uc_base:"1f471-1f3fc-2640",uc_full:"1f471-1f3fc-200d-2640-fe0f",shortnames:[":blond-haired_woman_medium_light_skin_tone:"],category:"people"},":blond-haired_woman_tone3:":{uc_base:"1f471-1f3fd-2640",uc_full:"1f471-1f3fd-200d-2640-fe0f",shortnames:[":blond-haired_woman_medium_skin_tone:"],category:"people"},":blond-haired_woman_tone4:":{uc_base:"1f471-1f3fe-2640",uc_full:"1f471-1f3fe-200d-2640-fe0f",shortnames:[":blond-haired_woman_medium_dark_skin_tone:"],category:"people"},":blond-haired_woman_tone5:":{uc_base:"1f471-1f3ff-2640",uc_full:"1f471-1f3ff-200d-2640-fe0f",shortnames:[":blond-haired_woman_dark_skin_tone:"],category:"people"},":couple_mm:":{uc_base:"1f468-2764-1f468",uc_full:"1f468-200d-2764-fe0f-200d-1f468",shortnames:[":couple_with_heart_mm:"],category:"people"},":couple_with_heart_woman_man:":{uc_base:"1f469-2764-1f468",uc_full:"1f469-200d-2764-fe0f-200d-1f468",shortnames:[],category:"people"},":couple_ww:":{uc_base:"1f469-2764-1f469",uc_full:"1f469-200d-2764-fe0f-200d-1f469",shortnames:[":couple_with_heart_ww:"],category:"people"},":deaf_man_tone1:":{uc_base:"1f9cf-1f3fb-2642",uc_full:"1f9cf-1f3fb-200d-2642-fe0f",shortnames:[":deaf_man_light_skin_tone:"],category:"people"},":deaf_man_tone2:":{uc_base:"1f9cf-1f3fc-2642",uc_full:"1f9cf-1f3fc-200d-2642-fe0f",shortnames:[":deaf_man_medium_light_skin_tone:"],category:"people"},":deaf_man_tone3:":{uc_base:"1f9cf-1f3fd-2642",uc_full:"1f9cf-1f3fd-200d-2642-fe0f",shortnames:[":deaf_man_medium_skin_tone:"],category:"people"},":deaf_man_tone4:":{uc_base:"1f9cf-1f3fe-2642",uc_full:"1f9cf-1f3fe-200d-2642-fe0f",shortnames:[":deaf_man_medium_dark_skin_tone:"],category:"people"},":deaf_man_tone5:":{uc_base:"1f9cf-1f3ff-2642",uc_full:"1f9cf-1f3ff-200d-2642-fe0f",shortnames:[":deaf_man_dark_skin_tone:"],category:"people"},":deaf_woman_tone1:":{uc_base:"1f9cf-1f3fb-2640",uc_full:"1f9cf-1f3fb-200d-2640-fe0f",shortnames:[":deaf_woman_light_skin_tone:"],category:"people"},":deaf_woman_tone2:":{uc_base:"1f9cf-1f3fc-2640",uc_full:"1f9cf-1f3fc-200d-2640-fe0f",shortnames:[":deaf_woman_medium_light_skin_tone:"],category:"people"},":deaf_woman_tone3:":{uc_base:"1f9cf-1f3fd-2640",uc_full:"1f9cf-1f3fd-200d-2640-fe0f",shortnames:[":deaf_woman_medium_skin_tone:"],category:"people"},":deaf_woman_tone4:":{uc_base:"1f9cf-1f3fe-2640",uc_full:"1f9cf-1f3fe-200d-2640-fe0f",shortnames:[":deaf_woman_medium_dark_skin_tone:"],category:"people"},":deaf_woman_tone5:":{uc_base:"1f9cf-1f3ff-2640",uc_full:"1f9cf-1f3ff-200d-2640-fe0f",shortnames:[":deaf_woman_dark_skin_tone:"],category:"people"},":health_worker_tone1:":{uc_base:"1f9d1-1f3fb-2695",uc_full:"1f9d1-1f3fb-200d-2695-fe0f",shortnames:[":health_worker_light_skin_tone:"],category:"people"},":health_worker_tone2:":{uc_base:"1f9d1-1f3fc-2695",uc_full:"1f9d1-1f3fc-200d-2695-fe0f",shortnames:[":health_worker_medium_light_skin_tone:"],category:"people"},":health_worker_tone3:":{uc_base:"1f9d1-1f3fd-2695",uc_full:"1f9d1-1f3fd-200d-2695-fe0f",shortnames:[":health_worker_medium_skin_tone:"],category:"people"},":health_worker_tone4:":{uc_base:"1f9d1-1f3fe-2695",uc_full:"1f9d1-1f3fe-200d-2695-fe0f",shortnames:[":health_worker_medium_dark_skin_tone:"],category:"people"},":health_worker_tone5:":{uc_base:"1f9d1-1f3ff-2695",uc_full:"1f9d1-1f3ff-200d-2695-fe0f",shortnames:[":health_worker_dark_skin_tone:"],category:"people"},":judge_tone1:":{uc_base:"1f9d1-1f3fb-2696",uc_full:"1f9d1-1f3fb-200d-2696-fe0f",shortnames:[":judge_light_skin_tone:"],category:"people"},":judge_tone2:":{uc_base:"1f9d1-1f3fc-2696",uc_full:"1f9d1-1f3fc-200d-2696-fe0f",shortnames:[":judge_medium_light_skin_tone:"],category:"people"},":judge_tone3:":{uc_base:"1f9d1-1f3fd-2696",uc_full:"1f9d1-1f3fd-200d-2696-fe0f",shortnames:[":judge_medium_skin_tone:"],category:"people"},":judge_tone4:":{uc_base:"1f9d1-1f3fe-2696",uc_full:"1f9d1-1f3fe-200d-2696-fe0f",shortnames:[":judge_medium_dark_skin_tone:"],category:"people"},":judge_tone5:":{uc_base:"1f9d1-1f3ff-2696",uc_full:"1f9d1-1f3ff-200d-2696-fe0f",shortnames:[":judge_dark_skin_tone:"],category:"people"},":man_biking_tone1:":{uc_base:"1f6b4-1f3fb-2642",uc_full:"1f6b4-1f3fb-200d-2642-fe0f",shortnames:[":man_biking_light_skin_tone:"],category:"activity"},":man_biking_tone2:":{uc_base:"1f6b4-1f3fc-2642",uc_full:"1f6b4-1f3fc-200d-2642-fe0f",shortnames:[":man_biking_medium_light_skin_tone:"],category:"activity"},":man_biking_tone3:":{uc_base:"1f6b4-1f3fd-2642",uc_full:"1f6b4-1f3fd-200d-2642-fe0f",shortnames:[":man_biking_medium_skin_tone:"],category:"activity"},":man_biking_tone4:":{uc_base:"1f6b4-1f3fe-2642",uc_full:"1f6b4-1f3fe-200d-2642-fe0f",shortnames:[":man_biking_medium_dark_skin_tone:"],category:"activity"},":man_biking_tone5:":{uc_base:"1f6b4-1f3ff-2642",uc_full:"1f6b4-1f3ff-200d-2642-fe0f",shortnames:[":man_biking_dark_skin_tone:"],category:"activity"},":man_bowing_tone1:":{uc_base:"1f647-1f3fb-2642",uc_full:"1f647-1f3fb-200d-2642-fe0f",shortnames:[":man_bowing_light_skin_tone:"],category:"people"},":man_bowing_tone2:":{uc_base:"1f647-1f3fc-2642",uc_full:"1f647-1f3fc-200d-2642-fe0f",shortnames:[":man_bowing_medium_light_skin_tone:"],category:"people"},":man_bowing_tone3:":{uc_base:"1f647-1f3fd-2642",uc_full:"1f647-1f3fd-200d-2642-fe0f",shortnames:[":man_bowing_medium_skin_tone:"],category:"people"},":man_bowing_tone4:":{uc_base:"1f647-1f3fe-2642",uc_full:"1f647-1f3fe-200d-2642-fe0f",shortnames:[":man_bowing_medium_dark_skin_tone:"],category:"people"},":man_bowing_tone5:":{uc_base:"1f647-1f3ff-2642",uc_full:"1f647-1f3ff-200d-2642-fe0f",shortnames:[":man_bowing_dark_skin_tone:"],category:"people"},":man_cartwheeling_tone1:":{uc_base:"1f938-1f3fb-2642",uc_full:"1f938-1f3fb-200d-2642-fe0f",shortnames:[":man_cartwheeling_light_skin_tone:"],category:"activity"},":man_cartwheeling_tone2:":{uc_base:"1f938-1f3fc-2642",uc_full:"1f938-1f3fc-200d-2642-fe0f",shortnames:[":man_cartwheeling_medium_light_skin_tone:"],category:"activity"},":man_cartwheeling_tone3:":{uc_base:"1f938-1f3fd-2642",uc_full:"1f938-1f3fd-200d-2642-fe0f",shortnames:[":man_cartwheeling_medium_skin_tone:"],category:"activity"},":man_cartwheeling_tone4:":{uc_base:"1f938-1f3fe-2642",uc_full:"1f938-1f3fe-200d-2642-fe0f",shortnames:[":man_cartwheeling_medium_dark_skin_tone:"],category:"activity"},":man_cartwheeling_tone5:":{uc_base:"1f938-1f3ff-2642",uc_full:"1f938-1f3ff-200d-2642-fe0f",shortnames:[":man_cartwheeling_dark_skin_tone:"],category:"activity"},":man_climbing_tone1:":{uc_base:"1f9d7-1f3fb-2642",uc_full:"1f9d7-1f3fb-200d-2642-fe0f",shortnames:[":man_climbing_light_skin_tone:"],category:"activity"},":man_climbing_tone2:":{uc_base:"1f9d7-1f3fc-2642",uc_full:"1f9d7-1f3fc-200d-2642-fe0f",shortnames:[":man_climbing_medium_light_skin_tone:"],category:"activity"},":man_climbing_tone3:":{uc_base:"1f9d7-1f3fd-2642",uc_full:"1f9d7-1f3fd-200d-2642-fe0f",shortnames:[":man_climbing_medium_skin_tone:"],category:"activity"},":man_climbing_tone4:":{uc_base:"1f9d7-1f3fe-2642",uc_full:"1f9d7-1f3fe-200d-2642-fe0f",shortnames:[":man_climbing_medium_dark_skin_tone:"],category:"activity"},":man_climbing_tone5:":{uc_base:"1f9d7-1f3ff-2642",uc_full:"1f9d7-1f3ff-200d-2642-fe0f",shortnames:[":man_climbing_dark_skin_tone:"],category:"activity"},":man_construction_worker_tone1:":{uc_base:"1f477-1f3fb-2642",uc_full:"1f477-1f3fb-200d-2642-fe0f",shortnames:[":man_construction_worker_light_skin_tone:"],category:"people"},":man_construction_worker_tone2:":{uc_base:"1f477-1f3fc-2642",uc_full:"1f477-1f3fc-200d-2642-fe0f",shortnames:[":man_construction_worker_medium_light_skin_tone:"],category:"people"},":man_construction_worker_tone3:":{uc_base:"1f477-1f3fd-2642",uc_full:"1f477-1f3fd-200d-2642-fe0f",shortnames:[":man_construction_worker_medium_skin_tone:"],category:"people"},":man_construction_worker_tone4:":{uc_base:"1f477-1f3fe-2642",uc_full:"1f477-1f3fe-200d-2642-fe0f",shortnames:[":man_construction_worker_medium_dark_skin_tone:"],category:"people"},":man_construction_worker_tone5:":{uc_base:"1f477-1f3ff-2642",uc_full:"1f477-1f3ff-200d-2642-fe0f",shortnames:[":man_construction_worker_dark_skin_tone:"],category:"people"},":man_detective_tone1:":{uc_base:"1f575-1f3fb-2642",uc_full:"1f575-1f3fb-200d-2642-fe0f",shortnames:[":man_detective_light_skin_tone:"],category:"people"},":man_detective_tone2:":{uc_base:"1f575-1f3fc-2642",uc_full:"1f575-1f3fc-200d-2642-fe0f",shortnames:[":man_detective_medium_light_skin_tone:"],category:"people"},":man_detective_tone3:":{uc_base:"1f575-1f3fd-2642",uc_full:"1f575-1f3fd-200d-2642-fe0f",shortnames:[":man_detective_medium_skin_tone:"],category:"people"},":man_detective_tone4:":{uc_base:"1f575-1f3fe-2642",uc_full:"1f575-1f3fe-200d-2642-fe0f",shortnames:[":man_detective_medium_dark_skin_tone:"],category:"people"},":man_detective_tone5:":{uc_base:"1f575-1f3ff-2642",uc_full:"1f575-1f3ff-200d-2642-fe0f",shortnames:[":man_detective_dark_skin_tone:"],category:"people"},":man_elf_tone1:":{uc_base:"1f9dd-1f3fb-2642",uc_full:"1f9dd-1f3fb-200d-2642-fe0f",shortnames:[":man_elf_light_skin_tone:"],category:"people"},":man_elf_tone2:":{uc_base:"1f9dd-1f3fc-2642",uc_full:"1f9dd-1f3fc-200d-2642-fe0f",shortnames:[":man_elf_medium_light_skin_tone:"],category:"people"},":man_elf_tone3:":{uc_base:"1f9dd-1f3fd-2642",uc_full:"1f9dd-1f3fd-200d-2642-fe0f",shortnames:[":man_elf_medium_skin_tone:"],category:"people"},":man_elf_tone4:":{uc_base:"1f9dd-1f3fe-2642",uc_full:"1f9dd-1f3fe-200d-2642-fe0f",shortnames:[":man_elf_medium_dark_skin_tone:"],category:"people"},":man_elf_tone5:":{uc_base:"1f9dd-1f3ff-2642",uc_full:"1f9dd-1f3ff-200d-2642-fe0f",shortnames:[":man_elf_dark_skin_tone:"],category:"people"},":man_facepalming_tone1:":{uc_base:"1f926-1f3fb-2642",uc_full:"1f926-1f3fb-200d-2642-fe0f",shortnames:[":man_facepalming_light_skin_tone:"],category:"people"},":man_facepalming_tone2:":{uc_base:"1f926-1f3fc-2642",uc_full:"1f926-1f3fc-200d-2642-fe0f",shortnames:[":man_facepalming_medium_light_skin_tone:"],category:"people"},":man_facepalming_tone3:":{uc_base:"1f926-1f3fd-2642",uc_full:"1f926-1f3fd-200d-2642-fe0f",shortnames:[":man_facepalming_medium_skin_tone:"],category:"people"},":man_facepalming_tone4:":{uc_base:"1f926-1f3fe-2642",uc_full:"1f926-1f3fe-200d-2642-fe0f",shortnames:[":man_facepalming_medium_dark_skin_tone:"],category:"people"},":man_facepalming_tone5:":{uc_base:"1f926-1f3ff-2642",uc_full:"1f926-1f3ff-200d-2642-fe0f",shortnames:[":man_facepalming_dark_skin_tone:"],category:"people"},":man_fairy_tone1:":{uc_base:"1f9da-1f3fb-2642",uc_full:"1f9da-1f3fb-200d-2642-fe0f",shortnames:[":man_fairy_light_skin_tone:"],category:"people"},":man_fairy_tone2:":{uc_base:"1f9da-1f3fc-2642",uc_full:"1f9da-1f3fc-200d-2642-fe0f",shortnames:[":man_fairy_medium_light_skin_tone:"],category:"people"},":man_fairy_tone3:":{uc_base:"1f9da-1f3fd-2642",uc_full:"1f9da-1f3fd-200d-2642-fe0f",shortnames:[":man_fairy_medium_skin_tone:"],category:"people"},":man_fairy_tone4:":{uc_base:"1f9da-1f3fe-2642",uc_full:"1f9da-1f3fe-200d-2642-fe0f",shortnames:[":man_fairy_medium_dark_skin_tone:"],category:"people"},":man_fairy_tone5:":{uc_base:"1f9da-1f3ff-2642",uc_full:"1f9da-1f3ff-200d-2642-fe0f",shortnames:[":man_fairy_dark_skin_tone:"],category:"people"},":man_frowning_tone1:":{uc_base:"1f64d-1f3fb-2642",uc_full:"1f64d-1f3fb-200d-2642-fe0f",shortnames:[":man_frowning_light_skin_tone:"],category:"people"},":man_frowning_tone2:":{uc_base:"1f64d-1f3fc-2642",uc_full:"1f64d-1f3fc-200d-2642-fe0f",shortnames:[":man_frowning_medium_light_skin_tone:"],category:"people"},":man_frowning_tone3:":{uc_base:"1f64d-1f3fd-2642",uc_full:"1f64d-1f3fd-200d-2642-fe0f",shortnames:[":man_frowning_medium_skin_tone:"],category:"people"},":man_frowning_tone4:":{uc_base:"1f64d-1f3fe-2642",uc_full:"1f64d-1f3fe-200d-2642-fe0f",shortnames:[":man_frowning_medium_dark_skin_tone:"],category:"people"},":man_frowning_tone5:":{uc_base:"1f64d-1f3ff-2642",uc_full:"1f64d-1f3ff-200d-2642-fe0f",shortnames:[":man_frowning_dark_skin_tone:"],category:"people"},":man_gesturing_no_tone1:":{uc_base:"1f645-1f3fb-2642",uc_full:"1f645-1f3fb-200d-2642-fe0f",shortnames:[":man_gesturing_no_light_skin_tone:"],category:"people"},":man_gesturing_no_tone2:":{uc_base:"1f645-1f3fc-2642",uc_full:"1f645-1f3fc-200d-2642-fe0f",shortnames:[":man_gesturing_no_medium_light_skin_tone:"],category:"people"},":man_gesturing_no_tone3:":{uc_base:"1f645-1f3fd-2642",uc_full:"1f645-1f3fd-200d-2642-fe0f",shortnames:[":man_gesturing_no_medium_skin_tone:"],category:"people"},":man_gesturing_no_tone4:":{uc_base:"1f645-1f3fe-2642",uc_full:"1f645-1f3fe-200d-2642-fe0f",shortnames:[":man_gesturing_no_medium_dark_skin_tone:"],category:"people"},":man_gesturing_no_tone5:":{uc_base:"1f645-1f3ff-2642",uc_full:"1f645-1f3ff-200d-2642-fe0f",shortnames:[":man_gesturing_no_dark_skin_tone:"],category:"people"},":man_gesturing_ok_tone1:":{uc_base:"1f646-1f3fb-2642",uc_full:"1f646-1f3fb-200d-2642-fe0f",shortnames:[":man_gesturing_ok_light_skin_tone:"],category:"people"},":man_gesturing_ok_tone2:":{uc_base:"1f646-1f3fc-2642",uc_full:"1f646-1f3fc-200d-2642-fe0f",shortnames:[":man_gesturing_ok_medium_light_skin_tone:"],category:"people"},":man_gesturing_ok_tone3:":{uc_base:"1f646-1f3fd-2642",uc_full:"1f646-1f3fd-200d-2642-fe0f",shortnames:[":man_gesturing_ok_medium_skin_tone:"],category:"people"},":man_gesturing_ok_tone4:":{uc_base:"1f646-1f3fe-2642",uc_full:"1f646-1f3fe-200d-2642-fe0f",shortnames:[":man_gesturing_ok_medium_dark_skin_tone:"],category:"people"},":man_gesturing_ok_tone5:":{uc_base:"1f646-1f3ff-2642",uc_full:"1f646-1f3ff-200d-2642-fe0f",shortnames:[":man_gesturing_ok_dark_skin_tone:"],category:"people"},":man_getting_face_massage_tone1:":{uc_base:"1f486-1f3fb-2642",uc_full:"1f486-1f3fb-200d-2642-fe0f",shortnames:[":man_getting_face_massage_light_skin_tone:"],category:"people"},":man_getting_face_massage_tone2:":{uc_base:"1f486-1f3fc-2642",uc_full:"1f486-1f3fc-200d-2642-fe0f",shortnames:[":man_getting_face_massage_medium_light_skin_tone:"],category:"people"},":man_getting_face_massage_tone3:":{uc_base:"1f486-1f3fd-2642",uc_full:"1f486-1f3fd-200d-2642-fe0f",shortnames:[":man_getting_face_massage_medium_skin_tone:"],category:"people"},":man_getting_face_massage_tone4:":{uc_base:"1f486-1f3fe-2642",uc_full:"1f486-1f3fe-200d-2642-fe0f",shortnames:[":man_getting_face_massage_medium_dark_skin_tone:"],category:"people"},":man_getting_face_massage_tone5:":{uc_base:"1f486-1f3ff-2642",uc_full:"1f486-1f3ff-200d-2642-fe0f",shortnames:[":man_getting_face_massage_dark_skin_tone:"],category:"people"},":man_getting_haircut_tone1:":{uc_base:"1f487-1f3fb-2642",uc_full:"1f487-1f3fb-200d-2642-fe0f",shortnames:[":man_getting_haircut_light_skin_tone:"],category:"people"},":man_getting_haircut_tone2:":{uc_base:"1f487-1f3fc-2642",uc_full:"1f487-1f3fc-200d-2642-fe0f",shortnames:[":man_getting_haircut_medium_light_skin_tone:"],category:"people"},":man_getting_haircut_tone3:":{uc_base:"1f487-1f3fd-2642",uc_full:"1f487-1f3fd-200d-2642-fe0f",shortnames:[":man_getting_haircut_medium_skin_tone:"],category:"people"},":man_getting_haircut_tone4:":{uc_base:"1f487-1f3fe-2642",uc_full:"1f487-1f3fe-200d-2642-fe0f",shortnames:[":man_getting_haircut_medium_dark_skin_tone:"],category:"people"},":man_getting_haircut_tone5:":{uc_base:"1f487-1f3ff-2642",uc_full:"1f487-1f3ff-200d-2642-fe0f",shortnames:[":man_getting_haircut_dark_skin_tone:"],category:"people"},":man_golfing_tone1:":{uc_base:"1f3cc-1f3fb-2642",uc_full:"1f3cc-1f3fb-200d-2642-fe0f",shortnames:[":man_golfing_light_skin_tone:"],category:"activity"},":man_golfing_tone2:":{uc_base:"1f3cc-1f3fc-2642",uc_full:"1f3cc-1f3fc-200d-2642-fe0f",shortnames:[":man_golfing_medium_light_skin_tone:"],category:"activity"},":man_golfing_tone3:":{uc_base:"1f3cc-1f3fd-2642",uc_full:"1f3cc-1f3fd-200d-2642-fe0f",shortnames:[":man_golfing_medium_skin_tone:"],category:"activity"},":man_golfing_tone4:":{uc_base:"1f3cc-1f3fe-2642",uc_full:"1f3cc-1f3fe-200d-2642-fe0f",shortnames:[":man_golfing_medium_dark_skin_tone:"],category:"activity"},":man_golfing_tone5:":{uc_base:"1f3cc-1f3ff-2642",uc_full:"1f3cc-1f3ff-200d-2642-fe0f",shortnames:[":man_golfing_dark_skin_tone:"],category:"activity"},":man_guard_tone1:":{uc_base:"1f482-1f3fb-2642",uc_full:"1f482-1f3fb-200d-2642-fe0f",shortnames:[":man_guard_light_skin_tone:"],category:"people"},":man_guard_tone2:":{uc_base:"1f482-1f3fc-2642",uc_full:"1f482-1f3fc-200d-2642-fe0f",shortnames:[":man_guard_medium_light_skin_tone:"],category:"people"},":man_guard_tone3:":{uc_base:"1f482-1f3fd-2642",uc_full:"1f482-1f3fd-200d-2642-fe0f",shortnames:[":man_guard_medium_skin_tone:"],category:"people"},":man_guard_tone4:":{uc_base:"1f482-1f3fe-2642",uc_full:"1f482-1f3fe-200d-2642-fe0f",shortnames:[":man_guard_medium_dark_skin_tone:"],category:"people"},":man_guard_tone5:":{uc_base:"1f482-1f3ff-2642",uc_full:"1f482-1f3ff-200d-2642-fe0f",shortnames:[":man_guard_dark_skin_tone:"],category:"people"},":man_health_worker_tone1:":{uc_base:"1f468-1f3fb-2695",uc_full:"1f468-1f3fb-200d-2695-fe0f",shortnames:[":man_health_worker_light_skin_tone:"],category:"people"},":man_health_worker_tone2:":{uc_base:"1f468-1f3fc-2695",uc_full:"1f468-1f3fc-200d-2695-fe0f",shortnames:[":man_health_worker_medium_light_skin_tone:"],category:"people"},":man_health_worker_tone3:":{uc_base:"1f468-1f3fd-2695",uc_full:"1f468-1f3fd-200d-2695-fe0f",shortnames:[":man_health_worker_medium_skin_tone:"],category:"people"},":man_health_worker_tone4:":{uc_base:"1f468-1f3fe-2695",uc_full:"1f468-1f3fe-200d-2695-fe0f",shortnames:[":man_health_worker_medium_dark_skin_tone:"],category:"people"},":man_health_worker_tone5:":{uc_base:"1f468-1f3ff-2695",uc_full:"1f468-1f3ff-200d-2695-fe0f",shortnames:[":man_health_worker_dark_skin_tone:"],category:"people"},":man_in_lotus_position_tone1:":{uc_base:"1f9d8-1f3fb-2642",uc_full:"1f9d8-1f3fb-200d-2642-fe0f",shortnames:[":man_in_lotus_position_light_skin_tone:"],category:"activity"},":man_in_lotus_position_tone2:":{uc_base:"1f9d8-1f3fc-2642",uc_full:"1f9d8-1f3fc-200d-2642-fe0f",shortnames:[":man_in_lotus_position_medium_light_skin_tone:"],category:"activity"},":man_in_lotus_position_tone3:":{uc_base:"1f9d8-1f3fd-2642",uc_full:"1f9d8-1f3fd-200d-2642-fe0f",shortnames:[":man_in_lotus_position_medium_skin_tone:"],category:"activity"},":man_in_lotus_position_tone4:":{uc_base:"1f9d8-1f3fe-2642",uc_full:"1f9d8-1f3fe-200d-2642-fe0f",shortnames:[":man_in_lotus_position_medium_dark_skin_tone:"],category:"activity"},":man_in_lotus_position_tone5:":{uc_base:"1f9d8-1f3ff-2642",uc_full:"1f9d8-1f3ff-200d-2642-fe0f",shortnames:[":man_in_lotus_position_dark_skin_tone:"],category:"activity"},":man_in_steamy_room_tone1:":{uc_base:"1f9d6-1f3fb-2642",uc_full:"1f9d6-1f3fb-200d-2642-fe0f",shortnames:[":man_in_steamy_room_light_skin_tone:"],category:"people"},":man_in_steamy_room_tone2:":{uc_base:"1f9d6-1f3fc-2642",uc_full:"1f9d6-1f3fc-200d-2642-fe0f",shortnames:[":man_in_steamy_room_medium_light_skin_tone:"],category:"people"},":man_in_steamy_room_tone3:":{uc_base:"1f9d6-1f3fd-2642",uc_full:"1f9d6-1f3fd-200d-2642-fe0f",shortnames:[":man_in_steamy_room_medium_skin_tone:"],category:"people"},":man_in_steamy_room_tone4:":{uc_base:"1f9d6-1f3fe-2642",uc_full:"1f9d6-1f3fe-200d-2642-fe0f",shortnames:[":man_in_steamy_room_medium_dark_skin_tone:"],category:"people"},":man_in_steamy_room_tone5:":{uc_base:"1f9d6-1f3ff-2642",uc_full:"1f9d6-1f3ff-200d-2642-fe0f",shortnames:[":man_in_steamy_room_dark_skin_tone:"],category:"people"},":man_in_tuxedo_tone1:":{uc_base:"1f935-1f3fb-2642",uc_full:"1f935-1f3fb-200d-2642-fe0f",shortnames:[":man_in_tuxedo_light_skin_tone:"],category:"people"},":man_in_tuxedo_tone2:":{uc_base:"1f935-1f3fc-2642",uc_full:"1f935-1f3fc-200d-2642-fe0f",shortnames:[":man_in_tuxedo_medium_light_skin_tone:"],category:"people"},":man_in_tuxedo_tone3:":{uc_base:"1f935-1f3fd-2642",uc_full:"1f935-1f3fd-200d-2642-fe0f",shortnames:[":man_in_tuxedo_medium_skin_tone:"],category:"people"},":man_in_tuxedo_tone4:":{uc_base:"1f935-1f3fe-2642",uc_full:"1f935-1f3fe-200d-2642-fe0f",shortnames:[":man_in_tuxedo_medium_dark_skin_tone:"],category:"people"},":man_in_tuxedo_tone5:":{uc_base:"1f935-1f3ff-2642",uc_full:"1f935-1f3ff-200d-2642-fe0f",shortnames:[":man_in_tuxedo_dark_skin_tone:"],category:"people"},":man_judge_tone1:":{uc_base:"1f468-1f3fb-2696",uc_full:"1f468-1f3fb-200d-2696-fe0f",shortnames:[":man_judge_light_skin_tone:"],category:"people"},":man_judge_tone2:":{uc_base:"1f468-1f3fc-2696",uc_full:"1f468-1f3fc-200d-2696-fe0f",shortnames:[":man_judge_medium_light_skin_tone:"],category:"people"},":man_judge_tone3:":{uc_base:"1f468-1f3fd-2696",uc_full:"1f468-1f3fd-200d-2696-fe0f",shortnames:[":man_judge_medium_skin_tone:"],category:"people"},":man_judge_tone4:":{uc_base:"1f468-1f3fe-2696",uc_full:"1f468-1f3fe-200d-2696-fe0f",shortnames:[":man_judge_medium_dark_skin_tone:"],category:"people"},":man_judge_tone5:":{uc_base:"1f468-1f3ff-2696",uc_full:"1f468-1f3ff-200d-2696-fe0f",shortnames:[":man_judge_dark_skin_tone:"],category:"people"},":man_juggling_tone1:":{uc_base:"1f939-1f3fb-2642",uc_full:"1f939-1f3fb-200d-2642-fe0f",shortnames:[":man_juggling_light_skin_tone:"],category:"activity"},":man_juggling_tone2:":{uc_base:"1f939-1f3fc-2642",uc_full:"1f939-1f3fc-200d-2642-fe0f",shortnames:[":man_juggling_medium_light_skin_tone:"],category:"activity"},":man_juggling_tone3:":{uc_base:"1f939-1f3fd-2642",uc_full:"1f939-1f3fd-200d-2642-fe0f",shortnames:[":man_juggling_medium_skin_tone:"],category:"activity"},":man_juggling_tone4:":{uc_base:"1f939-1f3fe-2642",uc_full:"1f939-1f3fe-200d-2642-fe0f",shortnames:[":man_juggling_medium_dark_skin_tone:"],category:"activity"},":man_juggling_tone5:":{uc_base:"1f939-1f3ff-2642",uc_full:"1f939-1f3ff-200d-2642-fe0f",shortnames:[":man_juggling_dark_skin_tone:"],category:"activity"},":man_kneeling_tone1:":{uc_base:"1f9ce-1f3fb-2642",uc_full:"1f9ce-1f3fb-200d-2642-fe0f",shortnames:[":man_kneeling_light_skin_tone:"],category:"people"},":man_kneeling_tone2:":{uc_base:"1f9ce-1f3fc-2642",uc_full:"1f9ce-1f3fc-200d-2642-fe0f",shortnames:[":man_kneeling_medium_light_skin_tone:"],
category:"people"},":man_kneeling_tone3:":{uc_base:"1f9ce-1f3fd-2642",uc_full:"1f9ce-1f3fd-200d-2642-fe0f",shortnames:[":man_kneeling_medium_skin_tone:"],category:"people"},":man_kneeling_tone4:":{uc_base:"1f9ce-1f3fe-2642",uc_full:"1f9ce-1f3fe-200d-2642-fe0f",shortnames:[":man_kneeling_medium_dark_skin_tone:"],category:"people"},":man_kneeling_tone5:":{uc_base:"1f9ce-1f3ff-2642",uc_full:"1f9ce-1f3ff-200d-2642-fe0f",shortnames:[":man_kneeling_dark_skin_tone:"],category:"people"},":man_lifting_weights_tone1:":{uc_base:"1f3cb-1f3fb-2642",uc_full:"1f3cb-1f3fb-200d-2642-fe0f",shortnames:[":man_lifting_weights_light_skin_tone:"],category:"activity"},":man_lifting_weights_tone2:":{uc_base:"1f3cb-1f3fc-2642",uc_full:"1f3cb-1f3fc-200d-2642-fe0f",shortnames:[":man_lifting_weights_medium_light_skin_tone:"],category:"activity"},":man_lifting_weights_tone3:":{uc_base:"1f3cb-1f3fd-2642",uc_full:"1f3cb-1f3fd-200d-2642-fe0f",shortnames:[":man_lifting_weights_medium_skin_tone:"],category:"activity"},":man_lifting_weights_tone4:":{uc_base:"1f3cb-1f3fe-2642",uc_full:"1f3cb-1f3fe-200d-2642-fe0f",shortnames:[":man_lifting_weights_medium_dark_skin_tone:"],category:"activity"},":man_lifting_weights_tone5:":{uc_base:"1f3cb-1f3ff-2642",uc_full:"1f3cb-1f3ff-200d-2642-fe0f",shortnames:[":man_lifting_weights_dark_skin_tone:"],category:"activity"},":man_mage_tone1:":{uc_base:"1f9d9-1f3fb-2642",uc_full:"1f9d9-1f3fb-200d-2642-fe0f",shortnames:[":man_mage_light_skin_tone:"],category:"people"},":man_mage_tone2:":{uc_base:"1f9d9-1f3fc-2642",uc_full:"1f9d9-1f3fc-200d-2642-fe0f",shortnames:[":man_mage_medium_light_skin_tone:"],category:"people"},":man_mage_tone3:":{uc_base:"1f9d9-1f3fd-2642",uc_full:"1f9d9-1f3fd-200d-2642-fe0f",shortnames:[":man_mage_medium_skin_tone:"],category:"people"},":man_mage_tone4:":{uc_base:"1f9d9-1f3fe-2642",uc_full:"1f9d9-1f3fe-200d-2642-fe0f",shortnames:[":man_mage_medium_dark_skin_tone:"],category:"people"},":man_mage_tone5:":{uc_base:"1f9d9-1f3ff-2642",uc_full:"1f9d9-1f3ff-200d-2642-fe0f",shortnames:[":man_mage_dark_skin_tone:"],category:"people"},":man_mountain_biking_tone1:":{uc_base:"1f6b5-1f3fb-2642",uc_full:"1f6b5-1f3fb-200d-2642-fe0f",shortnames:[":man_mountain_biking_light_skin_tone:"],category:"activity"},":man_mountain_biking_tone2:":{uc_base:"1f6b5-1f3fc-2642",uc_full:"1f6b5-1f3fc-200d-2642-fe0f",shortnames:[":man_mountain_biking_medium_light_skin_tone:"],category:"activity"},":man_mountain_biking_tone3:":{uc_base:"1f6b5-1f3fd-2642",uc_full:"1f6b5-1f3fd-200d-2642-fe0f",shortnames:[":man_mountain_biking_medium_skin_tone:"],category:"activity"},":man_mountain_biking_tone4:":{uc_base:"1f6b5-1f3fe-2642",uc_full:"1f6b5-1f3fe-200d-2642-fe0f",shortnames:[":man_mountain_biking_medium_dark_skin_tone:"],category:"activity"},":man_mountain_biking_tone5:":{uc_base:"1f6b5-1f3ff-2642",uc_full:"1f6b5-1f3ff-200d-2642-fe0f",shortnames:[":man_mountain_biking_dark_skin_tone:"],category:"activity"},":man_pilot_tone1:":{uc_base:"1f468-1f3fb-2708",uc_full:"1f468-1f3fb-200d-2708-fe0f",shortnames:[":man_pilot_light_skin_tone:"],category:"people"},":man_pilot_tone2:":{uc_base:"1f468-1f3fc-2708",uc_full:"1f468-1f3fc-200d-2708-fe0f",shortnames:[":man_pilot_medium_light_skin_tone:"],category:"people"},":man_pilot_tone3:":{uc_base:"1f468-1f3fd-2708",uc_full:"1f468-1f3fd-200d-2708-fe0f",shortnames:[":man_pilot_medium_skin_tone:"],category:"people"},":man_pilot_tone4:":{uc_base:"1f468-1f3fe-2708",uc_full:"1f468-1f3fe-200d-2708-fe0f",shortnames:[":man_pilot_medium_dark_skin_tone:"],category:"people"},":man_pilot_tone5:":{uc_base:"1f468-1f3ff-2708",uc_full:"1f468-1f3ff-200d-2708-fe0f",shortnames:[":man_pilot_dark_skin_tone:"],category:"people"},":man_playing_handball_tone1:":{uc_base:"1f93e-1f3fb-2642",uc_full:"1f93e-1f3fb-200d-2642-fe0f",shortnames:[":man_playing_handball_light_skin_tone:"],category:"activity"},":man_playing_handball_tone2:":{uc_base:"1f93e-1f3fc-2642",uc_full:"1f93e-1f3fc-200d-2642-fe0f",shortnames:[":man_playing_handball_medium_light_skin_tone:"],category:"activity"},":man_playing_handball_tone3:":{uc_base:"1f93e-1f3fd-2642",uc_full:"1f93e-1f3fd-200d-2642-fe0f",shortnames:[":man_playing_handball_medium_skin_tone:"],category:"activity"},":man_playing_handball_tone4:":{uc_base:"1f93e-1f3fe-2642",uc_full:"1f93e-1f3fe-200d-2642-fe0f",shortnames:[":man_playing_handball_medium_dark_skin_tone:"],category:"activity"},":man_playing_handball_tone5:":{uc_base:"1f93e-1f3ff-2642",uc_full:"1f93e-1f3ff-200d-2642-fe0f",shortnames:[":man_playing_handball_dark_skin_tone:"],category:"activity"},":man_playing_water_polo_tone1:":{uc_base:"1f93d-1f3fb-2642",uc_full:"1f93d-1f3fb-200d-2642-fe0f",shortnames:[":man_playing_water_polo_light_skin_tone:"],category:"activity"},":man_playing_water_polo_tone2:":{uc_base:"1f93d-1f3fc-2642",uc_full:"1f93d-1f3fc-200d-2642-fe0f",shortnames:[":man_playing_water_polo_medium_light_skin_tone:"],category:"activity"},":man_playing_water_polo_tone3:":{uc_base:"1f93d-1f3fd-2642",uc_full:"1f93d-1f3fd-200d-2642-fe0f",shortnames:[":man_playing_water_polo_medium_skin_tone:"],category:"activity"},":man_playing_water_polo_tone4:":{uc_base:"1f93d-1f3fe-2642",uc_full:"1f93d-1f3fe-200d-2642-fe0f",shortnames:[":man_playing_water_polo_medium_dark_skin_tone:"],category:"activity"},":man_playing_water_polo_tone5:":{uc_base:"1f93d-1f3ff-2642",uc_full:"1f93d-1f3ff-200d-2642-fe0f",shortnames:[":man_playing_water_polo_dark_skin_tone:"],category:"activity"},":man_police_officer_tone1:":{uc_base:"1f46e-1f3fb-2642",uc_full:"1f46e-1f3fb-200d-2642-fe0f",shortnames:[":man_police_officer_light_skin_tone:"],category:"people"},":man_police_officer_tone2:":{uc_base:"1f46e-1f3fc-2642",uc_full:"1f46e-1f3fc-200d-2642-fe0f",shortnames:[":man_police_officer_medium_light_skin_tone:"],category:"people"},":man_police_officer_tone3:":{uc_base:"1f46e-1f3fd-2642",uc_full:"1f46e-1f3fd-200d-2642-fe0f",shortnames:[":man_police_officer_medium_skin_tone:"],category:"people"},":man_police_officer_tone4:":{uc_base:"1f46e-1f3fe-2642",uc_full:"1f46e-1f3fe-200d-2642-fe0f",shortnames:[":man_police_officer_medium_dark_skin_tone:"],category:"people"},":man_police_officer_tone5:":{uc_base:"1f46e-1f3ff-2642",uc_full:"1f46e-1f3ff-200d-2642-fe0f",shortnames:[":man_police_officer_dark_skin_tone:"],category:"people"},":man_pouting_tone1:":{uc_base:"1f64e-1f3fb-2642",uc_full:"1f64e-1f3fb-200d-2642-fe0f",shortnames:[":man_pouting_light_skin_tone:"],category:"people"},":man_pouting_tone2:":{uc_base:"1f64e-1f3fc-2642",uc_full:"1f64e-1f3fc-200d-2642-fe0f",shortnames:[":man_pouting_medium_light_skin_tone:"],category:"people"},":man_pouting_tone3:":{uc_base:"1f64e-1f3fd-2642",uc_full:"1f64e-1f3fd-200d-2642-fe0f",shortnames:[":man_pouting_medium_skin_tone:"],category:"people"},":man_pouting_tone4:":{uc_base:"1f64e-1f3fe-2642",uc_full:"1f64e-1f3fe-200d-2642-fe0f",shortnames:[":man_pouting_medium_dark_skin_tone:"],category:"people"},":man_pouting_tone5:":{uc_base:"1f64e-1f3ff-2642",uc_full:"1f64e-1f3ff-200d-2642-fe0f",shortnames:[":man_pouting_dark_skin_tone:"],category:"people"},":man_raising_hand_tone1:":{uc_base:"1f64b-1f3fb-2642",uc_full:"1f64b-1f3fb-200d-2642-fe0f",shortnames:[":man_raising_hand_light_skin_tone:"],category:"people"},":man_raising_hand_tone2:":{uc_base:"1f64b-1f3fc-2642",uc_full:"1f64b-1f3fc-200d-2642-fe0f",shortnames:[":man_raising_hand_medium_light_skin_tone:"],category:"people"},":man_raising_hand_tone3:":{uc_base:"1f64b-1f3fd-2642",uc_full:"1f64b-1f3fd-200d-2642-fe0f",shortnames:[":man_raising_hand_medium_skin_tone:"],category:"people"},":man_raising_hand_tone4:":{uc_base:"1f64b-1f3fe-2642",uc_full:"1f64b-1f3fe-200d-2642-fe0f",shortnames:[":man_raising_hand_medium_dark_skin_tone:"],category:"people"},":man_raising_hand_tone5:":{uc_base:"1f64b-1f3ff-2642",uc_full:"1f64b-1f3ff-200d-2642-fe0f",shortnames:[":man_raising_hand_dark_skin_tone:"],category:"people"},":man_rowing_boat_tone1:":{uc_base:"1f6a3-1f3fb-2642",uc_full:"1f6a3-1f3fb-200d-2642-fe0f",shortnames:[":man_rowing_boat_light_skin_tone:"],category:"activity"},":man_rowing_boat_tone2:":{uc_base:"1f6a3-1f3fc-2642",uc_full:"1f6a3-1f3fc-200d-2642-fe0f",shortnames:[":man_rowing_boat_medium_light_skin_tone:"],category:"activity"},":man_rowing_boat_tone3:":{uc_base:"1f6a3-1f3fd-2642",uc_full:"1f6a3-1f3fd-200d-2642-fe0f",shortnames:[":man_rowing_boat_medium_skin_tone:"],category:"activity"},":man_rowing_boat_tone4:":{uc_base:"1f6a3-1f3fe-2642",uc_full:"1f6a3-1f3fe-200d-2642-fe0f",shortnames:[":man_rowing_boat_medium_dark_skin_tone:"],category:"activity"},":man_rowing_boat_tone5:":{uc_base:"1f6a3-1f3ff-2642",uc_full:"1f6a3-1f3ff-200d-2642-fe0f",shortnames:[":man_rowing_boat_dark_skin_tone:"],category:"activity"},":man_running_tone1:":{uc_base:"1f3c3-1f3fb-2642",uc_full:"1f3c3-1f3fb-200d-2642-fe0f",shortnames:[":man_running_light_skin_tone:"],category:"people"},":man_running_tone2:":{uc_base:"1f3c3-1f3fc-2642",uc_full:"1f3c3-1f3fc-200d-2642-fe0f",shortnames:[":man_running_medium_light_skin_tone:"],category:"people"},":man_running_tone3:":{uc_base:"1f3c3-1f3fd-2642",uc_full:"1f3c3-1f3fd-200d-2642-fe0f",shortnames:[":man_running_medium_skin_tone:"],category:"people"},":man_running_tone4:":{uc_base:"1f3c3-1f3fe-2642",uc_full:"1f3c3-1f3fe-200d-2642-fe0f",shortnames:[":man_running_medium_dark_skin_tone:"],category:"people"},":man_running_tone5:":{uc_base:"1f3c3-1f3ff-2642",uc_full:"1f3c3-1f3ff-200d-2642-fe0f",shortnames:[":man_running_dark_skin_tone:"],category:"people"},":man_shrugging_tone1:":{uc_base:"1f937-1f3fb-2642",uc_full:"1f937-1f3fb-200d-2642-fe0f",shortnames:[":man_shrugging_light_skin_tone:"],category:"people"},":man_shrugging_tone2:":{uc_base:"1f937-1f3fc-2642",uc_full:"1f937-1f3fc-200d-2642-fe0f",shortnames:[":man_shrugging_medium_light_skin_tone:"],category:"people"},":man_shrugging_tone3:":{uc_base:"1f937-1f3fd-2642",uc_full:"1f937-1f3fd-200d-2642-fe0f",shortnames:[":man_shrugging_medium_skin_tone:"],category:"people"},":man_shrugging_tone4:":{uc_base:"1f937-1f3fe-2642",uc_full:"1f937-1f3fe-200d-2642-fe0f",shortnames:[":man_shrugging_medium_dark_skin_tone:"],category:"people"},":man_shrugging_tone5:":{uc_base:"1f937-1f3ff-2642",uc_full:"1f937-1f3ff-200d-2642-fe0f",shortnames:[":man_shrugging_dark_skin_tone:"],category:"people"},":man_standing_tone1:":{uc_base:"1f9cd-1f3fb-2642",uc_full:"1f9cd-1f3fb-200d-2642-fe0f",shortnames:[":man_standing_light_skin_tone:"],category:"people"},":man_standing_tone2:":{uc_base:"1f9cd-1f3fc-2642",uc_full:"1f9cd-1f3fc-200d-2642-fe0f",shortnames:[":man_standing_medium_light_skin_tone:"],category:"people"},":man_standing_tone3:":{uc_base:"1f9cd-1f3fd-2642",uc_full:"1f9cd-1f3fd-200d-2642-fe0f",shortnames:[":man_standing_medium_skin_tone:"],category:"people"},":man_standing_tone4:":{uc_base:"1f9cd-1f3fe-2642",uc_full:"1f9cd-1f3fe-200d-2642-fe0f",shortnames:[":man_standing_medium_dark_skin_tone:"],category:"people"},":man_standing_tone5:":{uc_base:"1f9cd-1f3ff-2642",uc_full:"1f9cd-1f3ff-200d-2642-fe0f",shortnames:[":man_standing_dark_skin_tone:"],category:"people"},":man_superhero_tone1:":{uc_base:"1f9b8-1f3fb-2642",uc_full:"1f9b8-1f3fb-200d-2642-fe0f",shortnames:[":man_superhero_light_skin_tone:"],category:"people"},":man_superhero_tone2:":{uc_base:"1f9b8-1f3fc-2642",uc_full:"1f9b8-1f3fc-200d-2642-fe0f",shortnames:[":man_superhero_medium_light_skin_tone:"],category:"people"},":man_superhero_tone3:":{uc_base:"1f9b8-1f3fd-2642",uc_full:"1f9b8-1f3fd-200d-2642-fe0f",shortnames:[":man_superhero_medium_skin_tone:"],category:"people"},":man_superhero_tone4:":{uc_base:"1f9b8-1f3fe-2642",uc_full:"1f9b8-1f3fe-200d-2642-fe0f",shortnames:[":man_superhero_medium_dark_skin_tone:"],category:"people"},":man_superhero_tone5:":{uc_base:"1f9b8-1f3ff-2642",uc_full:"1f9b8-1f3ff-200d-2642-fe0f",shortnames:[":man_superhero_dark_skin_tone:"],category:"people"},":man_supervillain_tone1:":{uc_base:"1f9b9-1f3fb-2642",uc_full:"1f9b9-1f3fb-200d-2642-fe0f",shortnames:[":man_supervillain_light_skin_tone:"],category:"people"},":man_supervillain_tone2:":{uc_base:"1f9b9-1f3fc-2642",uc_full:"1f9b9-1f3fc-200d-2642-fe0f",shortnames:[":man_supervillain_medium_light_skin_tone:"],category:"people"},":man_supervillain_tone3:":{uc_base:"1f9b9-1f3fd-2642",uc_full:"1f9b9-1f3fd-200d-2642-fe0f",shortnames:[":man_supervillain_medium_skin_tone:"],category:"people"},":man_supervillain_tone4:":{uc_base:"1f9b9-1f3fe-2642",uc_full:"1f9b9-1f3fe-200d-2642-fe0f",shortnames:[":man_supervillain_medium_dark_skin_tone:"],category:"people"},":man_supervillain_tone5:":{uc_base:"1f9b9-1f3ff-2642",uc_full:"1f9b9-1f3ff-200d-2642-fe0f",shortnames:[":man_supervillain_dark_skin_tone:"],category:"people"},":man_surfing_tone1:":{uc_base:"1f3c4-1f3fb-2642",uc_full:"1f3c4-1f3fb-200d-2642-fe0f",shortnames:[":man_surfing_light_skin_tone:"],category:"activity"},":man_surfing_tone2:":{uc_base:"1f3c4-1f3fc-2642",uc_full:"1f3c4-1f3fc-200d-2642-fe0f",shortnames:[":man_surfing_medium_light_skin_tone:"],category:"activity"},":man_surfing_tone3:":{uc_base:"1f3c4-1f3fd-2642",uc_full:"1f3c4-1f3fd-200d-2642-fe0f",shortnames:[":man_surfing_medium_skin_tone:"],category:"activity"},":man_surfing_tone4:":{uc_base:"1f3c4-1f3fe-2642",uc_full:"1f3c4-1f3fe-200d-2642-fe0f",shortnames:[":man_surfing_medium_dark_skin_tone:"],category:"activity"},":man_surfing_tone5:":{uc_base:"1f3c4-1f3ff-2642",uc_full:"1f3c4-1f3ff-200d-2642-fe0f",shortnames:[":man_surfing_dark_skin_tone:"],category:"activity"},":man_swimming_tone1:":{uc_base:"1f3ca-1f3fb-2642",uc_full:"1f3ca-1f3fb-200d-2642-fe0f",shortnames:[":man_swimming_light_skin_tone:"],category:"activity"},":man_swimming_tone2:":{uc_base:"1f3ca-1f3fc-2642",uc_full:"1f3ca-1f3fc-200d-2642-fe0f",shortnames:[":man_swimming_medium_light_skin_tone:"],category:"activity"},":man_swimming_tone3:":{uc_base:"1f3ca-1f3fd-2642",uc_full:"1f3ca-1f3fd-200d-2642-fe0f",shortnames:[":man_swimming_medium_skin_tone:"],category:"activity"},":man_swimming_tone4:":{uc_base:"1f3ca-1f3fe-2642",uc_full:"1f3ca-1f3fe-200d-2642-fe0f",shortnames:[":man_swimming_medium_dark_skin_tone:"],category:"activity"},":man_swimming_tone5:":{uc_base:"1f3ca-1f3ff-2642",uc_full:"1f3ca-1f3ff-200d-2642-fe0f",shortnames:[":man_swimming_dark_skin_tone:"],category:"activity"},":man_tipping_hand_tone1:":{uc_base:"1f481-1f3fb-2642",uc_full:"1f481-1f3fb-200d-2642-fe0f",shortnames:[":man_tipping_hand_light_skin_tone:"],category:"people"},":man_tipping_hand_tone2:":{uc_base:"1f481-1f3fc-2642",uc_full:"1f481-1f3fc-200d-2642-fe0f",shortnames:[":man_tipping_hand_medium_light_skin_tone:"],category:"people"},":man_tipping_hand_tone3:":{uc_base:"1f481-1f3fd-2642",uc_full:"1f481-1f3fd-200d-2642-fe0f",shortnames:[":man_tipping_hand_medium_skin_tone:"],category:"people"},":man_tipping_hand_tone4:":{uc_base:"1f481-1f3fe-2642",uc_full:"1f481-1f3fe-200d-2642-fe0f",shortnames:[":man_tipping_hand_medium_dark_skin_tone:"],category:"people"},":man_tipping_hand_tone5:":{uc_base:"1f481-1f3ff-2642",uc_full:"1f481-1f3ff-200d-2642-fe0f",shortnames:[":man_tipping_hand_dark_skin_tone:"],category:"people"},":man_vampire_tone1:":{uc_base:"1f9db-1f3fb-2642",uc_full:"1f9db-1f3fb-200d-2642-fe0f",shortnames:[":man_vampire_light_skin_tone:"],category:"people"},":man_vampire_tone2:":{uc_base:"1f9db-1f3fc-2642",uc_full:"1f9db-1f3fc-200d-2642-fe0f",shortnames:[":man_vampire_medium_light_skin_tone:"],category:"people"},":man_vampire_tone3:":{uc_base:"1f9db-1f3fd-2642",uc_full:"1f9db-1f3fd-200d-2642-fe0f",shortnames:[":man_vampire_medium_skin_tone:"],category:"people"},":man_vampire_tone4:":{uc_base:"1f9db-1f3fe-2642",uc_full:"1f9db-1f3fe-200d-2642-fe0f",shortnames:[":man_vampire_medium_dark_skin_tone:"],category:"people"},":man_vampire_tone5:":{uc_base:"1f9db-1f3ff-2642",uc_full:"1f9db-1f3ff-200d-2642-fe0f",shortnames:[":man_vampire_dark_skin_tone:"],category:"people"},":man_walking_tone1:":{uc_base:"1f6b6-1f3fb-2642",uc_full:"1f6b6-1f3fb-200d-2642-fe0f",shortnames:[":man_walking_light_skin_tone:"],category:"people"},":man_walking_tone2:":{uc_base:"1f6b6-1f3fc-2642",uc_full:"1f6b6-1f3fc-200d-2642-fe0f",shortnames:[":man_walking_medium_light_skin_tone:"],category:"people"},":man_walking_tone3:":{uc_base:"1f6b6-1f3fd-2642",uc_full:"1f6b6-1f3fd-200d-2642-fe0f",shortnames:[":man_walking_medium_skin_tone:"],category:"people"},":man_walking_tone4:":{uc_base:"1f6b6-1f3fe-2642",uc_full:"1f6b6-1f3fe-200d-2642-fe0f",shortnames:[":man_walking_medium_dark_skin_tone:"],category:"people"},":man_walking_tone5:":{uc_base:"1f6b6-1f3ff-2642",uc_full:"1f6b6-1f3ff-200d-2642-fe0f",shortnames:[":man_walking_dark_skin_tone:"],category:"people"},":man_wearing_turban_tone1:":{uc_base:"1f473-1f3fb-2642",uc_full:"1f473-1f3fb-200d-2642-fe0f",shortnames:[":man_wearing_turban_light_skin_tone:"],category:"people"},":man_wearing_turban_tone2:":{uc_base:"1f473-1f3fc-2642",uc_full:"1f473-1f3fc-200d-2642-fe0f",shortnames:[":man_wearing_turban_medium_light_skin_tone:"],category:"people"},":man_wearing_turban_tone3:":{uc_base:"1f473-1f3fd-2642",uc_full:"1f473-1f3fd-200d-2642-fe0f",shortnames:[":man_wearing_turban_medium_skin_tone:"],category:"people"},":man_wearing_turban_tone4:":{uc_base:"1f473-1f3fe-2642",uc_full:"1f473-1f3fe-200d-2642-fe0f",shortnames:[":man_wearing_turban_medium_dark_skin_tone:"],category:"people"},":man_wearing_turban_tone5:":{uc_base:"1f473-1f3ff-2642",uc_full:"1f473-1f3ff-200d-2642-fe0f",shortnames:[":man_wearing_turban_dark_skin_tone:"],category:"people"},":man_with_veil_tone1:":{uc_base:"1f470-1f3fb-2642",uc_full:"1f470-1f3fb-200d-2642-fe0f",shortnames:[":man_with_veil_light_skin_tone:"],category:"people"},":man_with_veil_tone2:":{uc_base:"1f470-1f3fc-2642",uc_full:"1f470-1f3fc-200d-2642-fe0f",shortnames:[":man_with_veil_medium_light_skin_tone:"],category:"people"},":man_with_veil_tone3:":{uc_base:"1f470-1f3fd-2642",uc_full:"1f470-1f3fd-200d-2642-fe0f",shortnames:[":man_with_veil_medium_skin_tone:"],category:"people"},":man_with_veil_tone4:":{uc_base:"1f470-1f3fe-2642",uc_full:"1f470-1f3fe-200d-2642-fe0f",shortnames:[":man_with_veil_medium_dark_skin_tone:"],category:"people"},":man_with_veil_tone5:":{uc_base:"1f470-1f3ff-2642",uc_full:"1f470-1f3ff-200d-2642-fe0f",shortnames:[":man_with_veil_dark_skin_tone:"],category:"people"},":mermaid_tone1:":{uc_base:"1f9dc-1f3fb-2640",uc_full:"1f9dc-1f3fb-200d-2640-fe0f",shortnames:[":mermaid_light_skin_tone:"],category:"people"},":mermaid_tone2:":{uc_base:"1f9dc-1f3fc-2640",uc_full:"1f9dc-1f3fc-200d-2640-fe0f",shortnames:[":mermaid_medium_light_skin_tone:"],category:"people"},":mermaid_tone3:":{uc_base:"1f9dc-1f3fd-2640",uc_full:"1f9dc-1f3fd-200d-2640-fe0f",shortnames:[":mermaid_medium_skin_tone:"],category:"people"},":mermaid_tone4:":{uc_base:"1f9dc-1f3fe-2640",uc_full:"1f9dc-1f3fe-200d-2640-fe0f",shortnames:[":mermaid_medium_dark_skin_tone:"],category:"people"},":mermaid_tone5:":{uc_base:"1f9dc-1f3ff-2640",uc_full:"1f9dc-1f3ff-200d-2640-fe0f",shortnames:[":mermaid_dark_skin_tone:"],category:"people"},":merman_tone1:":{uc_base:"1f9dc-1f3fb-2642",uc_full:"1f9dc-1f3fb-200d-2642-fe0f",shortnames:[":merman_light_skin_tone:"],category:"people"},":merman_tone2:":{uc_base:"1f9dc-1f3fc-2642",uc_full:"1f9dc-1f3fc-200d-2642-fe0f",shortnames:[":merman_medium_light_skin_tone:"],category:"people"},":merman_tone3:":{uc_base:"1f9dc-1f3fd-2642",uc_full:"1f9dc-1f3fd-200d-2642-fe0f",shortnames:[":merman_medium_skin_tone:"],category:"people"},":merman_tone4:":{uc_base:"1f9dc-1f3fe-2642",uc_full:"1f9dc-1f3fe-200d-2642-fe0f",shortnames:[":merman_medium_dark_skin_tone:"],category:"people"},":merman_tone5:":{uc_base:"1f9dc-1f3ff-2642",uc_full:"1f9dc-1f3ff-200d-2642-fe0f",shortnames:[":merman_dark_skin_tone:"],category:"people"},":pilot_tone1:":{uc_base:"1f9d1-1f3fb-2708",uc_full:"1f9d1-1f3fb-200d-2708-fe0f",shortnames:[":pilot_light_skin_tone:"],category:"people"},":pilot_tone2:":{uc_base:"1f9d1-1f3fc-2708",uc_full:"1f9d1-1f3fc-200d-2708-fe0f",shortnames:[":pilot_medium_light_skin_tone:"],category:"people"},":pilot_tone3:":{uc_base:"1f9d1-1f3fd-2708",uc_full:"1f9d1-1f3fd-200d-2708-fe0f",shortnames:[":pilot_medium_skin_tone:"],category:"people"},":pilot_tone4:":{uc_base:"1f9d1-1f3fe-2708",uc_full:"1f9d1-1f3fe-200d-2708-fe0f",shortnames:[":pilot_medium_dark_skin_tone:"],category:"people"},":pilot_tone5:":{uc_base:"1f9d1-1f3ff-2708",uc_full:"1f9d1-1f3ff-200d-2708-fe0f",shortnames:[":pilot_dark_skin_tone:"],category:"people"},":woman_biking_tone1:":{uc_base:"1f6b4-1f3fb-2640",uc_full:"1f6b4-1f3fb-200d-2640-fe0f",shortnames:[":woman_biking_light_skin_tone:"],category:"activity"},":woman_biking_tone2:":{uc_base:"1f6b4-1f3fc-2640",uc_full:"1f6b4-1f3fc-200d-2640-fe0f",shortnames:[":woman_biking_medium_light_skin_tone:"],category:"activity"},":woman_biking_tone3:":{uc_base:"1f6b4-1f3fd-2640",uc_full:"1f6b4-1f3fd-200d-2640-fe0f",shortnames:[":woman_biking_medium_skin_tone:"],category:"activity"},":woman_biking_tone4:":{uc_base:"1f6b4-1f3fe-2640",uc_full:"1f6b4-1f3fe-200d-2640-fe0f",shortnames:[":woman_biking_medium_dark_skin_tone:"],category:"activity"},":woman_biking_tone5:":{uc_base:"1f6b4-1f3ff-2640",uc_full:"1f6b4-1f3ff-200d-2640-fe0f",shortnames:[":woman_biking_dark_skin_tone:"],category:"activity"},":woman_bowing_tone1:":{uc_base:"1f647-1f3fb-2640",uc_full:"1f647-1f3fb-200d-2640-fe0f",shortnames:[":woman_bowing_light_skin_tone:"],category:"people"},":woman_bowing_tone2:":{uc_base:"1f647-1f3fc-2640",uc_full:"1f647-1f3fc-200d-2640-fe0f",shortnames:[":woman_bowing_medium_light_skin_tone:"],category:"people"},":woman_bowing_tone3:":{uc_base:"1f647-1f3fd-2640",uc_full:"1f647-1f3fd-200d-2640-fe0f",shortnames:[":woman_bowing_medium_skin_tone:"],category:"people"},":woman_bowing_tone4:":{uc_base:"1f647-1f3fe-2640",uc_full:"1f647-1f3fe-200d-2640-fe0f",shortnames:[":woman_bowing_medium_dark_skin_tone:"],category:"people"},":woman_bowing_tone5:":{uc_base:"1f647-1f3ff-2640",uc_full:"1f647-1f3ff-200d-2640-fe0f",shortnames:[":woman_bowing_dark_skin_tone:"],category:"people"},":woman_cartwheeling_tone1:":{uc_base:"1f938-1f3fb-2640",uc_full:"1f938-1f3fb-200d-2640-fe0f",shortnames:[":woman_cartwheeling_light_skin_tone:"],category:"activity"},":woman_cartwheeling_tone2:":{uc_base:"1f938-1f3fc-2640",uc_full:"1f938-1f3fc-200d-2640-fe0f",shortnames:[":woman_cartwheeling_medium_light_skin_tone:"],category:"activity"},":woman_cartwheeling_tone3:":{uc_base:"1f938-1f3fd-2640",uc_full:"1f938-1f3fd-200d-2640-fe0f",shortnames:[":woman_cartwheeling_medium_skin_tone:"],category:"activity"},":woman_cartwheeling_tone4:":{uc_base:"1f938-1f3fe-2640",uc_full:"1f938-1f3fe-200d-2640-fe0f",shortnames:[":woman_cartwheeling_medium_dark_skin_tone:"],category:"activity"},":woman_cartwheeling_tone5:":{uc_base:"1f938-1f3ff-2640",uc_full:"1f938-1f3ff-200d-2640-fe0f",shortnames:[":woman_cartwheeling_dark_skin_tone:"],category:"activity"},":woman_climbing_tone1:":{uc_base:"1f9d7-1f3fb-2640",uc_full:"1f9d7-1f3fb-200d-2640-fe0f",shortnames:[":woman_climbing_light_skin_tone:"],category:"activity"},":woman_climbing_tone2:":{uc_base:"1f9d7-1f3fc-2640",uc_full:"1f9d7-1f3fc-200d-2640-fe0f",shortnames:[":woman_climbing_medium_light_skin_tone:"],category:"activity"},":woman_climbing_tone3:":{uc_base:"1f9d7-1f3fd-2640",uc_full:"1f9d7-1f3fd-200d-2640-fe0f",shortnames:[":woman_climbing_medium_skin_tone:"],category:"activity"},":woman_climbing_tone4:":{uc_base:"1f9d7-1f3fe-2640",uc_full:"1f9d7-1f3fe-200d-2640-fe0f",shortnames:[":woman_climbing_medium_dark_skin_tone:"],category:"activity"},":woman_climbing_tone5:":{uc_base:"1f9d7-1f3ff-2640",uc_full:"1f9d7-1f3ff-200d-2640-fe0f",shortnames:[":woman_climbing_dark_skin_tone:"],category:"activity"},":woman_construction_worker_tone1:":{uc_base:"1f477-1f3fb-2640",uc_full:"1f477-1f3fb-200d-2640-fe0f",shortnames:[":woman_construction_worker_light_skin_tone:"],category:"people"},":woman_construction_worker_tone2:":{uc_base:"1f477-1f3fc-2640",uc_full:"1f477-1f3fc-200d-2640-fe0f",shortnames:[":woman_construction_worker_medium_light_skin_tone:"],category:"people"},":woman_construction_worker_tone3:":{uc_base:"1f477-1f3fd-2640",uc_full:"1f477-1f3fd-200d-2640-fe0f",shortnames:[":woman_construction_worker_medium_skin_tone:"],category:"people"},":woman_construction_worker_tone4:":{uc_base:"1f477-1f3fe-2640",uc_full:"1f477-1f3fe-200d-2640-fe0f",shortnames:[":woman_construction_worker_medium_dark_skin_tone:"],category:"people"},":woman_construction_worker_tone5:":{uc_base:"1f477-1f3ff-2640",uc_full:"1f477-1f3ff-200d-2640-fe0f",shortnames:[":woman_construction_worker_dark_skin_tone:"],category:"people"},":woman_detective_tone1:":{uc_base:"1f575-1f3fb-2640",uc_full:"1f575-1f3fb-200d-2640-fe0f",shortnames:[":woman_detective_light_skin_tone:"],category:"people"},":woman_detective_tone2:":{uc_base:"1f575-1f3fc-2640",uc_full:"1f575-1f3fc-200d-2640-fe0f",shortnames:[":woman_detective_medium_light_skin_tone:"],category:"people"},":woman_detective_tone3:":{uc_base:"1f575-1f3fd-2640",uc_full:"1f575-1f3fd-200d-2640-fe0f",shortnames:[":woman_detective_medium_skin_tone:"],category:"people"},":woman_detective_tone4:":{uc_base:"1f575-1f3fe-2640",uc_full:"1f575-1f3fe-200d-2640-fe0f",shortnames:[":woman_detective_medium_dark_skin_tone:"],category:"people"},":woman_detective_tone5:":{uc_base:"1f575-1f3ff-2640",uc_full:"1f575-1f3ff-200d-2640-fe0f",shortnames:[":woman_detective_dark_skin_tone:"],category:"people"},":woman_elf_tone1:":{uc_base:"1f9dd-1f3fb-2640",uc_full:"1f9dd-1f3fb-200d-2640-fe0f",shortnames:[":woman_elf_light_skin_tone:"],category:"people"},":woman_elf_tone2:":{uc_base:"1f9dd-1f3fc-2640",uc_full:"1f9dd-1f3fc-200d-2640-fe0f",shortnames:[":woman_elf_medium_light_skin_tone:"],category:"people"},":woman_elf_tone3:":{uc_base:"1f9dd-1f3fd-2640",uc_full:"1f9dd-1f3fd-200d-2640-fe0f",shortnames:[":woman_elf_medium_skin_tone:"],category:"people"},":woman_elf_tone4:":{uc_base:"1f9dd-1f3fe-2640",uc_full:"1f9dd-1f3fe-200d-2640-fe0f",shortnames:[":woman_elf_medium_dark_skin_tone:"],category:"people"},":woman_elf_tone5:":{uc_base:"1f9dd-1f3ff-2640",uc_full:"1f9dd-1f3ff-200d-2640-fe0f",shortnames:[":woman_elf_dark_skin_tone:"],category:"people"},":woman_facepalming_tone1:":{uc_base:"1f926-1f3fb-2640",uc_full:"1f926-1f3fb-200d-2640-fe0f",shortnames:[":woman_facepalming_light_skin_tone:"],category:"people"},":woman_facepalming_tone2:":{uc_base:"1f926-1f3fc-2640",uc_full:"1f926-1f3fc-200d-2640-fe0f",shortnames:[":woman_facepalming_medium_light_skin_tone:"],category:"people"},":woman_facepalming_tone3:":{uc_base:"1f926-1f3fd-2640",uc_full:"1f926-1f3fd-200d-2640-fe0f",shortnames:[":woman_facepalming_medium_skin_tone:"],category:"people"},":woman_facepalming_tone4:":{uc_base:"1f926-1f3fe-2640",uc_full:"1f926-1f3fe-200d-2640-fe0f",shortnames:[":woman_facepalming_medium_dark_skin_tone:"],category:"people"},":woman_facepalming_tone5:":{uc_base:"1f926-1f3ff-2640",uc_full:"1f926-1f3ff-200d-2640-fe0f",shortnames:[":woman_facepalming_dark_skin_tone:"],category:"people"},":woman_fairy_tone1:":{uc_base:"1f9da-1f3fb-2640",uc_full:"1f9da-1f3fb-200d-2640-fe0f",shortnames:[":woman_fairy_light_skin_tone:"],category:"people"},":woman_fairy_tone2:":{uc_base:"1f9da-1f3fc-2640",uc_full:"1f9da-1f3fc-200d-2640-fe0f",shortnames:[":woman_fairy_medium_light_skin_tone:"],category:"people"},":woman_fairy_tone3:":{uc_base:"1f9da-1f3fd-2640",uc_full:"1f9da-1f3fd-200d-2640-fe0f",shortnames:[":woman_fairy_medium_skin_tone:"],category:"people"},":woman_fairy_tone4:":{uc_base:"1f9da-1f3fe-2640",uc_full:"1f9da-1f3fe-200d-2640-fe0f",shortnames:[":woman_fairy_medium_dark_skin_tone:"],category:"people"},":woman_fairy_tone5:":{uc_base:"1f9da-1f3ff-2640",uc_full:"1f9da-1f3ff-200d-2640-fe0f",shortnames:[":woman_fairy_dark_skin_tone:"],category:"people"},":woman_frowning_tone1:":{uc_base:"1f64d-1f3fb-2640",uc_full:"1f64d-1f3fb-200d-2640-fe0f",shortnames:[":woman_frowning_light_skin_tone:"],category:"people"},":woman_frowning_tone2:":{uc_base:"1f64d-1f3fc-2640",uc_full:"1f64d-1f3fc-200d-2640-fe0f",shortnames:[":woman_frowning_medium_light_skin_tone:"],category:"people"},":woman_frowning_tone3:":{uc_base:"1f64d-1f3fd-2640",uc_full:"1f64d-1f3fd-200d-2640-fe0f",shortnames:[":woman_frowning_medium_skin_tone:"],category:"people"},":woman_frowning_tone4:":{uc_base:"1f64d-1f3fe-2640",uc_full:"1f64d-1f3fe-200d-2640-fe0f",shortnames:[":woman_frowning_medium_dark_skin_tone:"],category:"people"},":woman_frowning_tone5:":{uc_base:"1f64d-1f3ff-2640",uc_full:"1f64d-1f3ff-200d-2640-fe0f",shortnames:[":woman_frowning_dark_skin_tone:"],category:"people"},":woman_gesturing_no_tone1:":{uc_base:"1f645-1f3fb-2640",uc_full:"1f645-1f3fb-200d-2640-fe0f",shortnames:[":woman_gesturing_no_light_skin_tone:"],category:"people"},":woman_gesturing_no_tone2:":{uc_base:"1f645-1f3fc-2640",uc_full:"1f645-1f3fc-200d-2640-fe0f",shortnames:[":woman_gesturing_no_medium_light_skin_tone:"],category:"people"},":woman_gesturing_no_tone3:":{uc_base:"1f645-1f3fd-2640",uc_full:"1f645-1f3fd-200d-2640-fe0f",shortnames:[":woman_gesturing_no_medium_skin_tone:"],category:"people"},":woman_gesturing_no_tone4:":{uc_base:"1f645-1f3fe-2640",uc_full:"1f645-1f3fe-200d-2640-fe0f",shortnames:[":woman_gesturing_no_medium_dark_skin_tone:"],category:"people"},":woman_gesturing_no_tone5:":{uc_base:"1f645-1f3ff-2640",uc_full:"1f645-1f3ff-200d-2640-fe0f",shortnames:[":woman_gesturing_no_dark_skin_tone:"],category:"people"},":woman_gesturing_ok_tone1:":{uc_base:"1f646-1f3fb-2640",uc_full:"1f646-1f3fb-200d-2640-fe0f",shortnames:[":woman_gesturing_ok_light_skin_tone:"],category:"people"},":woman_gesturing_ok_tone2:":{uc_base:"1f646-1f3fc-2640",uc_full:"1f646-1f3fc-200d-2640-fe0f",shortnames:[":woman_gesturing_ok_medium_light_skin_tone:"],category:"people"},":woman_gesturing_ok_tone3:":{uc_base:"1f646-1f3fd-2640",uc_full:"1f646-1f3fd-200d-2640-fe0f",shortnames:[":woman_gesturing_ok_medium_skin_tone:"],category:"people"},":woman_gesturing_ok_tone4:":{uc_base:"1f646-1f3fe-2640",uc_full:"1f646-1f3fe-200d-2640-fe0f",shortnames:[":woman_gesturing_ok_medium_dark_skin_tone:"],category:"people"},":woman_gesturing_ok_tone5:":{uc_base:"1f646-1f3ff-2640",uc_full:"1f646-1f3ff-200d-2640-fe0f",shortnames:[":woman_gesturing_ok_dark_skin_tone:"],category:"people"},":woman_getting_face_massage_tone1:":{uc_base:"1f486-1f3fb-2640",uc_full:"1f486-1f3fb-200d-2640-fe0f",shortnames:[":woman_getting_face_massage_light_skin_tone:"],category:"people"},":woman_getting_face_massage_tone2:":{uc_base:"1f486-1f3fc-2640",uc_full:"1f486-1f3fc-200d-2640-fe0f",shortnames:[":woman_getting_face_massage_medium_light_skin_tone:"],category:"people"},":woman_getting_face_massage_tone3:":{uc_base:"1f486-1f3fd-2640",uc_full:"1f486-1f3fd-200d-2640-fe0f",shortnames:[":woman_getting_face_massage_medium_skin_tone:"],category:"people"},":woman_getting_face_massage_tone4:":{uc_base:"1f486-1f3fe-2640",uc_full:"1f486-1f3fe-200d-2640-fe0f",shortnames:[":woman_getting_face_massage_medium_dark_skin_tone:"],category:"people"},":woman_getting_face_massage_tone5:":{uc_base:"1f486-1f3ff-2640",uc_full:"1f486-1f3ff-200d-2640-fe0f",shortnames:[":woman_getting_face_massage_dark_skin_tone:"],category:"people"},":woman_getting_haircut_tone1:":{uc_base:"1f487-1f3fb-2640",uc_full:"1f487-1f3fb-200d-2640-fe0f",shortnames:[":woman_getting_haircut_light_skin_tone:"],category:"people"},":woman_getting_haircut_tone2:":{uc_base:"1f487-1f3fc-2640",uc_full:"1f487-1f3fc-200d-2640-fe0f",shortnames:[":woman_getting_haircut_medium_light_skin_tone:"],category:"people"},":woman_getting_haircut_tone3:":{uc_base:"1f487-1f3fd-2640",uc_full:"1f487-1f3fd-200d-2640-fe0f",shortnames:[":woman_getting_haircut_medium_skin_tone:"],category:"people"},":woman_getting_haircut_tone4:":{uc_base:"1f487-1f3fe-2640",uc_full:"1f487-1f3fe-200d-2640-fe0f",shortnames:[":woman_getting_haircut_medium_dark_skin_tone:"],category:"people"},":woman_getting_haircut_tone5:":{uc_base:"1f487-1f3ff-2640",uc_full:"1f487-1f3ff-200d-2640-fe0f",shortnames:[":woman_getting_haircut_dark_skin_tone:"],category:"people"},":woman_golfing_tone1:":{uc_base:"1f3cc-1f3fb-2640",uc_full:"1f3cc-1f3fb-200d-2640-fe0f",shortnames:[":woman_golfing_light_skin_tone:"],
category:"activity"},":woman_golfing_tone2:":{uc_base:"1f3cc-1f3fc-2640",uc_full:"1f3cc-1f3fc-200d-2640-fe0f",shortnames:[":woman_golfing_medium_light_skin_tone:"],category:"activity"},":woman_golfing_tone3:":{uc_base:"1f3cc-1f3fd-2640",uc_full:"1f3cc-1f3fd-200d-2640-fe0f",shortnames:[":woman_golfing_medium_skin_tone:"],category:"activity"},":woman_golfing_tone4:":{uc_base:"1f3cc-1f3fe-2640",uc_full:"1f3cc-1f3fe-200d-2640-fe0f",shortnames:[":woman_golfing_medium_dark_skin_tone:"],category:"activity"},":woman_golfing_tone5:":{uc_base:"1f3cc-1f3ff-2640",uc_full:"1f3cc-1f3ff-200d-2640-fe0f",shortnames:[":woman_golfing_dark_skin_tone:"],category:"activity"},":woman_guard_tone1:":{uc_base:"1f482-1f3fb-2640",uc_full:"1f482-1f3fb-200d-2640-fe0f",shortnames:[":woman_guard_light_skin_tone:"],category:"people"},":woman_guard_tone2:":{uc_base:"1f482-1f3fc-2640",uc_full:"1f482-1f3fc-200d-2640-fe0f",shortnames:[":woman_guard_medium_light_skin_tone:"],category:"people"},":woman_guard_tone3:":{uc_base:"1f482-1f3fd-2640",uc_full:"1f482-1f3fd-200d-2640-fe0f",shortnames:[":woman_guard_medium_skin_tone:"],category:"people"},":woman_guard_tone4:":{uc_base:"1f482-1f3fe-2640",uc_full:"1f482-1f3fe-200d-2640-fe0f",shortnames:[":woman_guard_medium_dark_skin_tone:"],category:"people"},":woman_guard_tone5:":{uc_base:"1f482-1f3ff-2640",uc_full:"1f482-1f3ff-200d-2640-fe0f",shortnames:[":woman_guard_dark_skin_tone:"],category:"people"},":woman_health_worker_tone1:":{uc_base:"1f469-1f3fb-2695",uc_full:"1f469-1f3fb-200d-2695-fe0f",shortnames:[":woman_health_worker_light_skin_tone:"],category:"people"},":woman_health_worker_tone2:":{uc_base:"1f469-1f3fc-2695",uc_full:"1f469-1f3fc-200d-2695-fe0f",shortnames:[":woman_health_worker_medium_light_skin_tone:"],category:"people"},":woman_health_worker_tone3:":{uc_base:"1f469-1f3fd-2695",uc_full:"1f469-1f3fd-200d-2695-fe0f",shortnames:[":woman_health_worker_medium_skin_tone:"],category:"people"},":woman_health_worker_tone4:":{uc_base:"1f469-1f3fe-2695",uc_full:"1f469-1f3fe-200d-2695-fe0f",shortnames:[":woman_health_worker_medium_dark_skin_tone:"],category:"people"},":woman_health_worker_tone5:":{uc_base:"1f469-1f3ff-2695",uc_full:"1f469-1f3ff-200d-2695-fe0f",shortnames:[":woman_health_worker_dark_skin_tone:"],category:"people"},":woman_in_lotus_position_tone1:":{uc_base:"1f9d8-1f3fb-2640",uc_full:"1f9d8-1f3fb-200d-2640-fe0f",shortnames:[":woman_in_lotus_position_light_skin_tone:"],category:"activity"},":woman_in_lotus_position_tone2:":{uc_base:"1f9d8-1f3fc-2640",uc_full:"1f9d8-1f3fc-200d-2640-fe0f",shortnames:[":woman_in_lotus_position_medium_light_skin_tone:"],category:"activity"},":woman_in_lotus_position_tone3:":{uc_base:"1f9d8-1f3fd-2640",uc_full:"1f9d8-1f3fd-200d-2640-fe0f",shortnames:[":woman_in_lotus_position_medium_skin_tone:"],category:"activity"},":woman_in_lotus_position_tone4:":{uc_base:"1f9d8-1f3fe-2640",uc_full:"1f9d8-1f3fe-200d-2640-fe0f",shortnames:[":woman_in_lotus_position_medium_dark_skin_tone:"],category:"activity"},":woman_in_lotus_position_tone5:":{uc_base:"1f9d8-1f3ff-2640",uc_full:"1f9d8-1f3ff-200d-2640-fe0f",shortnames:[":woman_in_lotus_position_dark_skin_tone:"],category:"activity"},":woman_in_steamy_room_tone1:":{uc_base:"1f9d6-1f3fb-2640",uc_full:"1f9d6-1f3fb-200d-2640-fe0f",shortnames:[":woman_in_steamy_room_light_skin_tone:"],category:"people"},":woman_in_steamy_room_tone2:":{uc_base:"1f9d6-1f3fc-2640",uc_full:"1f9d6-1f3fc-200d-2640-fe0f",shortnames:[":woman_in_steamy_room_medium_light_skin_tone:"],category:"people"},":woman_in_steamy_room_tone3:":{uc_base:"1f9d6-1f3fd-2640",uc_full:"1f9d6-1f3fd-200d-2640-fe0f",shortnames:[":woman_in_steamy_room_medium_skin_tone:"],category:"people"},":woman_in_steamy_room_tone4:":{uc_base:"1f9d6-1f3fe-2640",uc_full:"1f9d6-1f3fe-200d-2640-fe0f",shortnames:[":woman_in_steamy_room_medium_dark_skin_tone:"],category:"people"},":woman_in_steamy_room_tone5:":{uc_base:"1f9d6-1f3ff-2640",uc_full:"1f9d6-1f3ff-200d-2640-fe0f",shortnames:[":woman_in_steamy_room_dark_skin_tone:"],category:"people"},":woman_in_tuxedo_tone1:":{uc_base:"1f935-1f3fb-2640",uc_full:"1f935-1f3fb-200d-2640-fe0f",shortnames:[":woman_in_tuxedo_light_skin_tone:"],category:"people"},":woman_in_tuxedo_tone2:":{uc_base:"1f935-1f3fc-2640",uc_full:"1f935-1f3fc-200d-2640-fe0f",shortnames:[":woman_in_tuxedo_medium_light_skin_tone:"],category:"people"},":woman_in_tuxedo_tone3:":{uc_base:"1f935-1f3fd-2640",uc_full:"1f935-1f3fd-200d-2640-fe0f",shortnames:[":woman_in_tuxedo_medium_skin_tone:"],category:"people"},":woman_in_tuxedo_tone4:":{uc_base:"1f935-1f3fe-2640",uc_full:"1f935-1f3fe-200d-2640-fe0f",shortnames:[":woman_in_tuxedo_medium_dark_skin_tone:"],category:"people"},":woman_in_tuxedo_tone5:":{uc_base:"1f935-1f3ff-2640",uc_full:"1f935-1f3ff-200d-2640-fe0f",shortnames:[":woman_in_tuxedo_dark_skin_tone:"],category:"people"},":woman_judge_tone1:":{uc_base:"1f469-1f3fb-2696",uc_full:"1f469-1f3fb-200d-2696-fe0f",shortnames:[":woman_judge_light_skin_tone:"],category:"people"},":woman_judge_tone2:":{uc_base:"1f469-1f3fc-2696",uc_full:"1f469-1f3fc-200d-2696-fe0f",shortnames:[":woman_judge_medium_light_skin_tone:"],category:"people"},":woman_judge_tone3:":{uc_base:"1f469-1f3fd-2696",uc_full:"1f469-1f3fd-200d-2696-fe0f",shortnames:[":woman_judge_medium_skin_tone:"],category:"people"},":woman_judge_tone4:":{uc_base:"1f469-1f3fe-2696",uc_full:"1f469-1f3fe-200d-2696-fe0f",shortnames:[":woman_judge_medium_dark_skin_tone:"],category:"people"},":woman_judge_tone5:":{uc_base:"1f469-1f3ff-2696",uc_full:"1f469-1f3ff-200d-2696-fe0f",shortnames:[":woman_judge_dark_skin_tone:"],category:"people"},":woman_juggling_tone1:":{uc_base:"1f939-1f3fb-2640",uc_full:"1f939-1f3fb-200d-2640-fe0f",shortnames:[":woman_juggling_light_skin_tone:"],category:"activity"},":woman_juggling_tone2:":{uc_base:"1f939-1f3fc-2640",uc_full:"1f939-1f3fc-200d-2640-fe0f",shortnames:[":woman_juggling_medium_light_skin_tone:"],category:"activity"},":woman_juggling_tone3:":{uc_base:"1f939-1f3fd-2640",uc_full:"1f939-1f3fd-200d-2640-fe0f",shortnames:[":woman_juggling_medium_skin_tone:"],category:"activity"},":woman_juggling_tone4:":{uc_base:"1f939-1f3fe-2640",uc_full:"1f939-1f3fe-200d-2640-fe0f",shortnames:[":woman_juggling_medium_dark_skin_tone:"],category:"activity"},":woman_juggling_tone5:":{uc_base:"1f939-1f3ff-2640",uc_full:"1f939-1f3ff-200d-2640-fe0f",shortnames:[":woman_juggling_dark_skin_tone:"],category:"activity"},":woman_kneeling_tone1:":{uc_base:"1f9ce-1f3fb-2640",uc_full:"1f9ce-1f3fb-200d-2640-fe0f",shortnames:[":woman_kneeling_light_skin_tone:"],category:"people"},":woman_kneeling_tone2:":{uc_base:"1f9ce-1f3fc-2640",uc_full:"1f9ce-1f3fc-200d-2640-fe0f",shortnames:[":woman_kneeling_medium_light_skin_tone:"],category:"people"},":woman_kneeling_tone3:":{uc_base:"1f9ce-1f3fd-2640",uc_full:"1f9ce-1f3fd-200d-2640-fe0f",shortnames:[":woman_kneeling_medium_skin_tone:"],category:"people"},":woman_kneeling_tone4:":{uc_base:"1f9ce-1f3fe-2640",uc_full:"1f9ce-1f3fe-200d-2640-fe0f",shortnames:[":woman_kneeling_medium_dark_skin_tone:"],category:"people"},":woman_kneeling_tone5:":{uc_base:"1f9ce-1f3ff-2640",uc_full:"1f9ce-1f3ff-200d-2640-fe0f",shortnames:[":woman_kneeling_dark_skin_tone:"],category:"people"},":woman_lifting_weights_tone1:":{uc_base:"1f3cb-1f3fb-2640",uc_full:"1f3cb-1f3fb-200d-2640-fe0f",shortnames:[":woman_lifting_weights_light_skin_tone:"],category:"activity"},":woman_lifting_weights_tone2:":{uc_base:"1f3cb-1f3fc-2640",uc_full:"1f3cb-1f3fc-200d-2640-fe0f",shortnames:[":woman_lifting_weights_medium_light_skin_tone:"],category:"activity"},":woman_lifting_weights_tone3:":{uc_base:"1f3cb-1f3fd-2640",uc_full:"1f3cb-1f3fd-200d-2640-fe0f",shortnames:[":woman_lifting_weights_medium_skin_tone:"],category:"activity"},":woman_lifting_weights_tone4:":{uc_base:"1f3cb-1f3fe-2640",uc_full:"1f3cb-1f3fe-200d-2640-fe0f",shortnames:[":woman_lifting_weights_medium_dark_skin_tone:"],category:"activity"},":woman_lifting_weights_tone5:":{uc_base:"1f3cb-1f3ff-2640",uc_full:"1f3cb-1f3ff-200d-2640-fe0f",shortnames:[":woman_lifting_weights_dark_skin_tone:"],category:"activity"},":woman_mage_tone1:":{uc_base:"1f9d9-1f3fb-2640",uc_full:"1f9d9-1f3fb-200d-2640-fe0f",shortnames:[":woman_mage_light_skin_tone:"],category:"people"},":woman_mage_tone2:":{uc_base:"1f9d9-1f3fc-2640",uc_full:"1f9d9-1f3fc-200d-2640-fe0f",shortnames:[":woman_mage_medium_light_skin_tone:"],category:"people"},":woman_mage_tone3:":{uc_base:"1f9d9-1f3fd-2640",uc_full:"1f9d9-1f3fd-200d-2640-fe0f",shortnames:[":woman_mage_medium_skin_tone:"],category:"people"},":woman_mage_tone4:":{uc_base:"1f9d9-1f3fe-2640",uc_full:"1f9d9-1f3fe-200d-2640-fe0f",shortnames:[":woman_mage_medium_dark_skin_tone:"],category:"people"},":woman_mage_tone5:":{uc_base:"1f9d9-1f3ff-2640",uc_full:"1f9d9-1f3ff-200d-2640-fe0f",shortnames:[":woman_mage_dark_skin_tone:"],category:"people"},":woman_mountain_biking_tone1:":{uc_base:"1f6b5-1f3fb-2640",uc_full:"1f6b5-1f3fb-200d-2640-fe0f",shortnames:[":woman_mountain_biking_light_skin_tone:"],category:"activity"},":woman_mountain_biking_tone2:":{uc_base:"1f6b5-1f3fc-2640",uc_full:"1f6b5-1f3fc-200d-2640-fe0f",shortnames:[":woman_mountain_biking_medium_light_skin_tone:"],category:"activity"},":woman_mountain_biking_tone3:":{uc_base:"1f6b5-1f3fd-2640",uc_full:"1f6b5-1f3fd-200d-2640-fe0f",shortnames:[":woman_mountain_biking_medium_skin_tone:"],category:"activity"},":woman_mountain_biking_tone4:":{uc_base:"1f6b5-1f3fe-2640",uc_full:"1f6b5-1f3fe-200d-2640-fe0f",shortnames:[":woman_mountain_biking_medium_dark_skin_tone:"],category:"activity"},":woman_mountain_biking_tone5:":{uc_base:"1f6b5-1f3ff-2640",uc_full:"1f6b5-1f3ff-200d-2640-fe0f",shortnames:[":woman_mountain_biking_dark_skin_tone:"],category:"activity"},":woman_pilot_tone1:":{uc_base:"1f469-1f3fb-2708",uc_full:"1f469-1f3fb-200d-2708-fe0f",shortnames:[":woman_pilot_light_skin_tone:"],category:"people"},":woman_pilot_tone2:":{uc_base:"1f469-1f3fc-2708",uc_full:"1f469-1f3fc-200d-2708-fe0f",shortnames:[":woman_pilot_medium_light_skin_tone:"],category:"people"},":woman_pilot_tone3:":{uc_base:"1f469-1f3fd-2708",uc_full:"1f469-1f3fd-200d-2708-fe0f",shortnames:[":woman_pilot_medium_skin_tone:"],category:"people"},":woman_pilot_tone4:":{uc_base:"1f469-1f3fe-2708",uc_full:"1f469-1f3fe-200d-2708-fe0f",shortnames:[":woman_pilot_medium_dark_skin_tone:"],category:"people"},":woman_pilot_tone5:":{uc_base:"1f469-1f3ff-2708",uc_full:"1f469-1f3ff-200d-2708-fe0f",shortnames:[":woman_pilot_dark_skin_tone:"],category:"people"},":woman_playing_handball_tone1:":{uc_base:"1f93e-1f3fb-2640",uc_full:"1f93e-1f3fb-200d-2640-fe0f",shortnames:[":woman_playing_handball_light_skin_tone:"],category:"activity"},":woman_playing_handball_tone2:":{uc_base:"1f93e-1f3fc-2640",uc_full:"1f93e-1f3fc-200d-2640-fe0f",shortnames:[":woman_playing_handball_medium_light_skin_tone:"],category:"activity"},":woman_playing_handball_tone3:":{uc_base:"1f93e-1f3fd-2640",uc_full:"1f93e-1f3fd-200d-2640-fe0f",shortnames:[":woman_playing_handball_medium_skin_tone:"],category:"activity"},":woman_playing_handball_tone4:":{uc_base:"1f93e-1f3fe-2640",uc_full:"1f93e-1f3fe-200d-2640-fe0f",shortnames:[":woman_playing_handball_medium_dark_skin_tone:"],category:"activity"},":woman_playing_handball_tone5:":{uc_base:"1f93e-1f3ff-2640",uc_full:"1f93e-1f3ff-200d-2640-fe0f",shortnames:[":woman_playing_handball_dark_skin_tone:"],category:"activity"},":woman_playing_water_polo_tone1:":{uc_base:"1f93d-1f3fb-2640",uc_full:"1f93d-1f3fb-200d-2640-fe0f",shortnames:[":woman_playing_water_polo_light_skin_tone:"],category:"activity"},":woman_playing_water_polo_tone2:":{uc_base:"1f93d-1f3fc-2640",uc_full:"1f93d-1f3fc-200d-2640-fe0f",shortnames:[":woman_playing_water_polo_medium_light_skin_tone:"],category:"activity"},":woman_playing_water_polo_tone3:":{uc_base:"1f93d-1f3fd-2640",uc_full:"1f93d-1f3fd-200d-2640-fe0f",shortnames:[":woman_playing_water_polo_medium_skin_tone:"],category:"activity"},":woman_playing_water_polo_tone4:":{uc_base:"1f93d-1f3fe-2640",uc_full:"1f93d-1f3fe-200d-2640-fe0f",shortnames:[":woman_playing_water_polo_medium_dark_skin_tone:"],category:"activity"},":woman_playing_water_polo_tone5:":{uc_base:"1f93d-1f3ff-2640",uc_full:"1f93d-1f3ff-200d-2640-fe0f",shortnames:[":woman_playing_water_polo_dark_skin_tone:"],category:"activity"},":woman_police_officer_tone1:":{uc_base:"1f46e-1f3fb-2640",uc_full:"1f46e-1f3fb-200d-2640-fe0f",shortnames:[":woman_police_officer_light_skin_tone:"],category:"people"},":woman_police_officer_tone2:":{uc_base:"1f46e-1f3fc-2640",uc_full:"1f46e-1f3fc-200d-2640-fe0f",shortnames:[":woman_police_officer_medium_light_skin_tone:"],category:"people"},":woman_police_officer_tone3:":{uc_base:"1f46e-1f3fd-2640",uc_full:"1f46e-1f3fd-200d-2640-fe0f",shortnames:[":woman_police_officer_medium_skin_tone:"],category:"people"},":woman_police_officer_tone4:":{uc_base:"1f46e-1f3fe-2640",uc_full:"1f46e-1f3fe-200d-2640-fe0f",shortnames:[":woman_police_officer_medium_dark_skin_tone:"],category:"people"},":woman_police_officer_tone5:":{uc_base:"1f46e-1f3ff-2640",uc_full:"1f46e-1f3ff-200d-2640-fe0f",shortnames:[":woman_police_officer_dark_skin_tone:"],category:"people"},":woman_pouting_tone1:":{uc_base:"1f64e-1f3fb-2640",uc_full:"1f64e-1f3fb-200d-2640-fe0f",shortnames:[":woman_pouting_light_skin_tone:"],category:"people"},":woman_pouting_tone2:":{uc_base:"1f64e-1f3fc-2640",uc_full:"1f64e-1f3fc-200d-2640-fe0f",shortnames:[":woman_pouting_medium_light_skin_tone:"],category:"people"},":woman_pouting_tone3:":{uc_base:"1f64e-1f3fd-2640",uc_full:"1f64e-1f3fd-200d-2640-fe0f",shortnames:[":woman_pouting_medium_skin_tone:"],category:"people"},":woman_pouting_tone4:":{uc_base:"1f64e-1f3fe-2640",uc_full:"1f64e-1f3fe-200d-2640-fe0f",shortnames:[":woman_pouting_medium_dark_skin_tone:"],category:"people"},":woman_pouting_tone5:":{uc_base:"1f64e-1f3ff-2640",uc_full:"1f64e-1f3ff-200d-2640-fe0f",shortnames:[":woman_pouting_dark_skin_tone:"],category:"people"},":woman_raising_hand_tone1:":{uc_base:"1f64b-1f3fb-2640",uc_full:"1f64b-1f3fb-200d-2640-fe0f",shortnames:[":woman_raising_hand_light_skin_tone:"],category:"people"},":woman_raising_hand_tone2:":{uc_base:"1f64b-1f3fc-2640",uc_full:"1f64b-1f3fc-200d-2640-fe0f",shortnames:[":woman_raising_hand_medium_light_skin_tone:"],category:"people"},":woman_raising_hand_tone3:":{uc_base:"1f64b-1f3fd-2640",uc_full:"1f64b-1f3fd-200d-2640-fe0f",shortnames:[":woman_raising_hand_medium_skin_tone:"],category:"people"},":woman_raising_hand_tone4:":{uc_base:"1f64b-1f3fe-2640",uc_full:"1f64b-1f3fe-200d-2640-fe0f",shortnames:[":woman_raising_hand_medium_dark_skin_tone:"],category:"people"},":woman_raising_hand_tone5:":{uc_base:"1f64b-1f3ff-2640",uc_full:"1f64b-1f3ff-200d-2640-fe0f",shortnames:[":woman_raising_hand_dark_skin_tone:"],category:"people"},":woman_rowing_boat_tone1:":{uc_base:"1f6a3-1f3fb-2640",uc_full:"1f6a3-1f3fb-200d-2640-fe0f",shortnames:[":woman_rowing_boat_light_skin_tone:"],category:"activity"},":woman_rowing_boat_tone2:":{uc_base:"1f6a3-1f3fc-2640",uc_full:"1f6a3-1f3fc-200d-2640-fe0f",shortnames:[":woman_rowing_boat_medium_light_skin_tone:"],category:"activity"},":woman_rowing_boat_tone3:":{uc_base:"1f6a3-1f3fd-2640",uc_full:"1f6a3-1f3fd-200d-2640-fe0f",shortnames:[":woman_rowing_boat_medium_skin_tone:"],category:"activity"},":woman_rowing_boat_tone4:":{uc_base:"1f6a3-1f3fe-2640",uc_full:"1f6a3-1f3fe-200d-2640-fe0f",shortnames:[":woman_rowing_boat_medium_dark_skin_tone:"],category:"activity"},":woman_rowing_boat_tone5:":{uc_base:"1f6a3-1f3ff-2640",uc_full:"1f6a3-1f3ff-200d-2640-fe0f",shortnames:[":woman_rowing_boat_dark_skin_tone:"],category:"activity"},":woman_running_tone1:":{uc_base:"1f3c3-1f3fb-2640",uc_full:"1f3c3-1f3fb-200d-2640-fe0f",shortnames:[":woman_running_light_skin_tone:"],category:"people"},":woman_running_tone2:":{uc_base:"1f3c3-1f3fc-2640",uc_full:"1f3c3-1f3fc-200d-2640-fe0f",shortnames:[":woman_running_medium_light_skin_tone:"],category:"people"},":woman_running_tone3:":{uc_base:"1f3c3-1f3fd-2640",uc_full:"1f3c3-1f3fd-200d-2640-fe0f",shortnames:[":woman_running_medium_skin_tone:"],category:"people"},":woman_running_tone4:":{uc_base:"1f3c3-1f3fe-2640",uc_full:"1f3c3-1f3fe-200d-2640-fe0f",shortnames:[":woman_running_medium_dark_skin_tone:"],category:"people"},":woman_running_tone5:":{uc_base:"1f3c3-1f3ff-2640",uc_full:"1f3c3-1f3ff-200d-2640-fe0f",shortnames:[":woman_running_dark_skin_tone:"],category:"people"},":woman_shrugging_tone1:":{uc_base:"1f937-1f3fb-2640",uc_full:"1f937-1f3fb-200d-2640-fe0f",shortnames:[":woman_shrugging_light_skin_tone:"],category:"people"},":woman_shrugging_tone2:":{uc_base:"1f937-1f3fc-2640",uc_full:"1f937-1f3fc-200d-2640-fe0f",shortnames:[":woman_shrugging_medium_light_skin_tone:"],category:"people"},":woman_shrugging_tone3:":{uc_base:"1f937-1f3fd-2640",uc_full:"1f937-1f3fd-200d-2640-fe0f",shortnames:[":woman_shrugging_medium_skin_tone:"],category:"people"},":woman_shrugging_tone4:":{uc_base:"1f937-1f3fe-2640",uc_full:"1f937-1f3fe-200d-2640-fe0f",shortnames:[":woman_shrugging_medium_dark_skin_tone:"],category:"people"},":woman_shrugging_tone5:":{uc_base:"1f937-1f3ff-2640",uc_full:"1f937-1f3ff-200d-2640-fe0f",shortnames:[":woman_shrugging_dark_skin_tone:"],category:"people"},":woman_standing_tone1:":{uc_base:"1f9cd-1f3fb-2640",uc_full:"1f9cd-1f3fb-200d-2640-fe0f",shortnames:[":woman_standing_light_skin_tone:"],category:"people"},":woman_standing_tone2:":{uc_base:"1f9cd-1f3fc-2640",uc_full:"1f9cd-1f3fc-200d-2640-fe0f",shortnames:[":woman_standing_medium_light_skin_tone:"],category:"people"},":woman_standing_tone3:":{uc_base:"1f9cd-1f3fd-2640",uc_full:"1f9cd-1f3fd-200d-2640-fe0f",shortnames:[":woman_standing_medium_skin_tone:"],category:"people"},":woman_standing_tone4:":{uc_base:"1f9cd-1f3fe-2640",uc_full:"1f9cd-1f3fe-200d-2640-fe0f",shortnames:[":woman_standing_medium_dark_skin_tone:"],category:"people"},":woman_standing_tone5:":{uc_base:"1f9cd-1f3ff-2640",uc_full:"1f9cd-1f3ff-200d-2640-fe0f",shortnames:[":woman_standing_dark_skin_tone:"],category:"people"},":woman_superhero_tone1:":{uc_base:"1f9b8-1f3fb-2640",uc_full:"1f9b8-1f3fb-200d-2640-fe0f",shortnames:[":woman_superhero_light_skin_tone:"],category:"people"},":woman_superhero_tone2:":{uc_base:"1f9b8-1f3fc-2640",uc_full:"1f9b8-1f3fc-200d-2640-fe0f",shortnames:[":woman_superhero_medium_light_skin_tone:"],category:"people"},":woman_superhero_tone3:":{uc_base:"1f9b8-1f3fd-2640",uc_full:"1f9b8-1f3fd-200d-2640-fe0f",shortnames:[":woman_superhero_medium_skin_tone:"],category:"people"},":woman_superhero_tone4:":{uc_base:"1f9b8-1f3fe-2640",uc_full:"1f9b8-1f3fe-200d-2640-fe0f",shortnames:[":woman_superhero_medium_dark_skin_tone:"],category:"people"},":woman_superhero_tone5:":{uc_base:"1f9b8-1f3ff-2640",uc_full:"1f9b8-1f3ff-200d-2640-fe0f",shortnames:[":woman_superhero_dark_skin_tone:"],category:"people"},":woman_supervillain_tone1:":{uc_base:"1f9b9-1f3fb-2640",uc_full:"1f9b9-1f3fb-200d-2640-fe0f",shortnames:[":woman_supervillain_light_skin_tone:"],category:"people"},":woman_supervillain_tone2:":{uc_base:"1f9b9-1f3fc-2640",uc_full:"1f9b9-1f3fc-200d-2640-fe0f",shortnames:[":woman_supervillain_medium_light_skin_tone:"],category:"people"},":woman_supervillain_tone3:":{uc_base:"1f9b9-1f3fd-2640",uc_full:"1f9b9-1f3fd-200d-2640-fe0f",shortnames:[":woman_supervillain_medium_skin_tone:"],category:"people"},":woman_supervillain_tone4:":{uc_base:"1f9b9-1f3fe-2640",uc_full:"1f9b9-1f3fe-200d-2640-fe0f",shortnames:[":woman_supervillain_medium_dark_skin_tone:"],category:"people"},":woman_supervillain_tone5:":{uc_base:"1f9b9-1f3ff-2640",uc_full:"1f9b9-1f3ff-200d-2640-fe0f",shortnames:[":woman_supervillain_dark_skin_tone:"],category:"people"},":woman_surfing_tone1:":{uc_base:"1f3c4-1f3fb-2640",uc_full:"1f3c4-1f3fb-200d-2640-fe0f",shortnames:[":woman_surfing_light_skin_tone:"],category:"activity"},":woman_surfing_tone2:":{uc_base:"1f3c4-1f3fc-2640",uc_full:"1f3c4-1f3fc-200d-2640-fe0f",shortnames:[":woman_surfing_medium_light_skin_tone:"],category:"activity"},":woman_surfing_tone3:":{uc_base:"1f3c4-1f3fd-2640",uc_full:"1f3c4-1f3fd-200d-2640-fe0f",shortnames:[":woman_surfing_medium_skin_tone:"],category:"activity"},":woman_surfing_tone4:":{uc_base:"1f3c4-1f3fe-2640",uc_full:"1f3c4-1f3fe-200d-2640-fe0f",shortnames:[":woman_surfing_medium_dark_skin_tone:"],category:"activity"},":woman_surfing_tone5:":{uc_base:"1f3c4-1f3ff-2640",uc_full:"1f3c4-1f3ff-200d-2640-fe0f",shortnames:[":woman_surfing_dark_skin_tone:"],category:"activity"},":woman_swimming_tone1:":{uc_base:"1f3ca-1f3fb-2640",uc_full:"1f3ca-1f3fb-200d-2640-fe0f",shortnames:[":woman_swimming_light_skin_tone:"],category:"activity"},":woman_swimming_tone2:":{uc_base:"1f3ca-1f3fc-2640",uc_full:"1f3ca-1f3fc-200d-2640-fe0f",shortnames:[":woman_swimming_medium_light_skin_tone:"],category:"activity"},":woman_swimming_tone3:":{uc_base:"1f3ca-1f3fd-2640",uc_full:"1f3ca-1f3fd-200d-2640-fe0f",shortnames:[":woman_swimming_medium_skin_tone:"],category:"activity"},":woman_swimming_tone4:":{uc_base:"1f3ca-1f3fe-2640",uc_full:"1f3ca-1f3fe-200d-2640-fe0f",shortnames:[":woman_swimming_medium_dark_skin_tone:"],category:"activity"},":woman_swimming_tone5:":{uc_base:"1f3ca-1f3ff-2640",uc_full:"1f3ca-1f3ff-200d-2640-fe0f",shortnames:[":woman_swimming_dark_skin_tone:"],category:"activity"},":woman_tipping_hand_tone1:":{uc_base:"1f481-1f3fb-2640",uc_full:"1f481-1f3fb-200d-2640-fe0f",shortnames:[":woman_tipping_hand_light_skin_tone:"],category:"people"},":woman_tipping_hand_tone2:":{uc_base:"1f481-1f3fc-2640",uc_full:"1f481-1f3fc-200d-2640-fe0f",shortnames:[":woman_tipping_hand_medium_light_skin_tone:"],category:"people"},":woman_tipping_hand_tone3:":{uc_base:"1f481-1f3fd-2640",uc_full:"1f481-1f3fd-200d-2640-fe0f",shortnames:[":woman_tipping_hand_medium_skin_tone:"],category:"people"},":woman_tipping_hand_tone4:":{uc_base:"1f481-1f3fe-2640",uc_full:"1f481-1f3fe-200d-2640-fe0f",shortnames:[":woman_tipping_hand_medium_dark_skin_tone:"],category:"people"},":woman_tipping_hand_tone5:":{uc_base:"1f481-1f3ff-2640",uc_full:"1f481-1f3ff-200d-2640-fe0f",shortnames:[":woman_tipping_hand_dark_skin_tone:"],category:"people"},":woman_vampire_tone1:":{uc_base:"1f9db-1f3fb-2640",uc_full:"1f9db-1f3fb-200d-2640-fe0f",shortnames:[":woman_vampire_light_skin_tone:"],category:"people"},":woman_vampire_tone2:":{uc_base:"1f9db-1f3fc-2640",uc_full:"1f9db-1f3fc-200d-2640-fe0f",shortnames:[":woman_vampire_medium_light_skin_tone:"],category:"people"},":woman_vampire_tone3:":{uc_base:"1f9db-1f3fd-2640",uc_full:"1f9db-1f3fd-200d-2640-fe0f",shortnames:[":woman_vampire_medium_skin_tone:"],category:"people"},":woman_vampire_tone4:":{uc_base:"1f9db-1f3fe-2640",uc_full:"1f9db-1f3fe-200d-2640-fe0f",shortnames:[":woman_vampire_medium_dark_skin_tone:"],category:"people"},":woman_vampire_tone5:":{uc_base:"1f9db-1f3ff-2640",uc_full:"1f9db-1f3ff-200d-2640-fe0f",shortnames:[":woman_vampire_dark_skin_tone:"],category:"people"},":woman_walking_tone1:":{uc_base:"1f6b6-1f3fb-2640",uc_full:"1f6b6-1f3fb-200d-2640-fe0f",shortnames:[":woman_walking_light_skin_tone:"],category:"people"},":woman_walking_tone2:":{uc_base:"1f6b6-1f3fc-2640",uc_full:"1f6b6-1f3fc-200d-2640-fe0f",shortnames:[":woman_walking_medium_light_skin_tone:"],category:"people"},":woman_walking_tone3:":{uc_base:"1f6b6-1f3fd-2640",uc_full:"1f6b6-1f3fd-200d-2640-fe0f",shortnames:[":woman_walking_medium_skin_tone:"],category:"people"},":woman_walking_tone4:":{uc_base:"1f6b6-1f3fe-2640",uc_full:"1f6b6-1f3fe-200d-2640-fe0f",shortnames:[":woman_walking_medium_dark_skin_tone:"],category:"people"},":woman_walking_tone5:":{uc_base:"1f6b6-1f3ff-2640",uc_full:"1f6b6-1f3ff-200d-2640-fe0f",shortnames:[":woman_walking_dark_skin_tone:"],category:"people"},":woman_wearing_turban_tone1:":{uc_base:"1f473-1f3fb-2640",uc_full:"1f473-1f3fb-200d-2640-fe0f",shortnames:[":woman_wearing_turban_light_skin_tone:"],category:"people"},":woman_wearing_turban_tone2:":{uc_base:"1f473-1f3fc-2640",uc_full:"1f473-1f3fc-200d-2640-fe0f",shortnames:[":woman_wearing_turban_medium_light_skin_tone:"],category:"people"},":woman_wearing_turban_tone3:":{uc_base:"1f473-1f3fd-2640",uc_full:"1f473-1f3fd-200d-2640-fe0f",shortnames:[":woman_wearing_turban_medium_skin_tone:"],category:"people"},":woman_wearing_turban_tone4:":{uc_base:"1f473-1f3fe-2640",uc_full:"1f473-1f3fe-200d-2640-fe0f",shortnames:[":woman_wearing_turban_medium_dark_skin_tone:"],category:"people"},":woman_wearing_turban_tone5:":{uc_base:"1f473-1f3ff-2640",uc_full:"1f473-1f3ff-200d-2640-fe0f",shortnames:[":woman_wearing_turban_dark_skin_tone:"],category:"people"},":woman_with_veil_tone1:":{uc_base:"1f470-1f3fb-2640",uc_full:"1f470-1f3fb-200d-2640-fe0f",shortnames:[":woman_with_veil_light_skin_tone:"],category:"people"},":woman_with_veil_tone2:":{uc_base:"1f470-1f3fc-2640",uc_full:"1f470-1f3fc-200d-2640-fe0f",shortnames:[":woman_with_veil_medium_light_skin_tone:"],category:"people"},":woman_with_veil_tone3:":{uc_base:"1f470-1f3fd-2640",uc_full:"1f470-1f3fd-200d-2640-fe0f",shortnames:[":woman_with_veil_medium_skin_tone:"],category:"people"},":woman_with_veil_tone4:":{uc_base:"1f470-1f3fe-2640",uc_full:"1f470-1f3fe-200d-2640-fe0f",shortnames:[":woman_with_veil_medium_dark_skin_tone:"],category:"people"},":woman_with_veil_tone5:":{uc_base:"1f470-1f3ff-2640",uc_full:"1f470-1f3ff-200d-2640-fe0f",shortnames:[":woman_with_veil_dark_skin_tone:"],category:"people"},":man_bouncing_ball_tone1:":{uc_base:"26f9-1f3fb-2642",uc_full:"26f9-1f3fb-200d-2642-fe0f",shortnames:[":man_bouncing_ball_light_skin_tone:"],category:"activity"},":man_bouncing_ball_tone2:":{uc_base:"26f9-1f3fc-2642",uc_full:"26f9-1f3fc-200d-2642-fe0f",shortnames:[":man_bouncing_ball_medium_light_skin_tone:"],category:"activity"},":man_bouncing_ball_tone3:":{uc_base:"26f9-1f3fd-2642",uc_full:"26f9-1f3fd-200d-2642-fe0f",shortnames:[":man_bouncing_ball_medium_skin_tone:"],category:"activity"},":man_bouncing_ball_tone4:":{uc_base:"26f9-1f3fe-2642",uc_full:"26f9-1f3fe-200d-2642-fe0f",shortnames:[":man_bouncing_ball_medium_dark_skin_tone:"],category:"activity"},":man_bouncing_ball_tone5:":{uc_base:"26f9-1f3ff-2642",uc_full:"26f9-1f3ff-200d-2642-fe0f",shortnames:[":man_bouncing_ball_dark_skin_tone:"],category:"activity"},":woman_bouncing_ball_tone1:":{uc_base:"26f9-1f3fb-2640",uc_full:"26f9-1f3fb-200d-2640-fe0f",shortnames:[":woman_bouncing_ball_light_skin_tone:"],category:"activity"},":woman_bouncing_ball_tone2:":{uc_base:"26f9-1f3fc-2640",uc_full:"26f9-1f3fc-200d-2640-fe0f",shortnames:[":woman_bouncing_ball_medium_light_skin_tone:"],category:"activity"},":woman_bouncing_ball_tone3:":{uc_base:"26f9-1f3fd-2640",uc_full:"26f9-1f3fd-200d-2640-fe0f",shortnames:[":woman_bouncing_ball_medium_skin_tone:"],category:"activity"},":woman_bouncing_ball_tone4:":{uc_base:"26f9-1f3fe-2640",uc_full:"26f9-1f3fe-200d-2640-fe0f",shortnames:[":woman_bouncing_ball_medium_dark_skin_tone:"],category:"activity"},":woman_bouncing_ball_tone5:":{uc_base:"26f9-1f3ff-2640",uc_full:"26f9-1f3ff-200d-2640-fe0f",shortnames:[":woman_bouncing_ball_dark_skin_tone:"],category:"activity"},":adult_tone1:":{uc_base:"1f9d1-1f3fb",uc_full:"1f9d1-1f3fb",shortnames:[":adult_light_skin_tone:"],category:"people"},":adult_tone2:":{uc_base:"1f9d1-1f3fc",uc_full:"1f9d1-1f3fc",shortnames:[":adult_medium_light_skin_tone:"],category:"people"},":adult_tone3:":{uc_base:"1f9d1-1f3fd",uc_full:"1f9d1-1f3fd",shortnames:[":adult_medium_skin_tone:"],category:"people"},":adult_tone4:":{uc_base:"1f9d1-1f3fe",uc_full:"1f9d1-1f3fe",shortnames:[":adult_medium_dark_skin_tone:"],category:"people"},":adult_tone5:":{uc_base:"1f9d1-1f3ff",uc_full:"1f9d1-1f3ff",shortnames:[":adult_dark_skin_tone:"],category:"people"},":angel_tone1:":{uc_base:"1f47c-1f3fb",uc_full:"1f47c-1f3fb",shortnames:[],category:"people"},":angel_tone2:":{uc_base:"1f47c-1f3fc",uc_full:"1f47c-1f3fc",shortnames:[],category:"people"},":angel_tone3:":{uc_base:"1f47c-1f3fd",uc_full:"1f47c-1f3fd",shortnames:[],category:"people"},":angel_tone4:":{uc_base:"1f47c-1f3fe",uc_full:"1f47c-1f3fe",shortnames:[],category:"people"},":angel_tone5:":{uc_base:"1f47c-1f3ff",uc_full:"1f47c-1f3ff",shortnames:[],category:"people"},":artist:":{uc_base:"1f9d1-1f3a8",uc_full:"1f9d1-200d-1f3a8",shortnames:[],category:"people"},":astronaut:":{uc_base:"1f9d1-1f680",uc_full:"1f9d1-200d-1f680",shortnames:[],category:"people"},":baby_tone1:":{uc_base:"1f476-1f3fb",uc_full:"1f476-1f3fb",shortnames:[],category:"people"},":baby_tone2:":{uc_base:"1f476-1f3fc",uc_full:"1f476-1f3fc",shortnames:[],category:"people"},":baby_tone3:":{uc_base:"1f476-1f3fd",uc_full:"1f476-1f3fd",shortnames:[],category:"people"},":baby_tone4:":{uc_base:"1f476-1f3fe",uc_full:"1f476-1f3fe",shortnames:[],category:"people"},":baby_tone5:":{uc_base:"1f476-1f3ff",uc_full:"1f476-1f3ff",shortnames:[],category:"people"},":bath_tone1:":{uc_base:"1f6c0-1f3fb",uc_full:"1f6c0-1f3fb",shortnames:[],category:"objects"},":bath_tone2:":{uc_base:"1f6c0-1f3fc",uc_full:"1f6c0-1f3fc",shortnames:[],category:"objects"},":bath_tone3:":{uc_base:"1f6c0-1f3fd",uc_full:"1f6c0-1f3fd",shortnames:[],category:"objects"},":bath_tone4:":{uc_base:"1f6c0-1f3fe",uc_full:"1f6c0-1f3fe",shortnames:[],category:"objects"},":bath_tone5:":{uc_base:"1f6c0-1f3ff",uc_full:"1f6c0-1f3ff",shortnames:[],category:"objects"},":bearded_person_tone1:":{uc_base:"1f9d4-1f3fb",uc_full:"1f9d4-1f3fb",shortnames:[":bearded_person_light_skin_tone:"],category:"people"},":bearded_person_tone2:":{uc_base:"1f9d4-1f3fc",uc_full:"1f9d4-1f3fc",shortnames:[":bearded_person_medium_light_skin_tone:"],category:"people"},":bearded_person_tone3:":{uc_base:"1f9d4-1f3fd",uc_full:"1f9d4-1f3fd",shortnames:[":bearded_person_medium_skin_tone:"],category:"people"},":bearded_person_tone4:":{uc_base:"1f9d4-1f3fe",uc_full:"1f9d4-1f3fe",shortnames:[":bearded_person_medium_dark_skin_tone:"],category:"people"},":bearded_person_tone5:":{uc_base:"1f9d4-1f3ff",uc_full:"1f9d4-1f3ff",shortnames:[":bearded_person_dark_skin_tone:"],category:"people"},":blond_haired_person_tone1:":{uc_base:"1f471-1f3fb",uc_full:"1f471-1f3fb",shortnames:[":person_with_blond_hair_tone1:"],category:"people"},":blond_haired_person_tone2:":{uc_base:"1f471-1f3fc",uc_full:"1f471-1f3fc",shortnames:[":person_with_blond_hair_tone2:"],category:"people"},":blond_haired_person_tone3:":{uc_base:"1f471-1f3fd",uc_full:"1f471-1f3fd",shortnames:[":person_with_blond_hair_tone3:"],category:"people"},":blond_haired_person_tone4:":{uc_base:"1f471-1f3fe",uc_full:"1f471-1f3fe",shortnames:[":person_with_blond_hair_tone4:"],category:"people"},":blond_haired_person_tone5:":{uc_base:"1f471-1f3ff",uc_full:"1f471-1f3ff",shortnames:[":person_with_blond_hair_tone5:"],category:"people"},":boy_tone1:":{uc_base:"1f466-1f3fb",uc_full:"1f466-1f3fb",shortnames:[],category:"people"},":boy_tone2:":{uc_base:"1f466-1f3fc",uc_full:"1f466-1f3fc",shortnames:[],category:"people"},":boy_tone3:":{uc_base:"1f466-1f3fd",uc_full:"1f466-1f3fd",shortnames:[],category:"people"},":boy_tone4:":{uc_base:"1f466-1f3fe",uc_full:"1f466-1f3fe",shortnames:[],category:"people"},":boy_tone5:":{uc_base:"1f466-1f3ff",uc_full:"1f466-1f3ff",shortnames:[],category:"people"},":breast_feeding_tone1:":{uc_base:"1f931-1f3fb",uc_full:"1f931-1f3fb",shortnames:[":breast_feeding_light_skin_tone:"],category:"people"},":breast_feeding_tone2:":{uc_base:"1f931-1f3fc",uc_full:"1f931-1f3fc",shortnames:[":breast_feeding_medium_light_skin_tone:"],category:"people"},":breast_feeding_tone3:":{uc_base:"1f931-1f3fd",uc_full:"1f931-1f3fd",shortnames:[":breast_feeding_medium_skin_tone:"],category:"people"},":breast_feeding_tone4:":{uc_base:"1f931-1f3fe",uc_full:"1f931-1f3fe",shortnames:[":breast_feeding_medium_dark_skin_tone:"],category:"people"},":breast_feeding_tone5:":{uc_base:"1f931-1f3ff",uc_full:"1f931-1f3ff",shortnames:[":breast_feeding_dark_skin_tone:"],category:"people"},":call_me_tone1:":{uc_base:"1f919-1f3fb",uc_full:"1f919-1f3fb",shortnames:[":call_me_hand_tone1:"],category:"people"},":call_me_tone2:":{uc_base:"1f919-1f3fc",uc_full:"1f919-1f3fc",shortnames:[":call_me_hand_tone2:"],category:"people"
},":call_me_tone3:":{uc_base:"1f919-1f3fd",uc_full:"1f919-1f3fd",shortnames:[":call_me_hand_tone3:"],category:"people"},":call_me_tone4:":{uc_base:"1f919-1f3fe",uc_full:"1f919-1f3fe",shortnames:[":call_me_hand_tone4:"],category:"people"},":call_me_tone5:":{uc_base:"1f919-1f3ff",uc_full:"1f919-1f3ff",shortnames:[":call_me_hand_tone5:"],category:"people"},":child_tone1:":{uc_base:"1f9d2-1f3fb",uc_full:"1f9d2-1f3fb",shortnames:[":child_light_skin_tone:"],category:"people"},":child_tone2:":{uc_base:"1f9d2-1f3fc",uc_full:"1f9d2-1f3fc",shortnames:[":child_medium_light_skin_tone:"],category:"people"},":child_tone3:":{uc_base:"1f9d2-1f3fd",uc_full:"1f9d2-1f3fd",shortnames:[":child_medium_skin_tone:"],category:"people"},":child_tone4:":{uc_base:"1f9d2-1f3fe",uc_full:"1f9d2-1f3fe",shortnames:[":child_medium_dark_skin_tone:"],category:"people"},":child_tone5:":{uc_base:"1f9d2-1f3ff",uc_full:"1f9d2-1f3ff",shortnames:[":child_dark_skin_tone:"],category:"people"},":clap_tone1:":{uc_base:"1f44f-1f3fb",uc_full:"1f44f-1f3fb",shortnames:[],category:"people"},":clap_tone2:":{uc_base:"1f44f-1f3fc",uc_full:"1f44f-1f3fc",shortnames:[],category:"people"},":clap_tone3:":{uc_base:"1f44f-1f3fd",uc_full:"1f44f-1f3fd",shortnames:[],category:"people"},":clap_tone4:":{uc_base:"1f44f-1f3fe",uc_full:"1f44f-1f3fe",shortnames:[],category:"people"},":clap_tone5:":{uc_base:"1f44f-1f3ff",uc_full:"1f44f-1f3ff",shortnames:[],category:"people"},":construction_worker_tone1:":{uc_base:"1f477-1f3fb",uc_full:"1f477-1f3fb",shortnames:[],category:"people"},":construction_worker_tone2:":{uc_base:"1f477-1f3fc",uc_full:"1f477-1f3fc",shortnames:[],category:"people"},":construction_worker_tone3:":{uc_base:"1f477-1f3fd",uc_full:"1f477-1f3fd",shortnames:[],category:"people"},":construction_worker_tone4:":{uc_base:"1f477-1f3fe",uc_full:"1f477-1f3fe",shortnames:[],category:"people"},":construction_worker_tone5:":{uc_base:"1f477-1f3ff",uc_full:"1f477-1f3ff",shortnames:[],category:"people"},":cook:":{uc_base:"1f9d1-1f373",uc_full:"1f9d1-200d-1f373",shortnames:[],category:"people"},":dancer_tone1:":{uc_base:"1f483-1f3fb",uc_full:"1f483-1f3fb",shortnames:[],category:"people"},":dancer_tone2:":{uc_base:"1f483-1f3fc",uc_full:"1f483-1f3fc",shortnames:[],category:"people"},":dancer_tone3:":{uc_base:"1f483-1f3fd",uc_full:"1f483-1f3fd",shortnames:[],category:"people"},":dancer_tone4:":{uc_base:"1f483-1f3fe",uc_full:"1f483-1f3fe",shortnames:[],category:"people"},":dancer_tone5:":{uc_base:"1f483-1f3ff",uc_full:"1f483-1f3ff",shortnames:[],category:"people"},":deaf_person_tone1:":{uc_base:"1f9cf-1f3fb",uc_full:"1f9cf-1f3fb",shortnames:[":deaf_person_light_skin_tone:"],category:"people"},":deaf_person_tone2:":{uc_base:"1f9cf-1f3fc",uc_full:"1f9cf-1f3fc",shortnames:[":deaf_person_medium_light_skin_tone:"],category:"people"},":deaf_person_tone3:":{uc_base:"1f9cf-1f3fd",uc_full:"1f9cf-1f3fd",shortnames:[":deaf_person_medium_skin_tone:"],category:"people"},":deaf_person_tone4:":{uc_base:"1f9cf-1f3fe",uc_full:"1f9cf-1f3fe",shortnames:[":deaf_person_medium_dark_skin_tone:"],category:"people"},":deaf_person_tone5:":{uc_base:"1f9cf-1f3ff",uc_full:"1f9cf-1f3ff",shortnames:[":deaf_person_dark_skin_tone:"],category:"people"},":detective_tone1:":{uc_base:"1f575-1f3fb",uc_full:"1f575-1f3fb",shortnames:[":spy_tone1:",":sleuth_or_spy_tone1:"],category:"people"},":detective_tone2:":{uc_base:"1f575-1f3fc",uc_full:"1f575-1f3fc",shortnames:[":spy_tone2:",":sleuth_or_spy_tone2:"],category:"people"},":detective_tone3:":{uc_base:"1f575-1f3fd",uc_full:"1f575-1f3fd",shortnames:[":spy_tone3:",":sleuth_or_spy_tone3:"],category:"people"},":detective_tone4:":{uc_base:"1f575-1f3fe",uc_full:"1f575-1f3fe",shortnames:[":spy_tone4:",":sleuth_or_spy_tone4:"],category:"people"},":detective_tone5:":{uc_base:"1f575-1f3ff",uc_full:"1f575-1f3ff",shortnames:[":spy_tone5:",":sleuth_or_spy_tone5:"],category:"people"},":ear_tone1:":{uc_base:"1f442-1f3fb",uc_full:"1f442-1f3fb",shortnames:[],category:"people"},":ear_tone2:":{uc_base:"1f442-1f3fc",uc_full:"1f442-1f3fc",shortnames:[],category:"people"},":ear_tone3:":{uc_base:"1f442-1f3fd",uc_full:"1f442-1f3fd",shortnames:[],category:"people"},":ear_tone4:":{uc_base:"1f442-1f3fe",uc_full:"1f442-1f3fe",shortnames:[],category:"people"},":ear_tone5:":{uc_base:"1f442-1f3ff",uc_full:"1f442-1f3ff",shortnames:[],category:"people"},":ear_with_hearing_aid_tone1:":{uc_base:"1f9bb-1f3fb",uc_full:"1f9bb-1f3fb",shortnames:[":ear_with_hearing_aid_light_skin_tone:"],category:"people"},":ear_with_hearing_aid_tone2:":{uc_base:"1f9bb-1f3fc",uc_full:"1f9bb-1f3fc",shortnames:[":ear_with_hearing_aid_medium_light_skin_tone:"],category:"people"},":ear_with_hearing_aid_tone3:":{uc_base:"1f9bb-1f3fd",uc_full:"1f9bb-1f3fd",shortnames:[":ear_with_hearing_aid_medium_skin_tone:"],category:"people"},":ear_with_hearing_aid_tone4:":{uc_base:"1f9bb-1f3fe",uc_full:"1f9bb-1f3fe",shortnames:[":ear_with_hearing_aid_medium_dark_skin_tone:"],category:"people"},":ear_with_hearing_aid_tone5:":{uc_base:"1f9bb-1f3ff",uc_full:"1f9bb-1f3ff",shortnames:[":ear_with_hearing_aid_dark_skin_tone:"],category:"people"},":elf_tone1:":{uc_base:"1f9dd-1f3fb",uc_full:"1f9dd-1f3fb",shortnames:[":elf_light_skin_tone:"],category:"people"},":elf_tone2:":{uc_base:"1f9dd-1f3fc",uc_full:"1f9dd-1f3fc",shortnames:[":elf_medium_light_skin_tone:"],category:"people"},":elf_tone3:":{uc_base:"1f9dd-1f3fd",uc_full:"1f9dd-1f3fd",shortnames:[":elf_medium_skin_tone:"],category:"people"},":elf_tone4:":{uc_base:"1f9dd-1f3fe",uc_full:"1f9dd-1f3fe",shortnames:[":elf_medium_dark_skin_tone:"],category:"people"},":elf_tone5:":{uc_base:"1f9dd-1f3ff",uc_full:"1f9dd-1f3ff",shortnames:[":elf_dark_skin_tone:"],category:"people"},":eye_in_speech_bubble:":{uc_base:"1f441-1f5e8",uc_full:"1f441-fe0f-200d-1f5e8-fe0f",shortnames:[],category:"symbols"},":factory_worker:":{uc_base:"1f9d1-1f3ed",uc_full:"1f9d1-200d-1f3ed",shortnames:[],category:"people"},":fairy_tone1:":{uc_base:"1f9da-1f3fb",uc_full:"1f9da-1f3fb",shortnames:[":fairy_light_skin_tone:"],category:"people"},":fairy_tone2:":{uc_base:"1f9da-1f3fc",uc_full:"1f9da-1f3fc",shortnames:[":fairy_medium_light_skin_tone:"],category:"people"},":fairy_tone3:":{uc_base:"1f9da-1f3fd",uc_full:"1f9da-1f3fd",shortnames:[":fairy_medium_skin_tone:"],category:"people"},":fairy_tone4:":{uc_base:"1f9da-1f3fe",uc_full:"1f9da-1f3fe",shortnames:[":fairy_medium_dark_skin_tone:"],category:"people"},":fairy_tone5:":{uc_base:"1f9da-1f3ff",uc_full:"1f9da-1f3ff",shortnames:[":fairy_dark_skin_tone:"],category:"people"},":family_man_boy:":{uc_base:"1f468-1f466",uc_full:"1f468-200d-1f466",shortnames:[],category:"people"},":family_man_girl:":{uc_base:"1f468-1f467",uc_full:"1f468-200d-1f467",shortnames:[],category:"people"},":family_woman_boy:":{uc_base:"1f469-1f466",uc_full:"1f469-200d-1f466",shortnames:[],category:"people"},":family_woman_girl:":{uc_base:"1f469-1f467",uc_full:"1f469-200d-1f467",shortnames:[],category:"people"},":farmer:":{uc_base:"1f9d1-1f33e",uc_full:"1f9d1-200d-1f33e",shortnames:[],category:"people"},":fingers_crossed_tone1:":{uc_base:"1f91e-1f3fb",uc_full:"1f91e-1f3fb",shortnames:[":hand_with_index_and_middle_fingers_crossed_tone1:"],category:"people"},":fingers_crossed_tone2:":{uc_base:"1f91e-1f3fc",uc_full:"1f91e-1f3fc",shortnames:[":hand_with_index_and_middle_fingers_crossed_tone2:"],category:"people"},":fingers_crossed_tone3:":{uc_base:"1f91e-1f3fd",uc_full:"1f91e-1f3fd",shortnames:[":hand_with_index_and_middle_fingers_crossed_tone3:"],category:"people"},":fingers_crossed_tone4:":{uc_base:"1f91e-1f3fe",uc_full:"1f91e-1f3fe",shortnames:[":hand_with_index_and_middle_fingers_crossed_tone4:"],category:"people"},":fingers_crossed_tone5:":{uc_base:"1f91e-1f3ff",uc_full:"1f91e-1f3ff",shortnames:[":hand_with_index_and_middle_fingers_crossed_tone5:"],category:"people"},":firefighter:":{uc_base:"1f9d1-1f692",uc_full:"1f9d1-200d-1f692",shortnames:[],category:"people"},":flag_ac:":{uc_base:"1f1e6-1f1e8",uc_full:"1f1e6-1f1e8",shortnames:[":ac:"],category:"flags"},":flag_ad:":{uc_base:"1f1e6-1f1e9",uc_full:"1f1e6-1f1e9",shortnames:[":ad:"],category:"flags"},":flag_ae:":{uc_base:"1f1e6-1f1ea",uc_full:"1f1e6-1f1ea",shortnames:[":ae:"],category:"flags"},":flag_af:":{uc_base:"1f1e6-1f1eb",uc_full:"1f1e6-1f1eb",shortnames:[":af:"],category:"flags"},":flag_ag:":{uc_base:"1f1e6-1f1ec",uc_full:"1f1e6-1f1ec",shortnames:[":ag:"],category:"flags"},":flag_ai:":{uc_base:"1f1e6-1f1ee",uc_full:"1f1e6-1f1ee",shortnames:[":ai:"],category:"flags"},":flag_al:":{uc_base:"1f1e6-1f1f1",uc_full:"1f1e6-1f1f1",shortnames:[":al:"],category:"flags"},":flag_am:":{uc_base:"1f1e6-1f1f2",uc_full:"1f1e6-1f1f2",shortnames:[":am:"],category:"flags"},":flag_ao:":{uc_base:"1f1e6-1f1f4",uc_full:"1f1e6-1f1f4",shortnames:[":ao:"],category:"flags"},":flag_aq:":{uc_base:"1f1e6-1f1f6",uc_full:"1f1e6-1f1f6",shortnames:[":aq:"],category:"flags"},":flag_ar:":{uc_base:"1f1e6-1f1f7",uc_full:"1f1e6-1f1f7",shortnames:[":ar:"],category:"flags"},":flag_as:":{uc_base:"1f1e6-1f1f8",uc_full:"1f1e6-1f1f8",shortnames:[":as:"],category:"flags"},":flag_at:":{uc_base:"1f1e6-1f1f9",uc_full:"1f1e6-1f1f9",shortnames:[":at:"],category:"flags"},":flag_au:":{uc_base:"1f1e6-1f1fa",uc_full:"1f1e6-1f1fa",shortnames:[":au:"],category:"flags"},":flag_aw:":{uc_base:"1f1e6-1f1fc",uc_full:"1f1e6-1f1fc",shortnames:[":aw:"],category:"flags"},":flag_ax:":{uc_base:"1f1e6-1f1fd",uc_full:"1f1e6-1f1fd",shortnames:[":ax:"],category:"flags"},":flag_az:":{uc_base:"1f1e6-1f1ff",uc_full:"1f1e6-1f1ff",shortnames:[":az:"],category:"flags"},":flag_ba:":{uc_base:"1f1e7-1f1e6",uc_full:"1f1e7-1f1e6",shortnames:[":ba:"],category:"flags"},":flag_bb:":{uc_base:"1f1e7-1f1e7",uc_full:"1f1e7-1f1e7",shortnames:[":bb:"],category:"flags"},":flag_bd:":{uc_base:"1f1e7-1f1e9",uc_full:"1f1e7-1f1e9",shortnames:[":bd:"],category:"flags"},":flag_be:":{uc_base:"1f1e7-1f1ea",uc_full:"1f1e7-1f1ea",shortnames:[":be:"],category:"flags"},":flag_bf:":{uc_base:"1f1e7-1f1eb",uc_full:"1f1e7-1f1eb",shortnames:[":bf:"],category:"flags"},":flag_bg:":{uc_base:"1f1e7-1f1ec",uc_full:"1f1e7-1f1ec",shortnames:[":bg:"],category:"flags"},":flag_bh:":{uc_base:"1f1e7-1f1ed",uc_full:"1f1e7-1f1ed",shortnames:[":bh:"],category:"flags"},":flag_bi:":{uc_base:"1f1e7-1f1ee",uc_full:"1f1e7-1f1ee",shortnames:[":bi:"],category:"flags"},":flag_bj:":{uc_base:"1f1e7-1f1ef",uc_full:"1f1e7-1f1ef",shortnames:[":bj:"],category:"flags"},":flag_bl:":{uc_base:"1f1e7-1f1f1",uc_full:"1f1e7-1f1f1",shortnames:[":bl:"],category:"flags"},":flag_bm:":{uc_base:"1f1e7-1f1f2",uc_full:"1f1e7-1f1f2",shortnames:[":bm:"],category:"flags"},":flag_bn:":{uc_base:"1f1e7-1f1f3",uc_full:"1f1e7-1f1f3",shortnames:[":bn:"],category:"flags"},":flag_bo:":{uc_base:"1f1e7-1f1f4",uc_full:"1f1e7-1f1f4",shortnames:[":bo:"],category:"flags"},":flag_bq:":{uc_base:"1f1e7-1f1f6",uc_full:"1f1e7-1f1f6",shortnames:[":bq:"],category:"flags"},":flag_br:":{uc_base:"1f1e7-1f1f7",uc_full:"1f1e7-1f1f7",shortnames:[":br:"],category:"flags"},":flag_bs:":{uc_base:"1f1e7-1f1f8",uc_full:"1f1e7-1f1f8",shortnames:[":bs:"],category:"flags"},":flag_bt:":{uc_base:"1f1e7-1f1f9",uc_full:"1f1e7-1f1f9",shortnames:[":bt:"],category:"flags"},":flag_bv:":{uc_base:"1f1e7-1f1fb",uc_full:"1f1e7-1f1fb",shortnames:[":bv:"],category:"flags"},":flag_bw:":{uc_base:"1f1e7-1f1fc",uc_full:"1f1e7-1f1fc",shortnames:[":bw:"],category:"flags"},":flag_by:":{uc_base:"1f1e7-1f1fe",uc_full:"1f1e7-1f1fe",shortnames:[":by:"],category:"flags"},":flag_bz:":{uc_base:"1f1e7-1f1ff",uc_full:"1f1e7-1f1ff",shortnames:[":bz:"],category:"flags"},":flag_ca:":{uc_base:"1f1e8-1f1e6",uc_full:"1f1e8-1f1e6",shortnames:[":ca:"],category:"flags"},":flag_cc:":{uc_base:"1f1e8-1f1e8",uc_full:"1f1e8-1f1e8",shortnames:[":cc:"],category:"flags"},":flag_cd:":{uc_base:"1f1e8-1f1e9",uc_full:"1f1e8-1f1e9",shortnames:[":congo:"],category:"flags"},":flag_cf:":{uc_base:"1f1e8-1f1eb",uc_full:"1f1e8-1f1eb",shortnames:[":cf:"],category:"flags"},":flag_cg:":{uc_base:"1f1e8-1f1ec",uc_full:"1f1e8-1f1ec",shortnames:[":cg:"],category:"flags"},":flag_ch:":{uc_base:"1f1e8-1f1ed",uc_full:"1f1e8-1f1ed",shortnames:[":ch:"],category:"flags"},":flag_ci:":{uc_base:"1f1e8-1f1ee",uc_full:"1f1e8-1f1ee",shortnames:[":ci:"],category:"flags"},":flag_ck:":{uc_base:"1f1e8-1f1f0",uc_full:"1f1e8-1f1f0",shortnames:[":ck:"],category:"flags"},":flag_cl:":{uc_base:"1f1e8-1f1f1",uc_full:"1f1e8-1f1f1",shortnames:[":chile:"],category:"flags"},":flag_cm:":{uc_base:"1f1e8-1f1f2",uc_full:"1f1e8-1f1f2",shortnames:[":cm:"],category:"flags"},":flag_cn:":{uc_base:"1f1e8-1f1f3",uc_full:"1f1e8-1f1f3",shortnames:[":cn:"],category:"flags"},":flag_co:":{uc_base:"1f1e8-1f1f4",uc_full:"1f1e8-1f1f4",shortnames:[":co:"],category:"flags"},":flag_cp:":{uc_base:"1f1e8-1f1f5",uc_full:"1f1e8-1f1f5",shortnames:[":cp:"],category:"flags"},":flag_cr:":{uc_base:"1f1e8-1f1f7",uc_full:"1f1e8-1f1f7",shortnames:[":cr:"],category:"flags"},":flag_cu:":{uc_base:"1f1e8-1f1fa",uc_full:"1f1e8-1f1fa",shortnames:[":cu:"],category:"flags"},":flag_cv:":{uc_base:"1f1e8-1f1fb",uc_full:"1f1e8-1f1fb",shortnames:[":cv:"],category:"flags"},":flag_cw:":{uc_base:"1f1e8-1f1fc",uc_full:"1f1e8-1f1fc",shortnames:[":cw:"],category:"flags"},":flag_cx:":{uc_base:"1f1e8-1f1fd",uc_full:"1f1e8-1f1fd",shortnames:[":cx:"],category:"flags"},":flag_cy:":{uc_base:"1f1e8-1f1fe",uc_full:"1f1e8-1f1fe",shortnames:[":cy:"],category:"flags"},":flag_cz:":{uc_base:"1f1e8-1f1ff",uc_full:"1f1e8-1f1ff",shortnames:[":cz:"],category:"flags"},":flag_de:":{uc_base:"1f1e9-1f1ea",uc_full:"1f1e9-1f1ea",shortnames:[":de:"],category:"flags"},":flag_dg:":{uc_base:"1f1e9-1f1ec",uc_full:"1f1e9-1f1ec",shortnames:[":dg:"],category:"flags"},":flag_dj:":{uc_base:"1f1e9-1f1ef",uc_full:"1f1e9-1f1ef",shortnames:[":dj:"],category:"flags"},":flag_dk:":{uc_base:"1f1e9-1f1f0",uc_full:"1f1e9-1f1f0",shortnames:[":dk:"],category:"flags"},":flag_dm:":{uc_base:"1f1e9-1f1f2",uc_full:"1f1e9-1f1f2",shortnames:[":dm:"],category:"flags"},":flag_do:":{uc_base:"1f1e9-1f1f4",uc_full:"1f1e9-1f1f4",shortnames:[":do:"],category:"flags"},":flag_dz:":{uc_base:"1f1e9-1f1ff",uc_full:"1f1e9-1f1ff",shortnames:[":dz:"],category:"flags"},":flag_ea:":{uc_base:"1f1ea-1f1e6",uc_full:"1f1ea-1f1e6",shortnames:[":ea:"],category:"flags"},":flag_ec:":{uc_base:"1f1ea-1f1e8",uc_full:"1f1ea-1f1e8",shortnames:[":ec:"],category:"flags"},":flag_ee:":{uc_base:"1f1ea-1f1ea",uc_full:"1f1ea-1f1ea",shortnames:[":ee:"],category:"flags"},":flag_eg:":{uc_base:"1f1ea-1f1ec",uc_full:"1f1ea-1f1ec",shortnames:[":eg:"],category:"flags"},":flag_eh:":{uc_base:"1f1ea-1f1ed",uc_full:"1f1ea-1f1ed",shortnames:[":eh:"],category:"flags"},":flag_er:":{uc_base:"1f1ea-1f1f7",uc_full:"1f1ea-1f1f7",shortnames:[":er:"],category:"flags"},":flag_es:":{uc_base:"1f1ea-1f1f8",uc_full:"1f1ea-1f1f8",shortnames:[":es:"],category:"flags"},":flag_et:":{uc_base:"1f1ea-1f1f9",uc_full:"1f1ea-1f1f9",shortnames:[":et:"],category:"flags"},":flag_eu:":{uc_base:"1f1ea-1f1fa",uc_full:"1f1ea-1f1fa",shortnames:[":eu:"],category:"flags"},":flag_fi:":{uc_base:"1f1eb-1f1ee",uc_full:"1f1eb-1f1ee",shortnames:[":fi:"],category:"flags"},":flag_fj:":{uc_base:"1f1eb-1f1ef",uc_full:"1f1eb-1f1ef",shortnames:[":fj:"],category:"flags"},":flag_fk:":{uc_base:"1f1eb-1f1f0",uc_full:"1f1eb-1f1f0",shortnames:[":fk:"],category:"flags"},":flag_fm:":{uc_base:"1f1eb-1f1f2",uc_full:"1f1eb-1f1f2",shortnames:[":fm:"],category:"flags"},":flag_fo:":{uc_base:"1f1eb-1f1f4",uc_full:"1f1eb-1f1f4",shortnames:[":fo:"],category:"flags"},":flag_fr:":{uc_base:"1f1eb-1f1f7",uc_full:"1f1eb-1f1f7",shortnames:[":fr:"],category:"flags"},":flag_ga:":{uc_base:"1f1ec-1f1e6",uc_full:"1f1ec-1f1e6",shortnames:[":ga:"],category:"flags"},":flag_gb:":{uc_base:"1f1ec-1f1e7",uc_full:"1f1ec-1f1e7",shortnames:[":gb:"],category:"flags"},":flag_gd:":{uc_base:"1f1ec-1f1e9",uc_full:"1f1ec-1f1e9",shortnames:[":gd:"],category:"flags"},":flag_ge:":{uc_base:"1f1ec-1f1ea",uc_full:"1f1ec-1f1ea",shortnames:[":ge:"],category:"flags"},":flag_gf:":{uc_base:"1f1ec-1f1eb",uc_full:"1f1ec-1f1eb",shortnames:[":gf:"],category:"flags"},":flag_gg:":{uc_base:"1f1ec-1f1ec",uc_full:"1f1ec-1f1ec",shortnames:[":gg:"],category:"flags"},":flag_gh:":{uc_base:"1f1ec-1f1ed",uc_full:"1f1ec-1f1ed",shortnames:[":gh:"],category:"flags"},":flag_gi:":{uc_base:"1f1ec-1f1ee",uc_full:"1f1ec-1f1ee",shortnames:[":gi:"],category:"flags"},":flag_gl:":{uc_base:"1f1ec-1f1f1",uc_full:"1f1ec-1f1f1",shortnames:[":gl:"],category:"flags"},":flag_gm:":{uc_base:"1f1ec-1f1f2",uc_full:"1f1ec-1f1f2",shortnames:[":gm:"],category:"flags"},":flag_gn:":{uc_base:"1f1ec-1f1f3",uc_full:"1f1ec-1f1f3",shortnames:[":gn:"],category:"flags"},":flag_gp:":{uc_base:"1f1ec-1f1f5",uc_full:"1f1ec-1f1f5",shortnames:[":gp:"],category:"flags"},":flag_gq:":{uc_base:"1f1ec-1f1f6",uc_full:"1f1ec-1f1f6",shortnames:[":gq:"],category:"flags"},":flag_gr:":{uc_base:"1f1ec-1f1f7",uc_full:"1f1ec-1f1f7",shortnames:[":gr:"],category:"flags"},":flag_gs:":{uc_base:"1f1ec-1f1f8",uc_full:"1f1ec-1f1f8",shortnames:[":gs:"],category:"flags"},":flag_gt:":{uc_base:"1f1ec-1f1f9",uc_full:"1f1ec-1f1f9",shortnames:[":gt:"],category:"flags"},":flag_gu:":{uc_base:"1f1ec-1f1fa",uc_full:"1f1ec-1f1fa",shortnames:[":gu:"],category:"flags"},":flag_gw:":{uc_base:"1f1ec-1f1fc",uc_full:"1f1ec-1f1fc",shortnames:[":gw:"],category:"flags"},":flag_gy:":{uc_base:"1f1ec-1f1fe",uc_full:"1f1ec-1f1fe",shortnames:[":gy:"],category:"flags"},":flag_hk:":{uc_base:"1f1ed-1f1f0",uc_full:"1f1ed-1f1f0",shortnames:[":hk:"],category:"flags"},":flag_hm:":{uc_base:"1f1ed-1f1f2",uc_full:"1f1ed-1f1f2",shortnames:[":hm:"],category:"flags"},":flag_hn:":{uc_base:"1f1ed-1f1f3",uc_full:"1f1ed-1f1f3",shortnames:[":hn:"],category:"flags"},":flag_hr:":{uc_base:"1f1ed-1f1f7",uc_full:"1f1ed-1f1f7",shortnames:[":hr:"],category:"flags"},":flag_ht:":{uc_base:"1f1ed-1f1f9",uc_full:"1f1ed-1f1f9",shortnames:[":ht:"],category:"flags"},":flag_hu:":{uc_base:"1f1ed-1f1fa",uc_full:"1f1ed-1f1fa",shortnames:[":hu:"],category:"flags"},":flag_ic:":{uc_base:"1f1ee-1f1e8",uc_full:"1f1ee-1f1e8",shortnames:[":ic:"],category:"flags"},":flag_id:":{uc_base:"1f1ee-1f1e9",uc_full:"1f1ee-1f1e9",shortnames:[":indonesia:"],category:"flags"},":flag_ie:":{uc_base:"1f1ee-1f1ea",uc_full:"1f1ee-1f1ea",shortnames:[":ie:"],category:"flags"},":flag_il:":{uc_base:"1f1ee-1f1f1",uc_full:"1f1ee-1f1f1",shortnames:[":il:"],category:"flags"},":flag_im:":{uc_base:"1f1ee-1f1f2",uc_full:"1f1ee-1f1f2",shortnames:[":im:"],category:"flags"},":flag_in:":{uc_base:"1f1ee-1f1f3",uc_full:"1f1ee-1f1f3",shortnames:[":in:"],category:"flags"},":flag_io:":{uc_base:"1f1ee-1f1f4",uc_full:"1f1ee-1f1f4",shortnames:[":io:"],category:"flags"},":flag_iq:":{uc_base:"1f1ee-1f1f6",uc_full:"1f1ee-1f1f6",shortnames:[":iq:"],category:"flags"},":flag_ir:":{uc_base:"1f1ee-1f1f7",uc_full:"1f1ee-1f1f7",shortnames:[":ir:"],category:"flags"},":flag_is:":{uc_base:"1f1ee-1f1f8",uc_full:"1f1ee-1f1f8",shortnames:[":is:"],category:"flags"},":flag_it:":{uc_base:"1f1ee-1f1f9",uc_full:"1f1ee-1f1f9",shortnames:[":it:"],category:"flags"},":flag_je:":{uc_base:"1f1ef-1f1ea",uc_full:"1f1ef-1f1ea",shortnames:[":je:"],category:"flags"},":flag_jm:":{uc_base:"1f1ef-1f1f2",uc_full:"1f1ef-1f1f2",shortnames:[":jm:"],category:"flags"},":flag_jo:":{uc_base:"1f1ef-1f1f4",uc_full:"1f1ef-1f1f4",shortnames:[":jo:"],category:"flags"},":flag_jp:":{uc_base:"1f1ef-1f1f5",uc_full:"1f1ef-1f1f5",shortnames:[":jp:"],category:"flags"},":flag_ke:":{uc_base:"1f1f0-1f1ea",uc_full:"1f1f0-1f1ea",shortnames:[":ke:"],category:"flags"},":flag_kg:":{uc_base:"1f1f0-1f1ec",uc_full:"1f1f0-1f1ec",shortnames:[":kg:"],category:"flags"},":flag_kh:":{uc_base:"1f1f0-1f1ed",uc_full:"1f1f0-1f1ed",shortnames:[":kh:"],category:"flags"},":flag_ki:":{uc_base:"1f1f0-1f1ee",uc_full:"1f1f0-1f1ee",shortnames:[":ki:"],category:"flags"},":flag_km:":{uc_base:"1f1f0-1f1f2",uc_full:"1f1f0-1f1f2",shortnames:[":km:"],category:"flags"},":flag_kn:":{uc_base:"1f1f0-1f1f3",uc_full:"1f1f0-1f1f3",shortnames:[":kn:"],category:"flags"},":flag_kp:":{uc_base:"1f1f0-1f1f5",uc_full:"1f1f0-1f1f5",shortnames:[":kp:"],category:"flags"},":flag_kr:":{uc_base:"1f1f0-1f1f7",uc_full:"1f1f0-1f1f7",shortnames:[":kr:"],category:"flags"},":flag_kw:":{uc_base:"1f1f0-1f1fc",uc_full:"1f1f0-1f1fc",shortnames:[":kw:"],category:"flags"},":flag_ky:":{uc_base:"1f1f0-1f1fe",uc_full:"1f1f0-1f1fe",shortnames:[":ky:"],category:"flags"},":flag_kz:":{uc_base:"1f1f0-1f1ff",uc_full:"1f1f0-1f1ff",shortnames:[":kz:"],category:"flags"},":flag_la:":{uc_base:"1f1f1-1f1e6",uc_full:"1f1f1-1f1e6",shortnames:[":la:"],category:"flags"},":flag_lb:":{uc_base:"1f1f1-1f1e7",uc_full:"1f1f1-1f1e7",shortnames:[":lb:"],category:"flags"},":flag_lc:":{uc_base:"1f1f1-1f1e8",uc_full:"1f1f1-1f1e8",shortnames:[":lc:"],category:"flags"},":flag_li:":{uc_base:"1f1f1-1f1ee",uc_full:"1f1f1-1f1ee",shortnames:[":li:"],category:"flags"},":flag_lk:":{uc_base:"1f1f1-1f1f0",uc_full:"1f1f1-1f1f0",shortnames:[":lk:"],category:"flags"},":flag_lr:":{uc_base:"1f1f1-1f1f7",uc_full:"1f1f1-1f1f7",shortnames:[":lr:"],category:"flags"},":flag_ls:":{uc_base:"1f1f1-1f1f8",uc_full:"1f1f1-1f1f8",shortnames:[":ls:"],category:"flags"},":flag_lt:":{uc_base:"1f1f1-1f1f9",uc_full:"1f1f1-1f1f9",shortnames:[":lt:"],category:"flags"},":flag_lu:":{uc_base:"1f1f1-1f1fa",uc_full:"1f1f1-1f1fa",shortnames:[":lu:"],category:"flags"},":flag_lv:":{uc_base:"1f1f1-1f1fb",uc_full:"1f1f1-1f1fb",shortnames:[":lv:"],category:"flags"},":flag_ly:":{uc_base:"1f1f1-1f1fe",uc_full:"1f1f1-1f1fe",shortnames:[":ly:"],category:"flags"},":flag_ma:":{uc_base:"1f1f2-1f1e6",uc_full:"1f1f2-1f1e6",shortnames:[":ma:"],category:"flags"},":flag_mc:":{uc_base:"1f1f2-1f1e8",uc_full:"1f1f2-1f1e8",shortnames:[":mc:"],category:"flags"},":flag_md:":{uc_base:"1f1f2-1f1e9",uc_full:"1f1f2-1f1e9",shortnames:[":md:"],category:"flags"},":flag_me:":{uc_base:"1f1f2-1f1ea",uc_full:"1f1f2-1f1ea",shortnames:[":me:"],category:"flags"},":flag_mf:":{uc_base:"1f1f2-1f1eb",uc_full:"1f1f2-1f1eb",shortnames:[":mf:"],category:"flags"},":flag_mg:":{uc_base:"1f1f2-1f1ec",uc_full:"1f1f2-1f1ec",shortnames:[":mg:"],category:"flags"},":flag_mh:":{uc_base:"1f1f2-1f1ed",uc_full:"1f1f2-1f1ed",shortnames:[":mh:"],category:"flags"},":flag_mk:":{uc_base:"1f1f2-1f1f0",uc_full:"1f1f2-1f1f0",shortnames:[":mk:"],category:"flags"},":flag_ml:":{uc_base:"1f1f2-1f1f1",uc_full:"1f1f2-1f1f1",shortnames:[":ml:"],category:"flags"},":flag_mm:":{uc_base:"1f1f2-1f1f2",uc_full:"1f1f2-1f1f2",shortnames:[":mm:"],category:"flags"},":flag_mn:":{uc_base:"1f1f2-1f1f3",uc_full:"1f1f2-1f1f3",shortnames:[":mn:"],category:"flags"},":flag_mo:":{uc_base:"1f1f2-1f1f4",uc_full:"1f1f2-1f1f4",shortnames:[":mo:"],category:"flags"},":flag_mp:":{uc_base:"1f1f2-1f1f5",uc_full:"1f1f2-1f1f5",shortnames:[":mp:"],category:"flags"},":flag_mq:":{uc_base:"1f1f2-1f1f6",uc_full:"1f1f2-1f1f6",shortnames:[":mq:"],category:"flags"},":flag_mr:":{uc_base:"1f1f2-1f1f7",uc_full:"1f1f2-1f1f7",shortnames:[":mr:"],category:"flags"},":flag_ms:":{uc_base:"1f1f2-1f1f8",uc_full:"1f1f2-1f1f8",shortnames:[":ms:"],category:"flags"},":flag_mt:":{uc_base:"1f1f2-1f1f9",uc_full:"1f1f2-1f1f9",shortnames:[":mt:"],category:"flags"},":flag_mu:":{uc_base:"1f1f2-1f1fa",uc_full:"1f1f2-1f1fa",shortnames:[":mu:"],category:"flags"},":flag_mv:":{uc_base:"1f1f2-1f1fb",uc_full:"1f1f2-1f1fb",shortnames:[":mv:"],category:"flags"},":flag_mw:":{uc_base:"1f1f2-1f1fc",uc_full:"1f1f2-1f1fc",shortnames:[":mw:"],category:"flags"},":flag_mx:":{uc_base:"1f1f2-1f1fd",uc_full:"1f1f2-1f1fd",shortnames:[":mx:"],category:"flags"},":flag_my:":{uc_base:"1f1f2-1f1fe",uc_full:"1f1f2-1f1fe",shortnames:[":my:"],category:"flags"},":flag_mz:":{uc_base:"1f1f2-1f1ff",uc_full:"1f1f2-1f1ff",shortnames:[":mz:"],category:"flags"},":flag_na:":{uc_base:"1f1f3-1f1e6",uc_full:"1f1f3-1f1e6",shortnames:[":na:"],category:"flags"},":flag_nc:":{uc_base:"1f1f3-1f1e8",uc_full:"1f1f3-1f1e8",shortnames:[":nc:"],category:"flags"},":flag_ne:":{uc_base:"1f1f3-1f1ea",uc_full:"1f1f3-1f1ea",shortnames:[":ne:"],category:"flags"},":flag_nf:":{uc_base:"1f1f3-1f1eb",uc_full:"1f1f3-1f1eb",shortnames:[":nf:"],category:"flags"},":flag_ng:":{uc_base:"1f1f3-1f1ec",uc_full:"1f1f3-1f1ec",shortnames:[":nigeria:"],category:"flags"},":flag_ni:":{uc_base:"1f1f3-1f1ee",uc_full:"1f1f3-1f1ee",shortnames:[":ni:"],category:"flags"},":flag_nl:":{uc_base:"1f1f3-1f1f1",uc_full:"1f1f3-1f1f1",shortnames:[":nl:"],category:"flags"},":flag_no:":{uc_base:"1f1f3-1f1f4",uc_full:"1f1f3-1f1f4",shortnames:[":no:"],category:"flags"},":flag_np:":{uc_base:"1f1f3-1f1f5",uc_full:"1f1f3-1f1f5",shortnames:[":np:"],category:"flags"},":flag_nr:":{uc_base:"1f1f3-1f1f7",uc_full:"1f1f3-1f1f7",shortnames:[":nr:"],category:"flags"},":flag_nu:":{uc_base:"1f1f3-1f1fa",uc_full:"1f1f3-1f1fa",shortnames:[":nu:"],category:"flags"},":flag_nz:":{uc_base:"1f1f3-1f1ff",uc_full:"1f1f3-1f1ff",shortnames:[":nz:"],category:"flags"},":flag_om:":{uc_base:"1f1f4-1f1f2",uc_full:"1f1f4-1f1f2",shortnames:[":om:"],category:"flags"},":flag_pa:":{uc_base:"1f1f5-1f1e6",uc_full:"1f1f5-1f1e6",shortnames:[":pa:"],category:"flags"},":flag_pe:":{uc_base:"1f1f5-1f1ea",uc_full:"1f1f5-1f1ea",shortnames:[":pe:"],category:"flags"},":flag_pf:":{uc_base:"1f1f5-1f1eb",uc_full:"1f1f5-1f1eb",shortnames:[":pf:"],category:"flags"},":flag_pg:":{uc_base:"1f1f5-1f1ec",uc_full:"1f1f5-1f1ec",shortnames:[":pg:"],category:"flags"},":flag_ph:":{uc_base:"1f1f5-1f1ed",uc_full:"1f1f5-1f1ed",shortnames:[":ph:"],category:"flags"},":flag_pk:":{uc_base:"1f1f5-1f1f0",uc_full:"1f1f5-1f1f0",shortnames:[":pk:"],category:"flags"},":flag_pl:":{uc_base:"1f1f5-1f1f1",uc_full:"1f1f5-1f1f1",shortnames:[":pl:"],category:"flags"},":flag_pm:":{uc_base:"1f1f5-1f1f2",uc_full:"1f1f5-1f1f2",shortnames:[":pm:"],category:"flags"},":flag_pn:":{uc_base:"1f1f5-1f1f3",uc_full:"1f1f5-1f1f3",shortnames:[":pn:"],category:"flags"},":flag_pr:":{uc_base:"1f1f5-1f1f7",uc_full:"1f1f5-1f1f7",shortnames:[":pr:"],category:"flags"},":flag_ps:":{uc_base:"1f1f5-1f1f8",uc_full:"1f1f5-1f1f8",shortnames:[":ps:"],category:"flags"},":flag_pt:":{uc_base:"1f1f5-1f1f9",uc_full:"1f1f5-1f1f9",shortnames:[":pt:"],category:"flags"},":flag_pw:":{uc_base:"1f1f5-1f1fc",uc_full:"1f1f5-1f1fc",shortnames:[":pw:"],category:"flags"},":flag_py:":{uc_base:"1f1f5-1f1fe",uc_full:"1f1f5-1f1fe",shortnames:[":py:"],category:"flags"},":flag_qa:":{uc_base:"1f1f6-1f1e6",uc_full:"1f1f6-1f1e6",shortnames:[":qa:"],category:"flags"},":flag_re:":{uc_base:"1f1f7-1f1ea",uc_full:"1f1f7-1f1ea",shortnames:[":re:"],category:"flags"},":flag_ro:":{uc_base:"1f1f7-1f1f4",uc_full:"1f1f7-1f1f4",shortnames:[":ro:"],category:"flags"},":flag_rs:":{uc_base:"1f1f7-1f1f8",uc_full:"1f1f7-1f1f8",shortnames:[":rs:"],category:"flags"},":flag_ru:":{uc_base:"1f1f7-1f1fa",uc_full:"1f1f7-1f1fa",shortnames:[":ru:"],category:"flags"},":flag_rw:":{uc_base:"1f1f7-1f1fc",uc_full:"1f1f7-1f1fc",shortnames:[":rw:"],category:"flags"},":flag_sa:":{uc_base:"1f1f8-1f1e6",uc_full:"1f1f8-1f1e6",shortnames:[":saudiarabia:",":saudi:"],category:"flags"},":flag_sb:":{uc_base:"1f1f8-1f1e7",uc_full:"1f1f8-1f1e7",shortnames:[":sb:"],category:"flags"},":flag_sc:":{uc_base:"1f1f8-1f1e8",uc_full:"1f1f8-1f1e8",shortnames:[":sc:"],category:"flags"},":flag_sd:":{uc_base:"1f1f8-1f1e9",uc_full:"1f1f8-1f1e9",shortnames:[":sd:"],category:"flags"},":flag_se:":{uc_base:"1f1f8-1f1ea",uc_full:"1f1f8-1f1ea",shortnames:[":se:"],category:"flags"},":flag_sg:":{uc_base:"1f1f8-1f1ec",uc_full:"1f1f8-1f1ec",shortnames:[":sg:"],category:"flags"},":flag_sh:":{uc_base:"1f1f8-1f1ed",uc_full:"1f1f8-1f1ed",shortnames:[":sh:"],category:"flags"},":flag_si:":{uc_base:"1f1f8-1f1ee",uc_full:"1f1f8-1f1ee",shortnames:[":si:"],category:"flags"},":flag_sj:":{uc_base:"1f1f8-1f1ef",uc_full:"1f1f8-1f1ef",shortnames:[":sj:"],category:"flags"},":flag_sk:":{uc_base:"1f1f8-1f1f0",uc_full:"1f1f8-1f1f0",shortnames:[":sk:"],category:"flags"},":flag_sl:":{uc_base:"1f1f8-1f1f1",uc_full:"1f1f8-1f1f1",shortnames:[":sl:"],category:"flags"},":flag_sm:":{uc_base:"1f1f8-1f1f2",uc_full:"1f1f8-1f1f2",shortnames:[":sm:"],category:"flags"},":flag_sn:":{uc_base:"1f1f8-1f1f3",uc_full:"1f1f8-1f1f3",shortnames:[":sn:"],category:"flags"},":flag_so:":{uc_base:"1f1f8-1f1f4",uc_full:"1f1f8-1f1f4",shortnames:[":so:"],category:"flags"},":flag_sr:":{uc_base:"1f1f8-1f1f7",uc_full:"1f1f8-1f1f7",shortnames:[":sr:"],category:"flags"},":flag_ss:":{uc_base:"1f1f8-1f1f8",uc_full:"1f1f8-1f1f8",shortnames:[":ss:"],category:"flags"},":flag_st:":{uc_base:"1f1f8-1f1f9",uc_full:"1f1f8-1f1f9",shortnames:[":st:"],category:"flags"},":flag_sv:":{uc_base:"1f1f8-1f1fb",uc_full:"1f1f8-1f1fb",shortnames:[":sv:"],category:"flags"},":flag_sx:":{uc_base:"1f1f8-1f1fd",uc_full:"1f1f8-1f1fd",shortnames:[":sx:"],category:"flags"},":flag_sy:":{uc_base:"1f1f8-1f1fe",uc_full:"1f1f8-1f1fe",shortnames:[":sy:"],category:"flags"},":flag_sz:":{uc_base:"1f1f8-1f1ff",uc_full:"1f1f8-1f1ff",shortnames:[":sz:"],category:"flags"},":flag_ta:":{uc_base:"1f1f9-1f1e6",uc_full:"1f1f9-1f1e6",shortnames:[":ta:"],category:"flags"},":flag_tc:":{uc_base:"1f1f9-1f1e8",uc_full:"1f1f9-1f1e8",shortnames:[":tc:"],category:"flags"},":flag_td:":{uc_base:"1f1f9-1f1e9",uc_full:"1f1f9-1f1e9",shortnames:[":td:"],category:"flags"},":flag_tf:":{uc_base:"1f1f9-1f1eb",uc_full:"1f1f9-1f1eb",shortnames:[":tf:"],category:"flags"},":flag_tg:":{uc_base:"1f1f9-1f1ec",uc_full:"1f1f9-1f1ec",shortnames:[":tg:"],category:"flags"},":flag_th:":{uc_base:"1f1f9-1f1ed",uc_full:"1f1f9-1f1ed",shortnames:[":th:"],category:"flags"},":flag_tj:":{uc_base:"1f1f9-1f1ef",uc_full:"1f1f9-1f1ef",shortnames:[":tj:"],category:"flags"},":flag_tk:":{uc_base:"1f1f9-1f1f0",uc_full:"1f1f9-1f1f0",shortnames:[":tk:"],category:"flags"},":flag_tl:":{uc_base:"1f1f9-1f1f1",uc_full:"1f1f9-1f1f1",shortnames:[":tl:"],category:"flags"},":flag_tm:":{uc_base:"1f1f9-1f1f2",uc_full:"1f1f9-1f1f2",shortnames:[":turkmenistan:"],category:"flags"},":flag_tn:":{uc_base:"1f1f9-1f1f3",uc_full:"1f1f9-1f1f3",shortnames:[":tn:"],category:"flags"},":flag_to:":{uc_base:"1f1f9-1f1f4",uc_full:"1f1f9-1f1f4",shortnames:[":to:"],category:"flags"},":flag_tr:":{uc_base:"1f1f9-1f1f7",uc_full:"1f1f9-1f1f7",shortnames:[":tr:"],category:"flags"},":flag_tt:":{uc_base:"1f1f9-1f1f9",uc_full:"1f1f9-1f1f9",shortnames:[":tt:"],category:"flags"},":flag_tv:":{uc_base:"1f1f9-1f1fb",uc_full:"1f1f9-1f1fb",shortnames:[":tuvalu:"],category:"flags"},":flag_tw:":{uc_base:"1f1f9-1f1fc",uc_full:"1f1f9-1f1fc",shortnames:[":tw:"],category:"flags"},":flag_tz:":{uc_base:"1f1f9-1f1ff",uc_full:"1f1f9-1f1ff",shortnames:[":tz:"],category:"flags"},":flag_ua:":{uc_base:"1f1fa-1f1e6",uc_full:"1f1fa-1f1e6",shortnames:[":ua:"],category:"flags"},":flag_ug:":{uc_base:"1f1fa-1f1ec",uc_full:"1f1fa-1f1ec",shortnames:[":ug:"],category:"flags"},":flag_um:":{uc_base:"1f1fa-1f1f2",uc_full:"1f1fa-1f1f2",shortnames:[":um:"],category:"flags"},":flag_us:":{uc_base:"1f1fa-1f1f8",uc_full:"1f1fa-1f1f8",shortnames:[":us:"],category:"flags"},":flag_uy:":{uc_base:"1f1fa-1f1fe",uc_full:"1f1fa-1f1fe",shortnames:[":uy:"],category:"flags"},":flag_uz:":{uc_base:"1f1fa-1f1ff",uc_full:"1f1fa-1f1ff",shortnames:[":uz:"],category:"flags"},":flag_va:":{uc_base:"1f1fb-1f1e6",uc_full:"1f1fb-1f1e6",shortnames:[":va:"],category:"flags"},":flag_vc:":{uc_base:"1f1fb-1f1e8",uc_full:"1f1fb-1f1e8",shortnames:[":vc:"],category:"flags"},":flag_ve:":{uc_base:"1f1fb-1f1ea",uc_full:"1f1fb-1f1ea",shortnames:[":ve:"],category:"flags"},":flag_vg:":{uc_base:"1f1fb-1f1ec",uc_full:"1f1fb-1f1ec",shortnames:[":vg:"],category:"flags"},":flag_vi:":{uc_base:"1f1fb-1f1ee",uc_full:"1f1fb-1f1ee",shortnames:[":vi:"],category:"flags"},":flag_vn:":{uc_base:"1f1fb-1f1f3",uc_full:"1f1fb-1f1f3",shortnames:[":vn:"],category:"flags"},":flag_vu:":{uc_base:"1f1fb-1f1fa",uc_full:"1f1fb-1f1fa",shortnames:[":vu:"],category:"flags"},":flag_wf:":{uc_base:"1f1fc-1f1eb",uc_full:"1f1fc-1f1eb",shortnames:[":wf:"],category:"flags"},":flag_ws:":{uc_base:"1f1fc-1f1f8",uc_full:"1f1fc-1f1f8",shortnames:[":ws:"],category:"flags"},":flag_xk:":{uc_base:"1f1fd-1f1f0",uc_full:"1f1fd-1f1f0",shortnames:[":xk:"],category:"flags"},":flag_ye:":{uc_base:"1f1fe-1f1ea",uc_full:"1f1fe-1f1ea",shortnames:[":ye:"],category:"flags"},":flag_yt:":{uc_base:"1f1fe-1f1f9",
uc_full:"1f1fe-1f1f9",shortnames:[":yt:"],category:"flags"},":flag_za:":{uc_base:"1f1ff-1f1e6",uc_full:"1f1ff-1f1e6",shortnames:[":za:"],category:"flags"},":flag_zm:":{uc_base:"1f1ff-1f1f2",uc_full:"1f1ff-1f1f2",shortnames:[":zm:"],category:"flags"},":flag_zw:":{uc_base:"1f1ff-1f1fc",uc_full:"1f1ff-1f1fc",shortnames:[":zw:"],category:"flags"},":foot_tone1:":{uc_base:"1f9b6-1f3fb",uc_full:"1f9b6-1f3fb",shortnames:[":foot_light_skin_tone:"],category:"people"},":foot_tone2:":{uc_base:"1f9b6-1f3fc",uc_full:"1f9b6-1f3fc",shortnames:[":foot_medium_light_skin_tone:"],category:"people"},":foot_tone3:":{uc_base:"1f9b6-1f3fd",uc_full:"1f9b6-1f3fd",shortnames:[":foot_medium_skin_tone:"],category:"people"},":foot_tone4:":{uc_base:"1f9b6-1f3fe",uc_full:"1f9b6-1f3fe",shortnames:[":foot_medium_dark_skin_tone:"],category:"people"},":foot_tone5:":{uc_base:"1f9b6-1f3ff",uc_full:"1f9b6-1f3ff",shortnames:[":foot_dark_skin_tone:"],category:"people"},":girl_tone1:":{uc_base:"1f467-1f3fb",uc_full:"1f467-1f3fb",shortnames:[],category:"people"},":girl_tone2:":{uc_base:"1f467-1f3fc",uc_full:"1f467-1f3fc",shortnames:[],category:"people"},":girl_tone3:":{uc_base:"1f467-1f3fd",uc_full:"1f467-1f3fd",shortnames:[],category:"people"},":girl_tone4:":{uc_base:"1f467-1f3fe",uc_full:"1f467-1f3fe",shortnames:[],category:"people"},":girl_tone5:":{uc_base:"1f467-1f3ff",uc_full:"1f467-1f3ff",shortnames:[],category:"people"},":guard_tone1:":{uc_base:"1f482-1f3fb",uc_full:"1f482-1f3fb",shortnames:[":guardsman_tone1:"],category:"people"},":guard_tone2:":{uc_base:"1f482-1f3fc",uc_full:"1f482-1f3fc",shortnames:[":guardsman_tone2:"],category:"people"},":guard_tone3:":{uc_base:"1f482-1f3fd",uc_full:"1f482-1f3fd",shortnames:[":guardsman_tone3:"],category:"people"},":guard_tone4:":{uc_base:"1f482-1f3fe",uc_full:"1f482-1f3fe",shortnames:[":guardsman_tone4:"],category:"people"},":guard_tone5:":{uc_base:"1f482-1f3ff",uc_full:"1f482-1f3ff",shortnames:[":guardsman_tone5:"],category:"people"},":hand_splayed_tone1:":{uc_base:"1f590-1f3fb",uc_full:"1f590-1f3fb",shortnames:[":raised_hand_with_fingers_splayed_tone1:"],category:"people"},":hand_splayed_tone2:":{uc_base:"1f590-1f3fc",uc_full:"1f590-1f3fc",shortnames:[":raised_hand_with_fingers_splayed_tone2:"],category:"people"},":hand_splayed_tone3:":{uc_base:"1f590-1f3fd",uc_full:"1f590-1f3fd",shortnames:[":raised_hand_with_fingers_splayed_tone3:"],category:"people"},":hand_splayed_tone4:":{uc_base:"1f590-1f3fe",uc_full:"1f590-1f3fe",shortnames:[":raised_hand_with_fingers_splayed_tone4:"],category:"people"},":hand_splayed_tone5:":{uc_base:"1f590-1f3ff",uc_full:"1f590-1f3ff",shortnames:[":raised_hand_with_fingers_splayed_tone5:"],category:"people"},":horse_racing_tone1:":{uc_base:"1f3c7-1f3fb",uc_full:"1f3c7-1f3fb",shortnames:[],category:"activity"},":horse_racing_tone2:":{uc_base:"1f3c7-1f3fc",uc_full:"1f3c7-1f3fc",shortnames:[],category:"activity"},":horse_racing_tone3:":{uc_base:"1f3c7-1f3fd",uc_full:"1f3c7-1f3fd",shortnames:[],category:"activity"},":horse_racing_tone4:":{uc_base:"1f3c7-1f3fe",uc_full:"1f3c7-1f3fe",shortnames:[],category:"activity"},":horse_racing_tone5:":{uc_base:"1f3c7-1f3ff",uc_full:"1f3c7-1f3ff",shortnames:[],category:"activity"},":left_facing_fist_tone1:":{uc_base:"1f91b-1f3fb",uc_full:"1f91b-1f3fb",shortnames:[":left_fist_tone1:"],category:"people"},":left_facing_fist_tone2:":{uc_base:"1f91b-1f3fc",uc_full:"1f91b-1f3fc",shortnames:[":left_fist_tone2:"],category:"people"},":left_facing_fist_tone3:":{uc_base:"1f91b-1f3fd",uc_full:"1f91b-1f3fd",shortnames:[":left_fist_tone3:"],category:"people"},":left_facing_fist_tone4:":{uc_base:"1f91b-1f3fe",uc_full:"1f91b-1f3fe",shortnames:[":left_fist_tone4:"],category:"people"},":left_facing_fist_tone5:":{uc_base:"1f91b-1f3ff",uc_full:"1f91b-1f3ff",shortnames:[":left_fist_tone5:"],category:"people"},":leg_tone1:":{uc_base:"1f9b5-1f3fb",uc_full:"1f9b5-1f3fb",shortnames:[":leg_light_skin_tone:"],category:"people"},":leg_tone2:":{uc_base:"1f9b5-1f3fc",uc_full:"1f9b5-1f3fc",shortnames:[":leg_medium_light_skin_tone:"],category:"people"},":leg_tone3:":{uc_base:"1f9b5-1f3fd",uc_full:"1f9b5-1f3fd",shortnames:[":leg_medium_skin_tone:"],category:"people"},":leg_tone4:":{uc_base:"1f9b5-1f3fe",uc_full:"1f9b5-1f3fe",shortnames:[":leg_medium_dark_skin_tone:"],category:"people"},":leg_tone5:":{uc_base:"1f9b5-1f3ff",uc_full:"1f9b5-1f3ff",shortnames:[":leg_dark_skin_tone:"],category:"people"},":levitate_tone1:":{uc_base:"1f574-1f3fb",uc_full:"1f574-1f3fb",shortnames:[":man_in_business_suit_levitating_tone1:",":man_in_business_suit_levitating_light_skin_tone:"],category:"people"},":levitate_tone2:":{uc_base:"1f574-1f3fc",uc_full:"1f574-1f3fc",shortnames:[":man_in_business_suit_levitating_tone2:",":man_in_business_suit_levitating_medium_light_skin_tone:"],category:"people"},":levitate_tone3:":{uc_base:"1f574-1f3fd",uc_full:"1f574-1f3fd",shortnames:[":man_in_business_suit_levitating_tone3:",":man_in_business_suit_levitating_medium_skin_tone:"],category:"people"},":levitate_tone4:":{uc_base:"1f574-1f3fe",uc_full:"1f574-1f3fe",shortnames:[":man_in_business_suit_levitating_tone4:",":man_in_business_suit_levitating_medium_dark_skin_tone:"],category:"people"},":levitate_tone5:":{uc_base:"1f574-1f3ff",uc_full:"1f574-1f3ff",shortnames:[":man_in_business_suit_levitating_tone5:",":man_in_business_suit_levitating_dark_skin_tone:"],category:"people"},":love_you_gesture_tone1:":{uc_base:"1f91f-1f3fb",uc_full:"1f91f-1f3fb",shortnames:[":love_you_gesture_light_skin_tone:"],category:"people"},":love_you_gesture_tone2:":{uc_base:"1f91f-1f3fc",uc_full:"1f91f-1f3fc",shortnames:[":love_you_gesture_medium_light_skin_tone:"],category:"people"},":love_you_gesture_tone3:":{uc_base:"1f91f-1f3fd",uc_full:"1f91f-1f3fd",shortnames:[":love_you_gesture_medium_skin_tone:"],category:"people"},":love_you_gesture_tone4:":{uc_base:"1f91f-1f3fe",uc_full:"1f91f-1f3fe",shortnames:[":love_you_gesture_medium_dark_skin_tone:"],category:"people"},":love_you_gesture_tone5:":{uc_base:"1f91f-1f3ff",uc_full:"1f91f-1f3ff",shortnames:[":love_you_gesture_dark_skin_tone:"],category:"people"},":mage_tone1:":{uc_base:"1f9d9-1f3fb",uc_full:"1f9d9-1f3fb",shortnames:[":mage_light_skin_tone:"],category:"people"},":mage_tone2:":{uc_base:"1f9d9-1f3fc",uc_full:"1f9d9-1f3fc",shortnames:[":mage_medium_light_skin_tone:"],category:"people"},":mage_tone3:":{uc_base:"1f9d9-1f3fd",uc_full:"1f9d9-1f3fd",shortnames:[":mage_medium_skin_tone:"],category:"people"},":mage_tone4:":{uc_base:"1f9d9-1f3fe",uc_full:"1f9d9-1f3fe",shortnames:[":mage_medium_dark_skin_tone:"],category:"people"},":mage_tone5:":{uc_base:"1f9d9-1f3ff",uc_full:"1f9d9-1f3ff",shortnames:[":mage_dark_skin_tone:"],category:"people"},":man_artist:":{uc_base:"1f468-1f3a8",uc_full:"1f468-200d-1f3a8",shortnames:[],category:"people"},":man_astronaut:":{uc_base:"1f468-1f680",uc_full:"1f468-200d-1f680",shortnames:[],category:"people"},":man_bald:":{uc_base:"1f468-1f9b2",uc_full:"1f468-200d-1f9b2",shortnames:[],category:"people"},":man_cook:":{uc_base:"1f468-1f373",uc_full:"1f468-200d-1f373",shortnames:[],category:"people"},":man_curly_haired:":{uc_base:"1f468-1f9b1",uc_full:"1f468-200d-1f9b1",shortnames:[],category:"people"},":man_dancing_tone1:":{uc_base:"1f57a-1f3fb",uc_full:"1f57a-1f3fb",shortnames:[":male_dancer_tone1:"],category:"people"},":man_dancing_tone2:":{uc_base:"1f57a-1f3fc",uc_full:"1f57a-1f3fc",shortnames:[":male_dancer_tone2:"],category:"people"},":man_dancing_tone3:":{uc_base:"1f57a-1f3fd",uc_full:"1f57a-1f3fd",shortnames:[":male_dancer_tone3:"],category:"people"},":man_dancing_tone4:":{uc_base:"1f57a-1f3fe",uc_full:"1f57a-1f3fe",shortnames:[":male_dancer_tone4:"],category:"people"},":man_dancing_tone5:":{uc_base:"1f57a-1f3ff",uc_full:"1f57a-1f3ff",shortnames:[":male_dancer_tone5:"],category:"people"},":man_factory_worker:":{uc_base:"1f468-1f3ed",uc_full:"1f468-200d-1f3ed",shortnames:[],category:"people"},":man_farmer:":{uc_base:"1f468-1f33e",uc_full:"1f468-200d-1f33e",shortnames:[],category:"people"},":man_feeding_baby:":{uc_base:"1f468-1f37c",uc_full:"1f468-200d-1f37c",shortnames:[],category:"people"},":man_firefighter:":{uc_base:"1f468-1f692",uc_full:"1f468-200d-1f692",shortnames:[],category:"people"},":man_in_manual_wheelchair:":{uc_base:"1f468-1f9bd",uc_full:"1f468-200d-1f9bd",shortnames:[],category:"people"},":man_in_motorized_wheelchair:":{uc_base:"1f468-1f9bc",uc_full:"1f468-200d-1f9bc",shortnames:[],category:"people"},":man_mechanic:":{uc_base:"1f468-1f527",uc_full:"1f468-200d-1f527",shortnames:[],category:"people"},":man_office_worker:":{uc_base:"1f468-1f4bc",uc_full:"1f468-200d-1f4bc",shortnames:[],category:"people"},":man_red_haired:":{uc_base:"1f468-1f9b0",uc_full:"1f468-200d-1f9b0",shortnames:[],category:"people"},":man_scientist:":{uc_base:"1f468-1f52c",uc_full:"1f468-200d-1f52c",shortnames:[],category:"people"},":man_singer:":{uc_base:"1f468-1f3a4",uc_full:"1f468-200d-1f3a4",shortnames:[],category:"people"},":man_student:":{uc_base:"1f468-1f393",uc_full:"1f468-200d-1f393",shortnames:[],category:"people"},":man_teacher:":{uc_base:"1f468-1f3eb",uc_full:"1f468-200d-1f3eb",shortnames:[],category:"people"},":man_technologist:":{uc_base:"1f468-1f4bb",uc_full:"1f468-200d-1f4bb",shortnames:[],category:"people"},":man_tone1:":{uc_base:"1f468-1f3fb",uc_full:"1f468-1f3fb",shortnames:[],category:"people"},":man_tone2:":{uc_base:"1f468-1f3fc",uc_full:"1f468-1f3fc",shortnames:[],category:"people"},":man_tone3:":{uc_base:"1f468-1f3fd",uc_full:"1f468-1f3fd",shortnames:[],category:"people"},":man_tone4:":{uc_base:"1f468-1f3fe",uc_full:"1f468-1f3fe",shortnames:[],category:"people"},":man_tone5:":{uc_base:"1f468-1f3ff",uc_full:"1f468-1f3ff",shortnames:[],category:"people"},":man_white_haired:":{uc_base:"1f468-1f9b3",uc_full:"1f468-200d-1f9b3",shortnames:[],category:"people"},":man_with_chinese_cap_tone1:":{uc_base:"1f472-1f3fb",uc_full:"1f472-1f3fb",shortnames:[":man_with_gua_pi_mao_tone1:"],category:"people"},":man_with_chinese_cap_tone2:":{uc_base:"1f472-1f3fc",uc_full:"1f472-1f3fc",shortnames:[":man_with_gua_pi_mao_tone2:"],category:"people"},":man_with_chinese_cap_tone3:":{uc_base:"1f472-1f3fd",uc_full:"1f472-1f3fd",shortnames:[":man_with_gua_pi_mao_tone3:"],category:"people"},":man_with_chinese_cap_tone4:":{uc_base:"1f472-1f3fe",uc_full:"1f472-1f3fe",shortnames:[":man_with_gua_pi_mao_tone4:"],category:"people"},":man_with_chinese_cap_tone5:":{uc_base:"1f472-1f3ff",uc_full:"1f472-1f3ff",shortnames:[":man_with_gua_pi_mao_tone5:"],category:"people"},":man_with_probing_cane:":{uc_base:"1f468-1f9af",uc_full:"1f468-200d-1f9af",shortnames:[],category:"people"},":mechanic:":{uc_base:"1f9d1-1f527",uc_full:"1f9d1-200d-1f527",shortnames:[],category:"people"},":men_holding_hands_tone1:":{uc_base:"1f46c-1f3fb",uc_full:"1f46c-1f3fb",shortnames:[":men_holding_hands_light_skin_tone:"],category:"people"},":men_holding_hands_tone2:":{uc_base:"1f46c-1f3fc",uc_full:"1f46c-1f3fc",shortnames:[":men_holding_hands_medium_light_skin_tone:"],category:"people"},":men_holding_hands_tone3:":{uc_base:"1f46c-1f3fd",uc_full:"1f46c-1f3fd",shortnames:[":men_holding_hands_medium_skin_tone:"],category:"people"},":men_holding_hands_tone4:":{uc_base:"1f46c-1f3fe",uc_full:"1f46c-1f3fe",shortnames:[":men_holding_hands_medium_dark_skin_tone:"],category:"people"},":men_holding_hands_tone5:":{uc_base:"1f46c-1f3ff",uc_full:"1f46c-1f3ff",shortnames:[":men_holding_hands_dark_skin_tone:"],category:"people"},":merperson_tone1:":{uc_base:"1f9dc-1f3fb",uc_full:"1f9dc-1f3fb",shortnames:[":merperson_light_skin_tone:"],category:"people"},":merperson_tone2:":{uc_base:"1f9dc-1f3fc",uc_full:"1f9dc-1f3fc",shortnames:[":merperson_medium_light_skin_tone:"],category:"people"},":merperson_tone3:":{uc_base:"1f9dc-1f3fd",uc_full:"1f9dc-1f3fd",shortnames:[":merperson_medium_skin_tone:"],category:"people"},":merperson_tone4:":{uc_base:"1f9dc-1f3fe",uc_full:"1f9dc-1f3fe",shortnames:[":merperson_medium_dark_skin_tone:"],category:"people"},":merperson_tone5:":{uc_base:"1f9dc-1f3ff",uc_full:"1f9dc-1f3ff",shortnames:[":merperson_dark_skin_tone:"],category:"people"},":metal_tone1:":{uc_base:"1f918-1f3fb",uc_full:"1f918-1f3fb",shortnames:[":sign_of_the_horns_tone1:"],category:"people"},":metal_tone2:":{uc_base:"1f918-1f3fc",uc_full:"1f918-1f3fc",shortnames:[":sign_of_the_horns_tone2:"],category:"people"},":metal_tone3:":{uc_base:"1f918-1f3fd",uc_full:"1f918-1f3fd",shortnames:[":sign_of_the_horns_tone3:"],category:"people"},":metal_tone4:":{uc_base:"1f918-1f3fe",uc_full:"1f918-1f3fe",shortnames:[":sign_of_the_horns_tone4:"],category:"people"},":metal_tone5:":{uc_base:"1f918-1f3ff",uc_full:"1f918-1f3ff",shortnames:[":sign_of_the_horns_tone5:"],category:"people"},":middle_finger_tone1:":{uc_base:"1f595-1f3fb",uc_full:"1f595-1f3fb",shortnames:[":reversed_hand_with_middle_finger_extended_tone1:"],category:"people"},":middle_finger_tone2:":{uc_base:"1f595-1f3fc",uc_full:"1f595-1f3fc",shortnames:[":reversed_hand_with_middle_finger_extended_tone2:"],category:"people"},":middle_finger_tone3:":{uc_base:"1f595-1f3fd",uc_full:"1f595-1f3fd",shortnames:[":reversed_hand_with_middle_finger_extended_tone3:"],category:"people"},":middle_finger_tone4:":{uc_base:"1f595-1f3fe",uc_full:"1f595-1f3fe",shortnames:[":reversed_hand_with_middle_finger_extended_tone4:"],category:"people"},":middle_finger_tone5:":{uc_base:"1f595-1f3ff",uc_full:"1f595-1f3ff",shortnames:[":reversed_hand_with_middle_finger_extended_tone5:"],category:"people"},":mrs_claus_tone1:":{uc_base:"1f936-1f3fb",uc_full:"1f936-1f3fb",shortnames:[":mother_christmas_tone1:"],category:"people"},":mrs_claus_tone2:":{uc_base:"1f936-1f3fc",uc_full:"1f936-1f3fc",shortnames:[":mother_christmas_tone2:"],category:"people"},":mrs_claus_tone3:":{uc_base:"1f936-1f3fd",uc_full:"1f936-1f3fd",shortnames:[":mother_christmas_tone3:"],category:"people"},":mrs_claus_tone4:":{uc_base:"1f936-1f3fe",uc_full:"1f936-1f3fe",shortnames:[":mother_christmas_tone4:"],category:"people"},":mrs_claus_tone5:":{uc_base:"1f936-1f3ff",uc_full:"1f936-1f3ff",shortnames:[":mother_christmas_tone5:"],category:"people"},":muscle_tone1:":{uc_base:"1f4aa-1f3fb",uc_full:"1f4aa-1f3fb",shortnames:[],category:"people"},":muscle_tone2:":{uc_base:"1f4aa-1f3fc",uc_full:"1f4aa-1f3fc",shortnames:[],category:"people"},":muscle_tone3:":{uc_base:"1f4aa-1f3fd",uc_full:"1f4aa-1f3fd",shortnames:[],category:"people"},":muscle_tone4:":{uc_base:"1f4aa-1f3fe",uc_full:"1f4aa-1f3fe",shortnames:[],category:"people"},":muscle_tone5:":{uc_base:"1f4aa-1f3ff",uc_full:"1f4aa-1f3ff",shortnames:[],category:"people"},":mx_claus:":{uc_base:"1f9d1-1f384",uc_full:"1f9d1-200d-1f384",shortnames:[],category:"people"},":nail_care_tone1:":{uc_base:"1f485-1f3fb",uc_full:"1f485-1f3fb",shortnames:[],category:"people"},":nail_care_tone2:":{uc_base:"1f485-1f3fc",uc_full:"1f485-1f3fc",shortnames:[],category:"people"},":nail_care_tone3:":{uc_base:"1f485-1f3fd",uc_full:"1f485-1f3fd",shortnames:[],category:"people"},":nail_care_tone4:":{uc_base:"1f485-1f3fe",uc_full:"1f485-1f3fe",shortnames:[],category:"people"},":nail_care_tone5:":{uc_base:"1f485-1f3ff",uc_full:"1f485-1f3ff",shortnames:[],category:"people"},":ninja_tone1:":{uc_base:"1f977-1f3fb",uc_full:"1f977-1f3fb",shortnames:[":ninja_light_skin_tone:"],category:"people"},":ninja_tone2:":{uc_base:"1f977-1f3fc",uc_full:"1f977-1f3fc",shortnames:[":ninja_medium_light_skin_tone:"],category:"people"},":ninja_tone3:":{uc_base:"1f977-1f3fd",uc_full:"1f977-1f3fd",shortnames:[":ninja_medium_skin_tone:"],category:"people"},":ninja_tone4:":{uc_base:"1f977-1f3fe",uc_full:"1f977-1f3fe",shortnames:[":ninja_medium_dark_skin_tone:"],category:"people"},":ninja_tone5:":{uc_base:"1f977-1f3ff",uc_full:"1f977-1f3ff",shortnames:[":ninja_dark_skin_tone:"],category:"people"},":nose_tone1:":{uc_base:"1f443-1f3fb",uc_full:"1f443-1f3fb",shortnames:[],category:"people"},":nose_tone2:":{uc_base:"1f443-1f3fc",uc_full:"1f443-1f3fc",shortnames:[],category:"people"},":nose_tone3:":{uc_base:"1f443-1f3fd",uc_full:"1f443-1f3fd",shortnames:[],category:"people"},":nose_tone4:":{uc_base:"1f443-1f3fe",uc_full:"1f443-1f3fe",shortnames:[],category:"people"},":nose_tone5:":{uc_base:"1f443-1f3ff",uc_full:"1f443-1f3ff",shortnames:[],category:"people"},":office_worker:":{uc_base:"1f9d1-1f4bc",uc_full:"1f9d1-200d-1f4bc",shortnames:[],category:"people"},":ok_hand_tone1:":{uc_base:"1f44c-1f3fb",uc_full:"1f44c-1f3fb",shortnames:[],category:"people"},":ok_hand_tone2:":{uc_base:"1f44c-1f3fc",uc_full:"1f44c-1f3fc",shortnames:[],category:"people"},":ok_hand_tone3:":{uc_base:"1f44c-1f3fd",uc_full:"1f44c-1f3fd",shortnames:[],category:"people"},":ok_hand_tone4:":{uc_base:"1f44c-1f3fe",uc_full:"1f44c-1f3fe",shortnames:[],category:"people"},":ok_hand_tone5:":{uc_base:"1f44c-1f3ff",uc_full:"1f44c-1f3ff",shortnames:[],category:"people"},":older_adult_tone1:":{uc_base:"1f9d3-1f3fb",uc_full:"1f9d3-1f3fb",shortnames:[":older_adult_light_skin_tone:"],category:"people"},":older_adult_tone2:":{uc_base:"1f9d3-1f3fc",uc_full:"1f9d3-1f3fc",shortnames:[":older_adult_medium_light_skin_tone:"],category:"people"},":older_adult_tone3:":{uc_base:"1f9d3-1f3fd",uc_full:"1f9d3-1f3fd",shortnames:[":older_adult_medium_skin_tone:"],category:"people"},":older_adult_tone4:":{uc_base:"1f9d3-1f3fe",uc_full:"1f9d3-1f3fe",shortnames:[":older_adult_medium_dark_skin_tone:"],category:"people"},":older_adult_tone5:":{uc_base:"1f9d3-1f3ff",uc_full:"1f9d3-1f3ff",shortnames:[":older_adult_dark_skin_tone:"],category:"people"},":older_man_tone1:":{uc_base:"1f474-1f3fb",uc_full:"1f474-1f3fb",shortnames:[],category:"people"},":older_man_tone2:":{uc_base:"1f474-1f3fc",uc_full:"1f474-1f3fc",shortnames:[],category:"people"},":older_man_tone3:":{uc_base:"1f474-1f3fd",uc_full:"1f474-1f3fd",shortnames:[],category:"people"},":older_man_tone4:":{uc_base:"1f474-1f3fe",uc_full:"1f474-1f3fe",shortnames:[],category:"people"},":older_man_tone5:":{uc_base:"1f474-1f3ff",uc_full:"1f474-1f3ff",shortnames:[],category:"people"},":older_woman_tone1:":{uc_base:"1f475-1f3fb",uc_full:"1f475-1f3fb",shortnames:[":grandma_tone1:"],category:"people"},":older_woman_tone2:":{uc_base:"1f475-1f3fc",uc_full:"1f475-1f3fc",shortnames:[":grandma_tone2:"],category:"people"},":older_woman_tone3:":{uc_base:"1f475-1f3fd",uc_full:"1f475-1f3fd",shortnames:[":grandma_tone3:"],category:"people"},":older_woman_tone4:":{uc_base:"1f475-1f3fe",uc_full:"1f475-1f3fe",shortnames:[":grandma_tone4:"],category:"people"},":older_woman_tone5:":{uc_base:"1f475-1f3ff",uc_full:"1f475-1f3ff",shortnames:[":grandma_tone5:"],category:"people"},":open_hands_tone1:":{uc_base:"1f450-1f3fb",uc_full:"1f450-1f3fb",shortnames:[],category:"people"},":open_hands_tone2:":{uc_base:"1f450-1f3fc",uc_full:"1f450-1f3fc",shortnames:[],category:"people"},":open_hands_tone3:":{uc_base:"1f450-1f3fd",uc_full:"1f450-1f3fd",shortnames:[],category:"people"},":open_hands_tone4:":{uc_base:"1f450-1f3fe",uc_full:"1f450-1f3fe",shortnames:[],category:"people"},":open_hands_tone5:":{uc_base:"1f450-1f3ff",uc_full:"1f450-1f3ff",shortnames:[],category:"people"},":palms_up_together_tone1:":{uc_base:"1f932-1f3fb",uc_full:"1f932-1f3fb",shortnames:[":palms_up_together_light_skin_tone:"],category:"people"},":palms_up_together_tone2:":{uc_base:"1f932-1f3fc",uc_full:"1f932-1f3fc",shortnames:[":palms_up_together_medium_light_skin_tone:"],category:"people"},":palms_up_together_tone3:":{uc_base:"1f932-1f3fd",uc_full:"1f932-1f3fd",shortnames:[":palms_up_together_medium_skin_tone:"],category:"people"},":palms_up_together_tone4:":{uc_base:"1f932-1f3fe",uc_full:"1f932-1f3fe",shortnames:[":palms_up_together_medium_dark_skin_tone:"],category:"people"},":palms_up_together_tone5:":{uc_base:"1f932-1f3ff",uc_full:"1f932-1f3ff",shortnames:[":palms_up_together_dark_skin_tone:"],category:"people"},":person_bald:":{uc_base:"1f9d1-1f9b2",uc_full:"1f9d1-200d-1f9b2",shortnames:[],category:"people"},":person_biking_tone1:":{uc_base:"1f6b4-1f3fb",uc_full:"1f6b4-1f3fb",shortnames:[":bicyclist_tone1:"],category:"activity"},":person_biking_tone2:":{uc_base:"1f6b4-1f3fc",uc_full:"1f6b4-1f3fc",shortnames:[":bicyclist_tone2:"],category:"activity"},":person_biking_tone3:":{uc_base:"1f6b4-1f3fd",uc_full:"1f6b4-1f3fd",shortnames:[":bicyclist_tone3:"],category:"activity"},":person_biking_tone4:":{uc_base:"1f6b4-1f3fe",uc_full:"1f6b4-1f3fe",shortnames:[":bicyclist_tone4:"],category:"activity"},":person_biking_tone5:":{uc_base:"1f6b4-1f3ff",uc_full:"1f6b4-1f3ff",shortnames:[":bicyclist_tone5:"],category:"activity"},":person_bowing_tone1:":{uc_base:"1f647-1f3fb",uc_full:"1f647-1f3fb",shortnames:[":bow_tone1:"],category:"people"},":person_bowing_tone2:":{uc_base:"1f647-1f3fc",uc_full:"1f647-1f3fc",shortnames:[":bow_tone2:"],category:"people"},":person_bowing_tone3:":{uc_base:"1f647-1f3fd",uc_full:"1f647-1f3fd",shortnames:[":bow_tone3:"],category:"people"},":person_bowing_tone4:":{uc_base:"1f647-1f3fe",uc_full:"1f647-1f3fe",shortnames:[":bow_tone4:"],category:"people"},":person_bowing_tone5:":{uc_base:"1f647-1f3ff",uc_full:"1f647-1f3ff",shortnames:[":bow_tone5:"],category:"people"},":person_climbing_tone1:":{uc_base:"1f9d7-1f3fb",uc_full:"1f9d7-1f3fb",shortnames:[":person_climbing_light_skin_tone:"],category:"activity"},":person_climbing_tone2:":{uc_base:"1f9d7-1f3fc",uc_full:"1f9d7-1f3fc",shortnames:[":person_climbing_medium_light_skin_tone:"],category:"activity"},":person_climbing_tone3:":{uc_base:"1f9d7-1f3fd",uc_full:"1f9d7-1f3fd",shortnames:[":person_climbing_medium_skin_tone:"],category:"activity"},":person_climbing_tone4:":{uc_base:"1f9d7-1f3fe",uc_full:"1f9d7-1f3fe",shortnames:[":person_climbing_medium_dark_skin_tone:"],category:"activity"},":person_climbing_tone5:":{uc_base:"1f9d7-1f3ff",uc_full:"1f9d7-1f3ff",shortnames:[":person_climbing_dark_skin_tone:"],category:"activity"},":person_curly_hair:":{uc_base:"1f9d1-1f9b1",uc_full:"1f9d1-200d-1f9b1",shortnames:[],category:"people"},":person_doing_cartwheel_tone1:":{uc_base:"1f938-1f3fb",uc_full:"1f938-1f3fb",shortnames:[":cartwheel_tone1:"],category:"activity"},":person_doing_cartwheel_tone2:":{uc_base:"1f938-1f3fc",uc_full:"1f938-1f3fc",shortnames:[":cartwheel_tone2:"],category:"activity"},":person_doing_cartwheel_tone3:":{uc_base:"1f938-1f3fd",uc_full:"1f938-1f3fd",shortnames:[":cartwheel_tone3:"],category:"activity"},":person_doing_cartwheel_tone4:":{uc_base:"1f938-1f3fe",uc_full:"1f938-1f3fe",shortnames:[":cartwheel_tone4:"],category:"activity"},":person_doing_cartwheel_tone5:":{uc_base:"1f938-1f3ff",uc_full:"1f938-1f3ff",shortnames:[":cartwheel_tone5:"],category:"activity"},":person_facepalming_tone1:":{uc_base:"1f926-1f3fb",uc_full:"1f926-1f3fb",shortnames:[":face_palm_tone1:",":facepalm_tone1:"],category:"people"},":person_facepalming_tone2:":{uc_base:"1f926-1f3fc",uc_full:"1f926-1f3fc",shortnames:[":face_palm_tone2:",":facepalm_tone2:"],category:"people"},":person_facepalming_tone3:":{uc_base:"1f926-1f3fd",uc_full:"1f926-1f3fd",shortnames:[":face_palm_tone3:",":facepalm_tone3:"],category:"people"},":person_facepalming_tone4:":{uc_base:"1f926-1f3fe",uc_full:"1f926-1f3fe",shortnames:[":face_palm_tone4:",":facepalm_tone4:"],category:"people"},":person_facepalming_tone5:":{uc_base:"1f926-1f3ff",uc_full:"1f926-1f3ff",shortnames:[":face_palm_tone5:",":facepalm_tone5:"],category:"people"},":person_feeding_baby:":{uc_base:"1f9d1-1f37c",uc_full:"1f9d1-200d-1f37c",shortnames:[],category:"people"},":person_frowning_tone1:":{uc_base:"1f64d-1f3fb",uc_full:"1f64d-1f3fb",shortnames:[],category:"people"},":person_frowning_tone2:":{uc_base:"1f64d-1f3fc",uc_full:"1f64d-1f3fc",shortnames:[],category:"people"},":person_frowning_tone3:":{uc_base:"1f64d-1f3fd",uc_full:"1f64d-1f3fd",shortnames:[],category:"people"},":person_frowning_tone4:":{uc_base:"1f64d-1f3fe",uc_full:"1f64d-1f3fe",shortnames:[],category:"people"},":person_frowning_tone5:":{uc_base:"1f64d-1f3ff",uc_full:"1f64d-1f3ff",shortnames:[],category:"people"},":person_gesturing_no_tone1:":{uc_base:"1f645-1f3fb",uc_full:"1f645-1f3fb",shortnames:[":no_good_tone1:"],category:"people"},":person_gesturing_no_tone2:":{uc_base:"1f645-1f3fc",uc_full:"1f645-1f3fc",shortnames:[":no_good_tone2:"],category:"people"},":person_gesturing_no_tone3:":{uc_base:"1f645-1f3fd",uc_full:"1f645-1f3fd",shortnames:[":no_good_tone3:"],category:"people"},":person_gesturing_no_tone4:":{uc_base:"1f645-1f3fe",uc_full:"1f645-1f3fe",shortnames:[":no_good_tone4:"],category:"people"},":person_gesturing_no_tone5:":{uc_base:"1f645-1f3ff",uc_full:"1f645-1f3ff",shortnames:[":no_good_tone5:"],category:"people"},":person_gesturing_ok_tone1:":{uc_base:"1f646-1f3fb",uc_full:"1f646-1f3fb",shortnames:[":ok_woman_tone1:"],category:"people"},":person_gesturing_ok_tone2:":{uc_base:"1f646-1f3fc",uc_full:"1f646-1f3fc",shortnames:[":ok_woman_tone2:"],category:"people"},":person_gesturing_ok_tone3:":{uc_base:"1f646-1f3fd",uc_full:"1f646-1f3fd",shortnames:[":ok_woman_tone3:"],category:"people"},":person_gesturing_ok_tone4:":{uc_base:"1f646-1f3fe",uc_full:"1f646-1f3fe",shortnames:[":ok_woman_tone4:"],category:"people"},":person_gesturing_ok_tone5:":{uc_base:"1f646-1f3ff",uc_full:"1f646-1f3ff",shortnames:[":ok_woman_tone5:"],category:"people"},":person_getting_haircut_tone1:":{uc_base:"1f487-1f3fb",uc_full:"1f487-1f3fb",shortnames:[":haircut_tone1:"],category:"people"},":person_getting_haircut_tone2:":{uc_base:"1f487-1f3fc",uc_full:"1f487-1f3fc",shortnames:[":haircut_tone2:"],category:"people"},":person_getting_haircut_tone3:":{uc_base:"1f487-1f3fd",uc_full:"1f487-1f3fd",shortnames:[":haircut_tone3:"],category:"people"},":person_getting_haircut_tone4:":{uc_base:"1f487-1f3fe",uc_full:"1f487-1f3fe",shortnames:[":haircut_tone4:"],category:"people"},":person_getting_haircut_tone5:":{uc_base:"1f487-1f3ff",uc_full:"1f487-1f3ff",shortnames:[":haircut_tone5:"],category:"people"},":person_getting_massage_tone1:":{uc_base:"1f486-1f3fb",uc_full:"1f486-1f3fb",shortnames:[":massage_tone1:"],category:"people"},":person_getting_massage_tone2:":{uc_base:"1f486-1f3fc",uc_full:"1f486-1f3fc",shortnames:[":massage_tone2:"],category:"people"},":person_getting_massage_tone3:":{uc_base:"1f486-1f3fd",uc_full:"1f486-1f3fd",shortnames:[":massage_tone3:"],category:"people"},":person_getting_massage_tone4:":{uc_base:"1f486-1f3fe",uc_full:"1f486-1f3fe",shortnames:[":massage_tone4:"],category:"people"},":person_getting_massage_tone5:":{uc_base:"1f486-1f3ff",uc_full:"1f486-1f3ff",shortnames:[":massage_tone5:"],category:"people"},":person_golfing_tone1:":{uc_base:"1f3cc-1f3fb",uc_full:"1f3cc-1f3fb",shortnames:[":person_golfing_light_skin_tone:"],category:"activity"},":person_golfing_tone2:":{uc_base:"1f3cc-1f3fc",uc_full:"1f3cc-1f3fc",shortnames:[":person_golfing_medium_light_skin_tone:"],category:"activity"},":person_golfing_tone3:":{uc_base:"1f3cc-1f3fd",uc_full:"1f3cc-1f3fd",shortnames:[":person_golfing_medium_skin_tone:"],category:"activity"},":person_golfing_tone4:":{uc_base:"1f3cc-1f3fe",uc_full:"1f3cc-1f3fe",shortnames:[":person_golfing_medium_dark_skin_tone:"],category:"activity"},":person_golfing_tone5:":{uc_base:"1f3cc-1f3ff",uc_full:"1f3cc-1f3ff",shortnames:[":person_golfing_dark_skin_tone:"],category:"activity"},":person_in_bed_tone1:":{uc_base:"1f6cc-1f3fb",uc_full:"1f6cc-1f3fb",shortnames:[":person_in_bed_light_skin_tone:"],category:"objects"},":person_in_bed_tone2:":{uc_base:"1f6cc-1f3fc",uc_full:"1f6cc-1f3fc",shortnames:[":person_in_bed_medium_light_skin_tone:"],category:"objects"},":person_in_bed_tone3:":{uc_base:"1f6cc-1f3fd",uc_full:"1f6cc-1f3fd",shortnames:[":person_in_bed_medium_skin_tone:"],category:"objects"},":person_in_bed_tone4:":{uc_base:"1f6cc-1f3fe",uc_full:"1f6cc-1f3fe",shortnames:[":person_in_bed_medium_dark_skin_tone:"],category:"objects"},":person_in_bed_tone5:":{uc_base:"1f6cc-1f3ff",uc_full:"1f6cc-1f3ff",shortnames:[":person_in_bed_dark_skin_tone:"],category:"objects"},":person_in_lotus_position_tone1:":{uc_base:"1f9d8-1f3fb",uc_full:"1f9d8-1f3fb",shortnames:[":person_in_lotus_position_light_skin_tone:"],category:"activity"},":person_in_lotus_position_tone2:":{uc_base:"1f9d8-1f3fc",uc_full:"1f9d8-1f3fc",shortnames:[":person_in_lotus_position_medium_light_skin_tone:"],category:"activity"},":person_in_lotus_position_tone3:":{uc_base:"1f9d8-1f3fd",uc_full:"1f9d8-1f3fd",shortnames:[":person_in_lotus_position_medium_skin_tone:"],category:"activity"},":person_in_lotus_position_tone4:":{uc_base:"1f9d8-1f3fe",uc_full:"1f9d8-1f3fe",shortnames:[":person_in_lotus_position_medium_dark_skin_tone:"],category:"activity"},":person_in_lotus_position_tone5:":{uc_base:"1f9d8-1f3ff",uc_full:"1f9d8-1f3ff",shortnames:[":person_in_lotus_position_dark_skin_tone:"],category:"activity"},":person_in_manual_wheelchair:":{uc_base:"1f9d1-1f9bd",uc_full:"1f9d1-200d-1f9bd",shortnames:[],category:"people"},":person_in_motorized_wheelchair:":{uc_base:"1f9d1-1f9bc",uc_full:"1f9d1-200d-1f9bc",shortnames:[],category:"people"},":person_in_steamy_room_tone1:":{uc_base:"1f9d6-1f3fb",uc_full:"1f9d6-1f3fb",shortnames:[":person_in_steamy_room_light_skin_tone:"],category:"people"},":person_in_steamy_room_tone2:":{uc_base:"1f9d6-1f3fc",uc_full:"1f9d6-1f3fc",shortnames:[":person_in_steamy_room_medium_light_skin_tone:"],category:"people"},":person_in_steamy_room_tone3:":{uc_base:"1f9d6-1f3fd",uc_full:"1f9d6-1f3fd",shortnames:[":person_in_steamy_room_medium_skin_tone:"],category:"people"},":person_in_steamy_room_tone4:":{uc_base:"1f9d6-1f3fe",uc_full:"1f9d6-1f3fe",shortnames:[":person_in_steamy_room_medium_dark_skin_tone:"],category:"people"},":person_in_steamy_room_tone5:":{uc_base:"1f9d6-1f3ff",uc_full:"1f9d6-1f3ff",shortnames:[":person_in_steamy_room_dark_skin_tone:"],category:"people"},":person_in_tuxedo_tone1:":{uc_base:"1f935-1f3fb",uc_full:"1f935-1f3fb",shortnames:[":tuxedo_tone1:"],category:"people"},":person_in_tuxedo_tone2:":{uc_base:"1f935-1f3fc",uc_full:"1f935-1f3fc",shortnames:[":tuxedo_tone2:"],category:"people"},":person_in_tuxedo_tone3:":{uc_base:"1f935-1f3fd",uc_full:"1f935-1f3fd",shortnames:[":tuxedo_tone3:"],category:"people"},":person_in_tuxedo_tone4:":{uc_base:"1f935-1f3fe",uc_full:"1f935-1f3fe",shortnames:[":tuxedo_tone4:"],category:"people"},":person_in_tuxedo_tone5:":{uc_base:"1f935-1f3ff",uc_full:"1f935-1f3ff",shortnames:[":tuxedo_tone5:"],category:"people"},":person_juggling_tone1:":{uc_base:"1f939-1f3fb",uc_full:"1f939-1f3fb",shortnames:[":juggling_tone1:",":juggler_tone1:"],category:"activity"},":person_juggling_tone2:":{uc_base:"1f939-1f3fc",uc_full:"1f939-1f3fc",shortnames:[":juggling_tone2:",":juggler_tone2:"],category:"activity"},":person_juggling_tone3:":{uc_base:"1f939-1f3fd",uc_full:"1f939-1f3fd",shortnames:[":juggling_tone3:",":juggler_tone3:"],category:"activity"},":person_juggling_tone4:":{uc_base:"1f939-1f3fe",uc_full:"1f939-1f3fe",shortnames:[":juggling_tone4:",":juggler_tone4:"],category:"activity"},":person_juggling_tone5:":{uc_base:"1f939-1f3ff",uc_full:"1f939-1f3ff",shortnames:[":juggling_tone5:",":juggler_tone5:"],category:"activity"},":person_kneeling_tone1:":{uc_base:"1f9ce-1f3fb",uc_full:"1f9ce-1f3fb",shortnames:[":person_kneeling_light_skin_tone:"],category:"people"},":person_kneeling_tone2:":{uc_base:"1f9ce-1f3fc",uc_full:"1f9ce-1f3fc",shortnames:[":person_kneeling_medium_light_skin_tone:"],category:"people"},":person_kneeling_tone3:":{uc_base:"1f9ce-1f3fd",uc_full:"1f9ce-1f3fd",shortnames:[":person_kneeling_medium_skin_tone:"],category:"people"},":person_kneeling_tone4:":{uc_base:"1f9ce-1f3fe",uc_full:"1f9ce-1f3fe",shortnames:[":person_kneeling_medium_dark_skin_tone:"],category:"people"},":person_kneeling_tone5:":{uc_base:"1f9ce-1f3ff",uc_full:"1f9ce-1f3ff",shortnames:[":person_kneeling_dark_skin_tone:"],category:"people"},":person_lifting_weights_tone1:":{uc_base:"1f3cb-1f3fb",uc_full:"1f3cb-1f3fb",shortnames:[":lifter_tone1:",":weight_lifter_tone1:"],category:"activity"},":person_lifting_weights_tone2:":{uc_base:"1f3cb-1f3fc",uc_full:"1f3cb-1f3fc",shortnames:[":lifter_tone2:",":weight_lifter_tone2:"],category:"activity"},":person_lifting_weights_tone3:":{uc_base:"1f3cb-1f3fd",uc_full:"1f3cb-1f3fd",
shortnames:[":lifter_tone3:",":weight_lifter_tone3:"],category:"activity"},":person_lifting_weights_tone4:":{uc_base:"1f3cb-1f3fe",uc_full:"1f3cb-1f3fe",shortnames:[":lifter_tone4:",":weight_lifter_tone4:"],category:"activity"},":person_lifting_weights_tone5:":{uc_base:"1f3cb-1f3ff",uc_full:"1f3cb-1f3ff",shortnames:[":lifter_tone5:",":weight_lifter_tone5:"],category:"activity"},":person_mountain_biking_tone1:":{uc_base:"1f6b5-1f3fb",uc_full:"1f6b5-1f3fb",shortnames:[":mountain_bicyclist_tone1:"],category:"activity"},":person_mountain_biking_tone2:":{uc_base:"1f6b5-1f3fc",uc_full:"1f6b5-1f3fc",shortnames:[":mountain_bicyclist_tone2:"],category:"activity"},":person_mountain_biking_tone3:":{uc_base:"1f6b5-1f3fd",uc_full:"1f6b5-1f3fd",shortnames:[":mountain_bicyclist_tone3:"],category:"activity"},":person_mountain_biking_tone4:":{uc_base:"1f6b5-1f3fe",uc_full:"1f6b5-1f3fe",shortnames:[":mountain_bicyclist_tone4:"],category:"activity"},":person_mountain_biking_tone5:":{uc_base:"1f6b5-1f3ff",uc_full:"1f6b5-1f3ff",shortnames:[":mountain_bicyclist_tone5:"],category:"activity"},":person_playing_handball_tone1:":{uc_base:"1f93e-1f3fb",uc_full:"1f93e-1f3fb",shortnames:[":handball_tone1:"],category:"activity"},":person_playing_handball_tone2:":{uc_base:"1f93e-1f3fc",uc_full:"1f93e-1f3fc",shortnames:[":handball_tone2:"],category:"activity"},":person_playing_handball_tone3:":{uc_base:"1f93e-1f3fd",uc_full:"1f93e-1f3fd",shortnames:[":handball_tone3:"],category:"activity"},":person_playing_handball_tone4:":{uc_base:"1f93e-1f3fe",uc_full:"1f93e-1f3fe",shortnames:[":handball_tone4:"],category:"activity"},":person_playing_handball_tone5:":{uc_base:"1f93e-1f3ff",uc_full:"1f93e-1f3ff",shortnames:[":handball_tone5:"],category:"activity"},":person_playing_water_polo_tone1:":{uc_base:"1f93d-1f3fb",uc_full:"1f93d-1f3fb",shortnames:[":water_polo_tone1:"],category:"activity"},":person_playing_water_polo_tone2:":{uc_base:"1f93d-1f3fc",uc_full:"1f93d-1f3fc",shortnames:[":water_polo_tone2:"],category:"activity"},":person_playing_water_polo_tone3:":{uc_base:"1f93d-1f3fd",uc_full:"1f93d-1f3fd",shortnames:[":water_polo_tone3:"],category:"activity"},":person_playing_water_polo_tone4:":{uc_base:"1f93d-1f3fe",uc_full:"1f93d-1f3fe",shortnames:[":water_polo_tone4:"],category:"activity"},":person_playing_water_polo_tone5:":{uc_base:"1f93d-1f3ff",uc_full:"1f93d-1f3ff",shortnames:[":water_polo_tone5:"],category:"activity"},":person_pouting_tone1:":{uc_base:"1f64e-1f3fb",uc_full:"1f64e-1f3fb",shortnames:[":person_with_pouting_face_tone1:"],category:"people"},":person_pouting_tone2:":{uc_base:"1f64e-1f3fc",uc_full:"1f64e-1f3fc",shortnames:[":person_with_pouting_face_tone2:"],category:"people"},":person_pouting_tone3:":{uc_base:"1f64e-1f3fd",uc_full:"1f64e-1f3fd",shortnames:[":person_with_pouting_face_tone3:"],category:"people"},":person_pouting_tone4:":{uc_base:"1f64e-1f3fe",uc_full:"1f64e-1f3fe",shortnames:[":person_with_pouting_face_tone4:"],category:"people"},":person_pouting_tone5:":{uc_base:"1f64e-1f3ff",uc_full:"1f64e-1f3ff",shortnames:[":person_with_pouting_face_tone5:"],category:"people"},":person_raising_hand_tone1:":{uc_base:"1f64b-1f3fb",uc_full:"1f64b-1f3fb",shortnames:[":raising_hand_tone1:"],category:"people"},":person_raising_hand_tone2:":{uc_base:"1f64b-1f3fc",uc_full:"1f64b-1f3fc",shortnames:[":raising_hand_tone2:"],category:"people"},":person_raising_hand_tone3:":{uc_base:"1f64b-1f3fd",uc_full:"1f64b-1f3fd",shortnames:[":raising_hand_tone3:"],category:"people"},":person_raising_hand_tone4:":{uc_base:"1f64b-1f3fe",uc_full:"1f64b-1f3fe",shortnames:[":raising_hand_tone4:"],category:"people"},":person_raising_hand_tone5:":{uc_base:"1f64b-1f3ff",uc_full:"1f64b-1f3ff",shortnames:[":raising_hand_tone5:"],category:"people"},":person_red_hair:":{uc_base:"1f9d1-1f9b0",uc_full:"1f9d1-200d-1f9b0",shortnames:[],category:"people"},":person_rowing_boat_tone1:":{uc_base:"1f6a3-1f3fb",uc_full:"1f6a3-1f3fb",shortnames:[":rowboat_tone1:"],category:"activity"},":person_rowing_boat_tone2:":{uc_base:"1f6a3-1f3fc",uc_full:"1f6a3-1f3fc",shortnames:[":rowboat_tone2:"],category:"activity"},":person_rowing_boat_tone3:":{uc_base:"1f6a3-1f3fd",uc_full:"1f6a3-1f3fd",shortnames:[":rowboat_tone3:"],category:"activity"},":person_rowing_boat_tone4:":{uc_base:"1f6a3-1f3fe",uc_full:"1f6a3-1f3fe",shortnames:[":rowboat_tone4:"],category:"activity"},":person_rowing_boat_tone5:":{uc_base:"1f6a3-1f3ff",uc_full:"1f6a3-1f3ff",shortnames:[":rowboat_tone5:"],category:"activity"},":person_running_tone1:":{uc_base:"1f3c3-1f3fb",uc_full:"1f3c3-1f3fb",shortnames:[":runner_tone1:"],category:"people"},":person_running_tone2:":{uc_base:"1f3c3-1f3fc",uc_full:"1f3c3-1f3fc",shortnames:[":runner_tone2:"],category:"people"},":person_running_tone3:":{uc_base:"1f3c3-1f3fd",uc_full:"1f3c3-1f3fd",shortnames:[":runner_tone3:"],category:"people"},":person_running_tone4:":{uc_base:"1f3c3-1f3fe",uc_full:"1f3c3-1f3fe",shortnames:[":runner_tone4:"],category:"people"},":person_running_tone5:":{uc_base:"1f3c3-1f3ff",uc_full:"1f3c3-1f3ff",shortnames:[":runner_tone5:"],category:"people"},":person_shrugging_tone1:":{uc_base:"1f937-1f3fb",uc_full:"1f937-1f3fb",shortnames:[":shrug_tone1:"],category:"people"},":person_shrugging_tone2:":{uc_base:"1f937-1f3fc",uc_full:"1f937-1f3fc",shortnames:[":shrug_tone2:"],category:"people"},":person_shrugging_tone3:":{uc_base:"1f937-1f3fd",uc_full:"1f937-1f3fd",shortnames:[":shrug_tone3:"],category:"people"},":person_shrugging_tone4:":{uc_base:"1f937-1f3fe",uc_full:"1f937-1f3fe",shortnames:[":shrug_tone4:"],category:"people"},":person_shrugging_tone5:":{uc_base:"1f937-1f3ff",uc_full:"1f937-1f3ff",shortnames:[":shrug_tone5:"],category:"people"},":person_standing_tone1:":{uc_base:"1f9cd-1f3fb",uc_full:"1f9cd-1f3fb",shortnames:[":person_standing_light_skin_tone:"],category:"people"},":person_standing_tone2:":{uc_base:"1f9cd-1f3fc",uc_full:"1f9cd-1f3fc",shortnames:[":person_standing_medium_light_skin_tone:"],category:"people"},":person_standing_tone3:":{uc_base:"1f9cd-1f3fd",uc_full:"1f9cd-1f3fd",shortnames:[":person_standing_medium_skin_tone:"],category:"people"},":person_standing_tone4:":{uc_base:"1f9cd-1f3fe",uc_full:"1f9cd-1f3fe",shortnames:[":person_standing_medium_dark_skin_tone:"],category:"people"},":person_standing_tone5:":{uc_base:"1f9cd-1f3ff",uc_full:"1f9cd-1f3ff",shortnames:[":person_standing_dark_skin_tone:"],category:"people"},":person_surfing_tone1:":{uc_base:"1f3c4-1f3fb",uc_full:"1f3c4-1f3fb",shortnames:[":surfer_tone1:"],category:"activity"},":person_surfing_tone2:":{uc_base:"1f3c4-1f3fc",uc_full:"1f3c4-1f3fc",shortnames:[":surfer_tone2:"],category:"activity"},":person_surfing_tone3:":{uc_base:"1f3c4-1f3fd",uc_full:"1f3c4-1f3fd",shortnames:[":surfer_tone3:"],category:"activity"},":person_surfing_tone4:":{uc_base:"1f3c4-1f3fe",uc_full:"1f3c4-1f3fe",shortnames:[":surfer_tone4:"],category:"activity"},":person_surfing_tone5:":{uc_base:"1f3c4-1f3ff",uc_full:"1f3c4-1f3ff",shortnames:[":surfer_tone5:"],category:"activity"},":person_swimming_tone1:":{uc_base:"1f3ca-1f3fb",uc_full:"1f3ca-1f3fb",shortnames:[":swimmer_tone1:"],category:"activity"},":person_swimming_tone2:":{uc_base:"1f3ca-1f3fc",uc_full:"1f3ca-1f3fc",shortnames:[":swimmer_tone2:"],category:"activity"},":person_swimming_tone3:":{uc_base:"1f3ca-1f3fd",uc_full:"1f3ca-1f3fd",shortnames:[":swimmer_tone3:"],category:"activity"},":person_swimming_tone4:":{uc_base:"1f3ca-1f3fe",uc_full:"1f3ca-1f3fe",shortnames:[":swimmer_tone4:"],category:"activity"},":person_swimming_tone5:":{uc_base:"1f3ca-1f3ff",uc_full:"1f3ca-1f3ff",shortnames:[":swimmer_tone5:"],category:"activity"},":person_tipping_hand_tone1:":{uc_base:"1f481-1f3fb",uc_full:"1f481-1f3fb",shortnames:[":information_desk_person_tone1:"],category:"people"},":person_tipping_hand_tone2:":{uc_base:"1f481-1f3fc",uc_full:"1f481-1f3fc",shortnames:[":information_desk_person_tone2:"],category:"people"},":person_tipping_hand_tone3:":{uc_base:"1f481-1f3fd",uc_full:"1f481-1f3fd",shortnames:[":information_desk_person_tone3:"],category:"people"},":person_tipping_hand_tone4:":{uc_base:"1f481-1f3fe",uc_full:"1f481-1f3fe",shortnames:[":information_desk_person_tone4:"],category:"people"},":person_tipping_hand_tone5:":{uc_base:"1f481-1f3ff",uc_full:"1f481-1f3ff",shortnames:[":information_desk_person_tone5:"],category:"people"},":person_walking_tone1:":{uc_base:"1f6b6-1f3fb",uc_full:"1f6b6-1f3fb",shortnames:[":walking_tone1:"],category:"people"},":person_walking_tone2:":{uc_base:"1f6b6-1f3fc",uc_full:"1f6b6-1f3fc",shortnames:[":walking_tone2:"],category:"people"},":person_walking_tone3:":{uc_base:"1f6b6-1f3fd",uc_full:"1f6b6-1f3fd",shortnames:[":walking_tone3:"],category:"people"},":person_walking_tone4:":{uc_base:"1f6b6-1f3fe",uc_full:"1f6b6-1f3fe",shortnames:[":walking_tone4:"],category:"people"},":person_walking_tone5:":{uc_base:"1f6b6-1f3ff",uc_full:"1f6b6-1f3ff",shortnames:[":walking_tone5:"],category:"people"},":person_wearing_turban_tone1:":{uc_base:"1f473-1f3fb",uc_full:"1f473-1f3fb",shortnames:[":man_with_turban_tone1:"],category:"people"},":person_wearing_turban_tone2:":{uc_base:"1f473-1f3fc",uc_full:"1f473-1f3fc",shortnames:[":man_with_turban_tone2:"],category:"people"},":person_wearing_turban_tone3:":{uc_base:"1f473-1f3fd",uc_full:"1f473-1f3fd",shortnames:[":man_with_turban_tone3:"],category:"people"},":person_wearing_turban_tone4:":{uc_base:"1f473-1f3fe",uc_full:"1f473-1f3fe",shortnames:[":man_with_turban_tone4:"],category:"people"},":person_wearing_turban_tone5:":{uc_base:"1f473-1f3ff",uc_full:"1f473-1f3ff",shortnames:[":man_with_turban_tone5:"],category:"people"},":person_white_hair:":{uc_base:"1f9d1-1f9b3",uc_full:"1f9d1-200d-1f9b3",shortnames:[],category:"people"},":person_with_probing_cane:":{uc_base:"1f9d1-1f9af",uc_full:"1f9d1-200d-1f9af",shortnames:[],category:"people"},":person_with_veil_tone1:":{uc_base:"1f470-1f3fb",uc_full:"1f470-1f3fb",shortnames:[],category:"people"},":person_with_veil_tone2:":{uc_base:"1f470-1f3fc",uc_full:"1f470-1f3fc",shortnames:[],category:"people"},":person_with_veil_tone3:":{uc_base:"1f470-1f3fd",uc_full:"1f470-1f3fd",shortnames:[],category:"people"},":person_with_veil_tone4:":{uc_base:"1f470-1f3fe",uc_full:"1f470-1f3fe",shortnames:[],category:"people"},":person_with_veil_tone5:":{uc_base:"1f470-1f3ff",uc_full:"1f470-1f3ff",shortnames:[],category:"people"},":pinched_fingers_tone1:":{uc_base:"1f90c-1f3fb",uc_full:"1f90c-1f3fb",shortnames:[":pinched_fingers_light_skin_tone:"],category:"people"},":pinched_fingers_tone2:":{uc_base:"1f90c-1f3fc",uc_full:"1f90c-1f3fc",shortnames:[":pinched_fingers_medium_light_skin_tone:"],category:"people"},":pinched_fingers_tone3:":{uc_base:"1f90c-1f3fd",uc_full:"1f90c-1f3fd",shortnames:[":pinched_fingers_medium_skin_tone:"],category:"people"},":pinched_fingers_tone4:":{uc_base:"1f90c-1f3fe",uc_full:"1f90c-1f3fe",shortnames:[":pinched_fingers_medium_dark_skin_tone:"],category:"people"},":pinched_fingers_tone5:":{uc_base:"1f90c-1f3ff",uc_full:"1f90c-1f3ff",shortnames:[":pinched_fingers_dark_skin_tone:"],category:"people"},":pinching_hand_tone1:":{uc_base:"1f90f-1f3fb",uc_full:"1f90f-1f3fb",shortnames:[":pinching_hand_light_skin_tone:"],category:"people"},":pinching_hand_tone2:":{uc_base:"1f90f-1f3fc",uc_full:"1f90f-1f3fc",shortnames:[":pinching_hand_medium_light_skin_tone:"],category:"people"},":pinching_hand_tone3:":{uc_base:"1f90f-1f3fd",uc_full:"1f90f-1f3fd",shortnames:[":pinching_hand_medium_skin_tone:"],category:"people"},":pinching_hand_tone4:":{uc_base:"1f90f-1f3fe",uc_full:"1f90f-1f3fe",shortnames:[":pinching_hand_medium_dark_skin_tone:"],category:"people"},":pinching_hand_tone5:":{uc_base:"1f90f-1f3ff",uc_full:"1f90f-1f3ff",shortnames:[":pinching_hand_dark_skin_tone:"],category:"people"},":point_down_tone1:":{uc_base:"1f447-1f3fb",uc_full:"1f447-1f3fb",shortnames:[],category:"people"},":point_down_tone2:":{uc_base:"1f447-1f3fc",uc_full:"1f447-1f3fc",shortnames:[],category:"people"},":point_down_tone3:":{uc_base:"1f447-1f3fd",uc_full:"1f447-1f3fd",shortnames:[],category:"people"},":point_down_tone4:":{uc_base:"1f447-1f3fe",uc_full:"1f447-1f3fe",shortnames:[],category:"people"},":point_down_tone5:":{uc_base:"1f447-1f3ff",uc_full:"1f447-1f3ff",shortnames:[],category:"people"},":point_left_tone1:":{uc_base:"1f448-1f3fb",uc_full:"1f448-1f3fb",shortnames:[],category:"people"},":point_left_tone2:":{uc_base:"1f448-1f3fc",uc_full:"1f448-1f3fc",shortnames:[],category:"people"},":point_left_tone3:":{uc_base:"1f448-1f3fd",uc_full:"1f448-1f3fd",shortnames:[],category:"people"},":point_left_tone4:":{uc_base:"1f448-1f3fe",uc_full:"1f448-1f3fe",shortnames:[],category:"people"},":point_left_tone5:":{uc_base:"1f448-1f3ff",uc_full:"1f448-1f3ff",shortnames:[],category:"people"},":point_right_tone1:":{uc_base:"1f449-1f3fb",uc_full:"1f449-1f3fb",shortnames:[],category:"people"},":point_right_tone2:":{uc_base:"1f449-1f3fc",uc_full:"1f449-1f3fc",shortnames:[],category:"people"},":point_right_tone3:":{uc_base:"1f449-1f3fd",uc_full:"1f449-1f3fd",shortnames:[],category:"people"},":point_right_tone4:":{uc_base:"1f449-1f3fe",uc_full:"1f449-1f3fe",shortnames:[],category:"people"},":point_right_tone5:":{uc_base:"1f449-1f3ff",uc_full:"1f449-1f3ff",shortnames:[],category:"people"},":point_up_2_tone1:":{uc_base:"1f446-1f3fb",uc_full:"1f446-1f3fb",shortnames:[],category:"people"},":point_up_2_tone2:":{uc_base:"1f446-1f3fc",uc_full:"1f446-1f3fc",shortnames:[],category:"people"},":point_up_2_tone3:":{uc_base:"1f446-1f3fd",uc_full:"1f446-1f3fd",shortnames:[],category:"people"},":point_up_2_tone4:":{uc_base:"1f446-1f3fe",uc_full:"1f446-1f3fe",shortnames:[],category:"people"},":point_up_2_tone5:":{uc_base:"1f446-1f3ff",uc_full:"1f446-1f3ff",shortnames:[],category:"people"},":police_officer_tone1:":{uc_base:"1f46e-1f3fb",uc_full:"1f46e-1f3fb",shortnames:[":cop_tone1:"],category:"people"},":police_officer_tone2:":{uc_base:"1f46e-1f3fc",uc_full:"1f46e-1f3fc",shortnames:[":cop_tone2:"],category:"people"},":police_officer_tone3:":{uc_base:"1f46e-1f3fd",uc_full:"1f46e-1f3fd",shortnames:[":cop_tone3:"],category:"people"},":police_officer_tone4:":{uc_base:"1f46e-1f3fe",uc_full:"1f46e-1f3fe",shortnames:[":cop_tone4:"],category:"people"},":police_officer_tone5:":{uc_base:"1f46e-1f3ff",uc_full:"1f46e-1f3ff",shortnames:[":cop_tone5:"],category:"people"},":pray_tone1:":{uc_base:"1f64f-1f3fb",uc_full:"1f64f-1f3fb",shortnames:[],category:"people"},":pray_tone2:":{uc_base:"1f64f-1f3fc",uc_full:"1f64f-1f3fc",shortnames:[],category:"people"},":pray_tone3:":{uc_base:"1f64f-1f3fd",uc_full:"1f64f-1f3fd",shortnames:[],category:"people"},":pray_tone4:":{uc_base:"1f64f-1f3fe",uc_full:"1f64f-1f3fe",shortnames:[],category:"people"},":pray_tone5:":{uc_base:"1f64f-1f3ff",uc_full:"1f64f-1f3ff",shortnames:[],category:"people"},":pregnant_woman_tone1:":{uc_base:"1f930-1f3fb",uc_full:"1f930-1f3fb",shortnames:[":expecting_woman_tone1:"],category:"people"},":pregnant_woman_tone2:":{uc_base:"1f930-1f3fc",uc_full:"1f930-1f3fc",shortnames:[":expecting_woman_tone2:"],category:"people"},":pregnant_woman_tone3:":{uc_base:"1f930-1f3fd",uc_full:"1f930-1f3fd",shortnames:[":expecting_woman_tone3:"],category:"people"},":pregnant_woman_tone4:":{uc_base:"1f930-1f3fe",uc_full:"1f930-1f3fe",shortnames:[":expecting_woman_tone4:"],category:"people"},":pregnant_woman_tone5:":{uc_base:"1f930-1f3ff",uc_full:"1f930-1f3ff",shortnames:[":expecting_woman_tone5:"],category:"people"},":prince_tone1:":{uc_base:"1f934-1f3fb",uc_full:"1f934-1f3fb",shortnames:[],category:"people"},":prince_tone2:":{uc_base:"1f934-1f3fc",uc_full:"1f934-1f3fc",shortnames:[],category:"people"},":prince_tone3:":{uc_base:"1f934-1f3fd",uc_full:"1f934-1f3fd",shortnames:[],category:"people"},":prince_tone4:":{uc_base:"1f934-1f3fe",uc_full:"1f934-1f3fe",shortnames:[],category:"people"},":prince_tone5:":{uc_base:"1f934-1f3ff",uc_full:"1f934-1f3ff",shortnames:[],category:"people"},":princess_tone1:":{uc_base:"1f478-1f3fb",uc_full:"1f478-1f3fb",shortnames:[],category:"people"},":princess_tone2:":{uc_base:"1f478-1f3fc",uc_full:"1f478-1f3fc",shortnames:[],category:"people"},":princess_tone3:":{uc_base:"1f478-1f3fd",uc_full:"1f478-1f3fd",shortnames:[],category:"people"},":princess_tone4:":{uc_base:"1f478-1f3fe",uc_full:"1f478-1f3fe",shortnames:[],category:"people"},":princess_tone5:":{uc_base:"1f478-1f3ff",uc_full:"1f478-1f3ff",shortnames:[],category:"people"},":punch_tone1:":{uc_base:"1f44a-1f3fb",uc_full:"1f44a-1f3fb",shortnames:[],category:"people"},":punch_tone2:":{uc_base:"1f44a-1f3fc",uc_full:"1f44a-1f3fc",shortnames:[],category:"people"},":punch_tone3:":{uc_base:"1f44a-1f3fd",uc_full:"1f44a-1f3fd",shortnames:[],category:"people"},":punch_tone4:":{uc_base:"1f44a-1f3fe",uc_full:"1f44a-1f3fe",shortnames:[],category:"people"},":punch_tone5:":{uc_base:"1f44a-1f3ff",uc_full:"1f44a-1f3ff",shortnames:[],category:"people"},":rainbow_flag:":{uc_base:"1f3f3-1f308",uc_full:"1f3f3-fe0f-200d-1f308",shortnames:[":gay_pride_flag:"],category:"flags"},":raised_back_of_hand_tone1:":{uc_base:"1f91a-1f3fb",uc_full:"1f91a-1f3fb",shortnames:[":back_of_hand_tone1:"],category:"people"},":raised_back_of_hand_tone2:":{uc_base:"1f91a-1f3fc",uc_full:"1f91a-1f3fc",shortnames:[":back_of_hand_tone2:"],category:"people"},":raised_back_of_hand_tone3:":{uc_base:"1f91a-1f3fd",uc_full:"1f91a-1f3fd",shortnames:[":back_of_hand_tone3:"],category:"people"},":raised_back_of_hand_tone4:":{uc_base:"1f91a-1f3fe",uc_full:"1f91a-1f3fe",shortnames:[":back_of_hand_tone4:"],category:"people"},":raised_back_of_hand_tone5:":{uc_base:"1f91a-1f3ff",uc_full:"1f91a-1f3ff",shortnames:[":back_of_hand_tone5:"],category:"people"},":raised_hands_tone1:":{uc_base:"1f64c-1f3fb",uc_full:"1f64c-1f3fb",shortnames:[],category:"people"},":raised_hands_tone2:":{uc_base:"1f64c-1f3fc",uc_full:"1f64c-1f3fc",shortnames:[],category:"people"},":raised_hands_tone3:":{uc_base:"1f64c-1f3fd",uc_full:"1f64c-1f3fd",shortnames:[],category:"people"},":raised_hands_tone4:":{uc_base:"1f64c-1f3fe",uc_full:"1f64c-1f3fe",shortnames:[],category:"people"},":raised_hands_tone5:":{uc_base:"1f64c-1f3ff",uc_full:"1f64c-1f3ff",shortnames:[],category:"people"},":right_facing_fist_tone1:":{uc_base:"1f91c-1f3fb",uc_full:"1f91c-1f3fb",shortnames:[":right_fist_tone1:"],category:"people"},":right_facing_fist_tone2:":{uc_base:"1f91c-1f3fc",uc_full:"1f91c-1f3fc",shortnames:[":right_fist_tone2:"],category:"people"},":right_facing_fist_tone3:":{uc_base:"1f91c-1f3fd",uc_full:"1f91c-1f3fd",shortnames:[":right_fist_tone3:"],category:"people"},":right_facing_fist_tone4:":{uc_base:"1f91c-1f3fe",uc_full:"1f91c-1f3fe",shortnames:[":right_fist_tone4:"],category:"people"},":right_facing_fist_tone5:":{uc_base:"1f91c-1f3ff",uc_full:"1f91c-1f3ff",shortnames:[":right_fist_tone5:"],category:"people"},":santa_tone1:":{uc_base:"1f385-1f3fb",uc_full:"1f385-1f3fb",shortnames:[],category:"people"},":santa_tone2:":{uc_base:"1f385-1f3fc",uc_full:"1f385-1f3fc",shortnames:[],category:"people"},":santa_tone3:":{uc_base:"1f385-1f3fd",uc_full:"1f385-1f3fd",shortnames:[],category:"people"},":santa_tone4:":{uc_base:"1f385-1f3fe",uc_full:"1f385-1f3fe",shortnames:[],category:"people"},":santa_tone5:":{uc_base:"1f385-1f3ff",uc_full:"1f385-1f3ff",shortnames:[],category:"people"},":scientist:":{uc_base:"1f9d1-1f52c",uc_full:"1f9d1-200d-1f52c",shortnames:[],category:"people"},":selfie_tone1:":{uc_base:"1f933-1f3fb",uc_full:"1f933-1f3fb",shortnames:[],category:"people"},":selfie_tone2:":{uc_base:"1f933-1f3fc",uc_full:"1f933-1f3fc",shortnames:[],category:"people"},":selfie_tone3:":{uc_base:"1f933-1f3fd",uc_full:"1f933-1f3fd",shortnames:[],category:"people"},":selfie_tone4:":{uc_base:"1f933-1f3fe",uc_full:"1f933-1f3fe",shortnames:[],category:"people"},":selfie_tone5:":{uc_base:"1f933-1f3ff",uc_full:"1f933-1f3ff",shortnames:[],category:"people"},":service_dog:":{uc_base:"1f415-1f9ba",uc_full:"1f415-200d-1f9ba",shortnames:[],category:"nature"},":singer:":{uc_base:"1f9d1-1f3a4",uc_full:"1f9d1-200d-1f3a4",shortnames:[],category:"people"},":snowboarder_tone1:":{uc_base:"1f3c2-1f3fb",uc_full:"1f3c2-1f3fb",shortnames:[":snowboarder_light_skin_tone:"],category:"activity"},":snowboarder_tone2:":{uc_base:"1f3c2-1f3fc",uc_full:"1f3c2-1f3fc",shortnames:[":snowboarder_medium_light_skin_tone:"],category:"activity"},":snowboarder_tone3:":{uc_base:"1f3c2-1f3fd",uc_full:"1f3c2-1f3fd",shortnames:[":snowboarder_medium_skin_tone:"],category:"activity"},":snowboarder_tone4:":{uc_base:"1f3c2-1f3fe",uc_full:"1f3c2-1f3fe",shortnames:[":snowboarder_medium_dark_skin_tone:"],category:"activity"},":snowboarder_tone5:":{uc_base:"1f3c2-1f3ff",uc_full:"1f3c2-1f3ff",shortnames:[":snowboarder_dark_skin_tone:"],category:"activity"},":student:":{uc_base:"1f9d1-1f393",uc_full:"1f9d1-200d-1f393",shortnames:[],category:"people"},":superhero_tone1:":{uc_base:"1f9b8-1f3fb",uc_full:"1f9b8-1f3fb",shortnames:[":superhero_light_skin_tone:"],category:"people"},":superhero_tone2:":{uc_base:"1f9b8-1f3fc",uc_full:"1f9b8-1f3fc",shortnames:[":superhero_medium_light_skin_tone:"],category:"people"},":superhero_tone3:":{uc_base:"1f9b8-1f3fd",uc_full:"1f9b8-1f3fd",shortnames:[":superhero_medium_skin_tone:"],category:"people"},":superhero_tone4:":{uc_base:"1f9b8-1f3fe",uc_full:"1f9b8-1f3fe",shortnames:[":superhero_medium_dark_skin_tone:"],category:"people"},":superhero_tone5:":{uc_base:"1f9b8-1f3ff",uc_full:"1f9b8-1f3ff",shortnames:[":superhero_dark_skin_tone:"],category:"people"},":supervillain_tone1:":{uc_base:"1f9b9-1f3fb",uc_full:"1f9b9-1f3fb",shortnames:[":supervillain_light_skin_tone:"],category:"people"},":supervillain_tone2:":{uc_base:"1f9b9-1f3fc",uc_full:"1f9b9-1f3fc",shortnames:[":supervillain_medium_light_skin_tone:"],category:"people"},":supervillain_tone3:":{uc_base:"1f9b9-1f3fd",uc_full:"1f9b9-1f3fd",shortnames:[":supervillain_medium_skin_tone:"],category:"people"},":supervillain_tone4:":{uc_base:"1f9b9-1f3fe",uc_full:"1f9b9-1f3fe",shortnames:[":supervillain_medium_dark_skin_tone:"],category:"people"},":supervillain_tone5:":{uc_base:"1f9b9-1f3ff",uc_full:"1f9b9-1f3ff",shortnames:[":supervillain_dark_skin_tone:"],category:"people"},":teacher:":{uc_base:"1f9d1-1f3eb",uc_full:"1f9d1-200d-1f3eb",shortnames:[],category:"people"},":technologist:":{uc_base:"1f9d1-1f4bb",uc_full:"1f9d1-200d-1f4bb",shortnames:[],category:"people"},":thumbsdown_tone1:":{uc_base:"1f44e-1f3fb",uc_full:"1f44e-1f3fb",shortnames:[":-1_tone1:",":thumbdown_tone1:"],category:"people"},":thumbsdown_tone2:":{uc_base:"1f44e-1f3fc",uc_full:"1f44e-1f3fc",shortnames:[":-1_tone2:",":thumbdown_tone2:"],category:"people"},":thumbsdown_tone3:":{uc_base:"1f44e-1f3fd",uc_full:"1f44e-1f3fd",shortnames:[":-1_tone3:",":thumbdown_tone3:"],category:"people"},":thumbsdown_tone4:":{uc_base:"1f44e-1f3fe",uc_full:"1f44e-1f3fe",shortnames:[":-1_tone4:",":thumbdown_tone4:"],category:"people"},":thumbsdown_tone5:":{uc_base:"1f44e-1f3ff",uc_full:"1f44e-1f3ff",shortnames:[":-1_tone5:",":thumbdown_tone5:"],category:"people"},":thumbsup_tone1:":{uc_base:"1f44d-1f3fb",uc_full:"1f44d-1f3fb",shortnames:[":+1_tone1:",":thumbup_tone1:"],category:"people"},":thumbsup_tone2:":{uc_base:"1f44d-1f3fc",uc_full:"1f44d-1f3fc",shortnames:[":+1_tone2:",":thumbup_tone2:"],category:"people"},":thumbsup_tone3:":{uc_base:"1f44d-1f3fd",uc_full:"1f44d-1f3fd",shortnames:[":+1_tone3:",":thumbup_tone3:"],category:"people"},":thumbsup_tone4:":{uc_base:"1f44d-1f3fe",uc_full:"1f44d-1f3fe",shortnames:[":+1_tone4:",":thumbup_tone4:"],category:"people"},":thumbsup_tone5:":{uc_base:"1f44d-1f3ff",uc_full:"1f44d-1f3ff",shortnames:[":+1_tone5:",":thumbup_tone5:"],category:"people"},":united_nations:":{uc_base:"1f1fa-1f1f3",uc_full:"1f1fa-1f1f3",shortnames:[],category:"flags"},":vampire_tone1:":{uc_base:"1f9db-1f3fb",uc_full:"1f9db-1f3fb",shortnames:[":vampire_light_skin_tone:"],category:"people"},":vampire_tone2:":{uc_base:"1f9db-1f3fc",uc_full:"1f9db-1f3fc",shortnames:[":vampire_medium_light_skin_tone:"],category:"people"},":vampire_tone3:":{uc_base:"1f9db-1f3fd",uc_full:"1f9db-1f3fd",shortnames:[":vampire_medium_skin_tone:"],category:"people"},":vampire_tone4:":{uc_base:"1f9db-1f3fe",uc_full:"1f9db-1f3fe",shortnames:[":vampire_medium_dark_skin_tone:"],category:"people"},":vampire_tone5:":{uc_base:"1f9db-1f3ff",uc_full:"1f9db-1f3ff",shortnames:[":vampire_dark_skin_tone:"],category:"people"},":vulcan_tone1:":{uc_base:"1f596-1f3fb",uc_full:"1f596-1f3fb",shortnames:[":raised_hand_with_part_between_middle_and_ring_fingers_tone1:"],category:"people"},":vulcan_tone2:":{uc_base:"1f596-1f3fc",uc_full:"1f596-1f3fc",shortnames:[":raised_hand_with_part_between_middle_and_ring_fingers_tone2:"],category:"people"},":vulcan_tone3:":{uc_base:"1f596-1f3fd",uc_full:"1f596-1f3fd",shortnames:[":raised_hand_with_part_between_middle_and_ring_fingers_tone3:"],category:"people"},":vulcan_tone4:":{uc_base:"1f596-1f3fe",uc_full:"1f596-1f3fe",shortnames:[":raised_hand_with_part_between_middle_and_ring_fingers_tone4:"],category:"people"},":vulcan_tone5:":{uc_base:"1f596-1f3ff",uc_full:"1f596-1f3ff",shortnames:[":raised_hand_with_part_between_middle_and_ring_fingers_tone5:"],category:"people"},":wave_tone1:":{uc_base:"1f44b-1f3fb",uc_full:"1f44b-1f3fb",shortnames:[],category:"people"},":wave_tone2:":{uc_base:"1f44b-1f3fc",uc_full:"1f44b-1f3fc",shortnames:[],category:"people"},":wave_tone3:":{uc_base:"1f44b-1f3fd",uc_full:"1f44b-1f3fd",shortnames:[],category:"people"},":wave_tone4:":{uc_base:"1f44b-1f3fe",uc_full:"1f44b-1f3fe",shortnames:[],category:"people"},":wave_tone5:":{uc_base:"1f44b-1f3ff",uc_full:"1f44b-1f3ff",shortnames:[],category:"people"},":woman_and_man_holding_hands_tone1:":{uc_base:"1f46b-1f3fb",uc_full:"1f46b-1f3fb",shortnames:[":woman_and_man_holding_hands_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone2:":{uc_base:"1f46b-1f3fc",uc_full:"1f46b-1f3fc",shortnames:[":woman_and_man_holding_hands_medium_light_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone3:":{uc_base:"1f46b-1f3fd",uc_full:"1f46b-1f3fd",shortnames:[":woman_and_man_holding_hands_medium_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone4:":{uc_base:"1f46b-1f3fe",uc_full:"1f46b-1f3fe",shortnames:[":woman_and_man_holding_hands_medium_dark_skin_tone:"],category:"people"},":woman_and_man_holding_hands_tone5:":{uc_base:"1f46b-1f3ff",uc_full:"1f46b-1f3ff",shortnames:[":woman_and_man_holding_hands_dark_skin_tone:"],category:"people"},":woman_artist:":{uc_base:"1f469-1f3a8",uc_full:"1f469-200d-1f3a8",shortnames:[],category:"people"},":woman_astronaut:":{uc_base:"1f469-1f680",uc_full:"1f469-200d-1f680",shortnames:[],category:"people"},":woman_bald:":{uc_base:"1f469-1f9b2",uc_full:"1f469-200d-1f9b2",shortnames:[],category:"people"},":woman_cook:":{uc_base:"1f469-1f373",uc_full:"1f469-200d-1f373",shortnames:[],category:"people"},":woman_curly_haired:":{uc_base:"1f469-1f9b1",uc_full:"1f469-200d-1f9b1",shortnames:[],category:"people"},":woman_factory_worker:":{uc_base:"1f469-1f3ed",uc_full:"1f469-200d-1f3ed",shortnames:[],category:"people"},":woman_farmer:":{uc_base:"1f469-1f33e",uc_full:"1f469-200d-1f33e",shortnames:[],category:"people"},":woman_feeding_baby:":{uc_base:"1f469-1f37c",uc_full:"1f469-200d-1f37c",shortnames:[],category:"people"},":woman_firefighter:":{uc_base:"1f469-1f692",uc_full:"1f469-200d-1f692",shortnames:[],category:"people"},":woman_in_manual_wheelchair:":{uc_base:"1f469-1f9bd",uc_full:"1f469-200d-1f9bd",shortnames:[],category:"people"},":woman_in_motorized_wheelchair:":{uc_base:"1f469-1f9bc",uc_full:"1f469-200d-1f9bc",shortnames:[],category:"people"},":woman_mechanic:":{uc_base:"1f469-1f527",uc_full:"1f469-200d-1f527",shortnames:[],category:"people"},":woman_office_worker:":{uc_base:"1f469-1f4bc",uc_full:"1f469-200d-1f4bc",shortnames:[],category:"people"},":woman_red_haired:":{uc_base:"1f469-1f9b0",uc_full:"1f469-200d-1f9b0",shortnames:[],category:"people"},":woman_scientist:":{uc_base:"1f469-1f52c",uc_full:"1f469-200d-1f52c",shortnames:[],category:"people"},":woman_singer:":{uc_base:"1f469-1f3a4",uc_full:"1f469-200d-1f3a4",shortnames:[],category:"people"},":woman_student:":{uc_base:"1f469-1f393",uc_full:"1f469-200d-1f393",shortnames:[],category:"people"},":woman_teacher:":{uc_base:"1f469-1f3eb",uc_full:"1f469-200d-1f3eb",shortnames:[],category:"people"},":woman_technologist:":{uc_base:"1f469-1f4bb",uc_full:"1f469-200d-1f4bb",shortnames:[],category:"people"},":woman_tone1:":{uc_base:"1f469-1f3fb",uc_full:"1f469-1f3fb",shortnames:[],category:"people"},":woman_tone2:":{uc_base:"1f469-1f3fc",uc_full:"1f469-1f3fc",shortnames:[],category:"people"},":woman_tone3:":{uc_base:"1f469-1f3fd",uc_full:"1f469-1f3fd",shortnames:[],category:"people"},":woman_tone4:":{uc_base:"1f469-1f3fe",uc_full:"1f469-1f3fe",shortnames:[],category:"people"},":woman_tone5:":{uc_base:"1f469-1f3ff",uc_full:"1f469-1f3ff",shortnames:[],category:"people"},":woman_white_haired:":{uc_base:"1f469-1f9b3",uc_full:"1f469-200d-1f9b3",shortnames:[],category:"people"},":woman_with_headscarf_tone1:":{uc_base:"1f9d5-1f3fb",uc_full:"1f9d5-1f3fb",shortnames:[":woman_with_headscarf_light_skin_tone:"],category:"people"},":woman_with_headscarf_tone2:":{uc_base:"1f9d5-1f3fc",uc_full:"1f9d5-1f3fc",shortnames:[":woman_with_headscarf_medium_light_skin_tone:"],category:"people"},":woman_with_headscarf_tone3:":{uc_base:"1f9d5-1f3fd",uc_full:"1f9d5-1f3fd",shortnames:[":woman_with_headscarf_medium_skin_tone:"],category:"people"},":woman_with_headscarf_tone4:":{uc_base:"1f9d5-1f3fe",uc_full:"1f9d5-1f3fe",shortnames:[":woman_with_headscarf_medium_dark_skin_tone:"],category:"people"},":woman_with_headscarf_tone5:":{uc_base:"1f9d5-1f3ff",uc_full:"1f9d5-1f3ff",shortnames:[":woman_with_headscarf_dark_skin_tone:"],category:"people"},":woman_with_probing_cane:":{uc_base:"1f469-1f9af",uc_full:"1f469-200d-1f9af",shortnames:[],category:"people"},":women_holding_hands_tone1:":{uc_base:"1f46d-1f3fb",uc_full:"1f46d-1f3fb",shortnames:[":women_holding_hands_light_skin_tone:"],category:"people"},":women_holding_hands_tone2:":{uc_base:"1f46d-1f3fc",uc_full:"1f46d-1f3fc",shortnames:[":women_holding_hands_medium_light_skin_tone:"],category:"people"},":women_holding_hands_tone3:":{uc_base:"1f46d-1f3fd",uc_full:"1f46d-1f3fd",shortnames:[":women_holding_hands_medium_skin_tone:"],category:"people"},":women_holding_hands_tone4:":{uc_base:"1f46d-1f3fe",uc_full:"1f46d-1f3fe",shortnames:[":women_holding_hands_medium_dark_skin_tone:"],category:"people"},":women_holding_hands_tone5:":{uc_base:"1f46d-1f3ff",uc_full:"1f46d-1f3ff",shortnames:[":women_holding_hands_dark_skin_tone:"],category:"people"},":black_cat:":{uc_base:"1f408-2b1b",uc_full:"1f408-200d-2b1b",shortnames:[],category:"nature"},":blond-haired_man:":{uc_base:"1f471-2642",uc_full:"1f471-200d-2642-fe0f",shortnames:[],category:"people"},":blond-haired_woman:":{uc_base:"1f471-2640",uc_full:"1f471-200d-2640-fe0f",shortnames:[],category:"people"},":deaf_man:":{uc_base:"1f9cf-2642",uc_full:"1f9cf-200d-2642-fe0f",shortnames:[],category:"people"},":deaf_woman:":{uc_base:"1f9cf-2640",uc_full:"1f9cf-200d-2640-fe0f",shortnames:[],category:"people"},":fist_tone1:":{uc_base:"270a-1f3fb",uc_full:"270a-1f3fb",shortnames:[],category:"people"},":fist_tone2:":{uc_base:"270a-1f3fc",uc_full:"270a-1f3fc",shortnames:[],category:"people"},":fist_tone3:":{uc_base:"270a-1f3fd",uc_full:"270a-1f3fd",shortnames:[],category:"people"},":fist_tone4:":{uc_base:"270a-1f3fe",uc_full:"270a-1f3fe",shortnames:[],category:"people"},":fist_tone5:":{uc_base:"270a-1f3ff",uc_full:"270a-1f3ff",shortnames:[],category:"people"},":health_worker:":{uc_base:"1f9d1-2695",uc_full:"1f9d1-200d-2695-fe0f",shortnames:[],category:"people"},":judge:":{uc_base:"1f9d1-2696",uc_full:"1f9d1-200d-2696-fe0f",shortnames:[],category:"people"},":man_biking:":{uc_base:"1f6b4-2642",uc_full:"1f6b4-200d-2642-fe0f",shortnames:[],category:"activity"},":man_bowing:":{uc_base:"1f647-2642",uc_full:"1f647-200d-2642-fe0f",shortnames:[],category:"people"},":man_cartwheeling:":{uc_base:"1f938-2642",uc_full:"1f938-200d-2642-fe0f",shortnames:[],category:"activity"
},":man_climbing:":{uc_base:"1f9d7-2642",uc_full:"1f9d7-200d-2642-fe0f",shortnames:[],category:"activity"},":man_construction_worker:":{uc_base:"1f477-2642",uc_full:"1f477-200d-2642-fe0f",shortnames:[],category:"people"},":man_detective:":{uc_base:"1f575-2642",uc_full:"1f575-fe0f-200d-2642-fe0f",shortnames:[],category:"people"},":man_elf:":{uc_base:"1f9dd-2642",uc_full:"1f9dd-200d-2642-fe0f",shortnames:[],category:"people"},":man_facepalming:":{uc_base:"1f926-2642",uc_full:"1f926-200d-2642-fe0f",shortnames:[],category:"people"},":man_fairy:":{uc_base:"1f9da-2642",uc_full:"1f9da-200d-2642-fe0f",shortnames:[],category:"people"},":man_frowning:":{uc_base:"1f64d-2642",uc_full:"1f64d-200d-2642-fe0f",shortnames:[],category:"people"},":man_genie:":{uc_base:"1f9de-2642",uc_full:"1f9de-200d-2642-fe0f",shortnames:[],category:"people"},":man_gesturing_no:":{uc_base:"1f645-2642",uc_full:"1f645-200d-2642-fe0f",shortnames:[],category:"people"},":man_gesturing_ok:":{uc_base:"1f646-2642",uc_full:"1f646-200d-2642-fe0f",shortnames:[],category:"people"},":man_getting_face_massage:":{uc_base:"1f486-2642",uc_full:"1f486-200d-2642-fe0f",shortnames:[],category:"people"},":man_getting_haircut:":{uc_base:"1f487-2642",uc_full:"1f487-200d-2642-fe0f",shortnames:[],category:"people"},":man_golfing:":{uc_base:"1f3cc-2642",uc_full:"1f3cc-fe0f-200d-2642-fe0f",shortnames:[],category:"activity"},":man_guard:":{uc_base:"1f482-2642",uc_full:"1f482-200d-2642-fe0f",shortnames:[],category:"people"},":man_health_worker:":{uc_base:"1f468-2695",uc_full:"1f468-200d-2695-fe0f",shortnames:[],category:"people"},":man_in_lotus_position:":{uc_base:"1f9d8-2642",uc_full:"1f9d8-200d-2642-fe0f",shortnames:[],category:"activity"},":man_in_steamy_room:":{uc_base:"1f9d6-2642",uc_full:"1f9d6-200d-2642-fe0f",shortnames:[],category:"people"},":man_in_tuxedo:":{uc_base:"1f935-2642",uc_full:"1f935-200d-2642-fe0f",shortnames:[],category:"people"},":man_judge:":{uc_base:"1f468-2696",uc_full:"1f468-200d-2696-fe0f",shortnames:[],category:"people"},":man_juggling:":{uc_base:"1f939-2642",uc_full:"1f939-200d-2642-fe0f",shortnames:[],category:"activity"},":man_kneeling:":{uc_base:"1f9ce-2642",uc_full:"1f9ce-200d-2642-fe0f",shortnames:[],category:"people"},":man_lifting_weights:":{uc_base:"1f3cb-2642",uc_full:"1f3cb-fe0f-200d-2642-fe0f",shortnames:[],category:"activity"},":man_mage:":{uc_base:"1f9d9-2642",uc_full:"1f9d9-200d-2642-fe0f",shortnames:[],category:"people"},":man_mountain_biking:":{uc_base:"1f6b5-2642",uc_full:"1f6b5-200d-2642-fe0f",shortnames:[],category:"activity"},":man_pilot:":{uc_base:"1f468-2708",uc_full:"1f468-200d-2708-fe0f",shortnames:[],category:"people"},":man_playing_handball:":{uc_base:"1f93e-2642",uc_full:"1f93e-200d-2642-fe0f",shortnames:[],category:"activity"},":man_playing_water_polo:":{uc_base:"1f93d-2642",uc_full:"1f93d-200d-2642-fe0f",shortnames:[],category:"activity"},":man_police_officer:":{uc_base:"1f46e-2642",uc_full:"1f46e-200d-2642-fe0f",shortnames:[],category:"people"},":man_pouting:":{uc_base:"1f64e-2642",uc_full:"1f64e-200d-2642-fe0f",shortnames:[],category:"people"},":man_raising_hand:":{uc_base:"1f64b-2642",uc_full:"1f64b-200d-2642-fe0f",shortnames:[],category:"people"},":man_rowing_boat:":{uc_base:"1f6a3-2642",uc_full:"1f6a3-200d-2642-fe0f",shortnames:[],category:"activity"},":man_running:":{uc_base:"1f3c3-2642",uc_full:"1f3c3-200d-2642-fe0f",shortnames:[],category:"people"},":man_shrugging:":{uc_base:"1f937-2642",uc_full:"1f937-200d-2642-fe0f",shortnames:[],category:"people"},":man_standing:":{uc_base:"1f9cd-2642",uc_full:"1f9cd-200d-2642-fe0f",shortnames:[],category:"people"},":man_superhero:":{uc_base:"1f9b8-2642",uc_full:"1f9b8-200d-2642-fe0f",shortnames:[],category:"people"},":man_supervillain:":{uc_base:"1f9b9-2642",uc_full:"1f9b9-200d-2642-fe0f",shortnames:[],category:"people"},":man_surfing:":{uc_base:"1f3c4-2642",uc_full:"1f3c4-200d-2642-fe0f",shortnames:[],category:"activity"},":man_swimming:":{uc_base:"1f3ca-2642",uc_full:"1f3ca-200d-2642-fe0f",shortnames:[],category:"activity"},":man_tipping_hand:":{uc_base:"1f481-2642",uc_full:"1f481-200d-2642-fe0f",shortnames:[],category:"people"},":man_vampire:":{uc_base:"1f9db-2642",uc_full:"1f9db-200d-2642-fe0f",shortnames:[],category:"people"},":man_walking:":{uc_base:"1f6b6-2642",uc_full:"1f6b6-200d-2642-fe0f",shortnames:[],category:"people"},":man_wearing_turban:":{uc_base:"1f473-2642",uc_full:"1f473-200d-2642-fe0f",shortnames:[],category:"people"},":man_with_veil:":{uc_base:"1f470-2642",uc_full:"1f470-200d-2642-fe0f",shortnames:[],category:"people"},":man_zombie:":{uc_base:"1f9df-2642",uc_full:"1f9df-200d-2642-fe0f",shortnames:[],category:"people"},":men_with_bunny_ears_partying:":{uc_base:"1f46f-2642",uc_full:"1f46f-200d-2642-fe0f",shortnames:[],category:"people"},":men_wrestling:":{uc_base:"1f93c-2642",uc_full:"1f93c-200d-2642-fe0f",shortnames:[],category:"activity"},":mermaid:":{uc_base:"1f9dc-2640",uc_full:"1f9dc-200d-2640-fe0f",shortnames:[],category:"people"},":merman:":{uc_base:"1f9dc-2642",uc_full:"1f9dc-200d-2642-fe0f",shortnames:[],category:"people"},":person_bouncing_ball_tone1:":{uc_base:"26f9-1f3fb",uc_full:"26f9-1f3fb",shortnames:[":basketball_player_tone1:",":person_with_ball_tone1:"],category:"activity"},":person_bouncing_ball_tone2:":{uc_base:"26f9-1f3fc",uc_full:"26f9-1f3fc",shortnames:[":basketball_player_tone2:",":person_with_ball_tone2:"],category:"activity"},":person_bouncing_ball_tone3:":{uc_base:"26f9-1f3fd",uc_full:"26f9-1f3fd",shortnames:[":basketball_player_tone3:",":person_with_ball_tone3:"],category:"activity"},":person_bouncing_ball_tone4:":{uc_base:"26f9-1f3fe",uc_full:"26f9-1f3fe",shortnames:[":basketball_player_tone4:",":person_with_ball_tone4:"],category:"activity"},":person_bouncing_ball_tone5:":{uc_base:"26f9-1f3ff",uc_full:"26f9-1f3ff",shortnames:[":basketball_player_tone5:",":person_with_ball_tone5:"],category:"activity"},":pilot:":{uc_base:"1f9d1-2708",uc_full:"1f9d1-200d-2708-fe0f",shortnames:[],category:"people"},":pirate_flag:":{uc_base:"1f3f4-2620",uc_full:"1f3f4-200d-2620-fe0f",shortnames:[],category:"flags"},":point_up_tone1:":{uc_base:"261d-1f3fb",uc_full:"261d-1f3fb",shortnames:[],category:"people"},":point_up_tone2:":{uc_base:"261d-1f3fc",uc_full:"261d-1f3fc",shortnames:[],category:"people"},":point_up_tone3:":{uc_base:"261d-1f3fd",uc_full:"261d-1f3fd",shortnames:[],category:"people"},":point_up_tone4:":{uc_base:"261d-1f3fe",uc_full:"261d-1f3fe",shortnames:[],category:"people"},":point_up_tone5:":{uc_base:"261d-1f3ff",uc_full:"261d-1f3ff",shortnames:[],category:"people"},":polar_bear:":{uc_base:"1f43b-2744",uc_full:"1f43b-200d-2744-fe0f",shortnames:[],category:"nature"},":raised_hand_tone1:":{uc_base:"270b-1f3fb",uc_full:"270b-1f3fb",shortnames:[],category:"people"},":raised_hand_tone2:":{uc_base:"270b-1f3fc",uc_full:"270b-1f3fc",shortnames:[],category:"people"},":raised_hand_tone3:":{uc_base:"270b-1f3fd",uc_full:"270b-1f3fd",shortnames:[],category:"people"},":raised_hand_tone4:":{uc_base:"270b-1f3fe",uc_full:"270b-1f3fe",shortnames:[],category:"people"},":raised_hand_tone5:":{uc_base:"270b-1f3ff",uc_full:"270b-1f3ff",shortnames:[],category:"people"},":transgender_flag:":{uc_base:"1f3f3-26a7",uc_full:"1f3f3-200d-26a7-fe0f",shortnames:[],category:"flags"},":v_tone1:":{uc_base:"270c-1f3fb",uc_full:"270c-1f3fb",shortnames:[],category:"people"},":v_tone2:":{uc_base:"270c-1f3fc",uc_full:"270c-1f3fc",shortnames:[],category:"people"},":v_tone3:":{uc_base:"270c-1f3fd",uc_full:"270c-1f3fd",shortnames:[],category:"people"},":v_tone4:":{uc_base:"270c-1f3fe",uc_full:"270c-1f3fe",shortnames:[],category:"people"},":v_tone5:":{uc_base:"270c-1f3ff",uc_full:"270c-1f3ff",shortnames:[],category:"people"},":woman_biking:":{uc_base:"1f6b4-2640",uc_full:"1f6b4-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_bowing:":{uc_base:"1f647-2640",uc_full:"1f647-200d-2640-fe0f",shortnames:[],category:"people"},":woman_cartwheeling:":{uc_base:"1f938-2640",uc_full:"1f938-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_climbing:":{uc_base:"1f9d7-2640",uc_full:"1f9d7-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_construction_worker:":{uc_base:"1f477-2640",uc_full:"1f477-200d-2640-fe0f",shortnames:[],category:"people"},":woman_detective:":{uc_base:"1f575-2640",uc_full:"1f575-fe0f-200d-2640-fe0f",shortnames:[],category:"people"},":woman_elf:":{uc_base:"1f9dd-2640",uc_full:"1f9dd-200d-2640-fe0f",shortnames:[],category:"people"},":woman_facepalming:":{uc_base:"1f926-2640",uc_full:"1f926-200d-2640-fe0f",shortnames:[],category:"people"},":woman_fairy:":{uc_base:"1f9da-2640",uc_full:"1f9da-200d-2640-fe0f",shortnames:[],category:"people"},":woman_frowning:":{uc_base:"1f64d-2640",uc_full:"1f64d-200d-2640-fe0f",shortnames:[],category:"people"},":woman_genie:":{uc_base:"1f9de-2640",uc_full:"1f9de-200d-2640-fe0f",shortnames:[],category:"people"},":woman_gesturing_no:":{uc_base:"1f645-2640",uc_full:"1f645-200d-2640-fe0f",shortnames:[],category:"people"},":woman_gesturing_ok:":{uc_base:"1f646-2640",uc_full:"1f646-200d-2640-fe0f",shortnames:[],category:"people"},":woman_getting_face_massage:":{uc_base:"1f486-2640",uc_full:"1f486-200d-2640-fe0f",shortnames:[],category:"people"},":woman_getting_haircut:":{uc_base:"1f487-2640",uc_full:"1f487-200d-2640-fe0f",shortnames:[],category:"people"},":woman_golfing:":{uc_base:"1f3cc-2640",uc_full:"1f3cc-fe0f-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_guard:":{uc_base:"1f482-2640",uc_full:"1f482-200d-2640-fe0f",shortnames:[],category:"people"},":woman_health_worker:":{uc_base:"1f469-2695",uc_full:"1f469-200d-2695-fe0f",shortnames:[],category:"people"},":woman_in_lotus_position:":{uc_base:"1f9d8-2640",uc_full:"1f9d8-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_in_steamy_room:":{uc_base:"1f9d6-2640",uc_full:"1f9d6-200d-2640-fe0f",shortnames:[],category:"people"},":woman_in_tuxedo:":{uc_base:"1f935-2640",uc_full:"1f935-200d-2640-fe0f",shortnames:[],category:"people"},":woman_judge:":{uc_base:"1f469-2696",uc_full:"1f469-200d-2696-fe0f",shortnames:[],category:"people"},":woman_juggling:":{uc_base:"1f939-2640",uc_full:"1f939-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_kneeling:":{uc_base:"1f9ce-2640",uc_full:"1f9ce-200d-2640-fe0f",shortnames:[],category:"people"},":woman_lifting_weights:":{uc_base:"1f3cb-2640",uc_full:"1f3cb-fe0f-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_mage:":{uc_base:"1f9d9-2640",uc_full:"1f9d9-200d-2640-fe0f",shortnames:[],category:"people"},":woman_mountain_biking:":{uc_base:"1f6b5-2640",uc_full:"1f6b5-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_pilot:":{uc_base:"1f469-2708",uc_full:"1f469-200d-2708-fe0f",shortnames:[],category:"people"},":woman_playing_handball:":{uc_base:"1f93e-2640",uc_full:"1f93e-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_playing_water_polo:":{uc_base:"1f93d-2640",uc_full:"1f93d-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_police_officer:":{uc_base:"1f46e-2640",uc_full:"1f46e-200d-2640-fe0f",shortnames:[],category:"people"},":woman_pouting:":{uc_base:"1f64e-2640",uc_full:"1f64e-200d-2640-fe0f",shortnames:[],category:"people"},":woman_raising_hand:":{uc_base:"1f64b-2640",uc_full:"1f64b-200d-2640-fe0f",shortnames:[],category:"people"},":woman_rowing_boat:":{uc_base:"1f6a3-2640",uc_full:"1f6a3-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_running:":{uc_base:"1f3c3-2640",uc_full:"1f3c3-200d-2640-fe0f",shortnames:[],category:"people"},":woman_shrugging:":{uc_base:"1f937-2640",uc_full:"1f937-200d-2640-fe0f",shortnames:[],category:"people"},":woman_standing:":{uc_base:"1f9cd-2640",uc_full:"1f9cd-200d-2640-fe0f",shortnames:[],category:"people"},":woman_superhero:":{uc_base:"1f9b8-2640",uc_full:"1f9b8-200d-2640-fe0f",shortnames:[],category:"people"},":woman_supervillain:":{uc_base:"1f9b9-2640",uc_full:"1f9b9-200d-2640-fe0f",shortnames:[],category:"people"},":woman_surfing:":{uc_base:"1f3c4-2640",uc_full:"1f3c4-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_swimming:":{uc_base:"1f3ca-2640",uc_full:"1f3ca-200d-2640-fe0f",shortnames:[],category:"activity"},":woman_tipping_hand:":{uc_base:"1f481-2640",uc_full:"1f481-200d-2640-fe0f",shortnames:[],category:"people"},":woman_vampire:":{uc_base:"1f9db-2640",uc_full:"1f9db-200d-2640-fe0f",shortnames:[],category:"people"},":woman_walking:":{uc_base:"1f6b6-2640",uc_full:"1f6b6-200d-2640-fe0f",shortnames:[],category:"people"},":woman_wearing_turban:":{uc_base:"1f473-2640",uc_full:"1f473-200d-2640-fe0f",shortnames:[],category:"people"},":woman_with_veil:":{uc_base:"1f470-2640",uc_full:"1f470-200d-2640-fe0f",shortnames:[],category:"people"},":woman_zombie:":{uc_base:"1f9df-2640",uc_full:"1f9df-200d-2640-fe0f",shortnames:[],category:"people"},":women_with_bunny_ears_partying:":{uc_base:"1f46f-2640",uc_full:"1f46f-200d-2640-fe0f",shortnames:[],category:"people"},":women_wrestling:":{uc_base:"1f93c-2640",uc_full:"1f93c-200d-2640-fe0f",shortnames:[],category:"activity"},":writing_hand_tone1:":{uc_base:"270d-1f3fb",uc_full:"270d-1f3fb",shortnames:[],category:"people"},":writing_hand_tone2:":{uc_base:"270d-1f3fc",uc_full:"270d-1f3fc",shortnames:[],category:"people"},":writing_hand_tone3:":{uc_base:"270d-1f3fd",uc_full:"270d-1f3fd",shortnames:[],category:"people"},":writing_hand_tone4:":{uc_base:"270d-1f3fe",uc_full:"270d-1f3fe",shortnames:[],category:"people"},":writing_hand_tone5:":{uc_base:"270d-1f3ff",uc_full:"270d-1f3ff",shortnames:[],category:"people"},":asterisk:":{uc_base:"002a-20e3",uc_full:"002a-fe0f-20e3",shortnames:[":keycap_asterisk:"],category:"symbols"},":eight:":{uc_base:"0038-20e3",uc_full:"0038-fe0f-20e3",shortnames:[],category:"symbols"},":five:":{uc_base:"0035-20e3",uc_full:"0035-fe0f-20e3",shortnames:[],category:"symbols"},":four:":{uc_base:"0034-20e3",uc_full:"0034-fe0f-20e3",shortnames:[],category:"symbols"},":hash:":{uc_base:"0023-20e3",uc_full:"0023-fe0f-20e3",shortnames:[],category:"symbols"},":man_bouncing_ball:":{uc_base:"26f9-2642",uc_full:"26f9-fe0f-200d-2642-fe0f",shortnames:[],category:"activity"},":nine:":{uc_base:"0039-20e3",uc_full:"0039-fe0f-20e3",shortnames:[],category:"symbols"},":one:":{uc_base:"0031-20e3",uc_full:"0031-fe0f-20e3",shortnames:[],category:"symbols"},":seven:":{uc_base:"0037-20e3",uc_full:"0037-fe0f-20e3",shortnames:[],category:"symbols"},":six:":{uc_base:"0036-20e3",uc_full:"0036-fe0f-20e3",shortnames:[],category:"symbols"},":three:":{uc_base:"0033-20e3",uc_full:"0033-fe0f-20e3",shortnames:[],category:"symbols"},":two:":{uc_base:"0032-20e3",uc_full:"0032-fe0f-20e3",shortnames:[],category:"symbols"},":woman_bouncing_ball:":{uc_base:"26f9-2640",uc_full:"26f9-fe0f-200d-2640-fe0f",shortnames:[],category:"activity"},":zero:":{uc_base:"0030-20e3",uc_full:"0030-fe0f-20e3",shortnames:[],category:"symbols"},":100:":{uc_base:"1f4af",uc_full:"1f4af",shortnames:[],category:"symbols"},":1234:":{uc_base:"1f522",uc_full:"1f522",shortnames:[],category:"symbols"},":8ball:":{uc_base:"1f3b1",uc_full:"1f3b1",shortnames:[],category:"activity"},":a:":{uc_base:"1f170",uc_full:"1f170-fe0f",shortnames:[],category:"symbols"},":ab:":{uc_base:"1f18e",uc_full:"1f18e",shortnames:[],category:"symbols"},":abacus:":{uc_base:"1f9ee",uc_full:"1f9ee",shortnames:[],category:"objects"},":abc:":{uc_base:"1f524",uc_full:"1f524",shortnames:[],category:"symbols"},":abcd:":{uc_base:"1f521",uc_full:"1f521",shortnames:[],category:"symbols"},":accept:":{uc_base:"1f251",uc_full:"1f251",shortnames:[],category:"symbols"},":accordion:":{uc_base:"1fa97",uc_full:"1fa97",shortnames:[],category:"activity"},":adhesive_bandage:":{uc_base:"1fa79",uc_full:"1fa79",shortnames:[],category:"objects"},":adult:":{uc_base:"1f9d1",uc_full:"1f9d1",shortnames:[],category:"people"},":aerial_tramway:":{uc_base:"1f6a1",uc_full:"1f6a1",shortnames:[],category:"travel"},":airplane_arriving:":{uc_base:"1f6ec",uc_full:"1f6ec",shortnames:[],category:"travel"},":airplane_departure:":{uc_base:"1f6eb",uc_full:"1f6eb",shortnames:[],category:"travel"},":airplane_small:":{uc_base:"1f6e9",uc_full:"1f6e9-fe0f",shortnames:[":small_airplane:"],category:"travel"},":alien:":{uc_base:"1f47d",uc_full:"1f47d",shortnames:[],category:"people"},":ambulance:":{uc_base:"1f691",uc_full:"1f691",shortnames:[],category:"travel"},":amphora:":{uc_base:"1f3fa",uc_full:"1f3fa",shortnames:[],category:"objects"},":anatomical_heart:":{uc_base:"1fac0",uc_full:"1fac0",shortnames:[],category:"people"},":angel:":{uc_base:"1f47c",uc_full:"1f47c",shortnames:[],category:"people"},":anger:":{uc_base:"1f4a2",uc_full:"1f4a2",shortnames:[],category:"symbols"},":anger_right:":{uc_base:"1f5ef",uc_full:"1f5ef-fe0f",shortnames:[":right_anger_bubble:"],category:"symbols"},":angry:":{uc_base:"1f620",uc_full:"1f620",shortnames:[],category:"people"},":anguished:":{uc_base:"1f627",uc_full:"1f627",shortnames:[],category:"people"},":ant:":{uc_base:"1f41c",uc_full:"1f41c",shortnames:[],category:"nature"},":apple:":{uc_base:"1f34e",uc_full:"1f34e",shortnames:[],category:"food"},":arrow_down_small:":{uc_base:"1f53d",uc_full:"1f53d",shortnames:[],category:"symbols"},":arrow_up_small:":{uc_base:"1f53c",uc_full:"1f53c",shortnames:[],category:"symbols"},":arrows_clockwise:":{uc_base:"1f503",uc_full:"1f503",shortnames:[],category:"symbols"},":arrows_counterclockwise:":{uc_base:"1f504",uc_full:"1f504",shortnames:[],category:"symbols"},":art:":{uc_base:"1f3a8",uc_full:"1f3a8",shortnames:[],category:"activity"},":articulated_lorry:":{uc_base:"1f69b",uc_full:"1f69b",shortnames:[],category:"travel"},":astonished:":{uc_base:"1f632",uc_full:"1f632",shortnames:[],category:"people"},":athletic_shoe:":{uc_base:"1f45f",uc_full:"1f45f",shortnames:[],category:"people"},":atm:":{uc_base:"1f3e7",uc_full:"1f3e7",shortnames:[],category:"symbols"},":auto_rickshaw:":{uc_base:"1f6fa",uc_full:"1f6fa",shortnames:[],category:"travel"},":avocado:":{uc_base:"1f951",uc_full:"1f951",shortnames:[],category:"food"},":axe:":{uc_base:"1fa93",uc_full:"1fa93",shortnames:[],category:"objects"},":b:":{uc_base:"1f171",uc_full:"1f171-fe0f",shortnames:[],category:"symbols"},":baby:":{uc_base:"1f476",uc_full:"1f476",shortnames:[],category:"people"},":baby_bottle:":{uc_base:"1f37c",uc_full:"1f37c",shortnames:[],category:"food"},":baby_chick:":{uc_base:"1f424",uc_full:"1f424",shortnames:[],category:"nature"},":baby_symbol:":{uc_base:"1f6bc",uc_full:"1f6bc",shortnames:[],category:"symbols"},":back:":{uc_base:"1f519",uc_full:"1f519",shortnames:[],category:"symbols"},":bacon:":{uc_base:"1f953",uc_full:"1f953",shortnames:[],category:"food"},":badger:":{uc_base:"1f9a1",uc_full:"1f9a1",shortnames:[],category:"nature"},":badminton:":{uc_base:"1f3f8",uc_full:"1f3f8",shortnames:[],category:"activity"},":bagel:":{uc_base:"1f96f",uc_full:"1f96f",shortnames:[],category:"food"},":baggage_claim:":{uc_base:"1f6c4",uc_full:"1f6c4",shortnames:[],category:"symbols"},":bald:":{uc_base:"1f9b2",uc_full:"1f9b2",shortnames:[],category:"people"},":ballet_shoes:":{uc_base:"1fa70",uc_full:"1fa70",shortnames:[],category:"activity"},":balloon:":{uc_base:"1f388",uc_full:"1f388",shortnames:[],category:"objects"},":ballot_box:":{uc_base:"1f5f3",uc_full:"1f5f3-fe0f",shortnames:[":ballot_box_with_ballot:"],category:"objects"},":bamboo:":{uc_base:"1f38d",uc_full:"1f38d",shortnames:[],category:"nature"},":banana:":{uc_base:"1f34c",uc_full:"1f34c",shortnames:[],category:"food"},":banjo:":{uc_base:"1fa95",uc_full:"1fa95",shortnames:[],category:"activity"},":bank:":{uc_base:"1f3e6",uc_full:"1f3e6",shortnames:[],category:"travel"},":bar_chart:":{uc_base:"1f4ca",uc_full:"1f4ca",shortnames:[],category:"objects"},":barber:":{uc_base:"1f488",uc_full:"1f488",shortnames:[],category:"objects"},":basket:":{uc_base:"1f9fa",uc_full:"1f9fa",shortnames:[],category:"objects"},":basketball:":{uc_base:"1f3c0",uc_full:"1f3c0",shortnames:[],category:"activity"},":bat:":{uc_base:"1f987",uc_full:"1f987",shortnames:[],category:"nature"},":bath:":{uc_base:"1f6c0",uc_full:"1f6c0",shortnames:[],category:"objects"},":bathtub:":{uc_base:"1f6c1",uc_full:"1f6c1",shortnames:[],category:"objects"},":battery:":{uc_base:"1f50b",uc_full:"1f50b",shortnames:[],category:"objects"},":beach:":{uc_base:"1f3d6",uc_full:"1f3d6-fe0f",shortnames:[":beach_with_umbrella:"],category:"travel"},":bear:":{uc_base:"1f43b",uc_full:"1f43b",shortnames:[],category:"nature"},":bearded_person:":{uc_base:"1f9d4",uc_full:"1f9d4",shortnames:[],category:"people"},":beaver:":{uc_base:"1f9ab",uc_full:"1f9ab",shortnames:[],category:"nature"},":bed:":{uc_base:"1f6cf",uc_full:"1f6cf-fe0f",shortnames:[],category:"objects"},":bee:":{uc_base:"1f41d",uc_full:"1f41d",shortnames:[],category:"nature"},":beer:":{uc_base:"1f37a",uc_full:"1f37a",shortnames:[],category:"food"},":beers:":{uc_base:"1f37b",uc_full:"1f37b",shortnames:[],category:"food"},":beetle:":{uc_base:"1fab2",uc_full:"1fab2",shortnames:[],category:"nature"},":beginner:":{uc_base:"1f530",uc_full:"1f530",shortnames:[],category:"symbols"},":bell:":{uc_base:"1f514",uc_full:"1f514",shortnames:[],category:"symbols"},":bell_pepper:":{uc_base:"1fad1",uc_full:"1fad1",shortnames:[],category:"food"},":bellhop:":{uc_base:"1f6ce",uc_full:"1f6ce-fe0f",shortnames:[":bellhop_bell:"],category:"objects"},":bento:":{uc_base:"1f371",uc_full:"1f371",shortnames:[],category:"food"},":beverage_box:":{uc_base:"1f9c3",uc_full:"1f9c3",shortnames:[],category:"food"},":bike:":{uc_base:"1f6b2",uc_full:"1f6b2",shortnames:[],category:"travel"},":bikini:":{uc_base:"1f459",uc_full:"1f459",shortnames:[],category:"people"},":billed_cap:":{uc_base:"1f9e2",uc_full:"1f9e2",shortnames:[],category:"people"},":bird:":{uc_base:"1f426",uc_full:"1f426",shortnames:[],category:"nature"},":birthday:":{uc_base:"1f382",uc_full:"1f382",shortnames:[],category:"food"},":bison:":{uc_base:"1f9ac",uc_full:"1f9ac",shortnames:[],category:"nature"},":black_heart:":{uc_base:"1f5a4",uc_full:"1f5a4",shortnames:[],category:"symbols"},":black_joker:":{uc_base:"1f0cf",uc_full:"1f0cf",shortnames:[],category:"symbols"},":black_square_button:":{uc_base:"1f532",uc_full:"1f532",shortnames:[],category:"symbols"},":blond_haired_person:":{uc_base:"1f471",uc_full:"1f471",shortnames:[":person_with_blond_hair:"],category:"people"},":blossom:":{uc_base:"1f33c",uc_full:"1f33c",shortnames:[],category:"nature"},":blowfish:":{uc_base:"1f421",uc_full:"1f421",shortnames:[],category:"nature"},":blue_book:":{uc_base:"1f4d8",uc_full:"1f4d8",shortnames:[],category:"objects"},":blue_car:":{uc_base:"1f699",uc_full:"1f699",shortnames:[],category:"travel"},":blue_circle:":{uc_base:"1f535",uc_full:"1f535",shortnames:[],category:"symbols"},":blue_heart:":{uc_base:"1f499",uc_full:"1f499",shortnames:[],category:"symbols"},":blue_square:":{uc_base:"1f7e6",uc_full:"1f7e6",shortnames:[],category:"symbols"},":blueberries:":{uc_base:"1fad0",uc_full:"1fad0",shortnames:[],category:"food"},":blush:":{uc_base:"1f60a",uc_full:"1f60a",shortnames:[],category:"people"},":boar:":{uc_base:"1f417",uc_full:"1f417",shortnames:[],category:"nature"},":bomb:":{uc_base:"1f4a3",uc_full:"1f4a3",shortnames:[],category:"objects"},":bone:":{uc_base:"1f9b4",uc_full:"1f9b4",shortnames:[],category:"people"},":book:":{uc_base:"1f4d6",uc_full:"1f4d6",shortnames:[],category:"objects"},":bookmark:":{uc_base:"1f516",uc_full:"1f516",shortnames:[],category:"objects"},":bookmark_tabs:":{uc_base:"1f4d1",uc_full:"1f4d1",shortnames:[],category:"objects"},":books:":{uc_base:"1f4da",uc_full:"1f4da",shortnames:[],category:"objects"},":boom:":{uc_base:"1f4a5",uc_full:"1f4a5",shortnames:[],category:"nature"},":boomerang:":{uc_base:"1fa83",uc_full:"1fa83",shortnames:[],category:"activity"},":boot:":{uc_base:"1f462",uc_full:"1f462",shortnames:[],category:"people"},":bouquet:":{uc_base:"1f490",uc_full:"1f490",shortnames:[],category:"nature"},":bow_and_arrow:":{uc_base:"1f3f9",uc_full:"1f3f9",shortnames:[":archery:"],category:"activity"},":bowl_with_spoon:":{uc_base:"1f963",uc_full:"1f963",shortnames:[],category:"food"},":bowling:":{uc_base:"1f3b3",uc_full:"1f3b3",shortnames:[],category:"activity"},":boxing_glove:":{uc_base:"1f94a",uc_full:"1f94a",shortnames:[":boxing_gloves:"],category:"activity"},":boy:":{uc_base:"1f466",uc_full:"1f466",shortnames:[],category:"people"},":brain:":{uc_base:"1f9e0",uc_full:"1f9e0",shortnames:[],category:"people"},":bread:":{uc_base:"1f35e",uc_full:"1f35e",shortnames:[],category:"food"},":breast_feeding:":{uc_base:"1f931",uc_full:"1f931",shortnames:[],category:"people"},":bricks:":{uc_base:"1f9f1",uc_full:"1f9f1",shortnames:[],category:"objects"},":bridge_at_night:":{uc_base:"1f309",uc_full:"1f309",shortnames:[],category:"travel"},":briefcase:":{uc_base:"1f4bc",uc_full:"1f4bc",shortnames:[],category:"people"},":briefs:":{uc_base:"1fa72",uc_full:"1fa72",shortnames:[],category:"people"},":broccoli:":{uc_base:"1f966",uc_full:"1f966",shortnames:[],category:"food"},":broken_heart:":{uc_base:"1f494",uc_full:"1f494",shortnames:[],category:"symbols"},":broom:":{uc_base:"1f9f9",uc_full:"1f9f9",shortnames:[],category:"objects"},":brown_circle:":{uc_base:"1f7e4",uc_full:"1f7e4",shortnames:[],category:"symbols"},":brown_heart:":{uc_base:"1f90e",uc_full:"1f90e",shortnames:[],category:"symbols"},":brown_square:":{uc_base:"1f7eb",uc_full:"1f7eb",shortnames:[],category:"symbols"},":bubble_tea:":{uc_base:"1f9cb",uc_full:"1f9cb",shortnames:[],category:"food"},":bucket:":{uc_base:"1faa3",uc_full:"1faa3",shortnames:[],category:"objects"},":bug:":{uc_base:"1f41b",uc_full:"1f41b",shortnames:[],category:"nature"},":bulb:":{uc_base:"1f4a1",uc_full:"1f4a1",shortnames:[],category:"objects"},":bullettrain_front:":{uc_base:"1f685",uc_full:"1f685",shortnames:[],category:"travel"},":bullettrain_side:":{uc_base:"1f684",uc_full:"1f684",shortnames:[],category:"travel"},":burrito:":{uc_base:"1f32f",uc_full:"1f32f",shortnames:[],category:"food"},":bus:":{uc_base:"1f68c",uc_full:"1f68c",shortnames:[],category:"travel"},":busstop:":{uc_base:"1f68f",uc_full:"1f68f",shortnames:[],category:"travel"},":bust_in_silhouette:":{uc_base:"1f464",uc_full:"1f464",shortnames:[],category:"people"},":busts_in_silhouette:":{uc_base:"1f465",uc_full:"1f465",shortnames:[],category:"people"},":butter:":{uc_base:"1f9c8",uc_full:"1f9c8",shortnames:[],category:"food"},":butterfly:":{uc_base:"1f98b",uc_full:"1f98b",shortnames:[],category:"nature"},":cactus:":{uc_base:"1f335",uc_full:"1f335",shortnames:[],category:"nature"},":cake:":{uc_base:"1f370",uc_full:"1f370",shortnames:[],category:"food"},":calendar:":{uc_base:"1f4c6",uc_full:"1f4c6",shortnames:[],category:"objects"},":calendar_spiral:":{uc_base:"1f5d3",uc_full:"1f5d3-fe0f",shortnames:[":spiral_calendar_pad:"],category:"objects"},":call_me:":{uc_base:"1f919",uc_full:"1f919",shortnames:[":call_me_hand:"],category:"people"},":calling:":{uc_base:"1f4f2",uc_full:"1f4f2",shortnames:[],category:"objects"},":camel:":{uc_base:"1f42b",uc_full:"1f42b",shortnames:[],category:"nature"},":camera:":{uc_base:"1f4f7",uc_full:"1f4f7",shortnames:[],category:"objects"},":camera_with_flash:":{uc_base:"1f4f8",uc_full:"1f4f8",shortnames:[],category:"objects"},":camping:":{uc_base:"1f3d5",uc_full:"1f3d5-fe0f",shortnames:[],category:"travel"},":candle:":{uc_base:"1f56f",uc_full:"1f56f-fe0f",shortnames:[],category:"objects"},":candy:":{uc_base:"1f36c",uc_full:"1f36c",shortnames:[],category:"food"},":canned_food:":{uc_base:"1f96b",uc_full:"1f96b",shortnames:[],category:"food"},":canoe:":{uc_base:"1f6f6",uc_full:"1f6f6",shortnames:[":kayak:"],category:"travel"},":capital_abcd:":{uc_base:"1f520",uc_full:"1f520",shortnames:[],category:"symbols"},":card_box:":{uc_base:"1f5c3",uc_full:"1f5c3-fe0f",shortnames:[":card_file_box:"],category:"objects"},":card_index:":{uc_base:"1f4c7",uc_full:"1f4c7",shortnames:[],category:"objects"},":carousel_horse:":{uc_base:"1f3a0",uc_full:"1f3a0",shortnames:[],category:"travel"},":carpentry_saw:":{uc_base:"1fa9a",uc_full:"1fa9a",shortnames:[],category:"objects"},":carrot:":{uc_base:"1f955",uc_full:"1f955",shortnames:[],category:"food"},":cat2:":{uc_base:"1f408",uc_full:"1f408",shortnames:[],category:"nature"},":cat:":{uc_base:"1f431",uc_full:"1f431",shortnames:[],category:"nature"},":cd:":{uc_base:"1f4bf",uc_full:"1f4bf",shortnames:[],category:"objects"},":chair:":{uc_base:"1fa91",uc_full:"1fa91",shortnames:[],category:"objects"},":champagne:":{uc_base:"1f37e",uc_full:"1f37e",shortnames:[":bottle_with_popping_cork:"],category:"food"},":champagne_glass:":{uc_base:"1f942",uc_full:"1f942",shortnames:[":clinking_glass:"],category:"food"},":chart:":{uc_base:"1f4b9",uc_full:"1f4b9",shortnames:[],category:"symbols"},":chart_with_downwards_trend:":{uc_base:"1f4c9",uc_full:"1f4c9",shortnames:[],category:"objects"},":chart_with_upwards_trend:":{uc_base:"1f4c8",uc_full:"1f4c8",shortnames:[],category:"objects"},":checkered_flag:":{uc_base:"1f3c1",uc_full:"1f3c1",shortnames:[],category:"flags"},":cheese:":{uc_base:"1f9c0",uc_full:"1f9c0",shortnames:[":cheese_wedge:"],category:"food"},":cherries:":{uc_base:"1f352",uc_full:"1f352",shortnames:[],category:"food"},":cherry_blossom:":{uc_base:"1f338",uc_full:"1f338",shortnames:[],category:"nature"},":chestnut:":{uc_base:"1f330",uc_full:"1f330",shortnames:[],category:"food"},":chicken:":{uc_base:"1f414",uc_full:"1f414",shortnames:[],category:"nature"},":child:":{uc_base:"1f9d2",uc_full:"1f9d2",shortnames:[],category:"people"},":children_crossing:":{uc_base:"1f6b8",uc_full:"1f6b8",shortnames:[],category:"symbols"},":chipmunk:":{uc_base:"1f43f",uc_full:"1f43f-fe0f",shortnames:[],category:"nature"},":chocolate_bar:":{uc_base:"1f36b",uc_full:"1f36b",shortnames:[],category:"food"},":chopsticks:":{uc_base:"1f962",uc_full:"1f962",shortnames:[],category:"food"},":christmas_tree:":{uc_base:"1f384",uc_full:"1f384",shortnames:[],category:"nature"},":cinema:":{uc_base:"1f3a6",uc_full:"1f3a6",shortnames:[],category:"symbols"},":circus_tent:":{uc_base:"1f3aa",uc_full:"1f3aa",shortnames:[],category:"activity"},":city_dusk:":{uc_base:"1f306",uc_full:"1f306",shortnames:[],category:"travel"},":city_sunset:":{uc_base:"1f307",uc_full:"1f307",shortnames:[":city_sunrise:"],category:"travel"},":cityscape:":{uc_base:"1f3d9",uc_full:"1f3d9-fe0f",shortnames:[],category:"travel"},":cl:":{uc_base:"1f191",uc_full:"1f191",shortnames:[],category:"symbols"},":clap:":{uc_base:"1f44f",uc_full:"1f44f",shortnames:[],category:"people"},":clapper:":{uc_base:"1f3ac",uc_full:"1f3ac",shortnames:[],category:"activity"},":classical_building:":{uc_base:"1f3db",uc_full:"1f3db-fe0f",shortnames:[],category:"travel"},":clipboard:":{uc_base:"1f4cb",uc_full:"1f4cb",shortnames:[],category:"objects"},":clock1030:":{uc_base:"1f565",uc_full:"1f565",shortnames:[],category:"symbols"},":clock10:":{uc_base:"1f559",uc_full:"1f559",shortnames:[],category:"symbols"},":clock1130:":{uc_base:"1f566",uc_full:"1f566",shortnames:[],category:"symbols"},":clock11:":{uc_base:"1f55a",uc_full:"1f55a",shortnames:[],category:"symbols"},":clock1230:":{uc_base:"1f567",uc_full:"1f567",shortnames:[],category:"symbols"},":clock12:":{uc_base:"1f55b",uc_full:"1f55b",shortnames:[],category:"symbols"},":clock130:":{uc_base:"1f55c",uc_full:"1f55c",shortnames:[],category:"symbols"},":clock1:":{uc_base:"1f550",uc_full:"1f550",shortnames:[],category:"symbols"},":clock230:":{uc_base:"1f55d",uc_full:"1f55d",shortnames:[],category:"symbols"},":clock2:":{uc_base:"1f551",uc_full:"1f551",shortnames:[],category:"symbols"},":clock330:":{uc_base:"1f55e",uc_full:"1f55e",shortnames:[],category:"symbols"},":clock3:":{uc_base:"1f552",uc_full:"1f552",shortnames:[],category:"symbols"},":clock430:":{uc_base:"1f55f",uc_full:"1f55f",shortnames:[],category:"symbols"},":clock4:":{uc_base:"1f553",uc_full:"1f553",shortnames:[],category:"symbols"},":clock530:":{uc_base:"1f560",uc_full:"1f560",shortnames:[],category:"symbols"},":clock5:":{uc_base:"1f554",uc_full:"1f554",shortnames:[],category:"symbols"},":clock630:":{uc_base:"1f561",uc_full:"1f561",shortnames:[],category:"symbols"},":clock6:":{uc_base:"1f555",uc_full:"1f555",shortnames:[],category:"symbols"
},":clock730:":{uc_base:"1f562",uc_full:"1f562",shortnames:[],category:"symbols"},":clock7:":{uc_base:"1f556",uc_full:"1f556",shortnames:[],category:"symbols"},":clock830:":{uc_base:"1f563",uc_full:"1f563",shortnames:[],category:"symbols"},":clock8:":{uc_base:"1f557",uc_full:"1f557",shortnames:[],category:"symbols"},":clock930:":{uc_base:"1f564",uc_full:"1f564",shortnames:[],category:"symbols"},":clock9:":{uc_base:"1f558",uc_full:"1f558",shortnames:[],category:"symbols"},":clock:":{uc_base:"1f570",uc_full:"1f570-fe0f",shortnames:[":mantlepiece_clock:"],category:"objects"},":closed_book:":{uc_base:"1f4d5",uc_full:"1f4d5",shortnames:[],category:"objects"},":closed_lock_with_key:":{uc_base:"1f510",uc_full:"1f510",shortnames:[],category:"objects"},":closed_umbrella:":{uc_base:"1f302",uc_full:"1f302",shortnames:[],category:"people"},":cloud_lightning:":{uc_base:"1f329",uc_full:"1f329-fe0f",shortnames:[":cloud_with_lightning:"],category:"nature"},":cloud_rain:":{uc_base:"1f327",uc_full:"1f327-fe0f",shortnames:[":cloud_with_rain:"],category:"nature"},":cloud_snow:":{uc_base:"1f328",uc_full:"1f328-fe0f",shortnames:[":cloud_with_snow:"],category:"nature"},":cloud_tornado:":{uc_base:"1f32a",uc_full:"1f32a-fe0f",shortnames:[":cloud_with_tornado:"],category:"nature"},":clown:":{uc_base:"1f921",uc_full:"1f921",shortnames:[":clown_face:"],category:"people"},":coat:":{uc_base:"1f9e5",uc_full:"1f9e5",shortnames:[],category:"people"},":cockroach:":{uc_base:"1fab3",uc_full:"1fab3",shortnames:[],category:"nature"},":cocktail:":{uc_base:"1f378",uc_full:"1f378",shortnames:[],category:"food"},":coconut:":{uc_base:"1f965",uc_full:"1f965",shortnames:[],category:"food"},":coin:":{uc_base:"1fa99",uc_full:"1fa99",shortnames:[],category:"objects"},":cold_face:":{uc_base:"1f976",uc_full:"1f976",shortnames:[],category:"people"},":cold_sweat:":{uc_base:"1f630",uc_full:"1f630",shortnames:[],category:"people"},":compass:":{uc_base:"1f9ed",uc_full:"1f9ed",shortnames:[],category:"objects"},":compression:":{uc_base:"1f5dc",uc_full:"1f5dc-fe0f",shortnames:[],category:"objects"},":computer:":{uc_base:"1f4bb",uc_full:"1f4bb",shortnames:[],category:"objects"},":confetti_ball:":{uc_base:"1f38a",uc_full:"1f38a",shortnames:[],category:"objects"},":confounded:":{uc_base:"1f616",uc_full:"1f616",shortnames:[],category:"people"},":confused:":{uc_base:"1f615",uc_full:"1f615",shortnames:[],category:"people"},":construction:":{uc_base:"1f6a7",uc_full:"1f6a7",shortnames:[],category:"travel"},":construction_site:":{uc_base:"1f3d7",uc_full:"1f3d7-fe0f",shortnames:[":building_construction:"],category:"travel"},":construction_worker:":{uc_base:"1f477",uc_full:"1f477",shortnames:[],category:"people"},":control_knobs:":{uc_base:"1f39b",uc_full:"1f39b-fe0f",shortnames:[],category:"objects"},":convenience_store:":{uc_base:"1f3ea",uc_full:"1f3ea",shortnames:[],category:"travel"},":cookie:":{uc_base:"1f36a",uc_full:"1f36a",shortnames:[],category:"food"},":cooking:":{uc_base:"1f373",uc_full:"1f373",shortnames:[],category:"food"},":cool:":{uc_base:"1f192",uc_full:"1f192",shortnames:[],category:"symbols"},":corn:":{uc_base:"1f33d",uc_full:"1f33d",shortnames:[],category:"food"},":couch:":{uc_base:"1f6cb",uc_full:"1f6cb-fe0f",shortnames:[":couch_and_lamp:"],category:"objects"},":couple:":{uc_base:"1f46b",uc_full:"1f46b",shortnames:[],category:"people"},":couple_with_heart:":{uc_base:"1f491",uc_full:"1f491",shortnames:[],category:"people"},":couplekiss:":{uc_base:"1f48f",uc_full:"1f48f",shortnames:[],category:"people"},":cow2:":{uc_base:"1f404",uc_full:"1f404",shortnames:[],category:"nature"},":cow:":{uc_base:"1f42e",uc_full:"1f42e",shortnames:[],category:"nature"},":cowboy:":{uc_base:"1f920",uc_full:"1f920",shortnames:[":face_with_cowboy_hat:"],category:"people"},":crab:":{uc_base:"1f980",uc_full:"1f980",shortnames:[],category:"nature"},":crayon:":{uc_base:"1f58d",uc_full:"1f58d-fe0f",shortnames:[":lower_left_crayon:"],category:"objects"},":credit_card:":{uc_base:"1f4b3",uc_full:"1f4b3",shortnames:[],category:"objects"},":crescent_moon:":{uc_base:"1f319",uc_full:"1f319",shortnames:[],category:"nature"},":cricket:":{uc_base:"1f997",uc_full:"1f997",shortnames:[],category:"nature"},":cricket_game:":{uc_base:"1f3cf",uc_full:"1f3cf",shortnames:[":cricket_bat_ball:"],category:"activity"},":crocodile:":{uc_base:"1f40a",uc_full:"1f40a",shortnames:[],category:"nature"},":croissant:":{uc_base:"1f950",uc_full:"1f950",shortnames:[],category:"food"},":crossed_flags:":{uc_base:"1f38c",uc_full:"1f38c",shortnames:[],category:"flags"},":crown:":{uc_base:"1f451",uc_full:"1f451",shortnames:[],category:"people"},":cruise_ship:":{uc_base:"1f6f3",uc_full:"1f6f3-fe0f",shortnames:[":passenger_ship:"],category:"travel"},":cry:":{uc_base:"1f622",uc_full:"1f622",shortnames:[],category:"people"},":crying_cat_face:":{uc_base:"1f63f",uc_full:"1f63f",shortnames:[],category:"people"},":crystal_ball:":{uc_base:"1f52e",uc_full:"1f52e",shortnames:[],category:"objects"},":cucumber:":{uc_base:"1f952",uc_full:"1f952",shortnames:[],category:"food"},":cup_with_straw:":{uc_base:"1f964",uc_full:"1f964",shortnames:[],category:"food"},":cupcake:":{uc_base:"1f9c1",uc_full:"1f9c1",shortnames:[],category:"food"},":cupid:":{uc_base:"1f498",uc_full:"1f498",shortnames:[],category:"symbols"},":curling_stone:":{uc_base:"1f94c",uc_full:"1f94c",shortnames:[],category:"activity"},":curly_haired:":{uc_base:"1f9b1",uc_full:"1f9b1",shortnames:[],category:"people"},":currency_exchange:":{uc_base:"1f4b1",uc_full:"1f4b1",shortnames:[],category:"symbols"},":curry:":{uc_base:"1f35b",uc_full:"1f35b",shortnames:[],category:"food"},":custard:":{uc_base:"1f36e",uc_full:"1f36e",shortnames:[":pudding:",":flan:"],category:"food"},":customs:":{uc_base:"1f6c3",uc_full:"1f6c3",shortnames:[],category:"symbols"},":cut_of_meat:":{uc_base:"1f969",uc_full:"1f969",shortnames:[],category:"food"},":cyclone:":{uc_base:"1f300",uc_full:"1f300",shortnames:[],category:"symbols"},":dagger:":{uc_base:"1f5e1",uc_full:"1f5e1-fe0f",shortnames:[":dagger_knife:"],category:"objects"},":dancer:":{uc_base:"1f483",uc_full:"1f483",shortnames:[],category:"people"},":dango:":{uc_base:"1f361",uc_full:"1f361",shortnames:[],category:"food"},":dark_sunglasses:":{uc_base:"1f576",uc_full:"1f576-fe0f",shortnames:[],category:"people"},":dart:":{uc_base:"1f3af",uc_full:"1f3af",shortnames:[],category:"activity"},":dash:":{uc_base:"1f4a8",uc_full:"1f4a8",shortnames:[],category:"nature"},":date:":{uc_base:"1f4c5",uc_full:"1f4c5",shortnames:[],category:"objects"},":deaf_person:":{uc_base:"1f9cf",uc_full:"1f9cf",shortnames:[],category:"people"},":deciduous_tree:":{uc_base:"1f333",uc_full:"1f333",shortnames:[],category:"nature"},":deer:":{uc_base:"1f98c",uc_full:"1f98c",shortnames:[],category:"nature"},":department_store:":{uc_base:"1f3ec",uc_full:"1f3ec",shortnames:[],category:"travel"},":desert:":{uc_base:"1f3dc",uc_full:"1f3dc-fe0f",shortnames:[],category:"travel"},":desktop:":{uc_base:"1f5a5",uc_full:"1f5a5-fe0f",shortnames:[":desktop_computer:"],category:"objects"},":detective:":{uc_base:"1f575",uc_full:"1f575",shortnames:[":spy:",":sleuth_or_spy:"],category:"people"},":diamond_shape_with_a_dot_inside:":{uc_base:"1f4a0",uc_full:"1f4a0",shortnames:[],category:"symbols"},":disappointed:":{uc_base:"1f61e",uc_full:"1f61e",shortnames:[],category:"people"},":disappointed_relieved:":{uc_base:"1f625",uc_full:"1f625",shortnames:[],category:"people"},":disguised_face:":{uc_base:"1f978",uc_full:"1f978",shortnames:[],category:"people"},":dividers:":{uc_base:"1f5c2",uc_full:"1f5c2-fe0f",shortnames:[":card_index_dividers:"],category:"objects"},":diving_mask:":{uc_base:"1f93f",uc_full:"1f93f",shortnames:[],category:"activity"},":diya_lamp:":{uc_base:"1fa94",uc_full:"1fa94",shortnames:[],category:"objects"},":dizzy:":{uc_base:"1f4ab",uc_full:"1f4ab",shortnames:[],category:"nature"},":dizzy_face:":{uc_base:"1f635",uc_full:"1f635",shortnames:[],category:"people"},":dna:":{uc_base:"1f9ec",uc_full:"1f9ec",shortnames:[],category:"objects"},":do_not_litter:":{uc_base:"1f6af",uc_full:"1f6af",shortnames:[],category:"symbols"},":dodo:":{uc_base:"1f9a4",uc_full:"1f9a4",shortnames:[],category:"nature"},":dog2:":{uc_base:"1f415",uc_full:"1f415",shortnames:[],category:"nature"},":dog:":{uc_base:"1f436",uc_full:"1f436",shortnames:[],category:"nature"},":dollar:":{uc_base:"1f4b5",uc_full:"1f4b5",shortnames:[],category:"objects"},":dolls:":{uc_base:"1f38e",uc_full:"1f38e",shortnames:[],category:"objects"},":dolphin:":{uc_base:"1f42c",uc_full:"1f42c",shortnames:[],category:"nature"},":door:":{uc_base:"1f6aa",uc_full:"1f6aa",shortnames:[],category:"objects"},":doughnut:":{uc_base:"1f369",uc_full:"1f369",shortnames:[],category:"food"},":dove:":{uc_base:"1f54a",uc_full:"1f54a-fe0f",shortnames:[":dove_of_peace:"],category:"nature"},":dragon:":{uc_base:"1f409",uc_full:"1f409",shortnames:[],category:"nature"},":dragon_face:":{uc_base:"1f432",uc_full:"1f432",shortnames:[],category:"nature"},":dress:":{uc_base:"1f457",uc_full:"1f457",shortnames:[],category:"people"},":dromedary_camel:":{uc_base:"1f42a",uc_full:"1f42a",shortnames:[],category:"nature"},":drooling_face:":{uc_base:"1f924",uc_full:"1f924",shortnames:[":drool:"],category:"people"},":drop_of_blood:":{uc_base:"1fa78",uc_full:"1fa78",shortnames:[],category:"objects"},":droplet:":{uc_base:"1f4a7",uc_full:"1f4a7",shortnames:[],category:"nature"},":drum:":{uc_base:"1f941",uc_full:"1f941",shortnames:[":drum_with_drumsticks:"],category:"activity"},":duck:":{uc_base:"1f986",uc_full:"1f986",shortnames:[],category:"nature"},":dumpling:":{uc_base:"1f95f",uc_full:"1f95f",shortnames:[],category:"food"},":dvd:":{uc_base:"1f4c0",uc_full:"1f4c0",shortnames:[],category:"objects"},":e-mail:":{uc_base:"1f4e7",uc_full:"1f4e7",shortnames:[":email:"],category:"objects"},":eagle:":{uc_base:"1f985",uc_full:"1f985",shortnames:[],category:"nature"},":ear:":{uc_base:"1f442",uc_full:"1f442",shortnames:[],category:"people"},":ear_of_rice:":{uc_base:"1f33e",uc_full:"1f33e",shortnames:[],category:"nature"},":ear_with_hearing_aid:":{uc_base:"1f9bb",uc_full:"1f9bb",shortnames:[],category:"people"},":earth_africa:":{uc_base:"1f30d",uc_full:"1f30d",shortnames:[],category:"nature"},":earth_americas:":{uc_base:"1f30e",uc_full:"1f30e",shortnames:[],category:"nature"},":earth_asia:":{uc_base:"1f30f",uc_full:"1f30f",shortnames:[],category:"nature"},":egg:":{uc_base:"1f95a",uc_full:"1f95a",shortnames:[],category:"food"},":eggplant:":{uc_base:"1f346",uc_full:"1f346",shortnames:[],category:"food"},":electric_plug:":{uc_base:"1f50c",uc_full:"1f50c",shortnames:[],category:"objects"},":elephant:":{uc_base:"1f418",uc_full:"1f418",shortnames:[],category:"nature"},":elevator:":{uc_base:"1f6d7",uc_full:"1f6d7",shortnames:[],category:"symbols"},":elf:":{uc_base:"1f9dd",uc_full:"1f9dd",shortnames:[],category:"people"},":end:":{uc_base:"1f51a",uc_full:"1f51a",shortnames:[],category:"symbols"},":envelope_with_arrow:":{uc_base:"1f4e9",uc_full:"1f4e9",shortnames:[],category:"objects"},":euro:":{uc_base:"1f4b6",uc_full:"1f4b6",shortnames:[],category:"objects"},":european_castle:":{uc_base:"1f3f0",uc_full:"1f3f0",shortnames:[],category:"travel"},":european_post_office:":{uc_base:"1f3e4",uc_full:"1f3e4",shortnames:[],category:"travel"},":evergreen_tree:":{uc_base:"1f332",uc_full:"1f332",shortnames:[],category:"nature"},":exploding_head:":{uc_base:"1f92f",uc_full:"1f92f",shortnames:[],category:"people"},":expressionless:":{uc_base:"1f611",uc_full:"1f611",shortnames:[],category:"people"},":eye:":{uc_base:"1f441",uc_full:"1f441-fe0f",shortnames:[],category:"people"},":eyeglasses:":{uc_base:"1f453",uc_full:"1f453",shortnames:[],category:"people"},":eyes:":{uc_base:"1f440",uc_full:"1f440",shortnames:[],category:"people"},":face_vomiting:":{uc_base:"1f92e",uc_full:"1f92e",shortnames:[],category:"people"},":face_with_hand_over_mouth:":{uc_base:"1f92d",uc_full:"1f92d",shortnames:[],category:"people"},":face_with_monocle:":{uc_base:"1f9d0",uc_full:"1f9d0",shortnames:[],category:"people"},":face_with_raised_eyebrow:":{uc_base:"1f928",uc_full:"1f928",shortnames:[],category:"people"},":face_with_symbols_over_mouth:":{uc_base:"1f92c",uc_full:"1f92c",shortnames:[],category:"people"},":factory:":{uc_base:"1f3ed",uc_full:"1f3ed",shortnames:[],category:"travel"},":fairy:":{uc_base:"1f9da",uc_full:"1f9da",shortnames:[],category:"people"},":falafel:":{uc_base:"1f9c6",uc_full:"1f9c6",shortnames:[],category:"food"},":fallen_leaf:":{uc_base:"1f342",uc_full:"1f342",shortnames:[],category:"nature"},":family:":{uc_base:"1f46a",uc_full:"1f46a",shortnames:[],category:"people"},":fax:":{uc_base:"1f4e0",uc_full:"1f4e0",shortnames:[],category:"objects"},":fearful:":{uc_base:"1f628",uc_full:"1f628",shortnames:[],category:"people"},":feather:":{uc_base:"1fab6",uc_full:"1fab6",shortnames:[],category:"nature"},":feet:":{uc_base:"1f43e",uc_full:"1f43e",shortnames:[":paw_prints:"],category:"nature"},":ferris_wheel:":{uc_base:"1f3a1",uc_full:"1f3a1",shortnames:[],category:"travel"},":field_hockey:":{uc_base:"1f3d1",uc_full:"1f3d1",shortnames:[],category:"activity"},":file_cabinet:":{uc_base:"1f5c4",uc_full:"1f5c4-fe0f",shortnames:[],category:"objects"},":file_folder:":{uc_base:"1f4c1",uc_full:"1f4c1",shortnames:[],category:"objects"},":film_frames:":{uc_base:"1f39e",uc_full:"1f39e-fe0f",shortnames:[],category:"objects"},":fingers_crossed:":{uc_base:"1f91e",uc_full:"1f91e",shortnames:[":hand_with_index_and_middle_finger_crossed:"],category:"people"},":fire:":{uc_base:"1f525",uc_full:"1f525",shortnames:[":flame:"],category:"nature"},":fire_engine:":{uc_base:"1f692",uc_full:"1f692",shortnames:[],category:"travel"},":fire_extinguisher:":{uc_base:"1f9ef",uc_full:"1f9ef",shortnames:[],category:"objects"},":firecracker:":{uc_base:"1f9e8",uc_full:"1f9e8",shortnames:[],category:"objects"},":fireworks:":{uc_base:"1f386",uc_full:"1f386",shortnames:[],category:"travel"},":first_place:":{uc_base:"1f947",uc_full:"1f947",shortnames:[":first_place_medal:"],category:"activity"},":first_quarter_moon:":{uc_base:"1f313",uc_full:"1f313",shortnames:[],category:"nature"},":first_quarter_moon_with_face:":{uc_base:"1f31b",uc_full:"1f31b",shortnames:[],category:"nature"},":fish:":{uc_base:"1f41f",uc_full:"1f41f",shortnames:[],category:"nature"},":fish_cake:":{uc_base:"1f365",uc_full:"1f365",shortnames:[],category:"food"},":fishing_pole_and_fish:":{uc_base:"1f3a3",uc_full:"1f3a3",shortnames:[],category:"activity"},":flag_black:":{uc_base:"1f3f4",uc_full:"1f3f4",shortnames:[":waving_black_flag:"],category:"flags"},":flag_white:":{uc_base:"1f3f3",uc_full:"1f3f3-fe0f",shortnames:[":waving_white_flag:"],category:"flags"},":flags:":{uc_base:"1f38f",uc_full:"1f38f",shortnames:[],category:"objects"},":flamingo:":{uc_base:"1f9a9",uc_full:"1f9a9",shortnames:[],category:"nature"},":flashlight:":{uc_base:"1f526",uc_full:"1f526",shortnames:[],category:"objects"},":flatbread:":{uc_base:"1fad3",uc_full:"1fad3",shortnames:[],category:"food"},":floppy_disk:":{uc_base:"1f4be",uc_full:"1f4be",shortnames:[],category:"objects"},":flower_playing_cards:":{uc_base:"1f3b4",uc_full:"1f3b4",shortnames:[],category:"symbols"},":flushed:":{uc_base:"1f633",uc_full:"1f633",shortnames:[],category:"people"},":fly:":{uc_base:"1fab0",uc_full:"1fab0",shortnames:[],category:"nature"},":flying_disc:":{uc_base:"1f94f",uc_full:"1f94f",shortnames:[],category:"activity"},":flying_saucer:":{uc_base:"1f6f8",uc_full:"1f6f8",shortnames:[],category:"travel"},":fog:":{uc_base:"1f32b",uc_full:"1f32b-fe0f",shortnames:[],category:"nature"},":foggy:":{uc_base:"1f301",uc_full:"1f301",shortnames:[],category:"travel"},":fondue:":{uc_base:"1fad5",uc_full:"1fad5",shortnames:[],category:"food"},":foot:":{uc_base:"1f9b6",uc_full:"1f9b6",shortnames:[],category:"people"},":football:":{uc_base:"1f3c8",uc_full:"1f3c8",shortnames:[],category:"activity"},":footprints:":{uc_base:"1f463",uc_full:"1f463",shortnames:[],category:"people"},":fork_and_knife:":{uc_base:"1f374",uc_full:"1f374",shortnames:[],category:"food"},":fork_knife_plate:":{uc_base:"1f37d",uc_full:"1f37d-fe0f",shortnames:[":fork_and_knife_with_plate:"],category:"food"},":fortune_cookie:":{uc_base:"1f960",uc_full:"1f960",shortnames:[],category:"food"},":four_leaf_clover:":{uc_base:"1f340",uc_full:"1f340",shortnames:[],category:"nature"},":fox:":{uc_base:"1f98a",uc_full:"1f98a",shortnames:[":fox_face:"],category:"nature"},":frame_photo:":{uc_base:"1f5bc",uc_full:"1f5bc-fe0f",shortnames:[":frame_with_picture:"],category:"objects"},":free:":{uc_base:"1f193",uc_full:"1f193",shortnames:[],category:"symbols"},":french_bread:":{uc_base:"1f956",uc_full:"1f956",shortnames:[":baguette_bread:"],category:"food"},":fried_shrimp:":{uc_base:"1f364",uc_full:"1f364",shortnames:[],category:"food"},":fries:":{uc_base:"1f35f",uc_full:"1f35f",shortnames:[],category:"food"},":frog:":{uc_base:"1f438",uc_full:"1f438",shortnames:[],category:"nature"},":frowning:":{uc_base:"1f626",uc_full:"1f626",shortnames:[],category:"people"},":full_moon:":{uc_base:"1f315",uc_full:"1f315",shortnames:[],category:"nature"},":full_moon_with_face:":{uc_base:"1f31d",uc_full:"1f31d",shortnames:[],category:"nature"},":game_die:":{uc_base:"1f3b2",uc_full:"1f3b2",shortnames:[],category:"activity"},":garlic:":{uc_base:"1f9c4",uc_full:"1f9c4",shortnames:[],category:"food"},":gem:":{uc_base:"1f48e",uc_full:"1f48e",shortnames:[],category:"objects"},":genie:":{uc_base:"1f9de",uc_full:"1f9de",shortnames:[],category:"people"},":ghost:":{uc_base:"1f47b",uc_full:"1f47b",shortnames:[],category:"people"},":gift:":{uc_base:"1f381",uc_full:"1f381",shortnames:[],category:"objects"},":gift_heart:":{uc_base:"1f49d",uc_full:"1f49d",shortnames:[],category:"symbols"},":giraffe:":{uc_base:"1f992",uc_full:"1f992",shortnames:[],category:"nature"},":girl:":{uc_base:"1f467",uc_full:"1f467",shortnames:[],category:"people"},":globe_with_meridians:":{uc_base:"1f310",uc_full:"1f310",shortnames:[],category:"symbols"},":gloves:":{uc_base:"1f9e4",uc_full:"1f9e4",shortnames:[],category:"people"},":goal:":{uc_base:"1f945",uc_full:"1f945",shortnames:[":goal_net:"],category:"activity"},":goat:":{uc_base:"1f410",uc_full:"1f410",shortnames:[],category:"nature"},":goggles:":{uc_base:"1f97d",uc_full:"1f97d",shortnames:[],category:"people"},":gorilla:":{uc_base:"1f98d",uc_full:"1f98d",shortnames:[],category:"nature"},":grapes:":{uc_base:"1f347",uc_full:"1f347",shortnames:[],category:"food"},":green_apple:":{uc_base:"1f34f",uc_full:"1f34f",shortnames:[],category:"food"},":green_book:":{uc_base:"1f4d7",uc_full:"1f4d7",shortnames:[],category:"objects"},":green_circle:":{uc_base:"1f7e2",uc_full:"1f7e2",shortnames:[],category:"symbols"},":green_heart:":{uc_base:"1f49a",uc_full:"1f49a",shortnames:[],category:"symbols"},":green_square:":{uc_base:"1f7e9",uc_full:"1f7e9",shortnames:[],category:"symbols"},":grimacing:":{uc_base:"1f62c",uc_full:"1f62c",shortnames:[],category:"people"},":grin:":{uc_base:"1f601",uc_full:"1f601",shortnames:[],category:"people"},":grinning:":{uc_base:"1f600",uc_full:"1f600",shortnames:[],category:"people"},":guard:":{uc_base:"1f482",uc_full:"1f482",shortnames:[":guardsman:"],category:"people"},":guide_dog:":{uc_base:"1f9ae",uc_full:"1f9ae",shortnames:[],category:"nature"},":guitar:":{uc_base:"1f3b8",uc_full:"1f3b8",shortnames:[],category:"activity"},":gun:":{uc_base:"1f52b",uc_full:"1f52b",shortnames:[],category:"objects"},":hamburger:":{uc_base:"1f354",uc_full:"1f354",shortnames:[],category:"food"},":hammer:":{uc_base:"1f528",uc_full:"1f528",shortnames:[],category:"objects"},":hamster:":{uc_base:"1f439",uc_full:"1f439",shortnames:[],category:"nature"},":hand_splayed:":{uc_base:"1f590",uc_full:"1f590",shortnames:[":raised_hand_with_fingers_splayed:"],category:"people"},":handbag:":{uc_base:"1f45c",uc_full:"1f45c",shortnames:[],category:"people"},":handshake:":{uc_base:"1f91d",uc_full:"1f91d",shortnames:[":shaking_hands:"],category:"people"},":hatched_chick:":{uc_base:"1f425",uc_full:"1f425",shortnames:[],category:"nature"},":hatching_chick:":{uc_base:"1f423",uc_full:"1f423",shortnames:[],category:"nature"},":head_bandage:":{uc_base:"1f915",uc_full:"1f915",shortnames:[":face_with_head_bandage:"],category:"people"},":headphones:":{uc_base:"1f3a7",uc_full:"1f3a7",shortnames:[],category:"activity"},":headstone:":{uc_base:"1faa6",uc_full:"1faa6",shortnames:[],category:"objects"},":hear_no_evil:":{uc_base:"1f649",uc_full:"1f649",shortnames:[],category:"nature"},":heart_decoration:":{uc_base:"1f49f",uc_full:"1f49f",shortnames:[],category:"symbols"},":heart_eyes:":{uc_base:"1f60d",uc_full:"1f60d",shortnames:[],category:"people"},":heart_eyes_cat:":{uc_base:"1f63b",uc_full:"1f63b",shortnames:[],category:"people"},":heartbeat:":{uc_base:"1f493",uc_full:"1f493",shortnames:[],category:"symbols"},":heartpulse:":{uc_base:"1f497",uc_full:"1f497",shortnames:[],category:"symbols"},":heavy_dollar_sign:":{uc_base:"1f4b2",uc_full:"1f4b2",shortnames:[],category:"symbols"},":hedgehog:":{uc_base:"1f994",uc_full:"1f994",shortnames:[],category:"nature"},":helicopter:":{uc_base:"1f681",uc_full:"1f681",shortnames:[],category:"travel"},":herb:":{uc_base:"1f33f",uc_full:"1f33f",shortnames:[],category:"nature"},":hibiscus:":{uc_base:"1f33a",uc_full:"1f33a",shortnames:[],category:"nature"},":high_brightness:":{uc_base:"1f506",uc_full:"1f506",shortnames:[],category:"symbols"},":high_heel:":{uc_base:"1f460",uc_full:"1f460",shortnames:[],category:"people"},":hiking_boot:":{uc_base:"1f97e",uc_full:"1f97e",shortnames:[],category:"people"},":hindu_temple:":{uc_base:"1f6d5",uc_full:"1f6d5",shortnames:[],category:"travel"},":hippopotamus:":{uc_base:"1f99b",uc_full:"1f99b",shortnames:[],category:"nature"},":hockey:":{uc_base:"1f3d2",uc_full:"1f3d2",shortnames:[],category:"activity"},":hole:":{uc_base:"1f573",uc_full:"1f573-fe0f",shortnames:[],category:"objects"},":homes:":{uc_base:"1f3d8",uc_full:"1f3d8-fe0f",shortnames:[":house_buildings:"],category:"travel"},":honey_pot:":{uc_base:"1f36f",uc_full:"1f36f",shortnames:[],category:"food"},":hook:":{uc_base:"1fa9d",uc_full:"1fa9d",shortnames:[],category:"objects"},":horse:":{uc_base:"1f434",uc_full:"1f434",shortnames:[],category:"nature"},":horse_racing:":{uc_base:"1f3c7",uc_full:"1f3c7",shortnames:[],category:"activity"},":hospital:":{uc_base:"1f3e5",uc_full:"1f3e5",shortnames:[],category:"travel"},":hot_face:":{uc_base:"1f975",uc_full:"1f975",shortnames:[],category:"people"},":hot_pepper:":{uc_base:"1f336",uc_full:"1f336-fe0f",shortnames:[],category:"food"},":hotdog:":{uc_base:"1f32d",uc_full:"1f32d",shortnames:[":hot_dog:"],category:"food"},":hotel:":{uc_base:"1f3e8",uc_full:"1f3e8",shortnames:[],category:"travel"},":house:":{uc_base:"1f3e0",uc_full:"1f3e0",shortnames:[],category:"travel"},":house_abandoned:":{uc_base:"1f3da",uc_full:"1f3da-fe0f",shortnames:[":derelict_house_building:"],category:"travel"},":house_with_garden:":{uc_base:"1f3e1",uc_full:"1f3e1",shortnames:[],category:"travel"},":hugging:":{uc_base:"1f917",uc_full:"1f917",shortnames:[":hugging_face:"],category:"people"},":hushed:":{uc_base:"1f62f",uc_full:"1f62f",shortnames:[],category:"people"},":hut:":{uc_base:"1f6d6",uc_full:"1f6d6",shortnames:[],category:"travel"},":ice_cream:":{uc_base:"1f368",uc_full:"1f368",shortnames:[],category:"food"},":ice_cube:":{uc_base:"1f9ca",uc_full:"1f9ca",shortnames:[],category:"food"},":icecream:":{uc_base:"1f366",uc_full:"1f366",shortnames:[],category:"food"},":id:":{uc_base:"1f194",uc_full:"1f194",shortnames:[],category:"symbols"},":ideograph_advantage:":{uc_base:"1f250",uc_full:"1f250",shortnames:[],category:"symbols"},":imp:":{uc_base:"1f47f",uc_full:"1f47f",shortnames:[],category:"people"},":inbox_tray:":{uc_base:"1f4e5",uc_full:"1f4e5",shortnames:[],category:"objects"},":incoming_envelope:":{uc_base:"1f4e8",uc_full:"1f4e8",shortnames:[],category:"objects"},":innocent:":{uc_base:"1f607",uc_full:"1f607",shortnames:[],category:"people"},":island:":{uc_base:"1f3dd",uc_full:"1f3dd-fe0f",shortnames:[":desert_island:"],category:"travel"},":izakaya_lantern:":{uc_base:"1f3ee",uc_full:"1f3ee",shortnames:[],category:"objects"},":jack_o_lantern:":{uc_base:"1f383",uc_full:"1f383",shortnames:[],category:"people"},":japan:":{uc_base:"1f5fe",uc_full:"1f5fe",shortnames:[],category:"travel"},":japanese_castle:":{uc_base:"1f3ef",uc_full:"1f3ef",shortnames:[],category:"travel"},":japanese_goblin:":{uc_base:"1f47a",uc_full:"1f47a",shortnames:[],category:"people"},":japanese_ogre:":{uc_base:"1f479",uc_full:"1f479",shortnames:[],category:"people"},":jeans:":{uc_base:"1f456",uc_full:"1f456",shortnames:[],category:"people"},":jigsaw:":{uc_base:"1f9e9",uc_full:"1f9e9",shortnames:[],category:"activity"},":joy:":{uc_base:"1f602",uc_full:"1f602",shortnames:[],category:"people"},":joy_cat:":{uc_base:"1f639",uc_full:"1f639",shortnames:[],category:"people"},":joystick:":{uc_base:"1f579",uc_full:"1f579-fe0f",shortnames:[],category:"objects"},":kaaba:":{uc_base:"1f54b",uc_full:"1f54b",shortnames:[],category:"travel"},":kangaroo:":{uc_base:"1f998",uc_full:"1f998",shortnames:[],category:"nature"},":key2:":{uc_base:"1f5dd",uc_full:"1f5dd-fe0f",shortnames:[":old_key:"],category:"objects"},":key:":{uc_base:"1f511",uc_full:"1f511",shortnames:[],category:"objects"},":keycap_ten:":{uc_base:"1f51f",uc_full:"1f51f",shortnames:[],category:"symbols"},":kimono:":{uc_base:"1f458",uc_full:"1f458",shortnames:[],category:"people"},":kiss:":{uc_base:"1f48b",uc_full:"1f48b",shortnames:[],category:"people"},":kissing:":{uc_base:"1f617",uc_full:"1f617",shortnames:[],category:"people"},":kissing_cat:":{uc_base:"1f63d",uc_full:"1f63d",shortnames:[],category:"people"},":kissing_closed_eyes:":{uc_base:"1f61a",uc_full:"1f61a",shortnames:[],category:"people"},":kissing_heart:":{uc_base:"1f618",uc_full:"1f618",shortnames:[],category:"people"},":kissing_smiling_eyes:":{uc_base:"1f619",uc_full:"1f619",shortnames:[],category:"people"},":kite:":{uc_base:"1fa81",uc_full:"1fa81",shortnames:[],category:"activity"},":kiwi:":{uc_base:"1f95d",uc_full:"1f95d",shortnames:[":kiwifruit:"],category:"food"},":knife:":{uc_base:"1f52a",uc_full:"1f52a",shortnames:[],category:"objects"},":knot:":{uc_base:"1faa2",uc_full:"1faa2",shortnames:[],category:"objects"},":koala:":{uc_base:"1f428",uc_full:"1f428",shortnames:[],category:"nature"},":koko:":{uc_base:"1f201",uc_full:"1f201",shortnames:[],category:"symbols"},":lab_coat:":{uc_base:"1f97c",uc_full:"1f97c",shortnames:[],category:"people"},":label:":{uc_base:"1f3f7",uc_full:"1f3f7-fe0f",shortnames:[],category:"objects"},":lacrosse:":{uc_base:"1f94d",uc_full:"1f94d",shortnames:[],category:"activity"},":ladder:":{uc_base:"1fa9c",uc_full:"1fa9c",shortnames:[],category:"objects"},":lady_beetle:":{uc_base:"1f41e",uc_full:"1f41e",shortnames:[],category:"nature"},":large_blue_diamond:":{uc_base:"1f537",uc_full:"1f537",shortnames:[],category:"symbols"},":large_orange_diamond:":{uc_base:"1f536",uc_full:"1f536",shortnames:[],category:"symbols"},":last_quarter_moon:":{uc_base:"1f317",uc_full:"1f317",shortnames:[],category:"nature"},":last_quarter_moon_with_face:":{uc_base:"1f31c",uc_full:"1f31c",shortnames:[],category:"nature"},":laughing:":{uc_base:"1f606",uc_full:"1f606",shortnames:[":satisfied:"],category:"people"},":leafy_green:":{uc_base:"1f96c",uc_full:"1f96c",shortnames:[],category:"food"},":leaves:":{uc_base:"1f343",uc_full:"1f343",shortnames:[],category:"nature"},":ledger:":{uc_base:"1f4d2",uc_full:"1f4d2",shortnames:[],category:"objects"},":left_facing_fist:":{uc_base:"1f91b",uc_full:"1f91b",shortnames:[":left_fist:"],category:"people"},":left_luggage:":{uc_base:"1f6c5",uc_full:"1f6c5",shortnames:[],category:"symbols"},":leg:":{uc_base:"1f9b5",uc_full:"1f9b5",shortnames:[],category:"people"},":lemon:":{uc_base:"1f34b",uc_full:"1f34b",shortnames:[],category:"food"},":leopard:":{uc_base:"1f406",uc_full:"1f406",shortnames:[],category:"nature"},":level_slider:":{uc_base:"1f39a",uc_full:"1f39a-fe0f",shortnames:[],category:"objects"},":levitate:":{uc_base:"1f574",uc_full:"1f574-fe0f",shortnames:[":man_in_business_suit_levitating:"],category:"people"},":light_rail:":{uc_base:"1f688",uc_full:"1f688",shortnames:[],category:"travel"},":link:":{uc_base:"1f517",uc_full:"1f517",shortnames:[],category:"objects"},":lion_face:":{uc_base:"1f981",uc_full:"1f981",shortnames:[":lion:"],category:"nature"},":lips:":{uc_base:"1f444",uc_full:"1f444",shortnames:[],category:"people"},":lipstick:":{uc_base:"1f484",uc_full:"1f484",shortnames:[],category:"people"},":lizard:":{uc_base:"1f98e",uc_full:"1f98e",shortnames:[],category:"nature"},":llama:":{uc_base:"1f999",uc_full:"1f999",shortnames:[],category:"nature"},":lobster:":{uc_base:"1f99e",uc_full:"1f99e",shortnames:[],category:"nature"},":lock:":{uc_base:"1f512",uc_full:"1f512",shortnames:[],category:"objects"},":lock_with_ink_pen:":{uc_base:"1f50f",uc_full:"1f50f",shortnames:[],category:"objects"},":lollipop:":{uc_base:"1f36d",uc_full:"1f36d",shortnames:[],category:"food"},":long_drum:":{uc_base:"1fa98",uc_full:"1fa98",shortnames:[],category:"activity"},":loud_sound:":{uc_base:"1f50a",uc_full:"1f50a",shortnames:[],category:"symbols"},":loudspeaker:":{uc_base:"1f4e2",uc_full:"1f4e2",shortnames:[],category:"symbols"},":love_hotel:":{uc_base:"1f3e9",uc_full:"1f3e9",shortnames:[],category:"travel"},":love_letter:":{uc_base:"1f48c",uc_full:"1f48c",shortnames:[],category:"objects"},":love_you_gesture:":{uc_base:"1f91f",uc_full:"1f91f",shortnames:[],category:"people"},":low_brightness:":{uc_base:"1f505",uc_full:"1f505",shortnames:[],category:"symbols"},":luggage:":{uc_base:"1f9f3",uc_full:"1f9f3",shortnames:[],category:"people"},":lungs:":{uc_base:"1fac1",uc_full:"1fac1",shortnames:[],category:"people"},":lying_face:":{uc_base:"1f925",uc_full:"1f925",shortnames:[":liar:"],category:"people"},":mag:":{uc_base:"1f50d",uc_full:"1f50d",shortnames:[],category:"objects"},":mag_right:":{uc_base:"1f50e",uc_full:"1f50e",shortnames:[],category:"objects"},":mage:":{uc_base:"1f9d9",uc_full:"1f9d9",shortnames:[],category:"people"},":magic_wand:":{uc_base:"1fa84",uc_full:"1fa84",shortnames:[],category:"objects"},":magnet:":{uc_base:"1f9f2",uc_full:"1f9f2",shortnames:[],category:"objects"},":mahjong:":{uc_base:"1f004",uc_full:"1f004",shortnames:[],category:"symbols"},":mailbox:":{uc_base:"1f4eb",uc_full:"1f4eb",shortnames:[],category:"objects"},":mailbox_closed:":{uc_base:"1f4ea",uc_full:"1f4ea",shortnames:[],category:"objects"},":mailbox_with_mail:":{uc_base:"1f4ec",uc_full:"1f4ec",shortnames:[],category:"objects"},":mailbox_with_no_mail:":{uc_base:"1f4ed",uc_full:"1f4ed",shortnames:[],category:"objects"},":mammoth:":{uc_base:"1f9a3",uc_full:"1f9a3",shortnames:[],category:"nature"},":man:":{uc_base:"1f468",uc_full:"1f468",shortnames:[],category:"people"},":man_dancing:":{uc_base:"1f57a",uc_full:"1f57a",shortnames:[":male_dancer:"],category:"people"},":man_with_chinese_cap:":{uc_base:"1f472",uc_full:"1f472",shortnames:[":man_with_gua_pi_mao:"],category:"people"},":mango:":{uc_base:"1f96d",uc_full:"1f96d",shortnames:[],category:"food"},":mans_shoe:":{uc_base:"1f45e",uc_full:"1f45e",shortnames:[],category:"people"},":manual_wheelchair:":{uc_base:"1f9bd",uc_full:"1f9bd",shortnames:[],category:"travel"},":map:":{uc_base:"1f5fa",uc_full:"1f5fa-fe0f",shortnames:[":world_map:"],category:"travel"},":maple_leaf:":{uc_base:"1f341",uc_full:"1f341",shortnames:[],category:"nature"},":martial_arts_uniform:":{uc_base:"1f94b",uc_full:"1f94b",shortnames:[":karate_uniform:"],category:"activity"},":mask:":{uc_base:"1f637",uc_full:"1f637",shortnames:[],category:"people"},":mate:":{uc_base:"1f9c9",uc_full:"1f9c9",shortnames:[],category:"food"},":meat_on_bone:":{uc_base:"1f356",uc_full:"1f356",shortnames:[],category:"food"},":mechanical_arm:":{uc_base:"1f9be",uc_full:"1f9be",shortnames:[],category:"people"},":mechanical_leg:":{uc_base:"1f9bf",uc_full:"1f9bf",shortnames:[],category:"people"},":medal:":{uc_base:"1f3c5",uc_full:"1f3c5",shortnames:[":sports_medal:"],category:"activity"},":mega:":{uc_base:"1f4e3",uc_full:"1f4e3",shortnames:[],category:"symbols"},
":melon:":{uc_base:"1f348",uc_full:"1f348",shortnames:[],category:"food"},":menorah:":{uc_base:"1f54e",uc_full:"1f54e",shortnames:[],category:"symbols"},":mens:":{uc_base:"1f6b9",uc_full:"1f6b9",shortnames:[],category:"symbols"},":merperson:":{uc_base:"1f9dc",uc_full:"1f9dc",shortnames:[],category:"people"},":metal:":{uc_base:"1f918",uc_full:"1f918",shortnames:[":sign_of_the_horns:"],category:"people"},":metro:":{uc_base:"1f687",uc_full:"1f687",shortnames:[],category:"travel"},":microbe:":{uc_base:"1f9a0",uc_full:"1f9a0",shortnames:[],category:"objects"},":microphone2:":{uc_base:"1f399",uc_full:"1f399-fe0f",shortnames:[":studio_microphone:"],category:"objects"},":microphone:":{uc_base:"1f3a4",uc_full:"1f3a4",shortnames:[],category:"activity"},":microscope:":{uc_base:"1f52c",uc_full:"1f52c",shortnames:[],category:"objects"},":middle_finger:":{uc_base:"1f595",uc_full:"1f595",shortnames:[":reversed_hand_with_middle_finger_extended:"],category:"people"},":military_helmet:":{uc_base:"1fa96",uc_full:"1fa96",shortnames:[],category:"people"},":military_medal:":{uc_base:"1f396",uc_full:"1f396-fe0f",shortnames:[],category:"activity"},":milk:":{uc_base:"1f95b",uc_full:"1f95b",shortnames:[":glass_of_milk:"],category:"food"},":milky_way:":{uc_base:"1f30c",uc_full:"1f30c",shortnames:[],category:"travel"},":minibus:":{uc_base:"1f690",uc_full:"1f690",shortnames:[],category:"travel"},":minidisc:":{uc_base:"1f4bd",uc_full:"1f4bd",shortnames:[],category:"objects"},":mirror:":{uc_base:"1fa9e",uc_full:"1fa9e",shortnames:[],category:"objects"},":mobile_phone:":{uc_base:"1f4f1",uc_full:"1f4f1",shortnames:[],category:"objects"},":mobile_phone_off:":{uc_base:"1f4f4",uc_full:"1f4f4",shortnames:[],category:"symbols"},":money_mouth:":{uc_base:"1f911",uc_full:"1f911",shortnames:[":money_mouth_face:"],category:"people"},":money_with_wings:":{uc_base:"1f4b8",uc_full:"1f4b8",shortnames:[],category:"objects"},":moneybag:":{uc_base:"1f4b0",uc_full:"1f4b0",shortnames:[],category:"objects"},":monkey:":{uc_base:"1f412",uc_full:"1f412",shortnames:[],category:"nature"},":monkey_face:":{uc_base:"1f435",uc_full:"1f435",shortnames:[],category:"nature"},":monorail:":{uc_base:"1f69d",uc_full:"1f69d",shortnames:[],category:"travel"},":moon_cake:":{uc_base:"1f96e",uc_full:"1f96e",shortnames:[],category:"food"},":mortar_board:":{uc_base:"1f393",uc_full:"1f393",shortnames:[],category:"people"},":mosque:":{uc_base:"1f54c",uc_full:"1f54c",shortnames:[],category:"travel"},":mosquito:":{uc_base:"1f99f",uc_full:"1f99f",shortnames:[],category:"nature"},":motor_scooter:":{uc_base:"1f6f5",uc_full:"1f6f5",shortnames:[":motorbike:"],category:"travel"},":motorboat:":{uc_base:"1f6e5",uc_full:"1f6e5-fe0f",shortnames:[],category:"travel"},":motorcycle:":{uc_base:"1f3cd",uc_full:"1f3cd-fe0f",shortnames:[":racing_motorcycle:"],category:"travel"},":motorized_wheelchair:":{uc_base:"1f9bc",uc_full:"1f9bc",shortnames:[],category:"travel"},":motorway:":{uc_base:"1f6e3",uc_full:"1f6e3-fe0f",shortnames:[],category:"travel"},":mount_fuji:":{uc_base:"1f5fb",uc_full:"1f5fb",shortnames:[],category:"travel"},":mountain_cableway:":{uc_base:"1f6a0",uc_full:"1f6a0",shortnames:[],category:"travel"},":mountain_railway:":{uc_base:"1f69e",uc_full:"1f69e",shortnames:[],category:"travel"},":mountain_snow:":{uc_base:"1f3d4",uc_full:"1f3d4-fe0f",shortnames:[":snow_capped_mountain:"],category:"travel"},":mouse2:":{uc_base:"1f401",uc_full:"1f401",shortnames:[],category:"nature"},":mouse:":{uc_base:"1f42d",uc_full:"1f42d",shortnames:[],category:"nature"},":mouse_three_button:":{uc_base:"1f5b1",uc_full:"1f5b1-fe0f",shortnames:[":three_button_mouse:"],category:"objects"},":mouse_trap:":{uc_base:"1faa4",uc_full:"1faa4",shortnames:[],category:"objects"},":movie_camera:":{uc_base:"1f3a5",uc_full:"1f3a5",shortnames:[],category:"objects"},":moyai:":{uc_base:"1f5ff",uc_full:"1f5ff",shortnames:[],category:"travel"},":mrs_claus:":{uc_base:"1f936",uc_full:"1f936",shortnames:[":mother_christmas:"],category:"people"},":muscle:":{uc_base:"1f4aa",uc_full:"1f4aa",shortnames:[],category:"people"},":mushroom:":{uc_base:"1f344",uc_full:"1f344",shortnames:[],category:"nature"},":musical_keyboard:":{uc_base:"1f3b9",uc_full:"1f3b9",shortnames:[],category:"activity"},":musical_note:":{uc_base:"1f3b5",uc_full:"1f3b5",shortnames:[],category:"symbols"},":musical_score:":{uc_base:"1f3bc",uc_full:"1f3bc",shortnames:[],category:"activity"},":mute:":{uc_base:"1f507",uc_full:"1f507",shortnames:[],category:"symbols"},":nail_care:":{uc_base:"1f485",uc_full:"1f485",shortnames:[],category:"people"},":name_badge:":{uc_base:"1f4db",uc_full:"1f4db",shortnames:[],category:"symbols"},":nauseated_face:":{uc_base:"1f922",uc_full:"1f922",shortnames:[":sick:"],category:"people"},":nazar_amulet:":{uc_base:"1f9ff",uc_full:"1f9ff",shortnames:[],category:"objects"},":necktie:":{uc_base:"1f454",uc_full:"1f454",shortnames:[],category:"people"},":nerd:":{uc_base:"1f913",uc_full:"1f913",shortnames:[":nerd_face:"],category:"people"},":nesting_dolls:":{uc_base:"1fa86",uc_full:"1fa86",shortnames:[],category:"objects"},":neutral_face:":{uc_base:"1f610",uc_full:"1f610",shortnames:[],category:"people"},":new:":{uc_base:"1f195",uc_full:"1f195",shortnames:[],category:"symbols"},":new_moon:":{uc_base:"1f311",uc_full:"1f311",shortnames:[],category:"nature"},":new_moon_with_face:":{uc_base:"1f31a",uc_full:"1f31a",shortnames:[],category:"nature"},":newspaper2:":{uc_base:"1f5de",uc_full:"1f5de-fe0f",shortnames:[":rolled_up_newspaper:"],category:"objects"},":newspaper:":{uc_base:"1f4f0",uc_full:"1f4f0",shortnames:[],category:"objects"},":ng:":{uc_base:"1f196",uc_full:"1f196",shortnames:[],category:"symbols"},":night_with_stars:":{uc_base:"1f303",uc_full:"1f303",shortnames:[],category:"travel"},":ninja:":{uc_base:"1f977",uc_full:"1f977",shortnames:[],category:"people"},":no_bell:":{uc_base:"1f515",uc_full:"1f515",shortnames:[],category:"symbols"},":no_bicycles:":{uc_base:"1f6b3",uc_full:"1f6b3",shortnames:[],category:"symbols"},":no_entry_sign:":{uc_base:"1f6ab",uc_full:"1f6ab",shortnames:[],category:"symbols"},":no_mobile_phones:":{uc_base:"1f4f5",uc_full:"1f4f5",shortnames:[],category:"symbols"},":no_mouth:":{uc_base:"1f636",uc_full:"1f636",shortnames:[],category:"people"},":no_pedestrians:":{uc_base:"1f6b7",uc_full:"1f6b7",shortnames:[],category:"symbols"},":no_smoking:":{uc_base:"1f6ad",uc_full:"1f6ad",shortnames:[],category:"symbols"},":non-potable_water:":{uc_base:"1f6b1",uc_full:"1f6b1",shortnames:[],category:"symbols"},":nose:":{uc_base:"1f443",uc_full:"1f443",shortnames:[],category:"people"},":notebook:":{uc_base:"1f4d3",uc_full:"1f4d3",shortnames:[],category:"objects"},":notebook_with_decorative_cover:":{uc_base:"1f4d4",uc_full:"1f4d4",shortnames:[],category:"objects"},":notepad_spiral:":{uc_base:"1f5d2",uc_full:"1f5d2-fe0f",shortnames:[":spiral_note_pad:"],category:"objects"},":notes:":{uc_base:"1f3b6",uc_full:"1f3b6",shortnames:[],category:"symbols"},":nut_and_bolt:":{uc_base:"1f529",uc_full:"1f529",shortnames:[],category:"objects"},":o2:":{uc_base:"1f17e",uc_full:"1f17e-fe0f",shortnames:[],category:"symbols"},":ocean:":{uc_base:"1f30a",uc_full:"1f30a",shortnames:[],category:"nature"},":octagonal_sign:":{uc_base:"1f6d1",uc_full:"1f6d1",shortnames:[":stop_sign:"],category:"symbols"},":octopus:":{uc_base:"1f419",uc_full:"1f419",shortnames:[],category:"nature"},":oden:":{uc_base:"1f362",uc_full:"1f362",shortnames:[],category:"food"},":office:":{uc_base:"1f3e2",uc_full:"1f3e2",shortnames:[],category:"travel"},":oil:":{uc_base:"1f6e2",uc_full:"1f6e2-fe0f",shortnames:[":oil_drum:"],category:"objects"},":ok:":{uc_base:"1f197",uc_full:"1f197",shortnames:[],category:"symbols"},":ok_hand:":{uc_base:"1f44c",uc_full:"1f44c",shortnames:[],category:"people"},":older_adult:":{uc_base:"1f9d3",uc_full:"1f9d3",shortnames:[],category:"people"},":older_man:":{uc_base:"1f474",uc_full:"1f474",shortnames:[],category:"people"},":older_woman:":{uc_base:"1f475",uc_full:"1f475",shortnames:[":grandma:"],category:"people"},":olive:":{uc_base:"1fad2",uc_full:"1fad2",shortnames:[],category:"food"},":om_symbol:":{uc_base:"1f549",uc_full:"1f549-fe0f",shortnames:[],category:"symbols"},":on:":{uc_base:"1f51b",uc_full:"1f51b",shortnames:[],category:"symbols"},":oncoming_automobile:":{uc_base:"1f698",uc_full:"1f698",shortnames:[],category:"travel"},":oncoming_bus:":{uc_base:"1f68d",uc_full:"1f68d",shortnames:[],category:"travel"},":oncoming_police_car:":{uc_base:"1f694",uc_full:"1f694",shortnames:[],category:"travel"},":oncoming_taxi:":{uc_base:"1f696",uc_full:"1f696",shortnames:[],category:"travel"},":one_piece_swimsuit:":{uc_base:"1fa71",uc_full:"1fa71",shortnames:[],category:"people"},":onion:":{uc_base:"1f9c5",uc_full:"1f9c5",shortnames:[],category:"food"},":open_file_folder:":{uc_base:"1f4c2",uc_full:"1f4c2",shortnames:[],category:"objects"},":open_hands:":{uc_base:"1f450",uc_full:"1f450",shortnames:[],category:"people"},":open_mouth:":{uc_base:"1f62e",uc_full:"1f62e",shortnames:[],category:"people"},":orange_book:":{uc_base:"1f4d9",uc_full:"1f4d9",shortnames:[],category:"objects"},":orange_circle:":{uc_base:"1f7e0",uc_full:"1f7e0",shortnames:[],category:"symbols"},":orange_heart:":{uc_base:"1f9e1",uc_full:"1f9e1",shortnames:[],category:"symbols"},":orange_square:":{uc_base:"1f7e7",uc_full:"1f7e7",shortnames:[],category:"symbols"},":orangutan:":{uc_base:"1f9a7",uc_full:"1f9a7",shortnames:[],category:"nature"},":otter:":{uc_base:"1f9a6",uc_full:"1f9a6",shortnames:[],category:"nature"},":outbox_tray:":{uc_base:"1f4e4",uc_full:"1f4e4",shortnames:[],category:"objects"},":owl:":{uc_base:"1f989",uc_full:"1f989",shortnames:[],category:"nature"},":ox:":{uc_base:"1f402",uc_full:"1f402",shortnames:[],category:"nature"},":oyster:":{uc_base:"1f9aa",uc_full:"1f9aa",shortnames:[],category:"food"},":package:":{uc_base:"1f4e6",uc_full:"1f4e6",shortnames:[],category:"objects"},":page_facing_up:":{uc_base:"1f4c4",uc_full:"1f4c4",shortnames:[],category:"objects"},":page_with_curl:":{uc_base:"1f4c3",uc_full:"1f4c3",shortnames:[],category:"objects"},":pager:":{uc_base:"1f4df",uc_full:"1f4df",shortnames:[],category:"objects"},":paintbrush:":{uc_base:"1f58c",uc_full:"1f58c-fe0f",shortnames:[":lower_left_paintbrush:"],category:"objects"},":palm_tree:":{uc_base:"1f334",uc_full:"1f334",shortnames:[],category:"nature"},":palms_up_together:":{uc_base:"1f932",uc_full:"1f932",shortnames:[],category:"people"},":pancakes:":{uc_base:"1f95e",uc_full:"1f95e",shortnames:[],category:"food"},":panda_face:":{uc_base:"1f43c",uc_full:"1f43c",shortnames:[],category:"nature"},":paperclip:":{uc_base:"1f4ce",uc_full:"1f4ce",shortnames:[],category:"objects"},":paperclips:":{uc_base:"1f587",uc_full:"1f587-fe0f",shortnames:[":linked_paperclips:"],category:"objects"},":parachute:":{uc_base:"1fa82",uc_full:"1fa82",shortnames:[],category:"activity"},":park:":{uc_base:"1f3de",uc_full:"1f3de-fe0f",shortnames:[":national_park:"],category:"travel"},":parking:":{uc_base:"1f17f",uc_full:"1f17f-fe0f",shortnames:[],category:"symbols"},":parrot:":{uc_base:"1f99c",uc_full:"1f99c",shortnames:[],category:"nature"},":partying_face:":{uc_base:"1f973",uc_full:"1f973",shortnames:[],category:"people"},":passport_control:":{uc_base:"1f6c2",uc_full:"1f6c2",shortnames:[],category:"symbols"},":peach:":{uc_base:"1f351",uc_full:"1f351",shortnames:[],category:"food"},":peacock:":{uc_base:"1f99a",uc_full:"1f99a",shortnames:[],category:"nature"},":peanuts:":{uc_base:"1f95c",uc_full:"1f95c",shortnames:[":shelled_peanut:"],category:"food"},":pear:":{uc_base:"1f350",uc_full:"1f350",shortnames:[],category:"food"},":pen_ballpoint:":{uc_base:"1f58a",uc_full:"1f58a-fe0f",shortnames:[":lower_left_ballpoint_pen:"],category:"objects"},":pen_fountain:":{uc_base:"1f58b",uc_full:"1f58b-fe0f",shortnames:[":lower_left_fountain_pen:"],category:"objects"},":pencil:":{uc_base:"1f4dd",uc_full:"1f4dd",shortnames:[":memo:"],category:"objects"},":penguin:":{uc_base:"1f427",uc_full:"1f427",shortnames:[],category:"nature"},":pensive:":{uc_base:"1f614",uc_full:"1f614",shortnames:[],category:"people"},":people_hugging:":{uc_base:"1fac2",uc_full:"1fac2",shortnames:[],category:"people"},":people_with_bunny_ears_partying:":{uc_base:"1f46f",uc_full:"1f46f",shortnames:[":dancers:"],category:"people"},":people_wrestling:":{uc_base:"1f93c",uc_full:"1f93c",shortnames:[":wrestlers:",":wrestling:"],category:"activity"},":performing_arts:":{uc_base:"1f3ad",uc_full:"1f3ad",shortnames:[],category:"activity"},":persevere:":{uc_base:"1f623",uc_full:"1f623",shortnames:[],category:"people"},":person_biking:":{uc_base:"1f6b4",uc_full:"1f6b4",shortnames:[":bicyclist:"],category:"activity"},":person_bowing:":{uc_base:"1f647",uc_full:"1f647",shortnames:[":bow:"],category:"people"},":person_climbing:":{uc_base:"1f9d7",uc_full:"1f9d7",shortnames:[],category:"activity"},":person_doing_cartwheel:":{uc_base:"1f938",uc_full:"1f938",shortnames:[":cartwheel:"],category:"activity"},":person_facepalming:":{uc_base:"1f926",uc_full:"1f926",shortnames:[":face_palm:",":facepalm:"],category:"people"},":person_fencing:":{uc_base:"1f93a",uc_full:"1f93a",shortnames:[":fencer:",":fencing:"],category:"activity"},":person_frowning:":{uc_base:"1f64d",uc_full:"1f64d",shortnames:[],category:"people"},":person_gesturing_no:":{uc_base:"1f645",uc_full:"1f645",shortnames:[":no_good:"],category:"people"},":person_gesturing_ok:":{uc_base:"1f646",uc_full:"1f646",shortnames:[":ok_woman:"],category:"people"},":person_getting_haircut:":{uc_base:"1f487",uc_full:"1f487",shortnames:[":haircut:"],category:"people"},":person_getting_massage:":{uc_base:"1f486",uc_full:"1f486",shortnames:[":massage:"],category:"people"},":person_golfing:":{uc_base:"1f3cc",uc_full:"1f3cc",shortnames:[":golfer:"],category:"activity"},":person_in_lotus_position:":{uc_base:"1f9d8",uc_full:"1f9d8",shortnames:[],category:"activity"},":person_in_steamy_room:":{uc_base:"1f9d6",uc_full:"1f9d6",shortnames:[],category:"people"},":person_in_tuxedo:":{uc_base:"1f935",uc_full:"1f935",shortnames:[],category:"people"},":person_juggling:":{uc_base:"1f939",uc_full:"1f939",shortnames:[":juggling:",":juggler:"],category:"activity"},":person_kneeling:":{uc_base:"1f9ce",uc_full:"1f9ce",shortnames:[],category:"people"},":person_lifting_weights:":{uc_base:"1f3cb",uc_full:"1f3cb",shortnames:[":lifter:",":weight_lifter:"],category:"activity"},":person_mountain_biking:":{uc_base:"1f6b5",uc_full:"1f6b5",shortnames:[":mountain_bicyclist:"],category:"activity"},":person_playing_handball:":{uc_base:"1f93e",uc_full:"1f93e",shortnames:[":handball:"],category:"activity"},":person_playing_water_polo:":{uc_base:"1f93d",uc_full:"1f93d",shortnames:[":water_polo:"],category:"activity"},":person_pouting:":{uc_base:"1f64e",uc_full:"1f64e",shortnames:[":person_with_pouting_face:"],category:"people"},":person_raising_hand:":{uc_base:"1f64b",uc_full:"1f64b",shortnames:[":raising_hand:"],category:"people"},":person_rowing_boat:":{uc_base:"1f6a3",uc_full:"1f6a3",shortnames:[":rowboat:"],category:"activity"},":person_running:":{uc_base:"1f3c3",uc_full:"1f3c3",shortnames:[":runner:"],category:"people"},":person_shrugging:":{uc_base:"1f937",uc_full:"1f937",shortnames:[":shrug:"],category:"people"},":person_standing:":{uc_base:"1f9cd",uc_full:"1f9cd",shortnames:[],category:"people"},":person_surfing:":{uc_base:"1f3c4",uc_full:"1f3c4",shortnames:[":surfer:"],category:"activity"},":person_swimming:":{uc_base:"1f3ca",uc_full:"1f3ca",shortnames:[":swimmer:"],category:"activity"},":person_tipping_hand:":{uc_base:"1f481",uc_full:"1f481",shortnames:[":information_desk_person:"],category:"people"},":person_walking:":{uc_base:"1f6b6",uc_full:"1f6b6",shortnames:[":walking:"],category:"people"},":person_wearing_turban:":{uc_base:"1f473",uc_full:"1f473",shortnames:[":man_with_turban:"],category:"people"},":person_with_veil:":{uc_base:"1f470",uc_full:"1f470",shortnames:[],category:"people"},":petri_dish:":{uc_base:"1f9eb",uc_full:"1f9eb",shortnames:[],category:"objects"},":pickup_truck:":{uc_base:"1f6fb",uc_full:"1f6fb",shortnames:[],category:"travel"},":pie:":{uc_base:"1f967",uc_full:"1f967",shortnames:[],category:"food"},":pig2:":{uc_base:"1f416",uc_full:"1f416",shortnames:[],category:"nature"},":pig:":{uc_base:"1f437",uc_full:"1f437",shortnames:[],category:"nature"},":pig_nose:":{uc_base:"1f43d",uc_full:"1f43d",shortnames:[],category:"nature"},":pill:":{uc_base:"1f48a",uc_full:"1f48a",shortnames:[],category:"objects"},":pinched_fingers:":{uc_base:"1f90c",uc_full:"1f90c",shortnames:[],category:"people"},":pinching_hand:":{uc_base:"1f90f",uc_full:"1f90f",shortnames:[],category:"people"},":pineapple:":{uc_base:"1f34d",uc_full:"1f34d",shortnames:[],category:"food"},":ping_pong:":{uc_base:"1f3d3",uc_full:"1f3d3",shortnames:[":table_tennis:"],category:"activity"},":pizza:":{uc_base:"1f355",uc_full:"1f355",shortnames:[],category:"food"},":pi\xf1ata:":{uc_base:"1fa85",uc_full:"1fa85",shortnames:[],category:"objects"},":placard:":{uc_base:"1faa7",uc_full:"1faa7",shortnames:[],category:"objects"},":place_of_worship:":{uc_base:"1f6d0",uc_full:"1f6d0",shortnames:[":worship_symbol:"],category:"symbols"},":pleading_face:":{uc_base:"1f97a",uc_full:"1f97a",shortnames:[],category:"people"},":plunger:":{uc_base:"1faa0",uc_full:"1faa0",shortnames:[],category:"objects"},":point_down:":{uc_base:"1f447",uc_full:"1f447",shortnames:[],category:"people"},":point_left:":{uc_base:"1f448",uc_full:"1f448",shortnames:[],category:"people"},":point_right:":{uc_base:"1f449",uc_full:"1f449",shortnames:[],category:"people"},":point_up_2:":{uc_base:"1f446",uc_full:"1f446",shortnames:[],category:"people"},":police_car:":{uc_base:"1f693",uc_full:"1f693",shortnames:[],category:"travel"},":police_officer:":{uc_base:"1f46e",uc_full:"1f46e",shortnames:[":cop:"],category:"people"},":poodle:":{uc_base:"1f429",uc_full:"1f429",shortnames:[],category:"nature"},":poop:":{uc_base:"1f4a9",uc_full:"1f4a9",shortnames:[":shit:",":hankey:",":poo:"],category:"people"},":popcorn:":{uc_base:"1f37f",uc_full:"1f37f",shortnames:[],category:"food"},":post_office:":{uc_base:"1f3e3",uc_full:"1f3e3",shortnames:[],category:"travel"},":postal_horn:":{uc_base:"1f4ef",uc_full:"1f4ef",shortnames:[],category:"objects"},":postbox:":{uc_base:"1f4ee",uc_full:"1f4ee",shortnames:[],category:"objects"},":potable_water:":{uc_base:"1f6b0",uc_full:"1f6b0",shortnames:[],category:"objects"},":potato:":{uc_base:"1f954",uc_full:"1f954",shortnames:[],category:"food"},":potted_plant:":{uc_base:"1fab4",uc_full:"1fab4",shortnames:[],category:"nature"},":pouch:":{uc_base:"1f45d",uc_full:"1f45d",shortnames:[],category:"people"},":poultry_leg:":{uc_base:"1f357",uc_full:"1f357",shortnames:[],category:"food"},":pound:":{uc_base:"1f4b7",uc_full:"1f4b7",shortnames:[],category:"objects"},":pouting_cat:":{uc_base:"1f63e",uc_full:"1f63e",shortnames:[],category:"people"},":pray:":{uc_base:"1f64f",uc_full:"1f64f",shortnames:[],category:"people"},":prayer_beads:":{uc_base:"1f4ff",uc_full:"1f4ff",shortnames:[],category:"objects"},":pregnant_woman:":{uc_base:"1f930",uc_full:"1f930",shortnames:[":expecting_woman:"],category:"people"},":pretzel:":{uc_base:"1f968",uc_full:"1f968",shortnames:[],category:"food"},":prince:":{uc_base:"1f934",uc_full:"1f934",shortnames:[],category:"people"},":princess:":{uc_base:"1f478",uc_full:"1f478",shortnames:[],category:"people"},":printer:":{uc_base:"1f5a8",uc_full:"1f5a8-fe0f",shortnames:[],category:"objects"},":probing_cane:":{uc_base:"1f9af",uc_full:"1f9af",shortnames:[],category:"travel"},":projector:":{uc_base:"1f4fd",uc_full:"1f4fd-fe0f",shortnames:[":film_projector:"],category:"objects"},":punch:":{uc_base:"1f44a",uc_full:"1f44a",shortnames:[],category:"people"},":purple_circle:":{uc_base:"1f7e3",uc_full:"1f7e3",shortnames:[],category:"symbols"},":purple_heart:":{uc_base:"1f49c",uc_full:"1f49c",shortnames:[],category:"symbols"},":purple_square:":{uc_base:"1f7ea",uc_full:"1f7ea",shortnames:[],category:"symbols"},":purse:":{uc_base:"1f45b",uc_full:"1f45b",shortnames:[],category:"people"},":pushpin:":{uc_base:"1f4cc",uc_full:"1f4cc",shortnames:[],category:"objects"},":put_litter_in_its_place:":{uc_base:"1f6ae",uc_full:"1f6ae",shortnames:[],category:"symbols"},":rabbit2:":{uc_base:"1f407",uc_full:"1f407",shortnames:[],category:"nature"},":rabbit:":{uc_base:"1f430",uc_full:"1f430",shortnames:[],category:"nature"},":raccoon:":{uc_base:"1f99d",uc_full:"1f99d",shortnames:[],category:"nature"},":race_car:":{uc_base:"1f3ce",uc_full:"1f3ce-fe0f",shortnames:[":racing_car:"],category:"travel"},":racehorse:":{uc_base:"1f40e",uc_full:"1f40e",shortnames:[],category:"nature"},":radio:":{uc_base:"1f4fb",uc_full:"1f4fb",shortnames:[],category:"objects"},":radio_button:":{uc_base:"1f518",uc_full:"1f518",shortnames:[],category:"symbols"},":rage:":{uc_base:"1f621",uc_full:"1f621",shortnames:[],category:"people"},":railway_car:":{uc_base:"1f683",uc_full:"1f683",shortnames:[],category:"travel"},":railway_track:":{uc_base:"1f6e4",uc_full:"1f6e4-fe0f",shortnames:[":railroad_track:"],category:"travel"},":rainbow:":{uc_base:"1f308",uc_full:"1f308",shortnames:[],category:"nature"},":raised_back_of_hand:":{uc_base:"1f91a",uc_full:"1f91a",shortnames:[":back_of_hand:"],category:"people"},":raised_hands:":{uc_base:"1f64c",uc_full:"1f64c",shortnames:[],category:"people"},":ram:":{uc_base:"1f40f",uc_full:"1f40f",shortnames:[],category:"nature"},":ramen:":{uc_base:"1f35c",uc_full:"1f35c",shortnames:[],category:"food"},":rat:":{uc_base:"1f400",uc_full:"1f400",shortnames:[],category:"nature"},":razor:":{uc_base:"1fa92",uc_full:"1fa92",shortnames:[],category:"objects"},":receipt:":{uc_base:"1f9fe",uc_full:"1f9fe",shortnames:[],category:"objects"},":red_car:":{uc_base:"1f697",uc_full:"1f697",shortnames:[],category:"travel"},":red_circle:":{uc_base:"1f534",uc_full:"1f534",shortnames:[],category:"symbols"},":red_envelope:":{uc_base:"1f9e7",uc_full:"1f9e7",shortnames:[],category:"objects"},":red_haired:":{uc_base:"1f9b0",uc_full:"1f9b0",shortnames:[],category:"people"},":red_square:":{uc_base:"1f7e5",uc_full:"1f7e5",shortnames:[],category:"symbols"},":regional_indicator_a:":{uc_base:"1f1e6",uc_full:"1f1e6",shortnames:[],category:"regional"},":regional_indicator_b:":{uc_base:"1f1e7",uc_full:"1f1e7",shortnames:[],category:"regional"},":regional_indicator_c:":{uc_base:"1f1e8",uc_full:"1f1e8",shortnames:[],category:"regional"},":regional_indicator_d:":{uc_base:"1f1e9",uc_full:"1f1e9",shortnames:[],category:"regional"},":regional_indicator_e:":{uc_base:"1f1ea",uc_full:"1f1ea",shortnames:[],category:"regional"},":regional_indicator_f:":{uc_base:"1f1eb",uc_full:"1f1eb",shortnames:[],category:"regional"},":regional_indicator_g:":{uc_base:"1f1ec",uc_full:"1f1ec",shortnames:[],category:"regional"},":regional_indicator_h:":{uc_base:"1f1ed",uc_full:"1f1ed",shortnames:[],category:"regional"},":regional_indicator_i:":{uc_base:"1f1ee",uc_full:"1f1ee",shortnames:[],category:"regional"},":regional_indicator_j:":{uc_base:"1f1ef",uc_full:"1f1ef",shortnames:[],category:"regional"},":regional_indicator_k:":{uc_base:"1f1f0",uc_full:"1f1f0",shortnames:[],category:"regional"},":regional_indicator_l:":{uc_base:"1f1f1",uc_full:"1f1f1",shortnames:[],category:"regional"},":regional_indicator_m:":{uc_base:"1f1f2",uc_full:"1f1f2",shortnames:[],category:"regional"},":regional_indicator_n:":{uc_base:"1f1f3",uc_full:"1f1f3",shortnames:[],category:"regional"},":regional_indicator_o:":{uc_base:"1f1f4",uc_full:"1f1f4",shortnames:[],category:"regional"},":regional_indicator_p:":{uc_base:"1f1f5",uc_full:"1f1f5",shortnames:[],category:"regional"},":regional_indicator_q:":{uc_base:"1f1f6",uc_full:"1f1f6",shortnames:[],category:"regional"},":regional_indicator_r:":{uc_base:"1f1f7",uc_full:"1f1f7",shortnames:[],category:"regional"},":regional_indicator_s:":{uc_base:"1f1f8",uc_full:"1f1f8",shortnames:[],category:"regional"},":regional_indicator_t:":{uc_base:"1f1f9",uc_full:"1f1f9",shortnames:[],category:"regional"},":regional_indicator_u:":{uc_base:"1f1fa",uc_full:"1f1fa",shortnames:[],category:"regional"},":regional_indicator_v:":{uc_base:"1f1fb",uc_full:"1f1fb",shortnames:[],category:"regional"},":regional_indicator_w:":{uc_base:"1f1fc",uc_full:"1f1fc",shortnames:[],category:"regional"},":regional_indicator_x:":{uc_base:"1f1fd",uc_full:"1f1fd",shortnames:[],category:"regional"},":regional_indicator_y:":{uc_base:"1f1fe",uc_full:"1f1fe",shortnames:[],category:"regional"},":regional_indicator_z:":{uc_base:"1f1ff",uc_full:"1f1ff",shortnames:[],category:"regional"},":relieved:":{uc_base:"1f60c",uc_full:"1f60c",shortnames:[],category:"people"},":reminder_ribbon:":{uc_base:"1f397",uc_full:"1f397-fe0f",shortnames:[],category:"activity"},":repeat:":{uc_base:"1f501",uc_full:"1f501",shortnames:[],category:"symbols"},":repeat_one:":{uc_base:"1f502",uc_full:"1f502",shortnames:[],category:"symbols"},":restroom:":{uc_base:"1f6bb",uc_full:"1f6bb",shortnames:[],category:"symbols"},":revolving_hearts:":{uc_base:"1f49e",uc_full:"1f49e",shortnames:[],category:"symbols"},":rhino:":{uc_base:"1f98f",uc_full:"1f98f",shortnames:[":rhinoceros:"],category:"nature"},":ribbon:":{uc_base:"1f380",uc_full:"1f380",shortnames:[],category:"objects"},":rice:":{uc_base:"1f35a",uc_full:"1f35a",shortnames:[],category:"food"},":rice_ball:":{uc_base:"1f359",uc_full:"1f359",shortnames:[],category:"food"},":rice_cracker:":{uc_base:"1f358",uc_full:"1f358",shortnames:[],category:"food"},":rice_scene:":{uc_base:"1f391",uc_full:"1f391",shortnames:[],category:"travel"},":right_facing_fist:":{uc_base:"1f91c",uc_full:"1f91c",shortnames:[":right_fist:"],category:"people"},":ring:":{uc_base:"1f48d",uc_full:"1f48d",shortnames:[],category:"people"},":ringed_planet:":{uc_base:"1fa90",uc_full:"1fa90",shortnames:[],category:"nature"},":robot:":{uc_base:"1f916",uc_full:"1f916",shortnames:[":robot_face:"],category:"people"},":rock:":{uc_base:"1faa8",uc_full:"1faa8",shortnames:[],category:"nature"},":rocket:":{uc_base:"1f680",uc_full:"1f680",shortnames:[],category:"travel"},":rofl:":{uc_base:"1f923",uc_full:"1f923",shortnames:[":rolling_on_the_floor_laughing:"],category:"people"},":roll_of_paper:":{uc_base:"1f9fb",uc_full:"1f9fb",shortnames:[],category:"objects"},":roller_coaster:":{uc_base:"1f3a2",uc_full:"1f3a2",shortnames:[],category:"travel"},":roller_skate:":{uc_base:"1f6fc",uc_full:"1f6fc",shortnames:[],category:"activity"},":rolling_eyes:":{uc_base:"1f644",uc_full:"1f644",shortnames:[":face_with_rolling_eyes:"],category:"people"},":rooster:":{uc_base:"1f413",uc_full:"1f413",shortnames:[],category:"nature"},":rose:":{uc_base:"1f339",uc_full:"1f339",shortnames:[],category:"nature"},":rosette:":{uc_base:"1f3f5",uc_full:"1f3f5-fe0f",shortnames:[],category:"activity"},":rotating_light:":{uc_base:"1f6a8",uc_full:"1f6a8",shortnames:[],category:"travel"},":round_pushpin:":{uc_base:"1f4cd",uc_full:"1f4cd",shortnames:[],category:"objects"},":rugby_football:":{uc_base:"1f3c9",uc_full:"1f3c9",shortnames:[],category:"activity"},":running_shirt_with_sash:":{uc_base:"1f3bd",uc_full:"1f3bd",shortnames:[],category:"activity"},":sa:":{uc_base:"1f202",uc_full:"1f202-fe0f",shortnames:[],category:"symbols"},":safety_pin:":{uc_base:"1f9f7",uc_full:"1f9f7",shortnames:[],category:"objects"},":safety_vest:":{uc_base:"1f9ba",uc_full:"1f9ba",shortnames:[],category:"people"},":sake:":{uc_base:"1f376",uc_full:"1f376",shortnames:[],category:"food"},":salad:":{uc_base:"1f957",uc_full:"1f957",shortnames:[":green_salad:"],category:"food"},":salt:":{uc_base:"1f9c2",uc_full:"1f9c2",shortnames:[],category:"food"},":sandal:":{uc_base:"1f461",uc_full:"1f461",shortnames:[],category:"people"},":sandwich:":{uc_base:"1f96a",uc_full:"1f96a",shortnames:[],category:"food"},":santa:":{uc_base:"1f385",uc_full:"1f385",shortnames:[],category:"people"},":sari:":{uc_base:"1f97b",uc_full:"1f97b",shortnames:[],category:"people"},":satellite:":{uc_base:"1f4e1",uc_full:"1f4e1",shortnames:[],category:"objects"},":satellite_orbital:":{uc_base:"1f6f0",uc_full:"1f6f0-fe0f",shortnames:[],category:"travel"},":sauropod:":{uc_base:"1f995",uc_full:"1f995",shortnames:[],category:"nature"},":saxophone:":{uc_base:"1f3b7",uc_full:"1f3b7",shortnames:[],category:"activity"},":scarf:":{uc_base:"1f9e3",uc_full:"1f9e3",shortnames:[],category:"people"},":school:":{uc_base:"1f3eb",uc_full:"1f3eb",shortnames:[],category:"travel"},":school_satchel:":{uc_base:"1f392",uc_full:"1f392",shortnames:[],category:"people"},":scooter:":{uc_base:"1f6f4",uc_full:"1f6f4",shortnames:[],category:"travel"},":scorpion:":{uc_base:"1f982",uc_full:"1f982",shortnames:[],category:"nature"},":scream:":{uc_base:"1f631",uc_full:"1f631",shortnames:[],category:"people"},":scream_cat:":{uc_base:"1f640",uc_full:"1f640",shortnames:[],category:"people"},":screwdriver:":{uc_base:"1fa9b",uc_full:"1fa9b",shortnames:[],category:"objects"},":scroll:":{uc_base:"1f4dc",uc_full:"1f4dc",shortnames:[],category:"objects"},":seal:":{uc_base:"1f9ad",uc_full:"1f9ad",shortnames:[],category:"nature"},":seat:":{uc_base:"1f4ba",uc_full:"1f4ba",shortnames:[],category:"travel"},":second_place:":{uc_base:"1f948",uc_full:"1f948",shortnames:[":second_place_medal:"],category:"activity"},":see_no_evil:":{uc_base:"1f648",uc_full:"1f648",shortnames:[],category:"nature"},":seedling:":{uc_base:"1f331",uc_full:"1f331",shortnames:[],category:"nature"},":selfie:":{uc_base:"1f933",uc_full:"1f933",shortnames:[],category:"people"},":sewing_needle:":{uc_base:"1faa1",uc_full:"1faa1",shortnames:[],category:"objects"},":shallow_pan_of_food:":{uc_base:"1f958",uc_full:"1f958",shortnames:[":paella:"],category:"food"},":shark:":{uc_base:"1f988",uc_full:"1f988",shortnames:[],category:"nature"},":shaved_ice:":{uc_base:"1f367",uc_full:"1f367",shortnames:[],category:"food"},":sheep:":{uc_base:"1f411",uc_full:"1f411",shortnames:[],category:"nature"},":shell:":{uc_base:"1f41a",uc_full:"1f41a",shortnames:[],category:"nature"},":shield:":{uc_base:"1f6e1",uc_full:"1f6e1-fe0f",shortnames:[],category:"objects"},":ship:":{uc_base:"1f6a2",uc_full:"1f6a2",shortnames:[],category:"travel"},":shirt:":{uc_base:"1f455",uc_full:"1f455",shortnames:[],category:"people"},":shopping_bags:":{uc_base:"1f6cd",uc_full:"1f6cd-fe0f",shortnames:[],category:"objects"},":shopping_cart:":{uc_base:"1f6d2",uc_full:"1f6d2",shortnames:[":shopping_trolley:"],category:"objects"},":shorts:":{uc_base:"1fa73",uc_full:"1fa73",shortnames:[],category:"people"},":shower:":{uc_base:"1f6bf",uc_full:"1f6bf",shortnames:[],category:"objects"},":shrimp:":{uc_base:"1f990",uc_full:"1f990",shortnames:[],category:"nature"},":shushing_face:":{uc_base:"1f92b",uc_full:"1f92b",shortnames:[],category:"people"},":signal_strength:":{uc_base:"1f4f6",uc_full:"1f4f6",shortnames:[],category:"symbols"},":six_pointed_star:":{uc_base:"1f52f",uc_full:"1f52f",shortnames:[],category:"symbols"},":skateboard:":{uc_base:"1f6f9",uc_full:"1f6f9",shortnames:[],category:"activity"},":ski:":{uc_base:"1f3bf",uc_full:"1f3bf",shortnames:[],category:"activity"},":skull:":{uc_base:"1f480",uc_full:"1f480",shortnames:[":skeleton:"],category:"people"},":skunk:":{uc_base:"1f9a8",uc_full:"1f9a8",shortnames:[],category:"nature"},":sled:":{uc_base:"1f6f7",uc_full:"1f6f7",shortnames:[],category:"activity"},":sleeping:":{uc_base:"1f634",uc_full:"1f634",shortnames:[],category:"people"},":sleeping_accommodation:":{uc_base:"1f6cc",uc_full:"1f6cc",shortnames:[],category:"objects"},":sleepy:":{uc_base:"1f62a",uc_full:"1f62a",shortnames:[],category:"people"},":slight_frown:":{uc_base:"1f641",uc_full:"1f641",shortnames:[":slightly_frowning_face:"],category:"people"},":slight_smile:":{uc_base:"1f642",uc_full:"1f642",shortnames:[":slightly_smiling_face:"],category:"people"},":slot_machine:":{uc_base:"1f3b0",uc_full:"1f3b0",shortnames:[],category:"activity"},":sloth:":{uc_base:"1f9a5",uc_full:"1f9a5",shortnames:[],category:"nature"},":small_blue_diamond:":{uc_base:"1f539",uc_full:"1f539",shortnames:[],category:"symbols"},":small_orange_diamond:":{uc_base:"1f538",uc_full:"1f538",shortnames:[],category:"symbols"},":small_red_triangle:":{uc_base:"1f53a",
uc_full:"1f53a",shortnames:[],category:"symbols"},":small_red_triangle_down:":{uc_base:"1f53b",uc_full:"1f53b",shortnames:[],category:"symbols"},":smile:":{uc_base:"1f604",uc_full:"1f604",shortnames:[],category:"people"},":smile_cat:":{uc_base:"1f638",uc_full:"1f638",shortnames:[],category:"people"},":smiley:":{uc_base:"1f603",uc_full:"1f603",shortnames:[],category:"people"},":smiley_cat:":{uc_base:"1f63a",uc_full:"1f63a",shortnames:[],category:"people"},":smiling_face_with_3_hearts:":{uc_base:"1f970",uc_full:"1f970",shortnames:[],category:"people"},":smiling_face_with_tear:":{uc_base:"1f972",uc_full:"1f972",shortnames:[],category:"people"},":smiling_imp:":{uc_base:"1f608",uc_full:"1f608",shortnames:[],category:"people"},":smirk:":{uc_base:"1f60f",uc_full:"1f60f",shortnames:[],category:"people"},":smirk_cat:":{uc_base:"1f63c",uc_full:"1f63c",shortnames:[],category:"people"},":smoking:":{uc_base:"1f6ac",uc_full:"1f6ac",shortnames:[],category:"objects"},":snail:":{uc_base:"1f40c",uc_full:"1f40c",shortnames:[],category:"nature"},":snake:":{uc_base:"1f40d",uc_full:"1f40d",shortnames:[],category:"nature"},":sneezing_face:":{uc_base:"1f927",uc_full:"1f927",shortnames:[":sneeze:"],category:"people"},":snowboarder:":{uc_base:"1f3c2",uc_full:"1f3c2",shortnames:[],category:"activity"},":soap:":{uc_base:"1f9fc",uc_full:"1f9fc",shortnames:[],category:"objects"},":sob:":{uc_base:"1f62d",uc_full:"1f62d",shortnames:[],category:"people"},":socks:":{uc_base:"1f9e6",uc_full:"1f9e6",shortnames:[],category:"people"},":softball:":{uc_base:"1f94e",uc_full:"1f94e",shortnames:[],category:"activity"},":soon:":{uc_base:"1f51c",uc_full:"1f51c",shortnames:[],category:"symbols"},":sos:":{uc_base:"1f198",uc_full:"1f198",shortnames:[],category:"symbols"},":sound:":{uc_base:"1f509",uc_full:"1f509",shortnames:[],category:"symbols"},":space_invader:":{uc_base:"1f47e",uc_full:"1f47e",shortnames:[],category:"people"},":spaghetti:":{uc_base:"1f35d",uc_full:"1f35d",shortnames:[],category:"food"},":sparkler:":{uc_base:"1f387",uc_full:"1f387",shortnames:[],category:"travel"},":sparkling_heart:":{uc_base:"1f496",uc_full:"1f496",shortnames:[],category:"symbols"},":speak_no_evil:":{uc_base:"1f64a",uc_full:"1f64a",shortnames:[],category:"nature"},":speaker:":{uc_base:"1f508",uc_full:"1f508",shortnames:[],category:"symbols"},":speaking_head:":{uc_base:"1f5e3",uc_full:"1f5e3-fe0f",shortnames:[":speaking_head_in_silhouette:"],category:"people"},":speech_balloon:":{uc_base:"1f4ac",uc_full:"1f4ac",shortnames:[],category:"symbols"},":speech_left:":{uc_base:"1f5e8",uc_full:"1f5e8-fe0f",shortnames:[":left_speech_bubble:"],category:"symbols"},":speedboat:":{uc_base:"1f6a4",uc_full:"1f6a4",shortnames:[],category:"travel"},":spider:":{uc_base:"1f577",uc_full:"1f577-fe0f",shortnames:[],category:"nature"},":spider_web:":{uc_base:"1f578",uc_full:"1f578-fe0f",shortnames:[],category:"nature"},":sponge:":{uc_base:"1f9fd",uc_full:"1f9fd",shortnames:[],category:"objects"},":spoon:":{uc_base:"1f944",uc_full:"1f944",shortnames:[],category:"food"},":squeeze_bottle:":{uc_base:"1f9f4",uc_full:"1f9f4",shortnames:[],category:"objects"},":squid:":{uc_base:"1f991",uc_full:"1f991",shortnames:[],category:"nature"},":stadium:":{uc_base:"1f3df",uc_full:"1f3df-fe0f",shortnames:[],category:"travel"},":star2:":{uc_base:"1f31f",uc_full:"1f31f",shortnames:[],category:"nature"},":star_struck:":{uc_base:"1f929",uc_full:"1f929",shortnames:[],category:"people"},":stars:":{uc_base:"1f320",uc_full:"1f320",shortnames:[],category:"travel"},":station:":{uc_base:"1f689",uc_full:"1f689",shortnames:[],category:"travel"},":statue_of_liberty:":{uc_base:"1f5fd",uc_full:"1f5fd",shortnames:[],category:"travel"},":steam_locomotive:":{uc_base:"1f682",uc_full:"1f682",shortnames:[],category:"travel"},":stethoscope:":{uc_base:"1fa7a",uc_full:"1fa7a",shortnames:[],category:"objects"},":stew:":{uc_base:"1f372",uc_full:"1f372",shortnames:[],category:"food"},":straight_ruler:":{uc_base:"1f4cf",uc_full:"1f4cf",shortnames:[],category:"objects"},":strawberry:":{uc_base:"1f353",uc_full:"1f353",shortnames:[],category:"food"},":stuck_out_tongue:":{uc_base:"1f61b",uc_full:"1f61b",shortnames:[],category:"people"},":stuck_out_tongue_closed_eyes:":{uc_base:"1f61d",uc_full:"1f61d",shortnames:[],category:"people"},":stuck_out_tongue_winking_eye:":{uc_base:"1f61c",uc_full:"1f61c",shortnames:[],category:"people"},":stuffed_flatbread:":{uc_base:"1f959",uc_full:"1f959",shortnames:[":stuffed_pita:"],category:"food"},":sun_with_face:":{uc_base:"1f31e",uc_full:"1f31e",shortnames:[],category:"nature"},":sunflower:":{uc_base:"1f33b",uc_full:"1f33b",shortnames:[],category:"nature"},":sunglasses:":{uc_base:"1f60e",uc_full:"1f60e",shortnames:[],category:"people"},":sunrise:":{uc_base:"1f305",uc_full:"1f305",shortnames:[],category:"travel"},":sunrise_over_mountains:":{uc_base:"1f304",uc_full:"1f304",shortnames:[],category:"travel"},":superhero:":{uc_base:"1f9b8",uc_full:"1f9b8",shortnames:[],category:"people"},":supervillain:":{uc_base:"1f9b9",uc_full:"1f9b9",shortnames:[],category:"people"},":sushi:":{uc_base:"1f363",uc_full:"1f363",shortnames:[],category:"food"},":suspension_railway:":{uc_base:"1f69f",uc_full:"1f69f",shortnames:[],category:"travel"},":swan:":{uc_base:"1f9a2",uc_full:"1f9a2",shortnames:[],category:"nature"},":sweat:":{uc_base:"1f613",uc_full:"1f613",shortnames:[],category:"people"},":sweat_drops:":{uc_base:"1f4a6",uc_full:"1f4a6",shortnames:[],category:"nature"},":sweat_smile:":{uc_base:"1f605",uc_full:"1f605",shortnames:[],category:"people"},":sweet_potato:":{uc_base:"1f360",uc_full:"1f360",shortnames:[],category:"food"},":symbols:":{uc_base:"1f523",uc_full:"1f523",shortnames:[],category:"symbols"},":synagogue:":{uc_base:"1f54d",uc_full:"1f54d",shortnames:[],category:"travel"},":syringe:":{uc_base:"1f489",uc_full:"1f489",shortnames:[],category:"objects"},":t_rex:":{uc_base:"1f996",uc_full:"1f996",shortnames:[],category:"nature"},":taco:":{uc_base:"1f32e",uc_full:"1f32e",shortnames:[],category:"food"},":tada:":{uc_base:"1f389",uc_full:"1f389",shortnames:[],category:"objects"},":takeout_box:":{uc_base:"1f961",uc_full:"1f961",shortnames:[],category:"food"},":tamale:":{uc_base:"1fad4",uc_full:"1fad4",shortnames:[],category:"food"},":tanabata_tree:":{uc_base:"1f38b",uc_full:"1f38b",shortnames:[],category:"nature"},":tangerine:":{uc_base:"1f34a",uc_full:"1f34a",shortnames:[],category:"food"},":taxi:":{uc_base:"1f695",uc_full:"1f695",shortnames:[],category:"travel"},":tea:":{uc_base:"1f375",uc_full:"1f375",shortnames:[],category:"food"},":teapot:":{uc_base:"1fad6",uc_full:"1fad6",shortnames:[],category:"food"},":teddy_bear:":{uc_base:"1f9f8",uc_full:"1f9f8",shortnames:[],category:"objects"},":telephone_receiver:":{uc_base:"1f4de",uc_full:"1f4de",shortnames:[],category:"objects"},":telescope:":{uc_base:"1f52d",uc_full:"1f52d",shortnames:[],category:"objects"},":tennis:":{uc_base:"1f3be",uc_full:"1f3be",shortnames:[],category:"activity"},":test_tube:":{uc_base:"1f9ea",uc_full:"1f9ea",shortnames:[],category:"objects"},":thermometer:":{uc_base:"1f321",uc_full:"1f321-fe0f",shortnames:[],category:"objects"},":thermometer_face:":{uc_base:"1f912",uc_full:"1f912",shortnames:[":face_with_thermometer:"],category:"people"},":thinking:":{uc_base:"1f914",uc_full:"1f914",shortnames:[":thinking_face:"],category:"people"},":third_place:":{uc_base:"1f949",uc_full:"1f949",shortnames:[":third_place_medal:"],category:"activity"},":thong_sandal:":{uc_base:"1fa74",uc_full:"1fa74",shortnames:[],category:"people"},":thought_balloon:":{uc_base:"1f4ad",uc_full:"1f4ad",shortnames:[],category:"symbols"},":thread:":{uc_base:"1f9f5",uc_full:"1f9f5",shortnames:[],category:"people"},":thumbsdown:":{uc_base:"1f44e",uc_full:"1f44e",shortnames:[":-1:",":thumbdown:"],category:"people"},":thumbsup:":{uc_base:"1f44d",uc_full:"1f44d",shortnames:[":+1:",":thumbup:"],category:"people"},":ticket:":{uc_base:"1f3ab",uc_full:"1f3ab",shortnames:[],category:"activity"},":tickets:":{uc_base:"1f39f",uc_full:"1f39f-fe0f",shortnames:[":admission_tickets:"],category:"activity"},":tiger2:":{uc_base:"1f405",uc_full:"1f405",shortnames:[],category:"nature"},":tiger:":{uc_base:"1f42f",uc_full:"1f42f",shortnames:[],category:"nature"},":tired_face:":{uc_base:"1f62b",uc_full:"1f62b",shortnames:[],category:"people"},":toilet:":{uc_base:"1f6bd",uc_full:"1f6bd",shortnames:[],category:"objects"},":tokyo_tower:":{uc_base:"1f5fc",uc_full:"1f5fc",shortnames:[],category:"travel"},":tomato:":{uc_base:"1f345",uc_full:"1f345",shortnames:[],category:"food"},":tone1:":{uc_base:"1f3fb",uc_full:"1f3fb",shortnames:[],category:"modifier"},":tone2:":{uc_base:"1f3fc",uc_full:"1f3fc",shortnames:[],category:"modifier"},":tone3:":{uc_base:"1f3fd",uc_full:"1f3fd",shortnames:[],category:"modifier"},":tone4:":{uc_base:"1f3fe",uc_full:"1f3fe",shortnames:[],category:"modifier"},":tone5:":{uc_base:"1f3ff",uc_full:"1f3ff",shortnames:[],category:"modifier"},":tongue:":{uc_base:"1f445",uc_full:"1f445",shortnames:[],category:"people"},":toolbox:":{uc_base:"1f9f0",uc_full:"1f9f0",shortnames:[],category:"objects"},":tools:":{uc_base:"1f6e0",uc_full:"1f6e0-fe0f",shortnames:[":hammer_and_wrench:"],category:"objects"},":tooth:":{uc_base:"1f9b7",uc_full:"1f9b7",shortnames:[],category:"people"},":toothbrush:":{uc_base:"1faa5",uc_full:"1faa5",shortnames:[],category:"objects"},":top:":{uc_base:"1f51d",uc_full:"1f51d",shortnames:[],category:"symbols"},":tophat:":{uc_base:"1f3a9",uc_full:"1f3a9",shortnames:[],category:"people"},":trackball:":{uc_base:"1f5b2",uc_full:"1f5b2-fe0f",shortnames:[],category:"objects"},":tractor:":{uc_base:"1f69c",uc_full:"1f69c",shortnames:[],category:"travel"},":traffic_light:":{uc_base:"1f6a5",uc_full:"1f6a5",shortnames:[],category:"travel"},":train2:":{uc_base:"1f686",uc_full:"1f686",shortnames:[],category:"travel"},":train:":{uc_base:"1f68b",uc_full:"1f68b",shortnames:[],category:"travel"},":tram:":{uc_base:"1f68a",uc_full:"1f68a",shortnames:[],category:"travel"},":triangular_flag_on_post:":{uc_base:"1f6a9",uc_full:"1f6a9",shortnames:[],category:"flags"},":triangular_ruler:":{uc_base:"1f4d0",uc_full:"1f4d0",shortnames:[],category:"objects"},":trident:":{uc_base:"1f531",uc_full:"1f531",shortnames:[],category:"symbols"},":triumph:":{uc_base:"1f624",uc_full:"1f624",shortnames:[],category:"people"},":trolleybus:":{uc_base:"1f68e",uc_full:"1f68e",shortnames:[],category:"travel"},":trophy:":{uc_base:"1f3c6",uc_full:"1f3c6",shortnames:[],category:"activity"},":tropical_drink:":{uc_base:"1f379",uc_full:"1f379",shortnames:[],category:"food"},":tropical_fish:":{uc_base:"1f420",uc_full:"1f420",shortnames:[],category:"nature"},":truck:":{uc_base:"1f69a",uc_full:"1f69a",shortnames:[],category:"travel"},":trumpet:":{uc_base:"1f3ba",uc_full:"1f3ba",shortnames:[],category:"activity"},":tulip:":{uc_base:"1f337",uc_full:"1f337",shortnames:[],category:"nature"},":tumbler_glass:":{uc_base:"1f943",uc_full:"1f943",shortnames:[":whisky:"],category:"food"},":turkey:":{uc_base:"1f983",uc_full:"1f983",shortnames:[],category:"nature"},":turtle:":{uc_base:"1f422",uc_full:"1f422",shortnames:[],category:"nature"},":tv:":{uc_base:"1f4fa",uc_full:"1f4fa",shortnames:[],category:"objects"},":twisted_rightwards_arrows:":{uc_base:"1f500",uc_full:"1f500",shortnames:[],category:"symbols"},":two_hearts:":{uc_base:"1f495",uc_full:"1f495",shortnames:[],category:"symbols"},":two_men_holding_hands:":{uc_base:"1f46c",uc_full:"1f46c",shortnames:[],category:"people"},":two_women_holding_hands:":{uc_base:"1f46d",uc_full:"1f46d",shortnames:[],category:"people"},":u5272:":{uc_base:"1f239",uc_full:"1f239",shortnames:[],category:"symbols"},":u5408:":{uc_base:"1f234",uc_full:"1f234",shortnames:[],category:"symbols"},":u55b6:":{uc_base:"1f23a",uc_full:"1f23a",shortnames:[],category:"symbols"},":u6307:":{uc_base:"1f22f",uc_full:"1f22f",shortnames:[],category:"symbols"},":u6708:":{uc_base:"1f237",uc_full:"1f237-fe0f",shortnames:[],category:"symbols"},":u6709:":{uc_base:"1f236",uc_full:"1f236",shortnames:[],category:"symbols"},":u6e80:":{uc_base:"1f235",uc_full:"1f235",shortnames:[],category:"symbols"},":u7121:":{uc_base:"1f21a",uc_full:"1f21a",shortnames:[],category:"symbols"},":u7533:":{uc_base:"1f238",uc_full:"1f238",shortnames:[],category:"symbols"},":u7981:":{uc_base:"1f232",uc_full:"1f232",shortnames:[],category:"symbols"},":u7a7a:":{uc_base:"1f233",uc_full:"1f233",shortnames:[],category:"symbols"},":unamused:":{uc_base:"1f612",uc_full:"1f612",shortnames:[],category:"people"},":underage:":{uc_base:"1f51e",uc_full:"1f51e",shortnames:[],category:"symbols"},":unicorn:":{uc_base:"1f984",uc_full:"1f984",shortnames:[":unicorn_face:"],category:"nature"},":unlock:":{uc_base:"1f513",uc_full:"1f513",shortnames:[],category:"objects"},":up:":{uc_base:"1f199",uc_full:"1f199",shortnames:[],category:"symbols"},":upside_down:":{uc_base:"1f643",uc_full:"1f643",shortnames:[":upside_down_face:"],category:"people"},":vampire:":{uc_base:"1f9db",uc_full:"1f9db",shortnames:[],category:"people"},":vertical_traffic_light:":{uc_base:"1f6a6",uc_full:"1f6a6",shortnames:[],category:"travel"},":vhs:":{uc_base:"1f4fc",uc_full:"1f4fc",shortnames:[],category:"objects"},":vibration_mode:":{uc_base:"1f4f3",uc_full:"1f4f3",shortnames:[],category:"symbols"},":video_camera:":{uc_base:"1f4f9",uc_full:"1f4f9",shortnames:[],category:"objects"},":video_game:":{uc_base:"1f3ae",uc_full:"1f3ae",shortnames:[],category:"activity"},":violin:":{uc_base:"1f3bb",uc_full:"1f3bb",shortnames:[],category:"activity"},":volcano:":{uc_base:"1f30b",uc_full:"1f30b",shortnames:[],category:"travel"},":volleyball:":{uc_base:"1f3d0",uc_full:"1f3d0",shortnames:[],category:"activity"},":vs:":{uc_base:"1f19a",uc_full:"1f19a",shortnames:[],category:"symbols"},":vulcan:":{uc_base:"1f596",uc_full:"1f596",shortnames:[":raised_hand_with_part_between_middle_and_ring_fingers:"],category:"people"},":waffle:":{uc_base:"1f9c7",uc_full:"1f9c7",shortnames:[],category:"food"},":waning_crescent_moon:":{uc_base:"1f318",uc_full:"1f318",shortnames:[],category:"nature"},":waning_gibbous_moon:":{uc_base:"1f316",uc_full:"1f316",shortnames:[],category:"nature"},":wastebasket:":{uc_base:"1f5d1",uc_full:"1f5d1-fe0f",shortnames:[],category:"objects"},":water_buffalo:":{uc_base:"1f403",uc_full:"1f403",shortnames:[],category:"nature"},":watermelon:":{uc_base:"1f349",uc_full:"1f349",shortnames:[],category:"food"},":wave:":{uc_base:"1f44b",uc_full:"1f44b",shortnames:[],category:"people"},":waxing_crescent_moon:":{uc_base:"1f312",uc_full:"1f312",shortnames:[],category:"nature"},":waxing_gibbous_moon:":{uc_base:"1f314",uc_full:"1f314",shortnames:[],category:"nature"},":wc:":{uc_base:"1f6be",uc_full:"1f6be",shortnames:[],category:"symbols"},":weary:":{uc_base:"1f629",uc_full:"1f629",shortnames:[],category:"people"},":wedding:":{uc_base:"1f492",uc_full:"1f492",shortnames:[],category:"travel"},":whale2:":{uc_base:"1f40b",uc_full:"1f40b",shortnames:[],category:"nature"},":whale:":{uc_base:"1f433",uc_full:"1f433",shortnames:[],category:"nature"},":white_flower:":{uc_base:"1f4ae",uc_full:"1f4ae",shortnames:[],category:"symbols"},":white_haired:":{uc_base:"1f9b3",uc_full:"1f9b3",shortnames:[],category:"people"},":white_heart:":{uc_base:"1f90d",uc_full:"1f90d",shortnames:[],category:"symbols"},":white_square_button:":{uc_base:"1f533",uc_full:"1f533",shortnames:[],category:"symbols"},":white_sun_cloud:":{uc_base:"1f325",uc_full:"1f325-fe0f",shortnames:[":white_sun_behind_cloud:"],category:"nature"},":white_sun_rain_cloud:":{uc_base:"1f326",uc_full:"1f326-fe0f",shortnames:[":white_sun_behind_cloud_with_rain:"],category:"nature"},":white_sun_small_cloud:":{uc_base:"1f324",uc_full:"1f324-fe0f",shortnames:[":white_sun_with_small_cloud:"],category:"nature"},":wilted_rose:":{uc_base:"1f940",uc_full:"1f940",shortnames:[":wilted_flower:"],category:"nature"},":wind_blowing_face:":{uc_base:"1f32c",uc_full:"1f32c-fe0f",shortnames:[],category:"nature"},":wind_chime:":{uc_base:"1f390",uc_full:"1f390",shortnames:[],category:"objects"},":window:":{uc_base:"1fa9f",uc_full:"1fa9f",shortnames:[],category:"objects"},":wine_glass:":{uc_base:"1f377",uc_full:"1f377",shortnames:[],category:"food"},":wink:":{uc_base:"1f609",uc_full:"1f609",shortnames:[],category:"people"},":wolf:":{uc_base:"1f43a",uc_full:"1f43a",shortnames:[],category:"nature"},":woman:":{uc_base:"1f469",uc_full:"1f469",shortnames:[],category:"people"},":woman_with_headscarf:":{uc_base:"1f9d5",uc_full:"1f9d5",shortnames:[],category:"people"},":womans_clothes:":{uc_base:"1f45a",uc_full:"1f45a",shortnames:[],category:"people"},":womans_flat_shoe:":{uc_base:"1f97f",uc_full:"1f97f",shortnames:[],category:"people"},":womans_hat:":{uc_base:"1f452",uc_full:"1f452",shortnames:[],category:"people"},":womens:":{uc_base:"1f6ba",uc_full:"1f6ba",shortnames:[],category:"symbols"},":wood:":{uc_base:"1fab5",uc_full:"1fab5",shortnames:[],category:"nature"},":woozy_face:":{uc_base:"1f974",uc_full:"1f974",shortnames:[],category:"people"},":worm:":{uc_base:"1fab1",uc_full:"1fab1",shortnames:[],category:"nature"},":worried:":{uc_base:"1f61f",uc_full:"1f61f",shortnames:[],category:"people"},":wrench:":{uc_base:"1f527",uc_full:"1f527",shortnames:[],category:"objects"},":yarn:":{uc_base:"1f9f6",uc_full:"1f9f6",shortnames:[],category:"people"},":yawning_face:":{uc_base:"1f971",uc_full:"1f971",shortnames:[],category:"people"},":yellow_circle:":{uc_base:"1f7e1",uc_full:"1f7e1",shortnames:[],category:"symbols"},":yellow_heart:":{uc_base:"1f49b",uc_full:"1f49b",shortnames:[],category:"symbols"},":yellow_square:":{uc_base:"1f7e8",uc_full:"1f7e8",shortnames:[],category:"symbols"},":yen:":{uc_base:"1f4b4",uc_full:"1f4b4",shortnames:[],category:"objects"},":yo_yo:":{uc_base:"1fa80",uc_full:"1fa80",shortnames:[],category:"activity"},":yum:":{uc_base:"1f60b",uc_full:"1f60b",shortnames:[],category:"people"},":zany_face:":{uc_base:"1f92a",uc_full:"1f92a",shortnames:[],category:"people"},":zebra:":{uc_base:"1f993",uc_full:"1f993",shortnames:[],category:"nature"},":zipper_mouth:":{uc_base:"1f910",uc_full:"1f910",shortnames:[":zipper_mouth_face:"],category:"people"},":zombie:":{uc_base:"1f9df",uc_full:"1f9df",shortnames:[],category:"people"},":zzz:":{uc_base:"1f4a4",uc_full:"1f4a4",shortnames:[],category:"symbols"},":airplane:":{uc_base:"2708",uc_full:"2708-fe0f",shortnames:[],category:"travel"},":alarm_clock:":{uc_base:"23f0",uc_full:"23f0",shortnames:[],category:"objects"},":alembic:":{uc_base:"2697",uc_full:"2697-fe0f",shortnames:[],category:"objects"},":anchor:":{uc_base:"2693",uc_full:"2693",shortnames:[],category:"travel"},":aquarius:":{uc_base:"2652",uc_full:"2652",shortnames:[],category:"symbols"},":aries:":{uc_base:"2648",uc_full:"2648",shortnames:[],category:"symbols"},":arrow_backward:":{uc_base:"25c0",uc_full:"25c0-fe0f",shortnames:[],category:"symbols"},":arrow_double_down:":{uc_base:"23ec",uc_full:"23ec",shortnames:[],category:"symbols"},":arrow_double_up:":{uc_base:"23eb",uc_full:"23eb",shortnames:[],category:"symbols"},":arrow_down:":{uc_base:"2b07",uc_full:"2b07-fe0f",shortnames:[],category:"symbols"},":arrow_forward:":{uc_base:"25b6",uc_full:"25b6-fe0f",shortnames:[],category:"symbols"},":arrow_heading_down:":{uc_base:"2935",uc_full:"2935-fe0f",shortnames:[],category:"symbols"},":arrow_heading_up:":{uc_base:"2934",uc_full:"2934-fe0f",shortnames:[],category:"symbols"},":arrow_left:":{uc_base:"2b05",uc_full:"2b05-fe0f",shortnames:[],category:"symbols"},":arrow_lower_left:":{uc_base:"2199",uc_full:"2199-fe0f",shortnames:[],category:"symbols"},":arrow_lower_right:":{uc_base:"2198",uc_full:"2198-fe0f",shortnames:[],category:"symbols"},":arrow_right:":{uc_base:"27a1",uc_full:"27a1-fe0f",shortnames:[],category:"symbols"},":arrow_right_hook:":{uc_base:"21aa",uc_full:"21aa-fe0f",shortnames:[],category:"symbols"},":arrow_up:":{uc_base:"2b06",uc_full:"2b06-fe0f",shortnames:[],category:"symbols"},":arrow_up_down:":{uc_base:"2195",uc_full:"2195-fe0f",shortnames:[],category:"symbols"},":arrow_upper_left:":{uc_base:"2196",uc_full:"2196-fe0f",shortnames:[],category:"symbols"},":arrow_upper_right:":{uc_base:"2197",uc_full:"2197-fe0f",shortnames:[],category:"symbols"},":asterisk_symbol:":{uc_base:"002a",uc_full:"002a-fe0f",shortnames:[],category:"symbols"},":atom:":{uc_base:"269b",uc_full:"269b-fe0f",shortnames:[":atom_symbol:"],category:"symbols"},":ballot_box_with_check:":{uc_base:"2611",uc_full:"2611-fe0f",shortnames:[],category:"symbols"},":bangbang:":{uc_base:"203c",uc_full:"203c-fe0f",shortnames:[],category:"symbols"},":baseball:":{uc_base:"26be",uc_full:"26be",shortnames:[],category:"activity"},":beach_umbrella:":{uc_base:"26f1",uc_full:"26f1-fe0f",shortnames:[":umbrella_on_ground:"],category:"travel"},":biohazard:":{uc_base:"2623",uc_full:"2623-fe0f",shortnames:[":biohazard_sign:"],category:"symbols"},":black_circle:":{uc_base:"26ab",uc_full:"26ab",shortnames:[],category:"symbols"},":black_large_square:":{uc_base:"2b1b",uc_full:"2b1b",shortnames:[],category:"symbols"},":black_medium_small_square:":{uc_base:"25fe",uc_full:"25fe",shortnames:[],category:"symbols"},":black_medium_square:":{uc_base:"25fc",uc_full:"25fc-fe0f",shortnames:[],category:"symbols"},":black_nib:":{uc_base:"2712",uc_full:"2712-fe0f",shortnames:[],category:"objects"},":black_small_square:":{uc_base:"25aa",uc_full:"25aa-fe0f",shortnames:[],category:"symbols"},":cancer:":{uc_base:"264b",uc_full:"264b",shortnames:[],category:"symbols"},":capricorn:":{uc_base:"2651",uc_full:"2651",shortnames:[],category:"symbols"},":chains:":{uc_base:"26d3",uc_full:"26d3-fe0f",shortnames:[],category:"objects"},":chess_pawn:":{uc_base:"265f",uc_full:"265f-fe0f",shortnames:[],category:"activity"},":church:":{uc_base:"26ea",uc_full:"26ea",shortnames:[],category:"travel"},":cloud:":{uc_base:"2601",uc_full:"2601-fe0f",shortnames:[],category:"nature"},":clubs:":{uc_base:"2663",uc_full:"2663-fe0f",shortnames:[],category:"symbols"},":coffee:":{uc_base:"2615",uc_full:"2615",shortnames:[],category:"food"},":coffin:":{uc_base:"26b0",uc_full:"26b0-fe0f",shortnames:[],category:"objects"},":comet:":{uc_base:"2604",uc_full:"2604-fe0f",shortnames:[],category:"nature"},":congratulations:":{uc_base:"3297",uc_full:"3297-fe0f",shortnames:[],category:"symbols"},":copyright:":{uc_base:"00a9",uc_full:"00a9-fe0f",shortnames:[],category:"symbols"},":cross:":{uc_base:"271d",uc_full:"271d-fe0f",shortnames:[":latin_cross:"],category:"symbols"},":crossed_swords:":{uc_base:"2694",uc_full:"2694-fe0f",shortnames:[],category:"objects"},":curly_loop:":{uc_base:"27b0",uc_full:"27b0",shortnames:[],category:"symbols"},":diamonds:":{uc_base:"2666",uc_full:"2666-fe0f",shortnames:[],category:"symbols"},":digit_eight:":{uc_base:"0038",uc_full:"0038-fe0f",shortnames:[],category:"symbols"},":digit_five:":{uc_base:"0035",uc_full:"0035-fe0f",shortnames:[],category:"symbols"},":digit_four:":{uc_base:"0034",uc_full:"0034-fe0f",shortnames:[],category:"symbols"},":digit_nine:":{uc_base:"0039",uc_full:"0039-fe0f",shortnames:[],category:"symbols"},":digit_one:":{uc_base:"0031",uc_full:"0031-fe0f",shortnames:[],category:"symbols"},":digit_seven:":{uc_base:"0037",uc_full:"0037-fe0f",shortnames:[],category:"symbols"},":digit_six:":{uc_base:"0036",uc_full:"0036-fe0f",shortnames:[],category:"symbols"},":digit_three:":{uc_base:"0033",uc_full:"0033-fe0f",shortnames:[],category:"symbols"},":digit_two:":{uc_base:"0032",uc_full:"0032-fe0f",shortnames:[],category:"symbols"},":digit_zero:":{uc_base:"0030",uc_full:"0030-fe0f",shortnames:[],category:"symbols"},":eight_pointed_black_star:":{uc_base:"2734",uc_full:"2734-fe0f",shortnames:[],category:"symbols"},":eight_spoked_asterisk:":{uc_base:"2733",uc_full:"2733-fe0f",shortnames:[],category:"symbols"},":eject:":{uc_base:"23cf",uc_full:"23cf-fe0f",shortnames:[":eject_symbol:"],category:"symbols"},":envelope:":{uc_base:"2709",uc_full:"2709-fe0f",shortnames:[],category:"objects"},":exclamation:":{uc_base:"2757",uc_full:"2757",shortnames:[],category:"symbols"},":fast_forward:":{uc_base:"23e9",uc_full:"23e9",shortnames:[],category:"symbols"},":female_sign:":{uc_base:"2640",uc_full:"2640-fe0f",shortnames:[],category:"symbols"},":ferry:":{uc_base:"26f4",uc_full:"26f4-fe0f",shortnames:[],category:"travel"},":fist:":{uc_base:"270a",uc_full:"270a",shortnames:[],category:"people"},":fleur-de-lis:":{uc_base:"269c",uc_full:"269c-fe0f",shortnames:[],category:"symbols"},":fountain:":{uc_base:"26f2",uc_full:"26f2",shortnames:[],category:"travel"},":frowning2:":{uc_base:"2639",uc_full:"2639-fe0f",shortnames:[":white_frowning_face:"],category:"people"},":fuelpump:":{uc_base:"26fd",uc_full:"26fd",shortnames:[],category:"travel"},":gear:":{uc_base:"2699",uc_full:"2699-fe0f",shortnames:[],category:"objects"},":gemini:":{uc_base:"264a",uc_full:"264a",shortnames:[],category:"symbols"},":golf:":{uc_base:"26f3",uc_full:"26f3",shortnames:[],category:"activity"},":grey_exclamation:":{uc_base:"2755",uc_full:"2755",shortnames:[],category:"symbols"},":grey_question:":{uc_base:"2754",uc_full:"2754",shortnames:[],category:"symbols"},":hammer_pick:":{uc_base:"2692",uc_full:"2692-fe0f",shortnames:[":hammer_and_pick:"],category:"objects"},":heart:":{uc_base:"2764",uc_full:"2764-fe0f",shortnames:[],category:"symbols"},":heart_exclamation:":{uc_base:"2763",uc_full:"2763-fe0f",shortnames:[":heavy_heart_exclamation_mark_ornament:"],category:"symbols"},":hearts:":{uc_base:"2665",uc_full:"2665-fe0f",shortnames:[],category:"symbols"},":heavy_check_mark:":{uc_base:"2714",uc_full:"2714-fe0f",shortnames:[],category:"symbols"},":heavy_division_sign:":{uc_base:"2797",uc_full:"2797",shortnames:[],category:"symbols"},":heavy_minus_sign:":{uc_base:"2796",uc_full:"2796",shortnames:[],category:"symbols"},":heavy_multiplication_x:":{uc_base:"2716",uc_full:"2716-fe0f",shortnames:[],category:"symbols"},":heavy_plus_sign:":{uc_base:"2795",uc_full:"2795",shortnames:[],category:"symbols"},":helmet_with_cross:":{uc_base:"26d1",uc_full:"26d1-fe0f",shortnames:[":helmet_with_white_cross:"],category:"people"},":hotsprings:":{uc_base:"2668",uc_full:"2668-fe0f",shortnames:[],category:"symbols"},":hourglass:":{uc_base:"231b",uc_full:"231b",shortnames:[],category:"objects"},":hourglass_flowing_sand:":{uc_base:"23f3",uc_full:"23f3",shortnames:[],category:"objects"},":ice_skate:":{uc_base:"26f8",uc_full:"26f8-fe0f",shortnames:[],category:"activity"},":infinity:":{uc_base:"267e",uc_full:"267e-fe0f",shortnames:[],category:"symbols"},":information_source:":{uc_base:"2139",uc_full:"2139-fe0f",shortnames:[],category:"symbols"},":interrobang:":{uc_base:"2049",uc_full:"2049-fe0f",shortnames:[],category:"symbols"},":keyboard:":{uc_base:"2328",uc_full:"2328-fe0f",shortnames:[],category:"objects"},":left_right_arrow:":{uc_base:"2194",uc_full:"2194-fe0f",shortnames:[],category:"symbols"},":leftwards_arrow_with_hook:":{uc_base:"21a9",uc_full:"21a9-fe0f",shortnames:[],category:"symbols"},":leo:":{uc_base:"264c",uc_full:"264c",shortnames:[],category:"symbols"},":libra:":{uc_base:"264e",uc_full:"264e",shortnames:[],category:"symbols"},":loop:":{uc_base:"27bf",uc_full:"27bf",shortnames:[],category:"symbols"},":m:":{uc_base:"24c2",uc_full:"24c2-fe0f",shortnames:[],category:"symbols"},":male_sign:":{uc_base:"2642",uc_full:"2642-fe0f",shortnames:[],category:"symbols"},":medical_symbol:":{uc_base:"2695",uc_full:"2695-fe0f",shortnames:[],category:"symbols"},":mountain:":{uc_base:"26f0",uc_full:"26f0-fe0f",shortnames:[],category:"travel"},":negative_squared_cross_mark:":{uc_base:"274e",uc_full:"274e",shortnames:[],category:"symbols"},":no_entry:":{uc_base:"26d4",uc_full:"26d4",shortnames:[],category:"symbols"},":o:":{uc_base:"2b55",uc_full:"2b55",shortnames:[],category:"symbols"},":ophiuchus:":{uc_base:"26ce",uc_full:"26ce",shortnames:[],category:"symbols"},":orthodox_cross:":{uc_base:"2626",uc_full:"2626-fe0f",shortnames:[],category:"symbols"},":part_alternation_mark:":{uc_base:"303d",uc_full:"303d-fe0f",shortnames:[],category:"symbols"},":partly_sunny:":{uc_base:"26c5",uc_full:"26c5",shortnames:[],category:"nature"},":pause_button:":{uc_base:"23f8",uc_full:"23f8-fe0f",shortnames:[":double_vertical_bar:"],category:"symbols"},":peace:":{uc_base:"262e",uc_full:"262e-fe0f",shortnames:[":peace_symbol:"],category:"symbols"},":pencil2:":{uc_base:"270f",uc_full:"270f-fe0f",shortnames:[],category:"objects"},":person_bouncing_ball:":{uc_base:"26f9",uc_full:"26f9",shortnames:[":basketball_player:",":person_with_ball:"],category:"activity"},":pick:":{uc_base:"26cf",uc_full:"26cf-fe0f",shortnames:[],category:"objects"},":pisces:":{uc_base:"2653",uc_full:"2653",shortnames:[],category:"symbols"},":play_pause:":{uc_base:"23ef",uc_full:"23ef-fe0f",shortnames:[],category:"symbols"},":point_up:":{uc_base:"261d",uc_full:"261d-fe0f",shortnames:[],category:"people"},":pound_symbol:":{uc_base:"0023",uc_full:"0023-fe0f",shortnames:[],category:"symbols"},":question:":{uc_base:"2753",uc_full:"2753",shortnames:[],category:"symbols"},":radioactive:":{uc_base:"2622",uc_full:"2622-fe0f",shortnames:[":radioactive_sign:"],category:"symbols"},":raised_hand:":{uc_base:"270b",uc_full:"270b",shortnames:[],category:"people"},":record_button:":{uc_base:"23fa",uc_full:"23fa-fe0f",shortnames:[],category:"symbols"},":recycle:":{uc_base:"267b",uc_full:"267b-fe0f",shortnames:[],category:"symbols"},":registered:":{uc_base:"00ae",uc_full:"00ae-fe0f",shortnames:[],category:"symbols"},":relaxed:":{uc_base:"263a",uc_full:"263a-fe0f",shortnames:[],category:"people"},":rewind:":{uc_base:"23ea",uc_full:"23ea",shortnames:[],category:"symbols"},":sagittarius:":{uc_base:"2650",uc_full:"2650",shortnames:[],category:"symbols"},":sailboat:":{uc_base:"26f5",uc_full:"26f5",shortnames:[],category:"travel"},":scales:":{uc_base:"2696",uc_full:"2696-fe0f",shortnames:[],category:"objects"},":scissors:":{uc_base:"2702",uc_full:"2702-fe0f",shortnames:[],category:"objects"},":scorpius:":{uc_base:"264f",uc_full:"264f",shortnames:[],category:"symbols"},":secret:":{uc_base:"3299",uc_full:"3299-fe0f",shortnames:[],category:"symbols"},":shamrock:":{uc_base:"2618",uc_full:"2618-fe0f",shortnames:[],category:"nature"},":shinto_shrine:":{uc_base:"26e9",uc_full:"26e9-fe0f",shortnames:[],category:"travel"},":skier:":{uc_base:"26f7",uc_full:"26f7-fe0f",shortnames:[],category:"activity"},":skull_crossbones:":{uc_base:"2620",uc_full:"2620-fe0f",shortnames:[":skull_and_crossbones:"],category:"people"},":snowflake:":{uc_base:"2744",uc_full:"2744-fe0f",shortnames:[],category:"nature"},":snowman2:":{uc_base:"2603",uc_full:"2603-fe0f",shortnames:[],category:"nature"},":snowman:":{uc_base:"26c4",uc_full:"26c4",shortnames:[],category:"nature"},":soccer:":{uc_base:"26bd",uc_full:"26bd",shortnames:[],category:"activity"},":spades:":{uc_base:"2660",uc_full:"2660-fe0f",shortnames:[],category:"symbols"},":sparkle:":{uc_base:"2747",uc_full:"2747-fe0f",shortnames:[],category:"symbols"},":sparkles:":{uc_base:"2728",uc_full:"2728",shortnames:[],category:"nature"},":star:":{uc_base:"2b50",uc_full:"2b50",shortnames:[],category:"nature"},":star_and_crescent:":{uc_base:"262a",uc_full:"262a-fe0f",shortnames:[],category:"symbols"},":star_of_david:":{uc_base:"2721",uc_full:"2721-fe0f",shortnames:[],category:"symbols"},":stop_button:":{uc_base:"23f9",uc_full:"23f9-fe0f",shortnames:[],category:"symbols"},":stopwatch:":{uc_base:"23f1",uc_full:"23f1-fe0f",shortnames:[],category:"objects"},":sunny:":{uc_base:"2600",uc_full:"2600-fe0f",shortnames:[],category:"nature"},":taurus:":{uc_base:"2649",uc_full:"2649",shortnames:[],category:"symbols"},":telephone:":{uc_base:"260e",uc_full:"260e-fe0f",shortnames:[],category:"objects"},":tent:":{uc_base:"26fa",uc_full:"26fa",shortnames:[],category:"travel"},":thunder_cloud_rain:":{uc_base:"26c8",uc_full:"26c8-fe0f",shortnames:[":thunder_cloud_and_rain:"],category:"nature"},":timer:":{uc_base:"23f2",uc_full:"23f2-fe0f",shortnames:[":timer_clock:"],category:"objects"},":tm:":{uc_base:"2122",uc_full:"2122-fe0f",shortnames:[],category:"symbols"},":track_next:":{uc_base:"23ed",uc_full:"23ed-fe0f",shortnames:[":next_track:"],category:"symbols"
},":track_previous:":{uc_base:"23ee",uc_full:"23ee-fe0f",shortnames:[":previous_track:"],category:"symbols"},":transgender_symbol:":{uc_base:"26a7",uc_full:"26a7",shortnames:[],category:"symbols"},":umbrella2:":{uc_base:"2602",uc_full:"2602-fe0f",shortnames:[],category:"nature"},":umbrella:":{uc_base:"2614",uc_full:"2614",shortnames:[],category:"nature"},":urn:":{uc_base:"26b1",uc_full:"26b1-fe0f",shortnames:[":funeral_urn:"],category:"objects"},":v:":{uc_base:"270c",uc_full:"270c-fe0f",shortnames:[],category:"people"},":virgo:":{uc_base:"264d",uc_full:"264d",shortnames:[],category:"symbols"},":warning:":{uc_base:"26a0",uc_full:"26a0-fe0f",shortnames:[],category:"symbols"},":watch:":{uc_base:"231a",uc_full:"231a",shortnames:[],category:"objects"},":wavy_dash:":{uc_base:"3030",uc_full:"3030-fe0f",shortnames:[],category:"symbols"},":wheel_of_dharma:":{uc_base:"2638",uc_full:"2638-fe0f",shortnames:[],category:"symbols"},":wheelchair:":{uc_base:"267f",uc_full:"267f",shortnames:[],category:"symbols"},":white_check_mark:":{uc_base:"2705",uc_full:"2705",shortnames:[],category:"symbols"},":white_circle:":{uc_base:"26aa",uc_full:"26aa",shortnames:[],category:"symbols"},":white_large_square:":{uc_base:"2b1c",uc_full:"2b1c",shortnames:[],category:"symbols"},":white_medium_small_square:":{uc_base:"25fd",uc_full:"25fd",shortnames:[],category:"symbols"},":white_medium_square:":{uc_base:"25fb",uc_full:"25fb-fe0f",shortnames:[],category:"symbols"},":white_small_square:":{uc_base:"25ab",uc_full:"25ab-fe0f",shortnames:[],category:"symbols"},":writing_hand:":{uc_base:"270d",uc_full:"270d-fe0f",shortnames:[],category:"people"},":x:":{uc_base:"274c",uc_full:"274c",shortnames:[],category:"symbols"},":yin_yang:":{uc_base:"262f",uc_full:"262f-fe0f",shortnames:[],category:"symbols"},":zap:":{uc_base:"26a1",uc_full:"26a1",shortnames:[],category:"nature"}},ns.asciiList={"*\\0/*":"1f646","*\\O/*":"1f646","-___-":"1f611",":'-)":"1f602","':-)":"1f605","':-D":"1f605",">:-)":"1f606","':-(":"1f613",">:-(":"1f620",":'-(":"1f622","O:-)":"1f607","0:-3":"1f607","0:-)":"1f607","0;^)":"1f607","O;-)":"1f607","0;-)":"1f607","O:-3":"1f607","-__-":"1f611",":-\xde":"1f61b","</3":"1f494",":')":"1f602",":-D":"1f603","':)":"1f605","'=)":"1f605","':D":"1f605","'=D":"1f605",">:)":"1f606",">;)":"1f606",">=)":"1f606",";-)":"1f609","*-)":"1f609",";-]":"1f609",";^)":"1f609","':(":"1f613","'=(":"1f613",":-*":"1f618",":^*":"1f618",">:P":"1f61c","X-P":"1f61c",">:[":"1f61e",":-(":"1f61e",":-[":"1f61e",">:(":"1f620",":'(":"1f622",";-(":"1f622",">.<":"1f623","#-)":"1f635","%-)":"1f635","X-)":"1f635","\\0/":"1f646","\\O/":"1f646","0:3":"1f607","0:)":"1f607","O:)":"1f607","O=)":"1f607","O:3":"1f607","B-)":"1f60e","8-)":"1f60e","B-D":"1f60e","8-D":"1f60e","-_-":"1f611",">:\\":"1f615",">:/":"1f615",":-/":"1f615",":-.":"1f615",":-P":"1f61b",":\xde":"1f61b",":-b":"1f61b",":-O":"1f62e",O_O:"1f62e",">:O":"1f62e",":-X":"1f636",":-#":"1f636",":-)":"1f642","(y)":"1f44d","<3":"2764-fe0f","=D":"1f603",";)":"1f609","*)":"1f609",";]":"1f609",";D":"1f609",":*":"1f618","=*":"1f618",":(":"1f61e",":[":"1f61e","=(":"1f61e",":@":"1f620",";(":"1f622","D:":"1f628",":$":"1f633","=$":"1f633","#)":"1f635","%)":"1f635","X)":"1f635","B)":"1f60e","8)":"1f60e",":/":"1f615",":\\":"1f615","=/":"1f615","=\\":"1f615",":L":"1f615","=L":"1f615",":P":"1f61b","=P":"1f61b",":b":"1f61b",":O":"1f62e",":X":"1f636",":#":"1f636","=X":"1f636","=#":"1f636",":)":"1f642","=]":"1f642","=)":"1f642",":]":"1f642",":D":"1f604"},ns.asciiRegexp="(\\*\\\\0\\/\\*|\\*\\\\O\\/\\*|\\-___\\-|\\:'\\-\\)|'\\:\\-\\)|'\\:\\-D|\\>\\:\\-\\)|>\\:\\-\\)|'\\:\\-\\(|\\>\\:\\-\\(|>\\:\\-\\(|\\:'\\-\\(|O\\:\\-\\)|0\\:\\-3|0\\:\\-\\)|0;\\^\\)|O;\\-\\)|0;\\-\\)|O\\:\\-3|\\-__\\-|\\:\\-\xde|\\:\\-\xde|\\<\\/3|<\\/3|\\:'\\)|\\:\\-D|'\\:\\)|'\\=\\)|'\\:D|'\\=D|\\>\\:\\)|>\\:\\)|\\>;\\)|>;\\)|\\>\\=\\)|>\\=\\)|;\\-\\)|\\*\\-\\)|;\\-\\]|;\\^\\)|'\\:\\(|'\\=\\(|\\:\\-\\*|\\:\\^\\*|\\>\\:P|>\\:P|X\\-P|\\>\\:\\[|>\\:\\[|\\:\\-\\(|\\:\\-\\[|\\>\\:\\(|>\\:\\(|\\:'\\(|;\\-\\(|\\>\\.\\<|>\\.<|#\\-\\)|%\\-\\)|X\\-\\)|\\\\0\\/|\\\\O\\/|0\\:3|0\\:\\)|O\\:\\)|O\\=\\)|O\\:3|B\\-\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\>\\:\\\\|>\\:\\\\|\\>\\:\\/|>\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\-P|\\:\xde|\\:\xde|\\:\\-b|\\:\\-O|O_O|\\>\\:O|>\\:O|\\:\\-X|\\:\\-#|\\:\\-\\)|\\(y\\)|\\<3|<3|\\=D|;\\)|\\*\\)|;\\]|;D|\\:\\*|\\=\\*|\\:\\(|\\:\\[|\\=\\(|\\:@|;\\(|D\\:|\\:\\$|\\=\\$|#\\)|%\\)|X\\)|B\\)|8\\)|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\=P|\\:b|\\:O|\\:X|\\:#|\\=X|\\=#|\\:\\)|\\=\\]|\\=\\)|\\:\\]|\\:D)",ns.emojiVersion="6.0",ns.emojiSize="32",ns.blacklistChars="",ns.imagePathPNG="https://cdn.jsdelivr.net/joypixels/assets/"+ns.emojiVersion+"/png/unicode/",ns.defaultPathPNG=ns.imagePathPNG,ns.fileExtension=".png",ns.imageTitleTag=!0,ns.sprites=!1,ns.unicodeAlt=!0,ns.ascii=!1,ns.riskyMatchAscii=!1,ns.regAscii=new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)"+ns.asciiRegexp+"(?=\\s|$|[!,.?]))","gi"),ns.regAsciiRisky=new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(()"+ns.asciiRegexp+"())","gi"),ns.regUnicode=new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(?:[\u1f91D[\u1f3fB-\u1f3fF]\u200d\u1f9f1\u200d\u1f91D[\u1f3fB-\u1f3fF]])|(?:\ud83c\udff3)\ufe0f?\u200d?(?:\ud83c\udf08)|(?:\ud83d\udc41)\ufe0f?\u200d?(?:\ud83d\udde8)\ufe0f?|[#-9]\ufe0f?\u20e3|(?:(?:\ud83c\udff4)(?:\udb40[\udc60-\udcff]){1,6})|(?:\ud83c[\udde0-\uddff]){2}|(?:\ud83d[\udc68\udc69])\ufe0f?(?:\ud83c[\udffa-\udfff])?\u200d?(?:[\u2695\u2696\u2708]|\ud83c[\udf3e-\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83d[\udc68\udc69]|\ud83e[\uddd0-\udddf])(?:\ud83c[\udffa-\udfff])?\u200d?[\u2640\u2642\u2695\u2696\u2708]?\ufe0f?|(?:(?:\u2764|\ud83d[\udc66-\udc69\udc8b])[\u200d\ufe0f]{0,2}){1,3}(?:\u2764|\ud83d[\udc66-\udc69\udc8b])|(?:(?:\u2764|\ud83d[\udc66-\udc69\udc8b])\ufe0f?){2,4}|(?:\ud83d[\udc68\udc69\udc6e\udc71-\udc87\udd75\ude45-\ude4e]|\ud83e[\udd26\udd37]|\ud83c[\udfc3-\udfcc]|\ud83e[\udd38-\udd3e]|\ud83d[\udea3-\udeb6]|\u26f9|\ud83d\udc6f)\ufe0f?(?:\ud83c[\udffb-\udfff])?\u200d?[\u2640\u2642]?\ufe0f?|(?:[\u261d\u26f9\u270a-\u270d]|\ud83c[\udf85-\udfcc]|\ud83d[\udc42-\udcaa\udd74-\udd96\ude45-\ude4f\udea3-\udecc]|\ud83e[\udd18-\udd3e])\ufe0f?(?:\ud83c[\udffb-\udfff])|(?:[\u2194-\u2199\u21a9-\u21aa]\ufe0f?|[#*]|[\u3030\u303d]\ufe0f?|(?:\ud83c[\udd70-\udd71]|\ud83c\udd8e|\ud83c[\udd91-\udd9a])\ufe0f?|\u24c2\ufe0f?|[\u3297\u3299]\ufe0f?|(?:\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51])\ufe0f?|[\u203c\u2049]\ufe0f?|[\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe]\ufe0f?|[\xa9\xae]\ufe0f?|[\u2122\u2139]\ufe0f?|\ud83c\udc04\ufe0f?|[\u2b05-\u2b07\u2b1b-\u2b1c\u2b50\u2b55]\ufe0f?|[\u231a-\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa]\ufe0f?|\ud83c\udccf|[\u2934\u2935]\ufe0f?)|[\u2700-\u27bf]\ufe0f?|[\ud800-\udbff][\udc00-\udfff]\ufe0f?|[\u2600-\u26ff]\ufe0f?|[0-9]\ufe0f","g"),ns.convert=function(unicode){if(unicode.indexOf("-")>-1){for(var parts=[],s=unicode.split("-"),i=0;i<s.length;i++){var part=parseInt(s[i],16);if(part>=65536&&1114111>=part){var hi=Math.floor((part-65536)/1024)+55296,lo=(part-65536)%1024+56320;part=String.fromCharCode(hi)+String.fromCharCode(lo)}else part=String.fromCharCode(part);parts.push(part)}return parts.join("")}var s=parseInt(unicode,16);if(s>=65536&&1114111>=s){var hi=Math.floor((s-65536)/1024)+55296,lo=(s-65536)%1024+56320;return String.fromCharCode(hi)+String.fromCharCode(lo)}return String.fromCharCode(s)},ns.shortnameLookup=[],ns.altShortNames=[],ns.unicodeCharRegexCached=null;var emoji,tmpShortNames=[];for(emoji in ns.emojiList)if(ns.emojiList.hasOwnProperty(emoji)||""===emoji){tmpShortNames.push(emoji.replace(/[+]/g,"\\$&"));var cp=ns.convert(ns.emojiList[emoji].uc_full),i=0;for(ns.shortnameLookup[cp]=emoji.replace(/[+]/g,"\\$&"),i=0;i<ns.emojiList[emoji].shortnames.length;i++)tmpShortNames.push(ns.emojiList[emoji].shortnames[i].replace(/[+]/g,"\\$&")),ns.altShortNames[ns.emojiList[emoji].shortnames[i]]=emoji}ns.shortnames=tmpShortNames.join("|"),ns.regShortNames=new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+ns.shortnames+")","gi"),ns.init=function(){ns.unicodeCharRegex()},ns.toImage=function(str){return str=ns.toShort(str),str=ns.shortnameToImage(str)},ns.unicodeToImage=function(str){return str},ns.unifyUnicode=function(str){return str=ns.toShort(str),str=ns.shortnameToUnicode(str)},ns.shortnameToAscii=function(str){var unicode,unicodeToAscii=ns.objectFlip(ns.asciiList);return str=str.replace(ns.regShortNames,function(shortname){return"undefined"!=typeof shortname&&""!==shortname&&shortname in ns.emojiList?(unicode=ns.emojiList[shortname].uc_full,"undefined"!=typeof unicodeToAscii[unicode]?unicodeToAscii[unicode]:shortname):shortname})},ns.shortnameToUnicode=function(str){var unicode,fname;if(str=str.replace(ns.regShortNames,function(shortname){if("undefined"==typeof shortname||""===shortname)return shortname;if(!(shortname in ns.emojiList)){if(!(shortname in ns.altShortNames))return shortname;shortname=ns.altShortNames[shortname]}return unicode=ns.emojiList[shortname].uc_full.toUpperCase(),fname=ns.emojiList[shortname].uc_base,ns.convert(unicode)}),ns.ascii){var asciiRX=ns.riskyMatchAscii?ns.regAsciiRisky:ns.regAscii;str=str.replace(asciiRX,function(entire,m1,m2,m3){return"undefined"!=typeof m3&&""!==m3&&ns.unescapeHTML(m3)in ns.asciiList?(m3=ns.unescapeHTML(m3),unicode=ns.asciiList[m3].toUpperCase(),m2+ns.convert(unicode)):entire})}return str},ns.shortnameToImage=function(str){var replaceWith,shortname,unicode,fname,alt,category,title,size,ePath;if(str=str.replace(ns.regShortNames,function(shortname){if("undefined"==typeof shortname||""===shortname)return shortname;if(!(shortname in ns.emojiList)){if(!(shortname in ns.altShortNames))return shortname;shortname=ns.altShortNames[shortname]}return unicode=ns.emojiList[shortname].uc_full,fname=ns.emojiList[shortname].uc_base,category=fname.indexOf("-1f3f")>=0?"diversity":ns.emojiList[shortname].category,title=ns.imageTitleTag?'title="'+shortname+'"':"",size="32"==ns.spriteSize||"64"==ns.spriteSize?ns.spriteSize:"32",ePath=ns.defaultPathPNG!==ns.imagePathPNG?ns.imagePathPNG:ns.defaultPathPNG+ns.emojiSize+"/",alt=ns.unicodeAlt?ns.convert(unicode.toUpperCase()):shortname,replaceWith=ns.sprites?'<span class="joypixels joypixels-'+size+"-"+category+" _"+fname+'" '+title+">"+alt+"</span>":'<img class="joypixels" alt="'+alt+'" '+title+' src="'+ePath+fname+ns.fileExtension+'"/>'}),ns.ascii){var asciiRX=ns.riskyMatchAscii?ns.regAsciiRisky:ns.regAscii;str=str.replace(asciiRX,function(entire,m1,m2,m3){if("undefined"==typeof m3||""===m3||!(ns.unescapeHTML(m3)in ns.asciiList))return entire;m3=ns.unescapeHTML(m3),unicode=ns.asciiList[m3];var mappedUnicode=ns.mapUnicodeToShort();return shortname=mappedUnicode[unicode],category=unicode.indexOf("-1f3f")>=0?"diversity":ns.emojiList[shortname].category,title=ns.imageTitleTag?'title="'+ns.escapeHTML(m3)+'"':"",size="32"==ns.spriteSize||"64"==ns.spriteSize?ns.spriteSize:"32",ePath=ns.defaultPathPNG!==ns.imagePathPNG?ns.imagePathPNG:ns.defaultPathPNG+ns.emojiSize+"/",alt=ns.unicodeAlt?ns.convert(unicode.toUpperCase()):ns.escapeHTML(m3),unicode=unicode.replace("-fe0f",""),replaceWith=ns.sprites?m2+'<span class="joypixels joypixels-'+size+"-"+category+" _"+unicode+'"  '+title+">"+alt+"</span>":m2+'<img class="joypixels" alt="'+alt+'" '+title+' src="'+ePath+unicode+ns.fileExtension+'"/>'})}return str},ns.toShort=function(str){var find=ns.unicodeCharRegex();return str=ns.replaceAll(str,find)},ns.escapeHTML=function(string){var escaped={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return string.replace(/[&<>"']/g,function(match){return escaped[match]})},ns.unescapeHTML=function(string){var unescaped={"&amp;":"&","&#38;":"&","&#x26;":"&","&lt;":"<","&#60;":"<","&#x3C;":"<","&gt;":">","&#62;":">","&#x3E;":">","&quot;":'"',"&#34;":'"',"&#x22;":'"',"&apos;":"'","&#39;":"'","&#x27;":"'"};return string.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/gi,function(match){return unescaped[match]})},ns.shortnameConversionMap=function(){var emoji,map=[];for(emoji in ns.emojiList)ns.emojiList.hasOwnProperty(emoji)&&""!==emoji&&(map[ns.convert(ns.emojiList[emoji].uc_full)]=emoji);return map},ns.unicodeCharRegex=function(){if(!ns.unicodeCharRegexCached){var map=[];for(emoji in ns.emojiList)ns.emojiList.hasOwnProperty(emoji)&&""!==emoji&&map.push(ns.convert(ns.emojiList[emoji].uc_full));ns.unicodeCharRegexCached=map.join("|")}return ns.unicodeCharRegexCached},ns.mapEmojiList=function(addToMapStorage){for(var shortname in ns.emojiList)if(ns.emojiList.hasOwnProperty(shortname)){var unicode=ns.emojiList[shortname].uc_full;addToMapStorage(unicode,shortname)}},ns.mapUnicodeToShort=function(){return ns.memMapShortToUnicode||(ns.memMapShortToUnicode={},ns.mapEmojiList(function(unicode,shortname){ns.memMapShortToUnicode[unicode]=shortname})),ns.memMapShortToUnicode},ns.memorizeReplacement=function(){if(!ns.unicodeReplacementRegEx||!ns.memMapShortToUnicodeCharacters){var unicodeList=[];ns.memMapShortToUnicodeCharacters={},ns.mapEmojiList(function(unicode,shortname){var emojiCharacter=ns.convert(unicode);ns.memMapShortToUnicodeCharacters[emojiCharacter]=shortname,unicodeList.push(emojiCharacter)}),ns.unicodeReplacementRegEx=unicodeList.join("|")}},ns.mapUnicodeCharactersToShort=function(){return ns.memorizeReplacement(),ns.memMapShortToUnicodeCharacters},ns.objectFlip=function(obj){var key,tmp_obj={};for(key in obj)obj.hasOwnProperty(key)&&(tmp_obj[obj[key]]=key);return tmp_obj},ns.escapeRegExp=function(string){return string.replace(/[-[\]{}()*+?.,;:&\\^$#\s]/g,"\\$&")},ns.replaceAll=function(string,find){var escapedFind=ns.escapeRegExp(find),search=new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+escapedFind+")","gi"),replace=function(entire,m1){return"undefined"==typeof m1||""===m1?entire:ns.shortnameLookup[m1]};return string.replace(search,replace)}}(this.joypixels=this.joypixels||{}),"object"==typeof module&&(module.exports=this.joypixels);
;
//# sourceMappingURL=scripts.js.map