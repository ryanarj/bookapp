import {createSelector} from 'reselect';
export default function blogPosts(state = {}, action = {}){
    switch (action.type){
        default: 
            return state;
    }
} 

export const blogPostsSelector = state => state.blogPosts;

export const allBlogPostsSelector = createSelector(
    blogPostsSelector, blogPostsHash => Object.values(blogPostsHash)
);