import { Container } from "react-bootstrap" 
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"



const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
    <h1>
      WelCome To ProShop
    </h1>
    </Container>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App

