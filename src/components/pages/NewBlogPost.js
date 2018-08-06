import React from 'react';
import { Segment } from 'semantic-ui-react';
import BlogForm from '../forms/BlogForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createBlog} from '../../actions/blogs'

class NewBlogPost extends React.Component{
    state = {
        blog: null
    }

    onBlogSelect = blog => this.setState({ blog });

    addBlog = (blog) => this.props
        .createBlog(blog)
        .then(() => this.props.history.push("/dashboard"));

    render() {
        return (
            <Segment>
                <h1>Add a new blog post.</h1>
                <BlogForm sumbit={this.addBlog} blog={this.state.blog} />
            </Segment>
        );
    }
}

NewBlogPost.propsTypes = {
    createBlog: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect(null, {createBlog})(NewBlogPost);