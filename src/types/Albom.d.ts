// REVIEW: Типы не надо в d.ts файлах объявлять можно просто в ts
// Так же правильно пишется Album это везде по коду опечатка
// И интерфейсы принято именовать начиная с заглавной I
// export interface IAlbum {}
// Интерфейсы лучше разместить в папке interfaces внутри stores, так как это относиться к слою данных
export interface Albom {
    id: number
    img: string
    title: string
    singer?: string
    time?: string
}