import React from 'react';

const Comment = props => {
	return (
		<div className="comment">
			<div>{props.commenter}</div>
			<div>{props.commentText}</div>
		</div>
	);
};

export default Comment;
