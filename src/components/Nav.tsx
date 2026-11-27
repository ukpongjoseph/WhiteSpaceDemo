import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EastIcon from '@mui/icons-material/East';
import logo from '../assets/Logo.png'
import { Box, Button } from '@mui/material'
import type { linkList } from '../types';
import { buttonColors, buttonStyles, cardColor } from '../styles'


type NavProps = {
    data: linkList[],
    style?: {
        width: {
            xs: string,
            md: string,
            lg: string
        },
        marginX: string
    }
}

export default function Nav({ data, style }: NavProps) {

    return (
        <>
            <Box sx={{backgroundColor: cardColor.background, width : "100%"}}>
                <Box sx={{
                    
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                    ...style
                }}>
                    <Box component="span">
                        <Box component="img" src={logo} />
                    </Box>
                    <Box component="div" style={{
                        display: "flex",
                        gap: 2,
                        color: "white"
                    }}>
                        {
                            data.map((link) => <Box>
                                <Box sx={{
                                    display: "flex",
                                    gap: 1.5,
                                    justifyContent: "center",
                                    px: 1
                                }} component={"p"}>
                                    {link.text}
                                    <Box component="span"><KeyboardArrowDownIcon /></Box>
                                </Box>
                            </Box>)
                        }
                        <Button sx={{ ...buttonStyles, backgroundColor: buttonColors.login }} component="button">Login</Button>
                        <Button sx={{ ...buttonStyles, color: "white", backgroundColor: buttonColors.normal }} component="button" endIcon={<EastIcon />}>Try Whitespace free</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}