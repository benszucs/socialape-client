import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import React, { Component } from 'react';
import Scream from '../components/Scream';

export class Home extends Component {
	state = {
		screams: null,
	};
	componentDidMount() {
		axios
			.get('/screams')
			.then(res => {
				console.log({ screams: res.data });
				this.setState({
					screams: res.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		let recentScreamsMarkup = this.state.screams ? (
			this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
		) : (
			<p>Loading...</p>
		);
		return (
			<Grid container spacing={4}>
				<Grid item sm={8} xs={12}>
					{recentScreamsMarkup}
				</Grid>
				<Grid item sm={4} xs={12}>
					<p>Profile...</p>
				</Grid>
			</Grid>
		);
	}
}

export default Home;
