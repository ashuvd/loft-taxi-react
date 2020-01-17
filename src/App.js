import React, { useState } from 'react';
import Header from './components/Header.jsx';
import LoginPage from './views/LoginPage.jsx';
import SignupPage from './views/SignupPage.jsx';
import MapPage from './views/MapPage.jsx';
import ProfilePage from './views/ProfilePage.jsx';
import './assets/styles/index.scss'

const PAGES = {
  login: (setPage) => <LoginPage setPage={setPage} />,
  signup: (setPage) => <SignupPage setPage={setPage} />,
  map: () => <MapPage />,
  profile: () => <ProfilePage />,
};

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="wrapper">
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </div>
  );
}

export default App;
