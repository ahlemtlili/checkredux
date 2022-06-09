import { ADDTASK, DELETE, EDIT, ISDONE, SHOWALL, SHOWDONE, SHOWNOTDONE } from "../ActionsTypes/ActionsTypes"

const initialState ={filterTask:"ALL", taskList:[{desc:"task1",id:0,isdone:true}
,{desc:"task2",id:1,isdone:false}
,{desc:"task3",id:2,isdone:true}
,{desc:"task4",id:3,isdone:false},
{desc:"task5",id:4,isdone:true},
{desc:"task6",id:5,isdone:true},
]}

export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDTASK:
            return { ...state, taskList: [...state.taskList, { ...payload, id: state.taskList.length + 1 }] }
            case DELETE:
            return { ...state, taskList: state.taskList.filter(el => el.id !== payload) }
        case EDIT:
            return { ...state, taskList: state.taskList.map(el => el.id === payload.id ? { ...el, desc: payload.editedDesc } : el) }
            case ISDONE: 
    return {...state,taskList:state.taskList.map((task) => (task.id === payload) ? {...task, isdone: !task.isdone} : task)}
    case SHOWALL: 
    return {...state,filterTask:"ALL"}
    case SHOWDONE: 
    return {...state,filterTask:"DONE"}
    case SHOWNOTDONE:
    return {...state,filterTask:"NOTDONE"}
            default:
            return state
    }
}    