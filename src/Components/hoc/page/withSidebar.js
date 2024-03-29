import React from 'react'
import { Box } from '@material-ui/core'

const SIDE_BAR_WIDTH = '0 0 300px'

const withSidebar = (MainContent, Sidebar, sidebarProps) => {
  return (props) => {
    return (
      <Box display='flex'>
        <Box flex={SIDE_BAR_WIDTH}>
          {Sidebar && <Sidebar {...props} />}
        </Box>
        <Box flex={9}>
          <MainContent />
        </Box>
      </Box>
    )
  }
}

export default withSidebar
