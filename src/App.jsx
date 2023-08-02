import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import CategoriesP from "./pages/CategoriesP"
import HomeP from "./pages/HomeP"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="categories" element={<CategoriesP />} />
          {/* <Route path="products" element={<CategoriesP />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
