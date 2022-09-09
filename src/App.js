import React, { useState } from 'react'
import './App.css'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'

function App () {
  return (
    <div className='app'>
      <h1>Tippy JS React Tutorial</h1>

      <div className='area'>
        <Tippy placement={'bottom'} animation='perspective' theme={'light'} interactive={true} content={
          <Tippy offset={[100, 20]} placement={'bottom'} animation='perspective' theme={'light'} interactive={true} content={<div>
            <h1>Hello this is my first tooltip using Tippy</h1>
            <Tippy offset={[200, -100]} placement={'top'} animation='perspective' theme={'light'} interactive={true} content={<div>
            <h1>ohh! finally you are here</h1>
            
          </div>}>
            <button className='ref-button3'>
            welcome inside me
            </button>
          </Tippy>
            
          </div>}>
            <button className='ref-button2'>
            let's start
            </button>
          </Tippy>
        }>
          <button className='ref-button'>
          Click on me!
          </button>
        </Tippy>
      </div>

    </div>
  )
}

export default App