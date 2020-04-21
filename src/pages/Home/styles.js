import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 200px;

  h1 {
    margin-top: 40px;
    color: #404040;
    font-weight: 400;
    margin-bottom: 32px;
    opacity: 0.8;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 80px;
    position: absolute;
    width: 80%;

    input {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      padding: 25px;
      border: none;

      box-shadow: 0px 2px 4px #00000029;
      opacity: 1;
    }

    div {
      position: relative;
      width: 50px;
      top: -40px;
      right: 55px;
    }
  }
`;

export const RestaurantsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 21px;

  margin: 36px 70px 0 70px;

  div {
    position: relative;
  }
`;

export const Restaurants = styled.div`
  display: flex;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 4px;
  opacity: 1;
  margin: 30px;

  cursor: pointer;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100px;
    height: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 27px;

    p {
      font-size: 12px;
      opacity: 0.9;
    }
  }
`;

export const RestaurantName = styled.text`
  font-weight: 500;
  font-size: 16px;
  opacity: 0.8;
`;

export const IconOpen = styled.div`
  width: 70px;
  height: 70px;

  background: #2b0d61 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  opacity: 1;

  text-align: center;
  letter-spacing: 0px;
  font-size: 8px;
  color: #ffffff;

  border-radius: 50%;

  position: absolute;
  top: -20px;
  left: 43px;
`;
