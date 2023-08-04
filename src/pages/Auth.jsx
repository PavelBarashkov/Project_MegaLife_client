import imgAuth from '../assets/img/img-auth.png'
import logo from '../assets/img/logo.png'
import { MyInput } from '../components/UI/Input/myInput'
import iconPassword from "../assets/img/icon-password.svg";
import { MyButton } from '../components/UI/myButton/MyButton';
import { useState } from 'react';

export const Auth = () => {
    const [valueLogin, setValueLogin] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const [validLogin, setValidLogin] = useState(null);
    const [validPassword, setValidPassword] = useState(null);


    function isvalidLogin(str) {
        return /\w@[\w\d][-_\w\d]+\.\w/.test(str);
    }

    function isvalidPassword(str) {
        return /^(?=.*[A-Za-z0-9!#$%&_-]).{6,}$/.test(str);
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
                    <MyInput 
                        placeholderTitle={'Пароль'} 
                        typeValue='password'
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
                        } }
                        valid={validPassword}
                        valuePassword={valuePassword}
                    />
                    
                    <p className='forgot-password'>Забыли пароль?</p>
                        <MyButton 
                            onClick={(e) => {
                                e.preventDefault();
                                if (valueLogin === '') {
                                    setValidLogin(false);
                                }
                                if (valuePassword === '') {
                                    setValidPassword(false);
                                }
                                if (validLogin && validPassword) {
                                    console.log(validLogin , validPassword)
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