import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack, useColorModeValue, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="section"
      id="contact"
      py={20}
      bg={bgColor}
    >
      <VStack spacing={8} maxW="container.md" mx="auto">
        <Heading>Get in Touch</Heading>
        <Box
          as="form"
          w="full"
          p={8}
          borderWidth="1px"
          borderColor={borderColor}
          rounded="lg"
          shadow="lg"
        >
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="your.email@example.com" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rows={6} />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" w="full">
              Send Message
            </Button>
          </VStack>
        </Box>
        <HStack spacing={6}>
        <a href="https://github.com/Nishanth0513" target="_blank" rel="noopener noreferrer">
          <Icon as={FaGithub} w={6} h={6} cursor="pointer" />
        </a>
          <a href="https://www.linkedin.com/in/g-nishanthreddy" target="_blank" rel="noopener noreferrer">
            <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" />
          </a>
          <Icon as={FaTwitter} w={6} h={6} cursor="pointer" />
        </HStack>
      </VStack>
    </Box>
  )
}

export default Contact 