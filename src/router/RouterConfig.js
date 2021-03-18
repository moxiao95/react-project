// 组件
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import Notice from '../views/Notice/Notice';
import Data from '../views/Data/Data';
import Help from '../views/Help/Help';
import My from '../views/My/My';
import Personal from '../views/Personal/Personal';
import Edit from '../views/Edit/Edit';

// 定义路由配置
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
        path: '/notice',
        component: Notice,
    },
    {
        path: '/data',
        component: Data,
    },
    {
        path: '/help',
        component: Help,
    },
    {
        path: '/my',
        component: My,
    },
    {
        path: '/personal',
        component: Personal,
    },
    {
        path: '/edit',
        component: Edit,
    },
    {
        path: '/login',
        component: Login,
    },
];

// 导出路由配置
export default Routers;
