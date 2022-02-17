import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

export default function useGithubHooks(){
    const {githubState, githubGetUser,githubGetRepos,githubGetReposStarred} = useContext(GithubContext)

    return {githubState, githubGetUser,githubGetRepos,githubGetReposStarred}
}
