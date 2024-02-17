import Foto from '../../assets/img/Foto.jpg';
import SliderFoto from '../../assets/img/SliderFoto.jpg';
import SliderFoto2 from '../../assets/img/SliderFoto2.jpg';


 
import '../../scss/components/Slider.scss';


function Slider() { 
    return (  
        <div className="Slider">
            <div className="container">
                <div className="Slider__content">
                    <div className="Slider__slider">
                        <input type="radio" className='Slider__input' name='r' id='r1' checked/>
                        <input type="radio" className='Slider__input' name='r' id='r2'/>
                        <input type="radio" className='Slider__input' name='r' id='r3'/>
                        
                        <div className='Slider__slide s1'>
                            <img  src={Foto} alt="Логотип"/>
                            <div className='Slider__block'>
                                <p className='Slider__text'>WINTER SALE ДО -70%</p>
                            </div>
                        </div>
                        <div className='Slider__slide s2'>
                            <img  src={SliderFoto} alt="Логотип"/>
                        </div>
                        <div className='Slider__slide s3'>
                            <img  src={SliderFoto2} alt="Логотип"/>
                        </div>
                    </div>
                    <div className="Slider__navigation">
                        <label htmlFor="r1" className="Slider__bar"/>
                        <label htmlFor="r2" className="Slider__bar"/>
                        <label htmlFor="r3" className="Slider__bar"/>
                    </div>
                </div>
               
            </div>
           
        </div>

    )
}

export default Slider;