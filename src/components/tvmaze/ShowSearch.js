import React, { useState, useEffect } from "react";
import ShowForm from "./ShowForm";
import ShowInfo from "./ShowInfo";
import Loader from "./Loader";
//import { helpHttp } from "./helpHttps";
import "../../styles/tvmaze/ShowSearch.css";
import LogoTvMaze from "../../assets/tvmaze/tvm-header-logo.png";

const ShowSearch = () => {
	//ESTADOS
	const [loader, setLoader] = useState(false);
	const [search, setSearch] = useState(null);
	const [mostrarShows, setMostrarShows] = useState("");

	//useEffect que dispara la la peticion fetch, pero tendremos un btn que disparará el cambio en el estado search, que es la dependencia de este useEffect
	useEffect(() => {
		if (search === null) return;

		//haciendo peticion fetch a los datos
		const fetchData = async () => {
			const shows = search;

			//URL API
			let UrlApi = `https://api.tvmaze.com/search/shows?q=${shows}`;

			setLoader(true);

			//peticion fetch y paso de datos a formato json
			let respuesta = await fetch(UrlApi);
			let json = await respuesta.json();
			//validacion
			if (json.length === 0) {
				alert("No hay resultados");
			} else {
				/*
				json.forEach((element) => {
					console.log(element);
				});
				*/
			}
			//console.log(json)
			//en json viene la data, debemos guardar esos datos en algun estado para poder mandarlo a showInfo
			setMostrarShows(json);
			setLoader(false);
		};
		fetchData();
	}, [search]);

	const manejarDatos = (datos) => {
		//console.log(datos)
		setSearch(datos);
	};

	return (
		<>
			<header className='tv-header'>
				<div className='top-header'>
					{/* Para poder colocar una imagen debemos escribir su ruta como si comenzara en public(public sera el punto de partida de la ruta) */}
					<img src={LogoTvMaze} alt='logo TV Maze' />
					<div className='user-container'>
						<p>Login</p>
						<p>Register</p>
					</div>
				</div>
				<nav>
					<ul>
						<li>Shows</li>
						<li>Actors</li>
						<li>Episodes</li>
						<li>Networks</li>
						<li>Articles</li>
						<li>Calendar</li>
						<li>Forums</li>
					</ul>
				</nav>
			</header>
			<ShowForm manejarDatos={manejarDatos}></ShowForm>
			{loader && <Loader></Loader>}
			<ShowInfo mostrarShows={mostrarShows}></ShowInfo>
		</>
	);
};

export default ShowSearch;
