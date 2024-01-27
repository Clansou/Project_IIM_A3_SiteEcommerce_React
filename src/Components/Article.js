import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../Providers/CartContext";
import { useLocation } from 'react-router-dom';


const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductContainer = styled.div`
background-color: #e1f6fa;
margin: 24px auto;
display: flex;
width: 80%;
flex-direction: row; 
justify-content: space-around;
border: 2px solid black; 
padding: 10px; 
border-radius:20px;
color: #333;
`;

const ProductImage = styled.img`
width: 50%;
height: auto;
margin-right: 20px;
mix-blend-mode: multiply

`;

const ProductTitle = styled.h3`
font-size: 24px;
`;

const ProductPrice = styled.p`
font-size: 20px;
`;

const ProductQuantity = styled.p`
font-size: 18px;
`;

const AddToCartButton = styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 4px;

&:hover {
    background-color: #45a049;
  }
`;

const ViewCommentsLink = styled(Link)`
display: inline-block;
padding: 10px 15px;
margin-top: 20px;
background-color: #007bff;
color: white;
text-decoration: none;
border: none;
border-radius: 4px;
cursor: pointer;
text-align: center;

&:hover {
    background-color: #0062cc;
  }
`;

function ArticlesList(product) {
      const location = useLocation();
      console.log(location.pathname);

    product = product.data
    const { addToCart } = useCart();
        return (
            <ProductContainer>
              <ProductImage src={product.image} alt={product.title} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>Prix : {product.price}€</ProductPrice>
                <ProductQuantity>Quantité restante : {product.quantity}</ProductQuantity>
                <AddToCartButton onClick={() => addToCart(product)}>Ajouter au panier</AddToCartButton>
                {location.pathname.startsWith ('/products') ? null:<ViewCommentsLink to={`products/${product.id}`}>Voir les commentaires</ViewCommentsLink>}
              </ProductInfo>
            </ProductContainer>
        );
}

export default ArticlesList