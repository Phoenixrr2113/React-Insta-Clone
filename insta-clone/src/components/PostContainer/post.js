import React from 'react';
import CommentSection from '../CommentSection/comment_section';

const Post = props => {
	return (
		<div>
			<div>{props.posts.username}</div>
			{/* <div>{props.posts.thumbnailUrl}</div> */}
			{/* <div>{props.posts.imageUrl}</div> */}
			<div>{props.posts.likes}</div>
			<div>{props.posts.timestamp}</div>
			<CommentSection comments={props.posts.comments} />
		</div>
	);
};

export default Post;
