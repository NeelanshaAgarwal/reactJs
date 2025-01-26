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
import Weather from './conditional rendering/Weather'
import UserStatus from './conditional rendering/UserStatus'
import Greetin from './conditional rendering/Greetin'
import StyleCard from './style/StyleCard'
import ProfileCard from './style/ProfileCard'
import IconComponent from './style/IconComponent'

const App = () => {
  return (
    <section>
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
      <Weather />
      <UserStatus loggedIn = {true} isAdmin = {false}/>
      <Greetin timeOfDay = "morning" />
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </section>
  )
}

export default App

