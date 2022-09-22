import { createContext, useState } from "react";

//creamos el contexto
const ThemeContext = createContext();

const temaInicial = "light";

const ThemeProvider = ({ children }) => {
	//estados
	const [tema, setTema] = useState(temaInicial);

	const manejarTema = (e) => {
		if (e.target.value === "light") {
			setTema("light");
		} else {
			setTema("dark");
		}
	};

	//variables que pasamos a los hijos del provider
	const data = { tema, manejarTema };

	//return donde le pasamos al provider como propiedad data, y tiene como contenido(hijos) la propiedad children, que seran los hijos(componentes) que necesiten el contexto
	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
