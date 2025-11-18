import { Injectable, NotFoundException } from '@nestjs/common';
import { Song } from './interfaces/song.songinterface';

@Injectable()
export class SongService {
  private readonly songs: Song[] = [];

  getSongs(): Song[] {
    if (!this.songs) {
      throw new NotFoundException('Erro ao encontrar músicas!');
    }
    return this.songs;
  }

  createSong(song: Song): void {
    this.songs.push(song);
  }

  getSongById(id: number): Song | undefined {
    const songs = this.songs.find((song) => song.id === id);
    if (!songs) {
      throw new NotFoundException(`Musica com ID: ${id}, não encontrado`);
    }
    return songs;
  }

  deleteSongById(id: number): Song | undefined {
    console.log('ID passado:', id);
    console.log('Songs atuais:', this.songs);

    const index = this.songs.findIndex((song) => song.id === id);

    console.log("Index encontrado", index)
    
    if (index === -1) {
      throw new NotFoundException(`Música com ID: ${id}, não encontrado`);
    } 
      this.songs.splice(index, 1);
      return;
    
  }
}
