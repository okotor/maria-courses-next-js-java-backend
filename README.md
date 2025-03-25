This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More


## Authentication Frontend Endpoints

COURSE (NEXT.JS BACKEND) => lib/...

    COMPONENTS

        YEAR HEADER CHOICE
        components/YearHeader
        COURSE YEAR LINKS
        // const courseYearLinks = await getAvailableCourseYears();

    APP

        COURSES
        app/courses/page.js
        LOAD ALL COURSES
        // async function LoadingCourses() {
        //     const courses = await getCourses();
        //     return <CoursesGrid courses={courses}/>
        // }

        app/courses/[Courseslug]/page.js
        FETCH COURSE DETAILS
        // const course = await getCourse(Courseslug);

        ARCHIVE
        app/archive/@latest/default.js
        LOAD LATEST COURSES
        // async function LoadingLatestCourses() {
        //     const courses = await getLatestCourses();
        //     return <CoursesGrid courses={courses}/>
        // }

        app/archive/[[...filter]]/page.js
        SELECT COURSES FOR GIVEN YEAR
        // if (selectedYear && !selectedMonth) {
        //     courses = await getCoursesForYear(selectedYear);
        // }

        (AUTH)
        app/(auth)/create-a-course.js
        CREATE A COURSE
        // const [state, formAction] = useActionState(createACourse, {message: null});




USER (NODE&EXPRESS BACKEND) => backend/index.js

    CONTEXT

        context/AuthContext
        CHECK SESSION
        //       const res = await fetch("http://localhost:5000/auth/status", {
        //         credentials: "include",
        //       });
        
        LOGOUT
        // const logout = async () => {
        //     await fetch("http://localhost:5000/api/logout", {
        //       method: "POST",
        //       credentials: "include",
        //     });

    COMPONENTS

        REGISTER
        components/RegisterForm
        HANDLE SUBMIT
        // const response = await fetch('http://localhost:5000/api/register', {
        //       method: 'POST',
        //       headers: { 'Content-Type': 'application/json' },
        //       body: JSON.stringify({ email, password }),
        //     });

        LOGIN
        components/LoginForm
        CHECK SESSION
        // const res = await fetch("http://localhost:5000/auth/status", {
        //     credentials: "include",
        //   });

        HANDLE GOOGLE LOGIN
        // const handleGoogleLogin = () => {
        //     // Redirect to Google's OAuth login page
        //     window.location.href = "http://localhost:5000/auth/google";
        //   };

        HANDLE LOGIN
        // // const res = await fetch("http://localhost:5000/api/login", {
        // //     method: "POST",
        // //     credentials: "include",
        // //     headers: { "Content-Type": "application/json" },
        // //     body: JSON.stringify({ email, password }),
        // //   });






