import {Box, Paper, Divider} from '@mui/material'
import { Project, Name, Link, Paragraph } from './styled'
export function CardProjects(props){
    return (
        /*<Box
            sx={{
                width: '300px',
                height: '150px',
                padding: "10px",
                margin: "10px",
                backgroundColor: '#75B9BE',
                borderRadius:"10px",
                boxShador: '3px 3px 3px rgba(0,0,0,0.5)'
            }}
        >
            Olá
        </Box>*/
        <Paper
            elevation={4}
            sx={{
                width:"300px",
                height:"150px",
                padding: "8px",
                margin: "10px 0",
                backgroundColor: "#EFD09E"
            }}
        >

            <Box
                sx={{
                    marginBottom:"8px",
                }}
            >
                <Project>Project Name:</Project>
                <Name>{props.name}</Name>
            </Box>

            <Link href={props.html_url}>Link to the project</Link>
            <Divider sx={{marginTop: "5px", marginBottom: "5px",}} />
            <Paragraph>
                {props.description}
            </Paragraph>

        </Paper>
    )
}
