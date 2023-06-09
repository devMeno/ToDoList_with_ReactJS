import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'



function App() {
	const [task, setTask] = useState('');
	const [list, setList] = useState([]);

	async function handleAdd(event) {
		event.prevenDefault();
		console.log(task);
		if (task.length > 2) {

			const form = new FormData;
			form.append('tache', task);

			await fetch('http://localhost:3000/backend/addTask.php', {
				method: "POST",
				body: form
			})
			setList([...list, task]);
			setTask('');
		} else {
			alert("Ajout de tâche impossible!!!");
		}
	}

	function handleInputChange(event) {
		setTask(event.target.value);
	}

	function handleDeleteTask(place) {
		const changedList = [...list];
		changedList.splice(place, 1);
		setList(changedList);
	}

	console.log.list;
	return (
		<>

			<div>
				<div className="ajout">
					<h1>To Do</h1>
					<form action="POST" onSubmit={handleAdd}>
						<Input size='large' value={task} type="text" placeholder='Ajouter une tâche' className='new' onChange={handleInputChange} />
						<Button positive type='submit'>Add</Button>
					</form>
				</div>
				<ul>
					{list.map((activity, index) => (
						<>
							<div className='line'>
								<span key={index} className='tache'>
									<div className="check">
										<Checkbox className='checkbox' />
									</div>
									<div className="activite">{activity}</div>
									<div className="delete">
										<Button basic color='red' icon='delete' onClick={() => handleDeleteTask(index)} className='delbutton'></Button>
									</div>
								</span>
							</div><br />
						</>
					))}
				</ul>
			</div>
		</>
	)
}

export default App;