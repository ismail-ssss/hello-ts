import React from "react";

import TodoItem from "./todoItem";
import "./style.css";

interface ITodoItem {
  id: number;
  title: string;
}

interface TodoProps {
  items: ITodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
