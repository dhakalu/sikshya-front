import React from 'react'
import PropTypes from 'prop-types'
import SidebarWrapper from './SidebarWrapper'
import SidebarContent from './SidebarContent'
import ClosedSidebar from './ClosedSidebar'
import { CSSTransition } from 'react-transition-group'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import PaddingAdder from '../PaddingAdder.styles'

const Sidebar = ({
  title = 'Sample Title',
  config = undefined,
  children,
  isExpanded = true,
  selectedItem = null,
  onSelectItem = () => false
}) => (
  <CSSTransition in={isExpanded} classNames='left-bar'>
    <SidebarWrapper>
      {isExpanded ? (
        <>
          <PaddingAdder>
            <Typography variant='h4' component='h5'>{title}</Typography>
          </PaddingAdder>
          <Divider />
          {children || (
            <SidebarContent
              onSelectItem={onSelectItem}
              selectedItem={selectedItem} {...config}
            />
          )}
        </>
      ) : (<ClosedSidebar />)}
    </SidebarWrapper>
  </CSSTransition>
)

export default Sidebar

Sidebar.propTypes = {
  /** Optionalside config object to show the sidebar content.
     * when children prop is passed this will be ignored
     */
  config: PropTypes.any,
  /** Title to show on the sidebar */
  title: PropTypes.string,
  /** React Component that will be rendered on sidebar */
  children: PropTypes.any
}
