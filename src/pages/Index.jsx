import { useState } from "react";
import { Container, Box, VStack, Text, IconButton, Image, Button, HStack, Flex } from "@chakra-ui/react";
import { FaRobot, FaTimes } from "react-icons/fa";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" p={4}>
      <Box width="100%" position="relative">
        <IconButton aria-label="Toggle Chat" icon={isChatOpen ? <FaTimes /> : <FaRobot />} size="lg" position="absolute" top={4} right={4} onClick={toggleChat} />
        {isChatOpen && (
          <Box position="absolute" top={16} right={4} width="300px" height="400px" bg="gray.100" borderRadius="md" boxShadow="md" p={4} zIndex={10}>
            <Text fontSize="lg" mb={4}>
              Chat Bot
            </Text>
            <Box flex="1" bg="white" borderRadius="md" p={2} overflowY="auto">
              <Text>Welcome to the chat! How can I assist you today?</Text>
            </Box>
          </Box>
        )}
      </Box>

      <VStack spacing={4} align="center">
        <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE2NjU4MTA5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" boxShadow="md" />
        <Text fontSize="2xl">Beautiful Landscape</Text>
        <Text>This is a description of the beautiful landscape shown in the picture above. Enjoy the serene view and the tranquility it brings.</Text>
      </VStack>

      <Flex as="footer" width="100%" justifyContent="center" py={4} bg="gray.200">
        <Text>deber birhan AMaK</Text>
      </Flex>
    </Container>
  );
};

export default Index;
