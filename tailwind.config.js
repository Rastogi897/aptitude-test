/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,hbs}"],
    theme: {
        extend: {
            colors:{
                primary: {

                    //hexcode of violet

                    200: "#ddd6fe",
                    400: "#a78bfa",
                    500: "#8b5cf6",
                    600: "#7c3aed",
                    700: "#6d28d9",
                    900: "#4c1d95"
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
