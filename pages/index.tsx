import type { NextPage } from 'next';
import Test from '@src/components/Text';
import PostList from '@src/components/PostList';

const Home: NextPage = () => {
  return (
    <>
      <h1>Test API</h1>
      <PostList />
    </>
  );
};

export default Home;
