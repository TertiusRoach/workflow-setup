define(["require","exports","code/utilities/GetDesign"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexHeader=void 0,(t.IndexHeader||(t.IndexHeader={})).eventsFor=function(e){document.getElementById("index-body");var t,n,d,o=document.getElementById("index-header"),r=(o.querySelector("#uitsendings-button div button"),o.querySelector("#departemente-button div button"),document.getElementById("index-main"),document.getElementById("index-sidebar"),document.getElementById("index-overlay"));function u(e,t,n){t.className="",e.className="active",n.style.display="grid"}r.querySelector(".background"),r.querySelector("#uitsendings-dropdown"),r.querySelector("#departemente-dropdown"),document.getElementById("index-footer"),document.getElementById("index-data"),"default-header"===e&&(e=e,t=r,n=(r=o).querySelector("#uitsendings-button div"),d=r.querySelector("#departemente-button div"),$(".".concat(e," #uitsendings-button")).on("mouseenter",function(){u(n,d,t)}),$(".".concat(e," #departemente-button")).on("mouseenter",function(){u(d,n,t)}),$(r).on("mouseenter",function(){"header-overlay"!==t.className&&new i.GetDesign.forPage("header-overlay")}))}});