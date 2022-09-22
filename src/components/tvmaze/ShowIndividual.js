import React from "react";
import "../../styles/tvmaze/ShowIndividual.css";

const ShowIndividual = ({ name, image, sintesis }) => {
	let sintesis2 = sintesis;
	let container = document.createElement("p");
	container.innerHTML = sintesis2;
	let texto = container.textContent || container.innerText || "";

	return (
		<article>
			<h3>{name}</h3>
			<div>
				<p>{texto}</p>
			</div>
			{/* 
			
			<img src={image}></img>
		*/}
			{image ? (
				<img src={image.medium} alt='descripcion-imagen'></img>
			) : (
				<img
					src='http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
					alt='descripcion imagen'
				></img>
			)}
		</article>
	);
};

export default ShowIndividual;
