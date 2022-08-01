import { atom, selector } from "recoil";

export const namesState = atom({
  key: "namesState",
  default: ["", "Ella", "Chris", "", "Paul"],
});

export const filteredNamesState = selector({
  key: "filteredNamesState",
  get: ({ get }) => get(namesState).filter((str) => str !== ""),
});
