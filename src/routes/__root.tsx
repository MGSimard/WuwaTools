import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons/faTableList";
import { faAddressBook, faMap } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import wuwaToolsLogo from "../assets/wuwatools.png";

const activeProps = {
  className: "activeLink",
};

export const Route = createRootRoute({
  component: () => (
    <div className="App">
      <nav>
        <div className="nav-content">
          <div className="nav-logo-container">
            <Link to="/">
              <img src={wuwaToolsLogo} alt="WuwaTools Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/" activeProps={activeProps}>
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/roster" activeProps={activeProps}>
                <FontAwesomeIcon icon={faAddressBook} />
                <span>Roster</span>
              </Link>
            </li>
            <li>
              <Link to="/tierlist" activeProps={activeProps}>
                <FontAwesomeIcon icon={faTableList} />
                <span>Tier List</span>
              </Link>
            </li>
            <li>
              <Link to="/worldmap" activeProps={activeProps}>
                <FontAwesomeIcon icon={faMap} />
                <span>World Map</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  ),
});
