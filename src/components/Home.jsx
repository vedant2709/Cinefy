import React from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'

function Home() {
  document.title="Movie App | Homepage"
  return (

    <>
      <Sidenav/>
      <div className='w-[80%] h-full'>
        <Topnav/>
      </div>
    </>
  )
}

export default Home