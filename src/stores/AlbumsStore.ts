import { makeAutoObservable } from "mobx";
import { AlbumModel } from "./models/AlbumModel";
import type { IAlbumModelConstrcutData } from "./interfaces/IAlbumModelConstrcutData";
import type { TrackModel } from "./models/TrackModel";

class AlbumsStore {
  albums: AlbumModel[] = []
  
  constructor() {
    makeAutoObservable(this)
  }

  loadAlbums = async () => {
    const data: IAlbumModelConstrcutData[] = [
      {
        id: 0,
        img: 'src/assets/cover2.svg',
        title: 'Golden age of 80s',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        dj: 'Sean swadder',
        time: '2:34:45',
        songs: 64,
        hrs: 16,
      },
      {
        id: 1,
        img: 'src/assets/cover2.svg',
        title: 'Reggae “n” blues',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        dj: 'Dj YK mule',
        time: '1:02:42',
        songs: 64,
        hrs: 16,
      },
      {
        id: 2,
        img: 'src/assets/cover4.svg',
        title: 'Tomorrow’s tunes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        dj: 'Obi Datti',
        time: '2:01:25',
        songs: 64,
        hrs: 16,
      }
    ]

    this.albums = data.map(item => new AlbumModel(item))
  }

  getAlbumById = (id: number): AlbumModel | null => {
      return this.albums.find(album => album.id === id) || null
  }

  getTrack = (id: number): TrackModel | null => {
    for (const album of this.albums) {
        const track = album.tracks.find(track => track.id === id);
        if (track) {
            return track 
        }
    }
    return null;
  }

  // get newReleases() {
  //     return this.albums.filter(item => item.releasedAt.getMonth() === new Date().getMonth())
  // }
}

export const albumsStore = new AlbumsStore()