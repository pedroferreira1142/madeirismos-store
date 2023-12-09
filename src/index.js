import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';

// styles for this kit
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import 'assets/demo/demo.css?v=1.5.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.5.0';

import LandingPage from 'views/LandingPage';
import Shop from './views/shop/shop';
/* import ShopProvider from "context/shopContext"; */
import {CartIcon} from './components/cart/cartIcon';
import {Product} from './views/product';
import {Cart} from 'views/cart/cart';
import {CartProvider} from 'context/cartContext';
import LoginPage from './views/login/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import SignUp from './views/signup/signUp';

ReactDOM.render(
    <Provider store={store}>
        <CartProvider>
            <BrowserRouter>
                <CartIcon />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Switch>
                    <Route path="/index" component={LandingPage} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/product" render={(props) => <Product {...props} />} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUp} />
                    <Redirect to="/index" />
                    <Redirect from="/" to="/index" />
                </Switch>
            </BrowserRouter>
        </CartProvider>
    </Provider>,
    document.getElementById('root')
);
