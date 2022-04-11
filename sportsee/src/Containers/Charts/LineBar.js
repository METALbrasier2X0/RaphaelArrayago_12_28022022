import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";


function LineBar(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let { id } = useParams();

  let LinkToFetch = "http://localhost:3001/user/"
  LinkToFetch += id
  LinkToFetch += "/activity"


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
    items["data"] = {sessions: [], keyData: ""};
    return <div>Chargement...</div>;
  } else { 

    var dataGood = [];
    var firstSet = items.data.sessions;

    firstSet.forEach((element, index) => {

      let maValeur = new Object();
      let id = index +1;
      maValeur.name = element.day;
      maValeur.kilogram = element.kilogram;
      maValeur.calories = element.calories;

      dataGood.push(maValeur) })

  
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
