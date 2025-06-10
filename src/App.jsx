import { useState } from 'react'
import './App.css'
import LocalWellApp from './pages/LocalWell'

// Import Poppins font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LocalWellApp/>
        </div>
    </>
  )
}

export default App
