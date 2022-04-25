import { extendTheme } from "@chakra-ui/react";

const themes = extendTheme({
    colors:{
        blue:"#4373AF",
        white:"#ffffff",
        lightBlue:"#F6F9FE",
        dark:"#0A0A0A",
        darkBg:"#1B1825",
        orange:"#FD743E",
        lightText:"#333333"
    },
    styles:{
        global:{
           "*, *::before, &::after":{
             boxSizing:"border-box",
             padding:0,
             margin:0,
            },
            body:{
                width:"100%",
                maxWidth:"1440px",   
                mx:"auto",
                textRendering: "optimizeLegibility",
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