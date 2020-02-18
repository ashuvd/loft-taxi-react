import React from 'react';
import PropTypes from 'prop-types';
import modalHOC from '../scripts/modalHOC';
import { setRegisterRequest } from '../store/modules/auth';
import { useDispatch } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const SignupModal = ({ history }) => {
  const dispatch = useDispatch();

  const inputs = [
    {
      id: 'email',
      text: 'Адрес электронной почты',
      type: 'email',
    },
    {
      column: [
        {
          id: 'name',
          text: 'Имя',
          type: 'text',
        },
        {
          id: 'surname',
          text: 'Фамилия',
          type: 'text',
        },
      ],
    },
    {
      id: 'password',
      text: 'Пароль',
      type: 'password',
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
    return inputs.map(({column, id, text, type, value, handler}, index) => {
      if (column) {
        return (
          <div key={index} className="form__column">
            {renderInputs(column)}
          </div>
        );
      }
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

  const goToPageMap = ({email, password, name, surname}) => {
    console.log(email, password, name, surname)
    // dispatch(setRegisterRequest({email, password, name, surname}));
  };

  const goToPageLogin = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const validator = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Вы не указали email'
    }
    if (!values.password) {
      errors.password = 'Вы не указали пароль'
    }
    if (!values.name) {
      errors.name = 'Вы не указали имя'
    }
    if (!values.surname) {
      errors.surname = 'Вы не указали фамилию'
    }
    return errors;
  }

  let SignupForm = ({ handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit} className="login__form form">
        {renderInputs(inputs)}
        <div className="form__row">
          <button type="submit" className="form__button button">Зарегистрироваться</button>
        </div>
      </form>
    )
  }

  SignupForm = reduxForm({form: 'SignupForm', validate: validator})(SignupForm);

  return (
    <div className="login">
      <div className="login__title">Регистрация</div>
      <div className="login__desc">
        Уже зарегистрированы?
        <a href="#login" onClick={goToPageLogin} className="login__link">Войти</a>
      </div>
      <SignupForm onSubmit={goToPageMap} />
    </div>
  )
}

SignupModal.propTypes = {
  history: PropTypes.object.isRequired,
}

export default modalHOC(SignupModal);