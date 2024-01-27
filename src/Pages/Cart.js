import styled from 'styled-components';
import Header from "../Components/Header";
import { useCart } from "../Providers/CartContext";
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';



const CartContainer = styled.div`
  padding: 20px;
`;

const ProductContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const TotalPrice = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 20px;
`;
const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid #007bff;
  border-radius: 5px;
  display: block; 
  margin: 20px auto; 
  text-align: center; 
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 50px;
`;



export default function(){
    let {cart,removeFromCart,removeAllFromCart} = useCart()
    let total = 0
    
    if (cart.length === 0) {
        return (
          <CartContainer>
            <Header/>
            <H1 >Aucun produit</H1>
            <StyledLink to="/">Retourner aux produits</StyledLink>

          </CartContainer>
        );
    }

    return (
      <CartContainer>
        <Header/>
        {cart.map((product, i) =>{
            total += parseFloat(product.price);
            return (
              <ProductContainer>
                <CartItem product={product} removeFromCart={() => removeFromCart(i)} />
              </ProductContainer>
            );
        })}
        <TotalPrice>Total : {total} €</TotalPrice>
        <CheckoutButton onClick={() => removeAllFromCart()}>Payer</CheckoutButton>
      </CartContainer>
    );
}