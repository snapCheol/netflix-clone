export const breakPoint = {
  mobileS: 320,
  mobielM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${breakPoint.mobileS}px)`,
  mobileM: `(min-width: ${breakPoint.mobielM}px)`,
  mobileL: `(min-width: ${breakPoint.mobileL}px)`,
  tablet: `(min-width: ${breakPoint.tablet}px)`,
  laptop: `(min-width: ${breakPoint.laptop}px)`,
  laptopL: `(min-width: ${breakPoint.laptopL}px)`,
  desktop: `(min-width: ${breakPoint.desktop}px)`,
};
