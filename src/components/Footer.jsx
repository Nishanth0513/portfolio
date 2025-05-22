import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="footer"
      py={{ base: 4, md: 6 }}
      px={{ base: 2, md: 0 }}
      bg={bgColor}
      textAlign="center"
    >
      <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
        © {new Date().getFullYear()} G NISHANTH REDDY All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer 