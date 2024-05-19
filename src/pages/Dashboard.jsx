import { Box, Heading, Text } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Dashboard
      </Heading>
      <Text>SMS Delivered: 100</Text>
      <Text>SMS Sent: 120</Text>
      <Text>SMS Failed: 20</Text>
      <Heading as="h2" mt={5} mb={3}>
        Payment Integration
      </Heading>
      <Text>PayPal and Stripe integration coming soon...</Text>
    </Box>
  );
}

export default Dashboard;
