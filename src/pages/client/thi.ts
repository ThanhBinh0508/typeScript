import { get } from "../../api/product"
import Product from "../../model/product"

const thi = {
    render: async (id) =>{
        const data = await get(id)
        const product: Product[] = data.data
        return `
            <h1>${product.name}</h1>
            
            
        `
    }
}
export default thi