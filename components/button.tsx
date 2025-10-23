import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/core'


const Button: React.FC = ({ children }) => {
  return (
    <ChakraButton
      backgroundColor="#C9A961"
      color="white"
      textTransform="uppercase"
      width="fit-content"
      _hover={{
        backgroundColor: "#B8956A",
        transform: "scale(1.05)",
      }}
      transition="all 0.3s ease"
      fontWeight="600"
      px="24px"
      py="20px"
    >
      {children}
    </ChakraButton>
  )
}
export default Button
