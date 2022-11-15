import { getAll } from "../../api/product"
import ClientFooter from "../../components/Footer/client"
import ClientHeader from "../../components/Header/client"
import ClientSidebar from "../../components/Sidebar/client"
import Product from "../../model/product"


const HomePage = {
    render: async () => {
        const res = await getAll()
        const data: Product[] = res.data
        return (
            /*html*/`
                ${ClientHeader.render()}
				${ClientSidebar.render()}
                <div class="product ">
                <h1 class="mx-20 mt-10 text-lg ">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
                <div class="grid grid-cols-5 gap-6 m-10">
                ${data.map((item) => {
            return ` 
                    <a href="/detail/${item.id}">
                    <div>
                        <img src="${item.image}"  class="m-2 " alt="">
                        <p class="mb-2">${item.name}</p>
                        <label class="text-red-700 pr-4">${item.saleOffPrice} ₫</label><label class="text-gray-400">${item.originalPrice} ₫</label>
                        <p class="bg-gray-100 p-3 mt-2">${item.shortDescription}</p>
                    </div>
                    </a>
                    `
        }).join('')}
                </div>
                <div class="phukien mx-[100px]">
                <div class="grid grid-cols-2 mb-5 ">
                    <h1 class="ml-20 mt-10 text-lg">PHỤ KIỆN</h1>
                    <a href="#" class="ml-20 mt-10 ">Xem tất cả</a>
                </div>
                <div class="grid grid-cols-9 gap-4 mx-20">
                    <div class="bg-[#FFB8B8] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#FF94EB] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#96FDB5] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#FF94EB] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#4D91FF] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#F5D63D] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#FDA363] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#D6D6D6] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#F5D63D] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                    <div class="bg-[#FDA363] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/phukien.png" alt="">
                    </div>
                </div>
                </div>
                <div class="linhkien mx-[100px] mb-[150px]">
                <div class="grid grid-cols-2 mb-5 ">
                    <h1 class="ml-20 mt-10 text-lg">LINH KIỆN MÁY TÍNH</h1>
                    <a href="#" class="ml-20 mt-10 ">Xem tất cả</a>
                </div>
                <div class="grid grid-cols-9 gap-4 mx-20">
                    <div class="bg-[#FFB8B8] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#FF94EB] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#96FDB5] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#FF94EB] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#4D91FF] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#F5D63D] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#FDA363] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    <div class="bg-[#D6D6D6] rounded-lg">
                    <p class="text-white">Phụ kiện Apple</p>
                    <img src="./public/images/linhkien.png" alt="">
                    </div>
                    
                </div>
                </div>
            </div>
				${ClientFooter.render()}
            `
        )
    }
}

export default HomePage