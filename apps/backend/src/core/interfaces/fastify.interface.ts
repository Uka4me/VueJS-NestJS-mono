import { FastifyReply, FastifyRequest } from 'fastify';
import { JwtPayload } from '../dtos';

export interface IFastifyReply extends FastifyReply {
  user: JwtPayload;
}

export interface IFastifyRequest extends FastifyRequest {
  originalUrl: string;
}
