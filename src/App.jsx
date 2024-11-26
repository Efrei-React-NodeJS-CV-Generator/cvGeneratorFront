import { useState } from 'react'
import Header from './Navigation/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <Header />
        </div>





        
      </div>
    </>
  )
}

export default App
