    import classes from "./MyInput.module.css";

    export const MyInput = ({ placeholderTitle, valid, valuePassword, ...props}) => {


    return (
        <input
            {...props}
            className={`${classes.myInput} ${valid ? classes.valid : valid === false ? classes.invalid : ""}` }
            placeholder={placeholderTitle}
        />

    );
    };
