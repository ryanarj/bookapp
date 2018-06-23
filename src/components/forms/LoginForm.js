import React from 'react';
import PropsTypes from 'prop-types';
import {Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
    // Init states
    state = {
        data: {
            email: '',
            password: '',
        },
        loading: false,
        errors: {}
    };

    onChange = e => 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    // When clicked, func will validate the state and check for erros
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
          this.props
            .submit(this.state.data);
        }
      };
    
    // Validates if the state is indeed not empty 
    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if(!data.password) errors.password = "Please add a password.";
        return errors;
    };

    render(){
        const { data, errors, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                { errors.global && 
                (<Message negative>
                    <Message.Header>There is problem here.. </Message.Header>
                    <p>{errors.global}</p>
                </Message>
                )}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                    id="email" type="email" name="email" 
                    placeholder="Enter in a valid email..."
                    onChange={this.onChange} value={data.email}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                    id="password" type="password" name="password" 
                    placeholder="Enter in your password.."
                    value={data.password} onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.PropsTypes = {
    submit: PropsTypes.func.isRequired
}

export default LoginForm;