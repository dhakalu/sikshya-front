import { getKeys } from '../utils/ObjectUtils'

const getSubmission = (id, submittedBy, submittedAt) => ({
  id,
  submittedBy,
  submittedAt
})

export const submissions = [
  getSubmission(1, 'Upen Dhakal', '09/07/2020 12:00 AM'),
  getSubmission(2, 'Priya KC', '09/07/2020 12:00 AM'),
  getSubmission(3, 'Vames Thakuri', '09/07/2020 12:00 AM'),
  getSubmission(4, 'Rames Dangol', '09/07/2020 12:00 AM'),
  getSubmission(5, 'Shame Gautam', '09/07/2020 12:00 AM')
]

export const columns = getKeys(submissions[0]).map(x => (
  {
    label: x.toUpperCase(),
    id: x,
    cellType: 'default'
  }
))

