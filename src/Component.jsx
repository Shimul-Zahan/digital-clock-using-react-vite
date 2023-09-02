import React, { useState } from 'react'

const Component = () => {

    let time = new Date().toLocaleTimeString();
    
    const [currentTime, setCurrentTime] = useState();

    setInterval(function () {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }, 1000)

  return (
      <div className='h-screen flex justify-center items-center'>
          <h1 className="text-5xl font-bold">{ currentTime }</h1>
      </div>
  )
}

export default Component