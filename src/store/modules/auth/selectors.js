import { createSelector } from 'reselect';

// Если изменится поле в state (isAuth) которое возвращает функция переданная в качестве первого аргумента, то вызовится функция переданная в качестве второго аргумента
// Иначе эта функция вызываться не будет, а будет переиспользовано предыдущее значение
export const getIsAuth = createSelector(
  (state) => state.user.isAuth,
  (isAuth) => isAuth
)
export const getToken = createSelector(
  (state) => state.user.token,
  (token) => token
)
export const getCardNumber = createSelector(
  (state) => state.user.cardNumber,
  (cardNumber) => cardNumber
)
export const getExpiryDate = createSelector(
  (state) => state.user.expiryDate,
  (expiryDate) => expiryDate
)
export const getCardName = createSelector(
  (state) => state.user.cardName,
  (cardName) => cardName
)
export const getCvc = createSelector(
  (state) => state.user.cvc,
  (cvc) => cvc
)

// вариант если нужно следить за несколькими полями
// export const getIsAuth = createSelector(
//   [(state) => state.user.isAuth, (state) => state.user.token],
//   (isAuth, token) => isAuth
// )

// Если не использовать createSelector - альтернативный вариант

// export const getIsAuth = (state) => state.user.isAuth;