
import Login from "../view/login/login";
import Home from "../view/home/home";
const routerConfig = [
  {
    path: "/login",
    component: Login
  },
  {
    from: "/",
    to: "/login"
  },
  {
    from: "/home",
    component: Home
  }
];
export default routerConfig;