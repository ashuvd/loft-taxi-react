import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({setPage, login}) => {
  const [signin, setSignin] = useState("");
  const [password, setPassword] = useState("");
  const inputs = [
    {
      id: 'signin',
      text: 'Имя пользователя*',
      value: signin,
      handler: (e) => {
        setSignin(e.target.value);
      }
    },
    {
      id: 'password',
      text: 'Пароль*',
      value: password,
      handler: (e) => {
        setPassword(e.target.value);
      }
    }
  ];
  const renderInputs = (inputs) => {
    return inputs.map(({ id, text, value, handler }) => {
      return (
        <div key={id} className="form__row">
          <label htmlFor={id} className="form__label">{text}</label>
          <input 
            value={value}
            type="text"
            id={id}
            data-testid={id}
            name={id}
            className="form__input input"
            onChange={handler} 
          />
        </div>
      )
    })
  };
  const goToPageMap = (e) => {
    e.preventDefault();
    login(signin, password)
    setPage("map")
  };
  const goToPageSignup = (e) => {
    e.preventDefault();
    setPage("signup")
  };

  return (
    <main className="main">
      <div className="container container_main">
        <div className="main__left">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" className="logo__img" />
          </div>
        </div>
        <div className="main__right">
          <div className="login">
            <div className="login__title">Войти</div>
            <div className="login__desc">
              Новый пользователь?
                <a data-testid="linkRegistration" href="#signup" onClick={goToPageSignup} className="login__link">Зарегистрируйтесь</a>
            </div>
            <form onSubmit={goToPageMap} className="login__form form">
              {renderInputs(inputs)}
              <div className="form__row">
                <button type="submit" data-testid="submitFormLogin" className="form__button button">Войти</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

LoginPage.propTypes = {
  setPage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}

export default LoginPage;