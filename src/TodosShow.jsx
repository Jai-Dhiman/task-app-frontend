export function TodosShow({ todo, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(todo.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Todo information</h1>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <p>Deadline: {todo.deadline}</p>
      <p>Completed: {todo.completed}</p>
      <p>Update Todo:</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={todo.name} name="name" type="text" />
        </div>
        <div>
          description: <input defaultValue={todo.description} name="description" type="text" />
        </div>
        <div>
          Deadline: <input defaultValue={todo.deadline} name="deadline" type="text" />
        </div>
        <div>
          Completed: <input defaultValue={todo.completed} name="completed" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
