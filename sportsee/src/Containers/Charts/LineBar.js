import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import Isjson from "../../config.js"
import CallApi from '../Api.js'

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
      maValeur.kilogram = element.kilogram;
      maValeur.calories = element.calories;

      dataGood.push(maValeur) })

      return dataGood

}

/**
 * Code to show the line bar chart
 * @param   {props}           props     Props containing data from parent component
 * @return  {React element}             Containers that shows the line bar chart(User Activity)          
 */

function LineBar(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let { id } = useParams();

  let LinkToFetch = "http://localhost:3001/user/"
  LinkToFetch += id
  LinkToFetch += "/activity"

  if (Isjson == true) { 
    LinkToFetch = ""
    LinkToFetch = LinkToFetch.concat('/',id,'_activity','.json') ;
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
    items["data"] = {sessions: [], keyData: ""};
    return <div>Chargement...</div>;
  } else { 


        var firstSet = items.data.sessions;

        var dataGood = Format(firstSet);
 
  
   return (
 <ResponsiveContainer width="100%" height="50%">
        <BarChart
          width={500}
          height={15}
          data={dataGood}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="2 2" /> 
          <XAxis height="5" padding={{ left: 20, right: 20 }} /> 
          <YAxis  orientation ="right"/>

          <Tooltip />
          <Legend height="80px" verticalAlign='top' iconType='circle' align='right'/>
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]}/>
          <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default LineBar;
