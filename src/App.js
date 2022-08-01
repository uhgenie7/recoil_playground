import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import TodoList from "./components/Todo/TodoList";
import TempCelsius from "./components/TempCelsius";

function App() {
  return (
    <RecoilRoot>
      <h2>useRecoilState</h2>
      <TempCelsius />
      <h2>Todo</h2>
      <TodoList />
      <br />
      <h2>기본</h2>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
