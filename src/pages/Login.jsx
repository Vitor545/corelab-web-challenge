import React, { useState } from 'react';
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
        <div>
          <h1>Login</h1>
          <p>
            Bem vindo de volta. Coloque suas credenciais para acessar sua conta.
          </p>
        </div>
        <div className="ms_gerror">Essa é uma mensagem de erro!</div>
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
          <div className="field input">
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
          <div className="field button">
            <input type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
