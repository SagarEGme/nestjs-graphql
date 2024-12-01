// import { Resolver ,Query, Args, ResolveField, Parent} from '@nestjs/graphql';
// import { Post, User } from './types/user-type';

// @Resolver(()=>User)
// export class SampleResolver {

//     public users = [
//         {
//           id: 1,
//           name: 'Sagar',
          
//         },
//         {
//           id: 2,
//           name: 'John',
          
//         },
//       ];

//       private posts = [
//         { id: 101, title: 'My First Post', userId: 1 },
//         { id: 101, title: 'My second Post', userId: 1 },
//         { id: 102, title: 'GraphQL Basics', userId: 1 },
//         { id: 201, title: 'Next.js Guide', userId: 2 },
//         { id: 202, title: 'Advanced GraphQL', userId: 2 },
//       ];
      
//     @Query(()=> String)
//     sayHello():String{
//         return 'hello sagar i am graphql'
//     }
    
//     @Query(()=>String)
//     greet(@Args('name') name : string): string{
//         return `hello ${name}`;
//     }

//     @Query(()=> [User])
//     getAllUsersData(){
//         return this.users;
//     }

//     @ResolveField(()=> [Post])
//     postss(@Parent() user:User):Post[] {
//         return this.posts.filter((post)=> post.userId === user.id)
//     }
// }
