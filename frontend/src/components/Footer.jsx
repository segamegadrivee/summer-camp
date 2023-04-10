import logo from '../assets/Logo1.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
    return (
        <footer>

            <div className="footer__container container">
                <div className="footer__location">
                    <img className='footer__logo' src={logo} alt="logofooter" width={180} />

                    <span className='footer__title' >Location</span>
                    <span className='footer__text'>704 6 St NE Calgary, Alberta Canada</span>
                    <a className='footer__maplink' href="https://goo.gl/maps/qCRRCdG6Zu96nEmQ7" target="_blank">Go to map</a>
                </div>


                <div className="footer__contact">
                    <div className="footer__contact-number">
                        <span className='footer__title'>Contact phone number</span>
                        <a className='footer__text' href="tel:+14030000000">+1 (403) 000-0000</a>
                        <a className='footer__text' href="tel:+14030000000">+1 (403) 000-0000</a>

                    </div>
                    <div className="footer__contact-email">
                        <span className='footer__title'>Contact e-mail</span>
                        <a className='footer__text' href="mailto:summercapm@gmail.com">summercapm@gmail.com</a>
                    </div>
                </div>


                <div className="footer__social">
                    <div className="footer__social-links">
                        <span className='footer__maplink'>Follow us</span>
                        <a href="https://www.facebook.com/" target='_blank'><img src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com/" target='_blank'><img src={instagram} alt="" /></a>
                    </div>

                    <a className='footer__title' href="#">About</a>
                    <a className='footer__title' href="#">For Parents</a>
                    <a className='footer__title' href="#">Volunteer work</a>

                    {/* <button className='common__button'>Register</button> */}
                </div>


            </div>

        </footer>
    )
}

export default Footer;