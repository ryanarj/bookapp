import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class ProfileForm extends React.Component {
    state = {
        data: {
          name: "",
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
                <Image src='/assets/images/avatar/large/matthew.png' />
                <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{data.year}</span>
                </Card.Meta>
                <Card.Description>{data.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
        )
    }
}
export default ProfileForm;