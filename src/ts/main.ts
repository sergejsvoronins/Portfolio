import axios from "axios";
import { IGitHubResponse } from "./models/IGithubresponse";
import { GithubRepo } from "./models/githubrepo";
import { getRepos } from "./services/githubService";


const headerTitleEl = document.getElementById("header__title") as HTMLHeadingElement;
const strTitle : string = headerTitleEl.innerHTML;
headerTitleEl.innerHTML = "";
const splitTitle : string [] = strTitle.split("");
for (let i=0; i<splitTitle.length; i++){
    headerTitleEl.innerHTML += "<span>"+splitTitle[i]+"</span>";
}
let char : number= 0;
let timer = setInterval(showChars, 50);

function showChars (){
    const span = headerTitleEl.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char===splitTitle.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
}



let projectsContainer : HTMLDivElement = document.getElementById("projectsContainer") as HTMLDivElement;

getRepos().then((repos)=>{
    createRepoProjects(repos);
})



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

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".chapterHeader");
hiddenElements.forEach((el) => observer.observe(el));