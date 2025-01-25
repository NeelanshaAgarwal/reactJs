import React from 'react'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import WelcomeMessage from './jsx/WelcomeMessage'
import JSXRules from './jsx/JSXRules'
import Greet from './jsx/Greet'
import ProductInfo from './jsx/ProductInfo'
import UserList from './lists/UserList'
import ProductList from './lists/ProductList'
import Human from './props/Human'
import Prodct from './props/Prodct'

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
      <UserList />
      <ProductList />
      <Human name="Neelansha" age={21}/>
      <Prodct name="Iphone" price={80000}/>
    </div>
  )
}

export default App

