define(["require", "exports", "code/utilities/GetDesign"], function (require, exports, GetDesign_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Index = void 0;
    var Index;
    (function (Index) {
        var LoadDesign = (function () {
            function LoadDesign(page) {
                new GetDesign_1.GetDesign.forPage("default-header");
                new GetDesign_1.GetDesign.forPage("default-main");
                new GetDesign_1.GetDesign.forPage("default-sidebar");
                new GetDesign_1.GetDesign.forPage("default-footer");
                new GetDesign_1.GetDesign.forPage("default-overlay");
                console.log('--index.js Loaded');
            }
            return LoadDesign;
        }());
        Index.LoadDesign = LoadDesign;
    })(Index = exports.Index || (exports.Index = {}));
});

//# sourceMappingURL=[object Object]code/events/index.js.map
