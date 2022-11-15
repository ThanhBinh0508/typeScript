const AdminHeader = {
    render: () => {
        return (
            /*html*/`
                <div class="flex bg-blue-400 justify-between">
					<a href="/admin"><img class="w-[100px] p-2" src="/images/logo-maytinh.jpg"/></a>
					<label class="relative block mt-2">
                    <input class="ưplaceholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-20 pr-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Tìm kiếm sản phẩm..." type="text" name="search"/>
                </label>
                <div class="mt-4 mr-5 text-white ">
                </div>
                </div>
            `
        )
    }
}

export default AdminHeader