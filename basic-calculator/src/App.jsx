import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='title-section'>
        <h1>Basic Calculator</h1>
      </div>
      <div className='container'>
        <div className='calculator'>
          <form>
            <div>
              <input type='text'/>
            </div>
            <div>
              <input type="button" />
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
