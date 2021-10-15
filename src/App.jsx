import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input_area">
        <input type="text" />
        <button>追加</button>
      </div>

      <div class="imcomplete_area">
        <p class="title">未完了のTODO</p>
        <ul>
          <li class="list_row">
            <div class="todo">こんにちは</div>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      <div class="complete_area">
        <p class="title">完了のTODO</p>
        <ul>
          <li class="list_row">
            <div class="todo">こんばんは</div>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
