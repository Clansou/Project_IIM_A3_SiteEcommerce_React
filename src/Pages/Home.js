import { useGetProductsQuery} from "../Services/API";
import styled from 'styled-components';
import Header from "../Components/Header";
import ArticlesList from "../Components/Article";
export default function(){
    let {data,isFetching} = useGetProductsQuery()
    return <div>
        <Header/>
        <H1>HOME</H1>


     {
        isFetching ? <p>Loading Products</p>: 

        <div>
            <br />
            { data.map((product) => <ArticlesList key={product.id} data={product} />)}
        </div>
     }
    </div>
}

const H1 = styled.h1`
text-align:center;
`;