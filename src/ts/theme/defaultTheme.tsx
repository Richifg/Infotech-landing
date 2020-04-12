const colors = {
  white: {
    base: '#F8F8F8',
  },
  black: {
    base: '#000',
    light: '#111',
  },
  // dark blue
  primary: {
    base: '#003E7F',
    light: '#0D4B8C',
    dark: '#003172',
  },
  // orange
  secondary: {
    base: '#C75629',
    light: '#D46336',
    dark: '#BA491C',
  },
};

const theme = {
  layout: {
    root: {
      maxWidth: '1440px',
      paddingX: '2em',
    },
  },
  column: {
    root: {
      color: colors.black.base,
      backgroundColor: 'transparent',
    },
    alt: {
      color: colors.white.base,
      backgroundColor: colors.primary.base,
    },
  },
  typography: {
    root: {},
    headline1: {
      fontSize: `${64 / 16}rem`,
      lineHeight: '1.2',
      letterSpacing: '-0.5px',
      fontWeight: '700',
      textTransform: 'none',
    },
    headline2: {
      fontSize: `${42 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '0px',
      fontWeight: '600',
      textTransform: 'none',
    },
    headline3: {
      fontSize: `${24 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '0.25px',
      fontWeight: '500',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: `${17 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '0.15px',
      fontWeight: '600',
      textTransform: 'none',
    },
    subtitle2: {
      fontSize: `${15 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '0.1px',
      fontWeight: '400',
      textTransform: 'none',
    },
    body1: {
      fontSize: `${16 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '0.5px',
      fontWeight: '500',
      textTransform: 'none',
    },
    body2: {
      fontSize: `${15 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '0.25px',
      fontWeight: '500',
      textTransform: 'none',
    },
    button: {
      fontSize: `${15 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '1.25px',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
  },
  button: {
    root: {
      padding: '1em 1.5em',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: colors.secondary.base,
      color: colors.white.base,
    },
    hover: {
      backgroundColor: colors.secondary.light,
    },
    active: {
      backgroundColor: colors.secondary.dark,
    },
  },
  navbar: {
    root: {
      backgroundColor: colors.white.base,
      height: '120px',
      opacity: '0.95',
    },
  },
  navlink: {
    root: {
      color: colors.black.base,
    },
    activeBar: {
      bottom: '-4px',
      left: '0',
      height: '2px',
      width: '100%',
      backgroundColor: colors.secondary.base,
    },
  },
  navlogo: {
    root: {
      maxWidth: '230px',
    },
  },
  sectionTitle: {
    root: {},
    decoration: {
      height: '4px',
      width: '150px',
      top: '-4px',
      left: '0',
      backgroundColor: colors.secondary.base,
    },
  },
  sectionParagraph: {
    root: {
      maxWidth: '600px',
    },
  },
  sectionImage: {
    root: {
      maxWidth: '75%',
      maxHeight: '75%',
    },
  },
  card: {
    root: {
      maxWidth: '305px',
      padding: '.5em',
      textAlign: 'left',
    },
    image: {
      paddingBottom: `${(100 * 162) / 305}%`,
    },
  },
  carousel: {
    root: {},
    arrow: {
      height: '50px',
      width: '25px',
      thickness: '4px',
      angle: '30deg',
      color: colors.secondary.base,
      backgroundColor: 'transparent',
    },
  },
};

export { theme as default, colors };
