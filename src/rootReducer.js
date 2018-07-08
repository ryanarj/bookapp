import { combineReducers } from 'redux';
import user from './reducers/user';
import blogPost from './reducers/blogPosts';

export default combineReducers({
    user,
    blogPost
})