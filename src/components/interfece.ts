/* eslint-disable @typescript-eslint/no-unused-vars */

import { MouseEventHandler } from "react";


// type Props = {
//     label: string
//     important: boolean;
//     id?: string;
//     onDelete?: any;

// import { ChangeEvent } from "react";


export interface RandomCharIterface {
    itemId?: any,
    bookId?: any,
    history?: any,
    selectetChar?: number,
    error?: boolean,
    getCharacter?: (id: number | undefined) => void,
    onItemSelected?: (...i: any[]) => any;
    onClick?: (...args: any[]) => any;
    renderItem?: (item: {
        name?: any;
        gender?: any;
    }) => any;
    getData?: (itemId: any | undefined) => any;
    interval?: number

    // onCharSelected?: (i: number | undefined) => void,
}

export interface ItemListInterface {
    data?: any,
    bookId?: any,
    history?: any,
    itemId?: any,
    selectetChar?: number,
    getCharacter?: (id: number | undefined) => void,
    onItemSelected: (...i: any[]) => any;
    onClick?: (...args: any[]) => any;
    renderItem: (item: {
        name?: any;
        gender?: any;
    }) => any;
    getData: () => any;
}

export interface TransformType {

    [key: string]: string;
}
// }
export interface BooksItemInterface {
    bookId?: any,
    getData?: (itemId: any | undefined) => any;

}

export interface ItemDetailsInterface {
    itemId: any,
    getData: any,
    children?: any,
    item?: any,
}

// interface TodoListItemProps {
//     posts: Props[];
// }

// export default Props

// export interface TodoInterface {
//     id?: number;
//     label?: string;
//     important?: boolean;
//     onDelete?: (id: number) => void
//     deleteItem?: (id: number | undefined) => void
//     addItem?: (id: number | undefined) => void
//     onAdd?: (body: string) => void
//     onToggleImportant?: (id: number | undefined) => void
//     onToggleLiked?: (id: number | undefined) => void
//     maxId?: number | undefined
//     liked?: number
//     allPosts?: number
//     onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
//     onUpdateSearch?: ((event: ChangeEvent<HTMLInputElement>) => void);
//     filter?: string
//     onFilterSelect?: (name: string) => void
// }

// export interface TodoListIterface {
//     posts: TodoInterface[];
//     onDelete: (id: number | undefined) => void
//     onToggleImportant: (id: number | undefined) => void
//     onToggleLiked: (id: number | undefined) => void

// }

// export interface TodoListIterfaceItem {
//     label?: string;
//     onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
//     onToggleImportant: (event: React.MouseEvent<HTMLButtonElement>) => void
//     onToggleLiked: (event: React.MouseEvent<HTMLButtonElement>) => void
//     important?: boolean
//     like?: string
// }

// export interface TodoListIterfaceAddForm {
//     props?: TodoInterface[];
//     onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
//     onAdd: (body: string) => void

// }

// export interface SerchPanelInterface {
//     props?: TodoInterface[];
//     onUpdateSearch: ((event: ChangeEvent<HTMLInputElement>) => void);
// }

// export interface PostStatusFilterInterface {
//     props?: TodoInterface[];
//     filter: string
//     onFilterSelect: (name: string) => void
// }