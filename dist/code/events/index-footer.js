define(["require","exports","code/utilities/GetDesign"],function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexFooter=void 0,(t.IndexFooter||(t.IndexFooter={})).eventsFor=function(e){document.getElementById("index-body"),document.getElementById("index-header");var n,o,t,i,d=document.getElementById("index-main"),a=(document.getElementById("index-sidebar"),document.getElementById("index-overlay"),document.getElementById("index-footer")),r=document.getElementById("index-data");function s(e,t){for(var i=0;i<Object.keys(e).length;i++)e[i].className="";t.querySelector("div").className="active"}"default-footer"===e&&(n=(e=a).querySelectorAll("nav > div"),o=e.querySelector("#opdatering"),t=e.querySelector("#rooster"),i=e.querySelector("#statistieke"),$(o).on("click",function(){if(new l.GetDesign.forPage("opdatering-main"),s(n,o),null!==r.querySelector("main p")){var e=d.querySelector("#opdatering-date div:nth-child(3)"),t=d.querySelector("#opdatering-buttons nav"),i=d.querySelector("#opdatering-sheets header iframe");switch(r.querySelector("main p").textContent){case"original":e.classList.remove("hide-additional"),e.classList.add("hide-original"),t.classList.remove("show-additional"),t.classList.add("show-original"),i.id="original";break;case"additional":e.classList.remove("hide-original"),e.classList.add("hide-additional"),t.classList.remove("show-original"),t.classList.add("show-additional"),i.id="additional"}}}),$(t).on("click",function(){s(n,t),new l.GetDesign.forPage("rooster-main")}),$(i).on("click",function(){new l.GetDesign.forPage("statistieke-main"),s(n,i)}))}});