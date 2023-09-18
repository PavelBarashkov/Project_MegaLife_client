import imgAuth from '../assets/img/img-auth.png'
import logo from '../assets/img/logo.png'
import { MyInput } from '../components/UI/Input/myInput'
import { MyButton } from '../components/UI/myButton/MyButton';
import { useEffect, useState } from 'react';
import { IconBlur } from '../components/UI/iconBlur/IconBlur';
import { useNavigate } from "react-router-dom";
import { FIRST_LOGIN_ROUTE } from '../utils/consts';
import { IconQuestion } from '../components/UI/iconQuestion/IconQuestion';
import { MyTooltip } from '../components/UI/myTooltip/MyTooltip';
import { IconError } from '../components/UI/IconError/IconError';
import { IconCloseBlur } from '../components/UI/iconCloseBlur/IconCloseBlur';

export const FirstAuth = () => {
    const navigate = useNavigate();

    const [isShowIconBlur, setIsShowIconBlur] = useState(false);
    const [isShowRepeatIconBlur, setIsShowRepeatIconBlur] = useState(false);


    const [valuePassword, setValuePassword] = useState('');
    const [valueRepeatPassword, setValueRepeatPassword] = useState('');

    const [validRepeatPassword, setValidRepeatPassword] = useState(null);
    const [validPassword, setValidPassword] = useState(null);

    const [typePassword, setTypePassword] = useState('password');
    const [typeRepeatPassword, setTypeRepeatPassword] = useState('password');

    const [colorBtnPassword, setColorBtnPassword] = useState('rgba(33, 37, 41, 1)');
    const [colorBtnRepeatPassword, setColorBtnRepeatPassword] = useState('rgba(33, 37, 41, 1)');
    const [colorbtnQuestion, setColorbtnQuestion] = useState('rgba(33, 37, 41, 1)');


    const [textError, setTextError] = useState('');
    const [textErrorDuble, setTextErrorDuble] = useState('');

    const [isShown, setIsShown] = useState(false);
    const [isShownErrorPassword, setIsShownErrorPassword] = useState(false);
    const [isShownErrorDublePassword, setIsShownErrorDublePassword] = useState(false);

    const [isInfoSubmit, setIsInfoSubmit] = useState(false);
    const [infoTextError, setInfoTextError] = useState('');

    const [test, setTest] = useState('')

    const [success, setSuccess] = useState(false);

    function isvalidPassword(str) {
        if (/\s/.test(str)) {
            return false;
          }
          return /^(?=.*[A-Za-z0-9!#$%&_-]).{6,}$/.test(str);
    }
    function isValidRepeatPassword(password, repeatPassword) {
        if (password === repeatPassword) {
            return true;
        } else {
            return false
        }
    }


    function clickpassword(e, type, setType,func) {
        e.preventDefault();
        if (type === 'password') {
            setType('text');
            func('rgba(155, 155, 155, 1)');
            setIsShowIconBlur(true);
        }
        if (type === 'text') {
            setType('password');
            setIsShowIconBlur(false);
            func('rgba(33, 37, 41, 1)');
        }
    }
    function clickpasswordRepeat(e, type, setType,func) {
        e.preventDefault();
        if (type === 'password') {
            setType('text');
            func('rgba(155, 155, 155, 1)');
            setIsShowRepeatIconBlur(true);
        }
        if (type === 'text') {
            setType('password');
            setIsShowRepeatIconBlur(false);
            func('rgba(33, 37, 41, 1)');
        }
    }

    useEffect(() => {

    },[valueRepeatPassword])

    return (   
        <>
            {success && (
                <div className="container-Auth">
                    <div className="container-form">
                        <form className='form-auth' action="">
                            <img className='img-logo' src={logo} alt="MegaLife" />
                            <h3 className='form-title'>Пароль успешно создан!</h3>
                            <MyButton>Войти</MyButton>
                        </form>
                    </div>
                    <div className="container-decor">
                        <img  className="img-auth" src={imgAuth} alt="Девочка" />   
                    </div>
                </div>
            )}
            {!success && (
                <div className="container-Auth">
                    <div className="container-form">
                        <form className='form-auth' action="">
                            <img className='img-logo' src={logo} alt="MegaLife" />
                            <h3 className='form-title'>Создание нового пароля</h3>
                            <div className='container__with__icon'>
                                <MyInput 
                                    placeholderTitle={'Введите новый пароль'}
                                    type= {typePassword}
                                    funcvalid={validPassword}
                                    valueInput={valuePassword}

                                    onChange = {(e) => {
                                        setValuePassword(e.target.value)
                                    }}
                                    onFocus={() => {
                                        if (validPassword === false) {
                                            setColorbtnQuestion('rgba(33, 37, 41, 1)');
                                        }
                                        setIsInfoSubmit(false);
                                        setIsShownErrorPassword(false);
                                        setValidRepeatPassword(null);
                                        setIsInfoSubmit(false);
                                        setIsShownErrorDublePassword(false)

                                    }}
                                    valid={validPassword}
                                />
                                <button 
                                    className="btn-password buble_icon"
                                    onClick={(e) => clickpassword(e, typePassword, setTypePassword, setColorBtnPassword)}
                                    disabled={valuePassword === ''}
                                >
                                    {isShowIconBlur ?
                                        <IconBlur 
                                            color={colorBtnPassword}
                                        />
                                        :
                                        <IconCloseBlur 
                                            color={colorBtnPassword}
                                        />
                                    }
                                </button>
                                <IconQuestion 
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                    color={colorbtnQuestion}
                                    className="icon_question"
                                />
                                {isShown && (
                                    <MyTooltip/>
                                )}
                            </div>
                            {isShownErrorPassword && (
                                <div className="container__info error-login">
                                    <span className='info__error'>{textError}</span>
                                </div>
                            )}
                    
                            <div className='container__with__icon'>
                                <MyInput 
                                    placeholderTitle={'Повторите новый пароль'} 
                                    type= {typeRepeatPassword}
                                    icon={true}
                                    valueInput={valueRepeatPassword}
                                    onChange = {(e) => {
                                        setTest(e.target)
                                        setValueRepeatPassword(e.target.value)
                                    } }
                                    onFocus={() => {
                                        if (validRepeatPassword === false) {
                                            setColorbtnQuestion('rgba(33, 37, 41, 1)');
                                        }
                                        setIsInfoSubmit(false);
                                        setIsShownErrorPassword(false);
                                        setValidRepeatPassword(null);
                                        setValidPassword(null);
                                        setIsInfoSubmit(false);
                                        setIsShownErrorDublePassword(false)

                                    }}
                                    valid={validRepeatPassword}
                                    valuePassword={valueRepeatPassword}
                                />
                                <button 
                                    className="btn-password"
                                    onClick={(e) => clickpasswordRepeat(e, typeRepeatPassword, setTypeRepeatPassword ,setColorBtnRepeatPassword)}
                                    disabled={valueRepeatPassword === ''}
                                >
                                    {isShowRepeatIconBlur ?
                                        <IconBlur 
                                            color={colorBtnRepeatPassword}
                                        />
                                        :
                                        <IconCloseBlur 
                                            color={colorBtnRepeatPassword}
                                        />
                                    }
                                </button>
                            </div>
                            {isShownErrorPassword && (
                                <div className="container__info">
                                    <p className='forgot-password'> <a style={{fontSize:12, textDecoration: 'underline', cursor: 'pointer'}} href="!#">Обратиться в техподдержку</a></p>
                                </div> 
                            )}
                            {isShownErrorDublePassword && (
                                <div className="container__info">
                                    <span className='info__error'>{textErrorDuble}</span>
                                    <p className='forgot-password'> <a style={{fontSize:12, textDecoration: 'underline', cursor: 'pointer'}} href="!#">Обратиться в техподдержку</a></p>
                                    
                                </div> 
                            )}
                            {isInfoSubmit && (
                                <div className="container__info">
                                    <span className='info__error'>{infoTextError}</span>
                                    <p className='forgot-password'> <a style={{fontSize:12, textDecoration: 'underline', cursor: 'pointer'}} href="!#">Обратиться в техподдержку</a></p>

                                </div> 
                            )}
                            <MyButton 
                                onClick={(e) => {
                                    e.preventDefault();

                                    if (valuePassword === '' || valueRepeatPassword === '') {
                                        setValidPassword(false);
                                        setValidRepeatPassword(false);
                                        setIsInfoSubmit(true);
                                        setColorbtnQuestion('rgba(255, 78, 100, 1)');
                                        
                                        setInfoTextError('Заполните все поля');
                                        return;
                                    }
                                    if (valuePassword.length <= 5) {
                                        setValidPassword(false);
                                        setValidRepeatPassword(false);
                                        setIsInfoSubmit(true);
                                        setColorbtnQuestion('rgba(255, 78, 100, 1)');

                                        setInfoTextError('Короткий пароль');
                                        return;
                                    }

                                    if(!isvalidPassword(valuePassword)) {
                                        setValidPassword(false);
                                        setValidRepeatPassword(false);
                                        setIsShownErrorPassword(true);
                                        setTextError(<><IconError /> Пароль содержит недопустимые символы</>);
                                        setColorbtnQuestion('rgba(255, 78, 100, 1)');
                                        if (setIsShownErrorPassword) {
                                            setIsInfoSubmit(false);
                                        }
                                        return;
                                    }

                                    if(isvalidPassword(valuePassword) && !isValidRepeatPassword(valuePassword, valueRepeatPassword)) {
                                        setValidPassword(true);
                                        setValidRepeatPassword(false);
                                        setIsShownErrorDublePassword(true);
                                        setTextErrorDuble('Пароли не совподают');
                                        return;
                                    }

                                    if (isvalidPassword(valuePassword) && isValidRepeatPassword(valuePassword, valueRepeatPassword)) {
                                        setTextError('');
                                        setValidPassword(true);
                                        setValidRepeatPassword(true);
                                        setIsInfoSubmit(false);
                                        setIsShownErrorDublePassword(false);
                                        setIsShownErrorPassword(false);
                                        setSuccess(true);
                                        // navigate(FIRST_LOGIN_ROUTE)
                                    }
                                }}
                            >
                                Далее
                            </MyButton> 
                            <p  className="form-info">Нажимая кнопку, я соглашаюсь с условиями<br></br> <a href='!#' className='convention'>Пользовательского соглашения</a> </p>
                        </form>
                    </div>
                    <div className="container-decor">
                        <img  className="img-auth" src={imgAuth} alt="Девочка" />   
                    </div>
                </div>
            )}
        </>
    )
}