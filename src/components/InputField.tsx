import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
function InputField({ todo, setTodo }: Props) {
  return (
    <form className="input">
      <input type="input" placeholder="enter a task" />
      <button className="input-submit" type="button">button</button>
    </form>
  );
}

export default InputField;
