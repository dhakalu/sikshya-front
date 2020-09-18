import styled from 'styled-components'
import ZIndex from '../utils/ZIndex'

const NAV_BAR_HEIGHT = '65px'

const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    ${ZIndex.navigationBar};

    a {
        text-decoration: none;
        color: #333333;
        font-size: 1.1em;
    }
`

export default HeaderWrapper
