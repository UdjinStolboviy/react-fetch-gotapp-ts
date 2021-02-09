export default class GotService {
  _apiBase: string;
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url: any) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      // eslint-disable-next-line no-useless-concat
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllBooks = async () => {
    const res = await this.getResource(`/books/`);
    return res.map(this._transformBook);
  };

  getBook = async (id: any) => {
    const book = await this.getResource(`/books/${id}/`);
    return this._transformBook(book);
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return res.map(this._transformCharacter);
  };

  getCharacter = async (id: any) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  };

  getAllHouses = async () => {
    const res = await this.getResource(`/houses/`);
    return res.map(this._transformHouse);
  };

  getHouse = async (id: any) => {
    const house = await this.getResource(`/houses/${id}/`);
    return this._transformHouse(house);
  };

  isSet(data: any) {
    if (data) {
      return data;
    } else {
      return "NO DATA";
    }
  }

  _extractId = (item: any) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  _transformCharacter = (char: any) => {
    return {
      id: this._extractId(char),
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.died),
      culture: this.isSet(char.culture),
    };
  };

  _transformHouse = (house: any) => {
    return {
      id: this._extractId(house),
      name: this.isSet(house.name),
      region: this.isSet(house.region),
      words: this.isSet(house.words),
      titles: this.isSet(house.titles),
      ancestralWeapons: this.isSet(house.ancestralWeapons),
    };
  };

  _transformBook = (book: any) => {
    return {
      id: this._extractId(book),
      name: this.isSet(book.name),
      numberOfPages: this.isSet(book.numberOfPages),
      publisher: this.isSet(book.publisher),
      released: this.isSet(book.released),
    };
  };
}
