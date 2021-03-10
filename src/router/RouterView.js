import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Routers from './RouterConfig';

export default function App() {
    let routers = Routers.filter(item => item.component);
    let redirect = Routers.filter(item => !item.component);

    return (
        <Switch>
            {
                routers.map((item, index) => {
                    return (
                        <Route key={index} path={item.path} render={rProps => {
                            return item.children ? <item.component {...rProps} routes={item.children} /> : <item.component {...rProps} />;
                        }} />
                    )
                })
            }
            {
                redirect.map((item, index) => <Redirect key={index} from={item.from} to={item.to} />)
            }
        </Switch>
    );
}
