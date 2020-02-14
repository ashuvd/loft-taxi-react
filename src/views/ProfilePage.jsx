import React, { useEffect } from 'react';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import {
  getToken,
  getCardNumber,
  getExpiryDate,
  getCardName,
  getCvc,
  setProfileRequest,
  fetchProfileRequest,
  setCardNumber,
  setExpiryDate,
  setCardName,
  setCvc,
} from '../store/modules/auth'

const ProfilePage = () => {
  const cardNumber = useSelector(getCardNumber);
  const expiryDate = useSelector(getExpiryDate);
  const cardName = useSelector(getCardName);
  const cvc = useSelector(getCvc);

  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const saveProfile = () => {
    dispatch(setProfileRequest({cardNumber, expiryDate, cardName, cvc, token}));
  }

  useEffect(() => {
    dispatch(fetchProfileRequest());
  }, [])

  const handleCardNumber = (cardNumber) => {
    dispatch(setCardNumber({cardNumber}))
  }
  const handleExpiryDate = (expiryDate) => {
    dispatch(setExpiryDate({expiryDate}))
  }
  const handleCardName = (cardName) => {
    dispatch(setCardName({cardName}))
  }
  const handleCvc = (cvc) => {
    dispatch(setCvc({cvc}))
  }

  return (
    <main className="main">
      <div className="container container_main">
        <div className="profile">
          <div className="profile__title">Профиль</div>
          <div className="profile__desc">Способ оплаты</div>
          <div className="profile__cards">
            <Card
              cardInputTitleValue={cardNumber}
              cardInputSubtitleValue={expiryDate}
              handleCardInputTitleValue={handleCardNumber}
              handleCardInputSubtitleValue={handleExpiryDate}
              id="card1"
              title="Номер карты:"
              subtitle="Срок действия:"
              type="text"
              placeholder="00/00"
            />
            <Card
              cardInputTitleValue={cardName}
              cardInputSubtitleValue={cvc}
              handleCardInputTitleValue={handleCardName}
              handleCardInputSubtitleValue={handleCvc}
              id="card2"
              title="Имя владельца:"
              subtitle="CVC:"
              type="password"
              back={true}
            />
          </div>
          <button type="button" className="profile__button button" onClick={saveProfile}>Сохранить</button>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage;