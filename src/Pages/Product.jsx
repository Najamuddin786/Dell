import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch product data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Initialize cart from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Box p={4}>
      <Flex align="center" flexWrap="wrap" justifyContent="space-between">
        {data.map((product, index) => (
          <Box
            key={index}
            w={{ base: "95%", sm: "48%", md: "32%", xl: "24%" }}
            mb={4}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
          >
            <Image w="200px" h="300px" src={product.image} alt={product.title} />
            <Text mt={2} fontWeight="semibold" fontSize="lg">
              {product.title}
            </Text>
            <Text fontWeight="bold" color="teal.500" fontSize="xl">
              ${product.price}
            </Text>
            <Flex mt={2} alignItems="center">
              <Text>Rating:</Text>
              <Box ml={2} color="gray.600">
                {product.rating.rate} ({product.rating.count} reviews)
              </Box>
            </Flex>
            <Button onClick={() => handleAddToCart(product)} mt={4} colorScheme="teal">
              Add to Cart
            </Button>
          </Box>
        ))}
      </Flex>
     
    </Box>
  );
}
