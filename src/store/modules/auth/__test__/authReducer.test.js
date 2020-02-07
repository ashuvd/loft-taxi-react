import authReducer from '../../index';

describe('authReducer', () => {
  let action;
  const initialState = {
    user: {
      isAuth: false,
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: ""
    }
  }
  const sampleAuthData = {
    user: {
      isAuth : true,
      token : 'rec3sufN5lICgsbXc',
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: ""
    }
  };
  const sampleProfileData = {
    user: {
      isAuth : true,
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: ""
    }
  };
  const fetchProfileData = {
    user: {
      isAuth : false,
      cardNumber: '1111',
      expiryDate: '01/21',
      cardName: 'Alex',
      cvc: '123'
    }
  };
  const failureAuthData = {
    user: {
      isAuth : false,
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: ""
    }
  };

  test('Should return default state if no action type is recognized', () => {
    expect(authReducer(initialState, { type: null })).toEqual(initialState);
  });

  test('Should return default state if action type SET_LOGIN_REQUEST', () => {
    action = {
      type: 'SET_LOGIN_REQUEST',
      payload: {
        email: 'ashuv@ashuv.ru',
        password: '123'
      }
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });

  test('Should return isAuth==false if action type SET_LOGIN_SUCCESS', () => {
    action = {
      type: 'SET_LOGIN_SUCCESS',
      payload: {
        success: false,
        error: 'Ошибка авторизации'
      }
    };
    expect(authReducer(initialState, action)).toEqual(failureAuthData);
  });

  test('Should return isAuth==true and token if action type SET_LOGIN_SUCCESS', () => {
    action = {
      type: 'SET_LOGIN_SUCCESS',
      payload: {
        success: true,
        token: 'rec3sufN5lICgsbXc'
      }
    };
    expect(authReducer(initialState, action)).toEqual(sampleAuthData);
  });

  test('Should return default state if action type SET_REGISTER_REQUEST', () => {
    action = {
      type: 'SET_REGISTER_REQUEST',
      payload: {
        email: 'ashuv@ashuv.ru',
        password: '123',
        name: 'Александр',
        surname: 'Шувалов'
      }
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });

  test('Should return isAuth==false if action type SET_REGISTER_SUCCESS', () => {
    action = {
      type: 'SET_REGISTER_SUCCESS',
      payload: {
        success: false,
        error: 'Ошибка авторизации'
      }
    };
    expect(authReducer(initialState, action)).toEqual(failureAuthData);
  });

  test('Should return isAuth==true and token if action type SET_REGISTER_SUCCESS', () => {
    action = {
      type: 'SET_REGISTER_SUCCESS',
      payload: {
        success: true,
        token: 'rec3sufN5lICgsbXc'
      }
    };
    expect(authReducer(initialState, action)).toEqual(sampleAuthData);
  });

  test('Should return default state if action type SET_PROFILE_REQUEST', () => {
    action = {
      type: 'SET_PROFILE_REQUEST',
      payload: {
        cardNumber: '1111',
        expiryDate: '01/21',
        cardName: 'Alex',
        cvc: '123',
        token: 'rec3sufN5lICgsbXc'
      }
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });

  test('Should return isAuth==false if action type SET_PROFILE_SUCCESS', () => {
    action = {
      type: 'SET_PROFILE_SUCCESS',
      payload: {
        success: false,
        error: 'Ошибка авторизации'
      }
    };
    expect(authReducer(initialState, action)).toEqual(failureAuthData);
  });

  test('Should return isAuth==true if action type SET_PROFILE_SUCCESS', () => {
    action = {
      type: 'SET_PROFILE_SUCCESS',
      payload: {
        success: true
      }
    };
    expect(authReducer(initialState, action)).toEqual(sampleProfileData);
  });

  test('Should return default state if action type FETCH_PROFILE_REQUEST', () => {
    action = {
      type: 'FETCH_PROFILE_REQUEST',
      payload: 'rec3sufN5lICgsbXc'
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });

  test('Should return isAuth==true, cardNumber, expiryDate, cardName and cvc if action type FETCH_PROFILE_SUCCESS', () => {
    action = {
      type: 'FETCH_PROFILE_SUCCESS',
      payload: {
        cardNumber: '1111',
        expiryDate: '01/21',
        cardName: 'Alex',
        cvc: '123'
      }
    };
    expect(authReducer(initialState, action)).toEqual(fetchProfileData);
  });

  test('Should return isAuth==false if action type SET_LOGOUT', () => {
    action = {
      type: 'SET_LOGOUT',
    };
    expect(authReducer(initialState, action)).toEqual(failureAuthData);
  });

  test('Should return cardNumber if action type SET_CARD_NUMBER', () => {
    action = {
      type: 'SET_CARD_NUMBER',
      payload: {
        cardNumber: "5555"
      }
    };
    expect(authReducer(initialState, action)).toEqual({user: {
      isAuth : false,
      cardNumber: "5555",
      expiryDate: "",
      cardName: "",
      cvc: ""
    }});
  });

  test('Should return expiryDate if action type SET_EXPIRY_DATE', () => {
    action = {
      type: 'SET_EXPIRY_DATE',
      payload: {
        expiryDate: "01/21"
      }
    };
    expect(authReducer(initialState, action)).toEqual({user: {
      isAuth : false,
      cardNumber: "",
      expiryDate: "01/21",
      cardName: "",
      cvc: ""
    }});
  });

  test('Should return cardName if action type SET_CARD_NAME', () => {
    action = {
      type: 'SET_CARD_NAME',
      payload: {
        cardName: "Alex"
      }
    };
    expect(authReducer(initialState, action)).toEqual({user: {
      isAuth : false,
      cardNumber: "",
      expiryDate: "",
      cardName: "Alex",
      cvc: ""
    }});
  });

  test('Should return cvc if action type SET_CVC', () => {
    action = {
      type: 'SET_CVC',
      payload: {
        cvc: "123"
      }
    };
    expect(authReducer(initialState, action)).toEqual({user: {
      isAuth : false,
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: "123"
    }});
  });

});