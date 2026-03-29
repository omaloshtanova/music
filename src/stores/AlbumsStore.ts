import { makeAutoObservable } from "mobx";
import type { IAlbumModelConstrcutData } from "./interfaces/IAlbumModelConstrcutData";
import { AlbumModel } from "./models/AlbumModel";
import { AlbumsData } from "./mocks/albomsData";

// REVIEW: В целом по всем сторам. На данный момент у тебя они абсолютно бесполезны.
// Юзается чисто как некое хранилище, а должно содержать бизнес логику.
// Ты же размазываешь логику по всему приложению
// По сути то как сейчас организовано приложения, логичней было бы юзать https://tanstack.com/query
// Если же взяла mobx используй его на полную
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