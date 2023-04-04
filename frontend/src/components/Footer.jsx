import logo from '../assets/Logo1.svg';

const Footer = () => {
    return (
        <footer>

            <div className="footer__container container">
                <div className="footer__location">
                    <img className='footer__logo' src={logo} alt="logofooter" width={180} height={44} />
                    <span>Location</span>
                    <span>704 6 St NE Calgary, Alberta Canada</span>
                    <a href="https://goo.gl/maps/qCRRCdG6Zu96nEmQ7">Go to map</a>
                </div>

                <div className="footer__contact">
                    <span>Contact phone number</span>
                    <a href="tel:+14030000000">+1 (403) 000-0000</a>
                    <a href="tel:+14030000000">+1 (403) 000-0000</a>

                    <span>Contact e-mail</span>
                    <a href="mailto:summercapm@gmail.com">summercapm@gmail.com</a>
                </div>

                <div className="footer__social">
                    <span>Follow us</span>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <a href="">About</a>
                    <a href="">For Parents</a>
                    <a href="">Volunteer work</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;