import React from "react";
import Navbar from "./Navbar";
import Tecnologias from "./Tecnologias";
import Proyectos from "./Proyectos";
import Formulario from "./Formulario";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Tecnologias />
				<Proyectos />
				<Formulario />
			</main>
			<Footer />
		</>
	);
};

export default Home;
