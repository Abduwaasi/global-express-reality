import Image from "next/image"
import Link from "next/link"
import {Text,Heading,Flex,Box,Button} from "@chakra-ui/react"

const Banner = ({image,purpose,heading, description, buttonText})=>{
  return <Flex sx={styles.container}>
      { image&&
          <Box flex="1">
          <Image alt={`${purpose} image`} src={image} width={700} height={400} />
      </Box>
      }
    
      <Box flex="1.3" px="1rem" py="2rem">
          <Heading as="h5" sx={styles.purpose}>{purpose}</Heading>
          <Heading as="h2" sx={styles.heading}>{heading}</Heading>
          <Heading as="h5" sx={styles.description}>{description}</Heading>
          <Button sx={styles.button}>
          <Link href={`/${purpose}`}>
           <Text as="a">{buttonText}</Text>
          </Link>
          </Button>  
      </Box>
  </Flex>
}

const styles={
    container:{
        maxWidth:"1024px",
        height:["auto",,,"400px"],
        flexDir:["column",,"row"],
        spacing:"2rem",
        mx:"auto",
        // alignItems:"center",
    },
    purpose:{
     fontSize:["1.2rem",,"1.5rem"],
     fontWeight:"300",
     textTransform:"uppercase",
     lineHeight:"1.5",
     letterSpacing:"0.2px"
     
    },
    heading:{
     fontSize:["2rem",,"2.2rem"],
     fontWeight:"bold",
     textTransform:"capitalize",
     lineHeight:"1",
     letterSpacing:"0.2px"
     
    },
    description:{
     fontSize:["1.2rem",,"1.5rem"],
     fontWeight:"300",
     textTransform:"capitalize",
     lineHeight:"2",
     letterSpacing:"0.2px"
     
    },
    button:{
        bg:"facebook.500",
        color:"white",
        outline:"none",
        border:"transparent",
        textTransform:"capitalize",
        transition:"all .3s ease",
        _hover:{
            transform:"scaleX(1.02)"
        }
    }
}

export default Banner