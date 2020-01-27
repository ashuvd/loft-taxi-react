import React from 'react';
export default function() {
  return (
    <div className="card">
      <form className="form form_card">
        <div className="form__row">
          <label htmlFor="" className="form__label">Номер карты:</label>
          <input type="text" className="form__input input input_background_color_yellow"/>
          <button type="button" className="form__clear clear"></button>
        </div>
        <div className="form__row">
          <label htmlFor="" className="form__label">Срок действия:</label>
          <input type="text" placeholder="00/00" className="form__input input input_background_color_yellow"/>
        </div>
      </form>
      <div className="card__logo">
        <img src="/img/card-logo.png" alt="card-logo" className="card__img"/>
      </div>
    </div>
  )
}