import React from 'react'
const ToDosList = ({todos,setTodos,setEditTodo}) => {

  const handleComplete = (todo) => {
    setTodos(todos.map((item)=>{
      if(item.id === todo.id){
        return {...item,completed: !item.completed}
      }
      return item;
    }))
  }

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo)=>todo.id===id)
    setEditTodo(findTodo);
  }


  const handleDelete = ({id}) =>{
    setTodos(todos.filter((todo=>todo.id !== id)))
    
  }
  return (
    <div>
        {todos.map((todo)=>(<li className='list-item' key={todo.id}>
          <input
            type="text"
            value={ todo.title}
            className={`list ${todo.completed ? 'complete':""}`}
            onChange={(e)=>e.preventDefault()} onClick={()=>handleComplete(todo)}></input> 
            <div>
            <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
            <span class="material-symbols-outlined">done</span></button>
              <button className='button-edit task-button' onClick={()=>handleEdit(todo)}><span class="material-symbols-outlined">
drive_file_rename_outline
</span></button>
              <button className='button-delete task-button' onClick={()=>handleDelete(todo)}><span class="material-symbols-outlined">
delete
</span></button>
            </div>
        </li>))}

        <div className='count-item'>{`you have ${todos.length} item`}</div>
    </div>
  )
}

export default ToDosList;
