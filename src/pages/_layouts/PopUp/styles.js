import styled from 'styled-components';

export const Container = styled.div`
  .popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(17, 17, 17, 0.1);
    z-index: 9999;
    margin: 0;

    transition: all 0.3s;

    &__content {
      width: 700px;
      height: 500px;
      background: #fff;
      box-shadow: 0 10px 20px rgba(17, 17, 17, 0.1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 4px;

      margin-left: 0;
      margin-top: 0;

      img {
        padding: 20px;
        height: 250px;
        width: 100%;
      }

      &-text {
        display: flex;
        position: relative;
        width: 90%;
        margin-bottom: 30px;

        h1 {
          width: 100px;
          color: #009ca3;
          position: absolute;
          top: 90px;
          right: 2px;
        }

        &-plate {
          font-size: 24px;
          margin-bottom: 20px;
        }
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        margin-left: 30px;

        border-top: 1px solid #333;
        width: 90%;

        button {
          background: none;
          border: 0;
          padding: 20px;
        }

        div {
          flex-direction: row;
          align-items: center;
          align-self: center;
          margin-top: 10px;
        }

        input {
          height: 45px;
          width: 45px;
          text-align: center;
          color: #000;
        }

        &-button {
          margin-top: 15px;
          background: #009ca3 !important;
          color: #fff;
          border-radius: 6px;
        }
      }
    }
  }
`;

export const Exit = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  border: none;

  background: #fff;
  font-weight: bold;
  z-index: 9999;

  top: -14px;
  right: -15px;
`;
