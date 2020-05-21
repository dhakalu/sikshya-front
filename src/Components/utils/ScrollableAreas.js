import { css } from 'styled-components'

export const thinScrollBar = css`
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