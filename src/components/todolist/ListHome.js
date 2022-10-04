import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import "../../styles/todolist/TaskListsStyles.css";

const ListHome = () => {
	//estado para almacenar las tareas
	//este estado y su funcion actualizadora sera recibida por TaskList
	const [list, setList] = useState([]);

	//funcion para añadir tareas, con el spread operator junta el valor del estado list con la funcion item que recibe como parametro
	//esta funcion se la pasamos al componente del formulario
	const addItem = (item) => {
		setList([...list, item]);
	};

	return (
		<div className='task-body'>
			<h1>Lista de Tareas</h1>
			<Form addItem={addItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default ListHome;
