import React from "react";

const Contacto = () => {
	return (
		<>
			<section className='contacto-horarios'>
				<div className='contacto-container'>
					<h3>Contacto</h3>
					<br />
					<p>San Martin 336</p>
					<p>San Rafael, Mendoza</p>
					<br />
					<p>+54 2604289901</p>
					<p>cafedelmundo@gmail.com</p>
				</div>

				<div className='horarios-container'>
					<h3>Horarios</h3>
					<br />
					<p>Lunes a Viernes</p>
					<p>7:00am - 9:00pm</p>
					<br />
					<p>Sabados y Domingos</p>
					<p>11:00am - 11:00pm</p>
				</div>
			</section>

			<section id='ubicacion' className='ubicacion-container'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.994812320351!2d-68.35143910169393!3d-34.60930565138702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96790813dee15ec5%3A0x45e7d44cd94795ca!2sCaf%C3%A9%20del%20Mundo!5e0!3m2!1ses-419!2sar!4v1652129877281!5m2!1ses-419!2sar'
					width='600'
					height='450'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					title='ubicacion'
				></iframe>
			</section>
		</>
	);
};

export default Contacto;
