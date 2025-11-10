import { makeAutoObservable } from "mobx";
import { AlbumModel } from "./models/AlbumModel";
import type { IAlbumModelConstrcutData } from "./interfaces/IAlbumModelConstrcutData";
import { AlbumsData } from "./mocks/albomsData";

class AlbumsStore {
  albums: AlbumModel[] = []
  
  constructor() {
    makeAutoObservable(this)
  }

  loadAlbums = async () => {
    const data: IAlbumModelConstrcutData[] = AlbumsData
    this.albums = data.map(item => new AlbumModel(item))
  }

  getAlbumById = (id: number): AlbumModel | null => {
      return this.albums.find(album => album.id === id) || null
  }

  // get newReleases() {
  //     return this.albums.filter(item => item.releasedAt.getMonth() === new Date().getMonth())
  // }
}

export const albumsStore = new AlbumsStore()