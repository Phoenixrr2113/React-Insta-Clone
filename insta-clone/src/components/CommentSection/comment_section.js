import React from 'react';
import TextField from 'material-ui/TextField';
import Comment from './comment';

const CommentSection = props => {
	if (!props.comments) {
		return <div>no props...</div>;
	} else {
		return (
			<div className="comment-section">
				{props.comments.map((el, i) => {
					return (
						<Comment commentUser={el.username} commentText={el.text} key={i} />
					);
				})}
				<div className="time-posted">{props.timeStamp}</div>
				<hr />

				<TextField
					hintText="What's on your mind?"
					id="text-field-controlled"
					name="newComment"
					onChange={props.handleChange}
					fullWidth={true}
					floatingLabelText="Add a comment..."
				/>
			</div>
		);
	}
};
export default CommentSection;
