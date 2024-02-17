import Jacket from '../../assets/img/Jacket.png'
import Strelochka from '../../assets/img/Strelochka.svg';


import '../../scss/components/home2Slider.scss';

function Slider(){
    return(
        <div className="Home2Slider">
            <div className="container">
                <div className="Home2Slider__content">
                    <div className="Home2Slider__strelochka">
                        <img src={Strelochka} alt="Strelochka" />
                    </div>
                    <div className="Home2Slider__Slider-content">
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                        <div className="Home2Slider__kartochka-img">
                            <div className='Home2Slider__kartochka-block'>
                                <img className="Home2Slider__img" src={Jacket} alt="#"/>
                            </div>
                            <p className="Home2Slider__text">Куртки</p>
                        </div>
                    </div>


                    <div className="Home2Slider__strelochka2">
                        <img src={Strelochka} alt="Strelochka" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Slider;