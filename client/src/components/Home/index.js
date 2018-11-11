import React from 'react';
import "./style.css";
import Nav from "../Nav";
import ArticleFeed from "../ArticleFeed";
import Grid from '@material-ui/core/Grid';
import TeamBar from '../TeamBar';

const Home = (props) =>{
	return (
		<div>	
			<Nav 
			handleLogout={props.handleLogout}
			/>
			<br/>
			<Grid container spacing={24}>
				<Grid item xs={12} sm={3}>
				<TeamBar />
				</Grid>
				<Grid item xs={12} sm={8}>
				<ArticleFeed />
				</Grid>
				<Grid item xs={0} sm={1}></Grid>
			</Grid>
		</div>
	);
};

export default Home;