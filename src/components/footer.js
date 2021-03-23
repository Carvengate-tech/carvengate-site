import * as React from "react"

const Footer = () => (
  <div className="bg-blue-500">
    <h1 className="text-center text-white">Our Services</h1>

    <div className="flex">
      <div className="flex"></div>
      <div className="flex"></div>
      <div className="flex"></div>
    </div>

    <div className="px-10">
      <hr className="border border-white" />
    </div>

    <div className="flex justify-between py-8 text-white px-28">
      <p>{`${new Date().getFullYear()} Carvengate`}</p>
      <div className="flex">
        <div>Social1</div>
        <div>Social2</div>
        <div>Social3</div>
      </div>
    </div>
  </div>
)

export default Footer
