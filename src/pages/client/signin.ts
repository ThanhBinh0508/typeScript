import { signin } from "../../api/User";

const Signin = {
  render: async () => {
    return /*html*/`
          <div class="flex justify-center items-center bg-gray-100 h-[100vh]">
       <div class="w-[800px] bg-white flex justify-around p-8">
         <form class="w-[400px]" id="signin">
           <div class="mb-2">
             <label class="block text-xl font-normal">Email</label>
             <input
               type="text"
               class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="email" id="email"
             />
           </div>
           
           <div class="mb-2">
             <label class="block text-xl font-normal">Mật khẩu</label>
             <input
               type="password"
               class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="password" id="password"
             />
           </div>
           <button
             type="submit"
             class="text-center bg-[#FF424E] text-white w-[410px] h-[48px] rounded-md mt-1"
           >
             Đăng Nhập
           </button>
           <p class="text-center my-4 font-normal">Hoặc đăng nhập bằng</p>
           <div class="flex justify-center items-center space-x-4">
             <a href="#"
               ><img src="./public/images/face.png" alt="" class="w-[80%]"
             /></a>
             <a href="#"
               ><img src="./public/images/gg.png" alt="" class="w-[80%]"
             /></a>
           </div>
           <p class="text-center">Bạn chưa có tài khoản? <a href="/signup" class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Đăng Ký tài khoản mới </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></p>
         </form>
         <div class="flex justify-center items-center">
         <a href="/"
         ><img src="./public/images/logo-maytinh.jpg" alt="" /></a>
         </div>
       </div>
       
     </div>
       `
  },
  afterRender() {
    const formSignin = document.querySelector("#signin")
    formSignin?.addEventListener("submit", async function (e) {
      e.preventDefault()
      try {
        const user = {
          email: document.querySelector("#email")?.value,
          password: document.querySelector("#password")?.value
        }
        const result = await signin(user)
        console.log(result.data.user.role);
        localStorage.setItem("user", JSON.stringify(result.data.user))
        if (result.data.user.role == 0) {
          location.href = "/";
        } else {
          location.href = "/admin";
        }
      } catch (error) {
        alert("Sai tài khoản hoặc mật khẩu")
      }
    })
  }
}
export default Signin