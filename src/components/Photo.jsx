import { Box, Image, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Photo = () => {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box
      as="section"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 0 }}
      bg={bgColor}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <Box
          maxW={{ base: "200px", md: "300px", lg: "400px" }}
          borderRadius="full"
          overflow="hidden"
          boxShadow="2xl"
          border="4px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Image
            src="https://raw.githubusercontent.com/Nishanth0513/portfolio/main/public/images/profile.JPG"
            alt="G NISHANTH REDDY"
            objectFit="cover"
            w="100%"
            h={{ base: "200px", md: "300px", lg: "400px" }}
            fallbackSrc="https://via.placeholder.com/400x400?text=G+NISHANTH+REDDY"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x400?text=G+NISHANTH+REDDY";
            }}
          />
        </Box>
      </MotionBox>
    </Box>
  )
}

export default Photo 