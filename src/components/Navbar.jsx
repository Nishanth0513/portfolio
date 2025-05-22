import { Box, Flex, Button, useColorMode, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navLinks = (
    <>
      <Button variant="ghost" w="full" onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); onClose && onClose(); }}>
        About
      </Button>
      <Button variant="ghost" w="full" onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); onClose && onClose(); }}>
        Projects
      </Button>
      <Button variant="ghost" w="full" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); onClose && onClose(); }}>
        Contact
      </Button>
      <Button w="full" onClick={toggleColorMode}>
        {colorMode === 'light' ? '🌙' : '☀️'}
      </Button>
    </>
  )

  return (
    <Box as="nav" position="fixed" w="100%" bg={colorMode === 'light' ? 'white' : 'gray.800'} boxShadow="sm" zIndex={1000}>
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 2, md: 4 }}
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box fontWeight="bold" fontSize={{ base: 'md', md: 'xl' }}>G NISHANTH REDDY</Box>
        {/* Desktop Links */}
        <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
          {navLinks}
        </Flex>
        {/* Mobile Hamburger */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={4} mt={10} align="stretch">
                {navLinks}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Navbar 