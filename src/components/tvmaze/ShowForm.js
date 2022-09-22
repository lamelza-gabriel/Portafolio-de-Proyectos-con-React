import React, { useState } from "react";
import "../../styles/tvmaze/ShowForm.css";

const ShowForm = ({ manejarDatos }) => {
	const [search2, setSearch2] = useState("");
	//console.log(search2)

	//submit del form
	const manejarSubmit = (e) => {
		e.preventDefault();
		//console.log("hola mi rey");
		//console.log(search2);
		manejarDatos(search2);
	};

	return (
		<main>
			<h1>Buscador de shows de TV</h1>
			<div className='search-container'>
				<form onSubmit={manejarSubmit}>
					<input
						placeholder='Ingrese un show a buscar'
						className='input'
						type='text'
						name='shows'
						onChange={(event) => setSearch2(event.target.value)}
					/>
					<input className='search-btn' type='submit' value='Buscar' />
				</form>
			</div>
			<p className='thanks-text'>
				Esto es posible gracias a la API de
				<a target='_blank' rel='noreferrer' href='https://www.tvmaze.com/api'>
					 TV Maze
				</a>
			</p>
		</main>
	);
};

export default ShowForm;
