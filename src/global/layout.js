import React from "react"
import "./styles.css"

const Layout = props => {
  return (
    <>
      {/* Site-wide top nav */}
      <main>{props.children}</main>
      {/* Site-wide footer */}
    </>
  )
}

export default Layout
