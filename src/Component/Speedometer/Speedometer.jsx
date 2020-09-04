import React from "react";
import useStyles from "./style";
import AnimatedNumber from "animated-number-react";

export default function Speed(props){
    const classes=useStyles();
    const [angel,setAngel]=React.useState(0);

    React.useEffect(()=>{
        setAngel(0);
        var value=(props.value/100)*0.5;
        setAngel(value);
    },[])

    return(
        <div className={classes.root}>
            <div className={classes.outer}>
                <div className={classes.border_fill} style={{transform:`rotate(${angel}turn)`,backgroundColor:props.meterColor}}>
                </div>
                <div className={classes.upper}>
                </div>
                <div className={classes.arrow} style={{transform:`rotate(${angel}turn)`,backgroundColor:props.tickColor}}>
                </div>
            </div>
            <div className={classes.text} style={{color:props.textColor}}>
                <AnimatedNumber
                    style={{color:"red"}}
                    delay={2*props.value}
                    formatValue={(number)=>`${parseInt(number)}${props.append}`}
                    value={props.value}
                />
            </div>
        </div>
    )
}   