import React from 'react';
import CommentSection from '../CommentSection/comment_section';

const PostContainer = props => {
	const comments = props.posts.map(el => {
		return <div>{el.props.children.comments}</div>;
	});
	return (
		<div>
			<CommentSection comments={comments} />
		</div>
	);
};

export default PostContainer;
