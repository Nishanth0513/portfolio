import { Box, Flex, Button, useColorMode } from '@chakra-ui/react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="nav" position="fixed" w="100%" bg={colorMode === 'light' ? 'white' : 'gray.800'} boxShadow="sm" zIndex={1000}>
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box fontWeight="bold" fontSize="xl">G NISHANTH REDDY</Box>
        <Flex gap={4}>
          <Button variant="ghost" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? '🌙' : '☀️'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 