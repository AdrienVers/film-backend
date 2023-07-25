import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    this.$onUnsafe('beforeExit', async () => {
      await app.close();
    });
  }

  $onUnsafe(eventType: string, callback: (event: any) => void) {
    return (this as any).$on(eventType, callback);
  }
}
