import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState("");
  const [taskOfList, setTaskOfList] = useState([]);

// petición a la API
  useEffect(() => {
    const getTasks = async () => {

      try {
        await fetch("https://assets.breatheco.de/apis/fake/todos/user/moyra")
          .then((response) => response.json())
          .then((data) => setTaskOfList(data));
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);

  // fetch call para sincronizar las tareas con el servidor cada vez que haya un cambio en la lista.
  const putTasks = async (taskOfList) => {
    try {
      await fetch("https://assets.breatheco.de/apis/fake/todos/user/moyra", {
        method: "PUT",
        body: JSON.stringify(taskOfList),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Llama a la función putTask solo cuando taskOflist no esté vacía
  useEffect(() => {
    if (taskOfList.length > 0) {
      putTasks(taskOfList);
    }
  }, [taskOfList]);

  // fetch call para eliminar todas las tareas 
  // (La línea 47 a la 63 irían dentro de la función deleteAllTask 
  // siguiendo las instrucciones especificas de la documentación de la API)

  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/moyra", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })    }).then(() => {
  //     fetch("https://assets.breatheco.de/apis/fake/todos/user/moyra", {
  //       method: "POST",
  //       body: JSON.stringify([]),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((resp) => resp.json())
  //     .then((data) => {if(data.result === "ok") {setTaskOfList([])}});
  //   })
  // };
  
  const deleteAllTask = async () => {
    setTaskOfList([]);
    try {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/moyra", {
        method: "PUT",
        body: JSON.stringify([{ "label": "No task. Add new task", "done": false }]),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => {if(data.result === "ok") {setTaskOfList([])}});
    } catch (error) {
      console.log(error);
    }
  };

  // Creo función manejadora de evento para que me guarde las tareas.
  const handleTask = (e) => {
    if (e.key === "Enter") {
      if (tasks !== "") {
        setTaskOfList([...taskOfList, { label: tasks, done: false }]);
        setTasks("");
      } else {
        alert("Enter your task");
      }
    }
  };
  //Creo función para eliminar las tareas

  const deleteTask = (indexToDelete) => {
    setTaskOfList(
      taskOfList.filter((task, taskIndex) => taskIndex !== indexToDelete)
    );
  };

  return (
    <>
      <div className="row flex-wrap justify-content-center align-items-center gap-2 mb-5 mx-2">
        <div className="col-5 col-sm-3 ">
          <input
            type="text"
            className="form-control text-dark fw-bolder  mb-4"
            placeholder="Enter a task"
            aria-label="Username"
            onChange={(e) => setTasks(e.target.value)}
            value={tasks}
            onKeyDown={handleTask}
          />
        </div>

        <ul className="">
          {taskOfList.length === 0 && (
            <p className=" d-flex justify-content-center p-0 ">
              No task. Add new task
            </p>
          )}
          {taskOfList.map((item, i) => {
            return (
              
              <li
                key={i}
                className="d-flex justify-content-center  text-dark item fw-bold"
              >
                {item.label}
                <p className="delete  text-end" onClick={() => deleteTask(i)}>

                  x
                </p>
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger" onClick={deleteAllTask}>
            Remove all task
          </button>
        </div>
      </div>
    </>
  );
};
export default TaskList;
