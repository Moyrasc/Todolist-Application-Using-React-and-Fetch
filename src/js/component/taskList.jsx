import React, { useState } from "react";

const TaskList = () => {

    const [tasks, setTasks] = useState("");
    const [taskOfList, setTaskOfList] = useState([]);
    
    // fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
    //     method: "GET",
        
    //     headers: {
    //       Accept: "application/json"
    //     }
    //   })
    //   .then(resp => {
    //     console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
    //     console.log(resp.status); // el código de estado = 200 o código = 400 etc.
    //     // console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
    //     return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    // })
    // .then(data => {
    //     //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
    //     console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    // })
    // .catch(error => {
    //     //manejo de errores
    //     console.log(error);
    // });

    // Tengo que hacer que ls tareas se vean asi  ya que es el formato que admite JSON[
    //     { label: "Make the bed", done: false },
    //     { label: "Walk the dog", done: false },
    //     { label: "Do the replits", done: false }
    //   ]



    // Creo función manejadora de evento para que me guarde las tareas.
    const handleTask = (e) => {
        if (e.key === "Enter") {
            if (tasks !== "") {
                setTaskOfList([...taskOfList, tasks]);
                setTasks("")
            } else {
                alert("Enter your task")
            }

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

                            {item}
                            <p className="delete m-0 " onClick={() => deleteTask(i)}> x </p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default TaskList;