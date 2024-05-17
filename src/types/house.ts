import { ICategory } from "./category";

export interface IHouse {
    id: number;
    name: string;
    description: string;
    preview: string;
    category: ICategory;
    price: number;
    address: string;
    small_description: string;
    images: IImage[];
}

interface IImage {
    src: string;
}

export interface IHouses {
    data: IHouse[];
}