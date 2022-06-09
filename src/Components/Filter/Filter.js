import {useDispatch} from 'react-redux'
import { showAll, showDone, showNotDone } from '../../JS/Actions/Actions'
import './filtre.css';


function Filter () {

const dispatch = useDispatch()

return (
<div>
  <h1 className='choose'>Please choose the type of filter</h1>
   <div className='btns'> 
    <button className='button-8' onClick={() => dispatch(showAll())}> All Tasks </button>

    <button  className='button-8'onClick={() => dispatch(showDone())}> Done Tasks</button>

    <button  className='button-8' onClick={() => dispatch(showNotDone())}> Not Done Tasks</button>
    </div> 
</div>
)
}

export default Filter