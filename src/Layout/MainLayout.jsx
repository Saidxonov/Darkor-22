import "./MainLayout.css";
import Logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import Arrow from "../images/arrow-under.svg";

function MainLayout({ children }) {
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="head">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="menus">
                <ul>
                  <li>
                    <NavLink to="/">Tasodifiy rang</NavLink>
                  </li>
                  <li>
                    <NavLink to="/modes">Ko'rinish rejimi</NavLink>
                  </li>
                  <li>
                    <NavLink to="/text-editor">Matn o'zgartirish</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-color">Rangni saqlash</NavLink>
                  </li>
                  <li>
                    <NavLink>Forma</NavLink>
                  </li>
                </ul>
              </div>
              <div className="buttons">
                <div className="language">
                  <p>O’zb</p>
                  <img src={Arrow} alt="" />
                </div>
                <button>Boshlash</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}

export default MainLayout;
