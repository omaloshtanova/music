import { makeAutoObservable } from "mobx";

import { toJS } from "mobx";
import type { Albom } from "../types/Albom";

class Alboms {
  constructor() {
    makeAutoObservable(this);
  }

  _alboms: Albom[] = [];
  _newReleases: Albom[] = [];


  fetchAlboms = async () => {
    this._alboms = [
      {
        id: 0,
        img: 'src/assets/cover2.svg',
        title: 'Golden age of 80s',
        singer: 'Sean swadder',
        time: '2:34:45',
      },
      {
        id: 1,
        img: 'src/assets/cover2.svg',
        title: 'Reggae “n” blues',
        singer: 'Dj YK mule',
        time: '1:02:42',
      },
      {
        id: 2,
        img: 'src/assets/cover2.svg',
        title: 'Tomorrow’s tunes',
        singer: 'Obi Datti',
        time: '2:01:25',
      }
    ]
  };

  fetchNewReleases = async () => {
    this._newReleases = [
      {
        id: 0,
        img: 'src/assets/cover1.png',
        title: 'Life in a bubble',
      },
      {
        id: 1,
        img: 'src/assets/cover1.png',
        title: 'Mountain',
      },
      {
        id: 2,
        img: 'src/assets/cover1.png',
        title: 'Limits',
      },
      {
        id: 3,
        img: 'src/assets/cover1.png',
        title: 'Everything’s black',
      },
      {
        id: 4,
        img: 'src/assets/cover1.png',
        title: 'Cancelled',
      },
      {
        id: 5,
        img: 'src/assets/cover1.png',
        title: 'Nomad',
      },
      {
        id: 6,
        img: 'src/assets/cover1.png',
        title: 'Blind',
      }
    ]
  };

  get alboms() {
    return toJS(this._alboms);
  }

  get newReleases() {
    return toJS(this._newReleases);
  }
}

export const albomsStore = new Alboms();
