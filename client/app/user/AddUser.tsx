'use client';

import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    createUser(data: { name: $name, email: $email }) {
      name
      email
    }
  }
`;

export default function AddUser() {
  const [addUser, { data, error,loading }] = useMutation(ADD_USER);
  const handleAddUser = async () => {
    await addUser({
      variables: {
        "name": 'Test User',
        "email": 'test@gmail.com',
      },
    });
  };
  if(error) return <p>error occured</p>
  return (
    <div className="bg-slate-200">
      <button
        className="bg-black text-white"
        onClick={handleAddUser}
        disabled={loading}
      >
        Add User
      </button>
      <h1>added user details:</h1>
      {data && <p>user name : {data.createUser.name}</p>}
      {data && <p>user email : {data.createUser.email}</p>}
    </div>
  );
}
