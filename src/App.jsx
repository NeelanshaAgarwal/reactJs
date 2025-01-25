import React from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import WelcomeMessage from './jsx/WelcomeMessage'
import JSXRules from './jsx/JSXRules'
import Greet from './jsx/Greet'
import ProductInfo from './jsx/ProductInfo'

const App = () => {
  return (
    <div>
      <Greeting />
      <Header />
      <Main />
      <Footer />
      <WelcomeMessage />
      <JSXRules />
      <Greet />
      <ProductInfo />
    </div>
  )
}

export default App

