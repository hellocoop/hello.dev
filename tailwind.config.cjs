const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
            css: {
                "code::before": {content: ''},
                "code::after": {content: ''}
            }
        }
      },
      colors: {
        charcoal: "#303030",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
