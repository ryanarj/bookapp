import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBlogForm from '../forms/SearchBlogForm';
import BlogForm from '../forms/BlogForm';

class SearchBlogPost extends React.Component{
    state = {
        blogPost: null
    }

    onBlogSelect = blog => this.setState({ blog });

    addBlog = () => console.log('Hi');

    render() {
        return (
            <Segment>
                <h1>Search for a blog post.</h1>
                <SearchBlogForm onBlogSelect={this.onBlogSelect} />
                {this.state.blog && (
                    <BlogForm sumbit={this.addBlog} blog={this.state.blog} />
                )}
            </Segment>
        );
    }
}

export default SearchBlogPost;