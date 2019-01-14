import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
	state = {
		postData: dummyData,
	};
	render() {
		return (
			<div className="App">
				<div>app</div>
			</div>
		);
	}
}

export default App;
