import React from 'react';

function Header() {
  return (
    <header className="header_container">
      <div className="container headerH">
        <div className="header_icon">
          <i className="fa-regular fa-heart iconHeader" />
        </div>
        <div className="header_search">
          <input type="text" />
          <div>
            <i className="fa-solid fa-magnifying-glass iconHeader" />
          </div>
        </div>
        <div className="header_icon">
          <i className="fa-solid fa-plus iconHeader" />
        </div>
      </div>
    </header>
  );
}

export default Header;
