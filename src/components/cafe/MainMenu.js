import React, { useState } from "react";
import items from "./data.js";
import Categorias from "./Categorias.js";
//import Menu from "./Menu.js";
import MenuTest from "./MenuTest.js";

/*
Los botones del menu seran desplegados dinamicamente, para esto veremos la propiedad category de data.js, donde por cada category que tenga nuestros datos, un boton distinto sera desplegado
*/

//funcionalidad para botones dinamicos
//lo que hacemos es usar el spread operator, para mezclar la cateogoria all con lo sgte: el new Set lo que hace es guardar todos los item de items que contengan una category unica(items.map lo que haria sera guardar todas las categorias, pero nosotros no queremos tener 9 categorias, ya que se repiten las mismas, por eso con new Set lo que sucede es que guardamos el valor de cada categoria una vez, entonces tenemos en allCategories todas las categorias nombradas una vez mas la categoria all)
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
//console.log(allCategories);

const MainMenu = () => {
	//nuestro estado para el menu sera igual al archivo con nuestros datos
	const [menuItems, setMenuItems] = useState(items);
	//estado para las categorias
	const [categorias, setCategorias] = useState(allCategories);
	//console.log(categorias);
	//funcion para filtrar
	const filtrarItems = (categoriaItem) => {
		//si la categoria es all, muestra todos los items
		if (categoriaItem === "all") {
			setMenuItems(items);
			return;
		}
		//lo que haremos sera en una variable usar el metodo filter, de esta manera guardamos todos los item(de nuestros datos) que cumplan con la condicion: deben tener en su propiedad category el mismo valor que el parametro que recibio la funcion(categoriaItem)
		const newItems = items.filter((item) => item.category === categoriaItem);
		//le damos al valor menuItem los items filtrados, y como nuestra app renderiza este estado, cambian los items que se estan desplegando
		setMenuItems(newItems);
	};

	//Pasaremos como prop el estado menuItem, para dentro poder desplegar todos los items uno por uno, dentro de Menu
	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Nuestro menu</h2>
					<div className='underline'></div>
				</div>
				<Categorias categorias={categorias} filtrarItems={filtrarItems} />
				<MenuTest menuItems={menuItems} />
			</section>
		</main>
	);
};

export default MainMenu;
