import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, isDone } from "../../JS/Actions/Actions";
import './task.css';

const Task = ({el}) => {
  const [editdesc, setEditdesc] = useState(false)

  const [input, setInput] = useState(el.desc)
  const dispatch = useDispatch()
  const handleClick=()=>{
      if(editdesc){
          setEditdesc(!editdesc)
          dispatch(editTask(input,el.id))
      }
      setEditdesc(!editdesc)
  }
  return (
    <div className="list">
      {!editdesc ? (
        <h3>{el.desc}</h3>
      ) : (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      )}
      <div className="btns">
      <button className="button-78" onClick={() => dispatch(deleteTask(el.id))}>delete</button>
      <button className="button-78" onClick={handleClick}>{!editdesc ? "Edit" : "save"}</button>
      <button className="button-78" onClick={()=>dispatch(isDone(el.id))}>{el.isdone?"Done":"Undone"}</button>
      </div>
    </div>
  );
};

export default Task;
