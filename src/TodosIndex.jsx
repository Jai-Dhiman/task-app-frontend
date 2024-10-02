 export function TodosIndex({ todos, onShow }) {

    return (
      <div>
        <h1>All Todos</h1>
       {todos.map((todo) => (
         <div key={todo.id}>
           <h2>{todo.title}</h2>
           <p>Description: {todo.description}</p>
           <p>Deadline: {todo.deadline}</p>
           <p>Completed: {todo.completed}</p>
           <button onClick={() => onShow(todo)}>More info</button>
         </div>
       ))}
      </div>
    );
  }