import logo from '../assets/Logo1.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import telegram from '../assets/telegram.svg';

const Footer = () => {
    return (
        <footer>

            <div className="footer__container container">

                <div className="footer__first">
                    <img className='footer__logo' src={logo} alt="logofooter" width={180} />

                    <div className="footer__social-links">
                        <a href="https://www.facebook.com/abvmcalgary" target='_blank'><img src={facebook} alt="img" /></a>
                        <a href="https://t.me/uagreekcatholicincalgary" target='_blank'><img className='test' src={telegram} alt="img" /></a>
                    </div>

                </div>


                <div className="footer__social">
                    <a className='footer__title' href="#">Home</a>
                    <a className='footer__title' href="#">About</a>
                    <a className='footer__title' href="#">For Parents</a>
                    <a className='footer__title' href="#">Volunteer work</a>

                    {/* <button className='common__button'>Register</button> */}
                </div>

                <div className="footer__contact">
                    <div className="footer__contact-number">
                        <span className='footer__title'>Contact phone number</span>
                        <a className='footer__text' href="tel:+14032307013">+1 (403) 230-7013</a>
                    </div>
                    <div className="footer__contact-email">
                        <span className='footer__title'>Contact e-mail</span>
                        <a className='footer__text' href="mailto:camp@abvmcalgary.com">camp@abvmcalgary.com</a>
                    </div>
                </div>


                <div className="footer__location">
                    <span className='footer__title' >Location</span>
                    <span className='footer__text'>704 6 St NE Calgary,<br />
                        Alberta Canada, T2E 3Y7</span>
                    <a className='footer__maplink' href="https://goo.gl/maps/qCRRCdG6Zu96nEmQ7" target="_blank">Go to map</a>
                </div>


            </div>

        </footer>
    )
}

export default Footer;