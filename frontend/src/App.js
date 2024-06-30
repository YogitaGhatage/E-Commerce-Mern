import { Container } from "react-bootstrap" 
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Footer from "./components/Footer"



const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
    <h1>
      WelCome To Ghatage Shop
    </h1>
    </Container>
        <Outlet />
    </main>
    <Footer />
    <ToastContainer />
    </>
  )
}

export default App

