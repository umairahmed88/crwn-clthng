import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.component";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
