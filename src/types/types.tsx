interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {}
}
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
}

export interface IPost {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
}