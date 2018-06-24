import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class ProfileForm extends React.Component {
    state = {
        data: {
          name: "Ryan",
          year: "",
          description: ""

        },
        loading: false,
        errors: {}
    };

    render() {
        const { data, errors, loading } = this.state;
    
        return (
            <Card>
                <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Year{data.year}</span>
                </Card.Meta>
                <Card.Description>Test{data.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
        )
    }
}
export default ProfileForm;