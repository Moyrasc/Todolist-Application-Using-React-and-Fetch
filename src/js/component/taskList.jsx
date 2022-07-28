import React, { useEffect, useState } from "react";

const TaskList = () => {

    const [tasks, setTasks] = useState("");
    const [taskOfList, setTaskOfList] = useState([]);
    
    useEffect(()=>{
        const getTasks = async () =>{
            try {
                await fetch('https://assets.breatheco.de/apis/fake/todos/user/moyra')
                .then(response =>response.json())
                .then(data => setTaskOfList(data))
            } catch (error) {
                console.log(error)
            }
        }
        getTasks()
    },[])

    // fetch call para sincronizar las tareas con el servidor cada vez que haya un cambio en la lista.
    const putTasks = async () =>{
        try {
            fetch('https://assets.breatheco.de/apis/fake/todos/user/moyra', {
      method: "PUT",
      body: JSON.stringify(taskOfList),
      headers: {
        "Content-Type": "application/json"
      }
    })
        } catch (error) {
            console.log(error)
        }
    }
    


    // Creo función manejadora de evento para que me guarde las tareas.
    const handleTask = (e) => {
        if (e.key === "Enter") {
            if (tasks !== "") {
                setTaskOfList([...taskOfList, {label:tasks}]);
                setTasks("")
            } else {
                alert("Enter your task")
            }
            putTasks()
        }
        
    }
    //Creo función para eliminar las tareas

    const deleteTask = (indexToDelete) => {
        setTaskOfList(
            taskOfList.filter((task, taskIndex) => taskIndex !== indexToDelete)
        )
    }

    return (
        <>
            <div className="row flex-wrap justify-content-center align-items-center gap-2 mb-5 mx-2">
                <div className="col-5 col-sm-3  p-0"></div>
                <input
                    type="text"
                    className="form-control text-dark fw-bolder mb-4 w-75"
                    placeholder="Enter a task"
                    aria-label="Username"
                    onChange={(e) => setTasks(e.target.value)}
                    value={tasks}
                    onKeyDown={handleTask} />
            </div>
            <ul>
                {taskOfList.length === 0 && <p className=" d-flex justify-content-center p-0 ">No task. Add new task</p>}
                {taskOfList.map((item, i) => {
                    return (
                        <li key={i} className="d-flex justify-content-center text-dark item d-block">

                            {item.label}
                            <p className="delete m-0 " onClick={() => deleteTask(i)}> x </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default TaskList;