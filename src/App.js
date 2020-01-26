import React, { useState } from 'react';
import Header from './components/Header.jsx';
import LoginPage from './views/LoginPage.jsx';
import SignupPage from './views/SignupPage.jsx';
import MapPage from './views/MapPage.jsx';
import ProfilePage from './views/ProfilePage.jsx';
import './assets/styles/index.scss'
import PropTypes from 'prop-types';
const { Provider, Consumer }  = React.createContext();

Header.propTypes = {
  setPage: PropTypes.func
};

const PAGES = {
  login: (setPage) => <Consumer>{({login}) => <LoginPage login={login} setPage={setPage} />}</Consumer>,
  signup: (setPage) => <SignupPage setPage={setPage} />,
  map: () => <Consumer>{({isLoggedIn}) => isLoggedIn && <MapPage />}</Consumer>,
  profile: () => <Consumer>{({isLoggedIn}) => isLoggedIn && <ProfilePage />}</Consumer>,
};

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const login = (email, password) => {
    setIsLoggedIn(true);
  }
  const logout = () => {
    setIsLoggedIn(false);
  }
  return (
    <div className="wrapper">
      <Provider value={{isLoggedIn, login, logout}}>
        <Consumer>{({logout}) => <Header logout={logout} setPage={setPage} />}</Consumer>
        {PAGES[page](setPage)}
      </Provider>
    </div>
  );
}

export default App;
