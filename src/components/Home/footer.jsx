import FooterLogo from '../../assets/img/FooterLogo.svg';
import FooterPochta from '../../assets/img/FooterPochta.svg';
import FooterOtpravit from '../../assets/img/FooterOtpravit.svg';
import AppStore from '../../assets/img/AppStore.png';
import GooglePlay from '../../assets/img/GooglePlay.png';
import QrCode from '../../assets/img/QrCode.png';
import Phone from '../../assets/img/Phone.svg';
import Twitter from '../../assets/img/Twitter.svg';
import Facebook from '../../assets/img/Facebook.svg';
import twitch from '../../assets/img/twitch.svg';
import Youtube from '../../assets/img/Youtube.svg';
import Instagram from '../../assets/img/Instagram.svg';



import '../../scss/components/footer.scss';


function footer() {  
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__top">
                        <div className="footer__logo">
                            <img className="footer__img" src={FooterLogo} alt="Logo" />
                            <h2 className="footer__title">BOARDRIDERS</h2>
                        </div>
                        <div className="footer__block">
                            <img className="footer__img-Email" src={FooterPochta} alt="Email"/>
                            <p className="footer__text">Подпишись на рассылку и получи <span>-10%</span> скидку</p>
                            <img className="footer__img-Otpravit" src={FooterOtpravit} alt="Отправить" />
                        </div>
                    </div>
                    <div className="footer__linia"></div>
                        <ul className="footer__navv">
                            <li className='footer__nav-listt'>Доступ к ранним релизам в приложении</li>
                            <li className='footer__nav-listt'>Контакты</li>
                            <li className='footer__nav-listt'>Помощь</li>
                            <li className='footer__nav-listt'>Компания</li>
                            <li className='footer__nav-listt'>Boardriders Inc.</li>
                        </ul>
                    <div className="footer__center">
                        <div className="footer__block1">
                            <dir className="footer__img">
                                <div className="footer__img-AppStorer">
                                    <img className="footer__AppStorer" src={AppStore} alt="App Store"/> 
                                    <img className="footer__GooglePlay" src={GooglePlay} alt="Google Play"/>
                                </div>
                                <div className="footer__img-QrCode">
                                    <img src={QrCode} alt="Qr Code"/>
                                </div>
                            </dir>
                        </div>
                        <div className="footer__block2">
                            <div className="footer__Phone">
                                <img className="footer__img-Phone" src={Phone} alt="Phone"/>
                                <p className="footer__text">8 (800) 511-74-68</p>
                            </div>
                            <div>
                                <p className="footer__block2-text">Бесплатная горячая линия Ежедневно с 9 до 21</p>
                            </div>
                            <div className="footer__Phone">
                                <img className="footer__img-Phone" src={FooterPochta} alt="Pochta"/>
                                <p className="footer__text">Контактный Email</p>
                            </div>
                            <div>
                                <p className="footer__block2-text">info@brd.ru</p>
                            </div>
                        </div>
                        <div className="footer__block3">
                                <ul className="footer__nav">
                                    <a className='footer__nav-list' href="#"><li >Доставка</li></a>
                                    <a className='footer__nav-list' href="#"><li >Оплата</li></a>
                                    <a className='footer__nav-list' href="#"><li >Возврат</li></a>
                                    <a className='footer__nav-list' href="#"><li >Отзывы (2290)</li></a>
                                    <a className='footer__nav-list' href="#"><li >Акции и скидки</li></a>
                                </ul>
                        </div> 
                        <div className="footer__block4">
                                <ul className="footer__nav">
                                    <a href="#"></a><li className='footer__nav-list'>Контакты</li>
                                    <a href="#"></a><li className='footer__nav-list'>О boardriders</li>
                                    <a href="#"></a><li className='footer__nav-list'>Вакансии</li>
                                    <a href="#"></a><li className='footer__nav-list'>Публичная оферта</li>
                                </ul>
                        </div>
                        <div className="footer__block5">
                                <ul className="footer__nav">
                                    <a href="#"></a><li className='footer__nav-list'>Франчайзинг</li>
                                    <a href="#"></a><li className='footer__nav-list'>Quiksilver</li>
                                    <a href="#"></a><li className='footer__nav-list'>Roxy</li>
                                    <a href="#"></a><li className='footer__nav-list'>DC Shoes</li>
                                    <a href="#"></a><li className='footer__nav-list'>Boardriders Club</li>
                                </ul>
                        </div>
                    </div>
                    <div className="footer__linia"></div>
                    <div className="footer__bottom">
                        <div className="footer__bottom-img">
                            <img src={Twitter} alt="Twitter"/>
                            <img src={Facebook} alt="Facebook"/>
                            <img src={twitch} alt="twitch"/>
                            <img src={Youtube} alt="Youtube"/>
                            <img src={Instagram} alt="Instagram"/>
                        </div>
                        <div>
                        <p className="footer__bottom-text">© 2020 Brd.ru. Все права защищены</p>
                        </div>
                    </div>
                </div>
            </div>
               
        </div>

    )
}
export default footer;