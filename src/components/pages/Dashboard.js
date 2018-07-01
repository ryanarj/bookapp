import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Message } from 'semantic-ui-react';
import ProfileForm from '../forms/ProfileForm';
import CommentForm from '../forms/CommentForm';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <ProfileForm />
                <CommentForm />
            </div>
        );
    }
}

Dashboard.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
}

function mapsStateToProps(state){
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapsStateToProps)(Dashboard);