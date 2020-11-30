export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getRecource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    };

    async getAllCharracters() {
        const res = await this.getRecource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getRecource(`/characters/${id}`); //получаем только одного персонажа
        return this._transformCharacter(character);
    }

    getAllHouses() {
        return this.getRecource(`/houses/`);
    }

    getHouse(id) {
        return this.getRecource(`/houses/${id}/`);
    }

    getAllBooks() {
        return this.getRecource(`/books/`);
    }

    getBook(id) {
        return this.getRecource(`/books/${id}/`);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    } // функции - трансформаторы, не все api поддерживают camelCase, некоторые поддерж только kebab-case

    _transformHouse(house) {
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPage: book.numberOfPage,
            publisher: book.publisher,
            released: book.released
        }
    }
}