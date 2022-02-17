import { Box, Avatar, Skeleton } from "@mui/material";
import {Title3, Title4, Name, Link} from './styled'
import useGithubHooks from '../../hooks/githubHooks'
export function Card() {
    const {githubState} = useGithubHooks()
    const {hasUser, user, loading} = githubState

    return (
        <>

            {hasUser && (
                <>
                    {loading && (
                        <Skeleton variant="rectangular" animation="wave" width={400} />
                    )}

                    {!loading && (
                        <Box
                            component="section"
                            sx ={{
                                width: '400px',
                                display: 'flex',
                                backgroundColor: '#595758',
                                borderRadius:'10px',
                                padding: '10px',
                                border: '3px solid #75B9BE',
                                boxShadow: '3px 3px 8px rgba(0,0,0,0.5)'
                            }}
                            >
                            <Avatar
                            sx={{
                                height: 150,
                                width: 150,
                                backgroundColor: 'darkgray'
                            }}
                            src={user.avatar_url}
                            />

                            <Box
                                sx={{
                                    marginLeft: '20px',
                                }}
                            >
                                <Box
                                component="span"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '10px',
                                }}
                                >
                                    <Title3>Nickname:</Title3>
                                    <Name>{user.login}</Name>
                                </Box>

                                <Box
                                component="span"
                                sx={{
                                    display:'flex',
                                    alignItems:'baseline',
                                    gap:'10px',
                                    marginTop: '-20px',
                                }}
                                >
                                    <Title4>Link:</Title4>
                                    <Link href={user.html_url} target="_blank">Github</Link>
                                </Box>

                                <Box
                                    sx={{
                                        display:'flex',
                                        gap: '30px',
                                        marginTop: '-15px',
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display:'flex',
                                            flexDirection:'column',
                                            alignItems:'center',
                                        }}
                                    >
                                        <Title4>Followers:</Title4>
                                        <Name>{user.followers}</Name>
                                    </Box>

                                    <Box
                                        sx={{
                                            display:'flex',
                                            flexDirection:'column',
                                            alignItems:'center',
                                        }}
                                    >
                                        <Title4>Following:</Title4>
                                        <Name>{user.following}</Name>
                                    </Box>

                                </Box>

                            </Box>

                        </Box>
                    )}
                </>
            )}

            {!hasUser && (
                 <Box
                    component="section"
                    sx ={{
                        width: '400px',
                        display: 'flex',
                        backgroundColor: '#595758',
                        borderRadius:'10px',
                        padding: '10px',
                        border: '3px solid #75B9BE',
                        boxShadow: '3px 3px 8px rgba(0,0,0,0.5)'
                    }}
                    >
                        <Title3>There is no User yet</Title3>

                </Box>
            )}

        </>

    )
}
