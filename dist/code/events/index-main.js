define(["require","exports"],function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.IndexMain=void 0,(i.IndexMain||(i.IndexMain={})).eventsFor=function(e){document.getElementById("index-body"),document.getElementById("index-header");var i,d,n,t,a=document.getElementById("index-main");switch(document.getElementById("index-sidebar"),document.getElementById("index-overlay"),document.getElementById("index-footer"),document.getElementById("index-data"),e){case"default-main":case"login-main":break;case"opdatering-main":d=(i=a).querySelector("#opdatering-date div:nth-child(3)"),n=i.querySelector("#opdatering-buttons nav"),t=i.querySelector("#opdatering-sheets header iframe"),$(d).on("click",function(){switch(t.id){case"original":d.classList.remove("hide-original"),d.classList.add("hide-additional"),n.classList.remove("show-original"),n.classList.add("show-additional"),t.id="additional";break;case"additional":d.classList.remove("hide-additional"),d.classList.add("hide-original"),n.classList.remove("show-additional"),n.classList.add("show-original"),t.id="original"}})}}});