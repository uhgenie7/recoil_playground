import axios from 'axios';
import { selector } from 'recoil';
import { currentUserIdState } from './userState';

export const postState = selector({
  key: 'postState',
  get: async ({ get }) => {
    const currentUserId = get(currentUserIdState);
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${currentUserId}`).then((r) => r.data);
  },
});
