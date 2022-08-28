import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Icon,
    IconButton,
    Image,
    SimpleGrid,
    Spinner,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import {ArrowLeftIcon, ArrowRightIcon, StarIcon} from "@chakra-ui/icons";
  import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const AllProductApi=()=>{
    return axios(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder`)
    }

function StorePage(){
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(false);
AllProductApi().then((res)=>{
  setLoading(true);
setData(res.data)
}

).catch((err)=>
console.log(err))
setLoading(false);
},[])
    console.log(loading)
    if (!loading) {
      return <Center> <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    /></Center>
    }


  return (<>
    {/* <Heading>prod</Heading> */}
    <Box mt={3} mb={3} w="100%" bg="white" p={3}>
        <Center>
        <Heading>
        All Products
        </Heading>
        </Center>
        <hr />
        <SimpleGrid mt={3} columns={[2, null, 4]} spacing='40px'>
        {/* <Flex h="550px"  justifyContent="space-evenly" p={3}> */}
        {/* <IconButton mt="15%" disabled={page1===1} onClick={()=>setPage1(page1-1)} icon={<ArrowLeftIcon />} colorScheme='teal' variant='outline' /> */}
        
        {
          data.map((item)=><>
         <Link  to={`/product/${item.id}`}>
           <Box w="100%" h="100%" cursor="pointer" bg="white" border="1px solid black" borderRadius={10} p={3} key={item.id}>
              <Image w="90%" h="70%" src={item.api_featured_image} />
             <Text >
                {item.name}
              </Text>
             {/* </Center> */}
             <Heading size="sm">Brand: {item.brand}</Heading>
             <Heading size="md">
                ${item.price}
                </Heading>
                <Text >Category :{item.category}</Text>
              </Box>
              </Link>
              {/* <ProductDetail key={item.id} main_image={item.main_image} title={item.title}
               price={item.price} desc={item.desc} back_side_img={item.back_side_img} side_img={item.side_img} /> */}
              </>
          )
        }
         {/* <IconButton mt="15%" onClick={()=>setPage1(page1+1)} icon={<ArrowRightIcon />} colorScheme='teal' variant='outline' /> */}
         </SimpleGrid>
        {/* </Flex> */}
      </Box>
    </> 
  )
}
export default StorePage;

