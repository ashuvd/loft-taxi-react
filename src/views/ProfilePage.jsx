import React from 'react';
import Card from '../components/Card';
const ProfilePage = () => {
  return (
    <main className="main">
      <div className="container container_main">
        <div className="profile">
          <div className="profile__title">Профиль</div>
          <div className="profile__desc">Способ оплаты</div>
          <div className="profile__cards">
            <Card />
            <Card />
          </div>
          <button type="button" className="profile__button button">Сохранить</button>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage;