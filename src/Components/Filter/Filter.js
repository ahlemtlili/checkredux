import {useDispatch, useSelector} from 'react-redux'
import { showAll, showDone, showNotDone } from '../../JS/Actions/Actions'


function Filter () {

const dispatch = useDispatch()

return (
<div>
  <h1>please choose the type of filter</h1>

    <button onClick={() => dispatch(showAll())}> All Tasks </button>

    <button onClick={() => dispatch(showDone())}> Done Tasks</button>

    <button onClick={() => dispatch(showNotDone())}> Not Done Tasks</button>
    
</div>
)
}

export default Filter