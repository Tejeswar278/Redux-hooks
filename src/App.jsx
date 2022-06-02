import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div>user details fetch from api mocker</div>
        <div>
          <button>
            <div>All</div>
            <div>4</div>
          </button>
          <button>
            <div>Personal</div>
            <div>1</div>
          </button>
          <button>
            <div>Official </div>
            <div>2</div>
          </button>
          <button>
            <div>Others</div>
            <div>1</div>
          </button>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}

export default App
