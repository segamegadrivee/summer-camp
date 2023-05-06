import logo from '../assets/Logo1.svg';
import burger from '../assets/burger-menu.svg';


const Header = () => {
    return (
        <header>
            <div className="header__container container">

                <img className='header__logo' src={logo} alt="logo" />

                <nav>
                    <ul className='header__nav'>
                        <li><a className='header__nav-item' href="#">Home</a></li>
                        <li><a className='header__nav-item' href="#">About</a></li>
                        <li><a className='header__nav-item' href="#">For Parents</a></li>
                        <li><a className='header__nav-item' href="#">Contact</a></li>
                        <li><a className='header__nav-item' href="#">Camps</a></li>
                    </ul>
                </nav>

                <span className='header__language'>EN</span>

                <img className='header__menu' src={burger} alt="menu" />
            </div>
        </header>
    )
}

export default Header;