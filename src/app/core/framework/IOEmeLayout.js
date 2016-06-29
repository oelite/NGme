"use strict";
/**
 * Created by mleader1 on 27/06/2016.
 */
var NGmeLayout = (function () {
    function NGmeLayout() {
        this.currentLayoutType = NGmeLayoutType.SinglePage;
    }

    return NGmeLayout;
}());
exports.NGmeLayout = NGmeLayout;
(function (NGmeLayoutType) {
    NGmeLayoutType[NGmeLayoutType["SinglePage"] = 0] = "SinglePage";
    NGmeLayoutType[NGmeLayoutType["Dashboard"] = 10] = "Dashboard";
})(exports.NGmeLayoutType || (exports.NGmeLayoutType = {}));
var NGmeLayoutType = exports.NGmeLayoutType;
//# sourceMappingURL=NGmeLayout.js.map