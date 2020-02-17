import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, initialize, Field } from 'redux-form';
import {
  getToken,
  getCardNumber,
  getExpiryDate,
  getCardName,
  getCvc,
  setProfileRequest,
  fetchProfileRequest,
} from '../store/modules/auth'

const ProfilePage = () => {
  const cardNumber = useSelector(getCardNumber);
  const expiryDate = useSelector(getExpiryDate);
  const cardName = useSelector(getCardName);
  const cvc = useSelector(getCvc);

  const inputsCard1 = [
    {
      id: 'cardNumber',
      label: 'Номер карты:',
      type: 'text',
      placeholder: '0000 0000 0000 0000'
    },
    {
      id: 'expiryDate',
      label: 'Срок действия:',
      type: 'text',
      placeholder: '00/00'
    }
  ];

  const inputsCard2 = [
    {
      id: 'cardName',
      label: 'Имя владельца:',
      type: 'text',
      placeholder: ''
    },
    {
      id: 'cvc',
      label: 'CVC:',
      type: 'password',
      placeholder: ''
    }
  ];


  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const saveProfile = ({cardNumber, expiryDate, cardName, cvc}) => {
    dispatch(setProfileRequest({cardNumber, expiryDate, cardName, cvc, token}));
  }

  useEffect(() => {
    dispatch(fetchProfileRequest());
  }, [])

  useEffect(() => {
    dispatch(initialize('ProfileForm', {cardNumber, expiryDate, cardName, cvc}))
  }, [cardNumber, expiryDate, cardName, cvc])

  const CustomField = ({input, type, label, placeholder, id, meta: { touched, error}, ...rest}) => {
    return (
      <div className="form__row">
        <label htmlFor={id} className="form__label">{label}</label>
        <input {...input} placeholder={placeholder} type={type} id={id} data-testid={id} className="form__input input input_background_color_yellow" />
        {touched && error && <p style={{color: 'red'}}>{error}</p>}
        {/* <button type="button" className="form__clear clear"></button> */}
      </div>
    )
  }

  const renderInputs = (inputs) => {
    return inputs.map(({ id, label, type, placeholder }) => {
      return (
        <Field 
          key={id}
          type={type}
          id={id}
          label={label}
          name={id}
          placeholder={placeholder}
          component={CustomField}
        />
      )
    })
  };

  const validator = values => {
    const errors = {};
    if (!values.cardNumber) {
      errors.cardNumber = 'Вы не указали номер карты'
    }
    if (!values.expiryDate) {
      errors.expiryDate = 'Вы не указали срок действия'
    }
    if (!values.cardName) {
      errors.cardName = 'Вы не указали имя владельца'
    }
    if (!values.cvc) {
      errors.cvc = 'Вы не указали CVC код'
    }
    return errors;
  }

  let ProfileForm = ({handleSubmit}) => {
    return (
      <form onSubmit={handleSubmit} className="form form_profile">
        <div className="profile__title">Профиль</div>
        <div className="profile__desc">Способ оплаты</div>
        <div className="profile__cards">
          <div className="card">
            <div className="card__logo">
              <img src="/img/card-logo.png" alt="card-logo" className="card__img"/>
            </div>
            {renderInputs(inputsCard1)}
          </div>
          <div className="card">
            {renderInputs(inputsCard2)}
          </div>
        </div>
        <button type="submit" className="profile__button button">Сохранить</button>
      </form>
    )
  }
  ProfileForm = reduxForm({form: 'ProfileForm', validate: validator})(ProfileForm);

  return (
    <main className="main">
      <div className="container container_main">
        <ProfileForm onSubmit={saveProfile} />
      </div>
    </main>
  )
}

export default ProfilePage;