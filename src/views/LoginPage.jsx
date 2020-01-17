import React from 'react';
export default class LoginPage extends React.Component {
  inputs = [
    {
      id: 'login',
      text: 'Имя пользователя*',
    },
    {
      id: 'password',
      text: 'Пароль*',
    }
  ];
  renderInputs(inputs) {
    return inputs.map((input) => {
      if (input.column) {
        return this.renderInputs(input.column);
      }
      return (
        <div className="form__row">
          <label htmlFor={input.id} className="form__label">{input.text}</label>
          <input type="text" id={input.id} name={input.id} className="form__input input" />
        </div>
      )
    })
  }
  goToPageMap = (e) => {
    e.preventDefault();
    this.props.setPage("map")
  }
  goToPageSignup = (e) => {
    e.preventDefault();
    this.props.setPage("signup")
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
                <a href="#signup" onClick={this.goToPageSignup} className="login__link">Зарегистрируйтесь</a>
              </div>
              <form action="" className="login__form form">
                {this.renderInputs(this.inputs)}
                <div className="form__row">
                  <button onClick={this.goToPageMap} className="form__button button">Войти</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}