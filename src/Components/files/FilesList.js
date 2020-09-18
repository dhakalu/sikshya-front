import React from 'react'
import { getKeys } from '../utils/ObjectUtils'
import DataTable from '../common/table/DataTable'
import { Typography } from '@material-ui/core'
import WhiteSpace from '../common/WhiteSpace.styles'
import {
  useHistory
} from 'react-router-dom'
import PaddingAdder from '../common/PaddingAdder.styles'

const createData = (name, type, owner, lastModifiedOn, fileSize = '82KB') => {
  return { name: { name, type }, owner, lastModifiedOn, fileSize }
}

const rows = [
  createData('Chapter I', 'folder', 'me', 'Yesturday 10:00PM', 100, 'Past Due'),
  createData('Chapter II', 'folder', 'me', '05/23/2020', 25, 'Past Due'),
  createData('Discussion Guidelines.pdf', 'file', 'me', '05/11/2020 11:00 PM', 20, 'Past Due'),
  createData('Debate Guidelines.pdf', 'file', 'me', '09/11/2020 11:00 PM', 20, 'In Progress'),
]

const columns = getKeys(createData('What is after our death?', 'me', 'Yesturday 10:00PM', 100, 'Past Due')).map(x => (
  {
    label: x.toUpperCase(),
    id: x,
    cellType: x === 'name' ? 'file' : undefined
  }
))

const FilesList = props => {
  const history = useHistory()

  const onSelectDiscussion = (course) => {
    history.push('/courses/<some-course-id>/discussions/<discussion-id>')
  }
  return (
    <>
      <WhiteSpace height={10} />
      <PaddingAdder>
        <Typography component='h3' variant='h4'>Documents</Typography>
      </PaddingAdder>
      <WhiteSpace height={20} />
      <DataTable square columns={columns} records={rows} onClickRow={onSelectDiscussion} />
    </>
  )
}

FilesList.propTypes = {

}

export default FilesList
