import menu from "./menu";
import "./css/GlobalNav.css";

function GlobalNav({className, setPage}) {

    function go(event, page) {
        event.preventDefault();
        setPage(page);
        console.log("page=", page);
    }    

    const list = menu.map ( item => {
        return (
          <li key={item.name} className="global-nac__item">
            <a className="global-nav__link" href="item.path">
                {item.name}
            </a>
          </li>  
        );
    });

    
    return (
        <nav className={`global-nav ${className}`}>
            <ul className="global-nav__list">
                {list}
            </ul>
        </nav>
    )
} 

export default GlobalNav;