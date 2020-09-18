import styled from 'styled-components'

export const PaddingAdder = styled.div`
    padding: ${({ padding }) => padding || 10}px;
    padding-left: ${({ l }) => l || 10}px;
`

export default PaddingAdder
