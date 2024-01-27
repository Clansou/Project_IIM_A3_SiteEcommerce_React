import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from "../Providers/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faBasketShopping} from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.header`
 background-color: #f8f9fa;
 padding: 20px;
 display: flex;
 justify-content: space-between;
 align-items:center;
 font-size: 20px;
`;

const StyledLink = styled(Link)`
 color: #007bff;
 text-decoration: none;
`;

const CartContainer = styled.div`
 position: relative;
 display: flex;
 align-items: center;
`;

const StyledCartItemCount = styled.p`
 position: absolute;
 top: -40px;
 right: -10px;
 color: red;
 padding: 2px 5px;
 border-radius: 50%;
`;

function Header(){
  let {cart} = useCart()
  let cartItemCount;
  if (cart.length > 0) {
      cartItemCount = <StyledCartItemCount>{cart.length}</StyledCartItemCount>;
  }
   return (
       <StyledHeader>
           <StyledLink to="/">Accueil</StyledLink>
           <CartContainer>
              <StyledLink to="/cart"><FontAwesomeIcon icon={faBasketShopping} size="lg" /></StyledLink>
              {cartItemCount}
          </CartContainer>
       </StyledHeader>
   );
}

export default Header;