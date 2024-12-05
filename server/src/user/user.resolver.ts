import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserType, UpdateUserType } from './dto/user.input';
import { PostArticle, User } from './dto/User-object.dto';
import { UserService } from './user.service';

@Resolver(()=> User)
export class UserResolver {
    // @Mutation(()=>String)
    // CreateUser(@Args('name') name:string ,@Args('age') age:number){
    //     return `hello ${name} of ${age} years.`
    // }

    //next way
    // @Mutation(()=> String)
    // CreateUser(@Args('data') data:CreateUserType):string{
    //     return `hello ${data.name} of age ${data.age}`
    // }
    constructor(private readonly userService:UserService){}

    @Query(()=>[User])
    async getAllUsers(){
        return this.userService.findAll();
    }

    @Query(()=>[PostArticle])
    async getAllPosts(){
        return this.userService.findAllPosts();
    }
    @Query(()=>[User])
    async findAuthors(){
        return this.userService.findUserHavingPosts()
    }

    @Mutation(()=>User)
    async createUser(@Args('data') data:CreateUserType){
        return this.userService.create(data);
    }

    @Mutation(()=>User,{nullable:true})
    async updateUser(
        @Args('id') id:number,
        @Args('data') data:UpdateUserType,
    )    {
        return this.userService.updateUser(id,data);
    }

    @Mutation(()=> User,{nullable:true})
    async deleteUser(@Args('id') id:number){
        return this.userService.deleteUser(id);
    }

}
