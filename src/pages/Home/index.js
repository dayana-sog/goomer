/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { format } from 'date-fns';

import * as MenuActions from '../../store/modules/menus/action';

import api from '../../services/api';

import NavContainer from '../../components/Header';

import history from '../../services/history';

// import formatDate from '../../util/formatDate';

import {
  Container,
  Header,
  RestaurantsList,
  Restaurants,
  RestaurantName,
  IconOpen,
} from './styles';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  // const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    api.get('restaurants').then((response) => {
      const restaurant = response.data;
      const hours = restaurant.map((time) => time.hours);

      const day = format(new Date(), 'e');
      const currentHour = format(new Date(), "HH':'mm", {
        representation: 'time',
      });

      console.tron.log('teste', hours);
      console.tron.log('Hour', currentHour);
      console.tron.log('day', day);

      setRestaurants(restaurant);
    });
  }, []);

  function handleRestaurant(restaur) {
    dispatch(MenuActions.restaurantRequest(restaur));
    dispatch(MenuActions.menusRequest(restaur));

    history.push(`/restaurants/${restaur.id}/menu`);
  }

  return (
    <Container>
      <NavContainer />

      <Header>
        <h1>Bem-vindo ao Lista do Rango</h1>
        <div>
          <input
            type="text"
            placeholder="Buscar Estabelecimento"
            onChange={() => {}}
          />
          <div>
            <MdSearch size={30} color="#009ca3" />
          </div>
        </div>
      </Header>

      <RestaurantsList>
        {restaurants.map((restaur) => (
          <div>
            <Link
              to={`/restaurants/${restaur.id}/menus`}
              onClick={() => handleRestaurant(restaur)}
              key={restaur.id}
            >
              <Restaurants>
                <img src={restaur.image} alt="restaurant" />
                <div>
                  <RestaurantName>{restaur.name}</RestaurantName>
                  <p>{restaur.address}</p>
                </div>
                <IconOpen>
                  <p>Aberto agora</p>
                </IconOpen>
              </Restaurants>
            </Link>
          </div>
        ))}
      </RestaurantsList>
    </Container>
  );
}
