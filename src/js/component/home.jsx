import React from "react";
import TaskList from "./taskList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid col-6">
		<h1
			className="text-center"
			style={{ margin: "20px 10px", fontSize: "2cm" }}>
			TO DO LIST
		</h1>
		<TaskList />
	</div>
	);
};

export default Home;
