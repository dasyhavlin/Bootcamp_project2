import { IProduct } from "./IProduct"
export let products: IProduct[] = [
    {
        Name: "Milk",
        Id: 1,
    },
    {
        Name: "bread",
        Id: 2,
    },
    {
        Name: "chicken",
        Id: 3,
    },
    {
        Name: "water",
        Id: 4,
    }
];
localStorage.setItem('productsList',JSON.stringify(products));


// export Array<Product> = ({ product: , productType: ProductType});