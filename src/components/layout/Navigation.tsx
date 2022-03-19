import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/contacts">MyContacts</NavLink>
      </div>
      {/* <nav>
        <ul>
          <li>
            <NavLink href="">All contacts</NavLink>
          </li>
          <li>
            <NavLink href=""></NavLink>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navigation;
