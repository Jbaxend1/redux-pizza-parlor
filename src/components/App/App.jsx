import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
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

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <ul>
        {
          pizzaList.map((pizza) => {
            return (
              <>
                
                <li key={pizza.id}>
                  <div>
                    <img src={pizza.image_path} />
                  </div>
                  <br />
                  <br />
                  {pizza.name}: {pizza.description} Price: {pizza.price}
                </li>
                <br />
                <button>ADD</button>
                <br />
                <br />
              </>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
