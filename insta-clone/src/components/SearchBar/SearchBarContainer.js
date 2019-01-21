// import React from 'react';
// import TextField from 'material-ui/TextField';

// const SearchBar = props => {
// 	return (
// 		<TextField
// 			hintText="What are we looking for?"
// 			id="text-field-controlled"
// 			name="searchTerm"
// 			onChange={props.userSearch}
// 			fullWidth={true}
// 			floatingLabelText="Search"
// 			floatingLabelStyle={{ paddingLeft: '40%' }}
// 		/>
// 	);
// };

// export default SearchBar;

import React from 'react';
import IGLogo from '../../assets/iglogo.png';

const SearchBar = props => {
	return (
		<div className="search-bar-wrapper">
			<div className="image-wrapper">
				<img alt="instagram logo" src={IGLogo} className="logo-image" />
			</div>
			<div>
				<input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
			</div>
			<div className="social-wrapper">
				<div className="social">
					<i className="far fa-compass" />
				</div>
				<div className="social">
					<i className="far fa-heart" />
				</div>
				<div className="social">
					<i className="far fa-user-circle" />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
