import { Outlet } from "react-router"
import Detail from "./components/Detail"
import Export from "./components/Export"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import Marquee from "./components/Marquee"
import { Navbar } from "./components/Navbar"
import Pricing from "./components/Pricing"
import Ship from "./components/Ship"
import Shipping from "./components/Shipping"

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <HomePage></HomePage>
      <Marquee></Marquee>
      <Detail></Detail>
      <Shipping></Shipping>
      <Export></Export> */}
      {/* <Ship></Ship> */}
    </>
  )
}

export default App
