import React from 'react';
export default function({setPage}) {
  const pages = {
    login: 'Логин',
    signup: 'Регистрация',
    map: 'Карта',
    profile: 'Профиль'
  }
  pages[Symbol.iterator] = function() {
    let i = 0;
    const that = this;
    return {
      next() {
        return {
          value: Object.keys(that)[i++],
          done: i > Object.keys(that).length
        }
      }
    }
  }
  return (
    <header className="header">
      <div className="container container_header">
        <div className="header__left">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" className="logo__img"/>
          </div>
        </div>
        <div className="header__right">
          <ul className="menu">
            {
              [...pages].map(function(page) {
                return (
                  <li key={page} className="menu__item">
                    <a href={'#' + page} onClick={(e) => {e.preventDefault(); setPage(page)}} className="menu__link">{pages[page]}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </header>
  )
}