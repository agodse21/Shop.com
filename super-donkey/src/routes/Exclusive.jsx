import { Heading, useOutsideClick } from "@chakra-ui/react";
import React from "react";
// import { useOutsideClick } from '@chakra-ui/react'
function ExclusivePage(){

    // function Example() {
        const ref = React.useRef()
        const [isModalOpen, setIsModalOpen] = React.useState(false)
        useOutsideClick({
          ref: ref,
          handler: () => setIsModalOpen(false),
        })
     
      console.log(isModalOpen)
        return (
          <>
            {isModalOpen ? (
              <div ref={ref}>
                👋 Hey, I'm a modal. Click anywhere outside of me to close.
              </div>
            ) : (
              <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            )}
          </>
        )
    //   }


    // return(
    //     <Heading>ExclusivePage</Heading>
    // )
}
export default ExclusivePage;