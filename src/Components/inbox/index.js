import React, { useState } from 'react'
import EmailDetail from './EmailDetail'
import EmailList from './EmailList'
import { useEffect } from 'react'

const Inobx = ({ emails = TEST_EMAILS }) => {
  const [selectedEmail, setSelectedEmail] = useState(null)
  useEffect(() => {

  }, [])

  return (
    <div style={{ display: selectedEmail ? 'flex' : 'block' }}>
      <div style={{ overflow: 'auto', minWidth: 200, maxHeight: 'calc(100vh - 65px)' }}>
        <EmailList emails={emails} onSelectEmail={setSelectedEmail} />
      </div>

      {
        selectedEmail && (
          <EmailDetail
            selectedEmail={selectedEmail}
            onClose={() => setSelectedEmail(null)}
          />
        )
      }
    </div>
  )
}

export default Inobx

const createData = (subject, from, to, receivedAt, body) => ({ subject, from, to, receivedAt, body })

const TEST_EMAILS = [
  createData('Subject 1', 'Upen Dhakal', 'All Students <students@someschool.com>; All Staff <staff@someschool.com>', '5 min ago', 'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Some subject', 'Basanta Dhakal', 'All Students <students@someschool.com>', '5 min ago', 'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Homework I Due', 'Manjil Gautam', 'me <myemail@someschool.com>', '5 min ago', 'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Home II posted', 'Prashant Nepaune', 'me <myemail@school.com>; Some One <someone@school.com>', 'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Fisk', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago', 'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Jankam N', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago', 'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Jagdish Ghimire', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago',  'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Parasher Ghimire', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago',  'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Bikki Nagarkoti', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago',  'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Surubhya Aryal', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago',  'Hi Pathha, how are you doing? Please call me back at this number...'),
  createData('Subject 1', 'Upen Dhakal', 'me <myemail@school.com>; Some One <someone@school.com>', '5 min ago', 'Hi Pathha, how are you doing? Please call me back at this number...')

]
