import { ADDTASK, DELETE, EDIT, ISDONE, SHOWALL, SHOWDONE, SHOWNOTDONE } from "../ActionsTypes/ActionsTypes"

export const addTask=(newTask)=>{
    return {type:ADDTASK,payload:newTask}
    }
    
    export const deleteTask=(id)=>{
        return {type:DELETE,payload:id}
    }
    
    export const editTask=(editedDesc,id)=>{
        return{type:EDIT,payload:{editedDesc,id}}
    }
    export const isDone = id => ({
        type: ISDONE,payload:id 
    })
    export const showAll = () => ({
        type: SHOWALL
    });
    
    export const showDone = () => ({
        type: SHOWDONE
    });
    
    export const showNotDone = () => ({
        type: SHOWNOTDONE
    });