import { AuthPayloadDto, BackendApiService } from './fetch';

export interface AuthLoginDto {
  password: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
}

export class AuthApiService extends BackendApiService {
  
  public async User(): Promise<User> {
    return await this.Get('/profile');
  }

  public async Login(body: AuthLoginDto): Promise<AuthPayloadDto> {
    return await this.Post('/auth/login', body);
  }
}