/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#EFF2F7",
        card: "#FFFFFF",
        ink: "#0F172A"
      },
      boxShadow: {
        soft: "0 18px 35px -15px rgba(20,20,40,0.20)",
        inner: "inset 0 1px 0 rgba(255,255,255,0.5)"
      },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: []
}
