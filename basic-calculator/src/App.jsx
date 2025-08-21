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
              <input type="button" value="AC"/>
              <input type="button" value="C"/>
              <input type="button" value="."/>
              <input type="button" value="/"/>
            </div>
            <div>
              <input type="button" value="7"/>
              <input type="button" value="8"/>
              <input type="button" value="9"/>
              <input type="button" value="*"/>
            </div>
            <div>
              <input type="button" value="4"/>
              <input type="button" value="5"/>
              <input type="button" value="6"/>
              <input type="button" value="+"/>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
