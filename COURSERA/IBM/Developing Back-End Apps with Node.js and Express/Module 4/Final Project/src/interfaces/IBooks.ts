export interface IReview {
    [key: number]: {
        username: string;
        rating: number;
        comment: string;
    }
}

export interface IBook {
    [key: number]: {
        author: string;
        title: string;
        isbn: string;
        reviews: IReview;
    };
}

export interface IBookList {
    [key: string]: IBook;
}