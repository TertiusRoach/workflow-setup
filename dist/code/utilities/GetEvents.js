define(["require", "exports", "code/events/index-body", "code/events/index-header", "code/events/index-main", "code/events/index-sidebar", "code/events/index-footer", "code/events/index-overlay", "code/events/index-data", "code/events/uitsendings-body", "code/events/uitsendings-header", "code/events/uitsendings-main", "code/events/uitsendings-sidebar", "code/events/uitsendings-footer", "code/events/uitsendings-overlay", "code/events/uitsendings-data", "code/events/akademici-body", "code/events/akademici-header", "code/events/akademici-main", "code/events/akademici-sidebar", "code/events/akademici-footer", "code/events/akademici-overlay", "code/events/akademici-data", "code/events/administrasie-body", "code/events/administrasie-header", "code/events/administrasie-main", "code/events/administrasie-sidebar", "code/events/administrasie-footer", "code/events/administrasie-overlay", "code/events/administrasie-data", "code/events/operasioneel-body", "code/events/operasioneel-header", "code/events/operasioneel-main", "code/events/operasioneel-sidebar", "code/events/operasioneel-footer", "code/events/operasioneel-overlay", "code/events/operasioneel-data"], function (require, exports, index_body_1, index_header_1, index_main_1, index_sidebar_1, index_footer_1, index_overlay_1, index_data_1, uitsendings_body_1, uitsendings_header_1, uitsendings_main_1, uitsendings_sidebar_1, uitsendings_footer_1, uitsendings_overlay_1, uitsendings_data_1, akademici_body_1, akademici_header_1, akademici_main_1, akademici_sidebar_1, akademici_footer_1, akademici_overlay_1, akademici_data_1, administrasie_body_1, administrasie_header_1, administrasie_main_1, administrasie_sidebar_1, administrasie_footer_1, administrasie_overlay_1, administrasie_data_1, operasioneel_body_1, operasioneel_header_1, operasioneel_main_1, operasioneel_sidebar_1, operasioneel_footer_1, operasioneel_overlay_1, operasioneel_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetEvents = void 0;
    var GetEvents;
    (function (GetEvents) {
        var forIndex = (function () {
            function forIndex(pageName) {
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
            return forIndex;
        }());
        GetEvents.forIndex = forIndex;
        var forUitsendings = (function () {
            function forUitsendings(pageName) {
                var block = pageName.split('-')[1];
                switch (block) {
                    case 'body':
                        uitsendings_body_1.UitsendingsBody.eventsFor(pageName);
                        break;
                    case 'header':
                        uitsendings_header_1.UitsendingsHeader.eventsFor(pageName);
                        break;
                    case 'main':
                        uitsendings_main_1.UitsendingsMain.eventsFor(pageName);
                        break;
                    case 'sidebar':
                        uitsendings_sidebar_1.UitsendingsSidebar.eventsFor(pageName);
                        break;
                    case 'footer':
                        uitsendings_footer_1.UitsendingsFooter.eventsFor(pageName);
                        break;
                    case 'overlay':
                        uitsendings_overlay_1.UitsendingsOverlay.eventsFor(pageName);
                        break;
                    case 'data':
                        uitsendings_data_1.UitsendingsData.eventsFor(pageName);
                        break;
                }
            }
            return forUitsendings;
        }());
        GetEvents.forUitsendings = forUitsendings;
        var forAkademici = (function () {
            function forAkademici(pageName) {
                var block = pageName.split('-')[1];
                switch (block) {
                    case 'body':
                        akademici_body_1.AkademiciBody.eventsFor(pageName);
                        break;
                    case 'header':
                        akademici_header_1.AkademiciHeader.eventsFor(pageName);
                        break;
                    case 'main':
                        akademici_main_1.AkademiciMain.eventsFor(pageName);
                        break;
                    case 'sidebar':
                        akademici_sidebar_1.AkademiciSidebar.eventsFor(pageName);
                        break;
                    case 'footer':
                        akademici_footer_1.AkademiciFooter.eventsFor(pageName);
                        break;
                    case 'overlay':
                        akademici_overlay_1.AkademiciOverlay.eventsFor(pageName);
                        break;
                    case 'data':
                        akademici_data_1.AkademiciData.eventsFor(pageName);
                        break;
                }
            }
            return forAkademici;
        }());
        GetEvents.forAkademici = forAkademici;
        var forAdministrasie = (function () {
            function forAdministrasie(pageName) {
                var block = pageName.split('-')[1];
                switch (block) {
                    case 'body':
                        administrasie_body_1.AdministrasieBody.eventsFor(pageName);
                        break;
                    case 'header':
                        administrasie_header_1.AdministrasieHeader.eventsFor(pageName);
                        break;
                    case 'main':
                        administrasie_main_1.AdministrasieMain.eventsFor(pageName);
                        break;
                    case 'sidebar':
                        administrasie_sidebar_1.AdministrasieSidebar.eventsFor(pageName);
                        break;
                    case 'footer':
                        administrasie_footer_1.AdministrasieFooter.eventsFor(pageName);
                        break;
                    case 'overlay':
                        administrasie_overlay_1.AdministrasieOverlay.eventsFor(pageName);
                        break;
                    case 'data':
                        administrasie_data_1.AdministrasieData.eventsFor(pageName);
                        break;
                }
            }
            return forAdministrasie;
        }());
        GetEvents.forAdministrasie = forAdministrasie;
        var forOperasioneel = (function () {
            function forOperasioneel(pageName) {
                var block = pageName.split('-')[1];
                switch (block) {
                    case 'body':
                        operasioneel_body_1.OperasioneelBody.eventsFor(pageName);
                        break;
                    case 'header':
                        operasioneel_header_1.OperasioneelHeader.eventsFor(pageName);
                        break;
                    case 'main':
                        operasioneel_main_1.OperasioneelMain.eventsFor(pageName);
                        break;
                    case 'sidebar':
                        operasioneel_sidebar_1.OperasioneelSidebar.eventsFor(pageName);
                        break;
                    case 'footer':
                        operasioneel_footer_1.OperasioneelFooter.eventsFor(pageName);
                        break;
                    case 'overlay':
                        operasioneel_overlay_1.OperasioneelOverlay.eventsFor(pageName);
                        break;
                    case 'data':
                        operasioneel_data_1.OperasioneelData.eventsFor(pageName);
                        break;
                }
            }
            return forOperasioneel;
        }());
        GetEvents.forOperasioneel = forOperasioneel;
    })(GetEvents = exports.GetEvents || (exports.GetEvents = {}));
});

//# sourceMappingURL=[object Object]code/utilities/GetEvents.js.map
