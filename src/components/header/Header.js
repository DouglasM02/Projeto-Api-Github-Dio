import { Box } from "@mui/material";
import {Title, CustomTextField, CustomButton} from './styled'
import useGithubHooks from "../../hooks/githubHooks";
export function Header() {
    const {githubGetUser,} = useGithubHooks()
    return (
        <Box
        sx={{
            width:'100vw',
            backgroundColor: "#595758",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
        }}
        component="header">

            <Title>Github show User</Title>

            <Box
             component="form"
             sx={{
                 display:'flex',
                 flexDirection: 'row',
                 gap: '20px',
                 width: '85vw',
             }}
             >

                <CustomTextField sx={{
                alignSelf:"flex-start",
                flex: 1,
                width: '75%',
                }}
                id="writeUser"
                label="User"
                placeholder="Write the user of Github"
                />

                <CustomButton
                variant="contained"
                type="submit"

                onClick={
                    (event) =>{
                    event.preventDefault()
                    const doc = document.getElementById('writeUser')
                    githubGetUser(doc.value)

                }
                }
                >
                    Search
                </CustomButton>

            </Box>

        </Box>
    )
}
