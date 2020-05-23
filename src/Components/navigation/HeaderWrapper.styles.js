import styled from 'styled-components'
import ZIndex from '../utils/ZIndex'

const NAV_BAR_HEIGHT = '50px'

const HeaderWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100vw;
    justify-content: space-between;
    background-color: #fff;
    border-box: 0 1px 2px #ccc;
    height: ${NAV_BAR_HEIGHT};
    align-items: center;
    ${ZIndex.navigationBar};
`

export default HeaderWrapper
