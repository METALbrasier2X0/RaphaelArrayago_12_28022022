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

function LineChartDemo(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    let { id } = useParams();

  let LinkToFetch = "http://localhost:3001/user/"
  LinkToFetch += id
  LinkToFetch += "/average-sessions"


  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch(LinkToFetch)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
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
      
      var dataGood = [];

      firstSet.forEach((element, index) => {

      let maValeur = new Object();
      let id = index +1;
      maValeur.name = element.day;
      maValeur.Temps = element.sessionLength;

      dataGood.push(maValeur) })

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
      <XAxis dataKey="name" />
      <YAxis hide={true}  />
      <Tooltip />
      <Legend />
      <Line dot={false} type="monotone" dataKey="Temps" stroke="white" strokeWidth={2} />
    </LineChart>
     </ResponsiveContainer>
    );
  }
}
export default LineChartDemo;
