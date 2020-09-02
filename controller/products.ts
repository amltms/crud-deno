import {Product} from "../types.ts";

let products: Product[] = [
    {
        id: "1",
        name: "alexa",
        description: "hidsnf",
        price: 34
    },
    {
        id: "2",
        name: "bob",
        description: "fddsf",
        price: 23
    }
]


export const getProducts = ({response}: {response: any}) => {
    response.body = {
        success: true,
        data: products
    }
}