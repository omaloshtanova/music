import { makeAutoObservable } from "mobx";
import type { IAlbumModelConstrcutData } from "../interfaces/IAlbumModelConstrcutData"
import { TrackModel } from "./TrackModel"
import type { ITrackModelConstrcutData } from "../interfaces/ITrackModelConstrcutData"

export class AlbumModel {
    id: number
    img: string | null
    title: string | null
    // REVIEW: у тебя переменная буквально три значения иметь может по этой записи
    // string | null | undefined за счет "?:"
    // Или не пиши null или убери "?", а в конструкторе this.description = data.description ?? null
    description?: string | null
    dj?: string | null
    time?: string | null
    songs?: number | null
    hrs?: number | null

    tracks: TrackModel[] = []

    constructor(data: IAlbumModelConstrcutData) {
        this.id = data.id
        this.title = data.title
        this.img = data.img
        this.description = data.description
        this.dj = data.dj
        this.time = data.time
        this.songs = data.songs
        this.hrs = data.hrs

        makeAutoObservable(this)
    }

    loadTracks = async() => {
        const data: ITrackModelConstrcutData[] = [
                {
                    id: 0,
                    audio: '/src/assets/music.mp3',
                    title: 'Худи',
                    singer: 'Джиган feat Artik & Asti, Niletto',
                    type: 'pop',
                    time: '2:47',
                    img: '/src/assets/cover5.svg',
                },
                {
                    id: 1,
                    audio: '/src/assets/music.mp3',
                    title: 'Худи',
                    singer: 'Джиган feat Artik & Asti, Niletto',
                    type: 'pop',
                    time: '2:47',
                    img: '/src/assets/cover5.svg',
                },
                {
                    id: 2,
                    audio: '/src/assets/music.mp3',
                    title: 'Худи',
                    singer: 'Джиган feat Artik & Asti, Niletto',
                    type: 'pop',
                    time: '2:47',
                    img: '/src/assets/cover5.svg',
                },
              ]
        this.tracks = data.map(item => new TrackModel(this, item))
    }
}