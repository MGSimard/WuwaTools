import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons/faTableList";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
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
            <img src={wuwaToolsLogo} alt="WuwaTools Logo" />
          </div>
          <ul>
            <li>
              <Link to="/" activeProps={activeProps}>
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/roster" activeProps={activeProps}>
                <FontAwesomeIcon icon={faAddressBook} />
                Roster
              </Link>
            </li>
            <li>
              <Link to="/tierlist" activeProps={activeProps}>
                <FontAwesomeIcon icon={faTableList} />
                Tier List
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
