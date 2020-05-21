import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const QuickFilters = props => {
  const {
    filters = ['Has Scholarships', 'With Bus', 'With Cafeteria', 'Pre School', 'Online Classes', 'Has Sikshya', 'Councelling']
  } = props

  const [appliedFilters, setAppliedFilters] = useState(['Has Scholarships'])

  const handleFilterClick = (name) => {
    if (appliedFilters.includes(name)) {
      setAppliedFilters(appliedFilters.filter(a => a !== name))
    } else {
      setAppliedFilters([...appliedFilters, name])
    }
  }

  return (
    <div>
      {
        filters.map((x, i) => (
          <FilterButton key={i} selected={appliedFilters.includes(x)} onClick={() => handleFilterClick(x)}>{x}</FilterButton>
        ))
      }
    </div>
  )
}

QuickFilters.propTypes = {
  filters: PropTypes.array.isRequired
}

export default QuickFilters

const FilterButton = styled.button`
    border: none;
    border-radius: 13px;
    height: 26px;
    padding: 5px 20px;
    margin: 10px 20px;
    outline: none;
    ${props => props.selected && 'background-color: green'};
    ${props => props.selected && 'color: white'};
    &:hover {
        cursor: pointer;
    }
`
