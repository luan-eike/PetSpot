import { User } from '@/entities/User';
import { IUserRepository } from '@/data/repositories/User/IUserRepository';
import { MockUserData } from './MockUserData';

export class MockUserRepository implements IUserRepository {
  private users: User[] = [...MockUserData];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async addUser(user: User): Promise<void> {
    this.users.push(user);
  }

  async updateUser(id: number, updatedUser: Partial<User>): Promise<void> {
    this.users = this.users.map(user =>
      user.id === id ? new User({ ...user, ...updatedUser }) : user
    );
  }

  async deleteUser(id: number): Promise<void> {
    this.users = this.users.filter(user => user.id !== id);
  }
}
