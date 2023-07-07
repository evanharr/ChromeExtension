import { createTheme, styled } from '@mui/material/styles';
import { TextField, Button, Tab, Paper, Typography, Accordion, Radio } from '@mui/material';

//Keeping styles for MUI components here so they can be used for different functions
//Taken from Login.js

//Makes buttons green
const defaultButton = createTheme({
  
    palette: {
      primary: {
          main:'#282c34',
      },
    },
  });

export {defaultButton};

export const BoldButton = styled(Button)({
  fontWeight: 'medium',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17.5,
  textTransform: 'none'
})

export const VehicleButton = styled(Button)({
  fontWeight: 'medium',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17.5,
  textTransform: 'none',
  color:'white', 
  justifyItems:'left', 
  backgroundColor: '#303030'
})

export const BoldTab = styled(Tab)({
  fontWeight: 'medium',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 17.5,
  textTransform: 'none'
})

export const StyledPaper = styled(Paper)({
    p: '12px',
    borderColor: 'white',
    background:'#424242',
    color:'white',
    fontFamily: 'Roboto, sans-serif'
})

export const StyledTypography = styled(Typography)({
  
  marginTop:8,
  borderColor: 'white',
  color:'white',
  fontFamily: 'Roboto, sans-serif',

  fontSize:'10 px'
})
export const ListTypography = styled(Typography)({
  borderColor: 'white',
  color:'#282c34',
  fontFamily: 'Roboto, sans-serif',
  
  fontSize:'1em'
})

export const BoardTypography = styled(Typography)({
  borderColor: 'white',
  color:'#282c34',
  fontFamily: 'Roboto, sans-serif',
  
  fontSize:'.7em'
})

export const StyledAccordion = styled(Accordion)({
  maxWidth:'600px',
  justifyContent:'center',
  alignItems:'center',
  alignText:'center',
  backgroundColor: '#303030',
})

export const StyledRadio = styled(Radio)({
  '&, &.MuiRadio-colorSecondary': {
    color: 'white',
  },
  '&, &..Mui-checked': {
    color: 'blue',
  },
})
export const SearchTextField = styled(TextField) 
({
  align:'center',
    background:'white',
    margin: 0,  
    width: 100,
    borderRadius: 20,

    input:{
      color:"black",
      
    },
    "& input::placeholder": {
      fontSize:15,
    },
    "& label": {
      marginLeft: 5,
      color: "black",
      fontWeight:400
    },
    "&:hover label": {
      fontWeight: 700
    },
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
      align:'center',
      width:80
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: 2
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
});
//Sets textfield to white
export const StyledTextField = styled(TextField)({
    align:'center',
    background:'white',
    margin: 5,  
    width: 'auto',
    borderRadius: 30,

    input:{
      color:"black"
    },
    "& label": {
      color: "black"
    },
    "&:hover label": {
      fontWeight: 700
    },
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: 2
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  });

  export const ModalTextField = styled(TextField)({
    align:"center",
    background:'white',
    margin: 50,  
    borderRadius:30,
  
    input:{
      color:"black",
      width:"auto"
    },
    "& label": {
      color: "black"
    },
    "&:hover label": {
      fontWeight: 700
    },
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: 2
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  });