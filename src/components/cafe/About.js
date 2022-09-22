import React from "react";
import AcercaImg from "../../assets/cafe/acerca-de.jpg";

const About = () => {
	return (
		<section className='about'>
			<div className='image-container'>
				<img alt='acerca-de-img' src={AcercaImg} />
			</div>

			<div id='acerca-de' className='about-text-container'>
				<div className='about-text'>
					<h2>Acerca De</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
						distinctio aut sed voluptatem nobis quisquam. Eaque nisi, iusto,
						laudantium commodi reiciendis totam dolores sequi adipisci eveniet
						cum iure autem dicta!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
						distinctio aut sed voluptatem nobis quisquam. Eaque nisi, iusto,
						laudantium commodi reiciendis totam dolores sequi adipisci eveniet
						cum iure autem dicta!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
