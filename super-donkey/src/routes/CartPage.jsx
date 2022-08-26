import { Alert, AlertIcon, AlertTitle, Box, Button, Center, Flex, Heading, Image, Tag, TagLabel, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const GetMedProbyId=(id)=>{
    return axios(`https://warm-garden-46246.herokuapp.com/medical_products/${id}`);

}

function CartPage(){
    const [mdata,setMdata]=useState([]);
    const [err,setErr]=useState("");
    const { id } = useParams();
    useEffect(() => {
        
        GetMedProbyId(id).then(res=>{
           setMdata(res.data)
            console.log("ss",res.data)
      
        }).catch(err=>{
            console.log("amol",err.message);
            setErr(err.message)

        })
         
      }, [id]);
    //   if(mdata){
    //     console.log("jkjksjjks")
    //   }
    return(<>
       <Center><Heading mt={5}>Cart</Heading></Center>

        <Box m="auto" mt={5} w="50%" h="400px">   
        {/* <Text>{err}</Text> */}
        <Alert status='error'>
  {/* <AlertIcon /> */}
  {err?<AlertTitle>{err}</AlertTitle>:"Avoid Fake Payment"}
  
</Alert>
        <Flex>
              <Image w="50%" h="70%" src={mdata.main_image} />
             <Box mt={10}> 
             <Heading size="md">{mdata.title}</Heading>
                <Heading mt={5} size="lg">Total Amount:{mdata.price}</Heading>
                <Link  to={`/payment`}>
                <Button w="50%" mt={10} colorScheme='pink' variant='solid'>
                Buy Now!
              </Button>
              </Link>

              <Link  to={`/`}>
                <Button ml={1} w="50%" mt={10} colorScheme='green' variant='solid'>
                Go Back!
              </Button>
              </Link>
                
                </Box>
               

              </Flex> 
            </Box>
            </>
    )
}
export default CartPage;