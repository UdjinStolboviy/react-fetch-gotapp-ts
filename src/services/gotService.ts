import { TransformType } from '../components/interfece'

export default class GotService {

    private _apiBase: string;
    // bodyUsed: boolean;
    // body: NodeJS.ReadableStream;
    // json(): Promise<any>;
    // json<T>(): Promise<T>;
    // text(): Promise<string>;
    // buffer(): Promise<Buffer>;

    constructor() {
        this._apiBase = "https://anapioficeandfire.com/api"
    }

    getResource = async (url: string): Promise<any> => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async (): Promise<any> => {
        const res: any = await this.getResource('/characters?page=5&pageSize=10')
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id: number): Promise<unknown> => {
        const character: any = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character);
    }

    getAllHouses = async (): Promise<unknown> => {
        return this.getResource('/houses')
    }

    getHouses = async (id: number): Promise<unknown> => {
        return this.getResource(`/houses/${id}`)
    }

    getAllBooks = async (): Promise<unknown> => {
        return this.getResource('/books')
    }
    getBooks = async (id: number): Promise<unknown> => {
        return this.getResource(`/books/${id}`)
    }

    private _extractId = (item: any) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)
    }

    private _transformCharacter(char: TransformType): { name: string; gender: string; born: string; died: string; culture: string; } {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    private _transformHouse(house: TransformType): { name: string; region: string; words: string; titles: string; overlord: string; ancestralWeapons: string; } {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,

        }
    }

    private _transformBook(book: TransformType): { name: string; numberOfPages: string; publisher: string; released: string; } {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
        }
    }

}

// const got = new GotService();
// got.getAllCharacters()
//     // .then(res => console.log(res))
//     .then((res: any) => {
//         console.log(res.forEach((element: any) => {
//             console.log(element.name)
//         }))
//     }
//     )

// got.getCharacter(130)
//     .then(res => console.log(res))
