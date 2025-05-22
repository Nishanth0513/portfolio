import { Box, Heading, Text, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import {  SiJavascript, SiCplusplus, SiC } from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  const skills = [
    { icon: FaReact, name: 'React', description: 'Building modern user interfaces' },
    { icon: FaNodeJs, name: 'Node.js', description: 'Backend development' },
    { icon: FaDatabase, name: 'Databases', description: 'SQL and NoSQL solutions' },
    { icon: SiJavascript, name: 'JavaScript', description: 'Core web development' },
    { icon: GiBrain, name: 'Data Structures', description: 'Efficient problem-solving with data structures' },
    { icon: GiBrain, name: 'Algorithms', description: 'Optimized algorithmic solutions' },
    { icon: SiC, name: 'C Language', description: 'System programming and low-level development' },
    { icon: SiCplusplus, name: 'C++', description: 'Object-oriented programming and system development' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <Box
      as="section"
      id="about"
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
          <Heading textAlign="center" mb={8}>About Me</Heading>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text fontSize="lg" color={textColor} textAlign="center" maxW="3xl" mx="auto">
            Enthusiastic Information Technology student pursuing a B.Tech from Vasavi college of engineering. Passionate about software development, with hands-on experience in building an Wunderlust(homestay) web app using React and Node.js. Gained practical industry exposure through an internship, further developing problem-solving skills through coursework and hackathons. Seeking an internship to apply technical knowledge, collaborate with teams, and contribute to innovative solutions.
          </Text>
        </MotionBox>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={8}>
            {skills.map((skill, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  p={6}
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  rounded="lg"
                  textAlign="center"
                  cursor="pointer"
                >
                  <Box as={skill.icon} w={10} h={10} mx="auto" mb={4} />
                  <Heading size="md" mb={2}>{skill.name}</Heading>
                  <Text color={textColor}>{skill.description}</Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </VStack>
    </Box>
  )
}

export default About 