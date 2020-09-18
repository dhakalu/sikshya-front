import styled from 'styled-components'

export const MarginAdder = styled.div`
    margin-right: ${({ r }) => r || 0}px;
    margin-left: ${({ l }) => l || 0}px;
    margin-top: ${({ t }) => t || 0}px;
    margin-bottom: ${({ b }) => b || 0}px;
`

export default MarginAdder
