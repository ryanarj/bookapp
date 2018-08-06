import api from '../api';
import {BLOGS_FETCHED, BLOG_CREATED} from '../types';
import {normalize} from 'normalizr';
import {blogSchema} from '../schemas';

const blogsFetched = (data) => ({
    type: BLOGS_FETCHED,
    data
})

const blogCreated = (data) => ({
    type: BLOG_CREATED,
    data
})

export const fetchBlogs = () => (dispatch) =>
    api.blogs
        .fetchAll()
        .then(blogs => dispatch(blogsFetched( normalize(blogs, [blogSchema]))));

export const createBlog = (data) => (dispatch) =>
    api.blogs.create(data).then(blog => dispatch(blogCreated(normalize(blog, blogSchema))));