import { gql } from '@apollo/client';
import client from '../apollo-client.js';
import AddUser from './AddUser.js';



export default async function UsersPage() {
  const GET_USERS_AND_AUTHORS = gql`
  query {
    getAllUsers {
      name
      email
      posts {
        title
      }
    }
    getAllPosts {
      title
      authorId
    }
  }
`;
  const { loading, data } = await client.query({
    query: GET_USERS_AND_AUTHORS,
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="bg-red-300 p-6">
      <h1 className="text-lg font-bold mb-4">List of Users</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200">ID</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {data.getAllUsers.map((user: any, index: number) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="font-bold mt-4">Authors</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Book Id</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author Id</th>
          </tr>
        </thead>
        <tbody>
          {data.getAllPosts.map((post: any, index: number) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.authorId}</td>
            </tr>
          ))}
        </tbody>
      </table>

          <div>
            <AddUser/>
          </div>
      
    </div>
  );
}
