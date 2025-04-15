import { IUserRepository } from './IUserRepository';
import { MockUserRepository } from './MockUserRepository';
import { ApiUserRepository } from './ApiUserRepository';

const USE_MOCK = true;

export const userRepository: IUserRepository = USE_MOCK
  ? new MockUserRepository()
  : new ApiUserRepository();
