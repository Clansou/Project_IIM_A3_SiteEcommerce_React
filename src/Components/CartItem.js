import styled from 'styled-components';

const ProductTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const RemoveButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
`;



const CartProduct = ({ product, removeFromCart }) => {
    return (
      <>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price} €</ProductPrice>
        <RemoveButton onClick={ removeFromCart }> Supprimer </RemoveButton>
      </>
    );
  };

export default CartProduct