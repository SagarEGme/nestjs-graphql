import { ObjectType,Field } from "@nestjs/graphql";

//nested queries
@ObjectType()
export class Post{
    @Field()
    id:number;

    @Field()
    title:string;
}

// @ObjectType()
// export class User{
//     @Field() //it declares the property as part of graphql schema.
//     id:number;

//     @Field({nullable:true,description:'name of the user'}) //field allows options for more control
//     name:string;

//     @Field()
//     email:string;

//     @Field(()=>[Post])
//     postss: Post[];
// }

//objectyep and field automatically creates a type in schema.gql file.