import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack, useColorModeValue, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 0 }}
      bg={bgColor}
    >
      <VStack spacing={8} maxW="container.md" mx="auto">
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>Get in Touch</Heading>
        <Box
          as="form"
          w="full"
          p={{ base: 4, md: 8 }}
          borderWidth="1px"
          borderColor={borderColor}
          rounded="lg"
          shadow="lg"
        >
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Name</FormLabel>
              <Input type="text" placeholder="Your name" fontSize={{ base: 'sm', md: 'md' }} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Email</FormLabel>
              <Input type="email" placeholder="your.email@example.com" fontSize={{ base: 'sm', md: 'md' }} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Message</FormLabel>
              <Textarea placeholder="Your message" rows={6} fontSize={{ base: 'sm', md: 'md' }} />
            </FormControl>
            <Button type="submit" colorScheme="blue" size={{ base: 'md', md: 'lg' }} w="full">
              Send Message
            </Button>
          </VStack>
        </Box>
        <HStack spacing={6} flexWrap="wrap" justify="center">
          <a href="https://github.com/Nishanth0513" target="_blank" rel="noopener noreferrer">
            <Icon as={FaGithub} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} cursor="pointer" />
          </a>
          <a href="https://www.linkedin.com/in/g-nishanthreddy" target="_blank" rel="noopener noreferrer">
            <Icon as={FaLinkedin} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} cursor="pointer" />
          </a>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Contact 