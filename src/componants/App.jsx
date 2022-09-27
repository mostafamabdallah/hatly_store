import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

import "../style.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Animation from "./Animation";
import Alert from "./Alert";

const App = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Alert></Alert>
        <NavBar />
        <Animation></Animation>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
