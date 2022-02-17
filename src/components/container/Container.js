import {Box,ButtonGroup} from '@mui/material'
import { useState } from 'react'
import {CardProjects} from '../card-projects'
import {CustomButton} from './styled'
import useGithubHooks from '../../hooks/githubHooks'
export function Container() {
    const {githubGetRepos, githubGetReposStarred, githubState} = useGithubHooks()
    const {user, repos, starredRepos} = githubState
    const [reposStatus,setReposStatus] = useState(false)
    const [starredReposStatus,setStarredReposStatus] = useState(false)

    return (

        <Box
            sx={{
                overflow:"scroll",
                marginTop: "55px",
                height:"500px",
                width: "95%",
                padding: '5px 10px',
                backgroundColor: "#595758"
            }}
        >
            <ButtonGroup>
                <CustomButton onClick={()=>{
                    githubGetRepos(user.login)
                    setReposStatus(true)
                    setStarredReposStatus(false)
                    //console.log(reposStatus,starredReposStatus,repos)
                }}>Repos</CustomButton>
                <CustomButton
                    onClick={()=>{
                        githubGetReposStarred(user.login)
                        setStarredReposStatus(true)
                        setReposStatus(false)
                        //console.log(starredReposStatus,reposStatus,starredRepos)
                    }}
                    sx={{borderLeft:"none",}}>Starred Repos</CustomButton>
            </ButtonGroup>
            {/*name, description, html_url */}
                {reposStatus && (
                    <Box
                        sx={{
                            display:"flex",
                            flexWrap:"wrap",
                            gap:"10%",
                        }
                        }
                    >
                        {repos.map((repo) => {
                            return (
                                <CardProjects name={repo.name} description={repo.description} html_url={repo.html_url}/>
                            )
                        })}
                    </Box>
                )}

                {starredReposStatus && (
                    <Box
                        sx={{
                            display:"flex",
                            flexWrap:"wrap",
                            gap:"10px"
                        }}
                    >
                        {starredRepos.map((starredRepo) => {
                            return (
                                <CardProjects name={starredRepo.name} description={starredRepo.description} html_url={starredRepo.html_url}/>
                            )
                        })}
                    </Box>
                )}
        </Box>

    )
}
