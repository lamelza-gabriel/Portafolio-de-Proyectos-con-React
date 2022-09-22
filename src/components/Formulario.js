import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import githubLogo from "../assets/main/github-brands.svg";
import instagramLogo from "../assets/main/instagram-brands.svg";
import linkedinLogo from "../assets/main/linkedin-in-brands.svg";
import "../styles/Formulario.css";

const Formulario = () => {
	const { tema } = useContext(ThemeContext);

	return (
		<section id='section-contacto' className={`contacto ${tema}`}>
			<div className='contact-text'>
				<h4>¿Quieres contactarme?</h4>
				<p>
					Por favor rellena el formulario, me pondre en contacto contigo en
					breve
				</p>
			</div>

			<div className={`form-container ${tema}`}>
				<form
					id='form'
					action='47efeb14376ff92d8ae9e66a71fe538c '
					method='POST'
				>
					<label htmlFor='nombre'>Nombre</label>
					<input type='text' name='nombre' required id='nombre' />
					<label htmlFor='email'>Correo Electronico</label>
					<input type='email' required name='email' id='email' />
					<label htmlFor='asunto'>Asunto</label>
					<input type='text' name='asunto' id='asunto' required />
					<textarea
						name='textarea'
						placeholder='Detalles Adicionales'
						id='textarea'
						cols='30'
						rows='10'
					></textarea>
					<input className='form-btn' type='submit' value='Enviar' />
				</form>
			</div>

			<div className='contact-info'>
				<h3>
					Ademas tambien puedes contactarme a traves de los siguientes medios
				</h3>
			</div>

			<div className='iconos-contacto'>
				<div className='icons-container'>
					<p>GitHub</p>
					<a href='https://github.com/lamelza-gabriel'>
						<img src={githubLogo} alt='logo github' />
					</a>
				</div>
				<div className='icons-container'>
					<p>Instagram</p>
					<a href='https://www.instagram.com/gabriel_lamelza/?hl=es'>
						<img src={instagramLogo} alt='logo instagram' />
					</a>
				</div>
				<div className='icons-container'>
					<p>LinkedIn</p>
					<a href='https://www.linkedin.com/in/gabriel-lamelza-960866239/'>
						<img src={linkedinLogo} alt='logo linkedin' />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Formulario;
