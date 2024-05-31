import { ICategory } from "./category";
import { IHouseUsers } from "./houseUsers";

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
    features: IFeature[];
    houseUsers: IHouseUsers[];        
}

export interface IHouseSmall {
    id: number;
    name: string;
    description: string;
    preview: string;
    category: ICategory;
    price: number;
    address: string;
    small_description: string;
}

export interface IHouseWithOptionalData {
    data?: IHouse;
}

type WithData<T> = { data: T };

export type IHouses = WithData<IHouse[]>;

interface IImage {
    src: string;
}

export interface IFeature {
    name: string;
    icon: string;
}
