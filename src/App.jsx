import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Task} from "./Task.jsx";

function App() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const info = useRef(null);

  function deleteTask(i) {
      let newtasks = tasks.filter((task) => task.id !== i);
        setTasks(newtasks);
  }

  function setDone(i) {
      setTasks(prevState => {

          return prevState.map(task => {
              if(task.id === i) {
                  return {...task,isDone: !task.isDone};
              }
              return task;
          });
      });
  }

  function addTask() {
      if(text !== ""){
      let task = {
          id: tasks.length,
          text: text,
          isDone: false
      }
      setTasks([...tasks, task]);
      setText("");
      }
  }

  useEffect(() => {
      let tasksLeft = tasks.reduce((acc, task) => {
          if (!task.isDone) {
              acc += 1;
          }
          return acc;
      },0);
    info.current.innerText = "There are " + tasksLeft + " tasks left.";
  },[tasks])

  return (
    <>
        <input type="text" name="task_text" id="task_text" value={text} onChange={() => setText(event.target.value)} />
        <button onClick={addTask}>Add task</button>
        <div id="taskslist">

        {tasks.map((task) => (
            <Task setDone={() => setDone(task.id)} key={task.id} deleteTask={() => deleteTask(task.id)} className={ task.isDone ? "linet" : ""} >{task.text}</Task>))}
        </div>
        <div ref={info}></div>
    </>
  )
}

export default App
