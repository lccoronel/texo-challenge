import React, { useState } from 'react'

import { menuOptions } from './helper/data'
import { MenuContainer, Navigation, Link } from './styles'

type Option = (typeof menuOptions)[0]

export const Menu: React.FC = () => {
  const [options, setOptions] = useState(menuOptions)

  function handleSelectOption(selectedOption: Option) {
    setOptions((oldState) => {
      return oldState.map((option) => ({
        ...option,
        selected: option.name === selectedOption.name,
      }))
    })
  }

  return (
    <MenuContainer>
      <Navigation>
        {options.map((option) => (
          <Link
            to={option.route}
            key={option.name}
            title={option.name}
            isSelected={option.selected}
            onClick={() => handleSelectOption(option)}
          >
            {option.name}
          </Link>
        ))}
      </Navigation>
    </MenuContainer>
  )
}
