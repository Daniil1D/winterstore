import KartochkaNew from '../../assets/img/KartochkaNew.png';
import Logo2 from '../../assets/img/Logo2.svg';
import Zvezda from '../../assets/img/Zvezda.svg';

import '../../scss/components/toBuy.scss';

function ToBuy(){
    return(
        <>
        <div className='Kartochka'>
            <div className="container">
                <div className="Kartochka__content">
                    <div className='Kartochka__Block-foto'>
                        <ul className='Kartochka__nav'>
                            <li className='Kartochka__nav-list active'> <img className='Kartochka__img' src={KartochkaNew} alt="KartochkaNew" /></li>
                            <li className='Kartochka__nav-list'> <img className='Kartochka__img' src={KartochkaNew} alt="KartochkaNew" /></li>
                            <li className='Kartochka__nav-list'> <img className='Kartochka__img' src={KartochkaNew} alt="KartochkaNew" /></li>
                            <li className='Kartochka__nav-list'> <img className='Kartochka__img' src={KartochkaNew} alt="KartochkaNew" /></li>
                            <li className='Kartochka__nav-list'> <img className='Kartochka__img' src={KartochkaNew} alt="KartochkaNew" /></li>
                        </ul>
                    </div>
                    
                    <div className='Kartochka__Block-foto2'>
                        <div className='Kartochka__Block1'>
                            <img className='Kartochka__img-active' src={KartochkaNew} alt="KartochkaNew" />
                        </div>
                    </div>
                    <div className='Kartochka__Opisanie'>
                        <h4 className='Kartochka__title'>Артикул производителя: 19SN003</h4>
                        <div className='Kartochka__Opisanie-blcok1'>
                            <img className='Kartochka__Opisanie-img' src={Logo2} alt="Logo" />
                            <div className='Kartochka__Zvezda'>
                                <img src={Zvezda} alt="Zvezda" />
                                <img src={Zvezda} alt="Zvezda" />
                                <img src={Zvezda} alt="Zvezda" />
                                <img src={Zvezda} alt="Zvezda" />
                                <img src={Zvezda} alt="Zvezda" />
                            </div>
                            <p className='Kartochka__text'>24 отзыва</p>
                            <div className='Kartochka__Block-zvezda'>
                                <img src={Zvezda} alt="Zvezda" />
                            </div>
                        </div>
                        <h2 className='Kartochka__title2'>Сноуборд GNU Asym Carbon Credit Btx Multicolor</h2>
                        <div className='Kartochka__price'>
                            <i className='Kartochka__price-text'>59 395 ₽</i>
                        </div>
                        
                        <div className='Kartochka__linia'></div>

                        <h4 className='Kartochka__title'>Цвет: Цветной</h4>
                        <div>
                            <img className='Kartochka__img2 active' src={KartochkaNew} alt="KartochkaNew" />
                            <img className='Kartochka__img2' src={KartochkaNew} alt="KartochkaNew" />
                            <img className='Kartochka__img2' src={KartochkaNew} alt="KartochkaNew" />
                            <img className='Kartochka__img2' src={KartochkaNew} alt="KartochkaNew" />
                        </div>
                        <div className='Kartochka__button'>
                            <a className='Kartochka__btn' href="#">Добавить в корзину</a>
                        </div>
                    </div>
                </div>
               
               
            </div>
           
           
            
        </div>
        </>
    )
}

export default ToBuy;