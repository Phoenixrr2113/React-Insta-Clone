import React from 'react';
import Comment from './comment';
const CommentSection = props => {
	return (
		<div>
			{props.comments.map((el, i) => {
				return (
					<Comment commentUser={el.username} commentText={el.text} key={i} />
				);
			})}
		</div>
	);
};
export default CommentSection;
