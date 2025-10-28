import { makeAutoObservable, runInAction } from "mobx";

import { toJS } from "mobx";
import type { Albom } from "../types/Albom";

// REVIEW: Раз это store именую явно AlbumsStore
class Alboms {
  constructor() {
    makeAutoObservable(this);
  }

  // REVIEW: здесь _ лишнее так как твоя переменная по своей сути является публичной
  // Так как это Observable, а приватные Observable не поддерживаются в mobx даже через '#', да и в них
  // нет смысла
  _alboms: Albom[] = [];
  _newReleases: Albom[] = [];

  // REVIEW: тут надо либо генераторы использовать через flow из mobx или же оборачивать
  // измненения состояния в runInAction
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

  // REVIEW: гетеры тут не нужны тем более с toJS, ты буквально вырубила реактивность такой конструкцией
  // this._alboms это Observale Array, а геттер вернет сырой js массив.
  // Геттеры в mobx используются для вычисляемых свойств, например мы можем newReleases не хранить, а выичислять
  // Ниже написал как можно переписать этот store
  get alboms() {
    return toJS(this._alboms);
  }

  get newReleases() {
    return toJS(this._newReleases);
  }
}

export const albomsStore = new Alboms();

class AlbumsStore {

  // Тут добваил поле в твой тип для примера
  items: (Albom & { releasedAt: Date })[] = [];
 
  constructor() {
    makeAutoObservable(this)
  }

  fetchAlbums = async () =>  {
    try {
        runInAction(() => {
          this.items = [
            {
              id: 0,
              img: 'src/assets/cover2.svg',
              title: 'Golden age of 80s',
              singer: 'Sean swadder',
              time: '2:34:45',
              releasedAt: new Date()
            },
            {
              id: 1,
              img: 'src/assets/cover2.svg',
              title: 'Reggae “n” blues',
              singer: 'Dj YK mule',
              time: '1:02:42',
              releasedAt: new Date()
            },
            {
              id: 2,
              img: 'src/assets/cover2.svg',
              title: 'Tomorrow’s tunes',
              singer: 'Obi Datti',
              time: '2:01:25',
              releasedAt: new Date()
            }
          ]
        })
    } catch (e) {
      console.error(e)
    }    
  }

  get newReleases() {
    // Показываем как новые релизы албомы вышедшие в текущем месяце
    // Не уверен что корректно будет работать с голым Date сто лет не работалъ
    // Просто как пример
    return this.items.filter(item => item.releasedAt.getMonth() === new Date().getMonth())
  }

}