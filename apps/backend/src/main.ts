// import { ValidationPipe } from '@/frameworks/nestjs/pipes';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from '@/modules';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(/* {
      logger: {
        transport: {
          target: 'pino-pretty',
          options: {
            redact: ['req.headers.authorization'],
            colorize: true,
            translateTime: 'dd.mm.yyyy, HH:MM:ss Z',
            ignore: 'pid,hostname',
          },
        },
      },
    } */),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
