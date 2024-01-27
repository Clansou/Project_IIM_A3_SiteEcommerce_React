import { useGetProductsQuery, useGetCommentsByProductIdQuery,useCreateCommentMutation} from "../Services/API";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../Components/Header";
import Article from "../Components/Article";


export default function(){
    const { id } = useParams();
    const [inputValue,setInputValue] = useState("");
    let[createComment] = useCreateCommentMutation();

    function AddCommentary(){
        if(inputValue != ""){
            createComment({id, username: "clement",comment: inputValue})
            setInputValue("");
        }   
    }

    let { data: products,isFetching: fetchingProduct } = useGetProductsQuery()
    let { data: comments,isFetching: fetchingComment } = useGetCommentsByProductIdQuery(id);

    if(fetchingProduct){
        return <p>Loading Product</p>
    }

    const product = products.find(product => product.id === id);
   
    return <div>
        <Header/>
    {fetchingProduct?(
        <p>Loading Product</p>
    ):(
        <Article data={product}/>
    )}

    
    {fetchingComment ? (
        <p>Loading comments...</p>
      ) : (
        <div>
            {comments.map(comment => <p>Commentaire de {comment.username} : {comment.comment}</p>)}
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={AddCommentary}>Envoyer le commentaire</button>
        </div>
        )
    }
    </div>
}
