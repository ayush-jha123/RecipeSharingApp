import { makeStyles } from '@mui/styles';

export default makeStyles((theme)=>({
    appBar:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    link:{
        textDecoration:'none',
        fontSize:'39px',
        color:'#ffa700',
        fontWeight:'500'
    },
    profile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'475px'
    }
}))