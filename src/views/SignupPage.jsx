import React from 'react';
export default class SignupPage extends React.Component {
  inputs = [
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
  ]
  renderInputs(inputs) {
    return inputs.map((input) => {
      if (input.column) {
        return (
          <div className="form__column">
            {this.renderInputs(input.column)}
          </div>
        );
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
  goToPageLogin = (e) => {
    e.preventDefault();
    this.props.setPage("login")
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
                <a href="#login" onClick={this.goToPageLogin} className="login__link">Войти</a>
              </div>
              <form action="" className="login__form form">
                {this.renderInputs(this.inputs)}
                <div className="form__row">
                  <button onClick={this.goToPageMap} className="form__button button">Зарегистрироваться</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}