import { useEffect, useState } from 'react'
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

	useEffect(() => {
		const allTasks = async () => {
			const response = await fetch('http://localhost:3000/backend/getTask.php');
			const t = await response.json();
			console.log(t);
			setList(t);
		};
		allTasks();
	}, []);

	async function handleAdd(event) {
		event.preventDefault();
		console.log(task);
		if (task.length > 2) {

			const form = new FormData();
			form.append('new', task);

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

	function handleDeleteTask() {
		/*const undesirable = new FormData();
		undesirable.append('new', task.id);

		await fetch('http://localhost:3000/backend/deleteTask.php', {
			method: "POST",
			body: undesirable
		});*/
		const changedList = [...list];
		changedList.splice(place, task.id);
		setList(changedList);
	}

	//console.log.list;
	return (
		<>

			<div>
				<div className="ajout">
					<h1>To Do</h1>
					<form action="">
						<Input size='large' value={task} type="text" placeholder='Ajouter une tâche' className='new' onChange={handleInputChange} />
						<Button positive type='submit' onClick={handleAdd}>Add</Button>
					</form>
				</div>
				<ul>
					{list.map((activity) => (
						<>
							<div className='line'>
								<span key={activity.id} className='tache'>
									<div className="check">
										<Checkbox className='checkbox' />
									</div>
									<div className="activite">{activity.tache}</div>
									<div className="delete">
										<Button basic color='red' icon='delete' onClick={handleDeleteTask} className='delbutton'></Button>
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