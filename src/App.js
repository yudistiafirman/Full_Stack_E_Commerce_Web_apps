import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './Support/CSS-Utils/utils.css';

import Navbar from './Component/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import CheckoutForm from './Component/CheckoutForm';
import ListProduct from './Pages/ListProduct/ListProduct';
import Footer from './Component/Footer/Footer';


const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/list-product' component={ListProduct} />
            <Route path='/checkout-form' component={CheckoutForm} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App

