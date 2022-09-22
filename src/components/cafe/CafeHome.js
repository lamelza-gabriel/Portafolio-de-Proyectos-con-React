import "../../styles/cafe/styles.css";
import React from "react";
import About from "./About";
import Contacto from "./Contacto";
import GaleriaImg from "./GaleriaImg";
import Header from "./Header";
import MainMenu from "./MainMenu";
//import Menu from "./Menu";
import "../../styles/cafe/index.css";

const CafeHome = () => {
	return (
		<>
			<Header />
			<main className='main-cafe'>
				<About />
				<MainMenu />
				<GaleriaImg />
				<Contacto />
			</main>
			<footer className='footer-cafe'>
				<p>Copyright Lamelza Gabriel</p>
			</footer>
		</>
	);
};

export default CafeHome;
