import { useRecoilValue } from "recoil";
import { namesState, filteredNamesState } from "../states/namesState";

function NameDisplay() {
  const names = useRecoilValue(namesState);
  const filteredNames = useRecoilValue(filteredNamesState);

  return (
    <>
      이름 리스트: {names.join(",")}
      <br />
      진짜 이름 리스트: {filteredNames.join(",")}
    </>
  );
}

export default NameDisplay;
