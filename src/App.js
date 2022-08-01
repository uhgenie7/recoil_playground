import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import TodoList from "./components/Todo/TodoList";
import TempCelsius from "./components/TempCelsius";
import NameDisplay from "./components/NameDisplay";
import Form from "./components/Form";
import NameDisplayResetButton from "./components/NameDisplayResetButton";
import Main from "./before/Main";

function App() {
  return (
    <RecoilRoot>
      <h2>Before Suspense</h2>
      <p>
        최종 사용자(end user) 경험 측면에서 UI가 마치 폭포(waterfall)처럼
        순차적으로 나타나는 현상이 나타날 수 있습니다.
      </p>
      <Main />
      <hr />
      <h2>useResetRecoilState(state)</h2>
      <p>
        주어진 상태를 default 값으로 리셋하는 함수를 반환합니다.
        useResetRecoilState()를 사용하는 것은 컴포넌트가 상태가 변경될 때
        리렌더링을 위해 컴포넌트를 구독하지 않고도 상태를 기본값으로 리셋할 수
        있게 해줍니다.
      </p>
      <NameDisplayResetButton />
      <hr />
      <h2>useSetRecoilState(state)</h2>
      <p>
        atom에 쓰려고만 할 때 이 Hook를 사용한다. useSetRecoilState()을 사용하는
        것은 컴포넌트가 값이 바뀔 때 리렌더링을 하기 위해 컴포넌트를 구독하지
        않고도 값을 설정하게 해줍니다.
      </p>
      <Form />
      <hr />
      <h2>useRecoilValue(state)</h2>
      <p>
        atom을 <strong>읽기</strong>만 할 때 이 Hook를 사용한다. 이 Hook는
        atom에 컴포넌트를 등록하도록 한다.
      </p>
      <NameDisplay />
      <hr />
      <h2>useRecoilState</h2>
      <p>
        atom을 <strong>읽고 쓰려고</strong> 할 때 이 Hook을 사용한다. 이 Hook는
        atom에 컴포넌트을 등록하도록 한다.
      </p>
      <TempCelsius />
      <hr />
      <h2>Todo</h2>
      <TodoList />
      <br />
      <h2>기본</h2>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
