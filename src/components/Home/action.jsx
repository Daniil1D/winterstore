import FotoAkcii from '../../assets/img/FotoAkcii.jpg';
import FotoAkcii2 from '../../assets/img/FotoAkcii2.jpg';




 
import '../../scss/components/action.scss';


function action() { 
    return (
        <div className="action">
            <div className="container">
                <div className="action__content">
                    <div className="action__block">
                        <img src={FotoAkcii} alt="" />
                        <div className="action__block-text">
                            <p className="action__text">НАЗВАНИЕ АКЦИИ №1</p>
                        </div>
                    </div>
                    <div className="action__block">
                        <img src={FotoAkcii2} alt="" />
                        <div className="action__block-text">
                            <p className="action__text">НАЗВАНИЕ АКЦИИ №2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default action;