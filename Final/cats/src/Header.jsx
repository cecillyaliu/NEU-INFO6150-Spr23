import './css/Header.css'
import { useState } from 'react';

function Header({setPage}) {

    const[showHamburger, setShowHamburger] = useState(false);

    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    function handleHamburger() {
        setShowHamburger(!showHamburger);
    }

    const menuShow = showHamburger ? "menu-open" : "menu";

    return (
        <header className='header'>
            <div className="title-container">
                <img
                    src="images/cat15.jpeg"
                    alt="cat looking at the front"
                    className='header-logo'
                />
                <h1 className='header-title'>Hello! Welcome to the Cats!</h1>
            </div>
            <nav>
                <ul className="header-nav__list">
                    <li><a className="header-nav__link" href="" onClick={ (e) => go(e, "Home")}>
                        Home
                    </a></li>
                    <li class="menu-item">
                        <button class="menu-button" type="button">About</button>
                        <ul class="submenu">
                            <li class="submenu-item"><a className="header-nav__link" href="" onClick={ (e) => go(e, "About")}>About us</a></li>
                            <li class="submenu-item"><a className="header-nav__link" href="" onClick={ (e) => go(e, "Home")}>Check the panels</a></li>
                            <li class="submenu-item"><a className="header-nav__link" href="" onClick={ (e) => go(e, "Cats")}>Visit the Cats</a></li>
                        </ul>
                    </li>
                    <li><a className="header-nav__link" href="" onClick={ (e) => go(e, "Cats")}>
                        Cats
                    </a></li>
                </ul>
            </nav>
            <div className="hamburger-menu">
                <button className="hamburger-button" aria-label="Hamburger-menu" onClick={handleHamburger}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <ul className={menuShow}>
                    <li>
                        <button className="hamburger-menu-button" type="button"><a href="" onClick={ (e) => go(e, "Home")}>Home</a></button>
                    </li>
                    <li>
                        <button className="hamburger-menu-button" type="button"><a href="" onClick={ (e) => go(e, "About")}>About</a></button>
                    </li>
                    <li>
                        <button className="hamburger-menu-button" type="button"><a href="" onClick={ (e) => go(e, "Cats")}>Cats</a></button>
                    </li>
                </ul>
            </div>
        </header>
    )
  }
  
  export default Header;