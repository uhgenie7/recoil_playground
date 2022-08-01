import { charCountState } from "../../states/textState";
import { useRecoilValue } from "recoil";

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>useRecoilValue 입니다. selector를 사용했습니다: {count}</>;
}

export default CharacterCount;
