import axios from "axios";
import { GithubRepo } from "../models/githubrepo";
import { IGitHubResponse } from "../models/IGithubresponse";

export function getRepos(){
  return  axios
    .get<IGitHubResponse[]>("https://api.github.com/users/sergejsvoronins/repos")
    .then((response)=>{
        
        let githubRepoList: GithubRepo[] = response.data.map((repo:IGitHubResponse)=>{
            return new GithubRepo (repo.name, repo.html_url, repo.description)
        }
        )
        return githubRepoList;
})
}