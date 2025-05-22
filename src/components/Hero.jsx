import { Box, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react'

const Hero = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="section"
      pt={{ base: 24, md: 32 }}
      pb={{ base: 10, md: 20 }}
      px={{ base: 4, md: 0 }}
      bg={bgColor}
      textAlign="center"
    >
      <VStack spacing={{ base: 4, md: 6 }}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
          bgGradient="linear(to-r, blue.400, teal.400)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Hi, I'm G NISHANTH REDDY
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} color={textColor} maxW="2xl" mx="auto">
          A passionate full-stack developer crafting beautiful and functional web experiences.
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </Text>
        <Button
          colorScheme="blue"
          size={{ base: 'md', md: 'lg' }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </Button>
      </VStack>
    </Box>
  )
}

export default Hero 