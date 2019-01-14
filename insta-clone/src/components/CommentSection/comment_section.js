import React from 'react';
import Comment from './comment';
const CommentSection = props => {
	return (
		<div>
			{props.comments.map((el, i) => {
				return <Comment text={el.text} key={i} />;
			})}
		</div>
	);
};
export default CommentSection;
