import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div class="complete_area">
      <p class="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} class="list_row">
              <div class="todo">{todo}</div>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
