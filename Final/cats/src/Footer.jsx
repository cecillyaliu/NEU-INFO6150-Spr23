import './css/Footer.css'

function Footer({setPage}) {

  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <ul className="footer-nav__list">
          <li><a className="footer-nav__link" href="" onClick={ (e) => go(e, "Cats")}>
            See the Cats again!
          </a></li>
          <li><a className="footer-nav__link" href="" onClick={ (e) => go(e, "About")}>
            See our policies!
          </a></li>
          <li><a className="footer-nav__link" href="" onClick={ (e) => go(e, "Home")}>
            Send me back to the home!
          </a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer