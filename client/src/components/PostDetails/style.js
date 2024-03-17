import { makeStyles } from "@mui/styles";

export default makeStyles(theme=>({
    content:{
        display:'flex',
    },
    main:{
      marginTop:'25px',
      padding:'10px',
      borderRadius:'5px'
    },
    image:{
        width:'45%',
        height:'400px'
    },
    About:{
        width:'60%',
        display:'flex',
        flexDirection:'column',
        gap:'20px'
    }
}))