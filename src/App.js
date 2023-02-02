import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import React from "react";
import Home from "./components/Home";
import { Route, Routes, HashRouter } from "react-router-dom";
import ShowSearch from "./components/tvmaze/ShowSearch";
import CafeHome from "./components/cafe/CafeHome";

function App() {
	return (
		<>
			<ThemeProvider>
				<HashRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/show-search' element={<ShowSearch />}></Route>
						<Route path='/cafe' element={<CafeHome />}></Route>
					</Routes>
				</HashRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
