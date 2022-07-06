import React from 'react';
import Logo from '../img/logo.jpg';

function HeaderHome() {
  return (
    <header>
      <div className="container">
        <div>
          <img src={Logo} alt="Logo Corelab" />
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
