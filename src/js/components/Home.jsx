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
			<Alert/>
			<CardHolder/>
			<Footer/>
		</>


	);
};

export default Home;