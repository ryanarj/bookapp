import api from '../api'
import { SIGNED_IN, SIGNED_OUT } from '../types';

export const userSignedIn = (user) => ({
    type: SIGNED_IN,
    user
});

export const userSignedOut = () => ({
    type: SIGNED_OUT
});


// This is the api template that is used to get the request that will return promise
export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => {
        localStorage.bookappJWT = user.token;
        dispatch(userSignedIn(user))
    });

// Logout user and remove the token from the localStorage
export const logout = () => (dispatch) => {
        localStorage.removeItem('bookappJWT');
        dispatch(userSignedOut())
    };