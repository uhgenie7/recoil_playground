import fetcher from '.';
import { METHOD } from '@src/types';

export const getPosts = fetcher(METHOD.GET, '/posts');
