import * as React from "react"
// import PropTypes from "prop-types"
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
      <Link to="/about" className="mx-4 text-xs font-semibold" activeClassName="">ABOUT</Link>
      <Link to="/works" className="mx-4 text-xs font-semibold" activeClassName="">WORKS</Link>
      <Link to="/hire-us" className="flex transition-all duration-1000 ease-linear ml-7 rounded-2xl hover:bg-blue-700 hover:text-white">
        <span className="flex items-center justify-center w-6 text-white bg-blue-700 rounded-full">
          <img src={caret} alt="" className="transform -rotate-90" />
        </span>
        <p className="py-1 pr-2 ml-1 text-xs font-semibold">HIRE US</p>
      </Link>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
