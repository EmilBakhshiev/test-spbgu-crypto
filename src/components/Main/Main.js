import React from 'react'
import Headers from '../Headers/Headers'
import News from '../News/News'
import Project from '../Projects/Project'

function Main({amount ,notification, onSignOut}) {
    return (
        <>
          <Headers onSignOut={onSignOut}></Headers>
          <main className='main'>
              <News amount={amount} notification={notification}></News>
              <Project></Project>
            </main>  
        </>
    )
}

export default Main
