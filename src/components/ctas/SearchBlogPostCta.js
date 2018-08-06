import React from 'react';
import {Card, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const SearchBlogPostCta = (props) => (
    <Card>
        <Card.Content textAlign="center">
            <Card.Header> 
                Search for blog post
            </Card.Header>
            <Link to="/blogPosts/new">
                <Icon name="search" size="massive"/>
            </Link>
        </Card.Content>
    </Card>
)

export default SearchBlogPostCta;