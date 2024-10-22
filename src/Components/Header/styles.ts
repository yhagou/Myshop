import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: aliceblue;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.3rem;
`;

export const AuthButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: green;
  height: 30px;
  padding: 0 1rem;
  color: aliceblue;
  //icones:
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;

  svg {
    font-size: 1rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: violet;
  height: 30px;
  padding: 0 1rem;
  color: black;
  //icones:
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.85rem;

  svg {
    font-size: 1rem;
  }
`;
