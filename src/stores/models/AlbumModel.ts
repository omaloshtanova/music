import { makeAutoObservable } from "mobx";
import type { IAlbumModelConstrcutData } from "../interfaces/IAlbumModelConstrcutData"
import type { ITrackModelConstrcutData } from "../interfaces/ITrackModelConstrcutData"
import { TracksData } from "../mocks/tracksData";
import { TrackModel } from "./TrackModel"

export class AlbumModel {

    id: number
    img: string | null
    title: string | null
    description: string | null
    dj: string | null
    time: string | null
    songs: number | null
    hrs: number | null

    tracks: TrackModel[] = []

    constructor(data: IAlbumModelConstrcutData) {
        this.id = data.id
        this.title = data.title
        this.img = data.img
        this.description = data.description ?? null
        this.dj = data.dj ?? null
        this.time = data.time ?? null
        this.songs = data.songs ?? null
        this.hrs = data.hrs ?? null

        makeAutoObservable(this)
    }

    loadTracks = async() => {
        const data: ITrackModelConstrcutData[] = TracksData
        this.tracks = data.map(item => new TrackModel(this, item))
    }
}