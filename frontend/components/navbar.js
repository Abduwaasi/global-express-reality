import {Flex,Box,Text,Icon,Spacer, Slide, useDisclosure}from "@chakra-ui/react"
import {FaBars,FaTimes} from "react-icons/fa"
import Link from "next/link"
import MobileDrawer from "./mobileDrawer"
import { useState } from "react"
const Navbar =()=>{
   const [toggle, setToggle] = useState(false)
  const { isOpen, onToggle } = useDisclosure()
    return <Box sx={styles.container}>
    <Flex sx={styles.container.flexWrapper}>
        <Link href="/" passHref>
            <Text as ="a" sx={styles.container.flexWrapper.logo}>Classic Global <br/><span style={{color:"#4373AF"}}>Concept</span></Text>
        </Link>
        <Spacer/>
        <Flex sx={styles.container.flexWrapper.menu}>
            <Link href="/" passHref>
                <Text as="a" sx={styles.container.flexWrapper.menu.items}>Home</Text>
            </Link>
            <Link href="/" passHref>
                <Text as="a" sx={styles.container.flexWrapper.menu.items}>About</Text>
            </Link>
            <Link href="/" passHref>
                <Text as="a" sx={styles.container.flexWrapper.menu.items}>Services</Text>
            </Link>
            <Link href="/" passHref>
                <Text as="a" sx={styles.container.flexWrapper.menu.items}>Contact</Text>
            </Link>
        </Flex>
       { toggle&& <Box onClick={ ()=>setToggle(!toggle)}>
        <MobileDrawer/>
       </Box> }
        <Box sx={styles.container.flexWrapper.button} onClick={ ()=>setToggle(!toggle)}>  
        <Icon size="1.2rem" as={!toggle? FaBars:FaTimes}/>
        </Box>
    </Flex>
  
    </Box>
}

export default Navbar

const styles ={
    container:{
        width:"100%",
        maxWidth:"1440px",
        height:"80px",
        mx:"auto",
        px:["1rem","1.5rem",,"5rem"],
        position:"sticky",
        left:0,
        top:0,
        flexWrapper:{
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%",
            height:"100%",

            logo:{
                fontSize:["0.8rem",,"1rem"],
                color:"dark",
                fontWeight:"bold",
                lineHeight:"20px",
                // flex:1
              
            },
            menu:{
                display:["none",,,"flex"],
                // flex:3,
                justifyContent:"space-between",

                items:{
                    fontSize:"1rem",
                    fontWeight:"500",
                    letterSpacing:"0.2",
                    color:"dark",
                    mx:"20px",

                    _hover:{
                        color:"blue",
                    }
                }
            },
            button:{
                display:["flex",,,"none"],
                bg:"blue",
                color:"white",
                p:"8px",
                borderRadius:"8px",
                transition:"all .3s ease",
                _hover:{
                  transform:"scale(1.05)"
                }
                
               
            }
        }
    }
}