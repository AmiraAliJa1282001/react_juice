import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  // hook instead of state in class component
  const [data ,usedata] = React.useState([]);
  const [state,usestate] =  React.useState([]);
  React.useEffect( ()=>{
    const fetchingData = async ()=>{
      const f = await fetch('https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals')
      .then(response => response.json())
      .then((actualData) => {usedata(actualData)});
    }
    fetchingData();
  },[]);
 const handleNameChange = (event) => {
    usestate({ name: event.target.value});
  }
 const handleImgChange = (event) => {
  usestate({ image: event.target.value});
  }

  const HandlePost =() =>{
     // POST request using fetch inside useEffect React hook
     const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  };
  fetch('https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals', requestOptions)
      .then(response => response.json())
      .then(() => usedata({name: state.name,image: state.image}));
  }

  return (
    
    <div className="container">
      <div className='addJuice card'>
        <from onSubmit={HandlePost}>
        <input type="text" placeholder='Enter juice name' onChange={handleNameChange}/>
        <input type="text" placeholder='Enter image link' onChange={handleImgChange}/>
        <input type="submit" value="add" className="subbutton"/>
        </from>
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
