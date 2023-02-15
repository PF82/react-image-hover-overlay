import React, { useState } from 'react'
import Portfolio from './page/Portfolio'
import data from './data/data'
import '../src/App.css'

const App = () => {

  const [projects] = useState(data);

  return (
    <main>
      <section className='containerA'>
        <div className='titleA'>
          <h2>Projects</h2>
          <div className='underlineA'></div>
        </div>
        <Portfolio projects={projects} />
        {/* <button onClick={() => setProjects([])}>
          Click
        </button> */}
      </section>
    </main >
  )
}

export default App