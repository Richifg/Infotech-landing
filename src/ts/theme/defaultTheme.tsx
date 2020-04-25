const colors = {
  white: {
    base: '#F8F8F8',
    dark: '#E1E1E1',
  },
  black: {
    lighter: '#656565',
    light: '#444',
    base: '#000',
  },
  // dark blue
  primary: {
    light: '#0D4B8C',
    base: '#003E7F',
    dark: '#003172',
  },
  // orange
  secondary: {
    light: '#D46336',
    base: '#C75629',
    dark: '#BA491C',
  },
  // red
  alert: {
    base: 'red',
  },
  success: {
    base: 'green',
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
    labelColumn: {
      width: '40%',
      margin: '.5em',
    },
    inputsColumn: {
      width: '50%',
      margin: '.5em',
    },
    section: {
      marginBottom: '2em',
    },
    sectionTitle: {
      borderBottom: '2px solid white',
      maxWidth: '45%',
      marginBottom: '1.25em',
    },
    sectionSubtitle: {
      maxWidth: '55%',
      marginBottom: '3em',
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
        outlineColor: colors.secondary.light,
        backgroundColor: colors.white.base,
        paddingY: '.5em',
        paddingX: '1em',
        width: '100%',
        marginBottom: 0,
        fontSize: '1rem',
        lineHeight: 1.15,
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
    radio: {
      root: {
        width: '24px',
        height: '24px',
        borderRadius: '25px',
        border: `1px solid ${colors.black.lighter}`,
        backgroundColor: colors.white.base,
        marginRight: '.5em',
      },
      dot: {
        size: '0px',
      },
      hover: {
        root: {
          borderWidth: '2px',
          backgroundColor: colors.white.dark,
        },
      },
      checked: {
        root: {
          borderColor: colors.secondary.base,
          borderWidth: '1px !important',
          backgroundColor: colors.white.base,
        },
        dot: {
          size: '18px',
          backgroundColor: colors.secondary.base,
        },
      },
      active: {
        root: {
          borderColor: colors.secondary.dark,
          borderWidth: '3px',
          backgroundColor: colors.white.dark,
        },
        dot: {
          size: '10px',
          backgroundColor: colors.secondary.dark,
        },
      },
    },
    checkbox: {
      root: {
        width: '24px',
        height: '24px',
        borderRadius: '2px',
        border: `1px solid ${colors.black.lighter}`,
        backgroundColor: colors.white.base,
        marginRight: '1em',
        marginBottom: '1.5em',
      },
      checkmark: {
        size: '0px',
        backgroundColor: colors.secondary.base,
      },
      hover: {
        root: {
          borderWidth: '2px',
          backgroundColor: colors.white.dark,
        },
      },
      checked: {
        root: {
          borderColor: colors.secondary.base,
          borderWidth: '1px',
          backgroundColor: colors.white.base,
        },
        checkmark: {
          size: '20px !important',
          backgroundColor: colors.secondary.base,
        },
      },
      active: {
        root: {
          borderColor: colors.secondary.dark,
          borderWidth: '3px',
          backgroundColor: colors.white.dark,
        },
        checkmark: {
          size: '7px',
          backgroundColor: colors.secondary.dark,
        },
      },
    },
    error: {
      color: colors.alert.base,
      minHeight: '1.4em',
    },
  },
};

export { theme as default, colors };
