import React from "react";

//recibimos la funcion para actualizar los estados del checkbox y los datos de cada tarea
const Checkbox = ({ data, onChange }) => {
	//console.log(data);
	//console.log(onChange);

	//destructuramos los sgtes valores
	const { id, descripcion, done } = data;

	//cada checkbox renderizara lo sgte: el input que tendra el mismo nombre que el id(que es unico, recordemos que fue generado con el objeto Date), sera de tipo checkbox(para que pueda tener la prop defaultChecked), la prop defaultChecked que sera igual a false(por defecto, luego puede cambiar claramente, para el onChange) y el onChange que nos servira para actualizar el estado list con los nuevos valores de este elemento que forma parte del estado list
	//ademas ta funciona la funcionalidad de eliminar tareas marcadas como checked
	return (
		<>
			<svg
				viewBox='0 0 0 0'
				style={{ position: "absolute", zIndex: -1, opacity: 0 }}
			>
				<defs>
					<path id='todo__line' d='M21 12.3h168v0.1z' />
					<path
						id='todo__box'
						d='M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4'
					/>
					<path id='todo__check' d='M10 13l2 2 5-5' />
					<circle id='todo__circle' cx='13.5' cy='12.5' r='10' />
				</defs>
			</svg>

			<label className='todo new-item'>
				<input
					className='todo__state'
					name={id}
					type='checkbox'
					defaultChecked={done}
					onChange={onChange}
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					viewBox='0 0 200 25'
					className='todo__icon'
				>
					<use xlinkHref='#todo__line' className='todo__line' />
					<use xlinkHref='#todo__box' className='todo__box' />
					<use xlinkHref='#todo__check' className='todo__check' />
					<use xlinkHref='#todo__circle' className='todo__circle' />
				</svg>
				<div className='todo__text'>{descripcion}</div>
			</label>
		</>
	);
};

export default Checkbox;
