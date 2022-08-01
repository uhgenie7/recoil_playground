import { useRecoilValue } from 'recoil';
import { postState } from '@src/states/postState';
import { useQueryClient } from '@tanstack/react-query';

function Posts() {
  const client = useQueryClient();
  const postList = useRecoilValue(postState);

  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
