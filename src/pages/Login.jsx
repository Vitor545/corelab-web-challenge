import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/HeaderHome';

function Login() {
  const [isVisible, setIsVisible] = useState('password');
  const [eyePassword, seteyePassword] = useState('fa-eye eyePassword');

  const isVisibleFunction = () => {
    if (isVisible === 'password') {
      setIsVisible('text');
      seteyePassword('fa-eye-slash eyePassword');
    } else {
      setIsVisible('password');
      seteyePassword('fa-eye eyePassword');
    }
  };

  return (
    <section>
      <Header />
      <div className="container section_login">
        <div className="login_text">
          <h1>Login</h1>
          <p>
            Bem vindo de volta. Coloque suas credenciais para acessar sua conta.
          </p>
        </div>
        <div className="ms_gerror">
          <span>Error message</span>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="field input">
            <label htmlFor="email_id">
              Endereço de Email
              <input
                type="text"
                placeholder="Coloque seu Email"
                id="email_id"
              />
            </label>
          </div>
          <div className="field input password">
            <label htmlFor="password_id">
              Senha
              <input
                type={isVisible}
                placeholder="Coloque sua Senha"
                id="password_id"
              />
            </label>
            <i
              onClick={isVisibleFunction}
              className={`fa-solid ${eyePassword}`}
            />
          </div>
          <button className="btn" type="submit">
            Continuar
          </button>
        </form>
        <div className="resgisterLink">
          Ainda não tem uma conta?{' '}
          <NavLink to="/register" exact>
            <span>Cadastrar agora</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
