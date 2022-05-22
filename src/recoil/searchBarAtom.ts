import { atom } from "recoil";

const searchBarAtom = atom<boolean>({
  key: "searchBarAtom",
  default: false,
});

export default searchBarAtom;
