(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
} // "use client";
 // import { useEffect, useState } from "react";
 // const ScrollToTop = () => {
 //   const [show, setShow] = useState(false);
 //   useEffect(() => {
 //     const toggleBackTop = () => {
 //       const scrolled = window.scrollY + window.innerHeight;
 //       const docHeight = document.documentElement.scrollHeight;
 //       if (scrolled >= docHeight) {
 //         setShow(true);
 //       } else {
 //         setShow(false);
 //       }
 //     };
 //     // Add scroll event listener
 //     window.addEventListener("scroll", toggleBackTop);
 //     // Cleanup
 //     return () => {
 //       window.removeEventListener("scroll", toggleBackTop);
 //     };
 //   }, []);
 //   const scrollToTop = () => {
 //     window.scrollTo({
 //       top: 0,
 //       behavior: "smooth",
 //     });
 //   };
 //   if (!show) return null;
 //   return (
 //     <button id="back-top" className="back-to-top show" onClick={scrollToTop}>
 //       <i className="fa-regular fa-arrow-up" />
 //     </button>
 //   );
 // };
 // export default ScrollToTop;
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_7ef5ccb4._.js.map