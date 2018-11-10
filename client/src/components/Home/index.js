import React from 'react';
import "./style.css";
import Nav from "../Nav";
import ArticleFeed from "../ArticleFeed";

const Home = (props) =>{
	return (
		<div>
			<Nav 
			handleLogout={props.handleLogout}
			/>
			<container>
				<ArticleFeed />
			</container>
		</div>
	);
};

export default Home;