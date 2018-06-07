import React from "react";

const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li className="main-header__mobile-menu-item">
            <img src="" alt="Mobile Menu" />
          </li>
          <li>
            <a href="#" title="Home Page">
              <img src="" alt="Reed logo" />
            </a>
          </li>
          <li className="main-nav__item-jobs">
            <a className="main-nav__jobs_link" href="/jobs" title="Jobs">
              Jobs
            </a>
          </li>
        </ul>
        <ul>
          <li className="main-nav__item-register">
            <a className="main-nav__register_link" href="#">
              Register CV
            </a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a href="#">Shortlisted jobs</a>
          </li>
          <li className="main-nav__item-recruiting">
            <a className="main-nav__recruiting_link" href="#">
              Recruiting?
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
