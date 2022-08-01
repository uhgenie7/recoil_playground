import { useRecoilState } from "recoil";
import { textState } from "../../states/textState";
import CharacterCount from "./CharacterCount";

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      useRecoilState 입니다. atom을 사용했습니다. : {text}
    </div>
  );
}

export default CharacterCounter;
