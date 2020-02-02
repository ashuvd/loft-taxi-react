import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setLoginRequest } from '../store/modules/auth';
import { useDispatch } from 'react-redux';
import modalHOC from '../scripts/modalHOC';


const LoginModal = ({ history }) => {
  const dispatch = useDispatch();
  const [signin, setSignin] = useState("");
  const [password, setPassword] = useState("");
  const inputs = [
    {
      id: 'signin',
      text: 'Имя пользователя*',
      type: 'email',
      value: signin,
      handler: (e) => {
        setSignin(e.target.value);
      }
    },
    {
      id: 'password',
      text: 'Пароль*',
      type: 'password',
      value: password,
      handler: (e) => {
        setPassword(e.target.value);
      }
    }
  ];
  const renderInputs = (inputs) => {
    return inputs.map(({ id, text, type, value, handler }) => {
      return (
        <div key={id} className="form__row">
          <label htmlFor={id} className="form__label">{text}</label>
          <input 
            value={value}
            type={type}
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
    dispatch(setLoginRequest({email: signin, password}));
    history.push('/map');
  };
  const goToPageSignup = (e) => {
    e.preventDefault();
    history.push('/signup');
  };

  return (
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
  )
}

LoginModal.propTypes = {
  history: PropTypes.object.isRequired,
}

export default modalHOC(LoginModal);