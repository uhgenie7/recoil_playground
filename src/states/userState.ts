import axios from 'axios';
import { atom, selector } from 'recoil';

export const currentUserIdState = atom({
  key: 'currentUserIdState',
  default: 1,
});

export const userState = selector({
  key: 'userState',
  get: async ({ get }) => {
    const currentUserId = get(currentUserIdState);
    return axios.get(`https://jsonplaceholder.typicode.com/users/${currentUserId}`).then((r) => r.data);
  },
});
