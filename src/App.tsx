import React, { useState } from "react";

import Todo from "./components/todo/index";
import Counter from "./components/counter";
import Gallery from "./components/Gallery/index";

const myTodoItems = [
  {
    id: 1,
    title: "hello ji",
  },
  {
    id: 2,
    title: "hello ji2",
  },
  {
    id: 3,
    title: "hello ji3",
  },
  {
    id: 4,
    title: "hello ji4",
  },
  {
    id: 5,
    title: "hello ji5",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <div>
      <Todo items={myTodoItems} />
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
      <div className="Page">
        <Gallery />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
