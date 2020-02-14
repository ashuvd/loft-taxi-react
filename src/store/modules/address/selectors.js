import { createSelector } from 'reselect';

export const getAddresses = createSelector(
  (state) => state.addressList.addresses,
  (addresses) => addresses
)
export const getCoordinates = createSelector(
  (state) => state.addressList.coordinates,
  (coordinates) => coordinates
)