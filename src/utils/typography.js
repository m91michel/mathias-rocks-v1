import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";

fairyGatesTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    a: {
      boxShadow: "none",
      textShadow: "none",
      backgroundImage: "none",
    },
  };
};

const typography = new Typography(fairyGatesTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export const { rhythm, scale } = typography;
export default typography;
