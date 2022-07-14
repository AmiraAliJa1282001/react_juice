import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from 'axios';

function App() {
  // hook instead of state in class component
  const [data ,usedata] = React.useState([]);
  const [state,usestate] =  React.useState({});
  React.useEffect( ()=>{
    const fetchingData = async ()=>{
      const f = await fetch('https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals')
      .then(response => response.json())
      .then((actualData) => {usedata(actualData)});
    }
    fetchingData();
  },[]);

const handleNameChange =(e)=>{
  var Name= e.target.value
  usestate({...state,name: Name})
}

 const handleImgChange = (e) => {
  var Image= e.target.value
  usestate({...state,image: Image})
  }

  const HandlePost = async () =>{
    try {
      
      const res = await axios.post('https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals',state)
     
      
    } catch (error) {
      
    }
   
     
  }

  return (
    
    <div className="container">
      <div className='addJuice card'>
      
        <input type="text" placeholder='Enter juice name' onChange={handleNameChange}/>
        <input type="text" placeholder='Enter image link' onChange={handleImgChange}/>
        <button onClick={HandlePost}>submit</button>
        
      </div>
      {data.map(item => (
        <div className='card'>
        <img src={item.image} alt="juice image"/>
        <h2> {item.name} </h2>
      </div>
      ))}
      
    </div>

    );
}

export default App;
