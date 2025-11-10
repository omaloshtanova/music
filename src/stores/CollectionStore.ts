import { makeAutoObservable } from "mobx"
import type { TrackModel } from "./models/TrackModel"

class CollectionStore {
    tracks: TrackModel[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addTrack = (newTrack: TrackModel ) => {
        this.tracks.push(newTrack)
    }

    deleteTrack = (newTrack: TrackModel ) => {
        this.tracks = this.tracks.filter(item => item.id !== newTrack.id)
    }
}

export const collectionStore = new CollectionStore()