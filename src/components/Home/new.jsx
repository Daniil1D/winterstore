import KartochkaNew from '../../assets/img/KartochkaNew.png';
import Star from '../../assets/img/Star.svg';




 
import '../../scss/components/new.scss';


function New() { 
    return (
        <div className="new">
            <div className="container">
                <div className="new__content">
                   <h2 className="new__title">Новинки</h2>
                   <div className="new__blockKartochka">
                        <div className="new__kartochka">
                            
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                            
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star active'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        <div className="new__kartochka">
                            
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                                <div className='new__kartochka-skidka'>
                                    <i className='new__kartochka-skidka-price'>-50%</i>
                                </div>
                            
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price old">34392 ₽</i>
                                <i className="new__kartochka-price active">19999 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                                 
                        </div>
                        <div className="new__kartochka">
                            
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                           
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                        <div className="new__kartochka">
                            
                                <img className="new__kartochka-img" src={KartochkaNew} alt="#"/>
                           
                                <h2 className="new__kartochka-title">LIB TECH</h2>
                                <p className="new__kartochka-text">Мужской Сноуборд</p>
                                <i className="new__kartochka-price">34392 ₽</i>
                                <div className='new__kartochka-star'>
                                    <img src={Star} alt="#" />
                                </div>
                        </div>
                   </div>
                <div className='new__btn'>
                    <button className='new__button'>Показать больше</button>
                </div>
                </div>
            </div>
        </div>

    )
}
export default New;