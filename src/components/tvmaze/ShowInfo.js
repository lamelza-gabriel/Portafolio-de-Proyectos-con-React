import React from "react";
import ShowIndividual from "./ShowIndividual";

const ShowInfo = ({ mostrarShows }) => {
	let shows = mostrarShows;
	//console.log(shows);
	return (
		<section className='shows'>
			{shows.length > 0 &&
				shows.map((el) => (
					<ShowIndividual
						key={el.show.id}
						image={el.show.image}
						name={el.show.name}
						sintesis={el.show.summary}
					></ShowIndividual>
				))}
		</section>
	);
};

export default ShowInfo;
