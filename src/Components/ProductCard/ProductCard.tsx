import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { Products } from "../../data/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
  product: Products;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {`(${product.rating.rate})`}
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao Carrinho <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
