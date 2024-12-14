import React, { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import TodoContent from "../../components/TodoContent";
import { addTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

import Options from "../../components/Options";

export default function Todo() {
  const todos = useSelector((store) => store.todos.todos);

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  function handleInput(value) {
    if (!value) return;
    setInput(value);
  }

  function handleAdd() {
    if (!input) return;
    console.log(select);
    dispatch(addTodo(input, select));
    setInput("");
  }

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <div className="text-center   w-full  sm:w-2/3 lg:w-1/2  p-2 flex flex-col  gap-4">
      <div className="flex gap-8 justify-center">
        <span>🔴 Must Be Done</span>
        <span>🟡 Good To Do</span>
        <span>🟠 less Important</span>
      </div>

      <div className="input">
        <InputField
          onChange={handleInput}
          input={input}
          placeholder={"what to do"}
          style={"w-full ring-0 shadow-none focus:ring-0"}
        />
        <Options select={select} setSelect={setSelect} />
        <Button
          handleClick={handleAdd}
          style={"ring-orange-400 flex ring-0 shadow-none"}
        >
          Add
        </Button>
      </div>

      {todos?.map((el, i) => {
        return (
          <TodoContent
            style={
              el.priority === "Good To Do"
                ? "ring-yellow-500"
                : el.priority === "Must Be Done"
                ? "ring-red-500"
                : "undefined"
            }
            completed={el.completed ? `line-through` : "undefined"}
            id={i}
            key={i}
          >
            {el.todo}
          </TodoContent>
        );
      })}
    </div>
  );
}
