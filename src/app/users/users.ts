import { StringifyOptions } from 'querystring';

export interface Users {
    id: number;
    fname: string;
    lname: string;
    email_id: string;
    phone_number: number;
    password: string;
    date_of_birth: Date;
    gender: string;
    school_id: number;
}
