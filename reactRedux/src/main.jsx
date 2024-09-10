import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index.js'

const store = createStore(rootReducer)
console.log(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>
)
