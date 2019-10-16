import React from 'react'
import { CommitSection, Title, Container } from './style';

const CommitCard = ({children}) => {
    return (
      <Container>
        <Title>Commit ID: </Title>
        <CommitSection>{children}</CommitSection>
      </Container>
    )
}

export default CommitCard
