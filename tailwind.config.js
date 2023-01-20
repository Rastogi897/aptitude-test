/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,hbs}"],
    theme: {
        extend: {
            colors:{
                primary: {

                    //hexcode of violet

                    200: "#ddd6fe",
                    300: "#c4b5fd",
                    400: "#a78bfa",
                    500: "#8b5cf6",
                    600: "#7c3aed",
                    700: "#6d28d9",
                    800: "#5b21b6",
                    900: "#4c1d95"
                },
                back: {
                    dark: "#010409",
                    semi: "#161B22",
                    light: "#1C222B"
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
