import { Field, InputType, ObjectType } from "@nestjs/graphql";

// @ObjectType() -> it is for query and for mutation we must use
//@InputType()
@InputType()
export class CreateUserType{
    @Field()
    name:string;

    @Field()
    email:string;

}

@InputType()
export class UpdateUserType{
    @Field({nullable:true})
    name?:string;

    @Field({nullable:true})
    email?:string;
}