import { extendTheme } from "@chakra-ui/react";

const themes = extendTheme({
    colors:{
        blue:"#4373AF",
        white:"#ffffff",
        lightBlue:"#F6F9FE",
        dark:"#0A0A0A",
    },
    styles:{
        global:{
           "*, *::before, &::after":{
             boxSizing:"border-box",
             padding:0,
             margin:0,
            },
            body:{
                lineHeight:"base",
            },
            li:{
                listStyleType:"none"
            },
            a:{
                color:"unset"
            }

        }
    },
})


export default themes