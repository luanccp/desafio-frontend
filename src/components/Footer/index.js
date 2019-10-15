import React from "react"
import { FooterSection } from "./style"

const Footer = () => {
  return (
    <FooterSection>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterSection>
  )
}

export default Footer
