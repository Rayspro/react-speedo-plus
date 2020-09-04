import { makeStyles } from "@material-ui/core";

export default makeStyles({
    root:{
        minHeight:100,
        minWidth:100,
        width:"50%",
        display:"flex",
        flexDirection:"column",
        height:"50%",
        display:"flex",
        marginLeft:50,
        position:"relative",
        alignItems:"center",
        justifyContent:"center"
    },
    outer:{
        width:"100%",
        height:0,
        position:"relative",
        backgroundColor:"#D6FFF3",
        paddingBottom:"50%",
        borderTopLeftRadius:"100% 200%",
        borderTopRightRadius:"100% 200%",
        overflow:"hidden"
    },
    border_fill:{
        position:"absolute",
        height:"100%",
        width:"inherit",
        top:"100%",
        left:0,
        transformOrigin:"center top",
        transform:"rotate(0.3turn)",
        backgroundColor:"#03C58D",
        transition:"all 900ms ease-in"
    },
    upper:{
        width:"50%",
        height:"100%",
        position:"absolute",
        backgroundColor:"white",
        top:"50%",
        left:"50%",
        transform:"translateX(-50%)",
        borderRadius:"50%"
    },
    arrow:{
        position:"absolute",
        width:"45%",
        top:"98%",
        backgroundColor:"#000000",
        height:"5px",
        left:"5%",
        transformOrigin:"center right",
        transform:"rotate(0.1turn)",
        borderTopLeftRadius:"150% 200%",
        borderBottomLeftRadius:"150% 200%",
        transition:"all 900ms ease-in"
    },
    text:{
        bottom:2,
        top:"99%",
        fontSize:"3vw",
        color:"#03C58D",
        fontWeight:"bold",
        userSelect:"none",
        transition:"all 200ms ease-in"
    }
})