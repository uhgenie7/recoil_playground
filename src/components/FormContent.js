import { useState } from "react";

function FormContent({ setNamesState }) {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setNamesState((names) => [...names, name])}>
        Add Name
      </button>
    </>
  );
}

export default FormContent;
