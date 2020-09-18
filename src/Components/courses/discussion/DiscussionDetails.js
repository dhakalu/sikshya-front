import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BreadcrumContext } from '../../hoc/withBreadCrum'
import PaddingAdder from '../../common/PaddingAdder.styles'
import Post from '../posts/Post'
import { Box } from '@material-ui/core'

const bredcrumLinks = [
  { name: 'Courses', path: '/courses' },
  { name: 'Some Course', path: '/courses/<some-course-id>' },
  { name: 'Discussions', path: '/courses/<some-course-id>/discussions' },
  { name: 'What is after death?' }
]

const DiscussionDetails = ({
  details = '',
  posts = [
    {},
    {},
    {},
    {}
  ]
}) => {
  const { setLinks } = useContext(BreadcrumContext)

  useEffect(() => {
    setLinks(bredcrumLinks)
  }, [])

  return (
    <Box display='flex' justifyContent='center'>
      <PaddingAdder>
        {
          posts.map((post, id) => (
            <Post key={id} {...post} />
          ))
        }
      </PaddingAdder>
      <div>
          Participants / Chat
      </div>
    </Box>

  )
}

DiscussionDetails.propTypes = {

}

export default DiscussionDetails
