import React, { useState } from 'react';
import '../../scss/components/Modal.scss';

function Modal({ active, setActive }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Отменяем действие по умолчанию (отправку формы)

        try {
            const response = await fetch('http://winterstore/Avtorization.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Используем тип содержимого формы
                },
                body: new URLSearchParams({ login, password }).toString(), // Передаем логин и пароль в правильном формате
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            console.log(data); // Выводим результат запроса в консоль

            // Закрываем модальное окно после успешной авторизации
            setActive(false);

            // Дополнительные действия, которые могут быть выполнены после успешной авторизации
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className={active ? 'Modal active' : 'Modal'} onClick={() => setActive(false)}>
            <div className='Modal__content' onClick={e => e.stopPropagation()}>
                <form className='Modal__Registration' onSubmit={handleLogin}>
                    <h1 className='Modal__Avtorization-title'>Войти</h1>
                    <div className='Modal__Avtorization-input'>
                        <input
                            className='Modal__input'
                            type="text"
                            placeholder='Логин'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className='Modal__Avtorization-input'>
                        <input
                            className='Modal__input'
                            type="password"
                            placeholder='Пароль'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label className="Modal__list-block">
                        <input type="checkbox" className="Modal__inputcheckbox"/>
                        <span className="Modal__custom">Запомнить меня</span>              
                    </label>
                    <div className="Modal__button">
                        <button className="Modal__btn">Войти</button>
                    </div>
                </form>
                 <form className='Modal__Registration' method="post">
                    <h1 className='Modal__Avtorization-title'>Зарегистрироваться</h1>
                    <div className='Modal__Avtorization-input'>
                        <input className='Modal__input' type="text" placeholder='Логин'/>
                    </div>
                    <div className='Modal__Avtorization-input'>
                        <input className='Modal__input' type="password" placeholder='Пароль'/>
                    </div>
                    <label className="Modal__list-block">
                        <input type="checkbox" className="Modal__inputcheckbox"/>
                        <span className="Modal__custom">Запомнить меня</span>              
                    </label>
                    <div className="Modal__button">
                        <button className="Modal__btn">Зарегистрироваться</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Modal;

