/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#32073D",
          "primary-content": "#32073D",
          secondary: "#32073D",
          "secondary-content": "#32073D",
          accent: "#93BBFB",
          "accent-content": "#32073D",
          neutral: "#212638",
          "neutral-content": "#32073D",
          "base-100": "#F9FBFF",
          "base-200": "#F9FBFF",
          "base-300": "#32073D",
          "base-content": "#F9FBFF",
          info: "#F9FBFF",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "9999rem",
          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#F9FBFF",
          "primary-content": "#F9FBFF",
          secondary: "#32073D",
          "secondary-content": "#F9FBFF",
          accent: "#73118B",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#9D4561",
          "base-200": "#32073D",
          "base-300": "#F9FBFF",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#FF6644",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#f3f3f3",
          "neutral-content": "#212638",
          "base-100": "#ffffff",
          "base-200": "#f1f1f1",
          "base-300": "#d0d0d0",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        danyaUi:{

        }
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    // extend: {
    //   fontFamily: {
    //     "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
    //     inter: "Inter",
    //     inconsolata: "Inconsolata",
    //     "components-button-large": "Roboto",
    //     "baloo-bhai": "'Baloo Bhai'",
    //   },
    //   keyframes: {
    //     grow: {
    //       "0%": {
    //         width: "0%",
    //       },
    //       "100%": {
    //         width: "100%",
    //       },
    //     },
    //     zoom: {
    //       "0%, 100%": { transform: "scale(1, 1)" },
    //       "50%": { transform: "scale(1.1, 1.1)" },
    //     },
    //   },
    //   animation: {
    //     grow: "grow 5s linear infinite",
    //     "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    //     zoom: "zoom 1s ease infinite",
    //   },
    //   colors: {
    //     orange: {
    //       "200": "#fba403",
    //       "300": "#f99a0e",
    //     },
    //     midnightblue: "#32073d",
    //     "studio-darkmode-allwhite-ffffff": "#fff",
    //     darkslateblue: "#4d1755",
    //     gray: {
    //       "100": "#8e8e94",
    //       "200": "#191919",
    //       "400": "#1d0423",
    //       "500": "rgba(255, 255, 255, 0.2)",
    //     },
    //     whitesmoke: {
    //       "100": "#f8f9fb",
    //       "200": "#eaeaea",
    //     },
    //     gainsboro: "rgba(226, 226, 226, 0.1)",
    //     lavender: "#ccdcec",
    //     cornflowerblue: {
    //       "100": "#1262af",
    //       "200": "#1262ae",
    //       "300": "rgba(18, 98, 175, 0.05)",
    //       "400": "rgba(18, 98, 175, 0.06)",
    //     },
    //     darkslategray: {
    //       "100": "#434343",
    //       "200": "#424242",
    //       "300": "#303030",
    //     },
    //     royalblue: "#457eff",
    //     lightslategray: "#7e8b97",
    //     lightgray: "#cecece",
    //     dimgray: {
    //       "100": "#646468",
    //       "200": "#57575d",
    //     },
    //     darkorange: "#dc880b",
    //     aliceblue: "#f3f7fb",
    //     slategray: "#576074",
    //   },
    //   borderRadius: {
    //     "31xl": "50px",
    //     "3xs": "10px",
    //     "19xl": "38px",
    //     "8xl": "27px",
    //   },
    // },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      lg: "18px",
      "11xl": "30px",
      "16xl": "35px",
      "23xl": "42px",
      "56xl": "75px",
      mini: "15px",
      "3xl": "22px",
      xs: "12px",
      "2xl": "21px",
      smi: "13px",
      "42xl": "61px",
      "12xl": "31px",
      sm: "14px",
      "13xl": "32px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "1100px",
      },
      sm: {
        max: "650px",
      },
      mq428small: {
        raw: "screen and (max-width: 428px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
