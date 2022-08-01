import { useResetRecoilState } from "recoil";
import { namesState } from "../states/namesState";

function NameDisplayResetButton() {
  const resetList = useResetRecoilState(namesState);
  return <button onClick={resetList}>이름 리스트 리셋 버튼</button>;
}

export default NameDisplayResetButton;
