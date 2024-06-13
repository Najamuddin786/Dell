import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box bg={'#dfe6e9'} py={8}>
      <Flex maxW={{ base: '90%', md: '95%', xl: '1200px' }} mx="auto" flexWrap="wrap">
        {/* Column 1 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6}>
          <Text fontWeight={600}>IN/EN</Text>
        </Box>

        {/* Column 2 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Account</Text>
          <Link to="/my-account">
            <Text opacity={0.9}>My Account</Text>
          </Link>
          <Link to="/order-status">
            <Text opacity={0.9}>Order Status</Text>
          </Link>
          <Link to="/my-products">
            <Text opacity={0.9}>My Products</Text>
          </Link>
        </Box>

        {/* Column 3 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Support</Text>
          <Link to="/support-home">
            <Text opacity={0.9}>Support Home</Text>
          </Link>
          <Link to="/contact-support">
            <Text opacity={0.9}>Contact Technical Support</Text>
          </Link>
          <Link to="/returns">
            <Text opacity={0.9}>Returns</Text>
          </Link>
        </Box>

        {/* Column 4 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Connect with Us</Text>
          <Link to="/community">
            <Text opacity={0.9}>Community</Text>
          </Link>
          <Link to="/contact-us">
            <Text opacity={0.9}>Contact Us</Text>
          </Link>
        </Box>

        {/* Column 5 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Our Offerings</Text>
          <Link to="/ai">
            <Text opacity={0.9}>Artificial Intelligence</Text>
          </Link>
          <Link to="/product">
            <Text opacity={0.9}>Product</Text>
          </Link>
          <Link to="/solutions">
            <Text opacity={0.9}>Solutions</Text>
          </Link>
          <Link to="/services">
            <Text opacity={0.9}>Services</Text>
          </Link>
          <Link to="/deals">
            <Text opacity={0.9}>Deals</Text>
          </Link>
        </Box>

        {/* Column 6 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Our Company</Text>
          <Link to="/who-we-are">
            <Text opacity={0.9}>Who We Are</Text>
          </Link>
          <Link to="/careers">
            <Text opacity={0.9}>Careers</Text>
          </Link>
          {/* Add more links as needed */}
        </Box>

        {/* Column 7 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Our Partners</Text>
          <Link to="/find-partner">
            <Text opacity={0.9}>Find a Partner</Text>
          </Link>
          <Link to="/oem-solution">
            <Text opacity={0.9}>OEM Solution</Text>
          </Link>
          <Link to="/partner-program">
            <Text opacity={0.9}>Partner Program</Text>
          </Link>
        </Box>

        {/* Column 8 */}
        <Box flex={{ base: '100%', md: '25%' }} mb={6} pr={{ base: 0, md: 4 }}>
          <Text fontWeight={600}>Resources</Text>
          <Link to="/blog">
            <Text opacity={0.9}>Blog</Text>
          </Link>
          <Link to="/events">
            <Text opacity={0.9}>Events</Text>
          </Link>
          {/* Add more links as needed */}
        </Box>
      </Flex>

      {/* Bottom links */}
      <Flex gap={'20'} maxW={{ base: '90%', md: '95%', xl: '1200px' }} mx="auto" mt={8}>
        <Link to="/">
          <Text fontWeight={600}>Dell Technologies</Text>
        </Link>
        <Link to="/">
          <Text fontWeight={600}>Dell Premier</Text>
        </Link>
      </Flex>

      {/* Footer bottom */}
      <Flex justify="space-between" maxW={{ base: '90%', md: '95%', xl: '1200px' }} mx="auto" mt={4}>
        <Link to="/">
          <Text>Copyright @ 2024 Dell Inc.</Text>
        </Link>
        <Link to="/terms-of-sale">
          <Text>Terms of Sale</Text>
        </Link>
        <Link to="/privacy-statement">
          <Text>Privacy Statement</Text>
        </Link>
        <Link to="/legal-regulatory">
          <Text>Legal & Regulatory</Text>
        </Link>
        <Link to="/accessibility">
          <Text>Accessibility</Text>
        </Link>
      </Flex>
    </Box>
  );
}
