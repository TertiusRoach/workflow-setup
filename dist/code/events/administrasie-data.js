define(["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdministrasieData=void 0,(t.AdministrasieData||(t.AdministrasieData={})).eventsFor=function(e){var t=document.getElementById("administrasie-body");document.getElementById("administrasie-header"),document.getElementById("administrasie-main"),document.getElementById("administrasie-sidebar"),document.getElementById("administrasie-overlay"),document.getElementById("administrasie-footer"),document.getElementById("administrasie-data"),"default-data"===e&&setTimeout(function(){$("#loading-screen").fadeTo("slow",0);setTimeout(function(){t.querySelector("#loading-screen").remove()},2e3)},3e3)}});