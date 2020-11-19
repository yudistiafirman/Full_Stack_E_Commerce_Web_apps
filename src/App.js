import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducer'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ListProduct from './Pages/ListProduct/ListProduct'
import './Support/CSS-Utils/utils.css'


const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/list-product' component={ListProduct} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App

