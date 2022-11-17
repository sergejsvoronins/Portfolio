import axios from "axios";
import { GithubRepo } from "./models/githubrepo";

let projectsContainer : HTMLDivElement = document.getElementById("projectsContainer") as HTMLDivElement;

getRepos();

function getRepos(){
    axios
.get("https://api.github.com/users/sergejsvoronins/repos")
.then((response)=>{
    
    console.log(response.data);
    
    let githubRepoList: GithubRepo[] = response.data.map((repo:GithubRepo)=>{
        return new GithubRepo (repo.name, repo.html_url, repo.description)
    })
    
    createRepoProjects(githubRepoList);
    
})
}
function createRepoProjects(someList: GithubRepo[]){

    for (let i=0; i<someList.length; i++){
        if (someList[i].description!==null){

            let repoContainer: HTMLDivElement = document.createElement("div");
            projectsContainer.appendChild(repoContainer);
            let repoTitle : HTMLHeadingElement =  document.createElement("h2");
            repoTitle.innerHTML = someList[i].name;
            repoContainer.appendChild(repoTitle);
            let repoUrl : HTMLAnchorElement = document.createElement("a");
            repoUrl.href = someList[i].html_url;
            repoUrl.target = "_blank";
            repoUrl.innerHTML = "link to github"
            repoContainer.appendChild(repoUrl);
            let repoDescription : HTMLParagraphElement = document.createElement("p");
            repoContainer.appendChild(repoDescription);
            
            if (someList[i].description.indexOf("html")!==-1){
                    repoDescription.innerHTML += "<i class='fa-brands fa-html5'></i> ";
            }
            if (someList[i].description.indexOf("scss")!==-1){
                    repoDescription.innerHTML += "<i class='fa-brands fa-sass'></i> ";
            }
            if (someList[i].description.indexOf("js")!==-1){
                    repoDescription.innerHTML += "<i class='fa-brands fa-js'></i> ";
            }
        }
    }
    
}