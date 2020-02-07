import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
const Card = (
  {
    back,
    id,
    title,
    subtitle,
    type,
    placeholder,
    cardInputTitleValue,
    handleCardInputTitleValue,
    cardInputSubtitleValue,
    handleCardInputSubtitleValue
  }) => {
  
  const handleCardInputSubtitle = useCallback((e) => handleCardInputSubtitleValue(e.target.value));
  const handleCardInputTitle = useCallback((e) => handleCardInputTitleValue(e.target.value));

  return (
    <div className="card">
      <form className="form form_card">
        <div className="form__row">
          <label htmlFor={`${id}_title`} className="form__label">{title}</label>
          <input
            id={`${id}_title`}
            value={cardInputTitleValue}
            type="text"
            className="form__input input input_background_color_yellow"
            onChange={handleCardInputTitle}
          />
          <button type="button" className="form__clear clear"></button>
        </div>
        <div className="form__row">
          <label htmlFor={`${id}_subtitle`} className="form__label">{subtitle}</label>
          <input
            id={`${id}_subtitle`}
            value={cardInputSubtitleValue}
            type={type}
            placeholder={placeholder}
            className="form__input input input_background_color_yellow"
            onChange={handleCardInputSubtitle}
          />
        </div>
      </form>
      {!back &&      
        <div className="card__logo">
          <img src="/img/card-logo.png" alt="card-logo" className="card__img"/>
        </div>
      }
    </div>
  )
}

Card.propTypes = {
  back: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  cardInputTitleValue: PropTypes.string.isRequired,
  cardInputSubtitleValue: PropTypes.string.isRequired,
  handleCardInputTitleValue: PropTypes.func.isRequired,
  handleCardInputSubtitleValue: PropTypes.func.isRequired,
};
Card.defaultProps = {
  back: false,
  placeholder: ""
};

export default Card;