import axios from 'axios';
import type { METHOD } from '../types';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const fetcher = async (method: METHOD, url: string, ...rest: { [key: string]: any }[]) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
