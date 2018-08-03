import api from '../api';
import {BLOGS_FETCHED} from '../types';
import {normalize} from 'normalizr';
import {blogSchema} from '../schemas';

const blogsFetched = (data) => ({
    type: BLOGS_FETCHED,
    data
})

export const fetchBlogs = () => (dispatch) =>
    api.blogs
        .fetchAll()
        .then(blogs => dispatch(blogsFetched( normalize(blogs, [blogSchema]))));