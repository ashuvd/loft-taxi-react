import React from 'react';

export default function({setPage, logout}) {
  const pages = {
    login: 'Логин',
    signup: 'Регистрация',
    map: 'Карта',
    profile: 'Профиль',
    exit: 'Выйти'
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
  const goToPage = (page) => (e) => {
    e.preventDefault();
    setPage(page)
  }
  const exit = (e) => {
    e.preventDefault();
    logout();
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
              [...pages].map(page => {
                  if (page === 'exit') {
                    return (
                      <li key={page} className="menu__item">
                        <a href={'#' + page} onClick={exit} className="menu__link">{pages[page]}</a>
                      </li>
                    )
                  } else {
                    return (
                      <li key={page} className="menu__item">
                        <a href={'#' + page} onClick={goToPage(page)} className="menu__link">{pages[page]}</a>
                      </li>
                    )
                  }
                }
              )
            }
          </ul>
        </div>
      </div>
    </header>
  )
}