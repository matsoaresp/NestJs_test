import { Injectable } from '@nestjs/common';
import { Song } from './interfaces/song.songinterface';

@Injectable()
export class SongService {
  private readonly songs: Song[] = [];

  getSongs(): Song[] {
    return this.songs;
  }

  createSong(song: Song): void {
    this.songs.push(song);
  }

  getSongById(id: number): Song | undefined {
    return this.songs.find((song) => song.id === id);
  }

  deleteSongById(id: number): void {
    const index = this.songs.findIndex((song) => song.id == id);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }
}
