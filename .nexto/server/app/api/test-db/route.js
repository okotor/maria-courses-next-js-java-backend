const CHUNK_PUBLIC_PATH = "server/app/api/test-db/route.js";
const runtime = require("../../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules_5f2528._.js");
runtime.loadChunk("server/chunks/[root of the server]__ad7648._.js");
runtime.loadChunk("server/chunks/_f086bd._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/api/test-db/route/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/app/api/test-db/route.js [app-route] (ecmascript)\" } [app-route] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
