import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
    ];

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }

    createUser(name: string) {
        const newUser = { id: Date.now(), name };
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: number, name: string) {
        const user = this.users.find(user => user.id === id);
        if (user) user.name = name;
        return user;
    }

    deleteUser(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return { message: 'User deleted' };
    }
}
