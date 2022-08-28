import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading, IconButton, Image, SimpleGrid, Spinner, Text, useOutsideClick } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllProductApi=(page,limit)=>{
  return axios(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`)
  }
function ExclusivePage(){
  const [data,setData]=useState([]);
  const [page,setPage]=useState(12);
  const [limit,setLimit]=useState(12);
  const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(false);
AllProductApi(page,limit).then((res)=>{
  setLoading(true)
  setData(res.data)
}
// console.log(res.data)


).catch((err)=>
console.log(err))
setLoading(false);
    },[page,limit])
    console.log(data)

    
const handlePlus=()=>{
  setPage(page+12);
 
}
if (!loading) {
  return <Center> <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Center>
}
    return(<>
    <Center>        <Heading>Exclusive Brands</Heading></Center>

        <SimpleGrid  mt={3} p={5} columns={[2, null, 4]} spacing='40px'>
    
      {data.map(data => (<>
      
        <Box w="100%" h="100%" cursor="pointer" bg="white" border="1px solid black" borderRadius={10} p={3} key={data.id}>
          <Center> <Image w="90%" h="70%" src={data.images} /></Center>
          <Heading size="sm" mt={2} >
                {data.title}
              </Heading>
       
              <Text mt={2} fontSize="13px">
                {data.description}
              </Text>
              <Heading mt={2} size="lg">
                $
{data.price}
              </Heading>
            </Box>
      {/* <div>{data.title}</div> */}
      
      </>)
      
      )}
      </SimpleGrid >
      <Box>
        <Center>
        <IconButton disabled={page===12} onClick={()=>setPage(page-12)} icon={<ArrowLeftIcon />} colorScheme='teal' variant='outline' />
        <Button ml={3} disabled mr={3} colorScheme='teal' variant='outline'>
{page}
        </Button>
        <IconButton   onClick={handlePlus} icon={<ArrowRightIcon />} colorScheme='teal' variant='outline' />
        
        </Center>
      </Box>
        </>
    )
}
export default ExclusivePage;


/* category: {id: 5, name: 'Others', image: 'https://api.lorem.space/image?w=640&h=480&r=5376'}
description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
id: 6
images: (3) ['https://api.lorem.space/image?w=640&h=480&r=3122', 'https://api.lorem.space/image?w=640&h=480&r=7961', 'https://api.lorem.space/image?w=640&h=480&r=6100']
price: 255
title: "Generic Cotton Chair" */