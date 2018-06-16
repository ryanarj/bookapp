import api from '../api';
import {userSignedIn} from './auth';

export const signup = (data) => (dispatch) =>
 api.user.signup(data).then(user => dispatch(userSignedIn(user)));