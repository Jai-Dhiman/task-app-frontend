import { TasksNew } from "./TasksNew";

export function TasksPage() {
  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/tasks.json", params).then((response) => {
      setTasks([...tasks, response.data]);
      successCallback();
    });
  };
  return (
    <main>
      <TasksNew onCreate={handleCreate} />
      <h1>Welcome to React!</h1>
    </main>
  );
}
