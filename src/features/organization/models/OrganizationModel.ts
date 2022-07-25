import { ContactModel } from "../../contact/model/ConatctModel";

export interface OrganizationModel{
    id: number;
    firstName: string;
    organizationName: string;
    address: string;
    addressperson:string;
    organization:string;
    purpose:string;
    name:string;
    city:string;
    contact:Array<ContactModel>


}
