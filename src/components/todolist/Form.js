import React, { useState } from "react";

/*

creamos el estado donde se guarda la descripcion de la tarea a agregar

le asignamos al estado el valor de lo que escriba el usuario

ejecutamos un renderizado condicional de la propiedad disabled, donde si el estado contiene algun valor el btn se mostrara, caso contrario no lo hace

este componente recibira la funcion handleItem, al cual se le debe mandar id, donde, descripcion

*/

const Form = ({ addItem }) => {
	//estados
	const [descripcion, setDescripcion] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		addItem({
			done: false,
			id: new Date().toString(),
			descripcion,
		});

		setDescripcion("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='todo-list'>
				<div className='file-input'>
					<input
						className='text'
						type='text'
						value={descripcion}
						onChange={(e) => {
							setDescripcion(e.target.value);
						}}
					/>
					<button
						className='button pink'
						disabled={descripcion ? "" : "disabled"}
					>
						Añadir
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
