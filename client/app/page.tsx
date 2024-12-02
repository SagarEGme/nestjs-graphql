import UsersPage from './user/page';
import AddUser from './user/AddUser';

export default function Home() {
  return (
    <div>
      <div>
        <AddUser />
      </div>

      <h1>users details page</h1>
      <UsersPage />
    </div>
  );
}
