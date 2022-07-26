import React from "react";
import TaskList from "./taskList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid col-5">
		<h1
			className="text-center"
			>
			TO DO LIST
		</h1>
		<TaskList />
	</div>
	);
};

export default Home;
