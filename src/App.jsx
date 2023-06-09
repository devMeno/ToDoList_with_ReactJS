import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  function handleAdd(event) {
    event.preventDefault();
    if(task !==''){
      setList([...list,task]);
      setTask('');
    }
  }

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  function handleDeleteTask(place) {
    const changedList = [...list];
    changedList.splice(place,1);
    setList(changedList);
  }

  console.log.list;
  return (
    <>
      <h1>To Do</h1>
      <div>
        <form action="" onSubmit={handleAdd}>
          <input type="text" value={task} placeholder='Ajouter une tâche' onChange={handleInputChange}/>
          <button type='submit'>Add</button>
        </form>
        <ul>
          {list.map((activity,index)=>(
            <>
              <span key={index}>
              <input type="checkbox" />
              {activity}
              <button onClick={()=>handleDeleteTask(index)}>Delete</button>
              
              </span><br />
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;