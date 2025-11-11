import { makeAutoObservable } from "mobx"
import type { ITrackModelConstrcutData } from "../interfaces/ITrackModelConstrcutData"
import type { AlbumModel } from "./AlbumModel"

export class TrackModel {
    // REVIEW: Делай отступы между объявлениями переменных. Читается легче
    id: number;
    audio: string | null
    title: string | null
    singer: string | null
    type: string | null
    time: string | null
    img: string | null

    // REVIEW: Зачем boolean | null. Можно дефолт значение false сделать даже если не пришло с бэка
    like: boolean | null

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

        // REVIEW: this.like = data.like ?? false
        this.like = data.like

        makeAutoObservable(this)
    }

    get album(): AlbumModel | null {
        return this.#album
    }

    // REVIEW: аргумент в таких случаях не нужен вообще this.like = !this.like
    setLike = (like: boolean) => {
        this.like = like
    } 
}