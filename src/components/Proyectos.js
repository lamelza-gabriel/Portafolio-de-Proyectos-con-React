import React from "react";
import cafeCaratula from "../assets/main/nathan-dumlao-6VhPY27jdps-unsplash.jpg";
import tvCaratula from "../assets/tvmaze/tvm-header-logo.png";
import "../styles/Proyectos.css";
import { NavLink } from "react-router-dom";
import taskCaratula from "../assets/task-picture.png";

const Proyectos = () => {
	return (
		<section id='section-proyectos' className='proyectos'>
			<div className='aviso'>
				<h3>Proyectos</h3>
				<p>Algunos de los proyectos en los que trabaje recientemente</p>
			</div>

			<div className='proyects-container'>
				{/* Proyecto Individual */}
				<article className='proyect'>
					<h3>Home page de un Café</h3>
					<p>Pagina de un cafe con secciones varias</p>
					<div className='proyect-image'>
						<img
							className='caratula-proyecto'
							id='img-test'
							src={cafeCaratula}
							alt='personas tomando un cafe'
						/>
						<NavLink target='_blank' className='nav-link' to='/cafe'>
							Ver proyecto
						</NavLink>
					</div>
				</article>

				<article className='proyect'>
					<h3>Buscador de shows de TV</h3>
					<p>Buscar shows con API de Fecth y TV Maze</p>
					<div className='proyect-image'>
						<img
							className='caratula-proyecto'
							id='img-test'
							src={tvCaratula}
							alt='logo API tvMaze'
						/>
						<NavLink target='_blank' className='nav-link' to='/show-search'>
							Ver proyecto
						</NavLink>
					</div>
				</article>

				<article className='proyect'>
					<h3>Lista de Tareas</h3>
					<p>Aplicacion de Lista de tareas</p>
					<div className='proyect-image'>
						<img
							className='caratula-proyecto'
							id='img-test'
							alt='test'
							src={taskCaratula}
						/>
						<a
							href='https://github.com/lamelza-gabriel/Task-Manager-React-Node'
							target='_blank'
							rel='noreferrer'
						>
							Ver codigo de proyecto en GitHub
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Proyectos;
