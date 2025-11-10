import { Module } from '@nestjs/common';
import { SongService } from './app.service';
import { SongController } from './app.controller';

@Module({
  imports: [],
  controllers: [SongController],
  providers: [SongService],
})
export class AppModule {}
