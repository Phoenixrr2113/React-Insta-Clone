import React from 'react';
import Comment from './comment';
import TextField from 'material-ui/TextField';
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
				<form onSubmit={props.addComment}>
					<input
						name="newComment"
						value={props.inputTerm}
						onChange={props.handleChange}
					/>
				</form>
			</div>
		);
	}
};
export default CommentSection;
