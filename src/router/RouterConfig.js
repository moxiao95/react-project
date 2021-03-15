import Home from '../views/Home/home';
import Login from '../views/Login/login';
import My from '../views/My/my';

const Routers = [
    {
        from: '/',
        to: '/login',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/my',
        component: My,
    },
    {
        path: '/login',
        component: Login,
    },
];

export default Routers;
