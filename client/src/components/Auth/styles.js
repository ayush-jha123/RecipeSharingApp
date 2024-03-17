import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    paper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop: '160px',
        padding:'20px',
        height:'510px'
    },
    formData: {
        display:'flex',
        flexDirection:'column',
        width: '100%', // Fix IE 11 issue.
        marginTop: '50px',
        gap:'7px'
      },
    text:{
        display:'flex',
        gap:'7px'
    },
    text2:{
        display:'flex',
        flexDirection:'column',
        gap:'7px'
    }   
}))
// paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(2),
//   },
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   googleButton: {
//     marginBottom: theme.spacing(2),
//   },