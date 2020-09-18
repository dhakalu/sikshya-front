import styled from 'styled-components'
// import Colors from '../../../utils/Color'
// import Typography from '../../../utils/Typography'

const SidebarOptionWrapper = styled.div`
    letter-spacing: .05em;
    font-size: 20px;
    background:  ${props => props.isSelected ? '#7986cb' : ''};
    &:hover {
        background: ${props => props.isSelected ? '#7986cb' : '#ddd'};
        cursor: pointer;
    }
`

export default SidebarOptionWrapper
