import { Box, Heading, Text, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaTrafficLight, FaShoppingCart } from 'react-icons/fa'

const MotionBox = motion(Box)

const Projects = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  const projects = [
    {
      title: 'EZ-TOLL',
      icon: FaTrafficLight,
      description: [
        "Developed a traffic management system that prioritizes emergency vehicles and optimizes toll calculations using C programming, Merge Sort, and Dijkstra's algorithm.",
        "Integrated Dijkstra's algorithm to determine the most efficient path for traffic movement. Assigned priority levels to vehicles (e.g., ambulances, fire trucks) for efficient lane distribution.",
        "Designed a lane assignment model to distribute vehicles strategically."
      ],
      technologies: ['C', 'Data Structures & Algorithms', 'Graph Theory', 'Merge Sort', "Dijkstra's Algorithm"]
    },
    {
      title: 'FarmFlow',
      icon: FaShoppingCart,
      description: [
        "Developed an online marketplace that enables farmers to sell milk and livestock products directly to consumers, eliminating intermediaries and ensuring fair pricing.",
        "Designed a farmer-friendly registration system that enables dairy producers to sign up and showcase their products.",
        "Integrated a seamless e-commerce module allowing users to browse, purchase, and securely pay for fresh milk and livestock goods. Implemented fair trade policies ensuring farmers receive direct payments, promoting sustainable agriculture and eliminating intermediaries."
      ],
      technologies: ['Web Development', 'E-commerce', 'User Authentication', 'Payment Integration', 'Database Management']
    }
  ]

  return (
    <Box
      as="section"
      id="projects"
      py={20}
      bg={bgColor}
    >
      <VStack spacing={8} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading textAlign="center" mb={8}>Projects</Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                bg={cardBg}
                rounded="lg"
                overflow="hidden"
                boxShadow="lg"
                p={6}
                transition="transform 0.3s ease"
                _hover={{ transform: 'translateY(-5px)' }}
                height="100%"
              >
                <Box display="flex" alignItems="center" mb={4}>
                  <Box as={project.icon} w={8} h={8} mr={3} />
                  <Heading size="lg">{project.title}</Heading>
                </Box>
                
                <VStack align="stretch" spacing={4} mb={6}>
                  {project.description.map((point, pointIndex) => (
                    <Text key={pointIndex} color={textColor}>
                      {point}
                    </Text>
                  ))}
                </VStack>

                <Box>
                  <Text fontWeight="bold" mb={2}>Technologies Used:</Text>
                  <Box display="flex" gap={2} flexWrap="wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <Box
                        key={techIndex}
                        bg={useColorModeValue('blue.100', 'blue.900')}
                        color={useColorModeValue('blue.800', 'blue.100')}
                        px={3}
                        py={1}
                        rounded="full"
                        fontSize="sm"
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default Projects 