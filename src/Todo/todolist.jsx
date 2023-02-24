import React from 'react'
const TodoLists = (props) => { 
    return <>
        <div className='todo_style'>
           <li className='text_style'>{props.text}</li>
           <i className='fa fa-times'
             onClick={()=>{props.onSelect(props.id);}}
            aria-hidden="true"></i>
    
        </div>
    </>;
}
 
export default TodoLists;