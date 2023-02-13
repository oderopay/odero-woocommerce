!function () {
    "use strict";
    var t = window.wp.element, e = window.wp.htmlEntities, a = window.wp.i18n, n = window.wc.wcBlocksRegistry,
        i = window.wc.wcSettings;
    const l = () => {
        const t = (0, i.getSetting)("oderopay_data", null);
        if (!t) throw new Error("Oderopay initialization data is not available");
        return t
    };
    var o;
    const r = () => (0, e.decodeEntities)(l()?.description || "");
    (0, n.registerPaymentMethod)({
        name: "oderopay",
        label: (0, t.createElement)((() => (0, t.createElement)("img", {src: l()?.logo_url, alt: l()?.title})), null),
        ariaLabel: (0, a.__)("OderoPay payment method", "woocommerce-gateway-oderopay"),
        canMakePayment: () => !0,
        content: (0, t.createElement)(r, null),
        edit: (0, t.createElement)(r, null),
        supports: {features: null !== (o = l()?.supports) && void 0 !== o ? o : []}
    })
}();