import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [FilmsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
