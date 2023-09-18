import imgAuth from '../assets/img/img-auth.png'
import logo from '../assets/img/logo.png'
import { MyInput } from '../components/UI/Input/myInput'
import { MyButton } from '../components/UI/myButton/MyButton';
import { useState } from 'react';
import { IconBlur, IconPassword } from '../components/UI/iconBlur/IconBlur';
import { useNavigate } from "react-router-dom";
import { FIRST_LOGIN_ROUTE, RESET_PASSWORD_ROUTE } from '../utils/consts';
import { IconError } from '../components/UI/IconError/IconError';
import { IconCloseBlur}  from '../components/UI/iconCloseBlur/IconCloseBlur';
import { observer } from 'mobx-react-lite';


export const Auth = observer(() => {
    const [firstAuth, setFirstAuth] = useState(false)
    const [isShowIconBlur, setIsShowIconBlur] = useState(false);
    const navigate = useNavigate();

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
        if (/\s/.test(str)) {
            return false;
          }
          return /^(?=.*[A-Za-z0-9!#$%&_-]).{6,}$/.test(str);
    }

    function clickpassword(e) {
        e.preventDefault()
        if (type === 'password') {
            setType('text');
            setIsShowIconBlur(true);
            setColorBtnBlur('rgba(155, 155, 155, 1)');
        }
        if (type === 'text') {
            setType('password');
            setIsShowIconBlur(false);
            setColorBtnBlur('rgba(33, 37, 41, 1)');
        }
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
                        valueInput={valueLogin}
                        onFocus={() => {
                            if(validLogin === false) {
                                setValidLogin(null);
                                setValidPassword(null);
                                setTextError('');
                            }
                        }}
                        valid={validLogin}
                    />
                    <div className='container__with__icon'>
                        <MyInput 
                            placeholderTitle={'Пароль'} 
                            type= {type}
                            icon={true}
                            onChange = {(e) => setValuePassword(e.target.value)}
                            valueInput={valuePassword}
                            onFocus={() => {
                                if(validPassword === false) {
                                    setValidLogin(null);
                                    setValidPassword(null);
                                    setTextError('');
                                }
                            }}
                            valid={validPassword}
                            valuePassword={valuePassword}
                        />
                        <button 
                            className="btn-password"
                            onClick={(e) => clickpassword(e)}
                            disabled={valuePassword === ''}
                        >   
                            {isShowIconBlur ?
                                <IconBlur 
                                    color={colorBtnBlur}
                                />
                                :
                                <IconCloseBlur 
                                    color={colorBtnBlur}
                                />
                            }
                        </button>
                    </div>
                   
                    <div className="container__info">
                            <span className='info__error'>{textError}</span>
                        <p className='forgot-password'> 
                            <span className='toPage' onClick={()=> navigate(RESET_PASSWORD_ROUTE)}> 
                                Забыли пароль?
                            </span>
                        </p>
                    </div>
                        <MyButton 
                            onClick={(e) => {
                                e.preventDefault();
                                if (valueLogin === '' || valuePassword === '') {
                                    setValidLogin(false);
                                    setValidPassword(false);
                                    setTextError(<><IconError />Заполните все поля</>); 
                                    return;
                                }
                                if(!isvalidLogin(valueLogin) || !isvalidPassword(valuePassword)) {
                                    setValidLogin(false);
                                    setValidPassword(false);
                                    setTextError(<><IconError />Некорректный логин или пароль</>);

                                }
                                if (isvalidLogin(valueLogin) && isvalidPassword(valuePassword)) {
                                    console.log(validLogin , validPassword)

                                    setTextError('');
                                    setValidLogin(true);
                                    setValidPassword(true);
                                    setFirstAuth(true);
                                    navigate(FIRST_LOGIN_ROUTE)
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
})