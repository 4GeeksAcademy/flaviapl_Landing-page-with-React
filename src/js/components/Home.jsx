import React from "react";
import Navbar from "./navbar";
import Alert from "./alert";
import CardHolder from "./cardHolder";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container">
				<Alert/>
				<CardHolder/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;