import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { HashRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from 'react-redux';
import store from './store.js'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
