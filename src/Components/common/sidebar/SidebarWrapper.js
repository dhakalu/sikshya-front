import styled, { css } from 'styled-components'
// import Colors from '../../../Components/utils/'

const thinScrollBar = css`
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background: #ddd;
        }
    }
`

export const NAV_BAR_HEIGHT = '50px'
export const SIDE_BAR_WIDTH = '300px'

const SidebarWrapper = styled.div`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: 65px;
    height: 100vh;
    overflow: auto; 
    background: #f0f0f0;
    ${thinScrollBar};
    a {
        text-decoration: none;
        color: #333333;
    }

    h3 {
        padding: 0px 20px;
    }

    &.left-bar-enter-active, &.left-bar-exit-active{
        transition: opacity 500ms;
    }

    min-width: ${SIDE_BAR_WIDTH};
    &.left-bar-enter-done{
        max-width: ${SIDE_BAR_WIDTH};
        min-width: ${SIDE_BAR_WIDTH};
    }

    &.left-bar-exit-done{
        max-width: 85px;
        min-width: 85px;
    }
`

export default SidebarWrapper
