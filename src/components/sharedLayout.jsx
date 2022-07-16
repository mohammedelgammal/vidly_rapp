import { NavLink, Outlet } from "react-router-dom";

const sharedLayout = () => {
  return (
    <div className="container">
      <nav className="my-4">
        <div className="container">
          <div className="row">
            <div className="nav">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/movies">
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default sharedLayout;
