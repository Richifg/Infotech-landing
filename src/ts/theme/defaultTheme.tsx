const colors = {
  white: {
    base: '#F8F8F8',
  },
  black: {
    base: '#000',
    light: '#444',
    lighter: '#656565',
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
  // red
  alert: {
    base: 'red',
  },
};

const theme = {
  colors,
  layout: {
    root: {
      maxWidth: '1440px',
    },
  },
  column: {
    root: {
      color: colors.black.base,
      backgroundColor: 'transparent',
      padding: '4em 4em',
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
      letterSpacing: '1px',
      fontWeight: '700',
      textTransform: 'none',
    },
    headline2: {
      fontSize: `${42 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '1.5px',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    headline3: {
      fontSize: `${28 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '1px',
      fontWeight: '600',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: `${19 / 16}rem`,
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
      lineHeight: '1.7',
      letterSpacing: '0.5px',
      fontWeight: '500',
      textTransform: 'none',
    },
    body2: {
      fontSize: `${15 / 16}rem`,
      lineHeight: '1.7',
      letterSpacing: '0.25px',
      fontWeight: '500',
      textTransform: 'none',
    },
    button: {
      fontSize: `${16 / 16}rem`,
      lineHeight: '1.5',
      letterSpacing: '1.25px',
      fontWeight: '700',
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
      margin: '2em 1em 2em 0',
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
      padding: '0 2em',
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
  banner: {
    root: {
      maxHeight: '1040px',
      height: '95vh',
      padding: '4em 2em 0',
    },
    content: {
      maxWidth: '800px',
    },
  },
  sectionTitle: {
    root: {
      marginBottom: '2.5em',
    },
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
      marginBottom: '1em',
      maxWidth: '600px',
    },
  },
  sectionImage: {
    root: {
      maxWidth: '75%',
    },
  },
  card: {
    root: {
      maxWidth: '100%',
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
  iconList: {
    root: {},
    icon: {
      maxWidth: '150px',
      color: colors.secondary.base,
      margin: '20px',
    },
    caption: {
      maxWidth: '200px',
      marginTop: '2em',
    },
  },
  contactForm: {
    root: {
      backgroundColor: colors.primary.base,
      maxWidth: '800px',
      textAlign: 'left',
    },
    section: {
      marginBottom: '2em',
    },
    sectionTitle: {
      borderBottom: '2px solid white',
      maxWidth: '45%',
      marginBottom: '2em',
    },
    sectionSubtitle: {
      maxWidth: '55%',
      marginBottom: '2em',
    },
    inputGroup: {
      marginBottom: '1em',
    },
    label: {
      color: colors.white.base,
    },
    input: {
      root: {
        border: 'none',
        borderRadius: '10px',
        color: colors.black.base,
        backgroundColor: colors.white.base,
        padding: '.5em 1em',
        width: '100%',
        marginBottom: '0',
      },
      small: {
        width: '50%',
      },
      placeholder: {
        color: colors.black.lighter,
      },
      textArea: {
        height: '6.6em',
      },
    },
    error: {
      color: colors.alert.base,
      minHeight: '1.4em',
    },
  },
};

export { theme as default, colors };
