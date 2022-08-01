import { useRecoilValue } from 'recoil';
import { userState } from '@src/states/userState';
import Posts from './Posts';

function User() {
  const { name } = useRecoilValue(userState);

  return (
    <div>
      <p>{name} 님이 작성한 글</p>
      <Posts />
    </div>
  );
}

export default User;
