import { Address } from "./adress.model";

export class User{
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public description: string,
    public Address: Address,
    public dateBirth: string,
    public aliases?: string[],){

  }
}
