import { Box } from "@mui/material"
import { animationKeyframe } from "./styles"

type StaggeredWrapperProps = {
    // component : React.ComponentType
    component : React.ReactElement
    // style? : React.CSSProperties,
    delay : number
}

export default function StaggeredWrapper({component : Component, delay} : StaggeredWrapperProps) {
    return (
        <>
            <Box component = 'div' sx={{
                // ...style,
                animation : `${animationKeyframe} 0.5s ease ${delay}ms both`,
            }}>
                {/* <Component/> */}
                {Component}
            </Box>
        </>
    )
}