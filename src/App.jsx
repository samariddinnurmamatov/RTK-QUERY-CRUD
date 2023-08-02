import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import CategoriesP from "./pages/CategoriesP"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoriesP />} />
          <Route path="categories" element={<CategoriesP />} />
          <Route path="products" element={<CategoriesP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
