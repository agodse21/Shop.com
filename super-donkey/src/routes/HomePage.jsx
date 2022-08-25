import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      {" "}
      <Box w="100%">
        <Center p={2}>
          <Text fontSize={30} mr={2}>
            $50,074,194{" "}
          </Text>
          awarded in{" "}
          <Image
            ml={2}
            mr={2}
            w={10}
            src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
          />
          <b> Cashback!</b>
          <Button
            _hover={{ background: "#202340", color: "white" }}
            ml={2}
            borderRadius={25}
            colorScheme="black"
            variant="outline"
          >
            Learn More
          </Button>
        </Center>
      </Box>
      <Box>
        <Link to="/">
          <Image
            mt={3}
            src="https://www.shop.com/feo-cdn/z/J/mL5ft05xE.webp"
            alt="https://www.shop.com/feo-cdn/z/J/mL5ft05xE.webp"
          />
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <Image
            mt={3}
            src="https://www.shop.com/feo-cdn/u/w/hudNukX4Y.webp"
            alt="eo-cdn/z/J/mL5ft05xE.webp"
          />
        </Link>
      </Box>
      <Box mt={3} w="100%" bg="#f0f1f7">
        <Flex h="450px" justifyContent="space-evenly" p={3}>
          <Box w="23%" bg="white" p={5}>
            <Text mb={5}>Recently Viewed</Text>
            <Link to="/">
              {" "}
              <Image
                src="https://img.shop.com/Image/280000/287800/287812/products/1943470822.jpg?plain&size=300x300"
                alt="x"
              />
            </Link>{" "}
            <Link to="/">
              <Text
                _hover={{ color: "#0098b8" }}
                textDecoration="underline"
                mt={5}
              >
                Browsing History
              </Text>
            </Link>
          </Box>

          <Box w="23%" bg="white" p={5}>
            <Text mb={5}>Dr. Deedra Mason's Essential 9 </Text>
            <Link to="/">
              {" "}
              <Image
                src="https://img.shop.com/Image/homepage/us_eng_essential9_sq1616511735959.jpg"
                alt="x"
              />
            </Link>
            <Link to="/">
              <Text
                _hover={{ color: "#0098b8" }}
                textDecoration="underline"
                mt={5}
              >
                View the Essential 9
              </Text>
            </Link>
          </Box>
          <Box w="23%" bg="white" p={5}>
            <Text mb={5}>Featured OneCart Stores </Text>
            <Stack>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    {" "}
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_114426.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_107913.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    {" "}
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_125496.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
              <Box p={2} bg="#f0f1f7">
                <Center>
                  {" "}
                  <Link to="/">
                    <Image
                      mixBlendMode="multiply"
                      src="https://img.shop.com/Image/topbrands/nmlogos_138557.gif"
                      alt="x"
                    />
                  </Link>
                </Center>
              </Box>
            </Stack>

            <Link to="/">
              <Text
                _hover={{ color: "#0098b8" }}
                textDecoration="underline"
                mt="85px"
              >
                See More Stores
              </Text>
            </Link>
          </Box>
          <Box w="23%" pt="0px" >
            <Box h="25%" w="100%" mb={2} p={5} bg="white">
              <Center>
                <Text >Sign in for the best experience</Text>
                
              </Center>
              <Center><Button borderRadius={25} mt={2} w="80%" color="white" bg='#202340'>Button</Button></Center>
              
              
            </Box>
            <Link to="/">
            <Image h="70%" mixBlendMode="multiply"
                src="https://img.shop.com/Image/homepage/shop-usa-103589-shark-ninja-banner-square1660317987574.jpeg"
                alt="x"
              /></Link>

          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default HomePage;
