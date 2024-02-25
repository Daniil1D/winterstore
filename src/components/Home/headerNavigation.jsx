import React, { useState } from 'react';
import '../../scss/components/headerNavigation.scss';
import Modal from './Modal';
import headerCategoryLogo from '../../assets/img/headerCategoryLogo.png';
import User from '../../assets/img/User.svg';
import Zvezda from '../../assets/img/Zvezda.svg';
import Korzina from '../../assets/img/Korzina.svg';
import Poisk from '../../assets/img/Poisk.svg';

function HeaderNavigation() {
    const [modalActive, setModalActive] = useState(false); // Изначально модальное окно скрыто
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = (status) => {
        setIsAuthenticated(status);
        setModalActive(false); // Закрываем модальное окно после успешной авторизации
    };

    return (
        <div className="headerNavigation">
            <div className="container">
                <div className="headerNavigation__content">
                    <ul className="headerNavigation__nav">
                        <li className="headerNavigation__nav-list">Мужчинам</li>
                        <li className="headerNavigation__nav-list">Женщинам</li>
                        <li className="headerNavigation__nav-list">Детям</li>
                    </ul>
                    <img className="headerNavigation__img" src={headerCategoryLogo} alt="Логотип" />
                    <div className="headerNavigation__block">
                        <div className="headerNavigation__block-kartochka" onClick={() => setModalActive(true)}>
                            <img src={User} alt="#" />
                            {/* Проверяем состояние аутентификации */}
                            {isAuthenticated ? (
                                <p className="headerNavigation__text">Аккаунт</p>
                            ) : (
                                <p className="headerNavigation__text">ВОЙТИ</p>
                            )}
                        </div>
                        <div className="headerNavigation__block-kartochka">
                            <img src={Zvezda} alt="#" />
                            <p className="headerNavigation__text">Избранное</p>
                        </div>
                        <div className="headerNavigation__block-kartochka">
                            <img src={Korzina} alt="#" />
                            <p className="headerNavigation__text">Корзина</p>
                        </div>
                        <div className="headerNavigation__block-kartochka">
                            <img src={Poisk} alt="#" />
                            <p className="headerNavigation__text">ПОИСК</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Передаем функцию для изменения состояния аутентификации в компонент Modal */}
            <Modal active={modalActive} setActive={setModalActive} handleAuthentication={handleAuthentication} />
        </div>
    );
}

export default HeaderNavigation;
