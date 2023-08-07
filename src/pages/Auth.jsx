import imgAuth from '../assets/img/img-auth.png'
import logo from '../assets/img/logo.png'
import { MyInput } from '../components/UI/Input/myInput'
import { MyButton } from '../components/UI/myButton/MyButton';
import { useState } from 'react';
import { IconBlur, IconPassword } from '../components/UI/iconBlur/IconBlur';
import { useNavigate } from "react-router-dom";
import { FIRST_LOGIN_ROUTE } from '../utils/consts';
import { IconError } from '../components/UI/IconError/IconError';


export const Auth = () => {
    // const [firstAuth, setFirstAuth] = useState(false)
    // const navigate = useNavigate();

    const [valueLogin, setValueLogin] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const [validLogin, setValidLogin] = useState(null);
    const [validPassword, setValidPassword] = useState(null);

    const [type, setType] = useState('password');
    const [colorBtnBlur, setColorBtnBlur] = useState('rgba(33, 37, 41, 1)');

    const [textError, setTextError] = useState('');

    function isvalidLogin(str) {
        return /\w@[\w\d][-_\w\d]+\.\w/.test(str);
    }

    function isvalidPassword(str) {
        return /^(?=.*[A-Za-z0-9!#$%&_-]).{6,}$/.test(str);
    }

    function clickpassword(e) {
        e.preventDefault()
        if (type === 'password') {
            setType('text');
            setColorBtnBlur('rgba(176, 102, 255, 1)');
        }
        if (type === 'text') {
            setType('password');
            setColorBtnBlur('rgba(33, 37, 41, 1)');
        }
    }

    function te() {
        setTextError('');
    }

    return (
        <div className="container-Auth">
            <div className="container-form">
                <form className='form-auth' action="">
                    <img className='img-logo' src={logo} alt="MegaLife" />
                    <h3 className='form-title'>Авторизация в MegaLife</h3>
                    <MyInput 
                        placeholderTitle={'Логин'}
                        typeValue='text' 
                        funcvalid={validLogin}
                        onChange = {(e) => setValueLogin(e.target.value)}
                        onBlur={(e) => {
                            if (e.target.value === '') {
                                setValidLogin(null)
                                return;
                            } else {
                                if (isvalidLogin(valueLogin)) {
                                    setValidLogin(true)
                                } else {
                                    setValidLogin(false)
                                }
                            }
                        } }
                        valid={validLogin}
                    />
                    <div className='container__with__icon'>
                        <MyInput 
                            placeholderTitle={'Пароль'} 
                            type= {type}
                            icon={true}
                            onChange = {(e) => setValuePassword(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value === '') {
                                    setValidPassword(null)
                                    return;
                                } else {
                                    if (isvalidPassword(valuePassword)) {
                                        setValidPassword(true)
                                    } else {
                                        setValidPassword(false)
                                    }
                                }
                            }}
                            // OnFocus={te()}
                            valid={validPassword}
                            valuePassword={valuePassword}
                        />
                        <button 
                            className="btn-password"
                            onClick={(e) => clickpassword(e)}
                            disabled={valuePassword === ''}
                        >
                            <IconBlur color={colorBtnBlur}/>
                        </button>
                    </div>
                   
                    <div className="container__info">
                            <span className='info__error'>{textError}</span>
                        <p className='forgot-password'> <a href="!#">Забыли пароль?</a></p>
                    </div>
                        <MyButton 
                            onClick={(e) => {
                                e.preventDefault();
                                if (valueLogin === '') {
                                    setValidLogin(false);
                                    setTextError(<><IconError /> Заполните все поля</>);
                                }
                                if (valuePassword === '') {
                                    setValidPassword(false);
                                    setTextError(<><IconError /> Заполните все поля</>);

                                }
                                if (validLogin === false  || validPassword === false) {
                                    setTextError(<><IconError />Некорректный логин или пароль</>);

                                }
                                if (validLogin && validPassword) {
                                    console.log(validLogin , validPassword)

                                    setTextError('');
                                    // setFirstAuth(true)
                                    // navigate(FIRST_LOGIN_ROUTE)
                                }
                            }}
                        >
                            Войти
                        </MyButton>
                    <p  className="form-info">Нажимая кнопку, я соглашаюсь с условиями<br></br> <a href='!#' className='convention'>Пользовательского соглашения</a> </p>
                </form>

            </div>
            <div className="container-decor">
                    <img  className="img-auth" src={imgAuth} alt="Девочка" />   
            </div>
        </div>
    )
}