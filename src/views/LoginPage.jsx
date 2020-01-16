import React from 'react';
export default class LoginPage extends React.Component {
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
              <div className="login__title">Войти</div>
              <div className="login__desc">
                Новый пользователь?
                <a href="#signup" onClick={(e) => {e.preventDefault(); this.props.setPage("signup")}} className="login__link">Зарегистрируйтесь</a>
              </div>
              <form action="" className="login__form form">
                <div className="form__row">
                  <label htmlFor="login" className="form__label">Имя пользователя*</label>
                  <input type="text" id="login" name="login" className="form__input input" />
                </div>
                <div className="form__row">
                  <label htmlFor="password" className="form__label">Пароль*</label>
                  <input type="text" id="password" name="password" className="form__input input" />
                </div>
                <div className="form__row">
                  <button onClick={(e) => {e.preventDefault(); this.props.setPage("map")}} className="form__button button">Войти</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}