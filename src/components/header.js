import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/carvengate-logo.png"
import caret from '../images/caret.svg'

const Header = () => (
  <header className="flex justify-between pl-10 pr-16 mt-2">
    <Link to="/" className="flex items-center">
      <img src={logo} className="w-10" alt="" />
      <p className="tracking-widest">CARVENGATE</p>
    </Link>
    <div className="flex items-center">
      <Link to="/" className="mx-4 text-xs font-semibold" activeClassName="">HOME</Link>
      <Link to="#" className="mx-4 text-xs font-semibold" activeClassName="">ABOUT</Link>
      <Link to="#" className="mx-4 text-xs font-semibold" activeClassName="">WORKS</Link>
      <Link to="#" className="flex transition-all duration-1000 ease-linear ml-7 rounded-2xl hover:bg-blue-550 hover:text-white">
        <span className="flex items-center justify-center w-6 text-white rounded-full bg-blue-550">
          <img src={caret} alt="" className="transform -rotate-90" />
        </span>
        <p className="py-1 pr-2 ml-1 text-xs font-semibold">HIRE US</p>
      </Link>
    </div>
  </header>
)

export default Header
