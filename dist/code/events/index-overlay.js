define(["require","exports"],function(e,t){"use strict";var q;function h(e,t){for(var n=["january","february","march","april","may","june","july","august","september","october","november","december"],o=0;o<n.length;o++)$(".".concat(e," #").concat(n[o])).css("display","none");$(".".concat(e," #").concat(t)).css("display","grid")}function f(e){document.querySelector("#january main h1").textContent="".concat(document.querySelector("#january a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#february main h1").textContent="".concat(document.querySelector("#february a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#march main h1").textContent="".concat(document.querySelector("#march a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#april main h1").textContent="".concat(document.querySelector("#april a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#may main h1").textContent="".concat(document.querySelector("#may a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#june main h1").textContent="".concat(document.querySelector("#june a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#july main h1").textContent="".concat(document.querySelector("#july a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#august main h1").textContent="".concat(document.querySelector("#august a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#september main h1").textContent="".concat(document.querySelector("#september a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#october main h1").textContent="".concat(document.querySelector("#october a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#november main h1").textContent="".concat(document.querySelector("#november a[id*='".concat(e,"'] div button h1")).textContent),document.querySelector("#december main h1").textContent="".concat(document.querySelector("#december a[id*='".concat(e,"'] div button h1")).textContent)}function x(){document.querySelector("#january main h1").textContent="January",document.querySelector("#february main h1").textContent="February",document.querySelector("#march main h1").textContent="March",document.querySelector("#april main h1").textContent="April",document.querySelector("#may main h1").textContent="May",document.querySelector("#june main h1").textContent="June",document.querySelector("#july main h1").textContent="July",document.querySelector("#august main h1").textContent="August",document.querySelector("#september main h1").textContent="September",document.querySelector("#october main h1").textContent="October",document.querySelector("#november main h1").textContent="November",document.querySelector("#december main h1").textContent="December"}Object.defineProperty(t,"__esModule",{value:!0}),t.IndexOverlay=void 0,(q=t.IndexOverlay||(t.IndexOverlay={})).eventsFor=function(e){document.getElementById("index-body"),document.getElementById("index-header"),document.getElementById("index-main"),document.getElementById("index-sidebar");var t=document.querySelectorAll("#index-sidebar > div > button > a > h1"),n=(document.querySelectorAll("#index-sidebar > div"),document.getElementById("index-overlay")),o=n.querySelectorAll("nav"),r=(n.querySelector("#january"),n.querySelector("#february"),n.querySelector("#march"),n.querySelector("#april"),n.querySelector("#may"),n.querySelector("#june"),n.querySelector("#july"),n.querySelector("#august"),n.querySelector("#september"),n.querySelector("#october"),n.querySelector("#november"),n.querySelector("#december"),n.querySelector("#january main")),u=n.querySelector("#february main"),c=n.querySelector("#march main"),a=n.querySelector("#april main"),m=n.querySelector("#may main"),i=n.querySelector("#june main"),d=n.querySelector("#july main"),l=n.querySelector("#august main"),y=n.querySelector("#september main"),s=n.querySelector("#october main"),b=n.querySelector("#november main"),S=n.querySelector("#december main");switch(document.querySelectorAll("nav main h1"),document.getElementById("index-footer"),document.getElementById("index-data"),e){case"default-overlay":break;case"sidebar-overlay":q.monthHighlight(n),$(t).on("mouseenter",function(){n.style.display="grid"}),$('a[id*="gr-sheet"]').on("mouseenter",function(){f("gr-sheet")}),$('a[id*="pi-sheet"]').on("mouseenter",function(){f("pi-sheet")}),$('a[id*="ye-sheet"]').on("mouseenter",function(){f("ye-sheet")}),$('a[id*="or-sheet"]').on("mouseenter",function(){f("or-sheet")}),$('a[id*="bl-sheet"]').on("mouseenter",function(){f("bl-sheet")}),$('a[id*="gr-edit"]').on("mouseenter",function(){f("gr-edit")}),$('a[id*="pi-edit"]').on("mouseenter",function(){f("pi-edit")}),$('a[id*="ye-edit"]').on("mouseenter",function(){f("ye-edit")}),$('a[id*="or-edit"]').on("mouseenter",function(){f("or-edit")}),$('a[id*="bl-edit"]').on("mouseenter",function(){f("bl-edit")}),$('a[id*="gr-book"]').on("mouseenter",function(){f("gr-book")}),$('a[id*="pi-book"]').on("mouseenter",function(){f("pi-book")}),$('a[id*="ye-book"]').on("mouseenter",function(){f("ye-book")}),$('a[id*="or-book"]').on("mouseenter",function(){f("or-book")}),$('a[id*="bl-book"]').on("mouseenter",function(){f("bl-boo")}),$('a[id*="gr-cloud"]').on("mouseenter",function(){f("gr-cloud")}),$('a[id*="pi-cloud"]').on("mouseenter",function(){f("pi-cloud")}),$('a[id*="ye-cloud"]').on("mouseenter",function(){f("ye-cloud")}),$('a[id*="or-cloud"]').on("mouseenter",function(){f("or-cloud")}),$('a[id*="bl-cloud"]').on("mouseenter",function(){f("bl-cloud")}),$(t[0]).on("mouseenter",function(){h(e,"january")}),$(t[1]).on("mouseenter",function(){h(e,"february")}),$(t[2]).on("mouseenter",function(){h(e,"march")}),$(t[3]).on("mouseenter",function(){h(e,"april")}),$(t[4]).on("mouseenter",function(){h(e,"may")}),$(t[5]).on("mouseenter",function(){h(e,"june")}),$(t[6]).on("mouseenter",function(){h(e,"july")}),$(t[7]).on("mouseenter",function(){h(e,"august")}),$(t[8]).on("mouseenter",function(){h(e,"september")}),$(t[9]).on("mouseenter",function(){h(e,"october")}),$(t[10]).on("mouseenter",function(){h(e,"november")}),$(t[11]).on("mouseenter",function(){h(e,"december")}),$(o).on("mouseleave",function(){x()}),$(r).on("mouseenter",function(){document.querySelector("#january main h1").textContent="January"}),$(u).on("mouseenter",function(){document.querySelector("#february main h1").textContent="February"}),$(c).on("mouseenter",function(){document.querySelector("#march main h1").textContent="March"}),$(a).on("mouseenter",function(){document.querySelector("#april main h1").textContent="April"}),$(m).on("mouseenter",function(){document.querySelector("#may main h1").textContent="May"}),$(i).on("mouseenter",function(){document.querySelector("#june main h1").textContent="June"}),$(d).on("mouseenter",function(){document.querySelector("#july main h1").textContent="July"}),$(l).on("mouseenter",function(){document.querySelector("#august main h1").textContent="August"}),$(y).on("mouseenter",function(){document.querySelector("#september main h1").textContent="September"}),$(s).on("mouseenter",function(){document.querySelector("#october main h1").textContent="October"}),$(b).on("mouseenter",function(){document.querySelector("#november main h1").textContent="November"}),$(S).on("mouseenter",function(){document.querySelector("#december main h1").textContent="December"})}},q.displayOverlay=h,q.monthHighlight=function(e){function t(e){e.classList.remove("false"),e.classList.add("true")}switch("".concat(new Date).split(" ")[1]){case"Jan":t(e.querySelector("#january"));break;case"Feb":t(e.querySelector("#february"));break;case"Mar":t(e.querySelector("#march"));break;case"Apr":t(e.querySelector("#april"));break;case"May":t(e.querySelector("#may"));break;case"Jun":t(e.querySelector("#june"));break;case"Jul":t(e.querySelector("#july"));break;case"Aug":t(e.querySelector("#august"));break;case"Sep":t(e.querySelector("#september"));break;case"Oct":t(e.querySelector("#october"));break;case"Nov":t(e.querySelector("#november"));break;case"Dec":t(e.querySelector("#december"))}},q.changeBanner=f,q.resetBanners=x});