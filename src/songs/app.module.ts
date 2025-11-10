import { Module } from '@nestjs/common';
import { SongService } from './app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SongService],
})
export class AppModule {}
