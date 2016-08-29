import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

import SearchIcon from 'material-ui/svg-icons/action/search';
import PlaceIcon from 'material-ui/svg-icons/maps/place';

export default class Search extends Component {
	render() {

		const data = '[{"blue" : "is ok", "red" : "is my fave color"}]';
		var abc = JSON.parse(data);

		const dataSource1 = [
		  {
		    text: abc[0].red,
		    value: (
		      <MenuItem
		        primaryText="Lotus Temple"
		        secondaryText="Some address"
		        leftIcon={<PlaceIcon />}
		      />
		    ),
		  },
		  {
		    text: 'Qutub Minar',
		    value: (
		      <MenuItem
		        primaryText="Qutub Minar"
		        secondaryText=""
		        leftIcon={<PlaceIcon />}

		      />
		    ),
		  },
		];

		return (
			<div className="search container shadow-2dp">
				<div className="center-card col-xs-12">
					<form action="#">
						<div>
							Search :
							<AutoComplete
					      hintText="Enter name of the place"
					      filter={AutoComplete.fuzzyFilter}
					      dataSource={dataSource1}
					      maxSearchResults={5}
					      fullWidth={true}
					    />
				    </div>

				    
			    </form>
				</div>
			</div>
		);
	}
}
