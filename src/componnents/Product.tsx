// import {IProduct} from './IProduct'
export default class Product {
    Name: string | undefined;
    Id: number | undefined;
    constructor(name: string, id: number) {
        this.Name = name;
        this.Id = id;
      }
};