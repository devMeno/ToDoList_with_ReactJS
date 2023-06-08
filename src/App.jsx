import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  function handleAdd() {
    if(task !==''){
      setList(list.push(task));
      setTask('');
    }
  }

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  return (
    <>
      <h1>To Do</h1>
      <div>
        <input type="text" value={task} placeholder='Ajouter une tâche' onChange={handleInputChange}/>
        <button type='submit' onClick={handleAdd}>Add Task</button>
      </div>
    </>
  )
}

export default App
