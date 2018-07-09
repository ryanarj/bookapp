import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBlogForm from '../forms/SearchBlogForm';

class NewBlogPost extends React.Component{
    state = {
        blogPost: null
    }

    render() {
        return (
            <Segment>
                <h1>Add a new blog post.</h1>
                <SearchBlogForm />
            </Segment>
        );
    }
}

export default NewBlogPost;