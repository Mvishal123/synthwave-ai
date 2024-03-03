import React from 'react'
import Button from './components/button'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/header'


const App = () => {
  return (
    <>
      <div className='pt-[5.45rem]'>
        <Header />
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App