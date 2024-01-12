function List(props){
    return <ul>
    {
      props.data.map((el,listIndex)=>{
        
        return <li> <img src={el.picture.medium}></img><span>{el.name.first +" "+ el.name.last +" "+el.dob.age+"ans"}</span><button onClick={()  => props.removeDataWithIndex(listIndex)}>Remove</button></li> 
      })
    }
  </ul>
}
export default List