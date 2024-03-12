import './css/Header.css'


function Header({setPage}) {

    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    return (
        <header className='header'>
            <img
                src="http://placekitten.com/100/100?image=1"
                alt="cat looking at the front"
                className='header-logo'
            />
            <h2 className='header-title'>This is the header</h2>
            <nav className='header__nav'>
                <ul className="header-nav__list">
                    <li><a className="header-nav__link" href="" onClick={ (e) => go(e, "Home")}>
                        Home
                    </a></li>
                    <li><a className="header-nav__link" href="" onClick={ (e) => go(e, "About")}>
                        About
                    </a></li>
                    <li><a className="header-nav__link" href="" onClick={ (e) => go(e, "Cats")}>
                        Cats
                    </a></li>
                </ul>
            </nav>
        </header>
    )
  }
  
  export default Header;