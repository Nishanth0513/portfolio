import { Box, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react'

const Hero = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="section"
      pt={32}
      pb={20}
      bg={bgColor}
      textAlign="center"
    >
      <VStack spacing={6}>
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, blue.400, teal.400)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Hi, I'm G NISHANTH REDDY
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="2xl">
          A passionate full-stack developer crafting beautiful and functional web experiences.
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </Text>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </Button>
      </VStack>
    </Box>
  )
}

export default Hero 