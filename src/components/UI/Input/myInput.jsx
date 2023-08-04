    import { useEffect,useState } from "react";
    import classes from "./MyInput.module.css";
    import { IconPassword } from "../iconPassword/IconPassword";

    export const MyInput = ({ placeholderTitle, typeValue, icon, valid, valuePassword, ...props}) => {
        const [type, setType] = useState(typeValue);
        const [colorBtnPassword, setColorBtnPassword] = useState('rgba(33, 37, 41, 1)');

        function clickpassword(e) {
            e.preventDefault()
            if (type === 'password') {
                setType('text');
                setColorBtnPassword('rgba(176, 102, 255, 1)');
            }
            if (type === 'text') {
                setType('password');
                setColorBtnPassword('rgba(33, 37, 41, 1)');
            }
            if (valuePassword.length === 0) {
                setColorBtnPassword('rgba(33, 37, 41, 1)'); 
            }
        }
        useEffect(() => {

        }, [type])

    return (
        <div className={classes.container}>
        <input
            {...props}
            className={`${classes.myInput} ${valid ? classes.valid : valid === false ? classes.invalid : ""}` }
            placeholder={placeholderTitle}
            type={type}

        />
        {icon ? ( 
            <button 
                className={classes.btnPassword}
                onClick={(e) => {
                    clickpassword(e)
                }}
            >
            <IconPassword color={colorBtnPassword}/>
            </button>
        ) : null}
        </div>
    );
    };
