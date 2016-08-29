import React, { Component } from 'react';
import {render} from 'react-dom';
import {teal500, teal700, red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './Main';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: teal500,
		primary2Color: teal700,
		accent1Color: red500,
		pickerHeaderColor: teal500,
	},
	appBar: {
		//backgroundColor: indigo500,
	},
});

class App extends Component {
	render() {
		return (
			<div>
				<MuiThemeProvider muiTheme={muiTheme}>
					<Main />
				</MuiThemeProvider>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));