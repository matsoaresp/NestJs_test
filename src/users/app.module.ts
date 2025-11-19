import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongModule } from '../songs/song.module';
import { User } from './entities/User';
import { UsersModule } from './module/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',   
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
