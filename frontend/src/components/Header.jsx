import logo from '../assets/Logo1.svg';
import burger from '../assets/burger-menu.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }


    return (
        <header>
            <div className={`${hamburgerOpen ? 'blur' : ''}`}></div>
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

                <img className='header__menu' onClick={toggleHamburger} src={burger} alt="menu" />

            </div>


            <nav>
                <ul className={`burger__menu${hamburgerOpen ? ' burger__menu--show' : ''}`} >
                    <li><NavLink className='header__nav-item' to={'/'} onClick={() => setHamburgerOpen(false)}>Home</NavLink></li>
                    <li><NavLink className='header__nav-item' to={'/about'} onClick={() => setHamburgerOpen(false)}>About</NavLink></li>
                    <li><NavLink className='header__nav-item' to={'/parents'} onClick={() => setHamburgerOpen(false)}>For Parents</NavLink></li>
                    <li><NavLink className='header__nav-item' to={'/contact'} onClick={() => setHamburgerOpen(false)}>Contact</NavLink></li>
                    <li><NavLink className='header__nav-item' to={'/camps'} onClick={() => setHamburgerOpen(false)}>Camps</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;