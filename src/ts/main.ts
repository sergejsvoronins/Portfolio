import axios from "axios";
import { IGitHubResponse } from "./models/IGithubresponse";
import { GithubRepo } from "./models/githubrepo";


let projectsContainer : HTMLDivElement = document.getElementById("projectsContainer") as HTMLDivElement;

getRepos();

function getRepos(){
    axios
    .get<IGitHubResponse[]>("https://api.github.com/users/sergejsvoronins/repos")
    .then((response)=>{
        let githubRepoList: GithubRepo[] = response.data.map((repo:IGitHubResponse)=>{
            return new GithubRepo (repo.name, repo.html_url, repo.description)
        })
        console.log(githubRepoList);
        createRepoProjects(githubRepoList);
})
}
function createRepoProjects(someList: GithubRepo[]){

    for (let i=0; i<someList.length; i++){
        if (someList[i].description!==null){

            let repoContainer: HTMLDivElement = document.createElement("div");
            projectsContainer.appendChild(repoContainer);
            let repoTitle : HTMLHeadingElement =  document.createElement("h2");
            repoTitle.innerHTML = someList[i].title;
            repoContainer.appendChild(repoTitle);
            let repoUrl : HTMLAnchorElement = document.createElement("a");
            repoUrl.href = someList[i].url;
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
let projects = document.getElementById("projects") as HTMLDivElement;
let heroEl : HTMLDivElement = document.getElementById("header") as HTMLDivElement;
console.log(window.scrollY)
console.log(projects.offsetTop);
console.log(heroEl.offsetHeight)


window.addEventListener("scroll", titleColor)

function titleColor () {
    console.log(window.scrollY)
    if (window.scrollY > projects.offsetHeight+heroEl.offsetHeight){
        projects.style.backgroundColor = "yellow";
    }
    else {
        projects.style.backgroundColor = "white";
    }
}