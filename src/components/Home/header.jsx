import { Link } from "react-router-dom";

import Logo from '../../assets/img/Logo.svg';
import StrelkaVniz from '../../assets/img/StrelkaVniz.svg';
import FreeAuto from '../../assets/img/FreeAuto.svg';
import OplataKarta from '../../assets/img/OplataKarta.svg';
import Vector from '../../assets/img/Vector.svg';

import '../../scss/components/header.scss';


function Header() {
    return (

        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <img className="header__img" src={Logo} alt="Логотип" />
                        <p className='header__text'>Ваш регион доставки: Москва</p>
                        <img className="header__img" src={StrelkaVniz} alt="" />
                    </div>
                        <nav className="header__nav">
                            <ul className="header__nav-ul">
                                <Link to="/index2">
                                    <li className="header__nav-list">Магазины</li>
                                </Link>
                                <Link to="/index3">
                                <li className="header__nav-list">Помощь</li>
                                </Link>
                                <Link to="/index3">
                                <li className="header__nav-list">Блоги</li>
                                </Link>
                            </ul>
                        </nav> 
                        <nav className="header__nav2">
                            <ul className="header__nav-ul2">
                                <div className="header__nav-ul2">
                                    <img src={Vector} alt="#" />
                                    <li className="header__nav-list2">Бесплатная доставка *</li>
                                </div>
                                <div className="header__nav-ul2">
                                    <img src={OplataKarta} alt="#" />
                                    <li className="header__nav-list2">Оплата при получении</li>
                                </div>
                                <div className="header__nav-ul2">
                                    <img src={Vector} alt="#" />
                                    <li className="header__nav-list2">Возврат в течение 14 дней</li>
                                </div>
                            </ul>
                        </nav>
                </div>
            </div>
            
        </div>
        
    )
}

export default Header;