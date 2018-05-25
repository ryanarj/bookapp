import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
    state = {
        data: {
            email: '',
            password: '',
        },
        loading: false,
        errors: {}
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
    }

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if(!data.password) errors.password = "Please add a password.";
        return errors;
    }

    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    render(){
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input 
                    id="emailid" 
                    type="email" 
                    name="email" 
                    placeholder="Enter in a valid email"
                    onChange={this.onChange}
                    value={data.email}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    placeholder="put in password"
                    value={data.password}
                    onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;