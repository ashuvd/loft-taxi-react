import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './scripts/PrivateRoute';
import Header from './components/Header.jsx';
import LoginModal from './views/LoginModal.jsx';
import SignupModal from './views/SignupModal.jsx';
import MapPage from './views/MapPage.jsx';
import ProfilePage from './views/ProfilePage.jsx';
import PageNotFound from './views/PageNotFound.jsx';
import './assets/styles/index.scss';
import { useSelector } from 'react-redux';
import { getIsAuth, fetchProfileRequest } from './store/modules/auth';

function App() {
  const isAuth = useSelector(getIsAuth);
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push("/map");
    }
  }, [isAuth])

  return (
    <div className="wrapper">
      {isAuth && <Header />}
      <Switch>
        {!isAuth && <Route path="/" exact component={LoginModal} />}
        {!isAuth && <Route path="/signup" exact component={SignupModal} />}
        <PrivateRoute path="/map" exact component={MapPage} />
        <PrivateRoute path="/profile" exact component={ProfilePage} />
        <Route path="*" component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

// Вместо mapStateToProps и mapDispatchToProps и connect можно использовать хуки useSelector и useDispatch

// const mapStateToProps = (state) => {
//   return {
//     isAuth: getIsAuth(state)
//   }
// }

// // Можно передавать объект
// const mapDispatchToProps = { setLoginRequest }

// // Можно передавать функцию
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     setLoginRequest: () => dispatch(setLoginRequest())
// //   }
// // }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
