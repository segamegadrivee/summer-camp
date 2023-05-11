import logo from '../assets/Logo1.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import telegram from '../assets/telegram.svg';
import { Link } from 'react-router-dom';

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
                    <Link className='footer__title' to={'/'}>Home</Link>
                    <Link className='footer__title' to={'/about'}>About</Link>
                    <Link className='footer__title' to={'/parents'}>For Parents</Link>
                    <Link className='footer__title' to={'/contact'}>Contact</Link>
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