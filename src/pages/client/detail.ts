import Cart, { addCart } from "../../api/cart"
import { get } from "../../api/product"
import ClientFooter from "../../components/Footer/client"
import ClientHeader from "../../components/Header/client"
import Product from "../../model/product"

const Detail = {
    render: async (id) => {
        const data = await get(id)
        const product: Product[] = data.data
        return (
            /*html*/`
                ${ClientHeader.render()}
                <div class="max-w-7xl mx-auto px-5">
                    <h1 class="m-5 font-bold  text-2xl">${product.name}</h1>
                    <input id="name" type="text" value="${product.name}" hidden>
                    <hr>
                    <div class="flex mt-10">
                    <div class="w-[600px] mx-20">
                        <img src="${product.image}" class="w-[300px]" alt="">
                        <input id="image" type="text" value="${product.image}" hidden>
                    </div>
                    <div>
                        <label class="text-[#c40808] font-bold pr-4 text-xl">${product.saleOffPrice}₫</label>
                        <input id="saleOffPrice" type="text" value="${product.saleOffPrice}" hidden>

                        <label class="text-gray-400 text-lg">${product.originalPrice}₫</label>
                        <input id="originalPrice" type="text" value="${product.originalPrice}" hidden>

                        <p class="mt-5 font-semibold"> Mô tả ngắn: ${product.shortDescription}</p>
                        <input id="shortDescription" type="text" value="${product.shortDescription}" hidden>
                    </div>
                    </div>
                    <div class="flex">
                    <div class="w-[450px] grid grid-cols-5 gap-2 mt-5 mx-10">
                        <div class="border border-red-400 rounded-lg">
                        <img src="../public/images/tinhnag.png" alt="" class="mx-7">
                        <p class="text-xs mx-3">Tính năng nổi bật</p>
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="bg-[#FF3945] border-none text-white p-2 px-10 rounded-md">Mua Ngay</button>
                        <button type="submit" id="add-cart" class=" rounded-lg border border-red-400 p-3 ml-10"><img src="../public/images/giohang.png" alt=""></button>
                    </div>
                    </div>
                    <div class="mt-20">
                    <h1 class="ml-20 mt-10 text-lg ">SẢN PHẨM CÙNG LOẠI</h1>
                    <div class="grid grid-cols-5 gap-6 m-10">
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg"> 
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                    </div>
                    </div>
                    <div class="bg-[#F2F2F2] mx-10 rounded-lg">
                    <h1 class="text-center text-red-700 font-bold my-3">ĐẶC ĐIỂM NỔI BẬT</h1>
                    <p class="mx-10">${product.feature}</p>
                    <input id="feature" type="text" value="${product.feature}" hidden>
                    </div>
                    <div class="m-10">
                    <p>${product.description}</p>
                    <input id="description" type="text" value="${product.description}" hidden>
                    </div>
                </div>
				${ClientFooter.render()}
            `
        )
    },
    afterRender: async () => {
        const cartAdd = document.querySelector('#add-cart')

        cartAdd?.addEventListener('click', async () => {
                const name = document.querySelector('#name')?.value
                const originalPrice = document.querySelector('#originalPrice')?.value
                const image = document.querySelector('#image')?.value
                const saleOffPrice = document.querySelector('#saleOffPrice')?.value
                const feature = document.querySelector('#feature')?.value
                const description = document.querySelector('#description')?.value
                const shortDescription = document.querySelector('#shortDescription')?.value 
                
                const cart = new Cart(name,originalPrice,image,saleOffPrice,feature,description,shortDescription)
                try {
                    const data = await addCart(cart)
                    alert('Thêm vào giỏ hàng thành công')
                } catch(err) {
                    console.log(err)
                }
        })
    }
}

export default Detail