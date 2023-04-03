import { JwtPayload } from '../dtos/jwt-payload.dto';

export interface IJwtService {
  checkToken(token: string): Promise<any>;
  createToken(payload: JwtPayload, secret: string, expiresIn: string): string;
}
