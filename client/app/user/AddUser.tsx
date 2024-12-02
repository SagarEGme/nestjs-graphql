'use client';

import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import client from '../graphql/apollo-client';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    createUser(data: { name: $name, email: $email }) {
      name
      email
    }
  }
`;

export default function AddUser() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [addUser,{data,loading,error}] = useMutation(ADD_USER);

  const handleUserSubmit = async (event:React.FormEvent) => {
    event.preventDefault();
    await addUser({
      variables:{
        name,
        email
      }
    })
    setName("")
    setEmail("")
  };
  if(error) return <h1>error occured</h1>
  if(loading) return <h1>loading...</h1>
  
  return (
    <div className="bg-slate-200">
     <div>
        {/* User Form */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Add New User</h2>
          <form onSubmit={handleUserSubmit} className="space-y-4 grid gap-4 grid-cols-2">
            <div>
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
     </div>
  );
}
