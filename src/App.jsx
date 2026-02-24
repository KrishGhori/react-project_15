import { useCallback, useState } from 'react'

import './App.css'
import ChaildComponents from './Components/ChaildComponents';

function App() {
  const [count, setCount] = useState(0);

  
  const handleclick = useCallback(() => {
    setCount(count +1);
  }, [count]);
  return (
   <div>
    <div>
      <button onClick={handleclick}>Incement </button>
      <p>Count: {count}</p>
    </div>
    <div>
      <ChaildComponents 
      buttonName ="Click me" 
      handleclick ={handleclick}/>
    </div>

   </div>
  )
}

export default App
