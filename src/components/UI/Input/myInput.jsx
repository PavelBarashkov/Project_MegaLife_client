import { useState } from "react";
import classes from "./MyInput.module.css";

    export const MyInput = ({ placeholderTitle, valueInput, valid, ...props}) => {

    return (
        <input
            {...props}
            className={`${classes.myInput} ${valid ? classes.valid : valid === false ? classes.invalid : ""} ${valueInput.length > 0 ? classes.active :  ""}` }
            placeholder={placeholderTitle}
        />

    );
    };
