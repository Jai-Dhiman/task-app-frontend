import axios from "axios";
import { useState, useEffect } from "react";
import { TodosIndex } from "./TodosIndex";

export function TasksPage() {
  const [todos, setTodos] = useState([]);

   const handleIndex = () => {
     console.log("handleIndex");
     axios.get("http://localhost:3000/todos.json").then((response) => {
       console.log(response.data);
       setTodos(response.data);
     });
   };

   useEffect(handleIndex, []);

  return (
    <main>
      <TodosIndex todos={todos} />
    </main>
  );
}
