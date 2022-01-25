import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import Featured from './components/Featured'
import NewProducts from './components/NewProducts'
import Clothe from './components/Clothe'
import Mobile from './components/Mobile'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          {/* index will set the route to default */}
          <Route index element={<Featured />} />
          <Route path="feature" element={<Featured />}>
            <Route path="cloth" element={<Clothe />} />
            <Route path="mobile" element={<Mobile />} />
          </Route>
          <Route path="newProduct" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
