import api from '../api'
import { SIGNED_IN} from '../types';

// 
export const userSignedIn = (user) => ({
    type: SIGNED_IN,
    user
});


// This is the api template that is used to get the request that will return promise
export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => dispatch(userSignedIn(user)));