 export function TodosIndex({ todos }) {
    return (
      <div>
        <h1>All todos</h1>
       {todos.map((todo) => (
         <div key={todo.id}>
           <h2>{todo.name}</h2>
           <img src={todo.url} />
           <p>Width: {todo.width}</p>
           <p>Height: {todo.height}</p>
         </div>
       ))}
      </div>
    );
  }