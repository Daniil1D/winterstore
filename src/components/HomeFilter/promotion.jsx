import Home2Foto from '../../assets/img/Home2Foto.png'
import '../../scss/components/promotion.scss';

function promotion(){
    return(
        <div className="promotion">
            <div className="container">
                <div className="promotion__content">
                    <div className="promotion__title">Главная / Мужчинам / Сноуборд</div>
                    <div className="promotion__block-img">
                    <div className="promotion__img">
                        <img src={Home2Foto} alt="img"/>
                        <p className='promotion__text'>Название акции</p>
                    </div>
                    <div className="promotion__img">
                        <img src={Home2Foto} alt="img"/>
                        <p className='promotion__text'>Название акции</p>
                    </div>
                    <div className="promotion__img">
                        <img src={Home2Foto} alt="img"/>
                        <p className='promotion__text'>Название акции</p>
                    </div>
                    </div>
                   
                </div> 
            </div>
        </div>
    )
}

export default promotion;