import React from 'react';

const Comment = props => {
	return (
		<div className="comment">
			<div className="commenter">
				{props.commentUser}
				<span className="comment-text">{props.commentText}.</span>
			</div>
		</div>
	);
};

export default Comment;
