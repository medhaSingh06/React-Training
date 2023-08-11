import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './component/TaskProvider';
import { TaskList } from './component/TaskList';

// simple task management ap
// list of task and mark them as complete

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task management app</h1>
          <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
