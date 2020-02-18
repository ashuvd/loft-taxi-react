import React from 'react';
import PropTypes from 'prop-types';
import { setLoginRequest } from '../store/modules/auth';
import { useDispatch } from 'react-redux';
import modalHOC from '../scripts/modalHOC';
import { reduxForm, Field } from 'redux-form';

const LoginModal = ({ history }) => {
  const dispatch = useDispatch();
  const inputs = [
    {
      id: 'signin',
      text: 'Имя пользователя*',
      type: 'email'
    },
    {
      id: 'password',
      text: 'Пароль*',
      type: 'password'
    }
  ];

  const CustomField = ({input, type, text, id, meta: { touched, error}, ...rest}) => {
    return (
      <div className="form__row">
        <label htmlFor={id} className="form__label">{text}</label>
        <input {...input} type={type} id={id} data-testid={id} className="form__input input" />
        {touched && error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    )
  }

  const renderInputs = (inputs) => {
    return inputs.map(({ id, text, type }) => {
      return (
        <Field 
          key={id}
          type={type}
          id={id}
          text={text}
          name={id}
          component={CustomField}
        />
      )
    })
  };
  const goToPageMap = ({signin, password}) => {
    dispatch(setLoginRequest({email: signin, password}));
  };
  const goToPageSignup = (e) => {
    e.preventDefault();
    history.push('/signup');
  };

  const validator = values => {
    const errors = {};
    if (!values.signin) {
      errors.signin = 'Вы не указали email'
    }
    if (!values.password) {
      errors.password = 'Вы не указали пароль'
    }
    return errors;
  }

  let LoginForm = ({handleSubmit}) => {
    return (
      <form onSubmit={handleSubmit} className="login__form form">
        {renderInputs(inputs)}
        <div className="form__row">
          <button type="submit" data-testid="submitFormLogin" className="form__button button">Войти</button>
        </div>
      </form>
    )
  }
  LoginForm = reduxForm({form: 'LoginForm', validate: validator})(LoginForm);

  return (
    <div className="login">
      <div className="login__title">Войти</div>
      <div className="login__desc">
        Новый пользователь?
          <a data-testid="linkRegistration" href="#signup" onClick={goToPageSignup} className="login__link">Зарегистрируйтесь</a>
      </div>
      <LoginForm onSubmit={goToPageMap}/>
    </div>
  )
}

LoginModal.propTypes = {
  history: PropTypes.object.isRequired,
}

export default modalHOC(LoginModal);