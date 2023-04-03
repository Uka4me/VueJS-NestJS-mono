import { IFastifyReply, IFastifyRequest, ILogger } from '@/core/interfaces';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger: ILogger = new Logger('HTTP');

  use(request: IFastifyRequest, response: IFastifyReply, next: () => void) {
    const { ip, method, originalUrl, headers } = request;
    this.logger.log(`${method} ${originalUrl} - ${headers['x-real-ip'] || ip}`);

    next();
  }
}
