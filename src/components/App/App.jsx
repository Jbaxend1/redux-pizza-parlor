import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import Info from '../Info/Info';
import './App.css';

function App() {
  let [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    getPizzaList();
  }, []);

  const getPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza',
    }).then((response) => {
      setPizzaList(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong (GET)');
    })

  }
  return (
    <div className='App'>
      <Header />

      <Router>
        <Route exact path="/">
        </Route>
        <Route exact path="/info">
          <Info />
        </Route>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/info">Info</Link></li>
        </ul>
      </Router>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export default App;
