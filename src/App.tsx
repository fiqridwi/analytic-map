// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./pages/Map";

import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Map />}></Route>
			</Routes>
		</>
	);
}

export default App;
