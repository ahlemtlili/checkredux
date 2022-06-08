import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTask } from '../../JS/Actions/Actions'

const Add = () => {
    const dispatch = useDispatch()
    const [newtask, setNewtask] = useState({desc:"",id:0,isdone:false})
    const handleChange=(e)=>{
        setNewtask({...newtask,[e.target.name]:e.target.value})
    }

    const navigate=useNavigate()
    return (
        <div>
            <input type="text" name="desc" placeholder='title' onChange={handleChange} />
            <button onClick={()=>{dispatch(addTask(newtask));navigate("/")}}> save </button>
        </div>
    )
}

export default Add
