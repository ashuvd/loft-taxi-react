import React from 'react';
export default class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
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
                <a href="#login" onClick={(e) => {e.preventDefault(); this.props.setPage("login")}} className="login__link">Войти</a>
              </div>
              <form action="" className="login__form form">
                <div className="form__row">
                  <label htmlFor="email" className="form__label">Адрес электронной почты</label>
                  <input type="text" id="email" name="email" className="form__input input" />
                </div>
                <div className="form__column">
                  <div className="form__row">
                    <label htmlFor="firstName" className="form__label">Имя</label>
                    <input type="text" id="firstName" name="firstName" className="form__input input" />
                  </div>
                  <div className="form__row">
                    <label htmlFor="secondName" className="form__label">Фамилия</label>
                    <input type="text" id="secondName" name="secondName" className="form__input input" />
                  </div>
                </div>
                <div className="form__row">
                  <label htmlFor="password" className="form__label">Пароль</label>
                  <input type="text" id="password" name="password" className="form__input input" />
                </div>
                <div className="form__row">
                  <button onClick={(e) => {e.preventDefault(); this.props.setPage("map")}} className="form__button button">Зарегистрироваться</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}