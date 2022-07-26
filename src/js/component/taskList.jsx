import React, { useState } from "react";

const TaskList = () =>{

    const [tasks, setTasks] = useState ("");
    const [taskOfList, setTaskOfList] = useState([]);

    // Creo función manejadora de evento para que me guarde las tareas.
    const handleTask = (e) => {
        if (e.key === "Enter"){
            if(tasks !==""){
                setTaskOfList([...taskOfList,tasks]);
                setTasks("")
            }else{
                alert("Enter your task")
            }

        }
    }
    //Creo función para eliminar las tareas

    const deleteTask = (indexToDelete) =>{
        setTaskOfList(
            taskOfList.filter((task, taskIndex)=> taskIndex !== indexToDelete)
        )
    }

    return(
        <>
        <input
				type="text"
				className="form-control col-6"
                placeholder="Enter a task"
				aria-label="Username"
                onChange={(e)=>setTasks(e.target.value)}
                value={tasks}
                onKeyDown={handleTask}/>
        <ul>
        {taskOfList.map((item, i) => {
            return (
                <li key={i}>
                    <p>{item}</p>
                    <button onClick={()=>deleteTask(i)}> x </button>
                </li>
            )
        })}
        </ul>        
        </>
    )
}
export default TaskList;