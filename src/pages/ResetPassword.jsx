import imgAuth from '../assets/img/img-auth.png'
import logo from '../assets/img/logo.png'
import { MyInput } from '../components/UI/Input/myInput'
import { MyButton } from '../components/UI/myButton/MyButton';
import { useEffect, useState } from 'react';
import { IconBlur, IconPassword } from '../components/UI/iconBlur/IconBlur';
import { useNavigate } from "react-router-dom";
import { FIRST_LOGIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { IconError } from '../components/UI/IconError/IconError';
import { observer } from 'mobx-react-lite';


export const ResetPassword = observer(() => {
    const navigate = useNavigate();
    const [isInfoSubmit, setIsInfoSubmit] = useState(false);
    const [infoTextError, setInfoTextError] = useState('');

    const [valueEmail, setValueEmail] = useState('');

    const [validEmail, setValidEmail] = useState(null);
    const [valueButton, setValueButton] = useState('Далее')
    const [type, setType] = useState('password');
    const [count, setCount] = useState(60)
    const [valid, setValid] = useState(false);
    function isvalidEmail(str) {
        return /\w@[\w\d][-_\w\d]+\.\w/.test(str);
    }

    useEffect(() => {
        let timerId; 

        if (valid && count > 0) {
            timerId = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
        }

        if(count === 0) {
            setValid(false)
            setCount(60)
        }
        return () => clearInterval(timerId);
    }, [valid, count]);

    return (
        <div className="container-Auth">
            <div className="container-form">
                <form className='form-auth' action="">
                    <img className='img-logo' src={logo} alt="MegaLife" />
                    <h3 className='form-title reset'>Восстановление пароля</h3>
                    <div className="title-info">
                        <p className='text-reset'>Введите адрес электронной почты.</p>
                        <p className='text-reset'>Мы отправим ссылку на восстановление пароля на указанный адрес</p>
                    </div>
                    
                    <MyInput 
                        placeholderTitle={'Email'}
                        typeValue='text' 
                        funcvalid={isvalidEmail}
                        onChange = {(e) => setValueEmail(e.target.value)}
                        valueInput={valueEmail}
                        onFocus={() => {
                            if(validEmail === false) {
                                setValidEmail(null);
                                setIsInfoSubmit(false);
                                setInfoTextError('');
                            }
                        }}
                        valid={validEmail}
                    />
                    {isInfoSubmit && (
                                <div className="container__info container__info__reset">
                                    <span className='info__error'>{infoTextError}</span>
                                    <p className='forgot-password'> <span style={{fontSize:12, textDecoration: 'underline', cursor: 'pointer'}} >Обратиться в техподдержку</span></p>

                                </div> 
                            )}
                        <MyButton
                        disabled={valid}
                        style={{ marginTop: '16px' }}
                        onClick={(e) => {
                            e.preventDefault();
                            if (valueEmail === '') {
                                setValidEmail(false);
                                setIsInfoSubmit(true);
                                setInfoTextError(<><IconError /> Заполните все поля</>);
                                return;
                            }
                            if (!isvalidEmail(valueEmail)) {
                                setValidEmail(false);
                                setIsInfoSubmit(true);
                                setInfoTextError(<><IconError /> Данные введены некорректно</>);
                                return;
                            }

                            if (isvalidEmail(valueEmail)) {
                                setValidEmail(true);
                                setIsInfoSubmit(false);
                                setValid(true);
                            }
                        }}
                    >
                        {!valid && (
                            `Далее`
                        )}
                        {valid && (
                            `Отправить повторно через 00:${count < 10 ? '0' + count : count}`
                            
                        )}
                    </MyButton>
                    <p  className="form-info reset-info">Я вспомнил пароль. &nbsp;<br></br> <span onClick={() => navigate(LOGIN_ROUTE)} className='toPage coustom'> Вернуться</span> </p>
                </form>

            </div>
            <div className="container-decor">
                    <img  className="img-auth" src={imgAuth} alt="Девочка" />   
            </div>
        </div>
    )
})