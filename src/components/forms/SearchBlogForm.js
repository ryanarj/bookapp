import React from 'react';
import PropTypes from "prop-types"; 
import {Form, Dropdown} from 'semantic-ui-react';
import axios from 'axios';

class SearchBlogForm extends React.Component{

    state = {
        query: '',
        loading: false,
        options: [],
        blogs: {}
    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer)
        this.setState({
            query: data,
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    }

    onChange = (e, data) => {
        this.setState({
            query: data
        });
        this.props.onBlogSelect(this.state.blogs[data.value])
    }

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({ loading: true})
        axios.get(`/api/blogs/search?q=${this.state.query}`)
            .then(res => res.data.blogs)
            .then(blogs => {
                const options = [];
                const blogHash = {};
                blogs.forEach(blog => {
                    blogHash[blog.id] = blog;
                    options.push({
                        key: blog.id,
                        value: blog.id,
                        text: blog.title
                    });
                });
                this.setState({loading:false, options, blogs: blogHash});
            });
    }

    render() {
        return(
        <Form>
            <Dropdown
            search
            fluid
            placeholder="Serach for a blog"
            value={this.state.query}
            onSearchChange={this.onSearchChange}
            options={this.state.options}
            loading={this.state.loading}
            onChange={this.onChange}
            />
        </Form>
    );
    }
}

SearchBlogForm.propTypes = {
    onBlogSelect: PropTypes.func.isRequired
  };

export default SearchBlogForm