import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';



const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);


root.render(
    <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
    </Provider>
);
