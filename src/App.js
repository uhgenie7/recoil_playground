import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import TodoList from "./components/Todo/TodoList";
import TempCelsius from "./components/TempCelsius";
import NameDisplay from "./components/NameDisplay";

function App() {
  return (
    <RecoilRoot>
      <h2>useRecoilValue(state)</h2>
      <p>
        atom을 <strong>읽기</strong>만 할 때 이 Hook를 사용한다. 이 Hook는
        atom에 컴포넌트를 등록하도록 한다.
      </p>
      <NameDisplay />
      <h2>useRecoilState</h2>
      <p>
        atom을 <strong>읽고 쓰려고</strong> 할 때 이 Hook을 사용한다. 이 Hook는
        atom에 컴포넌트을 등록하도록 한다.
      </p>
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
