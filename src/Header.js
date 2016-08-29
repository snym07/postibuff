import React, { Component } from 'react';

import Search from './search/Search';
import PlaceCard from './PlaceCard';

export default class Header extends Component {
	render() {
		return (
			<div>
				<img src="images/full_logo.png" />
				<h1 className="slogan">Great Places to visit in Delhi!!</h1>
				<Search />
				<PlaceCard />
			</div>
		);
	}
}
