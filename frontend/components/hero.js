import {Text, Heading,Flex,Box} from "@chakra-ui/react"
import Image from "next/image"

import heroImg from "/public/images/heroImg.jpg"

const Hero =()=>{
  return <Flex sx={styles.container}>
      <Box sx={styles.container.heading}>
         <Heading as="h1" sx={styles.container.heading.text}>Get the perfect property for you and your family</Heading>
      </Box>
      <Box>
        <Image 
        src={heroImg}
        alt="hero image"
        width={1440}
        height={700}
        />
      </Box>
      <Flex sx={styles.container.stat}>
        <Box sx={styles.container.stat.box}>
            <Heading as="h3" sx={styles.container.stat.box.heading}>450+</Heading>
            <Text as="p" sx={styles.container.stat.box.text}>Properties sold</Text>
        </Box>
        <Box sx={styles.container.stat.box}>
            <Heading as="h3" sx={styles.container.stat.box.heading}>120</Heading>
            <Text as="p" sx={styles.container.stat.box.text}>Satisfied Client</Text>
        </Box>
        <Box sx={styles.container.stat.box}>
            <Heading as="h3" sx={styles.container.stat.box.heading}>25</Heading>
            <Text as="p" sx={styles.container.stat.box.text}>Year Experience</Text>
        </Box>
      </Flex>
   
  </Flex>
}

const styles={
    container:{
        bg:"darkBg",
        // px:["1rem","1.5rem",,"5rem"],
        flexDir:"column",
        position:"relative",
        heading:{
            width:["100%",,"90%","75%"],
            mx:"auto",
            textAlign:"center",
            py:"5rem",

            text:{
                color:"white",
                fontSize:["3rem",,"3.1rem","3.4rem","3.6rem"],
                fontWeight:"bold",
                textTransform:"capitalize",
                
            }
        },
        stat:{
            bg:"white",
            width:["100%",,,"80%","50%"],
            // width:"100%",
            display:"flex",
            justifyContent:"space-around",
            flexDir:["row"],
            py:"1.5rem", 
            px:[0,,,"2rem"],     
            alignItems:"center",
            mx:"auto",
            position:["static","static","absolute"],
            top:"230px",
            left:[0,0,0,"50%"],
            transform:["translateX(0)",,,"translateX(-50%)"],
            zIndex:3,

            box:{
                display:"flex",
                flexDir:"column",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
               
                heading:{
                    fontSize:"2rem",
                    fontWeight:"bold",
                    letterSpacing:"0.5px",
                    color:"dark"
                    
                },
                text:{
                    fontSize:"1.2rem",
                    fontWeight:"400",
                    letterSpacing:"-0.5px",
                    color:"lightText",

                }
            },

        }
    }
}


export default Hero