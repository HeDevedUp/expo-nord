import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F6820D",
    secondary: "#414757",
    error: "#f13a59",
    success: "#00B386",
    gray: "C5C5C7",
    white: "FFFFFF",
    coral: "coral",


  },
  spacing: {
    '-xxs': -2,
    '-xs': -4,
    '-s': -8,
    '-sl': -10,
    '-xm': -12,
    '-m': -16,
    '-ml': -18,
    '-l': -24,
    '-xl': -30,
    '-xxl': -40,
    '-xxxl': -50,
    '-mxxxl': -55,
    xxxs: 2,
    xxs: 3,
    xs: 4,
    s: 8,
    sl: 10,
    xm: 12,
    bm: 14,
    m: 16,
    ml: 18,
    mll: 20,
    mlll: 22,
    l: 24,
    xl: 30,
    xxl: 40,
    xxxl: 50,
    XL: 60,
    XXL: 80,
    smXXL: 85,
    mXXL: 90,
    XXXL: 100,
    XXXXL: 108,
    XXXLL: 110,
    phoneInputPadding: 100,
    none: 0,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textInputVariants: {
    error: {
      borderColor: 'error',
    },
    phone: {
      paddingLeft: 'phoneInputPadding',
    },
    phoneError: {
      borderColor: 'error',
      paddingLeft: 'phoneInputPadding',
    },
    socialError: {
      borderColor: 'error',
      paddingLeft: 'XL',
    },
    social: {
      paddingLeft: 'XL',
    },
  },
  textVariants: {
    headline: {
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
    },
    greySubtitle: {
      color: 'greyText',
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
    },
    title: {
      fontSize: 15,
      fontFamily: 'Roboto-Medium',
    },

    boldTitle: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    subTitle: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    smallSubTitle: {
      fontSize: 12,
    },
    titleDescription: {
      fontSize: 13,
      fontFamily: 'Roboto-Medium',
    },
    body: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    largeBody: {
      fontSize: 50,
      fontFamily: 'Roboto-Regular',
    },
    bodyLight: {
      fontSize: 14,
      fontFamily: 'Roboto-Light',
    },
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    bold: {
      fontSize: 20,
      fontWeight: '800',
      fontFamily: 'Roboto-Bold',
    },
    semiBold: {
      fontSize: 20,
      fontWeight: '600',
      color: 'darkGreyText',
      fontFamily: 'Roboto-Regular',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
    },
  },
  buttonVariants: {
    secondary: {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderColor: 'primary',
      borderWidth: 1,
      backgroundColor: 'buttonColor',
    },
    'secondary-small': {
      width: '100%',
      height: 30,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      borderColor: 'primary',
      borderWidth: 2,
    },
    primary: {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
    },
    'primary-bold': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
    },
    'primary-round': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 27,
      borderColor: 'primary',
      borderWidth: 2,
    },
    yellowPrimary: {
      width: '100%',
      height: '80%',
      borderRadius: 7,
      backgroundColor: 'lightingYellow',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      shadowColor: 'zBlack',
    },
    yellowPrimarySmall: {
      height: '80%',
      px: 's',
      borderRadius: 7,
      backgroundColor: 'lightingYellow',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      shadowColor: 'zBlack',
    },
    yellowWhite: {
      width: 100,
      height: '80%',
      borderRadius: 7,
      borderColor: 'lightingYellow',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    'primary-large': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      borderColor: 'primary',
    },
  },
  buttonTextVariants: {
    primary: {
      color: 'whiteText',
    },
    yellowPrimarySmall: {
      color: 'whiteText',
      fontSize: 15,
      fontWeight: 'bold',
    },
    'primary-round': {
      color: 'whiteText',
    },
    secondary: {
      color: 'whiteText',
      fontSize: 23,
      fontWeight: '600',
    },
    'secondary-small': {
      fontSize: 12,
      color: 'primary',
    },
    yellowPrimary: {
      color: 'whiteText',
      fontWeight: '700',
      fontSize: 20,
    },
    yellowWhite: {
      color: 'lightingYellow',
      fontWeight: '700',
      fontSize: 20,
    },
    'primary-large': {
      fontSize: 20,
      color: 'whiteText',
      fontFamily: 'Roboto-Bold',
    },
    'primary-bold': {
      fontSize: 22,
      fontWeight: '800',
      fontFamily: 'Roboto-Bold',
      color: 'whiteText',
    },
  },
  selectBoxVariants: {
    selected: {
      borderColor: 'lightingYellow',
      backgroundColor: 'lightingYellow',
    },
    nonSelected: {
      borderColor: 'textInputBorderColor',
    },
    error: {
      borderColor: 'error',
    },
  },
  cardVariants: {
    low: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      shadowOffset: { width: 0, height: 1 },
      elevation: 3,
    },
    medium: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      shadowOffset: { width: 0, height: 2 },
      elevation: 5,
    },
    high: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      shadowOffset: { width: 0, height: 3 },
      elevation: 7,
    },
  },

};
