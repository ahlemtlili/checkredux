import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Task from '../Task/Task' 
const ListTask = () => {
    const taskList = useSelector(state => state.taskList)
    const filterTask = useSelector(state => state.filterTask)
    return (
        <div style={{ display:"grid",gridAutoFlow:'dense',flexWrap:"wrap" }}>
            <Link to="/add"><button>Add new Task</button></Link>
            {filterTask==="ALL"?taskList.map((el) => (
        <Task key={el.id} el={el} />
      )):filterTask==="DONE"?
      taskList.filter(el=>el.isdone).map((el) => (
        <Task key={el.id} el={el} />
      )):
      taskList.filter(el=>!el.isdone).map((el) => (
        <Task key={el.id} el={el} />
      ))
      }        </div>
    )
}

export default ListTask
