import styled from 'styled-components'
import PropTypes from 'prop-types'

const WhiteSpace = styled.div`
    min-height: ${({ height }) => height || 10}px;
`

WhiteSpace.propTypes = {
  /** Pixels of space to leave vertically */
  height: PropTypes.number
}

export default WhiteSpace
