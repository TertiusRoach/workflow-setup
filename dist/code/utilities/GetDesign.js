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
                var dist = '../../../dist';
                var blockElement = document.querySelector("#".concat(page, "-").concat(block));
                $.get("".concat(dist, "/design/html/").concat(blockElement.id, "/").concat(pageName, ".html"), function (callback) {
                    applyStyle(blockElement, pageName);
                    $(blockElement).html(callback);
                    new GetEvents_1.GetEvents.forPage(pageName);
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
