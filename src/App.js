import './App.css';
import Addtask from './Components/Addtask/Addtask';
import ListTask from './Components/ListTask/ListTask';
import Filter from './Components/Filter/Filter'
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
                  <h1 className='titleapp'>To Do LIST</h1>
<Routes>
<Route path="/add" element={<Addtask />}/>
<Route path="/" element={<div><Filter/><ListTask/></div>}/>

  </Routes>
    </div>
  );
}

export default App;
