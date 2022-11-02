import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Service from './Components/Service'


import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/midea.scss'



function App() {


  return (
<Router>
  <Header />
  <Routes>
    <Route  path="/" element = {<Home/>}/>
    <Route  path="/contact" element = {<Contact/>}/>
    <Route  path="/service" element = {<Service/>}/>
  </Routes>
  <Footer/>
</Router>
  )
}

export default App
