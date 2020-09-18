import React from 'react'
import SidebarOption from './SidebarOption'

const SidebarContent = (props) => {
  const {
    items = [],
    selectedItem,
    onSelectItem
  } = props
  return (
    <>
      {
        items.map((item, index) => {
          return (
            <SidebarOption
              key={index}
              onClick={onSelectItem}
              isSelected={selectedItem ? '' + selectedItem === '' + item.id : false}
              {...item}
            />
          )
        })
      }
    </>
  )
}

export default SidebarContent
