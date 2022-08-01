import FormContent from "./FormContent";
import { useSetRecoilState } from "recoil";
import { namesState } from "../states/namesState";

function Form() {
  const setNamesState = useSetRecoilState(namesState);

  return <FormContent setNamesState={setNamesState} />;
}

export default Form;
