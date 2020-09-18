import React from 'react'

const Hour = () => (
  <div style={{ minwidth: 50, minHeight: 120, background: '#f0f0f0', border: '1px solid #fff' }} />
)

const Day = ({ event = [] }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hour, i) => (
        <Hour key={i} />
      ))}
    </div>

  )
}

export default Day
