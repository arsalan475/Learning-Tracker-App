import React, { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Todo from "./Apps/Todo App/Todo";

export default function App() {
  return (
    <>
      <div className="container">
        <Todo />
      </div>
    </>
  );
}
