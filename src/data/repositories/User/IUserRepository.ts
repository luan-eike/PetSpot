import { User } from '@/entities/User';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | undefined>;
  addUser(user: User): Promise<void>;
  updateUser(id: number, updatedUser: Partial<User>): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
