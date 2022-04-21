import React, { PureComponent, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useParams } from "react-router-dom";
import CallApi from '../Api.js'

import Isjson from "../../config.js"

/**
 * Code to Format the data for the chart
 * @param   {Array}           data             Data from the API
 * @return  {Object}          dataGood         Object with the Formated Data          
 */


function Format(data){

var dataGood = [];

      data.forEach((element, index) => {

      let maValeur = new Object();
      let id = index +1;
      maValeur.name = element.day;
      maValeur.Temps = element.sessionLength;

      dataGood.push(maValeur) })

      return dataGood

}

function LineChartDemo(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    let { id } = useParams();

  let LinkToFetch = "http://localhost:3001/user/"
  LinkToFetch += id
  LinkToFetch += "/average-sessions"


  if (Isjson == true) { 
    LinkToFetch = ""
    LinkToFetch = LinkToFetch.concat('/',id,'_average-sessions','.json') ;
  }
  useEffect(() => {
   CallApi(LinkToFetch)
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
     items["data"] = {sessions: []};
    return <div>Chargement...</div>;
  } else {

        var firstSet = items.data.sessions;

        var dataGood = Format(firstSet);

        let days = ['L','M','M','J','V','S','D'];
      
    return (
<ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={250}
      height={255}
      data={dataGood}
      margin={{
        top: 90,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="0 0" />
      <XAxis  dataKey="name" tick={{fill: 'white'}}  tickFormatter={(tick) => days[tick-1]} />
      <YAxis hide={true}/>
      <Tooltip  itemStyle={{ color: 'black'}}/>
      <Legend />
      <Line dot={false} type="monotone" dataKey="Temps" stroke="white" strokeWidth={2} />
    </LineChart>
     </ResponsiveContainer>
    );
  }
}
export default LineChartDemo;
