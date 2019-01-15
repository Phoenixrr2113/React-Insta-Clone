import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const SearchBar = props => {
	return (
		<div>
			<AutoComplete
				floatingLabelText="Search"
				filter={AutoComplete.fuzzyFilter}
				dataSource={props.posts}
				maxSearchResults={5}
			/>
		</div>
	);
};

export default SearchBar;
