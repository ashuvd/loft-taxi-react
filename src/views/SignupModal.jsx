import React, { useState } from 'react';
import PropTypes from 'prop-types';
import modalHOC from '../scripts/modalHOC';
import { setRegisterRequest } from '../store/modules/auth';
import { useDispatch } from 'react-redux';

const SignupModal = ({ history }) => {
  const [signin, setSignin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const dispatch = useDispatch();

  const inputs = [
    {
      id: 'email',
      text: 'Адрес электронной почты',
      type: 'email',
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
          type: 'text',
          value: name,
          handler: (e) => {
            setName(e.target.value);
          }
        },
        {
          id: 'surname',
          text: 'Фамилия',
          type: 'text',
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
      type: 'password',
      value: password,
      handler: (e) => {
        setPassword(e.target.value);
      }
    }
  ];

  const renderInputs = (inputs) => {
    return inputs.map(({column, id, text, type, value, handler}, index) => {
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
          <input value={value} type={type} id={id} name={id} className="form__input input" onChange={handler} />
        </div>
      )
    })
  };

  const goToPageMap = (e) => {
    e.preventDefault();
    dispatch(setRegisterRequest({email: signin, password, name, surname}));
  };

  const goToPageLogin = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
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
  )
}

SignupModal.propTypes = {
  history: PropTypes.object.isRequired,
}

export default modalHOC(SignupModal);