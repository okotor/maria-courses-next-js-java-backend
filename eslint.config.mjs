import next from "eslint-config-next";

const eslintConfig = [
  next({ // Use the Next.js ESLint configuration
    extends: ["next/core-web-vitals"],
  }),
];

export default eslintConfig;