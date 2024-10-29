import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0px" : "-350px")};

  width: 350px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 1s;
`;

export const title = styled.h1``;