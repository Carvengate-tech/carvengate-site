import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/carvengate-logo.png"
import Button from "./button"

const Header = () => (
  <header className="justify-between block mt-2 sm:pr-16 sm:pl-10 sm:flex">
    <Link to="/" className="flex items-center justify-center">
      <img src={logo} className="w-10" alt="" />
      <p className="tracking-widest">CARVENGATE</p>
    </Link>
    <div className="flex items-center justify-center">
      <Link to="/" className="mx-1 text-xs font-semibold sm:mx-4" activeClassName="">HOME</Link>
      <Link to="#" className="mx-1 text-xs font-semibold sm:mx-4" activeClassName="">ABOUT</Link>
      <Link to="#" className="mx-1 text-xs font-semibold sm:mx-4" activeClassName="">WORKS</Link>
      <Button buttonName={`HIRE US`} />
    </div>
  </header>
)

export default Header
