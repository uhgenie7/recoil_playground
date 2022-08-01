import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
      <br />
      <p>--절취선--</p>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
