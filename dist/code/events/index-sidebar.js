define(["require","exports","code/utilities/GetDesign"],function(e,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexSidebar=void 0,(t.IndexSidebar||(t.IndexSidebar={})).eventsFor=function(e){document.getElementById("index-body");var a,c,t=document.getElementById("index-header"),n=(document.getElementById("index-main"),document.getElementById("index-sidebar")),o=document.getElementById("index-overlay");if(document.getElementById("index-footer"),document.getElementById("index-data"),"default-sidebar"===e){var r=e,s=n;switch("".concat(new Date).split(" ")[1]){case"Jan":s.querySelector(".".concat(r," #january-button button")).classList.add("active");break;case"Feb":s.querySelector(".".concat(r," #february-button button")).classList.add("active");break;case"Mar":s.querySelector(".".concat(r," #march-button button")).classList.add("active");break;case"Apr":s.querySelector(".".concat(r," #april-button button")).classList.add("active");break;case"May":s.querySelector(".".concat(r," #may-button button")).classList.add("active");break;case"Jun":s.querySelector(".".concat(r," #june-button button")).classList.add("active");break;case"Jul":s.querySelector(".".concat(r," #july-button button")).classList.add("active");break;case"Aug":s.querySelector(".".concat(r," #august-button button")).classList.add("active");break;case"Sep":s.querySelector(".".concat(r," #september-button button")).classList.add("active");break;case"Oct":s.querySelector(".".concat(r," #october-button button")).classList.add("active");break;case"Nov":s.querySelector(".".concat(r," #november-button button")).classList.add("active");break;case"Dec":s.querySelector(".".concat(r," #december-button button")).classList.add("active")}a=t,c=o,$(n).on("mouseenter",function(){"sidebar-overlay"!==c.className&&new d.GetDesign.forPage("sidebar-overlay");for(var e=a.querySelectorAll('nav[id*="button"] div'),t=0;t<Object.keys(e).length;t++)e[t].className=""})}}});