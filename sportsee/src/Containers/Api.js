import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import LineChartDemo from "./Charts/LineChartDemo.js";
import LineBar from "./Charts/LineBar.js";
import RadarChartco from "./Charts/RadarChartco.js";
import RadialBar from "./Charts/RadialBar.js";
import Numbers from "./Numbers.js";

import Isjson from "../config.js"

/**
 * Code to Call Data From the API
 * @param   {String}    LinkToFetch     Link to fetch from the API
 * @return  {Promise}   data            Promise Of the Data
 */

function CallApi(LinkToFetch) {

var data = {};
return new Promise(resolve => fetch(LinkToFetch)
  .then(response => response.json())
  .then(data => resolve(data)))

return data

}

export default CallApi