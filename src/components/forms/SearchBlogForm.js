import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';
import axios from 'axios';

class SearchBlogForm extends React.Component{

    state = {
        query: '',
        loading: false,
        options: [{
            key: 1,
            value: 1,
            text: 'First blog'
        }, {
            key: 2,
            value: 1,
            text: 'Second blog'
        }],
        blogs: {}
    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer)
        this.setState({
            query: data,
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    }

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({ loading: true})
        axios.get(`/api/blogs/search?q=${this.state.query}`)
            .then(res => res.data.blogs)
    }

    render() {
        return(
        <Form>
            <Dropdown
            search
            fluid
            placeholder="Serach for a blog"
            value={this.state.query}
            onSearchChange={this.onChange}
            options={this.state.options}
            loading={this.state.loading}
            />
        </Form>
    );
    }
}

export default SearchBlogForm