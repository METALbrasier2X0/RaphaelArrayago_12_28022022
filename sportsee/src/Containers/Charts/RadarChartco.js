import React, { PureComponent, useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import Isjson from "../../config.js"

function RadarChartco(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let { id } = useParams();

  let LinkToFetch = "http://localhost:3001/user/"
   LinkToFetch += id
  LinkToFetch += "/performance"




  if (Isjson == true) { 
    LinkToFetch = ""
    LinkToFetch = LinkToFetch.concat('/',id,'_performance','.json') ;
  }


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

    items["data"] = {kind: "", keyData: ""};
    return <div>Chargement...</div>;
  } else {

           var firstSet = items.data.kind;
           var firstSetValue = items.data.data;
           var dataGood = [];

       for (const id in firstSet) {


      var result = firstSetValue.filter(obj => {
      return obj.kind == id
      })

      let maValeur = new Object();
      maValeur.subject = firstSet[id];
      maValeur.A = result[0].value;
      maValeur.fullMark = 150;

      dataGood.push(maValeur)
    }

      return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataGood}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#fff" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#e60000" fill="#e60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
export default RadarChartco;
