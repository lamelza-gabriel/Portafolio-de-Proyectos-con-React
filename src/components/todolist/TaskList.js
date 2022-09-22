import React from "react";
import Checkbox from "./Checkbox";

const TaskList = ({ list, setList }) => {
	//esta funcion se encargara de revisar el estado del checked del componente checkbox, esta se la pasamos al checkbox
	const changeStatus = (e) => {
		//destructuramos las props name y checked del e.target, ya que esta funcion se la pasaremos al onchange del input de tipo checkbox
		const { name, checked } = e.target;

		//esta funcion se encargara de actualizar el estado con los datos mas "actuales"
		//usando el spread operator mezcla la tarea con lo sgte: si el id de la tarea es igual al name del input entonces checked se marca a true, en caso contrario sigue siendo false(valor por defecto que le dimos a done)
		const updateList = list.map((task) => ({
			...task,
			done: task.id === name ? checked : task.done,
		}));

		//actualizamos el valor del estado list con la funcion updateList
		setList(updateList);
	};

	//funcion para eliminar las tareas finalizadas
	//para eso usaremos el metodo filter, donde filtraremos y guardaremos en una variable todas las tareas que tengan su propiedad done en false, y luego estas mismas las agregamos al estado de list, las demas que estaban con el estado de true fueron las que estaban marcadas, esas seran eliminadas ya que al no pasar la condicion impuesta no se actualiza el estado con ellas, y quedan fuera del renderizado, eliminadas
	const removeTasks = (e) => {
		const updateList = list.filter((task) => !task.done);
		setList(updateList);
	};

	//con un map vamos  recorrer el estado list para generar, por cada item, un componente checkbox
	const tasks = list.map((task) => {
		return <Checkbox key={task.id} data={task} onChange={changeStatus} />;
	});

	//usamos un renderizado condicional para mostrar las tareas en caso de tener, si no mostramos un mensaje, lo mismo sucedera con el btn de eliminar todas las tareas, en caso de no haber tareas retornamos un null(lo cual no muestra el btn)
	return (
		<div className='todo-list'>
			{list.length
				? tasks
				: "No hay tareas pendientes, ingrese una a continuacion"}
			{list.length ? (
				<p>
					<button className='button blue' onClick={removeTasks}>
						Borrar tareas finalizadas
					</button>
				</p>
			) : null}
		</div>
	);
};

export default TaskList;
