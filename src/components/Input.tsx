import { useRef } from 'react';
import type { FormEvent } from 'react';

interface IProps {
  mutate: (text: string, id?: string) => void;
  text?: string;
  id?: string;
}

const Input = ({ mutate, text = '', id = undefined }: IProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!textRef.current) return;
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return (
    <form className="messages__input" onSubmit={onSubmit}>
      <textarea ref={textRef} placeholder="내용을 입력하세요." defaultValue={text} />
      <button type="submit">완료</button>
    </form>
  );
};

export default Input;
