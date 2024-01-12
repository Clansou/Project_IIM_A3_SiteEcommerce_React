// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import List from "./Components/List.js";
import styled from "styled-components";
import { Link } from 'react-router-dom';




function App() {

  // const [firstname,setFirstName] = useState("AAAAAAAAA");
  // const [inputValue,setInputValue] = useState("");
  // const [list,setList] = useState([
  //   "Anrel",
  //   "Moi",
  //   "Fanny",
  // ])

  // function hello(name){
  //   return 'Hello ' + name
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {
  //         firstname === "AAAAAAAAA"?<p>{hello(firstname)}<code> src/App.js</code> and save to reload.</p>:<p>Non {firstname} t'es nul.</p>
  //       }
  //       <input style={{
  //         backgroundColor: inputValue === "Joe" ?"red":"white"
  //       }} value={inputValue} onChange={(event)=>{
  //         setInputValue(event.target.value)
  //       }
  //       }>
          

  //       </input>
  //       <button onClick={()=>{
  //         setList([...list,inputValue]);
  //         setInputValue("");
  //       }}>
  //         Click change le tableau mais bien
  //       </button>
  //       <List data={list} removeDataWithIndex = {(listIndex) =>{
  //         setList([...list.filter((el, index) => index !== listIndex)])
  //       }} />
  //     </header>
  //   </div>
  // );
  const [list,setList] = useState([])
  const [user,setUser] = useState([])

  function fetchRandomUser(){
    fetch("https://randomuser.me/api/").then((res) =>{
      res.json().then((json) =>{
        console.log(json.results[0]);
        setUser([...user,json.results[0]]);
      })
    })
  }
useEffect(() =>{
  if(user.length !== 0){
    setList([...list,user[user.length-1]]);
  }
  
}, [user])






  return (
      <DIV className="App">
       
        <HEADER className="App-header">
        <h2>USERS</h2>
          {/* {
            user? <div>
              <span><img src={user.picture.medium}></img></span>
              <span>{user.name.first}{user.name.last}{user.dob.age}</span>
            </div>:null
          } */}
        {
          user?<List data={list} removeDataWithIndex = {(listIndex) =>{
            setList([...list.filter((el, index) => index !== listIndex)])
            }}/>: <span>Créer un user</span>
        }
        <Button onClick={()=>{
        fetchRandomUser()
        }}>
        Ajouter un user
        </Button>
        <Link to="/about">Go to about</Link>
        </HEADER>

        
      </DIV>

    );


}
const HEADER = styled.header
`
margin: 25px;
display: flex;
flex-direction: column;
min-width: 448px;
justify-content: space-between;
`
const DIV = styled.div
`
display: flex;
justify-content: center;
align-items: center;
min-height: 60vh;
background-color: #b3d4fc;
`
const Button = styled.button
`
  color: blue;
  background-color:red;
  border-radius:15px;
  &:hover{
    background-color:green;
  }
  &:danger{

  }
`
export default App;
