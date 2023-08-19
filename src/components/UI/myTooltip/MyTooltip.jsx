import classes from "./MyTooltip.module.css";

export const MyTooltip = ({...props}) => {

    // const {top, left} = event.getBoundingClientRect();

    return (
        <div {...props} className={classes.myTooltip}>
            <p className={classes.first_p}>Пароль должен содержать минимум 6 символов</p>
            <p>Пароль должен:<br></br>
                — Состоять как минимум из 6 символов<br></br>
                — Содержать допутимые символы:<br></br>A-Z, a-z, 0-9, ! , # ,$ ,%, &, _ , -
            </p>
        </div>
    )
}