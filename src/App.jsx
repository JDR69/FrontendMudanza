import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  )
}

function Main() {
  return(
    <>
      <Routes>
        <Route path="" element={<LoginPage/>}/>
      </Routes>
    </>
  )
}
export default App

