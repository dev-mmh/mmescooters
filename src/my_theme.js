import { createTheme } from '@mui/material/styles';
// import { color } from 'framer-motion';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
    },
    secondary: {
      main: '#FF3D00', // Orange
    },
  },
  typography: {
    h6: { 
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "bold",
      letterSpacing: "1px",
      textTransform: "uppercase",
      background: "linear-gradient(45deg, #D37E24, #FF5733)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    hero_section_heading:{
        // fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: 300,
        color: "#D37E24",
        letterSpacing: "0.5px",
        textAlign: "center",
        // textShadow: "1px 1px 1px #555555", 
    },

        navigation_text:{
            fontFamily:"'Poppins', sans-serif",
            color:"#555555",
            textAlign:"center",
            fontWeight: 500,
            // textShadow:"1px 1px 2px #555555",
        },
        
    welcome_text:{
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: 300,
        color: "#555555",
        // letterSpacing: "0.5px",
        textAlign: "center",
        // textShadow: "1px 1px 4px #555555",
     },
      
    subtitle1: { 
      fontFamily: "'Poppins', sans-serif",
      fontStyle: "italic",
      fontWeight: 500,
      color: "#444",
      textShadow: "1px 1px 4px rgba(0,0,0,0.1)",
    },
  },
});

export default theme;