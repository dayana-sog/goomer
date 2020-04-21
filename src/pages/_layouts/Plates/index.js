import React, { useState } from 'react';

import { MenuDiv, Menuplates, RestaurantName, Price } from './styles';

import PopUp from '../PopUp';

export default function Plates({ group }) {
  const [showPopUp, setShowPopUp] = useState(false);

  function handlePouUp(m) {
    setShowPopUp(!showPopUp);
  }

  return (
    <>
      <MenuDiv onClick={() => handlePouUp()}>
        {group.map((m) => (
          <Menuplates>
            {m.image ? (
              <img src={m.image} alt="menu" />
            ) : (
              <img
                src="https://www.drogarianeves.pt/wp-content/uploads/2018/03/imagem-indisponivel.jpg"
                alt="menu"
              />
            )}
            <div>
              <RestaurantName>{m.name}</RestaurantName>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <br />
              <Price>
                <span>{m.priceFormatted}</span>
                <p>R$ 19,90</p>
              </Price>
            </div>
            {showPopUp && <PopUp group={m} />}
          </Menuplates>
        ))}
      </MenuDiv>
    </>
  );
}
