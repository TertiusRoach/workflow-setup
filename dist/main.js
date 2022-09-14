define(["require", "exports", "./code/events/administrasie", "./code/events/operasioneel", "./code/events/uitsendings", "./code/events/akademici", "./code/events/index"], function (require, exports, administrasie_1, operasioneel_1, uitsendings_1, akademici_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GetPage;
    (function (GetPage) {
        var page = window.location.href.split('/').pop().split('.')[0];
        switch (page) {
            case 'index':
                new index_1.Index.LoadDesign(page);
                break;
            case 'uitsendings':
                new uitsendings_1.Uitsendings.LoadDesign(page);
                break;
            case 'akademici':
                new akademici_1.Akademici.LoadDesign(page);
                break;
            case 'administrasie':
                new administrasie_1.Administrasie.LoadDesign(page);
                break;
            case 'operasioneel':
                new operasioneel_1.Operasioneel.LoadDesign(page);
                break;
        }
    })(GetPage || (GetPage = {}));
});

//# sourceMappingURL=[object Object]main.js.map
