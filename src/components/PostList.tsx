import Input from './Input';
import Post from './Post';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@src/QueryKeys';
import { getPosts } from '@src/api/getPosts';
import { Posts } from '@src/types';

const PostList = () => {
  const { data, isLoading, isError, error } = useQuery<Posts[], AxiosError, Posts[], string[]>(
    QueryKeys.POST,
    () => getPosts,
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return console.error(error);
  }

  return (
    <>
      <Input mutate={() => {}} />
      <ul className="messages">
        {data.map((x) => (
          <Post key={x.id} {...x} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
