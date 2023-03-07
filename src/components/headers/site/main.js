import React from "react";
import { Link } from "react-router-dom";
import "./resources/main.scss";

export default () => {
  return (
    <header className="site">
      <div className="container">
        <div className="branding-col">
          <div className="circle"></div>
          <p className="branding-text bold">
            Nitros <span>by DineDroid 1.2</span>
          </p>
        </div>
        <div className="navigation-col">
          <ul>
            <li>
              <p className="semibold">
                <Link to="/">Home</Link>
              </p>
            </li>
            <li>
              <p className="semibold">
                <Link to="/stories">Stories</Link>
              </p>
            </li>
            <li>
              <p className="semibold">
                <Link to="/account/try">Try Nitros</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
