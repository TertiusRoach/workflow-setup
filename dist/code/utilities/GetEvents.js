define(["require", "exports", "code/events/index-body", "code/events/index-header", "code/events/index-main", "code/events/index-sidebar", "code/events/index-footer", "code/events/index-overlay", "code/events/index-data"], function (require, exports, index_body_1, index_header_1, index_main_1, index_sidebar_1, index_footer_1, index_overlay_1, index_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetEvents = void 0;
    var GetEvents;
    (function (GetEvents) {
        var forPage = (function () {
            function forPage(pageName) {
                var block = pageName.split('-')[1];
                switch (block) {
                    case 'body':
                        index_body_1.IndexBody.eventsFor(pageName);
                        break;
                    case 'header':
                        index_header_1.IndexHeader.eventsFor(pageName);
                        break;
                    case 'main':
                        index_main_1.IndexMain.eventsFor(pageName);
                        break;
                    case 'sidebar':
                        index_sidebar_1.IndexSidebar.eventsFor(pageName);
                        break;
                    case 'footer':
                        index_footer_1.IndexFooter.eventsFor(pageName);
                        break;
                    case 'overlay':
                        index_overlay_1.IndexOverlay.eventsFor(pageName);
                        break;
                    case 'data':
                        index_data_1.IndexData.eventsFor(pageName);
                        break;
                }
            }
            return forPage;
        }());
        GetEvents.forPage = forPage;
    })(GetEvents = exports.GetEvents || (exports.GetEvents = {}));
});

//# sourceMappingURL=[object Object]code/utilities/GetEvents.js.map
