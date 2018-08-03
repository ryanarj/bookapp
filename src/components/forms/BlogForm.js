import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class BlogForm extends React.Component {
  state = {
    data: {
      id: this.props.blog.id,
      title: this.props.blog.title,
      author: this.props.blog.author,
      body: this.props.blog.body,
    },
    index: 0,
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
        data: {
            id: this.props.blog.id,
            title: this.props.blog.title,
            author: this.props.blog.author,
            body: this.props.blog.body,
          },
    });
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Can't be blank";
    if (!data.author) errors.author = "Can't be blank";
    if (!data.body) errors.body = "Can't be blank";
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="title">Blog Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={data.title}
                    onChange={this.onChange}
                  />
                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field>

                <Form.Field error={!!errors.author}>
                  <label htmlFor="author">Blog Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Author"
                    value={data.author}
                    onChange={this.onChange}
                  />
                  {errors.author && <InlineError text={errors.author} />}
                </Form.Field>

                <Form.Field error={!!errors.pages}>
                  <label htmlFor="body">Body</label>
                  <input
                    disabled={data.body === undefined}
                    type="text"
                    id="body"
                    name="body"
                    value={data.body !== undefined ? data.body : "Loading..."}
                    onChange={this.onChange}
                  />
                  {errors.body && <InlineError text={errors.body} />}
                </Form.Field>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BlogForm.propTypes = {
  submit: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired
};

export default BlogForm;
