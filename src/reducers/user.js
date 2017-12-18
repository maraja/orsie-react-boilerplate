import { LOGIN_USER } from 'constants/action-types';

const initialState = {
  authenticated: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, authenticated: true };
    default:
      return state;
  }
}
