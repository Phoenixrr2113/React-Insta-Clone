import React from 'react';
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
				<div className="comment-input">
					<input
						name="newComment"
						value={props.inputTerm}
						onChange={props.handleChange}
					/>
				</div>
			</div>
		);
	}
};
export default CommentSection;
