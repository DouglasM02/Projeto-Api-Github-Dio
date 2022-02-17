import { Box } from "@mui/material"
import { Card } from "../card"
import {Container} from '../container'

export function Main() {
    return (
        <Box component="main"
            sx={{
                width:'100vw',
                height: '100vh',
                backgroundColor:'gray',
                display:'flex',
                flexDirection:'column',
                padding:'10px'
            }}
        >
            <Card />
            <Container />
        </Box>
    )
}
