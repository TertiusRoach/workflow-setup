define(["require", "exports", "./GetEvents"], function (require, exports, GetEvents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetDesign = void 0;
    var GetDesign;
    (function (GetDesign) {
        var forPage = (function () {
            function forPage(pageName) {
                var page = window.location.href.split('/').pop().split('.')[0];
                var block = pageName.split('-')[1];
                var dist = fetchURI(window.location.href);
                var blockElement = document.querySelector("#".concat(page, "-").concat(block));
                $.get("".concat(dist, "/design/html/").concat(blockElement.id, "/").concat(pageName, ".html"), function (callback) {
                    applyStyle(blockElement, pageName);
                    $(blockElement).html(callback);
                    switch (page) {
                        case 'index':
                            new GetEvents_1.GetEvents.forIndex(pageName);
                            break;
                        case 'uitsendings':
                            new GetEvents_1.GetEvents.forUitsendings(pageName);
                            break;
                        case 'akademici':
                            new GetEvents_1.GetEvents.forAkademici(pageName);
                            break;
                        case 'administrasie':
                            new GetEvents_1.GetEvents.forAdministrasie(pageName);
                            break;
                        case 'operasioneel':
                            new GetEvents_1.GetEvents.forOperasioneel(pageName);
                            break;
                    }
                });
            }
            return forPage;
        }());
        GetDesign.forPage = forPage;
        function applyStyle(block, pageName) {
            block.className = '';
            block.className = "".concat(pageName);
        }
        function fetchURI(url) {
            switch (url.slice(0, 5)) {
                case 'https':
                    console.log("Test: This page is Online");
                    var href = url.split('/');
                    return "".concat(href[0], "//").concat(href[2], "/").concat(href[3], "/dist");
                case 'http:':
                    console.log("Test: This page is Local");
                    return '../../../dist';
            }
        }
    })(GetDesign = exports.GetDesign || (exports.GetDesign = {}));
});

//# sourceMappingURL=[object Object]code/utilities/GetDesign.js.map
