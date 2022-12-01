import React, {useEffect} from 'react'
// adding list item in our app

function Form({input,setInput,todos,setTodos,editTodo,setEditTodo}) {
  
  const updateTodo = (title,id,completed) =>{
    const newTodo = todos.map((todo)=>
      todo.id === id ? {title,id,completed} : todo
    )
    setTodos(newTodo)
    setEditTodo('')
  };

  useEffect(()=>{
    if(editTodo){setInput(editTodo.title)}
    else{setInput("")}
  
  },[setInput,editTodo])

  const onInputChange = e =>{
    setInput(e.target.value)
  }
  const onFormSubmit = e =>{
    e.preventDefault();
    if(!editTodo){ 
    setTodos([...todos,{id:Math.floor(Math.random() * 10000),title:input,completed:false}]);

    setInput("")}
    else{
      updateTodo(input,editTodo.id,editTodo.completed)
    }

   


  }
  return (
    <form className='input-part' onSubmit={onFormSubmit}>
      <input type="text" placeholder='Add new list item' className="task-input" value={input} required onChange={onInputChange} /> 
      <button className='button-add' type='submit'>
        {editTodo ? 'Ok' : 'Add'}
      </button> 
    </form>
  )
}

export default Form