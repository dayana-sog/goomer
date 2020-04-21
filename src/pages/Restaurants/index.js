/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md';
import { formatPrice } from '../../util/formatPrice';

import NavContainer from '../../components/Header';
import Plates from '../_layouts/Plates';

import {
  Container,
  Header,
  RestaurantName,
  Main,
  RestaurantsMenu,
  MenuItem,
} from './styles';

import * as MenuActions from '../../store/modules/menus/action';

import api from '../../services/api';

export default function Restaurants() {
  const restInfo = useSelector((state) => state.menus);
  const [menus, setMenus] = useState([]);
  const [showPlates, setShowPlates] = useState(false);

  const dispatch = useDispatch();

  const saida = [];

  for (let i = 0; i < menus.length; i++) {
    let groupIgual = false;
    for (let j = 0; j < i; j++) {
      if (saida[j] && menus[i].group === saida[j].group) {
        saida[j].name.push({
          name: menus[i].name,
          image: menus[i].image,
          priceFormatted: menus[i].priceFormatted,
        });
        groupIgual = true;
        break;
      }
    }

    if (!groupIgual) {
      saida.push({
        group: menus[i].group,
        name: [
          {
            name: menus[i].name,
            image: menus[i].image,
            priceFormatted: menus[i].priceFormatted,
          },
        ],
      });
    }
  }

  useEffect(() => {
    async function loadMenu() {
      const response = await api.get('menu');

      const menuInf = response.data;

      const menuFilter = menuInf.filter(
        (menu) => menu.restaurantId === restInfo.id
      );

      const menuList = menuFilter.map((m) => ({
        ...m,
        priceFormatted: formatPrice(m.price),
      }));

      setMenus(menuList);
      dispatch(MenuActions.menusRequest(menuList));
    }
    loadMenu();
  }, [restInfo.id, dispatch]);

  function handlePlates() {
    setShowPlates(!showPlates);
  }

  return (
    <Container>
      <NavContainer />

      <Header>
        <div>
          <img src={restInfo.image} alt="restaurante" />
          <div>
            <RestaurantName>{restInfo.name}</RestaurantName>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <p>
              Segunda à Sexta: <strong>11:30 às 15:00</strong>
            </p>
            <p>
              Sábado: <strong>11:30 às 22:00</strong>
            </p>
            <p>
              Domingo e feriados: <strong>11:30 às 15:00</strong>
            </p>
          </div>
        </div>
      </Header>

      <Main>
        <div>
          <input
            type="text"
            placeholder="Buscar no Cardápio"
            onChange={() => {}}
          />
          <div>
            <MdSearch size={30} color="#009ca3" />
          </div>
        </div>

        <aside>Publicidades</aside>
      </Main>

      <div id="teste">
        {saida.map((menu) => (
          <RestaurantsMenu key={menu.id} onClick={() => handlePlates()}>
            <MenuItem>
              <h3>{menu.group}</h3>
              <MdKeyboardArrowDown size={30} color="#404040" />
            </MenuItem>
            {showPlates && <Plates group={menu.name} />}
          </RestaurantsMenu>
        ))}
      </div>
    </Container>
  );
}
