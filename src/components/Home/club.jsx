import Humen2 from '../../assets/img/Humen2.png';
import Humen3 from '../../assets/img/Humen3.png';
import LogoClub from '../../assets/img/LogoClub.svg';
import ClubEmail from '../../assets/img/ClubEmail.svg';
import Email from '../../assets/img/Email.svg';
import Otpravit from '../../assets/img/Otpravit.svg';


import '../../scss/components/club.scss';


function club() {  
    return (
        <div className="club">
            <div className="container">
                <div className="club__content">

                        <div className="club__Humen">
                            <img className="club__Humen2-img" src={Humen2} alt="#" />
                            <div className="club__block">
                                <img className="club__block-img" src={LogoClub} alt="#"/>
                                <h2 className="club__title">Программа лояльности</h2>
                                <p className="club__text">Зарабатывайте баллы и получайте преимущества</p>
                                <div className="club__btn">
                                    <a href="#">Вступить в клуб</a>
                                </div>
                            </div>
                        </div>
                        <div className="club__Humen2">
                            <img className="club__Humen3-img" src={Humen3} alt="#" />
                            <div className="club__block">
                                <img className="club__block-img2" src={ClubEmail} alt="#" />
                                <h2 className="club__title2">Скидка -10%</h2>
                                <p className="club__text2">За подписку на наши новости</p>
                                <div className="club__input">
                                    <img className="club__img-Email" src={Email} alt="#"/>
                                    <input className="club__input-input" type="text" placeholder='Email' />
                                    <img className="club__img-Otpravit" src={Otpravit} alt="#"/>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
               
        </div>

    )
}
export default club;