import {Box, Flex,Text} from "@chakra-ui/react"
import Link from "next/link"

const MobileDrawer =()=>{
    return <Box>
    <Flex sx={styles.container}>
    <Link href="/" passHref>
        <Text as="a" sx={styles.container.items}>Home</Text>
    </Link>
    <Link href="/" passHref>
        <Text as="a" sx={styles.container.items}>About</Text>
    </Link>
    <Link href="/" passHref>
        <Text as="a" sx={styles.container.items}>Services</Text>
    </Link>
    <Link href="/" passHref>
        <Text as="a" sx={styles.container.items}>Contact</Text>
    </Link>
</Flex>
    </Box> 
}

export default MobileDrawer

const styles = {
    container:{
        width:"75%",
        height:"calc(100vh - 80px)",
        px:["1rem","1.5rem",,"5rem"],
        bg:"darkBg",
        pt:"2rem",
        color:"dark",
        display:["flex",,,"none"],
        flexDir:"column",
       
        items:{
            fontSize:"1rem",
            fontWeight:"500",
            letterSpacing:"0.2",
            color:"white",
            my:"1rem",
            borderY:"2px solid #FD743E",
            py:"0.3rem",

            _hover:{
                color:"orange",
            }
        }
    }
}