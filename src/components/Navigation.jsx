import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/dashboard" color="white" mr={4}>
          Dashboard
        </Link>
        <Link as={RouterLink} to="/login" color="white">
          Dashboard
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
