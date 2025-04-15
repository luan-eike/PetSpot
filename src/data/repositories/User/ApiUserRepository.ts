import { IUserRepository } from '../IUserRepository';
import { User } from '@/entities/User';

export class ApiUserRepository implements IUserRepository {
  private baseUrl = 'https://dummyapi.io/users'; // simulação

  async getAllUsers(): Promise<User[]> {
    const res = await fetch(this.baseUrl);
    const data = await res.json();
    return data.users; // ajusta conforme estrutura real
  }

  async getUserById(id: number): Promise<User | undefined> {
    const res = await fetch(`${this.baseUrl}/${id}`);
    return await res.json();
  }

  async addUser(user: User): Promise<void> {
    await fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async updateUser(id: number, updatedUser: Partial<User>): Promise<void> {
    await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUser),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async deleteUser(id: number): Promise<void> {
    await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
  }
}
