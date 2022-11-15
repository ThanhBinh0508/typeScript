import instance from "./instance"
class Cart {
    name: string;
    originalPrice: number;
    image: string;
    saleOffPrice?: number;
    feature?: string;
    description?: string;
    shortDescription?: string;
    constructor(
        name: string,
        originalPrice: number,
        image: string,
        saleOffPrice?:number,
        feature?: string,
        description?: string,
        shortDescription?: string
    ) {
        this.name = name;
        this.originalPrice = originalPrice;
        this.image = image;
        this.saleOffPrice = saleOffPrice;
        this.feature = feature;
        this.description = description;
        this.shortDescription = shortDescription;
    }
}
export default Cart

export const getAllCart = () => {
    return instance.get("/carts")
}
export const addCart = (cart: Cart) => {
    return instance.post("/carts", cart)
}
export const removeCart = (id :any) => {
    return instance.delete(`/carts/${id}`);
};