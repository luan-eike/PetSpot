import { User } from '@/entities/User';
import { UserRepository } from '@data/repositories/User/UserRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getAllUsers(): User[] {
    return this.userRepository.getAllUsers();
  }

  getUserById(id: number): User | undefined {
    return this.userRepository.getUserById(id);
  }

  addUser(user: User): void {
    if (!user.name || !user.email) {
      throw new Error('Nome e e-mail são obrigatórios.');
    }
    this.userRepository.addUser(user);
  }

  updateUser(id: number, updatedUser: Partial<User>): void {
    this.userRepository.updateUser(id, updatedUser);
  }

  deleteUser(id: number): void {
    this.userRepository.deleteUser(id);
  }
}
