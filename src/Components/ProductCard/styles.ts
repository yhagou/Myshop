import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  font-size: 0.9rem;

  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: blue;
  height: 40px;
  width: 100%;
  color: white;
  //icones:
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.85rem;

  svg {
    font-size: 1rem;
  }
`;
