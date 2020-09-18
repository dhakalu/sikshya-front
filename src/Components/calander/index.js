import Day from './Day'
import React from 'react'
import DataTable from '../common/table/DataTable'

const daysOfWeek = ['', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurs', 'Fri']

const Calander = () => {
  return (
    <div>
      <DataTable
        columns={daysOfWeek.map((x, i) => ({ id: i, label: x }))}
        records={['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM',
          '10: 00 AM', '11: 00 AM', '12: 00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
          '7:00 PM', '8:00 PM', '9:00 PM',
          '10: 00 PM', '11: 00 PM'].map(x => ({ 0: x }))}
      />
    </div>
  )
}

export default Calander
