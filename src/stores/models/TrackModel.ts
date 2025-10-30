import { makeAutoObservable } from "mobx"
import type { ITrackModelConstrcutData } from "../interfaces/ITrackModelConstrcutData"
import type { AlbumModel } from "./AlbumModel"

export class TrackModel {
    id: number;
    audio: string | null
    title: string | null
    singer: string | null
    type: string | null
    time: string | null
    img: string | null

    #album: AlbumModel | null = null

    constructor(album: AlbumModel, data: ITrackModelConstrcutData) {
        this.#album = album
        this.id = data.id
        this.title = data.title
        this.audio = data.audio
        this.singer = data.singer
        this.type = data.type
        this.img = data.img
        this.time = data.time

        makeAutoObservable(this)
    }

    get album(): AlbumModel | null {
        return this.#album
    }
}