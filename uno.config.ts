import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  shortcuts: {
    navbar: "flex flex-col items-center grid-justify-between",
    // More shortcuts...
  },

  rules: [
    // Adding a custom width utility
    ["w-5/10", { width: "50%" }],
  ],

  presets: [
    presetUno({
      theme: {
        fontFamily: {
          // Define your custom Google Font, using the name provided by Google Fonts
          DMSans: ["DM Sans", "sans-serif"], // Make sure the name matches exactly
          Pacifico: ['Pacifico', 'cursive']
        },
      },
    }),
    presetIcons({
      scale: 2.0,
      cdn: 'https://esm.sh/',
    }),
  ],
});