import React, { Component } from 'react';
import './index.css';

import AppRouter from './routers/AppRouter';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<AppRouter/>
		);
	}
}

export default App;

