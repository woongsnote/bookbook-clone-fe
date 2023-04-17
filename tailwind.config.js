/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Bwhite: "#ffffff",
        Bred: "#D34242",
        Bblue: "#567F9E",
        BDeepblue: "#375160",
        Bblack: "#3A3A3A",
      },
      width: {
        c: "45rem",
        profile: "200px",
      },
      height: {
        profile: "200px",
      },
      spacing: {
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
