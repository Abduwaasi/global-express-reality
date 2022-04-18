import {Text, Heading,Box} from "@chakra-ui/react"
import { fetchApi } from "../lib/api"
// import {Navbar} from "../components"
import Navbar from '../components/navbar'
const Home =()=>{
  return <Box>
   <Navbar/>
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