import { LOGIN_USER } from 'constants/action-types';

export function loginUser() {
  return {
    type: LOGIN_USER,
  };
}

export default { loginUser };
