import './App.css';
import './components/styling.css'
import TaskList from './components/TaskList';
import AddTaskSection from './components/addTaskSection';
import SearchBar from './components/searchBar';

function App() {
  return (
   <div className='main'>
    <div className="title">
        <h1>Task Manager</h1>
    </div>
    <div className='body'>
      <div className='tasks'>
        
        <TaskList></TaskList>
      </div>
      <div className='new-task'>
        <AddTaskSection></AddTaskSection>

        <SearchBar></SearchBar>
      </div>
    </div>
   </div>
  );
}

export default App;
