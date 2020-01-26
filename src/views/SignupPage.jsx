import React from 'react';
import PropTypes from 'prop-types';

const SignupPage = ({setPage}) => {
  const inputs = [
    {
      id: 'email',
      text: 'Адрес электронной почты',
    },
    {
      column: [
        {
          id: 'firstName',
          text: 'Имя',
        },
        {
          id: 'secondName',
          text: 'Фамилия',
        },
      ],
    },
    {
      id: 'password',
      text: 'Пароль',
    }
  ];

  const renderInputs = (inputs) => {
    return inputs.map(({column, id, text}, index) => {
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
          <input type="text" id={id} name={id} className="form__input input" />
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
            <form action="" className="login__form form">
              {renderInputs(inputs)}
              <div className="form__row">
                <button onClick={goToPageMap} className="form__button button">Зарегистрироваться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

SignupPage.propTypes = {
  setPage: PropTypes.func
}

export default SignupPage;