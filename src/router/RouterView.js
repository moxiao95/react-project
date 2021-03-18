// 依赖
import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

// 配置
import Routers from './RouterConfig';

export default function App() {
    // 路由列表
    let routers = Routers.filter(item => item.component);
    // 重定向路由列表
    let redirect = Routers.filter(item => !item.component);

    return (
        <Switch>
            {/* 循环生成路由 */}
            {
                routers.map((item, index) => {
                    return (
                        <Route key={index} path={item.path} render={rProps => {
                            return item.children ? <item.component {...rProps} routes={item.children} /> : <item.component {...rProps} />;
                        }} />
                    )
                })
            }
            {/* 重定向 */}
            {
                redirect.map((item, index) => <Redirect key={index} from={item.from} to={item.to} />)
            }
        </Switch>
    );
}
