import fetcher from '.';
import { METHOD } from '@src/types';

export const getUsers = fetcher(METHOD.GET, '/users');
