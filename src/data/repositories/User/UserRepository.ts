import { User } from '@/entities/User';

export class UserRepository {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: Partial<User>): void {
    this.users = this.users.map(user =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
