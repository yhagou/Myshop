import * as S from "./styles";

interface CartProps {
  showCart: boolean;
}
export const Cart: React.FC<CartProps> = ({ showCart }) => {
  return (
    <S.container showCart={showCart}>
      <S.title>Carrinho</S.title>
    </S.container>
  );
};
