import React, {createContext, useCallback, useState} from 'react'
import { api } from '../services/apiGithub'

export const GithubContext = createContext({
    loading:false,
    user:{},
    repos:[],
    starredRepos:[],
})


export default function GithubProvider({children}) {
    const [githubState,setGithubState] = useState({
        hasUser:false,
        loading:false,
        user: {
            login: undefined,
            avatar_url:undefined,
            html_url:undefined,
            followers:undefined,
            following: undefined,
        },
        repos:[],
        starredRepos:[],
    })

    function githubGetUser(username) {

        setGithubState((prevState)=>({
            ...prevState,
            loading: !prevState.loading
        }))

        api.get(`${username}`)
        .then(({data})=>{
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    login: data.login,
                    avatar_url: data.avatar_url,
                    html_url: data.html_url,
                    followers: data.followers,
                    following: data.following,
                }
            }))
        })
        .finally(()=>{
            setGithubState((prevState)=>({
                ...prevState,
                loading: !prevState.loading,
            }))
        })
    }

    function githubGetRepos(username) {
        api.get(`${username}/repos`)
        .then(({data}) => {
            setGithubState((prevState)=> ({
            ...prevState,
            repos: data
            }))
        })
    }

    function githubGetReposStarred(username) {
        api.get(`${username}/starred`)
        .then(({data}) => {
            setGithubState((prevState)=> ({
            ...prevState,
            starredRepos: data
            }))
        })
    }

    const contextValue = {
        githubState,
        githubGetUser: useCallback((username) => githubGetUser(username),[]),
        githubGetRepos: useCallback((username)=> githubGetRepos(username),[]),
        githubGetReposStarred: useCallback((username)=> githubGetReposStarred(username),[])
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )

}
