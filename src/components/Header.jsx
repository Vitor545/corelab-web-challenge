import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({ typeIcon = 'fa-solid fa-house', path = '/home' }) {
  return (
    <header className="header_container">
      <div className="container headerH">
        <NavLink to={`${path}`}>
          <div className="header_icon">
            <i className={`${typeIcon} iconHeader`} />
          </div>
        </NavLink>
        <div className="header_search">
          <input type="text" />
          <div>
            <i className="fa-solid fa-magnifying-glass iconHeader" />
          </div>
        </div>
        <NavLink to="/create">
          <div className="header_icon">
            <i className="fa-solid fa-plus iconHeader" />
          </div>
        </NavLink>
      </div>
    </header>
  );
}
Header.defaultProps = {
  typeIcon: undefined,
  path: undefined,
};

Header.propTypes = {
  typeIcon: PropTypes.string,
  path: PropTypes.string,
};

export default Header;
