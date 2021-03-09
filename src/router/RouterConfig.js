import Home from '../views/Home/home';
import Login from '../views/Login/login';

const Routers = [
    {
        from: '/',
        to: '/login',
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
    }
];

export default Routers;
