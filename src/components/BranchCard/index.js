import React from 'react'
import { BranchSection } from './style';

const BranchCard = ({children}) => {
    return (
        <BranchSection>
            {children}
        </BranchSection>
    )
}

export default BranchCard
