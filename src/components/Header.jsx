import React from 'react';
import { setLogout } from '../store/modules/auth';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const pages = {
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
  const exit = (e) => {
    e.preventDefault();
    dispatch(setLogout());
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
                        <NavLink to={`/${page}`} className="menu__link" exact={true} activeClassName="menu__link_active">
                          {pages[page]}
                        </NavLink>
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

export default Header;