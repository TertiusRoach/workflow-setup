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
                var distLocal = '../../../dist';
                var distOnline = 'https://tertiusroach.github.io/workflow-setup/dist/design/html';
                console.log(window.location.href);
                var blockElement = document.querySelector("#".concat(page, "-").concat(block));
                $.get("https://tertiusroach.github.io/workflow-setup/dist/design/html/".concat(blockElement.id, "/").concat(pageName, ".html"), function (callback) {
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
    })(GetDesign = exports.GetDesign || (exports.GetDesign = {}));
});

//# sourceMappingURL=[object Object]code/utilities/GetDesign.js.map
