/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tint: {
          7: withOpacity("--color-tint-7"),
          6: withOpacity("--color-tint-6"),
          5: withOpacity("--color-tint-5"),
          4: withOpacity("--color-tint-4"),
          3: withOpacity("--color-tint-3"),
          2: withOpacity("--color-tint-2"),
          1: withOpacity("--color-tint-1"),
        },
       shade: {
          900: withOpacity("--color-shade-900"),
          800: withOpacity("--color-shade-800"),
          700: withOpacity("--color-shade-700"),
          600: withOpacity("--color-shade-600"),
          500: withOpacity("--color-shade-500"),
          400: withOpacity("--color-shade-400"),
          300: withOpacity("--color-shade-300"),
        },
        gray: {
          8: withOpacity("--color-gray-8"),
          7: withOpacity("--color-gray-7"),
          6: withOpacity("--color-gray-6"),
          5: withOpacity("--color-gray-5"),
          4: withOpacity("--color-gray-4"),
          3: withOpacity("--color-gray-3"),
          2: withOpacity("--color-gray-2"),
          1: withOpacity("--color-gray-1"),
        },
        success: withOpacity("--color-success"),
        successLight: withOpacity("--color-successLight"),
        successExrtaLight: withOpacity("--color-successExtraLight"),
        warning: withOpacity("--color-warning"),
        warningLight: withOpacity("--color-warningLight"),
        warningExtraLight: withOpacity(" --color-warningExtraLight"),
        error: withOpacity("--color-error"),
        errorLight: withOpacity("--color-errorLight"),
        errorExtraLight: withOpacity(" --color-errorExtraLight"),
        primary: withOpacity("--color-primary"),
        black:withOpacity("--color-black"),
        blackShadow:withOpacity("--color-blackShadow"),
        colortext:withOpacity("--colot-text")
      },
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      boxShadow: {
        // "input-focus": "0 12px 24px -8px rgb(var(--color-primary-300))",
        "drop-2":"0px 2px 2px 0px rgba(var(--color-blackShadow))",
        "drop-4":"0px 4px 4px 0px rgba(var(--color-blackShadow))",
        "drop-6":"0px 6px 6px 0px rgba(var(--color-blackShadow))",
        "drop-8":"0px 8px 8px 0px rgba(var(--color-blackShadow))",
        "drop-12":"0px 12px 12px 0px rgba(var(--color-blackShadow))",
        "drop-16":"0px 16px 16px 0px rgba(var(--color-blackShadow))",
        "card-shadow":"0px 16px 16px 0px rgba(var(--color-blackShadow))",
        "contact-shadow16":"0px 16px 16px 0px rgba(var(--color-blackShadow))",
      },
    },
  },
  plugins: [],
};
