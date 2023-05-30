import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductSheet from './components/ProductSheet'
import Cart from './components/Cart'
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <div className="main">
          <Header />
          <ProductList />
          <Routes>
            <Route exact path="/ProductSheet/:id" element={<ProductSheet />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
