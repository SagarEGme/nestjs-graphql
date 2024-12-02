import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(()=> [PostArticle],{nullable:true})
  posts?:PostArticle[]

  @Field()
  createdAt: Date;
}

@ObjectType()
export class PostArticle{
  @Field(()=> Int)
  id:number;

  @Field()
  title:string;

  @Field()
  authorId:number;

  @Field(()=>User)
  author:User;
}