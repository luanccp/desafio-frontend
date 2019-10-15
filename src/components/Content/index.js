import React from "react"
import { ContentSection } from "./style"

const Content = ({children}) => {
  return (
    <ContentSection>
      {children}
    </ContentSection>
  )
}

export default Content
