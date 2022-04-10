import './App.css';
import React from 'react';

function App() {
  const [array, setArray] = React.useState(['thing 1', 'thing 2'])

  const addItem = () =>{
    setArray((prevArrray) =>{
      return [...prevArrray, `thing ${prevArrray.length + 1}`]

    })
  }
  const element = array.map((item)=>{
    return <div className="item">{item}</div>

  })
  return (
    <div className="App">
      <button className='button' onClick={addItem}>add</button>
      {element}

      
    </div>
  );
}

export default App;
