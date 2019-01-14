import React from 'react';
import CommentSection from '../CommentSection/comment_section';

const PostContainer = props => {
	return (
		<div>
			<CommentSection comments={props.comments} />
		</div>
	);
};

export default PostContainer;
