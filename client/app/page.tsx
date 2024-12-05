import UsersPage from './graphql/user/page';
import AddUser from './graphql/user/AddUser';

export default function Home() {
  return (
    <div>
      <h1>users details page</h1>
      <UsersPage />
    </div>
  );
}
