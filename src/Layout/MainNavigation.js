import { Link } from "react-router-dom";
import './MainNavigation.css';
function MainNavigation(){
    return (
      <header className="header">
        <div className="logo">React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meet Ups</Link>
              <Link to="/new-meet">New Meet Ups</Link>
              <Link to="/favs">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default MainNavigation;