import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/carvengate-logo.png"
import Button from "./button"

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
      <Button buttonName={`HIRE US`} />
    </div>
  </header>
)

export default Header
