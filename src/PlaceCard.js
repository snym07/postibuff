import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class PlaceCard extends Component {
	render() {
		return (
			<div>
				<Card className="center-card col-xs-11 col-md-4">
			    <CardHeader
			      title="Lotus Temple"
			      subtitle="The address of Lotus Temple"
			    />
			    <CardMedia
			      overlay={<CardTitle title="Lotus Temple" />}
			    >
			      <img src="images/lotus_temple.jpg" />
			    </CardMedia>
			    <CardTitle title="Card title" subtitle="Card subtitle" showExpandableButton={true} />
			    <CardText expandable={true}>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Action1" />
			      <FlatButton label="Action2" />
			    </CardActions>
			  </Card>
			</div>
		);
	}
}
