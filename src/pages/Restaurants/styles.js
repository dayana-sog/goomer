import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  height: 260px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    width: 695px;
    height: 145px;

    img {
      width: 145px;
      height: 145px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 50px;
    }
  }
`;

export const RestaurantName = styled.text`
  color: #404040;
  opacity: 1;
  font-size: 24px;
`;

export const Main = styled.main`
  height: 100px;
  display: flex;
  justify-content: space-between;

  div {
    margin-left: 74px;
    width: 60%;
    position: relative;

    color: #000;

    input {
      width: 100%;
      height: 15px;
      border-radius: 40px;
      padding: 25px;
      border: none;

      background: #e6e6e6 0% 0% no-repeat padding-box;

      box-shadow: 0px 2px 4px #00000029;
      opacity: 1;
    }

    div {
      position: relative;
      width: 50px;
      top: -40px;
      left: 840px;
    }
  }

  aside {
    height: 800px;
    width: 300px;
    margin-right: 80px;
    background: #e6e6e6;
  }
`;

export const RestaurantsMenu = styled.div`
  height: auto;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;

  height: 42px;
  border-bottom: 1px solid #333;
  width: 960px;
  margin: 25px 0 30px 75px;
  color: #404040;

  font-size: 16px;
  opacity: 1;
  text-align: left;

  cursor: pointer;
`;
