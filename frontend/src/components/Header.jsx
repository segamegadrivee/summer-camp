import logo from '../assets/Logo1.svg';
import burger from '../assets/burger-menu.svg';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="header__container container">

                <img className='header__logo' src={logo} alt="logo" />

                <nav>
                    <ul className='header__nav'>
                        <li><NavLink className='header__nav-item' to={'/'}>Home</NavLink></li>
                        <li><NavLink className='header__nav-item' to={'/about'}>About</NavLink></li>
                        <li><NavLink className='header__nav-item' to={'/parents'}>For Parents</NavLink></li>
                        <li><NavLink className='header__nav-item' to={'/contact'} >Contact</NavLink></li>
                        <li><NavLink className='header__nav-item' to={'/camps'}>Camps</NavLink></li>
                    </ul>
                </nav>

                <span className='header__language'>EN</span>

                <img className='header__menu' src={burger} alt="menu" />
            </div>
        </header>
    )
}

export default Header;