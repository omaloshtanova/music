import { makeAutoObservable } from "mobx";

import { toJS } from "mobx";
import type { Track } from "../types/Track";

// REVIEW: Тут в целом те же проблемы что и в Alboms
// Технически треки должны быть еще связаны с альбомом посмотри store.ts там набросал пример
class Tracks {
  constructor() {
    makeAutoObservable(this);
  }

  _track: Track = {
      id: 0,
      audio: null
  };


  fetchTrack = async () => {
    this._track = 
      {
        id: 0,
        audio: '/src/assets/music.mp3',
      }
    
  };

  get track() {
    return toJS(this._track);
  }
}

export const tracksStore = new Tracks();
