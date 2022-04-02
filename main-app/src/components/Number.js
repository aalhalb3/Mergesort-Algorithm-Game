import PropTypes from 'prop-types'
import {draggedItem, setDraggedItem} from '../App.js'
//function for dragable numbers
function Number(props){
    return(
    <td className="number" id={`${props.rowID}-${props.arrayID}-${props.id}`} draggable onDragStart={() => {setDraggedItem(props.num)}}>
        {
            props.num
           
        }
    </td>
    )
}


export default Number;