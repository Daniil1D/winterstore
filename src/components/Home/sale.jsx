import NewAkcii from '../../assets/img/NewAkcii.png';
import Brend2 from '../../assets/img/Brend2.svg';




 
import '../../scss/components/sale.scss';


function sale() {  
    return (
        <div className="sale">
            <div className="container">
                <div className="sale__content">
                    <div className='sale__img'>
                        <img className='sale__img2' src={NewAkcii} alt="#" />
                        <img className='sale__img3' src={Brend2} alt="#" />
                    </div>
                    <h2 className="sale__title">Название акции</h2>
                    <div className="sale__block-text">
                        <p className="sale__text">Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому.</p> 
                    </div>
                    
                        

                    
                    
                </div>
            </div>
        </div>

    )
}
export default sale;