import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserType, UpdateUserType } from './dto/user.input';

@Injectable()
export class UserService {
    constructor(private readonly prisma:DatabaseService){}

    async findAll(){
        return this.prisma.user.findMany();
    }
 
    async findAllPosts(){
        return this.prisma.post.findMany();
    }

    async findUserHavingPosts(){
        return this.prisma.user.findMany({include:{posts:true}})
    }
    async create(data:CreateUserType){
        return this.prisma.user.create({data})
    }

    async updateUser(id:number , data:UpdateUserType){
        return this.prisma.user.update({
            where:{
                id
            },
            data
        })
    }

    async deleteUser(id:number){
        return this.prisma.user.delete({
            where:{
                id
            }
        })
    }
}
