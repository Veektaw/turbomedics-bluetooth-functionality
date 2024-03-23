/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ResolutionBlue: "#011D7E",
        OlsoGrey: "#808D9E",
        OlsoGrey_2: "#8B8D97",
        BluishGrey: "#7E8CA0",
        BlueChalk: "#E9ECF2",
        MountainMist: "#959595",
        Glaucous: "#6777B2",
        TitanWhite: "#F4ECFF",
        LavendaMist: "#E1EBFB",
        ClearDay: "#EAFFFD",
        PattensBlue: "#E7F2FF",
        ScotchMist: "#FFFCDD",
        WhiteLilac: "#F8F8FB",
        GreenWhite: "#E9E9EA",
        RadicalRed: "#F43F5E",
        DarkJungleGreen: "#1D1E25",
        MistBlue: "#6E7079",
        Geyser: "#D4DAE3",
        ArtyClickRed: "#ff0000",
        SantaGrey: "#98A2B3",
        DarkJungleGrenn: "#1C1D22",
        iron: "#D8D8D8",
        SaffronMango: "#FFC046",
      },
      fontFamily: {
        urbanist: ["Urbanist-Regular", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};