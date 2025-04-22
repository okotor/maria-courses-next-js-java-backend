module.exports = {

"[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@aws-sdk/client-s3", () => require("@aws-sdk/client-s3"));

module.exports = mod;
}}),
"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}}),
"[project]/lib/db-interactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAvailableCourseMonths": (()=>getAvailableCourseMonths),
    "getAvailableCourseYears": (()=>getAvailableCourseYears),
    "getCourse": (()=>getCourse),
    "getCourses": (()=>getCourses),
    "getCoursesForYear": (()=>getCoursesForYear),
    "getCoursesForYearAndMonth": (()=>getCoursesForYearAndMonth),
    "getLatestCourses": (()=>getLatestCourses),
    "saveCourse": (()=>saveCourse)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__ = __turbopack_import__("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_import__("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/slugify/slugify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xss$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/xss/lib/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
// const s3 = new S3({
//     region: 'us-east-1',
//     credentials: {
//     accessKeyId: process.env.local.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.local.AWS_SECRET_ACCESS_KEY,
//   },
//   });
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"])('courses.db');
async function getCourses() {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM courses').all();
}
function getCourse(slug) {
    const course = db.prepare('SELECT * FROM courses WHERE slug = ?').get(slug);
    return course || null; // Return null if no course is found
}
async function saveCourse(course) {
    try {
        const twoSlugWords = course.title.split(" ").slice(0, 2).join(" "); // Take first two words
        const randomSlugAddition = Math.floor(Math.random() * 100) + 1;
        const modifiedTitle = `${twoSlugWords} ${randomSlugAddition}`;
        course.slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(modifiedTitle, {
            lower: true,
            strict: true
        }); // Convert to slug
        course.course_description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xss$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(course.course_description);
        const extension = course.image.name.split('.').pop();
        const fileName = `${course.slug}.${extension}`;
        const stream = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].createWriteStream(`public/${fileName}`);
        const bufferedImage = await course.image.arrayBuffer();
        stream.write(Buffer.from(bufferedImage), (error)=>{
            if (error) {
                throw new Error('Ukládání obrázku selhalo!');
            }
        });
        // console.log("🔹 Uploading to S3: ", `public/${fileName}`);
        // await s3.putObject({
        //     Bucket: 'marian-courses-bucket',
        //     Key: `public/${fileName}`,
        //     Body: Buffer.from(bufferedImage),
        //     ContentType: course.image.type,
        // });
        // console.log("✅ Upload successful!");
        course.image = fileName;
        return db.prepare(`
            INSERT INTO courses 
                (date, slug, title, image, summary, course_description, lecturer, lecturer_email)
            VALUES (
                @date,
                @slug,
                @title,
                @image,
                @summary,
                @course_description,
                @lecturer,
                @lecturer_email
            )
        `).run(course);
    } catch (error) {
        console.error("❌ Upload failed:", error);
    }
}
function getLatestCourses() {
    return db.prepare(`
    SELECT * FROM courses 
    ORDER BY 
      SUBSTR(date, 1, 4) DESC,                -- Order by Year descending
      CAST(SUBSTR(date, 9, 2) AS INTEGER) DESC, -- Order by Month descending
      CAST(SUBSTR(date, 6, 2) AS INTEGER) DESC  -- Order by Day descending
    LIMIT 3
  `).all();
}
function getAvailableCourseYears() {
    const courses = db.prepare('SELECT date FROM courses').all();
    return courses.map((course)=>{
        const parts = course.date.split("-"); // Split by "-"
        return {
            year: parseInt(parts[0], 10),
            day: parseInt(parts[1], 10),
            month: parseInt(parts[2], 10) // Extract month (MM)
        };
    }).sort((a, b)=>{
        // Sort by year, then month, then day in descending order
        return b.year - a.year || b.month - a.month || b.day - a.day;
    }).map((course)=>course.year) // Keep only the year
    .filter((year, index, self)=>self.indexOf(year) === index); // Remove duplicates
}
function getAvailableCourseMonths(year) {
    return db.prepare('SELECT * FROM courses').reduce((months, course)=>{
        const newsYear = new Date(course.date).getFullYear();
        if (newsYear === +year) {
            const month = new Date(course.date).getMonth();
            if (!months.includes(month)) {
                months.push(month + 1);
            }
        }
        return months;
    }, []).sort((a, b)=>b - a);
}
function getCoursesForYear(year) {
    const courses = db.prepare(`
    SELECT * FROM courses 
    WHERE SUBSTR(date, 1, 4) = ? 
    ORDER BY SUBSTR(date, 6, 2) ASC, SUBSTR(date, 9, 2) ASC
  `).all(year.toString());
    return courses;
}
function getCoursesForYearAndMonth(year, month) {
    return db.prepare('SELECT * FROM courses').filter((course)=>{
        const newsYear = new Date(course.date).getFullYear();
        const newsMonth = new Date(course.date).getMonth() + 1;
        return newsYear === +year && newsMonth === +month;
    });
} // export async function getAllNews() {
 //   const news = db.prepare('SELECT * FROM news').all();
 //   await new Promise((resolve) => setTimeout(resolve, 2000));
 //   return news;
 // }
 // export async function getNewsItem(slug) {
 //   const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
 //   await new Promise((resolve) => setTimeout(resolve, 2000));
 //   return newsItem;
 // }
 // export async function getLatestNews() {
 //   const latestNews = db
 //     .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
 //     .all();
 //   await new Promise((resolve) => setTimeout(resolve, 2000));
 //   return latestNews;
 // }
 // export async function getAvailableNewsYears() {
 //   const years = db
 //     .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
 //     .all()
 //     .map((year) => year.year);
 //   await new Promise((resolve) => setTimeout(resolve, 2000));
 //   return years;
 // }
 // export function getAvailableNewsMonths(year) {
 //   return db
 //     .prepare(
 //       "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
 //     )
 //     .all(year)
 //     .map((month) => month.month);
 // }
 // export async function getNewsForYear(year) {
 //   const news = db
 //     .prepare(
 //       "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
 //     )
 //     .all(year);
 //   await new Promise((resolve) => setTimeout(resolve, 2000));
 //   return news;
 // }
 // export async function getNewsForYearAndMonth(year, month) {
 //   const news = db
 //     .prepare(
 //       "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
 //     )
 //     .all(year, month);
 //   await new Promise((resolve) => setTimeout(resolve, 2000));
 //   return news;
 // }
}}),
"[project]/app/courses/[Courseslug]/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "creator": "page-module__X1I2mW__creator",
  "fade-slide-in-from-bottom": "page-module__X1I2mW__fade-slide-in-from-bottom",
  "fade-slide-in-from-left": "page-module__X1I2mW__fade-slide-in-from-left",
  "fade-slide-in-from-right": "page-module__X1I2mW__fade-slide-in-from-right",
  "flash": "page-module__X1I2mW__flash",
  "header": "page-module__X1I2mW__header",
  "headerText": "page-module__X1I2mW__headerText",
  "image": "page-module__X1I2mW__image",
  "instructions": "page-module__X1I2mW__instructions",
  "loading": "page-module__X1I2mW__loading",
  "summary": "page-module__X1I2mW__summary",
});
}}),
"[project]/app/courses/[Courseslug]/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CourseDetailsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$interactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/db-interactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/courses/[Courseslug]/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function CourseDetailsPage({ params }) {
    const { Courseslug } = await params;
    const course = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$interactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCourse"])(Courseslug);
    // If the course is not found, show the not found page
    if (!course) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        return null; // Return null to stop further processing
    }
    course.course_description = course.course_description.replace(/\n/g, '<br />');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: '/' + `${course.image}`,
                            alt: course.title,
                            fill: true
                        }, void 0, false, {
                            fileName: "[project]/app/courses/[Courseslug]/page.js",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/courses/[Courseslug]/page.js",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: course.title
                            }, void 0, false, {
                                fileName: "[project]/app/courses/[Courseslug]/page.js",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lecturer
                            }, void 0, false, {
                                fileName: "[project]/app/courses/[Courseslug]/page.js",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            "by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${course.lecturer_email}`,
                                children: course.lecturer
                            }, void 0, false, {
                                fileName: "[project]/app/courses/[Courseslug]/page.js",
                                lineNumber: 30,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/[Courseslug]/page.js",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                        children: course.summary
                    }, void 0, false, {
                        fileName: "[project]/app/courses/[Courseslug]/page.js",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/[Courseslug]/page.js",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$Courseslug$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructions,
                    dangerouslySetInnerHTML: {
                        __html: course.course_description
                    }
                }, void 0, false, {
                    fileName: "[project]/app/courses/[Courseslug]/page.js",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/courses/[Courseslug]/page.js",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/courses/[Courseslug]/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/courses/[Courseslug]/page.js [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/courses/[Courseslug]/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__5ea1cc._.js.map