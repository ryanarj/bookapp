import {createSelector} from 'reselect';
import {BLOGS_FETCHED, BLOG_CREATED} from '../types';

export default function blogPosts(state = {}, action = {}){
    switch (action.type){
        case BLOGS_FETCHED:
        case BLOG_CREATED:
            return { ...state, ...action.data.entities.blogs};
        default: 
            return state;
    }
} 

export const blogPostsSelector = state => state.blogPosts;

export const allBlogPostsSelector = createSelector(
    blogPostsSelector, blogPostsHash => Object.values(blogPostsHash)
);