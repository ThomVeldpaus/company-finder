import React from "react"
import Header from "../components/layout/header"
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
	  <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <p>Such wow. Very React.</p>
    </div>
  )
}