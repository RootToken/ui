const SCREENS = {
  wideDesktop: 1920,
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 480,
//   mediumHandset: 360,
//   smallHandset: 320,
};

export const mediaDown = (key: keyof typeof SCREENS) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${SCREENS[key]}px) { ${style} }`;
};

export const mediaUp = (key: keyof typeof SCREENS) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${SCREENS[key]}px) { ${style} }`;
};

