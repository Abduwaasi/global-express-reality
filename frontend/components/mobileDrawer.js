import {Flex,Text} from "@chakra-ui/react"
import Link from "next/link"

const MobileDrawer =()=>{
    return  <Flex sx={styles.container}>
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
}

export default MobileDrawer

const styles = {
    container:{
        width:"75%",
        height:"100vh",
        px:["1rem","1.5rem",,"5rem"],
        position:"absolute",
        top:"80px",
        left:0,
        bg:"#fff",
        pt:"2rem",
        color:"dark",
        display:"flex",
        flexDir:"column",
        items:{
            fontSize:"1rem",
            fontWeight:"500",
            letterSpacing:"0.2",
            color:"dark",
            my:"1rem",
            borderY:"1px solid lightBlue",
            py:"0.3rem",

            _hover:{
                color:"blue",
            }
        }
    }
}