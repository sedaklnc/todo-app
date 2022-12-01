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
            value={todo.title}
            className={`list ${todo.completed ? 'complete':""}`}
            onChange={(e)=>e.preventDefault()}></input>
            <div>
              <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
              C</button>
              <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>E</button>
              <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>D</button>
            </div>
        </li>))}
    </div>
  )
}

export default ToDosList;
