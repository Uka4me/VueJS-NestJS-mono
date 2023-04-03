import { User } from '@/core/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      email: 'john@mail.ru',
      password: 'changeme',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      email: 'maria@mail.ru',
      password: 'guess',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
