import {Text, Heading,Box} from "@chakra-ui/react"
import { fetchApi } from "../lib/api"
// import {Navbar} from "../components"
import Navbar from '../components/navbar'
import Hero from "../components/hero"
import MobileDrawer from "../components/mobileDrawer"
import Banner from "../components/banner"
// Asset imports


const Home =()=>{
  return <Box>
   <Banner
   purpose="rent a home"
   heading="rental home for everyone"
   description="explore from apartment, builder floors, villas and more..."
   buttonText="explore renting"
   image="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   />
   <Banner
   purpose="buy a home"
   heading="Find, Buy & Own Your Dream Home"
   description="explore from apartment, builder floors, villas and more..."
   buttonText="explore buying"
   image="https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   />
  </Box>
}

export default Home

// export async function getStaticProps(){
//   const response = await fetchApi("/lists", { populate: "*" })
//   console.log(response)
//   return {
//     props:{
//       data:response.data
//     },
//     revalidate: 1,
//   } 
// }