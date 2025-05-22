import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="footer"
      py={6}
      bg={bgColor}
      textAlign="center"
    >
      <Text color={textColor}>
        © {new Date().getFullYear()} G NISHANTH REDDY All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer 