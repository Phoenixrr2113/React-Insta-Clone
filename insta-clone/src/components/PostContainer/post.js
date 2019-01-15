import React from 'react';
import {
	Card,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText,
	// IconButton,
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import CommentSection from '../CommentSection/comment_section';

const Post = props => (
	<Card>
		<CardHeader
			title={props.posts.username}
			avatar={props.posts.thumbnailUrl}
		/>
		<CardMedia>
			<img src={props.posts.imageUrl} alt="" />
		</CardMedia>
		<CardTitle subtitle={props.posts.likes} />
		<CardText>
			<CommentSection comments={props.posts.comments} />
		</CardText>
		<TextField floatingLabelText="Add a comment" />
	</Card>
);

export default Post;
