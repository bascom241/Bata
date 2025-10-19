
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Layout from "./components/Layout"
import ProductDetail from "./pages/ProductDetail"
function App() {


  


  return (
    <Router>
      <Layout>


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetail/>}/> 
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
