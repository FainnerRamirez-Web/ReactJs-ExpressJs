import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  .jugadores {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      font-size: 20px;
      font-weight: bold;
      margin-top: 20px;
    }
  }
`;
