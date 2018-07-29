import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProfileForm from '../forms/ProfileForm';
import {allBlogPostsSelector} from '../../reducers/blogPosts';
import AddBlogPostCta from '../ctas/AddBlogPostCta';

const Dashboard = () => (
    <div>
        {<ProfileForm />}
        {<AddBlogPostCta/>}
    </div>
)

Dashboard.propTypes = {
    blogPosts: PropTypes.arrayOf(
        PropTypes.shape({
        subject: PropTypes.string.isRequired 
    }).isRequired).isRequired
}

function mapsStateToProps(state){
    return {
        blogPosts: allBlogPostsSelector
    }
}

export default connect(mapsStateToProps)(Dashboard);