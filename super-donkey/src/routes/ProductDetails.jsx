import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Flex, Heading, Image, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const GetMedProbyId=(id)=>{
    return axios(`https://warm-garden-46246.herokuapp.com/medical_products/${id}`);

}

function ProductDetail(){
    const [mdata,setMdata]=useState([]);
    const { id } = useParams();
    useEffect(() => {
        
        GetMedProbyId(id).then(res=>{
           setMdata(res.data)
            console.log("ss",res.data)
      
        }).catch(err=>{
            console.log(err)
        })
         
      }, [id]);
    return (
      <>
        <Breadcrumb
          ml={3}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/product">Product</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box mt={3} w="100%" h="500px" key={mdata.id}>
          <Flex>
            <Box w="20%">
              <Stack>
                <Image w="50%" h="10%" src={mdata.main_image} />
                <Image w="50%" h="10%" src={mdata.back_side_img} />
                <Image w="50%" h="10%" src={mdata.side_img} />
              </Stack>
            </Box>
            <Box w="40%">
            <Tag size="lg" w="10%" colorScheme="red" >
                  <Center>
                  <TagLabel>New</TagLabel>
                  </Center>
                  </Tag>
              <Image w="70%" h="100%" src={mdata.main_image} />

            </Box>
            <Box w="40%">
              <Stack>
                <Heading as="h2" size="md">
                  {mdata.title}
                </Heading>

                <Tag size="lg" w="20%" colorScheme="red" >
                  <Center>
                  <TagLabel>New Arrival</TagLabel>
                  </Center>
                 
                </Tag>
                <Heading as="h2" size="lg">
                  {mdata.price}
                </Heading>
              <Text >
{mdata.desc}
              </Text><br/>
              <Link  to={`/cart/${mdata.id}`}>
              <Button variant='outline' colorScheme='red' w="50%">Add to Cart</Button>
              </Link>
              <br />
              <Button variant='outline' colorScheme='green' w="50%">Add to Order</Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </>
    );
}

export default ProductDetail;
// key={item.id} main_image={item.main_image} title={item.title}
// price={item.price} desc={item.desc} back_side_img={item.back_side_img} side_img={item.side_img} />
            