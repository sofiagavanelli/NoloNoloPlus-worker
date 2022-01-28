import {BarCharT} from '../components/barChart';
import {CardComponentClient} from '../components/cardComponentClient';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

var _ = require('lodash');


function Dipendenti() {
  const [numClientRent, setData]=React.useState([]);
  const [valueClientRent, setValue]= React.useState([]);
  const [infoClient, setInfo]=React.useState([]);
    React.useEffect(() =>{
      setData([]);
    fetch('http://localhost:8000/allRents')
      .then(results => results.json())
      .then(data => {
        const name = data //filtra i duplicati
          .map(dataItem => dataItem.worker_id) 
          .filter((worker_id, index, array) => array.indexOf(worker_id) === index);

        const counts = name //conta il numero di noleggi per ogni cliente
         .map(worker_id => ({
           worker_id: worker_id,
           value: data.filter(item => item.worker_id === worker_id).length//.filter crea un nuovo array con solo gli oggetti che hanno lo stesso id e restituisce la lunghezza dell'array
         }));
        setData(counts);
      });
    }, []);

  return (
    <div id="dipendenti">
        <h1>Statistiche degli impiegati</h1>
        <h5>Numero di noleggi per prodotto</h5>
        <BarCharT dati={numClientRent} name={"numero di noleggi per impiegato"} etichetta={"worker_id"}/>
    </div>
    );
}

export default Dipendenti;
