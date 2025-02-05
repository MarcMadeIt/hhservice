module.exports = {

"[project]/src/lib/client/servicesData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Define the structure for city data
__turbopack_esm__({
    "byData": (()=>byData),
    "services": (()=>services)
});
const byData = {
    hundested: {
        name: "Hundested",
        region: "Halsnæs",
        postnummer: "3390"
    },
    frederiksvaerk: {
        name: "Frederiksværk",
        region: "Halsnæs",
        postnummer: "3300"
    },
    liseleje: {
        name: "Liseleje",
        region: "Halsnæs",
        postnummer: "3360"
    },
    melby: {
        name: "Melby",
        region: "Halsnæs",
        postnummer: "3370"
    },
    olsted: {
        name: "Ølsted",
        region: "Halsnæs",
        postnummer: "3310"
    },
    tise: {
        name: "Tisvildeleje",
        region: "Nordsjælland",
        postnummer: "3220"
    },
    helsinge: {
        name: "Helsinge",
        region: "Nordsjælland",
        postnummer: "3200"
    }
};
const services = [
    {
        key: "graesslaaning",
        name: "Græsslåning",
        icon: "/lawn.png",
        image1: "/grass1.jpeg",
        image2: "/grass2.jpeg",
        image3: "/grass3.jpeg"
    },
    {
        key: "beskaering",
        name: "Beskæring",
        icon: "/trim.png",
        image1: "/prune1.jpeg",
        image2: "/prune2.jpeg",
        image3: "/prune3.jpeg"
    },
    {
        key: "haekklipning",
        name: "Hækkeklipning",
        icon: "/hedge.png",
        image1: "/hedge1.jpeg",
        image2: "/hedge2.jpeg",
        image3: "/hedge3.jpeg"
    },
    {
        key: "brolaegning",
        name: "Brolægning",
        icon: "/tile.png",
        image1: "/paving1.jpeg",
        image2: "/paving2.jpeg",
        image3: "/paving3.jpeg"
    },
    {
        key: "snerydning",
        name: "Snerydning",
        icon: "/snow.png",
        image1: "/grass1.jpeg",
        image2: "/grass2.jpeg",
        image3: "/grass3.jpeg"
    },
    {
        key: "bortskaffelse",
        name: "Bortskaffelse",
        icon: "/reno.png",
        image1: "/grass1.jpeg",
        image2: "/grass2.jpeg",
        image3: "/grass3.jpeg"
    },
    {
        key: "ukrudtsfjernelse",
        name: "Ukrudtsfjernelse",
        icon: "/weeds.png",
        image1: "/grass1.jpeg",
        image2: "/grass2.jpeg",
        image3: "/grass3.jpeg"
    },
    {
        key: "byggepladsservice",
        name: "Byggepladsservice",
        icon: "/construction.png",
        image1: "/grass1.jpeg",
        image2: "/grass2.jpeg",
        image3: "/grass3.jpeg"
    }
];
}}),
"[project]/src/lib/client/fetchData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAllServices": (()=>getAllServices),
    "getCityInfo": (()=>getCityInfo),
    "getServiceInfo": (()=>getServiceInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/client/servicesData.ts [app-rsc] (ecmascript)");
;
const getAllServices = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"];
};
const getServiceInfo = (serviceKey)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].find((service)=>service.key === serviceKey) || null;
};
const getCityInfo = (cityKey)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$servicesData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["byData"][cityKey] || null;
};
}}),
"[project]/src/app/(client)/service/[service]/ServiceClient.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(client)/service/[service]/ServiceClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(client)/service/[service]/ServiceClient.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(client)/service/[service]/ServiceClient.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(client)/service/[service]/ServiceClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(client)/service/[service]/ServiceClient.tsx", "default");
}}),
"[project]/src/app/(client)/service/[service]/ServiceClient.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$client$292f$service$2f5b$service$5d2f$ServiceClient$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/(client)/service/[service]/ServiceClient.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$client$292f$service$2f5b$service$5d2f$ServiceClient$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/app/(client)/service/[service]/ServiceClient.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$client$292f$service$2f5b$service$5d2f$ServiceClient$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/app/(client)/service/[service]/[by]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$fetchData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/client/fetchData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$client$292f$service$2f5b$service$5d2f$ServiceClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(client)/service/[service]/ServiceClient.tsx [app-rsc] (ecmascript)");
;
;
;
const CityServicePage = async ({ params })=>{
    const serviceInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$fetchData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceInfo"])(params.service);
    const cityInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$fetchData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCityInfo"])(params.by);
    if (!serviceInfo || !cityInfo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Service eller by ikke fundet"
        }, void 0, false, {
            fileName: "[project]/src/app/(client)/service/[service]/[by]/page.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$client$292f$service$2f5b$service$5d2f$ServiceClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        serviceInfo: serviceInfo,
        serviceKey: params.service,
        cityInfo: cityInfo
    }, void 0, false, {
        fileName: "[project]/src/app/(client)/service/[service]/[by]/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CityServicePage;
}}),
"[project]/src/app/(client)/service/[service]/[by]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/(client)/service/[service]/[by]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/utils/supabase/client.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createClient": (()=>createClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-rsc] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://hgowigkexqhywarmkeor.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnb3dpZ2tleHFoeXdhcm1rZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjQyOTksImV4cCI6MjA1MjcwMDI5OX0.QF2g5oTLhnZsqTTYGeSwfwr4tTRHW0LYIUCNTAq65II"));
}
}}),
"[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"00e1ced007ad8f238ec4061271f4a25ae8a5a0f90c":"getLatestNews","00feda0587a92d54fc827b77606103fa8d595d235c":"getLatestReviews","60fa24a9fc21f9bb62ec671ef8de65823d688c3922":"getAllNews","7893edbbc9c961a3c1f60a9bbf568e8e1b7a2a1120":"createRequest"} */ __turbopack_esm__({
    "createRequest": (()=>createRequest),
    "getAllNews": (()=>getAllNews),
    "getLatestNews": (()=>getLatestNews),
    "getLatestReviews": (()=>getLatestReviews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/supabase/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAllNews(page = 1, limit = 6) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const offset = (page - 1) * limit;
    try {
        const { data, count, error } = await supabase.from("news").select("*", {
            count: "exact"
        }).order("created_at", {
            ascending: false
        }).range(offset, offset + limit - 1);
        if (error) {
            throw new Error(`Failed to fetch news: ${error.message}`);
        }
        return {
            news: data,
            total: count || 0
        };
    } catch (err) {
        console.error("Unexpected error during fetching news:", err);
        throw err;
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getLatestNews() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from("news").select("*").order("created_at", {
        ascending: false
    }).limit(5);
    if (error) {
        throw new Error("Failed to fetch latest news: " + error.message);
    }
    return data;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getLatestReviews() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    try {
        const { data, error } = await supabase.from("reviews").select("*").order("created_at", {
            ascending: false
        }).limit(10);
        if (error) {
            throw new Error("Failed to fetch latest reviews: " + error.message);
        }
        return data;
    } catch (err) {
        console.error("Unexpected error during fetching reviews:", err);
        throw err;
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createRequest(name, mobile, category, consent) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    try {
        // Hent brugerens IP-adresse
        const ipResponse = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;
        const consentTimestamp = consent ? new Date().toISOString() : null;
        // Indsæt data i databasen
        const { error } = await supabase.from("requests").insert([
            {
                name,
                mobile,
                category,
                consent,
                consent_timestamp: consentTimestamp,
                ip_address: ipAddress,
                terms_version: "v1.0"
            }
        ]);
        if (error) {
            throw new Error(`Failed to create request: ${error.message}`);
        }
    } catch (error) {
        console.error("Error in createRequest:", error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllNews,
    getLatestNews,
    getLatestReviews,
    createRequest
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllNews, "60fa24a9fc21f9bb62ec671ef8de65823d688c3922", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLatestNews, "00e1ced007ad8f238ec4061271f4a25ae8a5a0f90c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLatestReviews, "00feda0587a92d54fc827b77606103fa8d595d235c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRequest, "7893edbbc9c961a3c1f60a9bbf568e8e1b7a2a1120", null);
}}),
"[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "00e1ced007ad8f238ec4061271f4a25ae8a5a0f90c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestNews"]),
    "00feda0587a92d54fc827b77606103fa8d595d235c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestReviews"]),
    "60fa24a9fc21f9bb62ec671ef8de65823d688c3922": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllNews"]),
    "7893edbbc9c961a3c1f60a9bbf568e8e1b7a2a1120": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRequest"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "00e1ced007ad8f238ec4061271f4a25ae8a5a0f90c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["00e1ced007ad8f238ec4061271f4a25ae8a5a0f90c"]),
    "00feda0587a92d54fc827b77606103fa8d595d235c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["00feda0587a92d54fc827b77606103fa8d595d235c"]),
    "60fa24a9fc21f9bb62ec671ef8de65823d688c3922": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["60fa24a9fc21f9bb62ec671ef8de65823d688c3922"]),
    "7893edbbc9c961a3c1f60a9bbf568e8e1b7a2a1120": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7893edbbc9c961a3c1f60a9bbf568e8e1b7a2a1120"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$client$292f$service$2f5b$service$5d2f5b$by$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$client$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/(client)/service/[service]/[by]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/client/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__5958be._.js.map