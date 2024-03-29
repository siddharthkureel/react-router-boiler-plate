import React from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './components/HOC/Layout';
import Home from "./components/pages/Home/index";
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Layout>
    )
}

export default Routes;
