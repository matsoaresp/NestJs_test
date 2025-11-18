import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import type { Song } from './interfaces/song.songinterface';
import { SongService } from './song.service';

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
    return { message: 'Música criada com sucesso! ' };
  }

  @Get(':id')
  getSongById(@Param('id') id: number) {
    const song = this.songService.getSongById(+id);
    return song;
  }

  @Post('delete/:id')
  deleteUser(@Param('id') id: number) {
    this.songService.deleteSongById(+id);
    return { message: 'Song deleted succesfully' };
  }
}
