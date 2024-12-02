import { gql } from '@apollo/client';
import client from '../graphql/apollo-client.js';

const GET_USERS = gql`
  query {
    getAllUsers {
      name
    }
  }
`;

export default async function UsersPage() {
    const {loading,data} = await client.query({
        query:GET_USERS,
    })
    if(loading) return <h1>loading...</h1>
    return (
        <div className='bg-red-300'>
            <h1>List of users</h1>
            <ul>
                {data.getAllUsers.map((user:any,index:number)=>(
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
