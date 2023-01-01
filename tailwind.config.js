/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,hbs}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
