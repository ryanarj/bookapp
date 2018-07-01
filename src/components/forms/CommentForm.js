import React from 'react'


class CommentForm extends React.Component {
    state = {
        data: {
          name: "Ryan",
          year: "",
          comment: ""

        },
        loading: false,
        errors: {}
    };

    render() {
        const { data, errors, loading } = this.state;
    
        return (
                <div class="ui comments">
                <div class="comment">
                    <a class="avatar">
                    </a>
                    <div class="content">
                    <a class="author">{data.name}</a>
                    <div class="metadata">
                        <div class="date">1 day ago</div>
                    </div>
                    <div class="text">
                        <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
                        <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                    </div>
                </div>
                <div class="comment">
                    <a class="avatar">
                    </a>
                    <div class="content">
                    <a class="author">Christian Rocha</a>
                    <div class="metadata">
                        <div class="date">2 days ago</div>
                    </div>
                    <div class="text">
                        I re-tweeted this.
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                    </div>
                </div>
                <form class="ui reply form">
                    <div class="field">
                    <textarea></textarea>
                    </div>
                    <div class="ui primary submit labeled icon button">
                    <i class="icon edit"></i> Add Comment
                    </div>
                </form>
                </div>
        )
    }
}
export default CommentForm;