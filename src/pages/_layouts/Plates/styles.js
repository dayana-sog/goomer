import styled from 'styled-components';

export const MenuDiv = styled.ul`
  width: 960px;
  height: auto;
  margin-left: 75px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  margin-bottom: 70px;
`;

export const Menuplates = styled.li`
  display: flex;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #00000029;
  opacity: 1;
  list-style: none;

  cursor: pointer;

  img {
    width: 150px;
    height: 160px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-left: 16px;

    p {
      margin-top: 8px;
      font-size: 13px;
    }
  }
`;

export const Price = styled.text`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 30px;

  font-size: 20px;

  p {
    margin-left: 10px;
    text-decoration: line-through;
    color: #989898;
  }

  span {
    color: #009ca3;
  }
`;

export const RestaurantName = styled.text`
  color: #404040;
  opacity: 1;
  font-size: 24px;
`;
