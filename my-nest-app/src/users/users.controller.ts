import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('/v1')
    findAll(): string[] {
        return ['This action returns all users', 'User1', 'User2'];
    }

    @Get()
    getAllUsers() {
        console.log('getAllUsers');
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));
    }

    @Post()
    createUser(@Body('name') name: string) {
        return this.usersService.createUser(name);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body('name') name: string) {
        return this.usersService.updateUser(Number(id), name);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(Number(id));
    }
}
