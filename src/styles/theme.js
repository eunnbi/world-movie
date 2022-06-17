const color = {
  skyBlue: "#49a6e9",
  darkBlue: "#073763",
  blueBlack: "#112a42",
  gray: "#55595c",
};

const deviceSizes = {
  mobile: "400px",
  tablet: "820px",
  laptop: "900px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
  color,
};

export default theme;
