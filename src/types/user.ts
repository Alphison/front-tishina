import { IHouseSmall } from "./house";

export interface IUser {
    id: number;
    name: string;
    surname: string;
    midname: string;
    email: string;
    phone: string;     
}

export interface IProfileHouse {    
    user_id: number;
    house: IHouseSmall;
    check_in_date: string;
    check_out_date: string;    
}

export interface IProfile extends IUser{
    houses: IProfileHouse[];
}

