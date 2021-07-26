
const theme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout, For Darkmode
  //! primary1: hsl(204,23.8%,95.9%)
  //! background1: #0F1624
  //! accent1: hsl(34.9,98.6%,72.9%)
  //! button: hsl(205.1,100%,36.1%)
  //! background2: hsl(232.7,27.3%,23.7%)
  //todo ${props => props.theme.colors.lightblack}

  colors: {
    pastelwhite: "rgb(242, 242, 242)", 
    gray: "hsl(204,23.8%,95.9%)",
    red: "#801414",
    redbrown: "#6b3030",
    orangeyellow: "hsl(34.9,98.6%, 55%)",
    yellow: "rgb(243, 210, 179)",
    darkgreen: "rgb(72, 98, 74)",
    skyblue: "rgb(135, 209, 210)",
    blue: "hsl(205.1,100%,36.1%)",
    buttonpurple: "rgb(122, 109, 211)",
    darkpurple: "hsl(232.7,27.3%,23.7%)",
    lightblack: "rgb(70, 65, 61)",
    black: "rgb(33, 28, 24)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1200px)',
    xl: 'screen and (max-width: 1600px)'
  },
}

export default theme;