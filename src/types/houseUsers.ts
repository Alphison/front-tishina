import { IHouseSmall } from "./house";

export interface IHouseUsers {
    user_id: number;
    house: IHouseSmall;
    check_in_date: string;
    check_out_date: string;
}