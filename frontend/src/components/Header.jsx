import logo from '../assets/Logo1.svg';

const Header = () => {
    return (
        <header>
            <div className="header__container container">
                <img src={logo} alt="logo" />

                <nav>
                    <ul className='header__nav'>
                        <li><a className='header__nav-item' href="#">Home</a></li>
                        <li><a className='header__nav-item' href="#">About</a></li>
                        <li><a className='header__nav-item' href="#">For Parents</a></li>
                        <li><a className='header__nav-item' href="#">Contact</a></li>
                    </ul>
                </nav>

                <span className='header__language'>EN</span>

            </div>
        </header>
    )
}

export default Header;