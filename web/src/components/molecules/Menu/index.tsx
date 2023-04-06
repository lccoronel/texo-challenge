import React, { useState } from 'react'

import { menuOptions } from './helper/data'
import { MenuContainer, Navigation, Link } from './styles'

export const Menu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <MenuContainer>
      <Navigation>
        {menuOptions.map((option) => (
          <Link
            to={option.route}
            key={option.name}
            title={option.name}
            isSelected={option.name === selectedOption}
            onClick={() => setSelectedOption(option.name)}
          >
            {option.name}
          </Link>
        ))}
      </Navigation>
    </MenuContainer>
  )
}
