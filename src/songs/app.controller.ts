import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import type { Song } from '../songs/interfaces/app.songinterface';
import { SongService } from './app.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('all')
  getSongs() {
    return this.songService.getSongs();
  }

  @Post('create')
  createUser(@Body() newSong: Song) {
    this.songService.createSong(newSong);
    return { message: 'Usuario criado com sucesso! ' };
  }

  @Get(':id')
  getSongById(@Param('id') id: number) {
    const song = this.songService.getSongById(+id);
    if (!song) {
      return { message: 'User not found' };
    } else {
      return song;
    }
  }

  @Post('delete/:id')
  deleteUser(@Param('id') id: number) {
    this.songService.deleteSongById(id);
    return { message: 'User deleted succesfully' };
  }
}
