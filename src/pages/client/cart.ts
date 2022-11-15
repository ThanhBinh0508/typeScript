import Cart, { getAllCart, removeCart } from "../../api/cart";
import ClientHeader from "../../components/Header/client"
import reRender from "../../ultilities/reRender";
const CartList = {
    render: async () => {
        const res = await getAllCart();
        const data: Cart[] = res.data;
        return (
            /*html*/`
                ${ClientHeader.render()}
                <div class="max-w-xl mx-auto">
                    <h1 class="text-red-600 text-center my-5">Giỏ hàng</h1>
                    <div class="max-w-xl border border-gray-100 rounded-lg">
                        ${data.map((item) =>{
                            return/*html*/ `
                            <div class="flex mt-5">
                                <img src="${item.image}"  alt="">
                                <div class="ml-10">
                                <div class="flex">
                                    <h6 class="font-bold">${item.name}</h6>
                                <table>
                                    <tbody>
                                        <tr><td><button class="btn btn-remove" data-id=${item.id}><img src="./public/images/Vector.png" class="ml-[150px]"  alt=""></button></td></tr>
                                    </tbody>
                                </table>
                                </div>
                                <label class="text-red-700 pr-4">${item.saleOffPrice} ₫</label><label class="text-gray-400">${item.originalPrice} ₫</label>
                                <p>Chọn số lượng:</p>
                                <input type="number" class="border border-gray-300 rounded-md">
                                </div>
                            </div>
                            `
                        }).join('')}
                    </div>
                    <div class="max-w-xl border border-gray-100 rounded-lg mt-5">
                    <label class="ml-5">Tổng tiền tạm tính:</label><label class="text-red-600 ml-[250px]">17.820.000 ₫</label>
                    <button class="w-full bg-[#D70018] text-white rounded-lg py-2 mt-3">Tiến hành đặt hàng</button>
                    <button class="w-full border border-[#D70018] text-[#D70018] rounded-lg py-2 mt-3">Chọn thêm sản phẩm khác</button>
                    
                    </div>
                </div>
            `
        )
    },
    afterRender() {
        const btns = document.querySelectorAll('table .btn');
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener('click',function(){
                if(btn.classList.contains('btn-remove')){
                    const confirm = window.confirm('Bạn có chắc chắn muốn xóa ko')
                    if(confirm){
                         removeCart(id);
                         reRender('app',CartList)
                    }
                }
                
            })
        }

    },
}

export default CartList