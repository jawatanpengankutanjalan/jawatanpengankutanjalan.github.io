"use strict";function sydneyDomReady(e){if("function"==typeof e)return"interactive"===document.readyState||"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1)}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var s=0;s<this.length;s++)e.call(t,this[s],s,this)});var sydney=sydney||{};sydney.navigation={init:function(){function e(e){e.preventDefault();var t=e.target.closest("li");t.querySelector(".sub-menu").classList.toggle("toggled")}function t(){o.classList.remove("toggled"),document.body.classList.remove("mobile-menu-visible")}function s(){if("focus"===event.type||"blur"===event.type){let e=this;for(;!e.classList.contains("nav-menu");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("focus"),e=e.parentNode}if("touchstart"===event.type){const e=this.parentNode;for(const t of e.parentNode.children)e!==t&&t.classList.remove("focus");e.classList.toggle("focus")}}var n=document.getElementById("mainnav");const o=document.getElementsByClassName("sydney-offcanvas-menu")[0];if(!n)return;var i=n.querySelectorAll(".dropdown-symbol");for(var a of i)a.addEventListener("keydown",function(e){var t="Enter"===e.key||13===e.keyCode;if(t){e.preventDefault();var s=this.parentNode;console.log(s),s.getElementsByClassName("sub-menu")[0].classList.toggle("toggled")}});const l=document.getElementsByClassName("menu-toggle")[0],c=document.getElementsByClassName("mobile-menu-close")[0];if(void 0===l)return;const d=n.getElementsByTagName("ul")[0];n.getElementsByClassName("mobile-menu-close")[0];if(void 0===d)return void(l.style.display="none");d.classList.contains("nav-menu")||d.classList.add("nav-menu");var r=o.querySelectorAll("a[href]:not([disabled]):not(.mobile-menu-close)"),u=r[0];l.addEventListener("click",function(t){t.preventDefault(),l.classList.add("open"),o.classList.add("toggled"),document.body.classList.add("mobile-menu-visible");var s=o.querySelectorAll(".dropdown-symbol");for(var n of s)n.addEventListener("touchstart",e),n.addEventListener("click",e),n.addEventListener("keydown",function(e){var t="Enter"===e.key||13===e.keyCode;if(t){e.preventDefault();var s=n.parentNode.parentNode;s.getElementsByClassName("sub-menu")[0].classList.toggle("toggled")}});u.focus()});r=o.querySelectorAll("a[href]:not([disabled])"),u=r[0];var m=r[r.length-1],y=9;m.addEventListener("keydown",function(e){var t="Tab"===e.key||e.keyCode===y;t&&(e.shiftKey||u.focus())}),c.addEventListener("click",function(e){e.preventDefault(),l.focus(),l.classList.remove("open"),o.classList.remove("toggled"),document.body.classList.remove("mobile-menu-visible")});var f=n.querySelectorAll('a[href*="#"]');for(var v of f)v.addEventListener("click",t);const g=d.getElementsByTagName("a"),h=d.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");for(const e of g)e.addEventListener("focus",s,!0),e.addEventListener("blur",s,!0);for(const e of h)e.addEventListener("touchstart",s,!1);const L=document.querySelectorAll(".menu-item-has-children > a");L.forEach(e=>{e.addEventListener("mouseenter",function(){this.setAttribute("aria-expanded","true")}),e.addEventListener("mouseleave",function(){this.setAttribute("aria-expanded","false")})})}},sydney.backToTop={init:function(){this.displayButton()},setup:function(){const e=document.getElementsByClassName("go-top")[0];if(void 0!==e&&null!=e){var t=window.pageYOffset,s=getComputedStyle(document.documentElement).getPropertyValue("--sydney-scrolltop-distance");t>s?e.classList.add("show"):e.classList.remove("show"),e.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}},displayButton:function(){this.setup(),window.addEventListener("scroll",function(){this.setup()}.bind(this))}},sydney.removePreloader={init:function(){this.remove()},remove:function(){const e=document.querySelectorAll(".preloader");0!==e.length&&e.forEach(function(e){e.classList.add("disable"),setTimeout(function(){e.style.display="none"},600)})}},sydney.stickyMenu={init:function(){this.headerClone(),window.addEventListener("resize",function(){this.headerClone()}.bind(this)),this.sticky(),window.addEventListener("scroll",function(){this.sticky()}.bind(this))},headerClone:function(){const e=document.getElementsByClassName("site-header")[0],t=document.getElementsByClassName("header-clone")[0];void 0===t&&null==t||void 0===e&&null==e||(t.style.height=e.offsetHeight+"px")},sticky:function(){const e=document.getElementsByClassName("site-header")[0];if(void 0!==e||null!=e){var t=window.pageYOffset,s=e.offsetTop;t>=s?(e.classList.add("fixed"),document.body.classList.add("siteScrolled")):(e.classList.remove("fixed"),document.body.classList.remove("siteScrolled")),t>=107?e.classList.add("float-header"):e.classList.remove("float-header")}}},sydney.stickyHeader={init:function(){const e=document.getElementsByClassName("sticky-header")[0],t=document.getElementsByTagName("body")[0];if(void 0!==e)if(e.classList.contains("sticky-scrolltop")){var s=0,n=e.offsetTop,o=document.getElementsByClassName("admin-bar")[0];if(void 0!==o&&null!=o)n=n+32;window.addEventListener("scroll",function(){var o=window.pageYOffset||document.documentElement.scrollTop;console.log(n,s),o<s?(e.classList.add("is-sticky"),t.classList.add("sticky-active")):(e.classList.remove("is-sticky"),t.classList.remove("sticky-active")),s<n&&e.classList.remove("is-sticky"),s=o<=0?0:o,0===o&&t.classList.remove("sydney-scrolling-up")},!1)}else this.sticky(),window.addEventListener("scroll",function(){this.sticky()}.bind(this))},sticky:function(){const e=document.getElementsByClassName("sticky-header")[0],t=document.getElementsByTagName("body")[0];if(e.classList.contains("header_layout_1")||e.classList.contains("header_layout_2"))var s=window.pageYOffset,n=0;else s=window.pageYOffset,n=e.offsetTop;var o=document.getElementsByClassName("admin-bar")[0];if(void 0!==o&&null!=o)n=n+32;s>n?(e.classList.add("sticky-active"),t.classList.add("sticky-active")):(e.classList.remove("sticky-active"),t.classList.remove("sticky-active"))}},sydney.headerSearch={init:function(){var e=this,t=document.querySelectorAll(".header-search"),s=window.matchMedia("(max-width: 1024px)").matches?document.querySelector("#masthead-mobile .header-search-form"):document.querySelector("#masthead .header-search-form");if(0!==t.length){var n=s.getElementsByClassName("search-field")[0],o=s.getElementsByClassName("search-submit")[0];for(var i of t)i.addEventListener("click",function(e){if(e.preventDefault(),t.length>1)for(var o of t)o.classList.toggle("hide");s.classList.toggle("active"),e.target.closest(".header-search").getElementsByClassName("icon-search")[0].classList.toggle("active"),e.target.closest(".header-search").getElementsByClassName("icon-cancel")[0].classList.toggle("active"),e.target.closest(".header-search").classList.add("active"),e.target.closest(".header-search").classList.remove("hide"),s.classList.contains("active")&&n.focus(),null!==e.target.closest(".sydney-offcanvas-menu")&&e.target.closest(".sydney-offcanvas-menu").classList.remove("toggled")});return o.addEventListener("keydown",function(n){var o="Tab"===n.key||n.keyCode===KEYCODE_TAB;o&&(s.classList.remove("active"),e.backButtonsToDefaultState(t),t.focus())}),this}},backButtonsToDefaultState:function(e){for(var t of e)t.classList.remove("hide"),t.querySelector(".icon-cancel").classList.remove("active"),t.querySelector(".icon-search").classList.add("active")}},sydney.mobileMenu={init:function(){this.menu(),window.addEventListener("resize",function(){this.menu()}.bind(this))},menu:function(){if(window.matchMedia("(max-width: 1024px)").matches){const t=document.getElementsByClassName("mainnav")[0];if(void 0===t||null==t)return;const s=document.getElementsByClassName("btn-menu")[0];t.setAttribute("id","mainnav-mobi"),t.classList.add("syd-hidden");var e=t.querySelectorAll(".menu-item-has-children");const n='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>';e.forEach(function(e,t,s){e.getElementsByTagName("ul")[0].style.display="none",e.getElementsByTagName("a")[0].insertAdjacentHTML("beforeend",'<span class="btn-submenu">'+n+"</span>")},"myThisArg"),this.toggle(s,t);const o=t.querySelectorAll(".btn-submenu");o.forEach(function(e,t,s){e.addEventListener("click",function(t){t.preventDefault();var s=e.parentNode.parentNode;s.getElementsByClassName("sub-menu")[0].classList.toggle("toggled")})},"myThisArg")}else{const e=document.getElementById("mainnav-mobi");if(void 0!==e&&null!=e){e.setAttribute("id","mainnav"),e.classList.remove("toggled");const t=e.querySelectorAll(".btn-submenu");t.forEach(function(e,t,s){e.remove()},"myThisArg")}}},toggle:function(e,t){void 0===e&&null==e||e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("toggled")?t.classList.remove("toggled"):t.classList.add("toggled"),e.stopImmediatePropagation()})},submenuToggle:function(e){e.addEventListener("click",function(t){t.preventDefault();var s=e.parentNode.parentNode;s.getElementsByClassName("sub-menu")[0].classList.toggle("toggled")})}},sydneyDomReady(function(){sydney.backToTop.init(),sydney.removePreloader.init(),sydney.stickyMenu.init(),sydney.mobileMenu.init(),sydney.navigation.init(),sydney.stickyHeader.init(),sydney.headerSearch.init()}),window.addEventListener("load",function(){(function(e,t,s){var n=['iframe[src*="youtube.com"]','iframe[src*="vimeo.com"]'],o=t.querySelectorAll(n.join(","));if(o.length)for(var i=0;i<o.length;i++){var a=o[i],l=a.getAttribute("width"),c=a.getAttribute("height"),d=c/l,r=a.parentNode,u=t.createElement("div");u.className="fitVids-wrapper",u.style.paddingBottom=100*d+"%",r.insertBefore(u,a),a.remove(),u.appendChild(a),a.removeAttribute("height"),a.removeAttribute("width")}})(window,document)}),window.addEventListener("load",function(){if("undefined"!=typeof Isotope&&("undefined"!=typeof lazySizes||"undefined"!=typeof lazyLoadOptions||"undefined"!=typeof a3_lazyload_extend_params)){const e=document.querySelectorAll(".isotope-container");e.length&&e.forEach(function(e){const t=e.querySelectorAll(".isotope-item img[data-lazy-src], .isotope-item img[data-src]");t.length&&t.forEach(function(t){null!==t&&t.addEventListener("load",function(){jQuery(e).isotope("layout")})},"myThisArg")},"myThisArg")}});