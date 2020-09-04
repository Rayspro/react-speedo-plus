import React from "react";
import useStyles from "./style";

export default function Speed(props){
    const classes=useStyles();
    const [angel,setAngel]=React.useState(0);

    React.useEffect(()=>{
        const value=(props.value/100)*0.5;
        setAngel(value);
    },[])

    return(
        <div className={classes.root}>
            <div className={classes.outer}>
                <div className={classes.border_fill} style={{transform:`rotate(${angel}turn)`}}>
                </div>
                <div className={classes.upper}>
                </div>
                <div className={classes.arrow} style={{transform:`rotate(${angel}turn)`}}>
                </div>
            </div>
            <div className={classes.text}>
                <AnimatedNumber
                style={{color:"red"}}
                value={props.value}
                />
            </div>
        </div>
    )
}   