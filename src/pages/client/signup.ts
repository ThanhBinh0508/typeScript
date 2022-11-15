import { signup } from "../../api/User"
const Signup = {
  render: () => {
    return /*html*/`
         <div class="flex justify-center items-center bg-gray-100 h-[100vh]">
      <div class="w-[800px] bg-white flex justify-around p-8">
        <form class="w-[400px]" id="signup">
          <div class="mb-2">
            <label class="block text-xl font-normal">Email</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="email" id="email"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xl font-normal">Số điện thoại</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="phone" id="phone"
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
            Đăng Ký
          </button>
         <div class="flex justify-center items-center mt-8">
             <a href="/signin" class="text-red-400 underline">Đăng nhập</a>
         </div>
        </form>
        <div class="flex justify-center items-center ">
        <a href="/"
        ><img src="./public/images/logo-maytinh.jpg" alt="" /></a>
        </div>
      </div>
    </div>
      `
  },
  afterRender: async () => {
    $("#signup").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        phone: {
          number: true,
          required: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        email: {
          required: "Email entry required",
          email: "Account name must be email"
        },
        phone: {
          number: "Please enter the number",
          required: "Phone entry required"
        },
        password: {
          required: "Please enter the password",
          minlength: "Number of characters greater than 6"
        }
      },
      submitHandler: async () => {
        const user = {
          email: document.querySelector('#email')?.value,
          phone: document.querySelector('#phone')?.value,
          password: document.querySelector('#password')?.value,
          role:0
        }
        try {
          signup(user)
          alert("Register success")
          location.href = "/signin"
        } catch (error) {
          error
        }
      }
    })
  }
}
export default Signup