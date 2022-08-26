import { Heading } from "@chakra-ui/react";
import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://amazon-products1.p.rapidapi.com/product',
    params: {country: 'US', asin: 'B08BF4CZSV', topReviews: 'true'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'amazon-products1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

function StorePage(){
    return(
        <Heading>StorePage</Heading>
    )
}
export default StorePage;

