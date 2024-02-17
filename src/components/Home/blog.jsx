import Humen from '../../assets/img/Humen.png';
import Play from '../../assets/img/Play.svg';
import Strelochka from '../../assets/img/Strelochka.svg';





 
import '../../scss/components/blog.scss';


function blog() {  
    return (
        <div className="blog">
            <div className="container">
            <div className="blog__content">
                    <div className="blog__img">
                        <img className="blog__Humen" src={Humen} alt="Humen" />
                        <div className="blog__play">
                            <img className="blog__Start" src={Play} alt="Play" />
                        </div>
                        <div className="blog__Slider">
                            <img className="blog__Strelochka" src={Strelochka} alt="#" />
                        </div>
                    </div>
                    <div className="blog__block">
                            <h3 className="blog__title">Блоги</h3>
                            <h2 className="blog__title2">Очень преочень <br/> длинное название блога</h2>
                            <p className="blog__text">Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому.</p>
                            <p className="blog__text">Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому...</p>
                            <div className="blog__block-read">
                                <a className="blog__read" href="#">Читать продолжение</a>
                            </div>
                            <div className="blog__block-read">
                                <a className="blog__read" href="#">Все блоги</a>
                            </div>
                            <div className="blog__Slider-right">
                                <img className="blog__Strelochka-right" src={Strelochka} alt="#" />
                            </div>
                    </div>
                </div>
            </div>
               
        </div>

    )
}
export default blog;