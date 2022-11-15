import Product from "../model/product";
import instance from "./instance";


export const getAll = () => {
    return instance.get("/products")
}
export const get = (id:any) => {
    return instance.get(`/products/${id}`);
}
export const add = (product: Product) => {
    return instance.post("/products", product)
}
export const remove = (id:any) => {
    return instance.delete(`/products/${id}`);
};
export const update = (product: Product) => {
    return instance.put(`/products/${product.id}`, product);
};