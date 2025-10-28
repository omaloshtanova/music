// А еще по сути тут должна быть связь на артиста так как у него может быть много альбомов

export class AudioTrackModel {

  id: string = '';

  filePath: string = '';

}

class AlbumModel {

  name: string = '';

  tracks: AudioTrackModel[] = [];

}

class AppStore {

  albums: AlbumModel[] = [];

}