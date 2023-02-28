import React from 'react';
import styles from "./App.module.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage, TestPage, SearchPage, ShoppingCartPage, ActivityPage, ActivityDetailPage } from "./pages";
import { Redirect } from "react-router-dom";
import { useSelector } from './redux/hooks';

// 私有路由
const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
    const routeComponent = (props: any) => {
        return isAuthenticated ? (
            React.createElement(component, props)) : (
            <Redirect to={{ pathname: "./SignIn" }} />
        );
    }
    return <Route render={routeComponent} {...rest} />
}

function App() {
    const jwt = useSelector(s => s.user.token)
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signIn" component={SignInPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/detail/:touristRouteId" component={DetailPage} />
                    <Route path="/test" component={TestPage} />
                    <Route path="/search/:keywords?" component={SearchPage} />
                    <Route path="/activityPage" component={ActivityPage} />
                    <Route path="/activityDetail/:activityId" component={ActivityDetailPage} />
                    <PrivateRoute isAuthenticated={jwt != null}
                        path="/shoppingCart" component={ShoppingCartPage} />
                    <Route render={() => <h1>404 NOT FOUND </h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
