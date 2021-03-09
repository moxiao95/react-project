import Home from '../views/Home/home';
import Login from '../views/Login/login';

import Test from '../views/Home/Test/Test';

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
        children: [
            {
                path: '/home/test',
                component: Test,
            }
        ]
    }
];

export default Routers;
