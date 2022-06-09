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
        <div className="des"><h3   className={el.isdone ?"doneclass":"undoneclass"} style={{marginTop:"10px",fontSize:"30px" ,fontFamily: "Great Vibes,cursive"}}>{el.desc}</h3></div>
      ) : (
        <div className="container">
        <div>
          <form>
            <div className="omrs-input-group">
              <label className="omrs-input-underlined">
                <input          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
              </label></div></form>
        </div>
      </div>

      )}

      <div className="btns">
      <button className="button-63" onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
      <button className="button-63" onClick={handleClick}>{!editdesc ? "Edit" : "Save"}</button>
      <button className="button-63" onClick={()=>dispatch(isDone(el.id))}>{el.isdone?"Done":"Undone"}</button>
      </div>
    </div>
  );
};

export default Task;
