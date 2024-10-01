import { TodosNew } from "./TodosNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodosIndex } from "./TodosIndex";

export function TodosPage() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
      successCallback();
    });

    const handleIndex = () => {
      console.log("handleIndex");
      axios.get("http://localhost:3000/todos.json").then((response) => {
        console.log(response.data);
        setTodos(response.data);
      });
    };

    useEffect(handleIndex, []);
  };
  return (
    <main>
      <TodosNew onCreate={handleCreate} />
      <TodosIndex todos={todos} />
    </main>
  );
}
