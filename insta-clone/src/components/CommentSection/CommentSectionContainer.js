// import React from 'react';
// import TextField from 'material-ui/TextField';
// import Moment from 'react-moment';

// import Comment from './Comment';

// const CommentSection = props => {
// 	if (!props.comments) {
// 		return <div>no props...</div>;
// 	} else {
// 		return (
// 			<div className="comment-section">
// 				{props.comments.map((el, i) => {
// 					return (
// 						<Comment commentUser={el.username} commentText={el.text} key={i} />
// 					);
// 				})}
// 				<div className="time-posted">
// 					{/* <Moment locale="LLL" fromNow> */}
// 					{props.timeStamp}
// 					{/* </Moment> */}
// 				</div>
// 				<hr />

// 				<TextField
// 					hintText="What's on your mind?"
// 					id="text-field-controlled"
// 					name="newComment"
// 					onChange={props.handleChange}
// 					fullWidth={true}
// 					floatingLabelText="Add a comment..."
// 				/>
// 			</div>
// 		);
// 	}
// };
// export default CommentSection;

import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			comment: '',
		};
	}

	componentDidMount() {
		const id = this.props.postId;
		if (localStorage.getItem(id)) {
			this.setState({
				comments: JSON.parse(localStorage.getItem(this.props.postId)),
			});
		} else {
			this.setComments();
		}
	}

	componenetWillUnmount() {
		this.setComments();
	}

	setComments = () => {
		localStorage.setItem(
			this.props.postId,
			JSON.stringify(this.state.comments),
		);
	};

	commentHandler = e => {
		this.setState({ comment: e.target.value });
	};

	handleCommentSubmit = e => {
		e.preventDefault();
		const newComment = { text: this.state.comment, username: 'ryanhamblin' };
		const comments = this.state.comments.slice();
		comments.push(newComment);
		this.setState({ comments, comment: '' });
		setTimeout(() => {
			this.setComments();
		}, 500);
	};

	render() {
		return (
			<div>
				{this.state.comments.map((c, i) => (
					<Comment key={i} comment={c} />
				))}
				<CommentInput
					comment={this.state.comment}
					submitComment={this.handleCommentSubmit}
					changeComment={this.commentHandler}
				/>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({ text: PropTypes.string, username: PropTypes.string }),
	),
};

export default CommentSection;
