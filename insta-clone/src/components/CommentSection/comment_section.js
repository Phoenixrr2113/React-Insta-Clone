import React from 'react';
import Comment from './comment';
import TextField from 'material-ui/TextField';
const CommentSection = props => {
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
				style={{ width: '100%' }}
				floatingLabelText="Add a comment..."
			/>
		</div>
	);
};
export default CommentSection;
