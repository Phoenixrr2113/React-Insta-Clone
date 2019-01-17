import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = props => {
	return (
		<TextField
			hintText="What are we looking for?"
			id="text-field-controlled"
			name="searchTerm"
			onChange={props.userSearch}
			fullWidth={true}
			floatingLabelText="Search"
			floatingLabelStyle={{ paddingLeft: '40%' }}
		/>
	);
};

export default SearchBar;
