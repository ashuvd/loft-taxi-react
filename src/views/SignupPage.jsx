import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignupPage = ({setPage}) => {
  const [signin, setSignin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const inputs = [
    {
      id: 'email',
      text: 'Адрес электронной почты',
      value: signin,
      handler: (e) => {
        setSignin(e.target.value);
      }
    },
    {
      column: [
        {
          id: 'name',
          text: 'Имя',
          value: name,
          handler: (e) => {
            setName(e.target.value);
          }
        },
        {
          id: 'surname',
          text: 'Фамилия',
          value: surname,
          handler: (e) => {
            setSurname(e.target.value);
          }
        },
      ],
    },
    {
      id: 'password',
      text: 'Пароль',
      value: password,
      handler: (e) => {
        setPassword(e.target.value);
      }
    }
  ];

  const renderInputs = (inputs) => {
    return inputs.map(({column, id, text, value, handler}, index) => {
      if (column) {
        return (
          <div key={index} className="form__column">
            {renderInputs(column)}
          </div>
        );
      }
      return (
        <div key={id} className="form__row">
          <label htmlFor={id} className="form__label">{text}</label>
          <input value={value} type="text" id={id} name={id} className="form__input input" onChange={handler} />
        </div>
      )
    })
  };

  const goToPageMap = (e) => {
    e.preventDefault();
    setPage("map")
  };

  const goToPageLogin = (e) => {
    e.preventDefault();
    setPage("login")
  };

  return (
    <main className="main">
      <div className="container container_main">
        <div className="main__left">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" className="logo__img"/>
          </div>
        </div>
        <div className="main__right">
          <div className="login">
            <div className="login__title">Регистрация</div>
            <div className="login__desc">
              Уже зарегистрированы?
              <a href="#login" onClick={goToPageLogin} className="login__link">Войти</a>
            </div>
            <form onSubmit={goToPageMap} className="login__form form">
              {renderInputs(inputs)}
              <div className="form__row">
                <button type="submit" className="form__button button">Зарегистрироваться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

SignupPage.propTypes = {
  setPage: PropTypes.func.isRequired
}

export default SignupPage;