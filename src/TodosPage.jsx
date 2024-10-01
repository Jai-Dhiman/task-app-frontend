import { TodosNew } from "./TodosNew";

export function TodosPage() {
  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
      successCallback();
    });
  };
  return (
    <main>
      <TodosNew onCreate={handleCreate} />
      <h1>Welcome to React!</h1>
    </main>
  );
}
