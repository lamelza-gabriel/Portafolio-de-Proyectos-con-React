import React from "react";

const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<nav>
					<a
						onClick={() => {
							let offsetTop = document.getElementById("acerca-de").offsetTop;
							window.scrollTo({
								top: offsetTop - 50,
								behavior: "smooth",
							});
						}}
					>
						Acerca De
					</a>
					<a
						onClick={() => {
							let offsetTop = document.getElementById("menu").offsetTop;
							window.scrollTo({
								top: offsetTop - 250,
								behavior: "smooth",
							});
						}}
					>
						Menu
					</a>
					<a
						onClick={() => {
							let offsetTop = document.getElementById("galeria").offsetTop;
							window.scrollTo({
								top: offsetTop - 50,
								behavior: "smooth",
							});
						}}
					>
						Galeria
					</a>
					<a
						onClick={() => {
							let offsetTop = document.getElementById("ubicacion").offsetTop;
							window.scrollTo({
								top: offsetTop - 50,
								behavior: "smooth",
							});
						}}
					>
						Ubicacion
					</a>
				</nav>

				<div className='header-text'>
					<h1>
						Café <span>del Mundo</span>
					</h1>
					<h3>Descripcion del cafe</h3>
				</div>
			</div>
		</header>
	);
};

export default Header;
