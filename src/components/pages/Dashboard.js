import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProfileForm from '../forms/ProfileForm';
import {allBlogPostsSelector} from '../../reducers/blogPosts';
import AddBlogPostCta from '../ctas/AddBlogPostCta';
import {fetchBlogs} from '../../actions/blogs'

class Dashboard extends React.Component {
    componentDidMount = () => this.onInit(this.props);
    onInit = (props) => props.fetchBlogs();

    render(){
        return(
            <div>
            {<AddBlogPostCta/>}
            {<ProfileForm/>}
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchBlogs: PropTypes.func.isRequired,
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

export default connect(mapsStateToProps, {fetchBlogs})(Dashboard);