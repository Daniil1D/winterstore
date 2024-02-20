import React from 'react';


import KartochkaNew from '../../assets/img/KartochkaNew.png';
import Krestik from '../../assets/img/Krestik.svg';
import Plus from '../../assets/img/Plus.svg';
import Minus from '../../assets/img/Minus.svg';

import '../../scss/components/Korzina.scss';

function Korzina(){
    const[count, setCount] = React.useState(0);
    const onClick = () => {
        setCount(count + 1);
    }
    return(
        <>
        <div className='Korzina'>
            <div className="container">
                <div className="Korzina__content">
                    <h1 className="Korzina__title">Корзина</h1>
                    <div className="Korzina__Tovar-block">
                        <div className="Korzina__Tovar">
                            <img className="Korzina__Img-Krestik" src={Krestik} alt="Krestik" />
                            <img className="Korzina__Img-KartochkaNew" src={KartochkaNew} alt="KartochkaNew" />
                            <div className="Korzina__Tovar-opisanie">
                                <h2 className="Korzina__Tovar-title">Сноуборд GNU Asym Carbon Credit Btx Multicolor</h2>
                                <p className="Korzina__Tovar-text">Артикул производителя: 19SN003</p>
                            </div>
                            <div className="Korzina__Tovar-count">
                                <img className="Korzina__Img-Minus" src={Minus} alt="Minus" />
                                <div className="Korzina__Count-block">
                                    <i className="Korzina__Count-number">{count}</i>
                                </div>
                                <img onClick={() => onClick()} className="Korzina__Img-Plus" src={Plus} alt="Plus" />
                            </div>
                            <i className="Korzina__Tovar-price">59 395 ₽</i>
                        </div>
                        <div className="Korzina__Tovar">
                            <img className="Korzina__Img-Krestik" src={Krestik} alt="Krestik" />
                            <img className="Korzina__Img-KartochkaNew" src={KartochkaNew} alt="KartochkaNew" />
                            <div className="Korzina__Tovar-opisanie">
                                <h2 className="Korzina__Tovar-title">Сноуборд GNU Asym Carbon Credit Btx Multicolor</h2>
                                <p className="Korzina__Tovar-text">Артикул производителя: 19SN003</p>
                            </div>
                            
                            <div className="Korzina__Tovar-count">
                                <img className="Korzina__Img-Minus" src={Minus} alt="Minus" />
                                <div className="Korzina__Count-block">
                                    <i className="Korzina__Count-number">1</i>
                                </div>
                                <img className="Korzina__Img-Plus" src={Plus} alt="Plus" />
                            </div>
                            <i className="Korzina__Tovar-price">59 395 ₽</i>
                        </div>
                        <div className="Korzina__Tovar">
                            <img className="Korzina__Img-Krestik" src={Krestik} alt="Krestik" />
                            <img className="Korzina__Img-KartochkaNew" src={KartochkaNew} alt="KartochkaNew" />
                            <div className="Korzina__Tovar-opisanie">
                                <h2 className="Korzina__Tovar-title">Сноуборд GNU Asym Carbon Credit Btx Multicolor</h2>
                                <p className="Korzina__Tovar-text">Артикул производителя: 19SN003</p>
                            </div>
                            
                            <div className="Korzina__Tovar-count">
                                <img className="Korzina__Img-Minus" src={Minus} alt="Minus" />
                                <div className="Korzina__Count-block">
                                    <i className="Korzina__Count-number">1</i>
                                </div>
                                <img className="Korzina__Img-Plus" src={Plus} alt="Plus" />
                            </div>
                            <i className="Korzina__Tovar-price">59 395 ₽</i>
                        </div>
                        <div className="Korzina__Tovar-Itog">
                            <i className="Korzina__Tovar-Itog-number">2</i>
                            <p className="Korzina__Tovar-Itog-text">товара на сумму</p>
                            <i className="Korzina__Tovar-Itog-price">118 790 ₽</i>
                        </div>
                        <div className="Korzina__Tovar-btn">
                            <button className="Korzina__btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Korzina;