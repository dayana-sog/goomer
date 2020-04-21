import React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

import { Container, Exit } from './styles';

export default function PopUp({ group }) {
  console.tron.log('dentro do popup', group);

  function handleHidePopUp() {
    console.tron.log(document.getElementById('popup'));
  }

  return (
    <Container>
      <div className="popup" id="popup">
        <div className="popup__content">
          {group.image ? (
            <img src={group.image} alt="menu" />
          ) : (
            <img
              src="https://www.drogarianeves.pt/wp-content/uploads/2018/03/imagem-indisponivel.jpg"
              alt="menu"
            />
          )}
          <div className="popup__content-text">
            <div>
              <p className="popup__content-text-plate">{group.name}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <h1>{group.priceFormatted}</h1>
          </div>
          <div className="popup__content-footer">
            <div>
              <button type="button">
                <MdRemove size={30} color="#009CA3" />
              </button>
              <input type="number" name="add" value="2" readOnly />
              <button type="button">
                <MdAdd size={30} color="#009CA3" />
              </button>
            </div>
            <div>
              <button type="button" className="popup__content-footer-button">
                Adicionar <span>R$ 19,90</span>
              </button>
            </div>
          </div>
          <Exit onClick={handleHidePopUp}>X</Exit>
        </div>
      </div>
    </Container>
  );
}
