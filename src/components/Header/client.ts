const ClientHeader = {
	render: () => {
		return (
            /*html*/`
			<div class="flex bg-red-600 justify-between">
				<a href="/"><img class="w-[100px] m-2" src="/images/logo-maytinh.jpg"/></a>
				<label class="relative block mt-4">
				<input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-20 pr-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Tìm kiếm sản phẩm..." type="text" name="search"/>
				</label>
				<div class="mt-2 mr-10 text-white flex ">
					<a href="#" class="mr-10"><p>Gọi mua hàng</p><p>1800.2097</p></a>
					<a href="/admin" class="mr-10"><img src="../public/images/cuahangganban.png" class="h-8 w-8 " alt=""><p>Admin</p></a>
					<a href="#" class="mr-10"><img src="../public/images/shipped_80px.png" class="h-8 w-8 " alt=""><p>Tra cứu đơn hàng</p></a>
					<a href="/cart" class="mr-10"><img src="../public/images/add_shopping_cart_80px.png" class="h-8 w-8 " alt=""><p>Giỏ hàng</p></a>
					<a href="/signin" class="mr-10"><img src="../public/images/user.svg" class="h-8 w-8 " alt=""><p>Đăng Nhập</p></a>
				</div>
			</div>
            `
		)
	}
}

export default ClientHeader 