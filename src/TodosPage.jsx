import { TodosNew } from "./TodosNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { TodosIndex } from "./TodosIndex";
import { Modal } from "./Modal";
import { TodosShow } from "./TodosShow";

export function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
   const [currentTodo, setCurrentTodo] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
      successCallback();
    });
  };

     const handleShow = (todo) => {
         console.log("handleShow", todo);
         setIsTodosShowVisible(true);
         setCurrentTodo(todo);
       };
    
       const handleClose = () => {
         console.log("handleClose");
         setIsTodosShowVisible(false);
       };

  useEffect(handleIndex, []);
  return (
    <main>
      <TodosNew onCreate={handleCreate} />
      <TodosIndex todos={todos} onShow={handleShow} />
      <Modal show={isTodosShowVisible} onClose={handleClose}>
      <TodosShow photo={currentTodo} />
       </Modal>
    </main>
  );
}
