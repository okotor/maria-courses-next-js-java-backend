module.exports = {

"[externals]/node:fs/promises [external] (node:fs/promises, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}}),
"[externals]/pg [external] (pg, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("pg", () => require("pg"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/lib/db.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "connectDB": (()=>connectDB),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__cjs$29$__ = __turbopack_import__("[externals]/pg [external] (pg, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dotenv/lib/main.js [app-ssr] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].config();
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__cjs$29$__["Pool"]({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});
async function connectDB() {
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
}
;
const __TURBOPACK__default__export__ = pool;
}}),
"[project]/lib/db-content.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// import { S3 } from '@aws-sdk/client-s3';
__turbopack_esm__({
    "getAvailableCourseYears": (()=>getAvailableCourseYears),
    "getCourse": (()=>getCourse),
    "getCourses": (()=>getCourses),
    "getCoursesForYear": (()=>getCoursesForYear),
    "getLatestCourses": (()=>getLatestCourses),
    "saveCourse": (()=>saveCourse)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/slugify/slugify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xss$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/xss/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
async function getCourses() {
    await new Promise((resolve)=>setTimeout(resolve, 1500)); // Simulate delay
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].query('SELECT * FROM courses');
        // Format the date in the result to YYYY-MM-DD format
        const courses = result.rows.map((course)=>{
            // Ensure the 'date' is a string in the correct format
            if (course.date instanceof Date) {
                course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
            }
            return course;
        });
        return courses; // Return the formatted courses
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
}
async function getCourse(slug) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].query('SELECT * FROM courses WHERE slug = $1', [
            slug
        ]);
        return result.rows[0] || null; // Return the first course or null if not found
    } catch (error) {
        console.error('Error fetching course:', error);
        throw error;
    }
}
async function saveCourse(course) {
    try {
        // Generate a slug
        const twoSlugWords = course.title.split(" ").slice(0, 2).join(" ");
        const randomSlugAddition = Math.floor(Math.random() * 100) + 1;
        const modifiedTitle = `${twoSlugWords} ${randomSlugAddition}`;
        course.slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(modifiedTitle, {
            lower: true,
            strict: true
        });
        // Sanitize course description
        course.course_description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xss$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(course.course_description);
        // Handle image processing
        const extension = course.image.name.split('.').pop();
        const fileName = `${course.slug}.${extension}`;
        const filePath = `public/${fileName}`;
        // Save image to public directory
        const bufferedImage = await course.image.arrayBuffer();
        await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, Buffer.from(bufferedImage)); // No callback needed
        // Set image name for DB storage
        course.image = fileName;
        // Insert course into PostgreSQL
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].query(`INSERT INTO courses 
        (date, slug, title, image, summary, course_description, lecturer, lecturer_email) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING id`, [
            course.date,
            course.slug,
            course.title,
            course.image,
            course.summary,
            course.course_description,
            course.lecturer,
            course.lecturer_email
        ]);
        return result.rows[0].id; // Return the inserted course ID
    } catch (error) {
        console.error("❌ Upload failed:", error);
        throw error;
    }
}
async function getLatestCourses() {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT * FROM courses 
      ORDER BY date DESC 
      LIMIT 3
    `);
        // Format the 'date' field
        const courses = result.rows.map((course)=>{
            if (course.date instanceof Date) {
                course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
            }
            return course;
        });
        return courses;
    } catch (error) {
        console.error('Error fetching latest courses:', error);
        throw error;
    }
}
async function getAvailableCourseYears() {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT DISTINCT EXTRACT(YEAR FROM date) AS year 
      FROM courses 
      ORDER BY year DESC
    `);
        return result.rows.map((row)=>row.year);
    } catch (error) {
        console.error('Error fetching available course years:', error);
        throw error;
    }
}
async function getCoursesForYear(year) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT * FROM courses 
      WHERE EXTRACT(YEAR FROM date) = $1 
      ORDER BY date ASC
    `, [
            year
        ]);
        // Format the 'date' field
        const courses = result.rows.map((course)=>{
            if (course.date instanceof Date) {
                course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
            }
            return course;
        });
        return courses;
    } catch (error) {
        console.error('Error fetching courses for year:', error);
        throw error;
    }
}
}}),
"[project]/components/Courses/CourseList.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "cta": "CourseList-module__S2ZAAa__cta",
  "header": "CourseList-module__S2ZAAa__header",
  "highlight": "CourseList-module__S2ZAAa__highlight",
  "loading": "CourseList-module__S2ZAAa__loading",
});
}}),
"[project]/components/Courses/CourseList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CourseList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/components/Courses/CourseList.module.css [app-client] (css module)");
;
;
;
function CourseList({ loader, course }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/components/Courses/CourseList.js",
                    lineNumber: 10,
                    columnNumber: 37
                }, void 0),
                children: loader()
            }, void 0, false, {
                fileName: "[project]/components/Courses/CourseList.js",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Courses/CourseList.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}}),
"[project]/components/Courses/CourseItem.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "actions": "CourseItem-module__PZLJRW__actions",
  "content": "CourseItem-module__PZLJRW__content",
  "course": "CourseItem-module__PZLJRW__course",
  "headerText": "CourseItem-module__PZLJRW__headerText",
  "image": "CourseItem-module__PZLJRW__image",
  "summary": "CourseItem-module__PZLJRW__summary",
});
}}),
"[project]/components/Courses/CourseItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CourseItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/components/Courses/CourseItem.module.css [app-client] (css module)");
;
;
;
;
function CourseItem({ date, title, slug, image, summary, lecturer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].course,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: `/${image}`,
                            // https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public/
                            alt: title,
                            fill: true
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/CourseItem.js",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Courses/CourseItem.js",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/Courses/CourseItem.js",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Vedoucí: ",
                                    lecturer
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Courses/CourseItem.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Publikováno: ",
                                    date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Courses/CourseItem.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Courses/CourseItem.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Courses/CourseItem.js",
                lineNumber: 9,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                        children: summary
                    }, void 0, false, {
                        fileName: "[project]/components/Courses/CourseItem.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/courses/${slug}`,
                            children: "Více informací"
                        }, void 0, false, {
                            fileName: "[project]/components/Courses/CourseItem.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Courses/CourseItem.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Courses/CourseItem.js",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Courses/CourseItem.js",
        lineNumber: 8,
        columnNumber: 7
    }, this);
}
}}),
"[project]/components/Courses/CoursesGrid.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "courses": "CoursesGrid-module__nvThEq__courses",
});
}}),
"[project]/components/Courses/CoursesGrid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CoursesGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/CourseItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CoursesGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/components/Courses/CoursesGrid.module.css [app-client] (css module)");
;
;
;
function CoursesGrid({ courses }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CoursesGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].courses,
        children: courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    ...course
                }, void 0, false, {
                    fileName: "[project]/components/Courses/CoursesGrid.js",
                    lineNumber: 9,
                    columnNumber: 21
                }, this)
            }, course.id, false, {
                fileName: "[project]/components/Courses/CoursesGrid.js",
                lineNumber: 8,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Courses/CoursesGrid.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/courses/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "cta": "page-module__JZcRDa__cta",
  "header": "page-module__JZcRDa__header",
  "highlight": "page-module__JZcRDa__highlight",
  "loading": "page-module__JZcRDa__loading",
  "subheader": "page-module__JZcRDa__subheader",
});
}}),
"[project]/app/courses/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CoursesPage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/db-content.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/CourseList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CoursesGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Courses/CoursesGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/courses/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const metadata = {
    title: 'All Courses',
    description: 'Browse the magnificent courses offered'
};
async function LoadingCourses() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    useEffect(()=>{
        async function fetchCourses() {
            setIsLoading(true);
            const response = await fetch('http://localhost:5000/news');
            if ("TURBOPACK compile-time truthy", 1) {
                setError('Import kurzů selhal.');
                setIsLoading(false);
            }
            const courses = await response.json();
            setIsLoading(false);
            setCourses(courses);
        }
        fetchCourses();
    }, []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/courses/page.js",
            lineNumber: 38,
            columnNumber: 16
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: error
        }, void 0, false, {
            fileName: "[project]/app/courses/page.js",
            lineNumber: 42,
            columnNumber: 16
        }, this);
    }
    let courseContent;
    if (courses) {
        courseContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CoursesGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            courses: courses
        }, void 0, false, {
            fileName: "[project]/app/courses/page.js",
            lineNumber: 48,
            columnNumber: 25
        }, this);
    }
    return courseContent;
}
async function CoursesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Kurzy vytvořené ",
                            '',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlight,
                                children: "jen pro vás"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/page.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Vyberte svůj kurz na míru a zažijte proměnu!"
                    }, void 0, false, {
                        fileName: "[project]/app/courses/page.js",
                        lineNumber: 62,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/page.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Courses$2f$CourseList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                loader: LoadingCourses
            }, void 0, false, {
                fileName: "[project]/app/courses/page.js",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/courses/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/dotenv/package.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"name\":\"dotenv\",\"version\":\"16.4.7\",\"description\":\"Loads environment variables from .env file\",\"main\":\"lib/main.js\",\"types\":\"lib/main.d.ts\",\"exports\":{\".\":{\"types\":\"./lib/main.d.ts\",\"require\":\"./lib/main.js\",\"default\":\"./lib/main.js\"},\"./config\":\"./config.js\",\"./config.js\":\"./config.js\",\"./lib/env-options\":\"./lib/env-options.js\",\"./lib/env-options.js\":\"./lib/env-options.js\",\"./lib/cli-options\":\"./lib/cli-options.js\",\"./lib/cli-options.js\":\"./lib/cli-options.js\",\"./package.json\":\"./package.json\"},\"scripts\":{\"dts-check\":\"tsc --project tests/types/tsconfig.json\",\"lint\":\"standard\",\"pretest\":\"npm run lint && npm run dts-check\",\"test\":\"tap run --allow-empty-coverage --disable-coverage --timeout=60000\",\"test:coverage\":\"tap run --show-full-coverage --timeout=60000 --coverage-report=lcov\",\"prerelease\":\"npm test\",\"release\":\"standard-version\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/motdotla/dotenv.git\"},\"funding\":\"https://dotenvx.com\",\"keywords\":[\"dotenv\",\"env\",\".env\",\"environment\",\"variables\",\"config\",\"settings\"],\"readmeFilename\":\"README.md\",\"license\":\"BSD-2-Clause\",\"devDependencies\":{\"@types/node\":\"^18.11.3\",\"decache\":\"^4.6.2\",\"sinon\":\"^14.0.1\",\"standard\":\"^17.0.0\",\"standard-version\":\"^9.5.0\",\"tap\":\"^19.2.0\",\"typescript\":\"^4.8.4\"},\"engines\":{\"node\":\">=12\"},\"browser\":{\"fs\":false}}"));}}),
"[project]/node_modules/dotenv/lib/main.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const fs = __turbopack_require__("[externals]/fs [external] (fs, cjs)");
const path = __turbopack_require__("[externals]/path [external] (path, cjs)");
const os = __turbopack_require__("[externals]/os [external] (os, cjs)");
const crypto = __turbopack_require__("[externals]/crypto [external] (crypto, cjs)");
const packageJson = __turbopack_require__("[project]/node_modules/dotenv/package.json (json)");
const version = packageJson.version;
const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
// Parse src into an Object
function parse(src) {
    const obj = {};
    // Convert buffer to string
    let lines = src.toString();
    // Convert line breaks to same format
    lines = lines.replace(/\r\n?/mg, '\n');
    let match;
    while((match = LINE.exec(lines)) != null){
        const key = match[1];
        // Default undefined or null to empty string
        let value = match[2] || '';
        // Remove whitespace
        value = value.trim();
        // Check if double quoted
        const maybeQuote = value[0];
        // Remove surrounding quotes
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2');
        // Expand newlines if double quoted
        if (maybeQuote === '"') {
            value = value.replace(/\\n/g, '\n');
            value = value.replace(/\\r/g, '\r');
        }
        // Add to object
        obj[key] = value;
    }
    return obj;
}
function _parseVault(options) {
    const vaultPath = _vaultPath(options);
    // Parse .env.vault
    const result = DotenvModule.configDotenv({
        path: vaultPath
    });
    if (!result.parsed) {
        const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err.code = 'MISSING_DATA';
        throw err;
    }
    // handle scenario for comma separated keys - for use with key rotation
    // example: DOTENV_KEY="dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=prod,dotenv://:key_7890@dotenvx.com/vault/.env.vault?environment=prod"
    const keys = _dotenvKey(options).split(',');
    const length = keys.length;
    let decrypted;
    for(let i = 0; i < length; i++){
        try {
            // Get full key
            const key = keys[i].trim();
            // Get instructions for decrypt
            const attrs = _instructions(result, key);
            // Decrypt
            decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
            break;
        } catch (error) {
            // last key
            if (i + 1 >= length) {
                throw error;
            }
        // try next key
        }
    }
    // Parse decrypted .env string
    return DotenvModule.parse(decrypted);
}
function _log(message) {
    console.log(`[dotenv@${version}][INFO] ${message}`);
}
function _warn(message) {
    console.log(`[dotenv@${version}][WARN] ${message}`);
}
function _debug(message) {
    console.log(`[dotenv@${version}][DEBUG] ${message}`);
}
function _dotenvKey(options) {
    // prioritize developer directly setting options.DOTENV_KEY
    if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
    }
    // secondary infra already contains a DOTENV_KEY environment variable
    if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
    }
    // fallback to empty string
    return '';
}
function _instructions(result, dotenvKey) {
    // Parse DOTENV_KEY. Format is a URI
    let uri;
    try {
        uri = new URL(dotenvKey);
    } catch (error) {
        if (error.code === 'ERR_INVALID_URL') {
            const err = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development');
            err.code = 'INVALID_DOTENV_KEY';
            throw err;
        }
        throw error;
    }
    // Get decrypt key
    const key = uri.password;
    if (!key) {
        const err = new Error('INVALID_DOTENV_KEY: Missing key part');
        err.code = 'INVALID_DOTENV_KEY';
        throw err;
    }
    // Get environment
    const environment = uri.searchParams.get('environment');
    if (!environment) {
        const err = new Error('INVALID_DOTENV_KEY: Missing environment part');
        err.code = 'INVALID_DOTENV_KEY';
        throw err;
    }
    // Get ciphertext payload
    const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
    const ciphertext = result.parsed[environmentKey] // DOTENV_VAULT_PRODUCTION
    ;
    if (!ciphertext) {
        const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err.code = 'NOT_FOUND_DOTENV_ENVIRONMENT';
        throw err;
    }
    return {
        ciphertext,
        key
    };
}
function _vaultPath(options) {
    let possibleVaultPath = null;
    if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
            for (const filepath of options.path){
                if (fs.existsSync(filepath)) {
                    possibleVaultPath = filepath.endsWith('.vault') ? filepath : `${filepath}.vault`;
                }
            }
        } else {
            possibleVaultPath = options.path.endsWith('.vault') ? options.path : `${options.path}.vault`;
        }
    } else {
        possibleVaultPath = path.resolve(process.cwd(), '.env.vault');
    }
    if (fs.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
    }
    return null;
}
function _resolveHome(envPath) {
    return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath;
}
function _configVault(options) {
    _log('Loading env from encrypted .env.vault');
    const parsed = DotenvModule._parseVault(options);
    let processEnv = process.env;
    if (options && options.processEnv != null) {
        processEnv = options.processEnv;
    }
    DotenvModule.populate(processEnv, parsed, options);
    return {
        parsed
    };
}
function configDotenv(options) {
    const dotenvPath = path.resolve(process.cwd(), '.env');
    let encoding = 'utf8';
    const debug = Boolean(options && options.debug);
    if (options && options.encoding) {
        encoding = options.encoding;
    } else {
        if (debug) {
            _debug('No encoding is specified. UTF-8 is used by default');
        }
    }
    let optionPaths = [
        dotenvPath
    ] // default, look for .env
    ;
    if (options && options.path) {
        if (!Array.isArray(options.path)) {
            optionPaths = [
                _resolveHome(options.path)
            ];
        } else {
            optionPaths = [] // reset default
            ;
            for (const filepath of options.path){
                optionPaths.push(_resolveHome(filepath));
            }
        }
    }
    // Build the parsed data in a temporary object (because we need to return it).  Once we have the final
    // parsed data, we will combine it with process.env (or options.processEnv if provided).
    let lastError;
    const parsedAll = {};
    for (const path of optionPaths){
        try {
            // Specifying an encoding returns a string instead of a buffer
            const parsed = DotenvModule.parse(fs.readFileSync(path, {
                encoding
            }));
            DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
            if (debug) {
                _debug(`Failed to load ${path} ${e.message}`);
            }
            lastError = e;
        }
    }
    let processEnv = process.env;
    if (options && options.processEnv != null) {
        processEnv = options.processEnv;
    }
    DotenvModule.populate(processEnv, parsedAll, options);
    if (lastError) {
        return {
            parsed: parsedAll,
            error: lastError
        };
    } else {
        return {
            parsed: parsedAll
        };
    }
}
// Populates process.env from .env file
function config(options) {
    // fallback to original dotenv if DOTENV_KEY is not set
    if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
    }
    const vaultPath = _vaultPath(options);
    // dotenvKey exists but .env.vault file does not exist
    if (!vaultPath) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options);
    }
    return DotenvModule._configVault(options);
}
function decrypt(encrypted, keyStr) {
    const key = Buffer.from(keyStr.slice(-64), 'hex');
    let ciphertext = Buffer.from(encrypted, 'base64');
    const nonce = ciphertext.subarray(0, 12);
    const authTag = ciphertext.subarray(-16);
    ciphertext = ciphertext.subarray(12, -16);
    try {
        const aesgcm = crypto.createDecipheriv('aes-256-gcm', key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
    } catch (error) {
        const isRange = error instanceof RangeError;
        const invalidKeyLength = error.message === 'Invalid key length';
        const decryptionFailed = error.message === 'Unsupported state or unable to authenticate data';
        if (isRange || invalidKeyLength) {
            const err = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)');
            err.code = 'INVALID_DOTENV_KEY';
            throw err;
        } else if (decryptionFailed) {
            const err = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY');
            err.code = 'DECRYPTION_FAILED';
            throw err;
        } else {
            throw error;
        }
    }
}
// Populate process.env with parsed values
function populate(processEnv, parsed, options = {}) {
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    if (typeof parsed !== 'object') {
        const err = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate');
        err.code = 'OBJECT_REQUIRED';
        throw err;
    }
    // Set process.env
    for (const key of Object.keys(parsed)){
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
            if (override === true) {
                processEnv[key] = parsed[key];
            }
            if (debug) {
                if (override === true) {
                    _debug(`"${key}" is already defined and WAS overwritten`);
                } else {
                    _debug(`"${key}" is already defined and was NOT overwritten`);
                }
            }
        } else {
            processEnv[key] = parsed[key];
        }
    }
}
const DotenvModule = {
    configDotenv,
    _configVault,
    _parseVault,
    config,
    decrypt,
    parse,
    populate
};
module.exports.configDotenv = DotenvModule.configDotenv;
module.exports._configVault = DotenvModule._configVault;
module.exports._parseVault = DotenvModule._parseVault;
module.exports.config = DotenvModule.config;
module.exports.decrypt = DotenvModule.decrypt;
module.exports.parse = DotenvModule.parse;
module.exports.populate = DotenvModule.populate;
module.exports = DotenvModule;
}}),
"[project]/node_modules/slugify/slugify.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
;
(function(name, root, factory) {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = factory();
        module.exports['default'] = factory();
    } else {
        "TURBOPACK unreachable";
    }
})('slugify', this, function() {
    var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}');
    var locales = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');
    function replace(string, options) {
        if (typeof string !== 'string') {
            throw new Error('slugify: string argument expected');
        }
        options = typeof options === 'string' ? {
            replacement: options
        } : options || {};
        var locale = locales[options.locale] || {};
        var replacement = options.replacement === undefined ? '-' : options.replacement;
        var trim = options.trim === undefined ? true : options.trim;
        var slug = string.normalize().split('')// replace characters based on charMap
        .reduce(function(result, ch) {
            var appendChar = locale[ch];
            if (appendChar === undefined) appendChar = charMap[ch];
            if (appendChar === undefined) appendChar = ch;
            if (appendChar === replacement) appendChar = ' ';
            return result + appendChar// remove not allowed characters
            .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '');
        }, '');
        if (options.strict) {
            slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
        }
        if (trim) {
            slug = slug.trim();
        }
        // Replace spaces with replacement character, treating multiple consecutive
        // spaces as a single space.
        slug = slug.replace(/\s+/g, replacement);
        if (options.lower) {
            slug = slug.toLowerCase();
        }
        return slug;
    }
    replace.extend = function(customMap) {
        Object.assign(charMap, customMap);
    };
    return replace;
});
}}),
"[project]/node_modules/cssfilter/lib/default.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */ function getDefaultWhiteList() {
    // 白名单值说明：
    // true: 允许该属性
    // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
    // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
    // 除上面列出的值外均表示不允许
    var whiteList = {};
    whiteList['align-content'] = false; // default: auto
    whiteList['align-items'] = false; // default: auto
    whiteList['align-self'] = false; // default: auto
    whiteList['alignment-adjust'] = false; // default: auto
    whiteList['alignment-baseline'] = false; // default: baseline
    whiteList['all'] = false; // default: depending on individual properties
    whiteList['anchor-point'] = false; // default: none
    whiteList['animation'] = false; // default: depending on individual properties
    whiteList['animation-delay'] = false; // default: 0
    whiteList['animation-direction'] = false; // default: normal
    whiteList['animation-duration'] = false; // default: 0
    whiteList['animation-fill-mode'] = false; // default: none
    whiteList['animation-iteration-count'] = false; // default: 1
    whiteList['animation-name'] = false; // default: none
    whiteList['animation-play-state'] = false; // default: running
    whiteList['animation-timing-function'] = false; // default: ease
    whiteList['azimuth'] = false; // default: center
    whiteList['backface-visibility'] = false; // default: visible
    whiteList['background'] = true; // default: depending on individual properties
    whiteList['background-attachment'] = true; // default: scroll
    whiteList['background-clip'] = true; // default: border-box
    whiteList['background-color'] = true; // default: transparent
    whiteList['background-image'] = true; // default: none
    whiteList['background-origin'] = true; // default: padding-box
    whiteList['background-position'] = true; // default: 0% 0%
    whiteList['background-repeat'] = true; // default: repeat
    whiteList['background-size'] = true; // default: auto
    whiteList['baseline-shift'] = false; // default: baseline
    whiteList['binding'] = false; // default: none
    whiteList['bleed'] = false; // default: 6pt
    whiteList['bookmark-label'] = false; // default: content()
    whiteList['bookmark-level'] = false; // default: none
    whiteList['bookmark-state'] = false; // default: open
    whiteList['border'] = true; // default: depending on individual properties
    whiteList['border-bottom'] = true; // default: depending on individual properties
    whiteList['border-bottom-color'] = true; // default: current color
    whiteList['border-bottom-left-radius'] = true; // default: 0
    whiteList['border-bottom-right-radius'] = true; // default: 0
    whiteList['border-bottom-style'] = true; // default: none
    whiteList['border-bottom-width'] = true; // default: medium
    whiteList['border-collapse'] = true; // default: separate
    whiteList['border-color'] = true; // default: depending on individual properties
    whiteList['border-image'] = true; // default: none
    whiteList['border-image-outset'] = true; // default: 0
    whiteList['border-image-repeat'] = true; // default: stretch
    whiteList['border-image-slice'] = true; // default: 100%
    whiteList['border-image-source'] = true; // default: none
    whiteList['border-image-width'] = true; // default: 1
    whiteList['border-left'] = true; // default: depending on individual properties
    whiteList['border-left-color'] = true; // default: current color
    whiteList['border-left-style'] = true; // default: none
    whiteList['border-left-width'] = true; // default: medium
    whiteList['border-radius'] = true; // default: 0
    whiteList['border-right'] = true; // default: depending on individual properties
    whiteList['border-right-color'] = true; // default: current color
    whiteList['border-right-style'] = true; // default: none
    whiteList['border-right-width'] = true; // default: medium
    whiteList['border-spacing'] = true; // default: 0
    whiteList['border-style'] = true; // default: depending on individual properties
    whiteList['border-top'] = true; // default: depending on individual properties
    whiteList['border-top-color'] = true; // default: current color
    whiteList['border-top-left-radius'] = true; // default: 0
    whiteList['border-top-right-radius'] = true; // default: 0
    whiteList['border-top-style'] = true; // default: none
    whiteList['border-top-width'] = true; // default: medium
    whiteList['border-width'] = true; // default: depending on individual properties
    whiteList['bottom'] = false; // default: auto
    whiteList['box-decoration-break'] = true; // default: slice
    whiteList['box-shadow'] = true; // default: none
    whiteList['box-sizing'] = true; // default: content-box
    whiteList['box-snap'] = true; // default: none
    whiteList['box-suppress'] = true; // default: show
    whiteList['break-after'] = true; // default: auto
    whiteList['break-before'] = true; // default: auto
    whiteList['break-inside'] = true; // default: auto
    whiteList['caption-side'] = false; // default: top
    whiteList['chains'] = false; // default: none
    whiteList['clear'] = true; // default: none
    whiteList['clip'] = false; // default: auto
    whiteList['clip-path'] = false; // default: none
    whiteList['clip-rule'] = false; // default: nonzero
    whiteList['color'] = true; // default: implementation dependent
    whiteList['color-interpolation-filters'] = true; // default: auto
    whiteList['column-count'] = false; // default: auto
    whiteList['column-fill'] = false; // default: balance
    whiteList['column-gap'] = false; // default: normal
    whiteList['column-rule'] = false; // default: depending on individual properties
    whiteList['column-rule-color'] = false; // default: current color
    whiteList['column-rule-style'] = false; // default: medium
    whiteList['column-rule-width'] = false; // default: medium
    whiteList['column-span'] = false; // default: none
    whiteList['column-width'] = false; // default: auto
    whiteList['columns'] = false; // default: depending on individual properties
    whiteList['contain'] = false; // default: none
    whiteList['content'] = false; // default: normal
    whiteList['counter-increment'] = false; // default: none
    whiteList['counter-reset'] = false; // default: none
    whiteList['counter-set'] = false; // default: none
    whiteList['crop'] = false; // default: auto
    whiteList['cue'] = false; // default: depending on individual properties
    whiteList['cue-after'] = false; // default: none
    whiteList['cue-before'] = false; // default: none
    whiteList['cursor'] = false; // default: auto
    whiteList['direction'] = false; // default: ltr
    whiteList['display'] = true; // default: depending on individual properties
    whiteList['display-inside'] = true; // default: auto
    whiteList['display-list'] = true; // default: none
    whiteList['display-outside'] = true; // default: inline-level
    whiteList['dominant-baseline'] = false; // default: auto
    whiteList['elevation'] = false; // default: level
    whiteList['empty-cells'] = false; // default: show
    whiteList['filter'] = false; // default: none
    whiteList['flex'] = false; // default: depending on individual properties
    whiteList['flex-basis'] = false; // default: auto
    whiteList['flex-direction'] = false; // default: row
    whiteList['flex-flow'] = false; // default: depending on individual properties
    whiteList['flex-grow'] = false; // default: 0
    whiteList['flex-shrink'] = false; // default: 1
    whiteList['flex-wrap'] = false; // default: nowrap
    whiteList['float'] = false; // default: none
    whiteList['float-offset'] = false; // default: 0 0
    whiteList['flood-color'] = false; // default: black
    whiteList['flood-opacity'] = false; // default: 1
    whiteList['flow-from'] = false; // default: none
    whiteList['flow-into'] = false; // default: none
    whiteList['font'] = true; // default: depending on individual properties
    whiteList['font-family'] = true; // default: implementation dependent
    whiteList['font-feature-settings'] = true; // default: normal
    whiteList['font-kerning'] = true; // default: auto
    whiteList['font-language-override'] = true; // default: normal
    whiteList['font-size'] = true; // default: medium
    whiteList['font-size-adjust'] = true; // default: none
    whiteList['font-stretch'] = true; // default: normal
    whiteList['font-style'] = true; // default: normal
    whiteList['font-synthesis'] = true; // default: weight style
    whiteList['font-variant'] = true; // default: normal
    whiteList['font-variant-alternates'] = true; // default: normal
    whiteList['font-variant-caps'] = true; // default: normal
    whiteList['font-variant-east-asian'] = true; // default: normal
    whiteList['font-variant-ligatures'] = true; // default: normal
    whiteList['font-variant-numeric'] = true; // default: normal
    whiteList['font-variant-position'] = true; // default: normal
    whiteList['font-weight'] = true; // default: normal
    whiteList['grid'] = false; // default: depending on individual properties
    whiteList['grid-area'] = false; // default: depending on individual properties
    whiteList['grid-auto-columns'] = false; // default: auto
    whiteList['grid-auto-flow'] = false; // default: none
    whiteList['grid-auto-rows'] = false; // default: auto
    whiteList['grid-column'] = false; // default: depending on individual properties
    whiteList['grid-column-end'] = false; // default: auto
    whiteList['grid-column-start'] = false; // default: auto
    whiteList['grid-row'] = false; // default: depending on individual properties
    whiteList['grid-row-end'] = false; // default: auto
    whiteList['grid-row-start'] = false; // default: auto
    whiteList['grid-template'] = false; // default: depending on individual properties
    whiteList['grid-template-areas'] = false; // default: none
    whiteList['grid-template-columns'] = false; // default: none
    whiteList['grid-template-rows'] = false; // default: none
    whiteList['hanging-punctuation'] = false; // default: none
    whiteList['height'] = true; // default: auto
    whiteList['hyphens'] = false; // default: manual
    whiteList['icon'] = false; // default: auto
    whiteList['image-orientation'] = false; // default: auto
    whiteList['image-resolution'] = false; // default: normal
    whiteList['ime-mode'] = false; // default: auto
    whiteList['initial-letters'] = false; // default: normal
    whiteList['inline-box-align'] = false; // default: last
    whiteList['justify-content'] = false; // default: auto
    whiteList['justify-items'] = false; // default: auto
    whiteList['justify-self'] = false; // default: auto
    whiteList['left'] = false; // default: auto
    whiteList['letter-spacing'] = true; // default: normal
    whiteList['lighting-color'] = true; // default: white
    whiteList['line-box-contain'] = false; // default: block inline replaced
    whiteList['line-break'] = false; // default: auto
    whiteList['line-grid'] = false; // default: match-parent
    whiteList['line-height'] = false; // default: normal
    whiteList['line-snap'] = false; // default: none
    whiteList['line-stacking'] = false; // default: depending on individual properties
    whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
    whiteList['line-stacking-shift'] = false; // default: consider-shifts
    whiteList['line-stacking-strategy'] = false; // default: inline-line-height
    whiteList['list-style'] = true; // default: depending on individual properties
    whiteList['list-style-image'] = true; // default: none
    whiteList['list-style-position'] = true; // default: outside
    whiteList['list-style-type'] = true; // default: disc
    whiteList['margin'] = true; // default: depending on individual properties
    whiteList['margin-bottom'] = true; // default: 0
    whiteList['margin-left'] = true; // default: 0
    whiteList['margin-right'] = true; // default: 0
    whiteList['margin-top'] = true; // default: 0
    whiteList['marker-offset'] = false; // default: auto
    whiteList['marker-side'] = false; // default: list-item
    whiteList['marks'] = false; // default: none
    whiteList['mask'] = false; // default: border-box
    whiteList['mask-box'] = false; // default: see individual properties
    whiteList['mask-box-outset'] = false; // default: 0
    whiteList['mask-box-repeat'] = false; // default: stretch
    whiteList['mask-box-slice'] = false; // default: 0 fill
    whiteList['mask-box-source'] = false; // default: none
    whiteList['mask-box-width'] = false; // default: auto
    whiteList['mask-clip'] = false; // default: border-box
    whiteList['mask-image'] = false; // default: none
    whiteList['mask-origin'] = false; // default: border-box
    whiteList['mask-position'] = false; // default: center
    whiteList['mask-repeat'] = false; // default: no-repeat
    whiteList['mask-size'] = false; // default: border-box
    whiteList['mask-source-type'] = false; // default: auto
    whiteList['mask-type'] = false; // default: luminance
    whiteList['max-height'] = true; // default: none
    whiteList['max-lines'] = false; // default: none
    whiteList['max-width'] = true; // default: none
    whiteList['min-height'] = true; // default: 0
    whiteList['min-width'] = true; // default: 0
    whiteList['move-to'] = false; // default: normal
    whiteList['nav-down'] = false; // default: auto
    whiteList['nav-index'] = false; // default: auto
    whiteList['nav-left'] = false; // default: auto
    whiteList['nav-right'] = false; // default: auto
    whiteList['nav-up'] = false; // default: auto
    whiteList['object-fit'] = false; // default: fill
    whiteList['object-position'] = false; // default: 50% 50%
    whiteList['opacity'] = false; // default: 1
    whiteList['order'] = false; // default: 0
    whiteList['orphans'] = false; // default: 2
    whiteList['outline'] = false; // default: depending on individual properties
    whiteList['outline-color'] = false; // default: invert
    whiteList['outline-offset'] = false; // default: 0
    whiteList['outline-style'] = false; // default: none
    whiteList['outline-width'] = false; // default: medium
    whiteList['overflow'] = false; // default: depending on individual properties
    whiteList['overflow-wrap'] = false; // default: normal
    whiteList['overflow-x'] = false; // default: visible
    whiteList['overflow-y'] = false; // default: visible
    whiteList['padding'] = true; // default: depending on individual properties
    whiteList['padding-bottom'] = true; // default: 0
    whiteList['padding-left'] = true; // default: 0
    whiteList['padding-right'] = true; // default: 0
    whiteList['padding-top'] = true; // default: 0
    whiteList['page'] = false; // default: auto
    whiteList['page-break-after'] = false; // default: auto
    whiteList['page-break-before'] = false; // default: auto
    whiteList['page-break-inside'] = false; // default: auto
    whiteList['page-policy'] = false; // default: start
    whiteList['pause'] = false; // default: implementation dependent
    whiteList['pause-after'] = false; // default: implementation dependent
    whiteList['pause-before'] = false; // default: implementation dependent
    whiteList['perspective'] = false; // default: none
    whiteList['perspective-origin'] = false; // default: 50% 50%
    whiteList['pitch'] = false; // default: medium
    whiteList['pitch-range'] = false; // default: 50
    whiteList['play-during'] = false; // default: auto
    whiteList['position'] = false; // default: static
    whiteList['presentation-level'] = false; // default: 0
    whiteList['quotes'] = false; // default: text
    whiteList['region-fragment'] = false; // default: auto
    whiteList['resize'] = false; // default: none
    whiteList['rest'] = false; // default: depending on individual properties
    whiteList['rest-after'] = false; // default: none
    whiteList['rest-before'] = false; // default: none
    whiteList['richness'] = false; // default: 50
    whiteList['right'] = false; // default: auto
    whiteList['rotation'] = false; // default: 0
    whiteList['rotation-point'] = false; // default: 50% 50%
    whiteList['ruby-align'] = false; // default: auto
    whiteList['ruby-merge'] = false; // default: separate
    whiteList['ruby-position'] = false; // default: before
    whiteList['shape-image-threshold'] = false; // default: 0.0
    whiteList['shape-outside'] = false; // default: none
    whiteList['shape-margin'] = false; // default: 0
    whiteList['size'] = false; // default: auto
    whiteList['speak'] = false; // default: auto
    whiteList['speak-as'] = false; // default: normal
    whiteList['speak-header'] = false; // default: once
    whiteList['speak-numeral'] = false; // default: continuous
    whiteList['speak-punctuation'] = false; // default: none
    whiteList['speech-rate'] = false; // default: medium
    whiteList['stress'] = false; // default: 50
    whiteList['string-set'] = false; // default: none
    whiteList['tab-size'] = false; // default: 8
    whiteList['table-layout'] = false; // default: auto
    whiteList['text-align'] = true; // default: start
    whiteList['text-align-last'] = true; // default: auto
    whiteList['text-combine-upright'] = true; // default: none
    whiteList['text-decoration'] = true; // default: none
    whiteList['text-decoration-color'] = true; // default: currentColor
    whiteList['text-decoration-line'] = true; // default: none
    whiteList['text-decoration-skip'] = true; // default: objects
    whiteList['text-decoration-style'] = true; // default: solid
    whiteList['text-emphasis'] = true; // default: depending on individual properties
    whiteList['text-emphasis-color'] = true; // default: currentColor
    whiteList['text-emphasis-position'] = true; // default: over right
    whiteList['text-emphasis-style'] = true; // default: none
    whiteList['text-height'] = true; // default: auto
    whiteList['text-indent'] = true; // default: 0
    whiteList['text-justify'] = true; // default: auto
    whiteList['text-orientation'] = true; // default: mixed
    whiteList['text-overflow'] = true; // default: clip
    whiteList['text-shadow'] = true; // default: none
    whiteList['text-space-collapse'] = true; // default: collapse
    whiteList['text-transform'] = true; // default: none
    whiteList['text-underline-position'] = true; // default: auto
    whiteList['text-wrap'] = true; // default: normal
    whiteList['top'] = false; // default: auto
    whiteList['transform'] = false; // default: none
    whiteList['transform-origin'] = false; // default: 50% 50% 0
    whiteList['transform-style'] = false; // default: flat
    whiteList['transition'] = false; // default: depending on individual properties
    whiteList['transition-delay'] = false; // default: 0s
    whiteList['transition-duration'] = false; // default: 0s
    whiteList['transition-property'] = false; // default: all
    whiteList['transition-timing-function'] = false; // default: ease
    whiteList['unicode-bidi'] = false; // default: normal
    whiteList['vertical-align'] = false; // default: baseline
    whiteList['visibility'] = false; // default: visible
    whiteList['voice-balance'] = false; // default: center
    whiteList['voice-duration'] = false; // default: auto
    whiteList['voice-family'] = false; // default: implementation dependent
    whiteList['voice-pitch'] = false; // default: medium
    whiteList['voice-range'] = false; // default: medium
    whiteList['voice-rate'] = false; // default: normal
    whiteList['voice-stress'] = false; // default: normal
    whiteList['voice-volume'] = false; // default: medium
    whiteList['volume'] = false; // default: medium
    whiteList['white-space'] = false; // default: normal
    whiteList['widows'] = false; // default: 2
    whiteList['width'] = true; // default: auto
    whiteList['will-change'] = false; // default: auto
    whiteList['word-break'] = true; // default: normal
    whiteList['word-spacing'] = true; // default: normal
    whiteList['word-wrap'] = true; // default: normal
    whiteList['wrap-flow'] = false; // default: auto
    whiteList['wrap-through'] = false; // default: wrap
    whiteList['writing-mode'] = false; // default: horizontal-tb
    whiteList['z-index'] = false; // default: auto
    return whiteList;
}
/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */ function onAttr(name, value, options) {
// do nothing
}
/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */ function onIgnoreAttr(name, value, options) {
// do nothing
}
var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */ function safeAttrValue(name, value) {
    if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
    return value;
}
exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;
}}),
"[project]/node_modules/cssfilter/lib/util.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = {
    indexOf: function(arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
            return arr.indexOf(item);
        }
        for(i = 0, j = arr.length; i < j; i++){
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },
    forEach: function(arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
        }
        for(i = 0, j = arr.length; i < j; i++){
            fn.call(scope, arr[i], i, arr);
        }
    },
    trim: function(str) {
        if (String.prototype.trim) {
            return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    trimRight: function(str) {
        if (String.prototype.trimRight) {
            return str.trimRight();
        }
        return str.replace(/(\s*$)/g, '');
    }
};
}}),
"[project]/node_modules/cssfilter/lib/parser.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */ var _ = __turbopack_require__("[project]/node_modules/cssfilter/lib/util.js [app-ssr] (ecmascript)");
/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */ function parseStyle(css, onAttr) {
    css = _.trimRight(css);
    if (css[css.length - 1] !== ';') css += ';';
    var cssLength = css.length;
    var isParenthesisOpen = false;
    var lastPos = 0;
    var i = 0;
    var retCSS = '';
    function addNewAttr() {
        // 如果没有正常的闭合圆括号，则直接忽略当前属性
        if (!isParenthesisOpen) {
            var source = _.trim(css.slice(lastPos, i));
            var j = source.indexOf(':');
            if (j !== -1) {
                var name = _.trim(source.slice(0, j));
                var value = _.trim(source.slice(j + 1));
                // 必须有属性名称
                if (name) {
                    var ret = onAttr(lastPos, retCSS.length, name, value, source);
                    if (ret) retCSS += ret + '; ';
                }
            }
        }
        lastPos = i + 1;
    }
    for(; i < cssLength; i++){
        var c = css[i];
        if (c === '/' && css[i + 1] === '*') {
            // 备注开始
            var j = css.indexOf('*/', i + 2);
            // 如果没有正常的备注结束，则后面的部分全部跳过
            if (j === -1) break;
            // 直接将当前位置调到备注结尾，并且初始化状态
            i = j + 1;
            lastPos = i + 1;
            isParenthesisOpen = false;
        } else if (c === '(') {
            isParenthesisOpen = true;
        } else if (c === ')') {
            isParenthesisOpen = false;
        } else if (c === ';') {
            if (isParenthesisOpen) {
            // 在圆括号里面，忽略
            } else {
                addNewAttr();
            }
        } else if (c === '\n') {
            addNewAttr();
        }
    }
    return _.trim(retCSS);
}
module.exports = parseStyle;
}}),
"[project]/node_modules/cssfilter/lib/css.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */ var DEFAULT = __turbopack_require__("[project]/node_modules/cssfilter/lib/default.js [app-ssr] (ecmascript)");
var parseStyle = __turbopack_require__("[project]/node_modules/cssfilter/lib/parser.js [app-ssr] (ecmascript)");
var _ = __turbopack_require__("[project]/node_modules/cssfilter/lib/util.js [app-ssr] (ecmascript)");
/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */ function isNull(obj) {
    return obj === undefined || obj === null;
}
/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */ function shallowCopyObject(obj) {
    var ret = {};
    for(var i in obj){
        ret[i] = obj[i];
    }
    return ret;
}
/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */ function FilterCSS(options) {
    options = shallowCopyObject(options || {});
    options.whiteList = options.whiteList || DEFAULT.whiteList;
    options.onAttr = options.onAttr || DEFAULT.onAttr;
    options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
    options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
    this.options = options;
}
FilterCSS.prototype.process = function(css) {
    // 兼容各种奇葩输入
    css = css || '';
    css = css.toString();
    if (!css) return '';
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onAttr = options.onAttr;
    var onIgnoreAttr = options.onIgnoreAttr;
    var safeAttrValue = options.safeAttrValue;
    var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
        var check = whiteList[name];
        var isWhite = false;
        if (check === true) isWhite = check;
        else if (typeof check === 'function') isWhite = check(value);
        else if (check instanceof RegExp) isWhite = check.test(value);
        if (isWhite !== true) isWhite = false;
        // 如果过滤后 value 为空则直接忽略
        value = safeAttrValue(name, value);
        if (!value) return;
        var opts = {
            position: position,
            sourcePosition: sourcePosition,
            source: source,
            isWhite: isWhite
        };
        if (isWhite) {
            var ret = onAttr(name, value, opts);
            if (isNull(ret)) {
                return name + ':' + value;
            } else {
                return ret;
            }
        } else {
            var ret = onIgnoreAttr(name, value, opts);
            if (!isNull(ret)) {
                return ret;
            }
        }
    });
    return retCSS;
};
module.exports = FilterCSS;
}}),
"[project]/node_modules/cssfilter/lib/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */ var DEFAULT = __turbopack_require__("[project]/node_modules/cssfilter/lib/default.js [app-ssr] (ecmascript)");
var FilterCSS = __turbopack_require__("[project]/node_modules/cssfilter/lib/css.js [app-ssr] (ecmascript)");
/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */ function filterCSS(html, options) {
    var xss = new FilterCSS(options);
    return xss.process(html);
}
// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for(var i in DEFAULT)exports[i] = DEFAULT[i];
// 在浏览器端使用
if (typeof window !== 'undefined') {
    window.filterCSS = module.exports;
}
}}),
"[project]/node_modules/xss/lib/util.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = {
    indexOf: function(arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
            return arr.indexOf(item);
        }
        for(i = 0, j = arr.length; i < j; i++){
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },
    forEach: function(arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
        }
        for(i = 0, j = arr.length; i < j; i++){
            fn.call(scope, arr[i], i, arr);
        }
    },
    trim: function(str) {
        if (String.prototype.trim) {
            return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(str) {
        var reg = /\s|\n|\t/;
        var match = reg.exec(str);
        return match ? match.index : -1;
    }
};
}}),
"[project]/node_modules/xss/lib/default.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */ var FilterCSS = __turbopack_require__("[project]/node_modules/cssfilter/lib/index.js [app-ssr] (ecmascript)").FilterCSS;
var getDefaultCSSWhiteList = __turbopack_require__("[project]/node_modules/cssfilter/lib/index.js [app-ssr] (ecmascript)").getDefaultWhiteList;
var _ = __turbopack_require__("[project]/node_modules/xss/lib/util.js [app-ssr] (ecmascript)");
function getDefaultWhiteList() {
    return {
        a: [
            "target",
            "href",
            "title"
        ],
        abbr: [
            "title"
        ],
        address: [],
        area: [
            "shape",
            "coords",
            "href",
            "alt"
        ],
        article: [],
        aside: [],
        audio: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "preload",
            "src"
        ],
        b: [],
        bdi: [
            "dir"
        ],
        bdo: [
            "dir"
        ],
        big: [],
        blockquote: [
            "cite"
        ],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: [
            "align",
            "valign",
            "span",
            "width"
        ],
        colgroup: [
            "align",
            "valign",
            "span",
            "width"
        ],
        dd: [],
        del: [
            "datetime"
        ],
        details: [
            "open"
        ],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: [
            "color",
            "size",
            "face"
        ],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: [
            "src",
            "alt",
            "title",
            "width",
            "height",
            "loading"
        ],
        ins: [
            "datetime"
        ],
        kbd: [],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: [
            "width",
            "border",
            "align",
            "valign"
        ],
        tbody: [
            "align",
            "valign"
        ],
        td: [
            "width",
            "rowspan",
            "colspan",
            "align",
            "valign"
        ],
        tfoot: [
            "align",
            "valign"
        ],
        th: [
            "width",
            "rowspan",
            "colspan",
            "align",
            "valign"
        ],
        thead: [
            "align",
            "valign"
        ],
        tr: [
            "rowspan",
            "align",
            "valign"
        ],
        tt: [],
        u: [],
        ul: [],
        video: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "playsinline",
            "poster",
            "preload",
            "src",
            "height",
            "width"
        ]
    };
}
var defaultCSSFilter = new FilterCSS();
/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */ function onTag(tag, html, options) {
// do nothing
}
/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */ function onIgnoreTag(tag, html, options) {
// do nothing
}
/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */ function onTagAttr(tag, name, value) {
// do nothing
}
/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */ function onIgnoreTagAttr(tag, name, value) {
// do nothing
}
/**
 * default escapeHtml function
 *
 * @param {String} html
 */ function escapeHtml(html) {
    return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}
/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */ function safeAttrValue(tag, name, value, cssFilter) {
    // unescape attribute value firstly
    value = friendlyAttrValue(value);
    if (name === "href" || name === "src") {
        // filter `href` and `src` attribute
        // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
        value = _.trim(value);
        if (value === "#") return "#";
        if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
            return "";
        }
    } else if (name === "background") {
        // filter `background` attribute (maybe no use)
        // `javascript:`
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
        }
    } else if (name === "style") {
        // `expression()`
        REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
            return "";
        }
        // `url()`
        REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
            REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
                return "";
            }
        }
        if (cssFilter !== false) {
            cssFilter = cssFilter || defaultCSSFilter;
            value = cssFilter.process(value);
        }
    }
    // escape `<>"` before returns
    value = escapeAttrValue(value);
    return value;
}
// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
// var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */ function escapeQuote(str) {
    return str.replace(REGEXP_QUOTE, "&quot;");
}
/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */ function unescapeQuote(str) {
    return str.replace(REGEXP_QUOTE_2, '"');
}
/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */ function escapeHtmlEntities(str) {
    return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
        return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
    });
}
/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */ function escapeDangerHtml5Entities(str) {
    return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}
/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */ function clearNonPrintableCharacter(str) {
    var str2 = "";
    for(var i = 0, len = str.length; i < len; i++){
        str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
    }
    return _.trim(str2);
}
/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */ function friendlyAttrValue(str) {
    str = unescapeQuote(str);
    str = escapeHtmlEntities(str);
    str = escapeDangerHtml5Entities(str);
    str = clearNonPrintableCharacter(str);
    return str;
}
/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */ function escapeAttrValue(str) {
    str = escapeQuote(str);
    str = escapeHtml(str);
    return str;
}
/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */ function onIgnoreTagStripAll() {
    return "";
}
/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */ function StripTagBody(tags, next) {
    if (typeof next !== "function") {
        next = function() {};
    }
    var isRemoveAllTag = !Array.isArray(tags);
    function isRemoveTag(tag) {
        if (isRemoveAllTag) return true;
        return _.indexOf(tags, tag) !== -1;
    }
    var removeList = [];
    var posStart = false;
    return {
        onIgnoreTag: function(tag, html, options) {
            if (isRemoveTag(tag)) {
                if (options.isClosing) {
                    var ret = "[/removed]";
                    var end = options.position + ret.length;
                    removeList.push([
                        posStart !== false ? posStart : options.position,
                        end
                    ]);
                    posStart = false;
                    return ret;
                } else {
                    if (!posStart) {
                        posStart = options.position;
                    }
                    return "[removed]";
                }
            } else {
                return next(tag, html, options);
            }
        },
        remove: function(html) {
            var rethtml = "";
            var lastPos = 0;
            _.forEach(removeList, function(pos) {
                rethtml += html.slice(lastPos, pos[0]);
                lastPos = pos[1];
            });
            rethtml += html.slice(lastPos);
            return rethtml;
        }
    };
}
/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */ function stripCommentTag(html) {
    var retHtml = "";
    var lastPos = 0;
    while(lastPos < html.length){
        var i = html.indexOf("<!--", lastPos);
        if (i === -1) {
            retHtml += html.slice(lastPos);
            break;
        }
        retHtml += html.slice(lastPos, i);
        var j = html.indexOf("-->", i);
        if (j === -1) {
            break;
        }
        lastPos = j + 3;
    }
    return retHtml;
}
/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */ function stripBlankChar(html) {
    var chars = html.split("");
    chars = chars.filter(function(char) {
        var c = char.charCodeAt(0);
        if (c === 127) return false;
        if (c <= 31) {
            if (c === 10 || c === 13) return true;
            return false;
        }
        return true;
    });
    return chars.join("");
}
exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.attributeWrapSign = '"';
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
}}),
"[project]/node_modules/xss/lib/parser.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */ var _ = __turbopack_require__("[project]/node_modules/xss/lib/util.js [app-ssr] (ecmascript)");
/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */ function getTagName(html) {
    var i = _.spaceIndex(html);
    var tagName;
    if (i === -1) {
        tagName = html.slice(1, -1);
    } else {
        tagName = html.slice(1, i + 1);
    }
    tagName = _.trim(tagName).toLowerCase();
    if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
    if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
    return tagName;
}
/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */ function isClosing(html) {
    return html.slice(0, 2) === "</";
}
/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */ function parseTag(html, onTag, escapeHtml) {
    "use strict";
    var rethtml = "";
    var lastPos = 0;
    var tagStart = false;
    var quoteStart = false;
    var currentPos = 0;
    var len = html.length;
    var currentTagName = "";
    var currentHtml = "";
    chariterator: for(currentPos = 0; currentPos < len; currentPos++){
        var c = html.charAt(currentPos);
        if (tagStart === false) {
            if (c === "<") {
                tagStart = currentPos;
                continue;
            }
        } else {
            if (quoteStart === false) {
                if (c === "<") {
                    rethtml += escapeHtml(html.slice(lastPos, currentPos));
                    tagStart = currentPos;
                    lastPos = currentPos;
                    continue;
                }
                if (c === ">" || currentPos === len - 1) {
                    rethtml += escapeHtml(html.slice(lastPos, tagStart));
                    currentHtml = html.slice(tagStart, currentPos + 1);
                    currentTagName = getTagName(currentHtml);
                    rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
                    lastPos = currentPos + 1;
                    tagStart = false;
                    continue;
                }
                if (c === '"' || c === "'") {
                    var i = 1;
                    var ic = html.charAt(currentPos - i);
                    while(ic.trim() === "" || ic === "="){
                        if (ic === "=") {
                            quoteStart = c;
                            continue chariterator;
                        }
                        ic = html.charAt(currentPos - ++i);
                    }
                }
            } else {
                if (c === quoteStart) {
                    quoteStart = false;
                    continue;
                }
            }
        }
    }
    if (lastPos < len) {
        rethtml += escapeHtml(html.substr(lastPos));
    }
    return rethtml;
}
var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */ function parseAttr(html, onAttr) {
    "use strict";
    var lastPos = 0;
    var lastMarkPos = 0;
    var retAttrs = [];
    var tmpName = false;
    var len = html.length;
    function addAttr(name, value) {
        name = _.trim(name);
        name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
        if (name.length < 1) return;
        var ret = onAttr(name, value || "");
        if (ret) retAttrs.push(ret);
    }
    // 逐个分析字符
    for(var i = 0; i < len; i++){
        var c = html.charAt(i);
        var v, j;
        if (tmpName === false && c === "=") {
            tmpName = html.slice(lastPos, i);
            lastPos = i + 1;
            lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
            continue;
        }
        if (tmpName !== false) {
            if (i === lastMarkPos) {
                j = html.indexOf(c, i + 1);
                if (j === -1) {
                    break;
                } else {
                    v = _.trim(html.slice(lastMarkPos + 1, j));
                    addAttr(tmpName, v);
                    tmpName = false;
                    i = j;
                    lastPos = i + 1;
                    continue;
                }
            }
        }
        if (/\s|\n|\t/.test(c)) {
            html = html.replace(/\s|\n|\t/g, " ");
            if (tmpName === false) {
                j = findNextEqual(html, i);
                if (j === -1) {
                    v = _.trim(html.slice(lastPos, i));
                    addAttr(v);
                    tmpName = false;
                    lastPos = i + 1;
                    continue;
                } else {
                    i = j - 1;
                    continue;
                }
            } else {
                j = findBeforeEqual(html, i - 1);
                if (j === -1) {
                    v = _.trim(html.slice(lastPos, i));
                    v = stripQuoteWrap(v);
                    addAttr(tmpName, v);
                    tmpName = false;
                    lastPos = i + 1;
                    continue;
                } else {
                    continue;
                }
            }
        }
    }
    if (lastPos < html.length) {
        if (tmpName === false) {
            addAttr(html.slice(lastPos));
        } else {
            addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
        }
    }
    return _.trim(retAttrs.join(" "));
}
function findNextEqual(str, i) {
    for(; i < str.length; i++){
        var c = str[i];
        if (c === " ") continue;
        if (c === "=") return i;
        return -1;
    }
}
function findNextQuotationMark(str, i) {
    for(; i < str.length; i++){
        var c = str[i];
        if (c === " ") continue;
        if (c === "'" || c === '"') return i;
        return -1;
    }
}
function findBeforeEqual(str, i) {
    for(; i > 0; i--){
        var c = str[i];
        if (c === " ") continue;
        if (c === "=") return i;
        return -1;
    }
}
function isQuoteWrapString(text) {
    if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
        return true;
    } else {
        return false;
    }
}
function stripQuoteWrap(text) {
    if (isQuoteWrapString(text)) {
        return text.substr(1, text.length - 2);
    } else {
        return text;
    }
}
exports.parseTag = parseTag;
exports.parseAttr = parseAttr;
}}),
"[project]/node_modules/xss/lib/xss.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */ var FilterCSS = __turbopack_require__("[project]/node_modules/cssfilter/lib/index.js [app-ssr] (ecmascript)").FilterCSS;
var DEFAULT = __turbopack_require__("[project]/node_modules/xss/lib/default.js [app-ssr] (ecmascript)");
var parser = __turbopack_require__("[project]/node_modules/xss/lib/parser.js [app-ssr] (ecmascript)");
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = __turbopack_require__("[project]/node_modules/xss/lib/util.js [app-ssr] (ecmascript)");
/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */ function isNull(obj) {
    return obj === undefined || obj === null;
}
/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */ function getAttrs(html) {
    var i = _.spaceIndex(html);
    if (i === -1) {
        return {
            html: "",
            closing: html[html.length - 2] === "/"
        };
    }
    html = _.trim(html.slice(i + 1, -1));
    var isClosing = html[html.length - 1] === "/";
    if (isClosing) html = _.trim(html.slice(0, -1));
    return {
        html: html,
        closing: isClosing
    };
}
/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */ function shallowCopyObject(obj) {
    var ret = {};
    for(var i in obj){
        ret[i] = obj[i];
    }
    return ret;
}
function keysToLowerCase(obj) {
    var ret = {};
    for(var i in obj){
        if (Array.isArray(obj[i])) {
            ret[i.toLowerCase()] = obj[i].map(function(item) {
                return item.toLowerCase();
            });
        } else {
            ret[i.toLowerCase()] = obj[i];
        }
    }
    return ret;
}
/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */ function FilterXSS(options) {
    options = shallowCopyObject(options || {});
    if (options.stripIgnoreTag) {
        if (options.onIgnoreTag) {
            console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
        }
        options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
    }
    if (options.whiteList || options.allowList) {
        options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
    } else {
        options.whiteList = DEFAULT.whiteList;
    }
    this.attributeWrapSign = options.singleQuotedAttributeValue === true ? "'" : DEFAULT.attributeWrapSign;
    options.onTag = options.onTag || DEFAULT.onTag;
    options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
    options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
    options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
    options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
    options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
    this.options = options;
    if (options.css === false) {
        this.cssFilter = false;
    } else {
        options.css = options.css || {};
        this.cssFilter = new FilterCSS(options.css);
    }
}
/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */ FilterXSS.prototype.process = function(html) {
    // compatible with the input
    html = html || "";
    html = html.toString();
    if (!html) return "";
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onTag = options.onTag;
    var onIgnoreTag = options.onIgnoreTag;
    var onTagAttr = options.onTagAttr;
    var onIgnoreTagAttr = options.onIgnoreTagAttr;
    var safeAttrValue = options.safeAttrValue;
    var escapeHtml = options.escapeHtml;
    var attributeWrapSign = me.attributeWrapSign;
    var cssFilter = me.cssFilter;
    // remove invisible characters
    if (options.stripBlankChar) {
        html = DEFAULT.stripBlankChar(html);
    }
    // remove html comments
    if (!options.allowCommentTag) {
        html = DEFAULT.stripCommentTag(html);
    }
    // if enable stripIgnoreTagBody
    var stripIgnoreTagBody = false;
    if (options.stripIgnoreTagBody) {
        stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
        onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
    }
    var retHtml = parseTag(html, function(sourcePosition, position, tag, html, isClosing) {
        var info = {
            sourcePosition: sourcePosition,
            position: position,
            isClosing: isClosing,
            isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
        };
        // call `onTag()`
        var ret = onTag(tag, html, info);
        if (!isNull(ret)) return ret;
        if (info.isWhite) {
            if (info.isClosing) {
                return "</" + tag + ">";
            }
            var attrs = getAttrs(html);
            var whiteAttrList = whiteList[tag];
            var attrsHtml = parseAttr(attrs.html, function(name, value) {
                // call `onTagAttr()`
                var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
                var ret = onTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret)) return ret;
                if (isWhiteAttr) {
                    // call `safeAttrValue()`
                    value = safeAttrValue(tag, name, value, cssFilter);
                    if (value) {
                        return name + '=' + attributeWrapSign + value + attributeWrapSign;
                    } else {
                        return name;
                    }
                } else {
                    // call `onIgnoreTagAttr()`
                    ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                    if (!isNull(ret)) return ret;
                    return;
                }
            });
            // build new tag html
            html = "<" + tag;
            if (attrsHtml) html += " " + attrsHtml;
            if (attrs.closing) html += " /";
            html += ">";
            return html;
        } else {
            // call `onIgnoreTag()`
            ret = onIgnoreTag(tag, html, info);
            if (!isNull(ret)) return ret;
            return escapeHtml(html);
        }
    }, escapeHtml);
    // if enable stripIgnoreTagBody
    if (stripIgnoreTagBody) {
        retHtml = stripIgnoreTagBody.remove(retHtml);
    }
    return retHtml;
};
module.exports = FilterXSS;
}}),
"[project]/node_modules/xss/lib/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */ var DEFAULT = __turbopack_require__("[project]/node_modules/xss/lib/default.js [app-ssr] (ecmascript)");
var parser = __turbopack_require__("[project]/node_modules/xss/lib/parser.js [app-ssr] (ecmascript)");
var FilterXSS = __turbopack_require__("[project]/node_modules/xss/lib/xss.js [app-ssr] (ecmascript)");
/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */ function filterXSS(html, options) {
    var xss = new FilterXSS(options);
    return xss.process(html);
}
exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;
(function() {
    for(var i in DEFAULT){
        exports[i] = DEFAULT[i];
    }
    for(var j in parser){
        exports[j] = parser[j];
    }
})();
// using `xss` on the browser, output `filterXSS` to the globals
if (typeof window !== "undefined") {
    window.filterXSS = module.exports;
}
// using `xss` on the WebWorker, output `filterXSS` to the globals
function isWorkerEnv() {
    return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
}
if (isWorkerEnv()) {
    self.filterXSS = module.exports;
}
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_require__("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[{"protocol":"https","hostname":"marian-courses-bucket.s3.us-east-1.amazonaws.com","port":"","pathname":"/**"}]}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/next/image.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1b27d3._.js.map