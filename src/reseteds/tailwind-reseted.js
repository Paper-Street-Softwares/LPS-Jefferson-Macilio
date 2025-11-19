function hexToRgb(hex) {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      lighter: "#D7B283",
      darker: "#132745",
      fontLighter: "#ffffff",
      fontDarker: "#000000",
      backgroundHeroDiv: "#000",
    },
    fontFamily: {
      mainFont: ["EB Garamond", "serif"],
      secondFont: ["Roboto", "sans-serif"],
    },
    fontSize: {
      paragraph1: "0.625rem",
      paragraph2: "0.75rem",
      paragraph3: "0.875rem",
      paragraph4: "1rem",
      paragraph5: "1.125rem",
      title1: "1.25rem",
      title2: "1.375rem",
      title3: "1.5rem",
      title4: "1.875rem",
      title5: "2.25rem",
      title6: "3rem",
      title7: "3.5rem",
    },
    screens: {
      phone1: "320px",
      phone2: "375px",
      phone3: "425px",
      tablet1: "640px",
      tablet2: "768px",
      desktop1: "1024px",
      desktop2: "1280px",
      desktop3: "1440px",
    },
    animation: {
      "shine-loop": "shine-loop 5s ease-in-out infinite",
    },
    keyframes: {
      "shine-loop": {
        "0%": {
          transform: "translateX(-100%) skewX(-20deg)",
        },
        "20%": {
          transform: "translateX(200%) skewX(-20deg)",
        },
        "100%": {
          transform: "translateX(200%) skewX(-20deg)",
        },
      },
    },

    backgroundImage: (theme) => {
      const lighterHex = theme("colors.lighter");
      const lighterRgb = hexToRgb(lighterHex);
      const darkerHex = theme("colors.darker");
      const darkerRgb = hexToRgb(darkerHex);

      return {
        "custom-divider-lighter": `linear-gradient(90deg, rgba(${lighterRgb}, 0) 1.46%, rgba(${lighterRgb}, 0.6) 40.83%, rgba(${lighterRgb}, 0.3) 65.57%, rgba(${lighterRgb}, 0) 107.92%)`,
        "custom-divider-darker": `linear-gradient(90deg, rgba(${darkerRgb}, 0) 1.46%, rgba(${darkerRgb}, 0.6) 40.83%, rgba(${darkerRgb}, 0.3) 65.57%, rgba(${darkerRgb}, 0) 107.92%)`,
      };
    },
  },
};
