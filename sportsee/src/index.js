import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import Home from "./Containers";
import LineChartDemo from "./Containers/Charts/LineChartDemo.js";
import Header from "./Containers/Header.js";



import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>

    <Header/>

    <Container className="p-3 Content">

         <Routes>
            <Route index element={<Home/>} />
            <Route path={'/user/:id'} element={<Home />} />
          </Routes>
    </Container>

  </BrowserRouter>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));