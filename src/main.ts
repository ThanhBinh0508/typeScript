import './style.css'
import Navigo from 'navigo'
import HomePage from './pages/home'
import Detail from './pages/client/detail'
import Signup from './pages/client/signup'
import Signin from './pages/client/signin'
import AdminPage from './pages/admin'
import AddProductPage from './pages/admin/add'
import EditProductPage from './pages/admin/edit'
import CartList from './pages/client/cart'
import thi from './pages/client/thi'

const router = new Navigo('/', { linksSelector: "a" })

const print = async (component, id) => {
    document.getElementById('app').innerHTML = await component.render(id)
    if (component.afterRender) {
        component.afterRender(id)
    }
}
router.on("/admin/*", () => {}, {
    before(done, match) {
        if(JSON.parse(localStorage.getItem('user'))){
            const role = JSON.parse(localStorage.getItem('user')).role;
            if(role == 1){
                done();
            } else {
                document.location.href="/"
            }
        } else {
            document.location.href="/"
        }
    }
})


router.on({
    "/": () => {
        print(HomePage)
    },
    "/detail/:id": (data) => {
        const id = data.data.id
        print(Detail,id)
    },
    "/thi/:id": (data) => {
        const id = data.data.id
        print(thi,id)
    },
    "/signup": () => {
        print(Signup)
    },
    "/signin": () => {
        print(Signin)
    },
    "/admin": () => {
        print(AdminPage)
    },
    "/admin/edit/:id": (data) => {
        const id = data.data.id
        print(EditProductPage, id)
    },
    "/admin/add": () => {
        print(AddProductPage)
    },
    "/cart": () => {
        print(CartList)
    }
})
router.resolve()
