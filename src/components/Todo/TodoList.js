import { useRecoilValue } from "recoil";
import { todoListState } from "../../states/todoListState";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <p>할일 추가</p>
      <TodoItemCreator />
      <p>할일 리스트</p>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
